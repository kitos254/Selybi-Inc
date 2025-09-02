import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Globe, Smartphone, Database, Cloud, Zap, Wrench, Headphones } from "lucide-react";
import heroBackground from "@/assets/hero-services.jpg";

const WebDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section
        id="hero"
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
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 to-navy-deep/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/20 rounded-full backdrop-blur-sm border border-primary/30">
                <Globe className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Web Development
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Custom websites & web applications built with modern technologies for exceptional user experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-black">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-background">
        <div className="container mx-auto px-4 py-16">

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Code className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Modern Frameworks</CardTitle>
                    <CardDescription>React, Vue, Angular & more</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We use the latest web technologies and frameworks to build fast, scalable, and maintainable applications.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Smartphone className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Responsive Design</CardTitle>
                    <CardDescription>Mobile-first approach</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every website we build is fully responsive and optimized for all devices, from mobile to desktop.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Zap className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Performance Optimized</CardTitle>
                    <CardDescription>Lightning-fast loading</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We optimize every aspect of your website for speed, SEO, and user experience.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Technologies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Technologies We Use</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "React", "Vue.js", "Angular", "Next.js", "Nuxt.js", "TypeScript", 
                "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "SASS", "Node.js",
                "Express", "FastAPI", "Django", "Laravel", "PHP", "Python"
              ].map((tech) => (
                <Badge key={tech} variant="secondary" className="px-4 py-2 text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Services Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Custom Web Applications</h3>
                    <p className="text-muted-foreground">Tailored solutions for your business needs</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">E-commerce Platforms</h3>
                    <p className="text-muted-foreground">Online stores with payment integration</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Content Management Systems</h3>
                    <p className="text-muted-foreground">Easy-to-manage websites and blogs</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Progressive Web Apps</h3>
                    <p className="text-muted-foreground">App-like experience in the browser</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Expert Development Team</h3>
                    <p className="text-muted-foreground">Years of experience in web development</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Agile Development Process</h3>
                    <p className="text-muted-foreground">Iterative development with regular updates</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">24/7 Support</h3>
                    <p className="text-muted-foreground">Ongoing maintenance and support</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Competitive Pricing</h3>
                    <p className="text-muted-foreground">Quality solutions at affordable rates</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary/5 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Web Project?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss your requirements and create a web solution that drives your business forward.
            </p>
            <Button size="lg">
              Contact Us Today
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WebDevelopmentPage;
