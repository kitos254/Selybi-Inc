import { CheckCircle, Target, Users, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "We deliver pixel-perfect solutions with meticulous attention to detail."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge technologies and creative problem-solving drive our approach."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with clients to understand and exceed their expectations."
    },
    {
      icon: CheckCircle,
      title: "Quality",
      description: "Rigorous testing and quality assurance ensure robust, reliable software."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-navy-medium/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Selybi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded on the belief that exceptional software can transform businesses, Selybi combines technical expertise with creative vision to deliver solutions that matter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-glow">Our Vision</h3>
            <p className="text-lg text-foreground leading-relaxed">
              We envision a future where technology seamlessly integrates with human needs, creating solutions that are not just functional, but transformative. Our commitment to quality, innovation, and client success drives everything we do.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              From small startups to enterprise corporations, we partner with businesses to turn their digital dreams into reality through custom software development, web applications, and cutting-edge AI solutions.
            </p>
          </div>

          <div className="relative">
            <div className="glass-card p-8 hover-scale transition-all duration-300">
              <div className="text-center">
                <div className="text-6xl font-bold text-gradient mb-4">100%</div>
                <div className="text-xl font-semibold mb-2">Dedicated to Excellence</div>
                <div className="text-muted-foreground">
                  Every project receives our full attention and commitment to delivering outstanding results.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="glass-card p-6 text-center hover-glow transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-3">{value.title}</h4>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;