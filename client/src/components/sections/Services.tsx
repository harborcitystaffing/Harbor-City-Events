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
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Our Premium Services</h2>
          <p className="text-muted-foreground text-lg">
            We provide a full range of hospitality staffing solutions tailored to the unique needs of your event.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden group">
              <div className="h-2 bg-secondary w-full" />
              <CardHeader className="pt-8 pb-4 text-center">
                <div className="mx-auto w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-secondary transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground pb-8 px-6">
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
             <div className="inline-block bg-primary/5 border border-primary/10 rounded-lg p-6">
                 <p className="text-primary font-medium text-lg">
                    Pricing starts at <span className="text-secondary font-bold font-heading text-xl">$45/hr</span> per staff member.
                 </p>
                 <p className="text-sm text-muted-foreground mt-1">Minimum hours apply. Custom quotes available for large events.</p>
             </div>
        </div>
      </div>
    </section>
  );
}
