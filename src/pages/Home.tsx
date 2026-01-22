import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { Locations } from "@/components/sections/Locations";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.replace("#", "");
      
      // This logic checks for the contact section every 100ms
      // It stops once it finds the section or after 2 seconds (20 attempts)
      let attempts = 0;
      const scrollInterval = setInterval(() => {
        const element = document.getElementById(targetId);
        
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          clearInterval(scrollInterval);
        }
        
        attempts++;
        if (attempts >= 20) {
          clearInterval(scrollInterval);
        }
      }, 100);

      return () => clearInterval(scrollInterval);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}