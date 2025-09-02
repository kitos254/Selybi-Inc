import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Smartphone, Apple, Bot, Palette, Shield, Zap } from "lucide-react";
import heroBackground from "@/assets/hero-services.jpg";

const MobileDevelopmentPage = () => {
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
                <Smartphone className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Mobile App Development
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              iOS & Android mobile solutions that engage users and drive business growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-black">
                View Apps
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
                  <Apple className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Native Development</CardTitle>
                    <CardDescription>iOS & Android native apps</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We build native apps using Swift for iOS and Kotlin/Java for Android, ensuring optimal performance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Bot className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Cross-Platform</CardTitle>
                    <CardDescription>React Native & Flutter</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cost-effective cross-platform solutions that work seamlessly on both iOS and Android.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Palette className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>UI/UX Design</CardTitle>
                    <CardDescription>Beautiful & intuitive interfaces</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  User-centered design approach creating engaging and intuitive mobile experiences.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Technologies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Technologies We Use</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Swift", "Kotlin", "Java", "React Native", "Flutter", "Dart", 
                "Objective-C", "Xamarin", "Ionic", "Cordova", "Firebase", "AWS Mobile",
                "SQLite", "Core Data", "Realm", "REST APIs", "GraphQL", "Push Notifications"
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
                    <h3 className="font-semibold">Custom Mobile Apps</h3>
                    <p className="text-muted-foreground">Tailored solutions for your business</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">E-commerce Mobile Apps</h3>
                    <p className="text-muted-foreground">Mobile shopping experiences</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Social Media Apps</h3>
                    <p className="text-muted-foreground">Community and social platforms</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Enterprise Mobile Solutions</h3>
                    <p className="text-muted-foreground">Business productivity apps</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Process</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Discovery & Planning</h3>
                    <p className="text-muted-foreground">Understanding your requirements</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Design & Prototyping</h3>
                    <p className="text-muted-foreground">Creating intuitive user experiences</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Development & Testing</h3>
                    <p className="text-muted-foreground">Building and quality assurance</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Deployment & Support</h3>
                    <p className="text-muted-foreground">App store launch and maintenance</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary/5 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your Mobile App?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Transform your idea into a powerful mobile application that reaches millions of users.
            </p>
            <Button size="lg">
              Start Your Project
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MobileDevelopmentPage;
