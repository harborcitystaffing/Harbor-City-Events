import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/professional_event_staff_serving_at_a_luxury_venue.png";
import texture from "@assets/generated_images/abstract_luxury_hospitality_texture.png";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0 scale-110 animate-pulse-slow">
        <img 
          src={heroBg} 
          alt="Luxury Hospitality" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-transparent to-primary" />
      </div>
      
      {/* Abstract Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img src={texture} alt="" className="w-full h-full object-cover mix-blend-screen" />
      </div>

      <div className="container relative z-10 px-6 lg:px-12">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="inline-block mb-8 text-xs font-bold tracking-[0.5em] uppercase text-secondary/80 border-b border-secondary/30 pb-2">
              Bespoke Hospitality & Staffing
            </span>
            
            <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 leading-[1.1] tracking-tight">
              Elegance <span className="italic text-secondary">In Every</span> <br />
              Movement.
            </h1>
            
            <p className="text-lg md:text-2xl text-white/60 mb-12 max-w-2xl leading-relaxed font-light">
              Crafting seamless guest experiences for the New York Metropolitan Area's most distinguished private and corporate occasions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-secondary text-primary hover:bg-white transition-all duration-500 rounded-none px-12 py-8 text-sm uppercase tracking-[0.2em] font-bold w-full sm:w-auto"
              >
                Inquire Now
              </Button>
              <button 
                onClick={() => document.getElementById("services")?.scrollIntoView({behavior: "smooth"})}
                className="group flex items-center gap-4 text-white/80 hover:text-secondary transition-all"
              >
                <span className="text-xs uppercase tracking-[0.3em] font-bold">Discover Services</span>
                <div className="h-px w-12 bg-secondary/50 group-hover:w-20 transition-all duration-500"></div>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
        <span className="text-[10px] uppercase tracking-[0.4em] text-white">Scroll</span>
        <div className="h-12 w-px bg-gradient-to-b from-secondary to-transparent animate-bounce"></div>
      </div>
    </section>
  );
}
