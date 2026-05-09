import { Link } from "react-router-dom";
import {
  ExternalLink, ArrowRight, Smartphone, Globe, Database,
  Briefcase, CheckCircle, Tag, Brain, Code2, Server, Cpu,
} from "lucide-react";

const H = { fontFamily: "'Space Grotesk', sans-serif" };

const Wave = ({ from, to, flip }: { from: string; to: string; flip?: boolean }) => (
  <div className="relative h-10 overflow-hidden" style={{ background: flip ? to : from }}>
    <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="absolute inset-0 w-full h-full"
      style={{ transform: flip ? 'scaleY(-1)' : undefined }}>
      <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill={flip ? from : to} />
    </svg>
  </div>
);

const ProjectsPage = () => {
  const products = [
    {
      title: "LizaLab AI",
      category: "AI Data Annotation Platform",
      description: "Professional-grade annotation infrastructure for training AI models. Bounding boxes, text spans, video tracking, 3D point clouds — all with built-in quality assurance and team collaboration.",
      tech: ["React", "Python", "TensorFlow", "AWS", "PostgreSQL"],
      features: ["Multi-modal annotation", "Quality assurance tools", "Team collaboration", "Export to ML formats"],
      link: "https://lizalab.selybi.com/",
      favicon: "https://lizalab.selybi.com/lizalabLogo.png",
      tag: "Annotation Platform",
      accent: "#eab308",
    },
    {
      title: "Edora",
      category: "Educational AI Platform",
      description: "AI-powered learning platform with personalised paths, real-time collaboration, and advanced analytics. Built for institutions that need scale without sacrificing the learner experience.",
      tech: ["React", "TypeScript", "Node.js", "AI/ML", "Cloud"],
      features: ["AI-powered learning paths", "Real-time collaboration", "Advanced analytics", "Mobile-first design"],
      link: "https://edora.selybi.com",
      favicon: "https://edora.selybi.com/edoraLogo.png",
      tag: "AI Systems",
      accent: "#3b82f6",
    },
  ];

  const services = [
    {
      icon: Tag,
      title: "Data Annotation",
      desc: "End-to-end annotation workflows via LizaLab — images, video, text, audio, 3D point clouds. Managed teams, quality gates, and ML-ready export.",
      tags: ["BBOX", "Segmentation", "NLP", "3D LiDAR"],
      accent: "#eab308",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      desc: "Custom AI systems, ML model development, LLM integrations, and intelligent agents built for production environments.",
      tags: ["LLMs", "Computer Vision", "NLP", "MLOps"],
      accent: "#8b5cf6",
    },
    {
      icon: Code2,
      title: "Software Development",
      desc: "Full-cycle custom software — CRM, ERP, automation platforms, business tools. From architecture through to delivery.",
      tags: ["React", "Node.js", "Python", "TypeScript"],
      accent: "#3b82f6",
    },
    {
      icon: Globe,
      title: "Web Applications",
      desc: "Modern, responsive web apps and e-commerce solutions built with the latest frameworks, optimised for performance and SEO.",
      tags: ["Next.js", "React", "Tailwind", "Stripe"],
      accent: "#10b981",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      desc: "Native and cross-platform iOS and Android apps with polished UX, offline support, and seamless backend integration.",
      tags: ["React Native", "Flutter", "Swift", "Kotlin"],
      accent: "#f43f5e",
    },
    {
      icon: Database,
      title: "Database & Backend",
      desc: "Robust database design, migration, optimisation, and scalable API architecture for high-performance applications.",
      tags: ["PostgreSQL", "MongoDB", "Redis", "REST/GraphQL"],
      accent: "#f59e0b",
    },
    {
      icon: Server,
      title: "DevOps & Cloud",
      desc: "Infrastructure setup, CI/CD pipelines, containerisation, and cloud deployment on AWS, GCP, and Azure.",
      tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      accent: "#06b6d4",
    },
    {
      icon: Briefcase,
      title: "Business Automation",
      desc: "Custom automation tools, workflow orchestration, and integrations that eliminate manual processes and scale operations.",
      tags: ["Python", "APIs", "Zapier-like", "Bots"],
      accent: "#64748b",
    },
    {
      icon: Cpu,
      title: "Embedded & IoT",
      desc: "Firmware, edge AI, and IoT system integrations connecting hardware to intelligent cloud backends.",
      tags: ["Edge AI", "MQTT", "Firmware", "Sensors"],
      accent: "#84cc16",
    },
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-14 pb-12 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-3">Our Work</p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-4" style={H}>
              Projects &amp; Products
            </h1>
            <p className="text-gray-500 text-base leading-relaxed">
              Flagship platforms we've built in-house, and the full range of engineering disciplines we bring to every engagement.
            </p>
          </div>
        </div>
      </section>

      <Wave from="#ffffff" to="#f8fafc" />

      {/* ── IN-HOUSE PRODUCTS ── */}
      <section className="py-14 lg:py-20 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-2">In-House Products</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900" style={H}>What We've Built</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            {products.map((p) => (
              <div key={p.title} className="group relative rounded-2xl bg-white border border-gray-100 p-7 hover:border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden">
                {/* accent bloom */}
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full -translate-y-16 translate-x-16 opacity-[0.06] pointer-events-none" style={{ background: p.accent, filter: 'blur(40px)' }} />

                {/* header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                      <img src={p.favicon} alt={p.title} className="w-7 h-7 object-contain"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                    </div>
                    <div>
                      <span className="inline-flex px-2 py-0.5 rounded-full text-[10px] font-semibold bg-gray-100 text-gray-600 mb-1">{p.tag}</span>
                      <h3 className="font-semibold text-gray-900 text-lg leading-tight" style={H}>{p.title}</h3>
                      <p className="text-[11px] text-gray-400">{p.category}</p>
                    </div>
                  </div>
                  <a href={p.link} target="_blank" rel="noopener noreferrer"
                    className="w-8 h-8 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-400 transition-all flex-shrink-0">
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-5">{p.description}</p>

                {/* features */}
                <div className="grid grid-cols-2 gap-y-1.5 gap-x-3 mb-5">
                  {p.features.map(f => (
                    <div key={f} className="flex items-center gap-2 text-xs text-gray-600">
                      <CheckCircle className="h-3.5 w-3.5 text-gray-400 flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>

                {/* footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map(t => (
                      <span key={t} className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-500 text-[10px] font-medium">{t}</span>
                    ))}
                  </div>
                  <a href={p.link} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 group-hover:gap-2.5 transition-all duration-200 flex-shrink-0 ml-4">
                    Visit <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Wave from="#f8fafc" to="#ffffff" flip />

      {/* ── WHAT WE DO ── */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-2">Services</p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900" style={H}>What We Do</h2>
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Every discipline we bring to bear — from raw data to shipped product.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <div key={s.title} className="group relative rounded-2xl bg-gray-50 border border-gray-100 p-6 hover:border-gray-200 hover:bg-white hover:shadow-sm transition-all duration-300 overflow-hidden cursor-default">
                {/* accent bloom */}
                <div className="absolute top-0 right-0 w-28 h-28 rounded-full -translate-y-8 translate-x-8 opacity-[0.07] pointer-events-none" style={{ background: s.accent, filter: 'blur(20px)' }} />

                <div className="w-9 h-9 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                  <s.icon className="h-4 w-4 text-gray-600" />
                </div>

                <h3 className="font-semibold text-gray-900 text-sm mb-1.5" style={H}>{s.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{s.desc}</p>

                <div className="flex flex-wrap gap-1">
                  {s.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-white border border-gray-200 text-gray-500">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Wave from="#ffffff" to="#f1f5f9" />

      {/* ── CTA ── */}
      <section className="py-14 lg:py-20 bg-[#f1f5f9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-gray-200 shadow-sm overflow-hidden">
            <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #eab308 0%, #111827 50%, #3b82f6 100%)' }} />
            <div className="px-8 py-12 sm:px-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3" style={H}>
                Ready to start a project?
              </h2>
              <p className="text-gray-500 text-base mb-8 max-w-md mx-auto leading-relaxed">
                Whether it's an annotation pipeline, a custom AI system, or a full-stack product — let's scope it together.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gray-900 text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm">
                  Get in Touch <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/solutions"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-gray-200 text-gray-700 text-sm font-medium hover:border-gray-400 transition-colors">
                  View Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;