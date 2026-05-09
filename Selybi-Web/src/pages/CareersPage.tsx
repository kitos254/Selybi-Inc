import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, MapPin, Clock, Users, Briefcase,
  Cpu, Database, Code2, Globe, ChevronRight,
} from "lucide-react";

const CareersPage = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior AI/ML Engineer",
      department: "AI Engineering",
      type: "Full-time",
      location: "Remote (Global)",
      icon: Cpu,
      description: "Build and ship production AI systems — from LLM-powered applications to computer vision pipelines. You'll work across the full ML lifecycle: data ingestion, training, evaluation, and deployment.",
      requirements: [
        "3+ years ML engineering experience",
        "Proficiency in Python, PyTorch / TensorFlow",
        "Experience with LLM APIs (OpenAI, Hugging Face)",
        "MLOps: model serving, monitoring, versioning",
        "Strong software engineering fundamentals",
      ],
      nice: ["LangChain / agentic systems", "Computer vision pipeline experience", "Cloud: AWS, GCP, or Azure"],
    },
    {
      id: 2,
      title: "Annotation Platform Engineer",
      department: "LizaLab Platform",
      type: "Full-time",
      location: "Remote (Global)",
      icon: Database,
      description: "Help build and scale LizaLab — our annotation platform that powers AI training pipelines. You'll work on the platform's core infrastructure, tooling, and workflow engine.",
      requirements: [
        "2+ years backend or full-stack engineering",
        "React and Node.js or Python API development",
        "Experience with data pipelines or ETL",
        "Familiarity with annotation tools (CVAT, Labelbox, etc.)",
        "Strong product thinking",
      ],
      nice: ["WebGL or Canvas-based annotation UIs", "Experience with COCO, YOLO formats", "Real-time collaboration (CRDTs, WebSockets)"],
    },
    {
      id: 3,
      title: "Full-Stack Software Engineer",
      department: "Product Engineering",
      type: "Full-time",
      location: "Remote (Global)",
      icon: Code2,
      description: "Design and build client-facing AI-powered web and mobile applications. You'll collaborate directly with clients and internal teams to ship polished, production-grade products.",
      requirements: [
        "3+ years full-stack experience",
        "React / Next.js frontend expertise",
        "Node.js, Python, or equivalent backend",
        "REST & GraphQL API design",
        "Strong UI/UX sensibility",
      ],
      nice: ["React Native for mobile", "TypeScript-first codebase experience", "Design system ownership"],
    },
    {
      id: 4,
      title: "AI Data Annotation Lead",
      department: "Data Operations",
      type: "Full-time",
      location: "Remote (Global)",
      icon: Database,
      description: "Lead annotation projects end-to-end — from workforce management to quality control. You'll own the quality of training datasets delivered to AI clients.",
      requirements: [
        "2+ years in data annotation or AI operations",
        "Experience managing annotation teams",
        "Understanding of ML training workflows",
        "Hands-on with annotation tools (LizaLab, CVAT, Prodigy)",
        "Strong attention to detail and QA instincts",
      ],
      nice: ["Domain experience in healthcare or AV", "Experience with Inter-Annotator Agreement (IAA)", "Python scripting for automation"],
    },
    {
      id: 5,
      title: "AI Product Researcher",
      department: "Research & Growth",
      type: "Full-time",
      location: "Remote (Global)",
      icon: Globe,
      description: "Research AI product opportunities, analyze market trends, and support the development of new AI services and LizaLab features. Bridge research and product thinking.",
      requirements: [
        "Background in AI, ML, or data science",
        "Strong research and analytical skills",
        "Ability to translate technical concepts for business audiences",
        "Excellent written communication",
      ],
      nice: ["Prior experience in AI startups", "Technical product management background", "Published research or blog writing"],
    },
    {
      id: 6,
      title: "AI Solutions Consultant",
      department: "Client Solutions",
      type: "Full-time",
      location: "Remote (Global)",
      icon: Briefcase,
      description: "Work closely with enterprise clients to scope, design, and deliver AI annotation and software projects. Act as the bridge between client requirements and Selybi's engineering teams.",
      requirements: [
        "2+ years in technical sales, consulting, or AI project management",
        "Understanding of ML workflows and data pipelines",
        "Strong client communication and project scoping skills",
        "Experience writing technical proposals",
      ],
      nice: ["Experience selling data or AI services", "Domain knowledge in healthcare, finance, or mobility", "CRM and project management tools"],
    },
  ];

  const perks = [
    "100% Remote — work from anywhere",
    "Flexible working hours",
    "Competitive equity + salary",
    "Learning & development budget",
    "Work on real-world AI systems",
    "Direct impact on LizaLab platform",
    "Small, senior team — low bureaucracy",
    "Annual team retreats",
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'hsl(222,47%,9%)' }} />
        <div className="absolute inset-0 bg-dots-pattern opacity-[0.05]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, hsl(221,83%,53%,0.2) 0%, transparent 70%)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/8 border border-white/12 text-xs font-semibold text-white/60 tracking-widest uppercase mb-6">
              <Users className="h-3.5 w-3.5 text-amber-400" />
              We're Hiring
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Build the Future of{" "}
              <span style={{
                background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>AI Infrastructure</span>
            </h1>
            <p className="text-white/55 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
              Join a small, senior team building LizaLab and AI systems that power real-world applications. Remote-first, ambitious, and growing fast.
            </p>
            <div className="flex gap-3 flex-wrap">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/12 text-xs text-white/60">
                <MapPin className="h-3.5 w-3.5" /> 100% Remote
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/12 text-xs text-white/60">
                <Users className="h-3.5 w-3.5" /> Small Senior Team
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/12 text-xs text-white/60">
                <Cpu className="h-3.5 w-3.5" /> AI-First Company
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-14 bg-white border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {perks.map(perk => (
              <div key={perk} className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/6 border border-primary/15 text-sm text-foreground/70">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                {perk}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="section-label mb-3 block">Open Roles</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {jobs.length} Open Positions
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {jobs.map((job) => (
              <details key={job.id} className="group ai-card bg-white border border-border/60 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center flex-shrink-0">
                      <job.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-base">{job.title}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-muted-foreground">{job.department}</span>
                        <span className="text-border">·</span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3" /> {job.location}
                        </span>
                        <span className="text-border">·</span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" /> {job.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-open:rotate-90 flex-shrink-0" />
                </summary>

                <div className="px-6 pb-6 border-t border-border/50 pt-5 grid lg:grid-cols-2 gap-8">
                  <div>
                    <p className="text-foreground/75 leading-relaxed mb-6">{job.description}</p>
                    <div className="mb-5">
                      <p className="text-xs font-semibold text-foreground/50 tracking-widest uppercase mb-3">Requirements</p>
                      <ul className="space-y-2">
                        {job.requirements.map(req => (
                          <li key={req} className="flex items-start gap-2.5 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-foreground/75">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {job.nice.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold text-foreground/50 tracking-widest uppercase mb-3">Nice to Have</p>
                        <ul className="space-y-2">
                          {job.nice.map(n => (
                            <li key={n} className="flex items-start gap-2.5 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{n}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="ai-card p-5 bg-primary/4 border border-primary/15">
                      <p className="text-sm font-semibold text-foreground mb-2">Interested?</p>
                      <p className="text-muted-foreground text-sm mb-4">
                        Send your resume and a brief note about why you're a good fit for this role.
                      </p>
                      <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-white font-semibold" asChild>
                        <a href={`mailto:careers@selybi.com?subject=Application: ${job.title}`}>
                          Apply for This Role <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">
                      Send applications to{" "}
                      <a href="mailto:careers@selybi.com" className="text-primary hover:underline">careers@selybi.com</a>
                    </p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Don't see your role */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
            <Users className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Don't See Your Role?
          </h2>
          <p className="text-muted-foreground mb-8">
            We're always looking for exceptional people. Send us your CV and a note about how you'd contribute to Selybi's mission.
          </p>
          <Button className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-md shadow-primary/20" asChild>
            <a href="mailto:careers@selybi.com">
              Send Open Application <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
