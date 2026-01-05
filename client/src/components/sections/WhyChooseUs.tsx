import { CheckCircle2 } from "lucide-react";

export function WhyChooseUs() {
  const benefits = [
    { title: "Local Experts", desc: "Specializing in Jersey City, Hoboken, and Hudson County venues." },
    { title: "Fully Insured", desc: "We carry full liquor liability and general liability insurance for peace of mind." },
    { title: "Professional Training", desc: "Every staff member undergoes rigorous hospitality training." },
    { title: "Reliable Service", desc: "We guarantee our staff will arrive on time and ready to work." },
    { title: "Fast Communication", desc: "Responsive support to handle last-minute changes or requests." },
    { title: "Impeccable Presentation", desc: "Staff arrive in crisp, professional uniforms adhering to strict grooming standards." },
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Why Harbor City Event Staff?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We understand that the quality of service can make or break an event. That's why we don't just send bodies—we provide hospitality professionals who care about your guest experience.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-primary text-lg">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
             <div className="absolute -inset-4 border-2 border-secondary/30 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
             <div className="bg-primary p-12 rounded-lg text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
                <h3 className="text-2xl font-heading font-bold mb-4 relative z-10">The Harbor City Standard</h3>
                <p className="text-gray-300 relative z-10 mb-6">
                  "Our mission is to bring a level of white-glove service typically reserved for high-end Manhattan venues to the Jersey City waterfront."
                </p>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center font-serif text-primary font-bold text-xl">
                    HC
                  </div>
                  <div>
                    <p className="font-bold text-white">James O'Connor</p>
                    <p className="text-secondary text-sm">Founder & Director</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
