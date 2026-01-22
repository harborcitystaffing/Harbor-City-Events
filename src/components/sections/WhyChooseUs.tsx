import { Quote } from "lucide-react";

export function WhyChooseUs() {
  const benefits = [
    { title: "Local Experts", desc: "Specializing in premium venues across the New York Metropolitan Area." },
    { title: "Personalized Support", desc: "Dedicated event coordination to ensure every staffing detail aligns with your vision." },
    { title: "Professional Training", desc: "Every staff member undergoes rigorous hospitality training." },
    { title: "Reliable Service", desc: "We guarantee our staff will arrive on time and ready to work." },
    { title: "Fast Communication", desc: "Responsive support to handle last-minute changes or requests." },
    { title: "Impeccable Presentation", desc: "Staff arrive in crisp, professional uniforms adhering to strict grooming standards." },
  ];

  return (
    <section id="why-us" className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative text for mobile background */}
      <div className="absolute -left-10 top-20 text-[120px] font-serif text-primary/5 select-none pointer-events-none whitespace-nowrap hidden sm:block">
        Excellence Excellence Excellence
      </div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          <div className="lg:w-1/2 relative z-10">
            <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">The Philosophy</span>
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8 leading-tight">
              Why Harbor City?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-12 leading-relaxed font-light">
              We understand that the quality of service can make or break an event. That's why we don't just send bodies—we provide hospitality professionals who care about your guest experience.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-1 h-1 rounded-full bg-secondary group-hover:w-4 transition-all duration-300" />
                    <h3 className="font-bold text-primary text-sm uppercase tracking-widest">{benefit.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
             <div className="absolute -inset-4 border border-secondary/20 rounded-none transform translate-x-4 translate-y-4 -z-10"></div>
             <div className="bg-primary p-8 sm:p-12 rounded-none text-white shadow-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
                <Quote className="w-12 h-12 text-secondary/20 mb-8" />
                <p className="text-xl sm:text-2xl font-serif italic mb-10 leading-relaxed text-white/90">
                  "Our mission is to bring a level of white-glove service typically reserved for high-end Manhattan venues to the finest events across the region."
                </p>
                
                <div className="space-y-8 pt-8 border-t border-white/10">
                  {/* Founder */}
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-secondary flex items-center justify-center font-serif text-primary font-bold text-lg">
                      OS
                    </div>
                    <div>
                      <p className="font-bold text-white tracking-widest uppercase text-xs">Obaid Syed</p>
                      <p className="text-secondary text-[10px] mt-1 uppercase tracking-widest font-bold">Founder</p>
                    </div>
                  </div>

                  {/* Co-Founder */}
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-secondary flex items-center justify-center font-serif text-primary font-bold text-lg">
                      ZK
                    </div>
                    <div>
                      <p className="font-bold text-white tracking-widest uppercase text-xs">Zainuddin Khan</p>
                      <p className="text-secondary text-[10px] mt-1 uppercase tracking-widest font-bold">Co-Founder</p>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}