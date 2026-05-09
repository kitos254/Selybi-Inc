import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, CheckCircle, Bot, Database, Code2,
  Cpu, Layers, Zap, Shield, Users, ChevronRight,
} from "lucide-react";

const SolutionsPage = () => {
  const solutions = [
    {
      icon: Bot,
      label: "AI Systems Development",
      title: "Custom AI Systems & Agents",
      desc: "We design and build complete AI systems — from architecture through training, evaluation, and production deployment. Our AI-first engineering approach delivers systems that actually work at scale.",
      features: [
        "End-to-end AI system design",
        "LLM integration & fine-tuning",
        "Computer vision pipelines",
        "AI agent & automation systems",
        "MLOps & model monitoring",
        "API & SDK development",
      ],
      cta: "Build Your AI System",
      accent: "primary",
      gradient: "from-blue-500/8 to-primary/4",
    },
    {
      icon: Database,
      label: "Data Infrastructure",
      title: "Data Annotation & Pipeline Services",
      desc: "Powered by LizaLab, our annotation services deliver training-ready datasets at any scale. We handle the full data pipeline — from ingestion to quality-assured, export-ready labels.",
      features: [
        "Image, text, video, audio annotation",
        "LizaLab platform access",
        "Managed annotator workforce",
        "Quality assurance & consensus",
        "Dataset curation & cleaning",
        "Custom export formats",
      ],
      cta: "Start Annotation Project",
      accent: "gold",
      gradient: "from-amber-500/8 to-yellow-400/4",
    },
    {
      icon: Code2,
      label: "Custom Software",
      title: "AI-First Software Development",
      desc: "Modern software built from the ground up with AI capabilities embedded. From web platforms to enterprise tools — everything we build is designed to be intelligent, scalable, and maintainable.",
      features: [
        "Full-stack web applications",
        "Mobile apps (iOS & Android)",
        "Enterprise software & portals",
        "SaaS platform development",
        "API design & integration",
        "Cloud infrastructure & DevOps",
      ],
      cta: "Start a Software Project",
      accent: "primary",
      gradient: "from-violet-500/8 to-purple-400/4",
    },
  ];

  const stats = [
    { value: "100+", label: "Projects Delivered", icon: Layers },
    { value: "10M+", label: "Labels Annotated", icon: Database },
    { value: "50+", label: "Clients Served", icon: Users },
    { value: "99%", label: "Delivery Rate", icon: Shield },
  ];

  const processSteps = [
    { num: "01", title: "Discovery Call", desc: "We map your data needs, AI goals, and technical constraints." },
    { num: "02", title: "Solution Design", desc: "We architect the right AI pipeline or software system for your use case." },
    { num: "03", title: "Build & Iterate", desc: "Agile development with regular demos and tight feedback loops." },
    { num: "04", title: "Deploy & Support", desc: "Production-grade deployment with ongoing monitoring and support." },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* HERO */}
      <section className="relative bg-white py-28 overflow-hidden">

        {/* subtle background texture */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:18px_18px]" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">

          {/* Label */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-gray-200 bg-white text-xs tracking-wide text-gray-500 mb-8">
            Solutions
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 leading-[1.05] tracking-tight mb-6">
            AI Systems, <span className="text-gray-500">Data & Software</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-500 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            End-to-end AI capabilities — from structured data annotation in LizaLab
            to building and deploying production-grade AI systems.
          </p>

          {/* CTA */}
          <Button
            className="rounded-full px-7 py-6 bg-gray-900 text-white hover:bg-black font-medium shadow-sm"
            asChild
          >
            <Link to="/contact">
              Start a Project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          {/* Inline stats (clean + integrated, not separate section) */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-10 text-center">

            {stats.map((s) => (
              <div key={s.label} className="space-y-2">

                <div className="flex justify-center">
                  <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
                    <s.icon className="h-4 w-4 text-gray-500" />
                  </div>
                </div>

                <div className="text-2xl font-semibold text-gray-900">
                  {s.value}
                </div>

                <div className="text-xs text-gray-400 uppercase tracking-wide">
                  {s.label}
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
      {/* Solutions */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-background to-background/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(251,191,36,0.06),transparent_40%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {solutions.map((sol) => (
            <div
              key={sol.title}
              className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-white/10 to-white/5 hover:from-primary/40 hover:to-amber-400/30 transition-all duration-500"
            >
              <div className="rounded-3xl bg-background/80 backdrop-blur-xl p-8 lg:p-12 border border-white/10 group-hover:border-white/20 transition">

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                  {/* LEFT */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center 
                  bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 
                  shadow-lg shadow-primary/10 group-hover:scale-105 transition">
                        <sol.icon className="h-6 w-6 text-primary" />
                      </div>

                      <span className="text-xs tracking-widest uppercase text-muted-foreground">
                        {sol.label}
                      </span>
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight">
                      {sol.title}
                    </h2>

                    <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                      {sol.desc}
                    </p>

                    <Button
                      className="rounded-full px-6 py-5 text-sm font-semibold 
                bg-gradient-to-r from-primary to-primary/80 
                hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/30 transition-all"
                      asChild
                    >
                      <Link to="/contact">
                        {sol.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  {/* RIGHT */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {sol.features.map((f) => (
                      <div
                        key={f}
                        className="flex items-start gap-3 p-4 rounded-xl 
                  bg-white/5 border border-white/10 
                  hover:bg-white/10 transition"
                      >
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-sm text-foreground/80">{f}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
