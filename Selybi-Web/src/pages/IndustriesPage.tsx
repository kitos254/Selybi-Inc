import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Activity, Car, TrendingUp, Globe,
  Tag, Brain, Shield, Zap,
} from "lucide-react";

const IndustriesPage = () => {
  const industries = [
    {
      icon: Activity,
      title: "Healthcare AI",
      subtitle: "Medical Imaging & Diagnostics",
      desc: "Selybi powers medical AI with HIPAA-compliant annotation pipelines for radiology, pathology, and clinical NLP. Our annotators work alongside domain experts to produce high-quality training data for diagnostic AI models.",
      useCases: ["Radiology image segmentation", "Pathology slide classification", "Clinical note NLP", "Drug discovery datasets"],
      tags: ["DICOM", "Segmentation", "NLP", "HIPAA"],
      accent: "rose",
    },
    {
      icon: Car,
      title: "Autonomous Mobility",
      subtitle: "Self-Driving & Robotics",
      desc: "We annotate LiDAR point clouds, camera frames, and sensor fusion data for autonomous vehicle systems. From urban driving datasets to off-road robotics — precision annotation at scale.",
      useCases: ["LiDAR point cloud annotation", "Multi-camera 3D BBOX", "Lane & road marking", "Sensor fusion labeling"],
      tags: ["LiDAR", "3D BBOX", "Polygon", "Tracking"],
      accent: "blue",
    },
    {
      icon: TrendingUp,
      title: "Finance AI",
      subtitle: "Risk, Fraud & Intelligence",
      desc: "Financial AI requires clean, structured data. We annotate transaction records, documents, and market signals for fraud detection, credit scoring, and regulatory compliance AI systems.",
      useCases: ["Document extraction annotation", "Fraud pattern labeling", "Regulatory text classification", "Market signal tagging"],
      tags: ["NLP", "Table Extraction", "Classification", "OCR"],
      accent: "emerald",
    },
    {
      icon: Globe,
      title: "Social Platforms",
      subtitle: "Content Moderation & NLU",
      desc: "Scale content moderation and social intelligence AI with annotation at platform speed. We support multi-language datasets, hate speech labeling, sentiment analysis, and user intent classification.",
      useCases: ["Content moderation datasets", "Multi-language NLP", "Sentiment & toxicity", "Topic & intent tagging"],
      tags: ["Moderation", "Multi-lingual", "Sentiment", "NLU"],
      accent: "violet",
    },
  ];

  const accentMap: Record<string, { bg: string; border: string; text: string; tag: string }> = {
    rose:    { bg: "from-rose-500/8 to-pink-400/4",    border: "border-rose-200/40",   text: "text-rose-600",   tag: "bg-rose-50 text-rose-600 border-rose-200" },
    blue:    { bg: "from-blue-500/8 to-cyan-400/4",    border: "border-blue-200/40",   text: "text-blue-600",   tag: "bg-blue-50 text-blue-600 border-blue-200" },
    emerald: { bg: "from-emerald-500/8 to-teal-400/4", border: "border-emerald-200/40",text: "text-emerald-700",tag: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    violet:  { bg: "from-violet-500/8 to-purple-400/4",border: "border-violet-200/40", text: "text-violet-700", tag: "bg-violet-50 text-violet-700 border-violet-200" },
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-label mb-5 block">Industries</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              AI Across Every{" "}
              <span className="text-gradient-ai">Critical Industry</span>
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-2xl">
              Selybi's annotation infrastructure and AI systems are deployed across healthcare, mobility, finance, and social platforms — industries where data quality is non-negotiable.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {industries.map((ind, i) => {
            const colors = accentMap[ind.accent];
            return (
              <div key={ind.title} className={`ai-card bg-gradient-to-br ${colors.bg} border ${colors.border} p-8 lg:p-10`}>
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`w-12 h-12 rounded-xl bg-white/80 border border-white shadow-sm flex items-center justify-center ${colors.text}`}>
                        <ind.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">{ind.title}</p>
                        <p className="text-muted-foreground text-xs">{ind.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-foreground/75 leading-relaxed mb-6">{ind.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {ind.tags.map(tag => (
                        <span key={tag} className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${colors.tag}`}>{tag}</span>
                      ))}
                    </div>
                    <Button className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-md shadow-primary/20" asChild>
                      <Link to="/contact">Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground/40 tracking-widest uppercase mb-4">Use Cases</p>
                    <ul className="space-y-3">
                      {ind.useCases.map(uc => (
                        <li key={uc} className="flex items-start gap-3 text-sm">
                          <div className={`w-5 h-5 rounded-full bg-white/80 border border-white/60 flex items-center justify-center flex-shrink-0 mt-0.5 ${colors.text}`}>
                            <ArrowRight className="h-2.5 w-2.5" />
                          </div>
                          <span className="text-foreground/75">{uc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Selybi */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label mb-4">Why Selybi</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Built for High-Stakes AI
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Shield, title: "Compliance-Ready", desc: "HIPAA, GDPR, and data sovereignty requirements handled." },
              { icon: Zap, title: "Scale on Demand", desc: "From 1,000 to 10M annotations without friction." },
              { icon: Brain, title: "Domain Expertise", desc: "Annotators trained in your specific vertical." },
              { icon: Tag, title: "Precision First", desc: "Multi-tier QA with consensus scoring and expert review." },
            ].map(item => (
              <div key={item.title} className="ai-card p-6 bg-background border border-border/60 text-center">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-sm mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'hsl(222,47%,9%)' }}>
        <div className="absolute inset-0 bg-dots-pattern opacity-[0.05]" />
        <div className="relative max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Your Industry Deserves Better AI
          </h2>
          <p className="text-white/50 mb-8">Let's build the data pipeline and AI system your domain requires.</p>
          <Button size="lg" className="rounded-full px-8 font-semibold bg-white text-foreground hover:bg-white/95 shadow-xl" asChild>
            <Link to="/contact">Start the Conversation <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
