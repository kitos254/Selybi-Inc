import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroBackground from "@/assets/hero-bg.jpg";
import { 
  GraduationCap, 
  MessageSquare, 
  BookOpen, 
  Calendar, 
  Users, 
  Zap, 
  Globe, 
  CheckCircle,
  University,
  Clock,
  FileText,
  Camera,
  ArrowRight
} from "lucide-react";

const EdoraPage = () => {
  const features = [
    {
      icon: <University className="h-8 w-8 text-primary" />,
      title: "University Hub & Messaging System",
      description: "Universities can configure their profiles in Edora. Institutions broadcast important updates through smart bots. Students receive direct, reliable communication from their universities."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Course Builder",
      description: "Teachers, tutors, and students can create structured courses. Step-by-step flow of chapters, topics, and subtopics for a smooth learning experience."
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Vast Learning Library",
      description: "Access courses, books, and diverse learning materials. Supports PDFs, Word documents, images, videos, and external links."
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Smart Scheduling Tools",
      description: "Timetable Scheduler: Easy planning for classes and study sessions. Calendar & To-Do List: Organize tasks and deadlines."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Productivity Tools",
      description: "OCR for images → extract text from notes. Document converter (PDF, Word, etc.). Personal productivity companion for students."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Interactive Student Feed",
      description: "Students engage with entertaining content. Universities post updates on events, announcements, and activities."
    }
  ];

  const benefits = [
    "Connects students and institutions globally",
    "Reduces communication barriers with automation",
    "Enhances teaching with interactive course building",
    "Provides students with rich resources and productivity tools in one place",
    "Backed and powered by Selybi, ensuring reliability and innovation"
  ];

  return (
    <>
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
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 to-navy-deep/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Edora
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
              Powering the Future of Learning
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              A smart educational hub that connects students, teachers, and universities across the world. 
              <span className="text-primary font-medium"> Powered by Selybi.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 hover-glow">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-black">
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Edora Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              What is Edora?
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Edora is an innovative educational hub designed to connect students within their university and across other institutions. 
              It empowers universities to digitize learning, streamline communication, and provide an engaging ecosystem for their learners.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Key Features
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive tools designed for modern education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card hover-scale transition-all duration-300">
                <CardHeader>
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Edora Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Why Edora?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              The complete educational ecosystem for the digital age
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
            
            <div className="glass-card p-8 text-center">
              <Globe className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Global Education Network
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Connect with students and institutions worldwide. Break down geographical barriers 
                and create a truly global learning community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Powered by Selybi Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Powered by Selybi
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              At Selybi, we believe in building digital solutions that simplify lives. 
              Edora is one of our flagship innovations, designed to revolutionize education 
              through cutting-edge technology and user-centered design.
            </p>
            <Link to="/">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Learn More About Selybi
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Bring Edora to Your Institution
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Ready to transform your educational experience? Join the revolution and empower your 
            students with the tools they need to succeed in the digital age.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="text-lg px-12 py-4 hover-glow">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="text-lg px-12 py-4">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default EdoraPage;
