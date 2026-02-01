import { Link } from "react-router-dom";
import { ArrowRight, Play, CheckCircle, Sparkles, Globe, Smartphone, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const trustedBy = [
    "Innovative Startups",
    "Enterprise Clients",
    "Tech Companies",
    "Growing Businesses",
  ];

  return (
    <section className="relative min-h-screen pt-8 lg:pt-12 overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(107,114,128,0.08),transparent)]" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-gray-200/50 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-gray-200/50 via-transparent to-transparent" />
      
      {/* Subtle accent orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-300/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <div className="text-center lg:text-left pt-8 lg:pt-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 mb-6 animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Trusted by 50+ businesses worldwide</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight mb-6 animate-fade-in-up stagger-1">
              Build Software That{" "}
              <span className="text-gradient">Drives Growth</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in-up stagger-2">
              We transform your ideas into powerful digital solutions. From web apps to mobile platforms, 
              we deliver exceptional software that scales with your business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 animate-fade-in-up stagger-3">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="font-semibold px-8 py-6 text-lg border-slate-300 hover:bg-slate-50"
                asChild
              >
                <Link to="/projects">
                  <Play className="mr-2 h-5 w-5" />
                  View Our Work
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="animate-fade-in-up stagger-4">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-center lg:justify-start text-sm text-slate-500">
                {[
                  "No upfront costs",
                  "Free consultation",
                  "Ongoing support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative lg:pl-8 animate-fade-in-up stagger-2">
            <div className="relative">
              {/* Decorative elements behind image */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-primary/20 to-emerald-500/20 rounded-3xl" />
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-tr from-emerald-500/10 to-primary/10 rounded-3xl" />
              
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/Hero.jpg" 
                  alt="Software Development Team at Work" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                
                {/* Floating Stats Card */}
                <div className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-64 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-indigo-600 flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">100+</div>
                      <div className="text-sm text-slate-600">Projects Delivered</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature badges floating around image */}
              <div className="hidden lg:flex absolute -top-2 -right-2 items-center gap-2 bg-white rounded-full px-4 py-2 shadow-lg border border-slate-100">
                <Globe className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-slate-700">Web Apps</span>
              </div>
              
              <div className="hidden lg:flex absolute top-1/2 -left-4 items-center gap-2 bg-white rounded-full px-4 py-2 shadow-lg border border-slate-100">
                <Smartphone className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-medium text-slate-700">Mobile</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 text-white" viewBox="0 0 1440 100" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
