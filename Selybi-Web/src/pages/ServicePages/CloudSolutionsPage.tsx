import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cloud, Server, Shield, Zap, BarChart3, Settings } from "lucide-react";
import heroBackground from "@/assets/hero-services.jpg";

const CloudSolutionsPage = () => {
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
                <Cloud className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Cloud Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              AWS, Azure & cloud infrastructure services to scale your business with reliability and security
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
                  <Server className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Infrastructure as Code</CardTitle>
                    <CardDescription>Automated provisioning</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Deploy and manage cloud infrastructure using Terraform, CloudFormation, and other IaC tools.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Zap className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Auto Scaling</CardTitle>
                    <CardDescription>Dynamic resource allocation</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Automatically scale your applications based on demand to optimize costs and performance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Security & Compliance</CardTitle>
                    <CardDescription>Enterprise-grade protection</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Implement robust security measures and compliance frameworks for your cloud infrastructure.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Cloud Providers */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Cloud Platforms & Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-2xl">Amazon Web Services</CardTitle>
                  <CardDescription>AWS Certified Solutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["EC2", "S3", "RDS", "Lambda", "ECS", "EKS", "CloudFront", "Route 53"].map((service) => (
                      <Badge key={service} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-2xl">Microsoft Azure</CardTitle>
                  <CardDescription>Azure Cloud Services</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["App Service", "SQL Database", "Storage", "Functions", "AKS", "CDN", "Active Directory", "Cosmos DB"].map((service) => (
                      <Badge key={service} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-2xl">Google Cloud Platform</CardTitle>
                  <CardDescription>GCP Solutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["Compute Engine", "Cloud Storage", "Cloud SQL", "Cloud Functions", "GKE", "Firebase", "BigQuery", "Cloud CDN"].map((service) => (
                      <Badge key={service} variant="outline" className="text-xs">
                        {service}
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
              <h2 className="text-3xl font-bold mb-6">Our Cloud Services</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Cloud Migration</h3>
                    <p className="text-muted-foreground">Seamless migration from on-premise to cloud</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Serverless Architecture</h3>
                    <p className="text-muted-foreground">Event-driven and scalable applications</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Container Orchestration</h3>
                    <p className="text-muted-foreground">Kubernetes and Docker deployments</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Cloud Native Development</h3>
                    <p className="text-muted-foreground">Microservices and cloud-first applications</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Benefits of Our Cloud Solutions</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <BarChart3 className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Cost Optimization</h3>
                    <p className="text-muted-foreground">Reduce infrastructure costs by up to 40%</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">High Availability</h3>
                    <p className="text-muted-foreground">99.9% uptime with redundancy</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Settings className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Automated Management</h3>
                    <p className="text-muted-foreground">Reduce operational overhead</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Enhanced Security</h3>
                    <p className="text-muted-foreground">Enterprise-grade security controls</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary/5 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Move to the Cloud?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Transform your business with scalable, secure, and cost-effective cloud solutions tailored to your needs.
            </p>
            <Button size="lg">
              Start Your Cloud Journey
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CloudSolutionsPage;
