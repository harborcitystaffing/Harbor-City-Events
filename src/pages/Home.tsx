import { Helmet } from "react-helmet-async";
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
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Helmet>
        {/* This is the main title that appears in Google Search results */}
        <title>Harbor City Event Staff | Premium Staffing Services in NJ</title>
        
        {/* This description shows up under your link in Google */}
        <meta 
          name="description" 
          content="Harbor City Event Staff provides professional, reliable staffing for corporate events, private parties, and weddings throughout New Jersey. Elevate your next event with our expert team." 
        />
        
        {/* These tags help your site look professional when shared on social media or iMessage */}
        <meta property="og:title" content="Harbor City Event Staff | NJ" />
        <meta property="og:description" content="Professional event staffing services for any occasion in New Jersey." />
        <meta property="og:type" content="website" />
      </Helmet>

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