import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <Projects />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;