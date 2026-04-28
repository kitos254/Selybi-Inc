import mongoose from 'mongoose';

const BACKUP_INTERVAL_MS = 20 * 60 * 1000;

const mongoOptions = {
  serverSelectionTimeoutMS: 10000,
};

let backupIntervalRef = null;
let lastBackupAt = null;
let isBackupRunning = false;

const getMainMongoUri = () => process.env.MONGODB_URI_MAIN || process.env.MONGODB_URI;
const getBackupMongoUri = () => process.env.MONGO_URI_BACKUP1;

export async function connectDatabaseWithFallback() {
  const mainMongoUri = getMainMongoUri();
  const backupMongoUri = getBackupMongoUri();

  if (!mainMongoUri && !backupMongoUri) {
    throw new Error('No MongoDB URI configured. Set MONGODB_URI_MAIN and/or MONGO_URI_BACKUP1');
  }

  if (mainMongoUri) {
    try {
      await mongoose.connect(mainMongoUri, mongoOptions);
      console.log('✅ Connected to MongoDB (main)');
      return { active: 'main', uri: mainMongoUri };
    } catch (mainError) {
      console.error('❌ Failed to connect to main MongoDB URI:', mainError.message);
    }
  }

  if (backupMongoUri) {
    await mongoose.connect(backupMongoUri, mongoOptions);
    console.log('✅ Connected to MongoDB (backup fallback)');
    return { active: 'backup', uri: backupMongoUri };
  }

  throw new Error('Unable to connect to MongoDB. Main failed and no backup URI is configured.');
}

async function backupMainToSecondary() {
  const mainMongoUri = getMainMongoUri();
  const backupMongoUri = getBackupMongoUri();

  if (!mainMongoUri || !backupMongoUri) {
    console.warn('⚠️ Backup skipped: MONGODB_URI_MAIN or MONGO_URI_BACKUP1 is not configured.');
    return;
  }

  if (isBackupRunning) {
    console.warn('⚠️ Previous backup is still running. Skipping this cycle.');
    return;
  }

  isBackupRunning = true;
  const startedAt = new Date();
  const filterSince = lastBackupAt;

  const mainConn = mongoose.createConnection(mainMongoUri, mongoOptions);
  const backupConn = mongoose.createConnection(backupMongoUri, mongoOptions);

  try {
    await Promise.all([mainConn.asPromise(), backupConn.asPromise()]);

    const collections = await mainConn.db.listCollections({}, { nameOnly: true }).toArray();
    let copiedDocuments = 0;

    for (const { name } of collections) {
      const sourceCollection = mainConn.db.collection(name);
      const backupCollection = backupConn.db.collection(name);

      const query = filterSince
        ? {
            $or: [
              { updatedAt: { $gte: filterSince } },
              { createdAt: { $gte: filterSince } },
            ],
          }
        : {};

      const docs = await sourceCollection.find(query).toArray();
      if (!docs.length) {
        continue;
      }

      const operations = docs.map((doc) => ({
        replaceOne: {
          filter: { _id: doc._id },
          replacement: doc,
          upsert: true,
        },
      }));

      await backupCollection.bulkWrite(operations, { ordered: false });
      copiedDocuments += docs.length;
    }

    lastBackupAt = startedAt;
    console.log(
      `✅ Backup sync complete (${copiedDocuments} docs) at ${new Date().toISOString()}`
    );
  } catch (error) {
    console.error('❌ Backup sync failed:', error.message);
  } finally {
    await Promise.allSettled([mainConn.close(), backupConn.close()]);
    isBackupRunning = false;
  }
}

export function startBackupScheduler() {
  if (backupIntervalRef) {
    return;
  }

  backupMainToSecondary().catch((error) => {
    console.error('❌ Initial backup sync failed:', error.message);
  });

  backupIntervalRef = setInterval(() => {
    backupMainToSecondary().catch((error) => {
      console.error('❌ Scheduled backup sync failed:', error.message);
    });
  }, BACKUP_INTERVAL_MS);

  if (typeof backupIntervalRef.unref === 'function') {
    backupIntervalRef.unref();
  }

  console.log('🕒 Backup scheduler started: main -> backup every 20 minutes');
}
