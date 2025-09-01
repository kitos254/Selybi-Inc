import Navbar from "@/components/Navbar";
import Link from "react-router-dom";
import Footer from "@/components/Footer";
import heroBackground from "@/assets/hero-bg.jpg";

const EdoraPage = () => {
  return (
    <div>
      <Navbar />
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
          <div className="animate-fade-in-up"></div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EdoraPage;
