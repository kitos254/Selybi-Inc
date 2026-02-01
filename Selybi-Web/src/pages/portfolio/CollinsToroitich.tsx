import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  ArrowLeft, 
  Linkedin, 
  Mail, 
  Calendar,
  Settings,
  Users,
  TrendingUp,
  ClipboardCheck
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const CollinsToroitich = () => {
  const profile = {
    name: "Collins Toroitich",
    role: "Chief Operations Officer",
    initials: "CT",
    image: "/Team/Collins.jpg",
    email: "collins@selybi.com",
    linkedin: "https://www.linkedin.com/in/collins-toroitich-262535238/",
    whatsapp: "+254725810022",
    bio: "Ensuring operational excellence and seamless delivery of services to clients worldwide.",
    fullBio: `Collins Toroitich is the Chief Operations Officer at Selybi, responsible for ensuring operational excellence across all company functions. With a keen eye for process optimization and a dedication to quality, Collins ensures that every project is delivered on time and exceeds client expectations.

His expertise spans project management, resource allocation, and client relations. Collins has implemented robust operational frameworks that enable Selybi to scale efficiently while maintaining its commitment to quality and client satisfaction.

Beyond operations, Collins plays a crucial role in business development and strategic partnerships. He believes that strong operations are the backbone of any successful technology company and works tirelessly to create systems that support sustainable growth.`,
  };

  const skills = [
    "Operations Management", "Project Management", "Process Optimization",
    "Team Coordination", "Client Relations", "Strategic Planning",
    "Resource Allocation", "Quality Assurance", "Business Development",
    "Agile Methodologies", "Risk Management", "Vendor Management"
  ];

  const achievements = [
    {
      icon: Settings,
      title: "Operational Framework",
      description: "Established comprehensive operational processes for project delivery.",
      date: "2025"
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Achieved 98% client satisfaction rate through excellent service delivery.",
      date: "2025"
    },
    {
      icon: TrendingUp,
      title: "Efficiency Gains",
      description: "Improved project delivery efficiency by 40% through process optimization.",
      date: "2025"
    },
    {
      icon: ClipboardCheck,
      title: "Quality Standards",
      description: "Implemented quality assurance protocols ensuring consistent output.",
      date: "2025"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-8 pb-16 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(107,114,128,0.08),transparent)]" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            to="/about" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Team
          </Link>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Avatar */}
            <Avatar className="w-40 h-40 border-4 border-white shadow-2xl">
              <AvatarImage src={profile.image} alt={profile.name} />
              <AvatarFallback className="text-4xl font-bold bg-gray-900 text-white">
                {profile.initials}
              </AvatarFallback>
            </Avatar>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                {profile.name}
              </h1>
              <p className="text-xl text-gray-600 mb-4">{profile.role}</p>
              
              {/* Social Links */}
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={`https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
                >
                  <FaWhatsapp size={20} />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-red-500 hover:text-white transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>

              <Button asChild className="bg-gray-900 hover:bg-gray-800">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About</h2>
          <div className="prose prose-gray max-w-none">
            {profile.fullBio.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-600 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills & Expertise</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium hover:border-gray-900 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Key Achievements</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center flex-shrink-0">
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                      <Calendar className="w-4 h-4" />
                      {achievement.date}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{achievement.title}</h3>
                    <p className="text-gray-600 text-sm">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CollinsToroitich;
