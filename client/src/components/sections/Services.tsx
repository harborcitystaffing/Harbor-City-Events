import { Wine, Utensils, Users, ClipboardCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    title: "Event Servers",
    description: "Professional waitstaff for plated dinners, buffet service, and passed hors d'oeuvres. Our team ensures seamless service with a smile.",
    icon: Utensils,
  },
  {
    title: "Bartenders",
    description: "Skilled mixologists and bar staff to keep the drinks flowing. From craft cocktails to beer and wine service, we manage the bar so you don't have to.",
    icon: Wine,
  },
  {
    title: "Event Captains",
    description: "Experienced leaders to oversee the staff and timeline. Essential for larger events to ensure everything runs according to plan.",
    icon: Users,
  },
  {
    title: "Setup & Breakdown",
    description: "Efficient crews to handle the heavy lifting before and after your event. We leave the venue spotless and organized.",
    icon: ClipboardCheck,
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/[0.02] -skew-x-12 transform translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-6xl font-serif text-primary leading-tight">Elevated Service <br />Standards.</h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-md italic font-light">
            "Hospitality is not a task, it's a performance. We curate the cast for your event's success."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-primary/5 border border-primary/5">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-12 lg:p-20 group hover:bg-primary transition-all duration-700 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-0 bg-secondary group-hover:h-full transition-all duration-700" />
              <div className="relative z-10">
                <service.icon className="w-12 h-12 text-secondary mb-10 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-3xl font-serif text-primary mb-6 group-hover:text-white transition-colors">{service.title}</h3>
                <p className="text-muted-foreground group-hover:text-white/70 transition-colors leading-relaxed text-lg font-light">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-32 flex flex-col lg:flex-row items-center justify-between border-t border-primary/5 pt-12 gap-8">
          <div className="flex items-baseline gap-4">
            <span className="text-5xl font-serif text-primary">45</span>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest font-bold text-secondary">Starting at</span>
              <span className="text-sm font-medium text-muted-foreground">$ / per hour</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground uppercase tracking-[0.2em] font-medium text-center lg:text-right">
            Custom investment proposals crafted for significant occasions.
          </p>
        </div>
      </div>
    </section>
  );
}
