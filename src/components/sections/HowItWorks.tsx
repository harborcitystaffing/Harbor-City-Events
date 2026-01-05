import { Button } from "@/components/ui/button";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Request a Quote",
      desc: "Fill out our simple form with your event details. We'll provide a custom proposal within 24 hours."
    },
    {
      num: "02",
      title: "Confirm Staffing",
      desc: "Review selected staff profiles and lock in your team with a deposit. We handle all the scheduling."
    },
    {
      num: "03",
      title: "Enjoy Your Event",
      desc: "Our captain leads the team on-site, managing service from setup to cleanup so you can be a guest."
    }
  ];

  return (
    <section id="process" className="py-24 bg-primary text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Simple, Seamless Process</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Booking professional staff shouldn't be complicated. We've streamlined our process to save you time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-secondary/30"></div>

            {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-primary border-4 border-secondary flex items-center justify-center text-3xl font-heading font-bold text-secondary mb-6 z-10 shadow-xl">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-300 leading-relaxed px-4">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <Button 
              size="lg" 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-secondary text-primary hover:bg-white hover:text-primary font-bold text-lg px-8 py-6 rounded-none transition-all"
            >
              Start Your Quote
            </Button>
        </div>
      </div>
    </section>
  );
}
