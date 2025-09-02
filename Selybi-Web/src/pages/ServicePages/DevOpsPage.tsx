import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GitBranch, Zap, Shield, BarChart3, Settings, RefreshCw } from "lucide-react";
import heroBackground from "@/assets/hero-services.jpg";

const DevOpsPage = () => {
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
                <GitBranch className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              DevOps & CI/CD
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Automation & deployment pipelines to accelerate your development workflow and ensure reliable releases
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-black">
                View Solutions
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
                  <Zap className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Continuous Integration</CardTitle>
                    <CardDescription>Automated build & testing</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Implement CI pipelines that automatically build, test, and validate your code changes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <RefreshCw className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Continuous Deployment</CardTitle>
                    <CardDescription>Automated release management</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Deploy applications automatically with zero-downtime deployments and rollback capabilities.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Monitoring & Logging</CardTitle>
                    <CardDescription>Real-time insights</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive monitoring and logging solutions to track application performance and health.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* DevOps Tools */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">DevOps Tools & Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">CI/CD Platforms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["Jenkins", "GitHub Actions", "GitLab CI", "Azure DevOps", "CircleCI", "Travis CI"].map((tool) => (
                      <Badge key={tool} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">Containerization</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["Docker", "Kubernetes", "Helm", "Podman", "Docker Compose", "Rancher"].map((tool) => (
                      <Badge key={tool} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">Infrastructure</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["Terraform", "Ansible", "Puppet", "Chef", "CloudFormation", "Pulumi"].map((tool) => (
                      <Badge key={tool} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["Prometheus", "Grafana", "ELK Stack", "New Relic", "Datadog", "Splunk"].map((tool) => (
                      <Badge key={tool} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Services Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our DevOps Services</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">CI/CD Pipeline Setup</h3>
                    <p className="text-muted-foreground">Automated build, test, and deployment pipelines</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Infrastructure Automation</h3>
                    <p className="text-muted-foreground">Infrastructure as Code implementation</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Containerization</h3>
                    <p className="text-muted-foreground">Docker and Kubernetes implementation</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Monitoring & Alerting</h3>
                    <p className="text-muted-foreground">Comprehensive observability solutions</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Benefits of DevOps</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Faster Time to Market</h3>
                    <p className="text-muted-foreground">Deploy features 10x faster with automation</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Improved Reliability</h3>
                    <p className="text-muted-foreground">Reduce deployment failures by 90%</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Settings className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Better Collaboration</h3>
                    <p className="text-muted-foreground">Break down silos between teams</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <BarChart3 className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Enhanced Visibility</h3>
                    <p className="text-muted-foreground">Real-time insights into operations</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary/5 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Development?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Transform your development workflow with modern DevOps practices and automated CI/CD pipelines.
            </p>
            <Button size="lg">
              Start Your DevOps Journey
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DevOpsPage;
