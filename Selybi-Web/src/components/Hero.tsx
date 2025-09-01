import { Link } from "react-router-dom";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa6";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
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
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 to-navy-deep/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gray-200">
              We Deliver
              <sup>
                <IoCheckmarkCircle
                  className="
              inline-block text-green-500 
              h-6 sm:h-7 md:h-7 lg:h-8 xl:h-9 
              ml-[-6px] sm:ml-[-7px] md:ml-[-8px] lg:ml-[-9px] xl:ml-[-11px]
              mb-[-12px] sm:mb-[-14px] md:mb-[-16px] lg:mb-[-18px] xl:mb-[-20px]
              align-super
            "
                />
              </sup>
            </span>
          </h1>
          <h1 className="text-xl md:text-2xl text-gray-300 italic font-thin">
            Transform ideas into reality, and ensure results you can rely on.
          </h1>
        </div>

        <div className="mt-8 flex flex-col lg:flex-row lg:justify-center lg:space-x-4 space-y-4 lg:space-y-0">
          <Link to="/contact" className="w-full lg:w-auto">
            <button className="w-full lg:w-auto inline-flex items-center px-6 py-3 border-2 bg-navy-dark/20 text-white font-semibold rounded-lg hover:bg-navy-medium transition">
              Contact Us <FaLocationArrow className="ml-2" />
            </button>
          </Link>
          <Link to="/services" className="w-full lg:w-auto">
            <button className="w-full lg:w-auto inline-flex items-center px-6 py-3 border-2 bg-navy-dark/20 text-white font-semibold rounded-lg hover:bg-navy-medium transition">
              Our Services <ArrowRight className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
