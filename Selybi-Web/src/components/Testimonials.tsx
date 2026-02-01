import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechFlow Solutions",
      company: "TechFlow Solutions",
      content: "Selybi transformed our entire digital infrastructure. Their expertise in custom software development and attention to detail exceeded our expectations.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Founder & CEO",
      company: "InnovateLab",
      content: "Working with Selybi was a game-changer for our startup. They delivered a scalable web application that perfectly matched our vision.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Thompson",
      role: "Director of Innovation",
      company: "FutureTech Corp",
      content: "The mobile app Selybi developed for us has received outstanding user feedback. Their team's professionalism and commitment to quality was exceptional.",
      rating: 5,
      avatar: "ET"
    },
    {
      name: "David Park",
      role: "VP of Technology",
      company: "DataDrive Analytics",
      content: "Selybi's cloud solutions and backend architecture have significantly improved our system performance. Their ongoing support ensures we run flawlessly.",
      rating: 5,
      avatar: "DP"
    },
    {
      name: "Lisa Wang",
      role: "Product Manager",
      company: "EduTech Innovations",
      content: "The educational platform built by Selybi has transformed how our students learn. Engagement has increased by 300%. Truly exceptional work!",
      rating: 5,
      avatar: "LW"
    },
    {
      name: "James Anderson",
      role: "Chief Digital Officer",
      company: "NextGen Solutions",
      content: "Selybi's AI-powered analytics dashboard provides insights we never had before. Their ability to understand complex requirements is remarkable.",
      rating: 5,
      avatar: "JA"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="badge-accent mb-4">Testimonials</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            What Our <span className="text-gradient-accent">Clients Say</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the companies and leaders who have experienced the Selybi difference.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="card-hover p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-primary/10" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-indigo-600 flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                  <div className="text-sm text-primary">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">98%</div>
                <div className="text-slate-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">100+</div>
                <div className="text-slate-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">100%</div>
                <div className="text-slate-600">On-Time Delivery</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
                <div className="text-slate-600">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
