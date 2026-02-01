import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Target,
  Eye,
  CheckCircle,
  ArrowRight,
  Quote,
  Linkedin,
  Mail,
  Calendar,
  Rocket,
  Users,
  Award,
  Globe,
  Zap,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const AboutPage = () => {
  const ceo = {
    name: "Elvis Kiplimo",
    role: "Founder & CEO",
    initials: "EK",
    image: "/Team/Elvis.png",
    bio: "Visionary leader and founder of Selybi, driving the company's mission to transform industries through innovative technology solutions. Elvis founded Selybi on June 16, 2025, with a bold vision to create software that makes a real difference.",
    portfolio: "/portfolio/elvis-kiplimo",
    social: {
      linkedin: "https://www.linkedin.com/in/elvis-kiplimo/",
      whatsapp: "+254715246912",
    },
  };

  const team = [
    {
      name: "Kelvin Nguwa",
      role: "Chief Technology Officer",
      initials: "KN",
      image: "/Team/Kelvin.jpeg",
      bio: "Leading technical vision and ensuring Selybi stays at the forefront of technology innovation.",
      portfolio: "/portfolio/kelvin-nguwa",
      social: {
        linkedin: "#",
        whatsapp: "+254113335089",
      },
    },
    {
      name: "Collins Toroitich",
      role: "Chief Operations Officer",
      initials: "CT",
      image: "/Team/Collins.jpg",
      bio: "Ensuring operational excellence and seamless delivery of services to clients worldwide.",
      portfolio: "/portfolio/collins-toroitich",
      social: {
        linkedin: "https://www.linkedin.com/in/collins-toroitich-262535238/",
        whatsapp: "+254725810022",
      },
    },
    {
      name: "Mark Motiso",
      role: "Legal Counsel & Advisor",
      initials: "MM",
      image: "/Team/Mark.jpg",
      bio: "Providing strategic legal guidance and advisory services to support growth and compliance.",
      portfolio: "/portfolio/mark-motiso",
      social: {
        linkedin: "#",
        whatsapp: "+254740473301",
      },
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(107,114,128,0.08),transparent)]" />
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-gray-200/50 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-gray-200/50 via-transparent to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-300/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-300/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-900/5 border border-gray-900/10 mb-6">
                <span className="text-sm font-medium text-gray-700">About Selybi</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                We build software that{" "}
                <span className="text-primary">matters</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                A forward-thinking software development company founded on June 16, 2025. 
                We create innovative solutions that empower businesses and transform industries.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-8 w-full sm:w-auto"
                  asChild
                >
                  <Link to="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="font-medium border-gray-300 text-gray-900 hover:bg-gray-100 w-full sm:w-auto"
                  asChild
                >
                  <Link to="/projects">View Our Work</Link>
                </Button>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-gray-200 to-gray-300/50 rounded-3xl" />
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-tr from-gray-300/50 to-gray-200 rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/image 1.jpg" 
                  alt="Selybi Team" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 md:left-auto md:-right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">50+</p>
                    <p className="text-sm text-gray-500">Projects Delivered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Our Team
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              The passionate minds driving Selybi forward.
            </p>
          </div>

          {/* CEO Card - Featured */}
          <div className="mb-12">
            <Card className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-blue-100/50 to-gray-50 border-2 border-blue-100 shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              <CardContent className="relative p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-200/50 to-transparent rounded-full blur-xl scale-110" />
                    <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-blue-100 shadow-2xl relative">
                      <AvatarImage src={ceo.image} alt={ceo.name} />
                      <AvatarFallback className="text-3xl md:text-4xl font-semibold bg-blue-600 text-white">
                        {ceo.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-900">
                      {ceo.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-4">{ceo.role}</p>
                    <p className="text-gray-600 leading-relaxed max-w-2xl mb-6">
                      {ceo.bio}
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                      <a
                        href={ceo.social.linkedin}
                        className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={20} />
                      </a>
                      <a
                        href={`https://wa.me/${ceo.social.whatsapp.replace(/[^0-9]/g, "")}`}
                        className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
                        aria-label="WhatsApp"
                      >
                        <FaWhatsapp size={20} />
                      </a>
                      <a
                        href="mailto:elvis@selybi.com"
                        className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-red-500 hover:text-white transition-colors"
                        aria-label="Email"
                      >
                        <Mail size={20} />
                      </a>
                    </div>
                    <Link 
                      to={ceo.portfolio}
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      View Portfolio
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Other Team Members */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <Card
                key={member.name}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-200 hover:border-gray-300"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="w-24 h-24 mb-4 border-2 border-gray-200 group-hover:border-blue-200 transition-colors">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="text-lg font-semibold bg-gray-100 text-gray-900">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-semibold mb-1 text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-sm text-blue-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    <div className="flex items-center gap-2 mb-4">
                      <a
                        href={member.social.linkedin}
                        className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={16} />
                      </a>
                      <a
                        href={`https://wa.me/${member.social.whatsapp.replace(/[^0-9]/g, "")}`}
                        className="p-1.5 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
                        aria-label="WhatsApp"
                      >
                        <FaWhatsapp size={16} />
                      </a>
                      <a
                        href={`mailto:${member.name.toLowerCase().split(" ")[0]}@selybi.com`}
                        className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-red-500 transition-colors"
                        aria-label="Email"
                      >
                        <Mail size={16} />
                      </a>
                    </div>
                    <Link 
                      to={member.portfolio}
                      className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      View Portfolio
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white rounded-2xl p-10 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become a global leader in delivering groundbreaking software
                solutions that inspire innovation, drive progress, and shape the
                digital future.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-10 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower businesses, institutions, and individuals by building
                reliable, intelligent, and user-centered software systems that
                make a real impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-4">
              Our Values
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What We Stand For
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Innovation",
                desc: "Embracing creativity and cutting-edge technologies",
              },
              {
                title: "Reliability",
                desc: "Building systems our clients can depend on",
              },
              {
                title: "Excellence",
                desc: "Committed to the highest standards of quality",
              },
              {
                title: "Integrity",
                desc: "Honest and transparent in everything we do",
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-gray-900">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-4">
              Our Journey
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Key Milestones
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to where we are today — every step has shaped who we are.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 hidden lg:block" />

            <div className="space-y-12 lg:space-y-0">
              {[
                {
                  date: "June 16, 2025",
                  title: "Selybi Founded",
                  description: "Elvis Kiplimo founded Selybi with a vision to create software that makes a real difference in people's lives.",
                  icon: Rocket,
                  side: "left"
                },
                {
                  date: "July 2025",
                  title: "First Team Members",
                  description: "Welcomed our founding team members including CTO Kelvin Nguwa and COO Collins Toroitich.",
                  icon: Users,
                  side: "right"
                },
                {
                  date: "September 2025",
                  title: "Edora Launched",
                  description: "Released Edora, our flagship educational platform revolutionizing online learning experiences.",
                  icon: Award,
                  side: "left"
                },
                {
                  date: "November 2025",
                  title: "LizaLab AI Released",
                  description: "Launched LizaLab AI, our powerful data annotation platform for training machine learning models.",
                  icon: Zap,
                  side: "right"
                },
                {
                  date: "January 2026",
                  title: "Global Expansion",
                  description: "Expanded our services internationally, partnering with clients across multiple continents.",
                  icon: Globe,
                  side: "left"
                },
              ].map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:text-left'}`}>
                    <div className={`bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 ${index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'} max-w-md`}>
                      <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                        <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center lg:hidden">
                          <milestone.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          {milestone.date}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Center icon (desktop only) */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gray-900 items-center justify-center z-10 border-4 border-white shadow-lg">
                    <milestone.icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Empty space for the other side */}
                  <div className="hidden lg:block w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Selybi Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-4">
                Why Choose Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Partner in Digital Transformation
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're more than just a software company. We're committed to
                delivering solutions that truly make a difference for your
                business.
              </p>

              <div className="space-y-4">
                {[
                  "Founded on a spirit of innovation and resilience",
                  "Led by visionary leaders transforming industries",
                  "Robust systems prioritizing performance & security",
                  "Trusted partner for future-ready solutions",
                  "Dedicated team committed to your success",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "2025", label: "Founded" },
                { value: "50+", label: "Projects" },
                { value: "99%", label: "Satisfaction" },
                { value: "24/7", label: "Support" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-100 text-center"
                >
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Build Something Great?
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Let's discuss your project and discover how Selybi can transform
            your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 font-medium px-8"
              asChild
            >
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="font-medium border-gray-700 text-white hover:bg-gray-800"
              asChild
            >
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
