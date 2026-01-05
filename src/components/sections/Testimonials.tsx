import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "The staff from Harbor City were absolute professionals. They anticipated our guests' needs before they even asked. Made our wedding day completely stress-free.",
      author: "Sarah & Mike",
      role: "Wedding Clients, Liberty House"
    },
    {
      quote: "We use Harbor City for all our corporate mixers in Jersey City. Impeccable grooming, punctual, and they actually know how to make a proper cocktail.",
      author: "Elena Rodriguez",
      role: "Events Manager, TechCorp"
    },
    {
      quote: "Hiring a captain and servers allowed me to actually enjoy my own holiday party. They left my kitchen cleaner than they found it!",
      author: "David Chen",
      role: "Private Host, Hoboken"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-12">
          Trusted by Hosts & Planners
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <Card key={index} className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-8 px-8 pb-8 relative">
                <Quote className="absolute top-6 left-6 w-8 h-8 text-secondary/40" />
                <p className="text-muted-foreground italic mb-6 relative z-10 pt-4 leading-relaxed">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-bold text-primary">{t.author}</p>
                  <p className="text-sm text-secondary font-medium">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
