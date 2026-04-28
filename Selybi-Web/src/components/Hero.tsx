import { Link } from "react-router-dom";
import {
  ArrowRight,
  Play,
  Globe,
  Smartphone,
  Code2,
  ShieldCheck,
  Zap,
  Clock3,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-[100vh] overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
        <img
          src="/Hero_Bg.jpeg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="relative mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid h-full items-center gap-8 pb-20 pt-20 sm:pb-24 sm:pt-24 lg:grid-cols-2 lg:gap-12 lg:pb-28 lg:pt-28">
          <div className="order-2 flex h-full flex-col justify-center text-center lg:order-1 lg:text-left">
            <h1 className="font-display animate-fade-in-up stagger-1 w-full whitespace-nowrap text-[clamp(3.8rem,15vw,12rem)] font-bold leading-none tracking-tight text-white">
              Selybi
            </h1>

            <p className="mx-auto mb-8 mt-4 max-w-xl animate-fade-in-up stagger-2 text-2xl font-medium leading-relaxed text-white sm:text-3xl lg:mx-0">
              We Deliver
            </p>

            <div className="mb-0 flex animate-fade-in-up stagger-3 flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                size="lg"
                className="h-12 bg-slate-900 px-8 text-base font-semibold text-white shadow-lg shadow-slate-900/25 hover:-translate-y-0.5 hover:bg-slate-800"
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
                className="h-12 border-white/45 bg-white/20 px-8 text-base font-semibold text-white backdrop-blur hover:bg-white/30"
                asChild
              >
                <Link to="/projects">
                  <Play className="mr-2 h-4 w-4" />
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>

          <div className="order-1 flex h-full items-center animate-fade-in-up stagger-2 lg:order-2 lg:pl-4">
            <div className="relative mx-auto w-full max-w-xl xl:max-w-2xl">
              <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-[1.75rem] bg-gradient-to-br from-slate-900/15 to-transparent sm:block" />
              <div className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-[1.75rem] bg-gradient-to-tr from-emerald-200/60 to-transparent sm:block" />

              <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white shadow-2xl shadow-slate-700/10 sm:rounded-[1.75rem]">
                <img
                  src="/Hero.jpg"
                  alt="Software development team planning and building products"
                  className="aspect-[4/3] w-full object-cover"
                />

                <div className="absolute bottom-4 left-4 right-4 grid gap-3 sm:bottom-6 sm:left-6 sm:right-6">
                  <div className="rounded-2xl border border-white/80 bg-white/95 p-4 shadow-lg backdrop-blur">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-slate-900 to-slate-700">
                        <Code2 className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-slate-900">100+</p>
                        <p className="text-sm text-slate-600">Projects delivered end-to-end</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 rounded-2xl border border-white/80 bg-white/92 p-3 text-xs font-semibold text-slate-600 shadow-lg backdrop-blur">
                    <div className="flex items-center justify-center gap-1 rounded-xl bg-slate-100 py-2">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                      Secure
                    </div>
                    <div className="flex items-center justify-center gap-1 rounded-xl bg-slate-100 py-2">
                      <Zap className="h-3.5 w-3.5 text-amber-500" />
                      Fast
                    </div>
                    <div className="flex items-center justify-center gap-1 rounded-xl bg-slate-100 py-2">
                      <Clock3 className="h-3.5 w-3.5 text-primary" />
                      Agile
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-2 top-6 hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-md lg:flex">
                <Globe className="h-4 w-4 text-primary" />
                Web Platforms
              </div>

              <div className="absolute -left-3 top-1/2 hidden -translate-y-1/2 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-md lg:flex">
                <Smartphone className="h-4 w-4 text-emerald-500" />
                Mobile Ready
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg className="block h-16 w-full text-white sm:h-24" viewBox="0 0 1440 100" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
