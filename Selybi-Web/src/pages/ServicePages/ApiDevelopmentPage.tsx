import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Server, Database, Shield, Zap, BarChart3 } from "lucide-react";
import heroBackground from "@/assets/hero-services.jpg";

const ApiDevelopmentPage = () => {
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
                <Code className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              API Development
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              RESTful & GraphQL APIs that power your applications with secure, scalable, and well-documented endpoints
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-black">
                View Examples
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
                    <CardTitle>RESTful APIs</CardTitle>
                    <CardDescription>Industry-standard REST architecture</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Build robust RESTful APIs following best practices with proper HTTP methods and status codes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Database className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>GraphQL APIs</CardTitle>
                    <CardDescription>Flexible query language</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Develop efficient GraphQL APIs that allow clients to request exactly the data they need.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>API Security</CardTitle>
                    <CardDescription>Authentication & authorization</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Implement robust security measures including JWT, OAuth, rate limiting, and input validation.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* API Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">API Technologies & Frameworks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl">Backend Frameworks</CardTitle>
                  <CardDescription>Robust server-side solutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["Node.js", "Express", "FastAPI", "Django REST", "Laravel", "Spring Boot", "ASP.NET Core", "Flask"].map((framework) => (
                      <Badge key={framework} variant="outline" className="text-xs">
                        {framework}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl">API Standards</CardTitle>
                  <CardDescription>Modern API protocols</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["REST", "GraphQL", "gRPC", "WebSockets", "Server-Sent Events", "JSON:API", "OpenAPI", "AsyncAPI"].map((standard) => (
                      <Badge key={standard} variant="outline" className="text-xs">
                        {standard}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl">Databases</CardTitle>
                  <CardDescription>Data persistence solutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch", "DynamoDB", "Firebase", "Supabase"].map((db) => (
                      <Badge key={db} variant="outline" className="text-xs">
                        {db}
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
              <h2 className="text-3xl font-bold mb-6">Our API Services</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Custom API Development</h3>
                    <p className="text-muted-foreground">Tailored APIs for your specific business needs</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Third-party Integrations</h3>
                    <p className="text-muted-foreground">Connect with external services and platforms</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">API Documentation</h3>
                    <p className="text-muted-foreground">Comprehensive documentation and testing tools</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">Microservices Architecture</h3>
                    <p className="text-muted-foreground">Scalable and maintainable service design</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">API Best Practices</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Performance Optimization</h3>
                    <p className="text-muted-foreground">Caching, pagination, and efficient queries</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Security First</h3>
                    <p className="text-muted-foreground">Authentication, authorization, and rate limiting</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <BarChart3 className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Monitoring & Analytics</h3>
                    <p className="text-muted-foreground">Real-time monitoring and usage analytics</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Code className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Version Management</h3>
                    <p className="text-muted-foreground">Backward compatibility and version control</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Common API Use Cases</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">Mobile Apps</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Backend APIs for iOS and Android applications
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">Web Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    APIs powering modern web applications
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">E-commerce</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Payment processing and inventory management
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">IoT Platforms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Device communication and data collection
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary/5 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Need a Powerful API Solution?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let us build robust, scalable APIs that power your applications and enable seamless integrations.
            </p>
            <Button size="lg">
              Discuss Your API Needs
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApiDevelopmentPage;
