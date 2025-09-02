import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wrench, Shield, Zap, BarChart3, RefreshCw, Headphones } from "lucide-react";
import heroBackground from "@/assets/hero-services.jpg";

const MaintenancePage = () => {
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
                <Wrench className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Maintenance & Support
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ongoing support & updates to keep your applications running smoothly, securely, and up-to-date
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4">
                Get Support
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-black">
                View Plans
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
                  <Headphones className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>24/7 Support</CardTitle>
                    <CardDescription>Round-the-clock assistance</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get immediate help when you need it with our 24/7 support team available via multiple channels.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <RefreshCw className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Regular Updates</CardTitle>
                    <CardDescription>Keep software current</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Regular updates and patches to ensure your applications stay secure and feature-rich.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Performance Monitoring</CardTitle>
                    <CardDescription>Proactive monitoring</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Continuous monitoring of your applications to identify and resolve issues before they impact users.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Support Plans */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Support Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-2xl">Basic</CardTitle>
                  <CardDescription>Essential maintenance</CardDescription>
                  <div className="text-3xl font-bold text-primary">$99/mo</div>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2 text-left">
                    <li>• Business hours support</li>
                    <li>• Monthly security updates</li>
                    <li>• Bug fixes</li>
                    <li>• Performance monitoring</li>
                    <li>• Email support</li>
                  </ul>
                  <Button className="w-full mt-4" variant="outline">
                    Choose Basic
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center border-primary">
                <CardHeader>
                  <Badge className="mb-2">Most Popular</Badge>
                  <CardTitle className="text-2xl">Professional</CardTitle>
                  <CardDescription>Comprehensive support</CardDescription>
                  <div className="text-3xl font-bold text-primary">$299/mo</div>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2 text-left">
                    <li>• 24/7 support</li>
                    <li>• Weekly updates</li>
                    <li>• Priority bug fixes</li>
                    <li>• Advanced monitoring</li>
                    <li>• Phone & chat support</li>
                    <li>• Performance optimization</li>
                  </ul>
                  <Button className="w-full mt-4">
                    Choose Professional
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-2xl">Enterprise</CardTitle>
                  <CardDescription>Complete solution</CardDescription>
                  <div className="text-3xl font-bold text-primary">Custom</div>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2 text-left">
                    <li>• Dedicated support team</li>
                    <li>• Real-time updates</li>
                    <li>• Instant bug fixes</li>
                    <li>• Custom monitoring</li>
                    <li>• All support channels</li>
                    <li>• SLA guarantees</li>
                  </ul>
                  <Button className="w-full mt-4" variant="outline">
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Services Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">What's Included</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Bug Fixes & Updates</h3>
                    <p className="text-muted-foreground">Regular bug fixes and feature updates</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Security Patches</h3>
                    <p className="text-muted-foreground">Timely security updates and vulnerability fixes</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Performance Optimization</h3>
                    <p className="text-muted-foreground">Ongoing performance improvements</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Backup Management</h3>
                    <p className="text-muted-foreground">Automated backups and recovery</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Support Channels</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Headphones className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone Support</h3>
                    <p className="text-muted-foreground">Direct phone line for urgent issues</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Live Chat</h3>
                    <p className="text-muted-foreground">Real-time chat support</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Email Support</h3>
                    <p className="text-muted-foreground">Detailed email assistance</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <BarChart3 className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Support Portal</h3>
                    <p className="text-muted-foreground">Ticketing system and knowledge base</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Response Times */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Response Time Guarantees</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center bg-red-50 dark:bg-red-950/20">
                <CardHeader>
                  <CardTitle className="text-red-600">Critical Issues</CardTitle>
                  <div className="text-2xl font-bold">&lt; 1 Hour</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    System down, security breaches, data loss
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center bg-yellow-50 dark:bg-yellow-950/20">
                <CardHeader>
                  <CardTitle className="text-yellow-600">High Priority</CardTitle>
                  <div className="text-2xl font-bold">&lt; 4 Hours</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Major functionality broken, performance issues
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center bg-green-50 dark:bg-green-950/20">
                <CardHeader>
                  <CardTitle className="text-green-600">Normal Priority</CardTitle>
                  <div className="text-2xl font-bold">&lt; 24 Hours</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Minor bugs, feature requests, general questions
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary/5 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Keep Your Applications Running Smoothly</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Don't let technical issues slow down your business. Get reliable maintenance and support services.
            </p>
            <Button size="lg">
              Choose Your Support Plan
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MaintenancePage;
