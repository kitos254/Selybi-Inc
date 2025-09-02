import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroBackground from "@/assets/hero-bg.jpg";
import { 
  Target, 
  Eye, 
  Heart, 
  CheckCircle,
  User,
  Shield,
  Zap,
  Users,
  ArrowRight
} from "lucide-react";

const AboutPage = () => {
  const whySelybiPoints = [
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      text: "Founded on a spirit of innovation and resilience"
    },
    {
      icon: <User className="h-6 w-6 text-primary" />,
      text: "Led by Elvis Kiplimo, a visionary determined to transform industries through technology"
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      text: "Specialized in robust systems that prioritize performance, security, and user experience"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      text: "Trusted partner for organizations seeking not just software, but future-ready solutions"
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Fixed Background Image */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />
      
      {/* Content Container with Semi-transparent Background */}
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <section
          id="hero"
          className="relative h-[80vh] flex items-center justify-center overflow-hidden"
        >
          {/* Semi-transparent overlay for hero */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 to-navy-deep/80" />

          {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              About Selybi
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Building the future of technology, one innovative solution at a time.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-primary/20 rounded-full backdrop-blur-sm border border-primary/30">
              <Heart className="h-5 w-5 text-primary mr-2" />
              <span className="text-lg font-semibold text-primary">"We Deliver."</span>
            </div>
          </div>
        </div>
      </section>

      </div>
      <div className="bg-background/80 backdrop-blur-sm">
      {/* Who We Are Section */}
      <section className="py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Who We Are
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-foreground">
                  Founded on Innovation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Selybi is a forward-thinking software development company founded on <span className="text-primary font-semibold">June 16, 2025</span>, 
                  by <span className="text-primary font-semibold">Elvis Kiplimo</span>, who also serves as the CEO and visionary leader of the company.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Selybi, we specialize in designing and building robust, scalable, and innovative systems that go beyond expectations 
                  and redefine what technology can achieve. Our team is driven by creativity, precision, and a passion for delivering 
                  solutions that truly empower people and organizations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <Card className="glass-card hover-scale transition-all duration-300">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-primary mr-3" />
                  <CardTitle className="text-3xl text-foreground">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become a global leader in delivering groundbreaking software solutions that inspire innovation, 
                  drive progress, and shape the digital future.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="glass-card hover-scale transition-all duration-300">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <CardTitle className="text-3xl text-foreground">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower businesses, institutions, and individuals by building reliable, intelligent, and user-centered 
                  software systems. We are committed to combining cutting-edge technology with ingenuity, ensuring that 
                  every solution we deliver makes a real impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Selybi Section */}
      <section className="py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Why Selybi?
            </h2>
            <p className="text-xl text-muted-foreground">
              What sets us apart in the world of software development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whySelybiPoints.map((point, index) => (
              <Card key={index} className="glass-card hover-scale transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      {point.icon}
                    </div>
                    <p className="text-lg text-foreground leading-relaxed">
                      {point.text}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Let's build something extraordinary together. Discover how Selybi can transform your vision into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="text-lg px-12 py-4 hover-glow">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-12 py-4">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;