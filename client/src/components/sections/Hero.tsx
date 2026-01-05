import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/professional_event_staff_serving_at_a_luxury_venue.png";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Professional Event Staff" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/40" /> 
      </div>

      <div className="container relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-3 mb-6 border border-secondary/50 rounded-full text-secondary text-sm font-medium tracking-wider uppercase bg-primary/30 backdrop-blur-sm">
            Serving the New York Metropolitan Area
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            Professional Event Staff <br />
            <span className="text-secondary italic font-serif">You Can Rely On</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Elevate your private parties, weddings, and corporate events with our experienced servers, bartenders, and hospitality professionals.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-secondary text-primary hover:bg-white hover:text-primary font-bold text-lg px-8 py-6 rounded-none w-full sm:w-auto transition-all"
            >
              Request a Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary font-medium text-lg px-8 py-6 rounded-none w-full sm:w-auto bg-transparent"
            >
              Our Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
