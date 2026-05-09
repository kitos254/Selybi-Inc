import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import {
  ArrowRight,
  CheckCircle,
  Database,
  Tag,
  Brain,
  Rocket,
  Bot,
  Car,
  MessageSquare,
  Activity,
  Globe,
  ExternalLink,
  Cpu,
  Users,
  Shield,
  Zap,
} from "lucide-react";

/* ── shared token ── */
const T = {
  heading: { fontFamily: "'Space Grotesk', sans-serif" },
};

/* ── subtle SVG wave divider ── */
const WaveDivider = ({ flip = false, fromColor = "#ffffff", toColor = "#f8fafc" }: { flip?: boolean; fromColor?: string; toColor?: string }) => (
  <div className="relative h-10 overflow-hidden" style={{ background: flip ? toColor : fromColor }}>
    <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" style={{ transform: flip ? 'scaleY(-1)' : undefined }}>
      <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill={flip ? fromColor : toColor} />
    </svg>
  </div>
);

const Home = () => {
  const pipelineSteps = [
    { icon: Database, label: "Collect", desc: "Raw data from diverse sources", num: "01" },
    { icon: Tag,      label: "Annotate", desc: "LizaLab precision labeling",    num: "02" },
    { icon: Shield,   label: "Validate", desc: "Multi-tier quality control",     num: "03" },
    { icon: Brain,    label: "Train",    desc: "Feed clean data into models",    num: "04" },
    { icon: Rocket,   label: "Deploy",   desc: "Ship production AI systems",     num: "05" },
  ];

  const useCases = [
    { icon: Car,          title: "Autonomous Vehicles", desc: "Bounding boxes, polygon segmentation, LiDAR annotation.", tags: ["BBOX", "Polygon", "3D"],     accent: "#3b82f6" },
    { icon: MessageSquare,title: "NLP & Chat AI",       desc: "Text spans, intent classification, conversational AI.",   tags: ["Spans", "NLU", "Intent"],    accent: "#eab308" },
    { icon: Activity,     title: "Healthcare Imaging",  desc: "Medical segmentation with compliance-ready pipelines.",   tags: ["DICOM", "HIPAA", "Seg"],     accent: "#f43f5e" },
    { icon: Globe,        title: "Social Intelligence", desc: "Moderation, sentiment analysis, social AI at scale.",     tags: ["Sentiment", "Moderation"],   accent: "#8b5cf6" },
  ];

  const projects = [
    { title: "LizaLab AI",  category: "AI Data Annotation",    desc: "Scalable annotation platform — bounding boxes, text spans, video tracking and more.", link: "https://lizalab.selybi.com/", tag: "Platform",   accent: "#eab308" },
    { title: "Edora",       category: "Educational AI Platform", desc: "AI-powered learning platform with personalised paths, real-time collaboration, and analytics.", link: "https://edora.selybi.com",     tag: "AI Systems", accent: "#3b82f6" },
  ];

  const lizalabFeatures = [
    { label: "Multi-modal annotation",        sub: "Text, image, video, audio, 3D" },
    { label: "Real-time collaboration",        sub: "Distributed annotation teams" },
    { label: "Scalable workforce system",      sub: "Selybi-managed or your own team" },
    { label: "Quality assurance tools",        sub: "Multi-tier review & consensus" },
    { label: "Export-ready datasets",          sub: "COCO, JSON, custom formats" },
    { label: "Training pipeline integration",  sub: "Direct ML framework export" },
  ];

  return (
    <>
      <Hero />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ WHAT WE DO */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          {/* editorial header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-2">What We Do</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-tight" style={T.heading}>
                Two sides of the<br className="hidden sm:block" /> same AI pipeline
              </h2>
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Data intelligence and AI engineering — both converge into one seamless system.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-4">
            {/* AI Engineering */}
            <div className="group relative rounded-2xl border border-gray-100 bg-gray-50 p-7 hover:border-gray-200 hover:shadow-sm transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-[0.04] -translate-y-10 translate-x-10" style={{ background: '#3b82f6', filter: 'blur(40px)' }} />
              <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-5">
                <Cpu className="h-5 w-5 text-gray-700" />
              </div>
              <p className="text-[10px] font-semibold tracking-widest uppercase text-gray-400 mb-1">Engineering</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3" style={T.heading}>AI Engineering</h3>
              <p className="text-gray-500 text-sm mb-5 leading-relaxed">Full-cycle AI system development from architecture to production.</p>
              <ul className="space-y-2 mb-6">
                {["AI Software Development", "Custom AI Systems & Agents", "Automation Platforms", "MLOps & Deployment"].map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/solutions" className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:gap-3 transition-all duration-200">
                View Solutions <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Data Infrastructure */}
            <div className="group relative rounded-2xl border border-gray-100 bg-gray-50 p-7 hover:border-gray-200 hover:shadow-sm transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-[0.06] -translate-y-10 translate-x-10" style={{ background: '#eab308', filter: 'blur(40px)' }} />
              <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-5">
                <Database className="h-5 w-5 text-gray-700" />
              </div>
              <p className="text-[10px] font-semibold tracking-widest uppercase text-gray-400 mb-1">Infrastructure</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3" style={T.heading}>Data Infrastructure</h3>
              <p className="text-gray-500 text-sm mb-5 leading-relaxed">LizaLab powers annotation that feeds clean, structured data into your models.</p>
              <ul className="space-y-2 mb-6">
                {["Data Annotation via LizaLab", "Dataset Engineering & Curation", "Training Pipeline Setup", "Quality Assurance & Review"].map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/platform" className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:gap-3 transition-all duration-200">
                Explore Platform <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* convergence strip */}
          <div className="mt-6 rounded-xl border border-gray-100 bg-gray-50 px-5 py-3.5 flex items-center gap-3">
            <Bot className="h-4 w-4 text-gray-400 flex-shrink-0" />
            <p className="text-xs text-gray-500">Both sides converge — from raw annotation data into a fully deployed AI system, end to end.</p>
            <ArrowRight className="h-3.5 w-3.5 text-gray-300 ml-auto flex-shrink-0" />
          </div>
        </div>
      </section>

      <WaveDivider fromColor="#ffffff" toColor="#f8fafc" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ PIPELINE */}
      <section className="py-14 lg:py-20 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <div className="text-center mb-10">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-2">The Pipeline</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900" style={T.heading}>How It Works</h2>
          </div>

          {/* ── Desktop: horizontal flow ── */}
          <div className="hidden lg:flex items-start justify-between gap-0">
            {pipelineSteps.map((step, i) => (
              <div key={step.label} className="flex items-start flex-1">
                {/* step */}
                <div className="flex flex-col items-center text-center group flex-1">
                  <div className="relative w-14 h-14 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-4 group-hover:border-gray-900 group-hover:shadow-md transition-all duration-200">
                    <step.icon className="h-5 w-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
                    <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-gray-900 text-white text-[8px] font-bold flex items-center justify-center">{i + 1}</span>
                  </div>
                  <p className="font-semibold text-gray-900 text-sm mb-0.5">{step.label}</p>
                  <p className="text-gray-400 text-xs leading-snug max-w-[7rem]">{step.desc}</p>
                </div>
                {/* connector arrow between steps */}
                {i < pipelineSteps.length - 1 && (
                  <div className="flex items-center mt-7 flex-shrink-0 w-8">
                    <svg width="32" height="12" viewBox="0 0 32 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="0" y1="6" x2="24" y2="6" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="3 2" />
                      <path d="M22 2.5 L28 6 L22 9.5" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ── Mobile / tablet: vertical stacked flow ── */}
          <div className="lg:hidden flex flex-col items-center gap-0">
            {pipelineSteps.map((step, i) => (
              <div key={step.label} className="flex flex-col items-center w-full max-w-xs">
                {/* step card */}
                <div className="w-full flex items-center gap-4 bg-white border border-gray-100 rounded-2xl px-5 py-4 shadow-sm hover:border-gray-300 hover:shadow-md transition-all duration-200 group">
                  <div className="relative w-11 h-11 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0 group-hover:border-gray-400 transition-colors">
                    <step.icon className="h-4.5 w-4.5 text-gray-600 group-hover:text-gray-900 transition-colors" />
                    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gray-900 text-white text-[8px] font-bold flex items-center justify-center">{i + 1}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm">{step.label}</p>
                    <p className="text-gray-400 text-xs mt-0.5 leading-snug">{step.desc}</p>
                  </div>
                </div>
                {/* vertical connector */}
                {i < pipelineSteps.length - 1 && (
                  <div className="flex flex-col items-center py-1">
                    <svg width="12" height="28" viewBox="0 0 12 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="6" y1="0" x2="6" y2="20" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="3 2" />
                      <path d="M2.5 18 L6 24 L9.5 18" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fromColor="#f8fafc" toColor="#ffffff" flip />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ LIZALAB SPOTLIGHT */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">

            {/* left copy */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-3">Core Platform</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-tight mb-4" style={T.heading}>
                LizaLab — the engine<br /> behind intelligent systems
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-7">
                Professional-grade annotation infrastructure built for precision, scale, and speed.
              </p>

              <ul className="space-y-3 mb-8">
                {lizalabFeatures.map((f) => (
                  <li key={f.label} className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-gray-900">{f.label}</span>
                      <span className="text-gray-400 text-xs"> — {f.sub}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex gap-3 flex-wrap">
                <Link to="/platform"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm font-medium hover:opacity-90 transition-opacity">
                  Explore LizaLab <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <a href="https://lizalab.selybi.com" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-gray-700 text-sm font-medium hover:border-gray-400 transition-colors">
                  Live Demo <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* right mockup */}
            <div className="relative">
              {/* glow */}
              <div className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl" style={{ background: 'radial-gradient(ellipse, #3b82f6 0%, transparent 70%)' }} />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/60" style={{ background: '#0f172a' }}>
                {/* Toolbar */}
                <div className="flex items-center gap-2 px-4 py-2.5 border-b" style={{ background: '#0c1526', borderColor: 'rgba(255,255,255,0.07)' }}>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 mx-3">
                    <div className="rounded px-2.5 py-0.5 text-[10px] text-white/35 font-mono" style={{ background: 'rgba(255,255,255,0.06)' }}>lizalab.selybi.com — workspace</div>
                  </div>
                  <div className="flex gap-1.5">
                    {["BBOX", "Polygon", "Span"].map(tool => (
                      <span key={tool} className="px-1.5 py-0.5 rounded text-[9px] font-mono text-white/40" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>{tool}</span>
                    ))}
                  </div>
                </div>

                {/* Canvas */}
                <div className="relative p-5 aspect-[16/10]" style={{ background: '#152033' }}>
                  <div className="absolute inset-5 rounded-lg overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.25), rgba(139,92,246,0.15))' }}>
                    <div className="absolute" style={{ top: '18%', left: '12%', width: '34%', height: '54%' }}>
                      <div className="w-full h-full border border-blue-400/80 rounded-sm relative">
                        <span className="absolute -top-4 left-0 bg-blue-500 text-white text-[9px] px-1.5 py-0.5 rounded font-mono">person · 0.97</span>
                      </div>
                    </div>
                    <div className="absolute" style={{ top: '24%', left: '55%', width: '30%', height: '40%' }}>
                      <div className="w-full h-full border border-yellow-400/80 rounded-sm relative">
                        <span className="absolute -top-4 left-0 bg-yellow-500 text-black text-[9px] px-1.5 py-0.5 rounded font-mono">car · 0.94</span>
                      </div>
                    </div>
                    {[{x:'20%',y:'75%'},{x:'35%',y:'82%'},{x:'50%',y:'78%'},{x:'48%',y:'70%'},{x:'22%',y:'68%'}].map((pt, i) => (
                      <div key={i} className="absolute w-1.5 h-1.5 rounded-full bg-amber-400 border border-white/30 -translate-x-1 -translate-y-1" style={{ left: pt.x, top: pt.y }} />
                    ))}
                  </div>

                  {/* Side panel */}
                  <div className="absolute right-1 top-5 bottom-5 w-24 rounded-lg p-2 flex flex-col gap-1" style={{ background: 'rgba(10,18,35,0.96)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <p className="text-[8px] font-semibold uppercase tracking-widest text-white/30 mb-1">Labels</p>
                    {[{name:"person", c:"#3b82f6"},{name:"car", c:"#eab308"},{name:"road", c:"#10b981"}].map(l => (
                      <div key={l.name} className="flex items-center gap-1.5 px-1.5 py-1 rounded" style={{ background: 'rgba(255,255,255,0.04)' }}>
                        <div className="w-1.5 h-1.5 rounded-sm flex-shrink-0" style={{ background: l.c }} />
                        <span className="text-white/50 text-[9px] font-mono">{l.name}</span>
                      </div>
                    ))}
                    <div className="mt-auto pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                      <div className="text-[8px] text-white/25 mb-1">12 / 48</div>
                      <div className="h-0.5 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                        <div className="h-full w-1/4 rounded-full bg-blue-500" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status bar */}
                <div className="flex items-center justify-between px-4 py-1.5 text-[9px] text-white/25 font-mono" style={{ background: '#0c1526', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <span>Frame 0024 / 0200</span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    3 annotators active
                  </span>
                  <span>avg confidence 0.94</span>
                </div>
              </div>

              {/* floating badge */}
              <div className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-lg px-3 py-2 flex items-center gap-2.5 border border-gray-100">
                <div className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center">
                  <Tag className="h-3.5 w-3.5 text-gray-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 leading-none">10M+ Labels</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Annotated & verified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fromColor="#ffffff" toColor="#f8fafc" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ USE CASES */}
      <section className="py-14 lg:py-20 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-2">Use Cases</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900" style={T.heading}>Industries We Power</h2>
            </div>
            <Link to="/industries" className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors flex-shrink-0">
              All Industries <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {useCases.map((uc) => (
              <div key={uc.title} className="group relative rounded-2xl bg-white border border-gray-100 p-6 hover:border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden cursor-default">
                {/* accent blob */}
                <div className="absolute top-0 right-0 w-28 h-28 rounded-full -translate-y-8 translate-x-8 opacity-[0.08] pointer-events-none" style={{ background: uc.accent, filter: 'blur(20px)' }} />

                <div className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                  <uc.icon className="h-4 w-4 text-gray-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1.5">{uc.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{uc.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {uc.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-gray-100 text-gray-500 border border-gray-200">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fromColor="#f8fafc" toColor="#ffffff" flip />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ PROJECTS */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-2">Our Work</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900" style={T.heading}>What We've Built</h2>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors flex-shrink-0">
              All Projects <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((proj) => (
              <div key={proj.title} className="group relative rounded-2xl border border-gray-100 bg-gray-50 p-7 hover:border-gray-200 hover:shadow-sm transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full -translate-y-16 translate-x-16 opacity-[0.05] pointer-events-none" style={{ background: proj.accent, filter: 'blur(40px)' }} />

                <div className="flex items-start justify-between mb-5">
                  <div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-gray-200 text-gray-600 mb-3">{proj.tag}</span>
                    <h3 className="text-xl font-semibold text-gray-900" style={T.heading}>{proj.title}</h3>
                    <p className="text-xs text-gray-400 mt-0.5">{proj.category}</p>
                  </div>
                  <a href={proj.link} target="_blank" rel="noopener noreferrer"
                    className="w-8 h-8 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-400 transition-all">
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-6">{proj.desc}</p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200/60">
                  <a href={proj.link} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 group-hover:gap-2.5 transition-all duration-200">
                    Visit Project <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                  <span className="flex items-center gap-1.5 text-[11px] text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Live
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fromColor="#ffffff" toColor="#f1f5f9" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ CTA */}
      <section className="py-14 lg:py-20 bg-[#f1f5f9] relative overflow-hidden">
        {/* decorative dots grid */}
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '22px 22px' }} />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-gray-200 shadow-sm overflow-hidden">

            {/* top accent bar */}
            <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #eab308 0%, #111827 50%, #3b82f6 100%)' }} />

            <div className="px-8 py-12 sm:px-12 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-[10px] font-semibold tracking-[0.15em] uppercase text-gray-500 mb-6">
                <Zap className="h-3 w-3 text-yellow-500" />
                Start Building
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 leading-tight" style={T.heading}>
                Ready to build with Selybi?
              </h2>
              <p className="text-gray-500 text-base mb-8 max-w-lg mx-auto leading-relaxed">
                Whether you need a complete AI system or a data annotation pipeline, we have the platform and the team.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gray-900 text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm">
                  Start a Project <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-gray-200 text-gray-700 text-sm font-medium hover:border-gray-400 transition-colors">
                  Contact Us
                </Link>
              </div>

              {/* trust strip */}
              <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-center gap-6">
                {[
                  { icon: Users,   label: "50+ clients served" },
                  { icon: Shield,  label: "Quality-first delivery" },
                  { icon: Rocket,  label: "Production AI systems" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-xs text-gray-400">
                    <Icon className="h-3.5 w-3.5" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
