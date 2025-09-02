import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Lightbulb, Target, BarChart3, Zap, Shield } from "lucide-react";
import heroBackground from "@/assets/hero-services.jpg";

const ConsultingPage = () => {
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
                <Lightbulb className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Software Consulting
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Technical strategy & architecture guidance to help you make informed decisions and build scalable solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-black">
                Learn More
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
                  <Target className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Strategic Planning</CardTitle>
                    <CardDescription>Technology roadmap & planning</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Develop comprehensive technology strategies aligned with your business objectives and growth plans.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Architecture Design</CardTitle>
                    <CardDescription>System architecture & design</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Design scalable, maintainable software architectures that support your current and future needs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Technology Assessment</CardTitle>
                    <CardDescription>Current state analysis</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Evaluate your existing technology stack and provide recommendations for improvements and optimizations.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Consulting Areas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Consulting Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl">Digital Transformation</CardTitle>
                  <CardDescription>Modernizing legacy systems</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Legacy system modernization</li>
                    <li>• Cloud migration strategies</li>
                    <li>• Process automation</li>
                    <li>• Technology stack evaluation</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl">Software Architecture</CardTitle>
                  <CardDescription>Scalable system design</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Microservices architecture</li>
                    <li>• API design and strategy</li>
                    <li>• Database architecture</li>
                    <li>• Performance optimization</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl">DevOps & Security</CardTitle>
                  <CardDescription>Operational excellence</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• CI/CD implementation</li>
                    <li>• Security assessments</li>
                    <li>• Infrastructure optimization</li>
                    <li>• Monitoring strategies</li>
                  </ul>
                </CardContent>
              </Card>
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
                    <h3 className="font-semibold">Technology Strategy</h3>
                    <p className="text-muted-foreground">Long-term technology planning and roadmaps</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Architecture Reviews</h3>
                    <p className="text-muted-foreground">Comprehensive system architecture analysis</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Code Reviews</h3>
                    <p className="text-muted-foreground">Quality assurance and best practices</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Team Training</h3>
                    <p className="text-muted-foreground">Knowledge transfer and skill development</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Discovery Phase</h3>
                    <p className="text-muted-foreground">Understanding your business and technical needs</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <BarChart3 className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Analysis & Assessment</h3>
                    <p className="text-muted-foreground">Thorough evaluation of current state</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Strategic Recommendations</h3>
                    <p className="text-muted-foreground">Actionable insights and roadmaps</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Implementation Support</h3>
                    <p className="text-muted-foreground">Ongoing guidance and support</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Industries We Serve */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Industries We Serve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Financial Services",
                "Healthcare",
                "E-commerce",
                "Education",
                "Manufacturing",
                "Government",
                "Startups",
                "Enterprise"
              ].map((industry) => (
                <Card key={industry} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-lg">{industry}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Specialized consulting for {industry.toLowerCase()} sector
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary/5 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Technology Strategy?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get expert guidance to make informed technology decisions and build a roadmap for success.
            </p>
            <Button size="lg">
              Schedule a Free Consultation
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConsultingPage;
