import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, CheckCircle, Upload, Tag, ShieldCheck, Download,
  Users, Database, Image, FileText, Video, Mic, Layers3,
  ExternalLink, Cpu, GitBranch, Zap,
} from "lucide-react";

const PlatformPage = () => {
  const annotationTypes = [
    { icon: FileText, title: "Text Annotation", desc: "Spans, NER, intent classification, sentiment labeling, relation extraction.", color: "bg-primary/10 border-primary/20 text-primary" },
    { icon: Image, title: "Image Annotation", desc: "Bounding boxes, polygons, semantic segmentation, keypoints, instance masks.", color: "bg-amber-500/10 border-amber-500/20 text-amber-700" },
    { icon: Video, title: "Video Tracking", desc: "Object tracking across frames, temporal annotation, action recognition labeling.", color: "bg-primary/10 border-primary/20 text-primary" },
    { icon: Mic, title: "Audio Labeling", desc: "Speech transcription, speaker diarization, sound event classification.", color: "bg-purple-500/10 border-purple-500/20 text-purple-700" },
    { icon: Layers3, title: "3D Annotation", desc: "LiDAR point cloud annotation, 3D bounding boxes, depth estimation labeling.", color: "bg-primary/10 border-primary/20 text-primary" },
    { icon: Database, title: "Dataset Engineering", desc: "Data cleaning, deduplication, schema design, and training-ready export pipelines.", color: "bg-emerald-500/10 border-emerald-500/20 text-emerald-700" },
  ];

  const workflowSteps = [
    { icon: Upload, num: "01", title: "Upload", desc: "Connect your data source — S3, GCS, local files, or our API. Any format, any scale." },
    { icon: Tag, num: "02", title: "Annotate", desc: "Assign tasks to your team or Selybi's workforce. Real-time collaborative workspace." },
    { icon: ShieldCheck, num: "03", title: "Review", desc: "Multi-tier QA — automated checks, consensus scoring, expert review layers." },
    { icon: Download, num: "04", title: "Export", desc: "One-click export in COCO, JSON, YOLO, custom formats. ML-framework ready." },
  ];

  const collaborationModes = [
    {
      icon: Users,
      title: "Your Own Team",
      desc: "Invite unlimited team members, set roles, and manage annotation tasks with granular permissions.",
      items: ["Role-based access", "Team dashboards", "Task assignment", "Progress tracking"],
    },
    {
      icon: Cpu,
      title: "Selybi Workforce",
      desc: "Tap into our trained annotator network for burst capacity or fully managed annotation projects.",
      items: ["Domain-expert annotators", "SLA-backed delivery", "Managed QA pipeline", "Scale on demand"],
    },
    {
      icon: GitBranch,
      title: "Hybrid Mode",
      desc: "Combine your team with Selybi's workforce. You control the workflow, we augment the capacity.",
      items: ["Mixed team management", "Unified workspace", "Flexible billing", "Custom workflows"],
    },
  ];

  const exportFormats = [
    { name: "COCO JSON", desc: "Computer vision standard" },
    { name: "YOLO", desc: "Object detection ready" },
    { name: "Pascal VOC", desc: "XML annotation format" },
    { name: "Custom JSON", desc: "Your own schema" },
    { name: "CSV / TSV", desc: "NLP & tabular data" },
    { name: "TFRecord", desc: "TensorFlow native" },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 bg-[#f7f6f2]">

        {/* Soft background gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-[-120px] right-[-100px] w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
            style={{ background: 'radial-gradient(circle, #dbeafe 0%, transparent 70%)' }} />

          <div className="absolute bottom-[-120px] left-[-100px] w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
            style={{ background: 'radial-gradient(circle, #ede9fe 0%, transparent 70%)' }} />
        </div>

        {/* Subtle grid texture */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#111_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

          <div className="max-w-3xl">

            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full 
        bg-white/70 border border-gray-200 text-xs font-medium text-gray-600 tracking-wide mb-8 shadow-sm">
              <Zap className="h-3.5 w-3.5 text-blue-500" />
              LizaLab Platform
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 leading-[1.05] tracking-tight mb-6">
              The Data Engine for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                AI Systems
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
              LizaLab is Selybi’s infrastructure for building high-quality training data.
              Designed for teams that need scalable annotation, precision workflows, and production-ready datasets.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">

              <Button
                size="lg"
                className="rounded-full px-8 py-6 font-medium bg-gray-900 text-white hover:bg-black shadow-md"
                asChild
              >
                <a href="https://lizalab.selybi.com" target="_blank" rel="noopener noreferrer">
                  Try LizaLab <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 font-medium border-gray-300 text-gray-800 bg-white hover:bg-gray-50"
                asChild
              >
                <Link to="/contact">
                  Start Annotation Project
                </Link>
              </Button>

            </div>
          </div>
        </div>
      </section>

      {/* Annotation Types */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label mb-4">Annotation Types</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Every Data Modality, Covered
            </h2>
            <p className="mt-4 text-muted-foreground">LizaLab handles all annotation types your AI pipeline requires — in one unified platform.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {annotationTypes.map((type) => (
              <div key={type.title} className="ai-card p-6 bg-white border border-border/60 group">
                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 ${type.color}`}>
                  <type.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-foreground text-base mb-2">{type.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label mb-4">Workflow</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Four Steps to Training-Ready Data
            </h2>
            <p className="mt-4 text-muted-foreground">A streamlined process from raw data to export-ready annotated datasets.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, i) => (
              <div key={step.num} className="relative">
                {i < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px"
                    style={{ background: 'linear-gradient(90deg, hsl(221,83%,53%,0.3), hsl(38,92%,50%,0.25))' }} />
                )}
                <div className="ai-card p-6 bg-white/70 border border-white/80 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/8 border border-primary/15 flex items-center justify-center mb-4">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <span className="text-xs font-bold text-primary/60 tracking-widest mb-1">{step.num}</span>
                  <h3 className="font-bold text-foreground text-base mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label mb-4">Collaboration</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Work Your Way
            </h2>
            <p className="mt-4 text-muted-foreground">Use your own team, Selybi's annotators, or a hybrid — all in one workspace.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {collaborationModes.map((mode, i) => (
              <div key={mode.title} className={`ai-card p-7 border ${i === 1 ? 'bg-primary/4 border-primary/20 shadow-lg shadow-primary/5' : 'bg-white border-border/60'}`}>
                {i === 1 && <div className="section-label mb-4 text-center">Recommended</div>}
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${i === 1 ? 'bg-primary/10 border-primary/20 text-primary' : 'bg-muted border-border text-foreground/60'}`}>
                  <mode.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{mode.title}</h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{mode.desc}</p>
                <ul className="space-y-2">
                  {mode.items.map(item => (
                    <li key={item} className="flex items-center gap-2.5 text-sm">
                      <CheckCircle className={`h-4 w-4 flex-shrink-0 ${i === 1 ? 'text-primary' : 'text-muted-foreground'}`} />
                      <span className="text-foreground/75">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Formats */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label mb-4 block">Export Formats</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Your Data, Your Format
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Export annotated datasets directly into any ML framework or pipeline format. COCO, YOLO, custom JSON — or connect via our REST API for live streaming exports.
              </p>
              <Button className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-md shadow-primary/20" asChild>
                <Link to="/contact">Start Annotating <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {exportFormats.map((fmt) => (
                <div key={fmt.name} className="ai-card p-4 bg-white border border-border/60 text-center">
                  <p className="font-bold text-foreground text-sm">{fmt.name}</p>
                  <p className="text-muted-foreground text-xs mt-1">{fmt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'hsl(222,47%,9%)' }}>
        <div className="absolute inset-0 bg-dots-pattern opacity-[0.05]" />
        <div className="relative max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Ready to Power Your AI with Clean Data?
          </h2>
          <p className="text-white/50 mb-8">Start a free annotation project or talk to our team about your data pipeline.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="rounded-full px-8 font-semibold bg-white text-foreground hover:bg-white/95 shadow-xl" asChild>
              <a href="https://lizalab.selybi.com" target="_blank" rel="noopener noreferrer">
                Open LizaLab <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 font-semibold border-white/20 text-white bg-white/6 hover:bg-white/12" asChild>
              <Link to="/contact">Talk to Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlatformPage;
