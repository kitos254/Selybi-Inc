import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Database, Server, Shield, Zap, BarChart3, RefreshCw } from "lucide-react";
import heroBackground from "@/assets/hero-services.jpg";

const DatabaseAdministrationPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 to-navy-deep/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/20 rounded-full backdrop-blur-sm border border-primary/30">
                <Database className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Database Administration
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Database design & optimization services to ensure your data is secure, accessible, and performing at its best
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-black">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-background">
        <div className="container mx-auto px-4 py-16">

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Server className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Database Design</CardTitle>
                    <CardDescription>Optimized schema & architecture</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We design efficient database schemas that scale with your business and ensure data integrity.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Zap className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Performance Tuning</CardTitle>
                    <CardDescription>Query optimization & indexing</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Optimize database performance through query tuning, indexing strategies, and resource optimization.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Security & Backup</CardTitle>
                    <CardDescription>Data protection & recovery</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Implement robust security measures and backup strategies to protect your valuable data.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Technologies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Database Technologies</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "PostgreSQL", "MySQL", "MongoDB", "Redis", "SQL Server", "Oracle", 
                "MariaDB", "SQLite", "Elasticsearch", "InfluxDB", "Cassandra", "DynamoDB",
                "Firebase", "Supabase", "PlanetScale", "Amazon RDS", "Azure SQL", "Google Cloud SQL"
              ].map((tech) => (
                <Badge key={tech} variant="secondary" className="px-4 py-2 text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Services Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Services</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Database Design & Modeling</h3>
                    <p className="text-muted-foreground">Efficient schema design and data modeling</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Performance Optimization</h3>
                    <p className="text-muted-foreground">Query tuning and performance monitoring</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Database Migration</h3>
                    <p className="text-muted-foreground">Seamless migration between platforms</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Backup & Recovery</h3>
                    <p className="text-muted-foreground">Automated backup and disaster recovery</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our DBA Services</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <BarChart3 className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Performance Monitoring</h3>
                    <p className="text-muted-foreground">24/7 monitoring and alerting</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <RefreshCw className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Automated Maintenance</h3>
                    <p className="text-muted-foreground">Scheduled maintenance and updates</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Security Best Practices</h3>
                    <p className="text-muted-foreground">Industry-standard security measures</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Database className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Scalability Planning</h3>
                    <p className="text-muted-foreground">Future-proof database architecture</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary/5 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Need Professional Database Management?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let our experienced database administrators optimize your data infrastructure for peak performance and reliability.
            </p>
            <Button size="lg">
              Consult With Our DBAs
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DatabaseAdministrationPage;
