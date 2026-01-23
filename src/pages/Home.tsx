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
  {/* Optimized Title for NYC Metro Market */}
  <title>Harbor City Event Staff | Premium Staffing NYC & NJ Metro</title>
  
  <meta 
    name="description" 
    content="Premium event staffing in NYC and New Jersey. We provide professional servers, bartenders, and captains for corporate galas and private events throughout the NYC Metro area." 
  />

  {/* Local SEO & Geo Tags */}
  <meta name="geo.region" content="US-NY" />
  <meta name="geo.placename" content="New York City" />
  <meta name="geo.position" content="40.7128;-74.0060" />
  <meta name="ICBM" content="40.7128, -74.0060" />
  
  {/* Open Graph / Social Media Preview */}
  <meta property="og:title" content="Harbor City Event Staffing | NYC & NJ Metro Area" />
  <meta property="og:description" content="Elevate your NYC event with our professional staffing team. Serving Manhattan, Jersey City, and the Tri-State area." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://harborcitystaffing.com" />
  
  {/* The Image Tags with Cache Buster */}
  <meta property="og:image" content="https://harborcitystaffing.com/opengraph.jpg?v=1" />
  <meta property="og:image:width" content="1280" />
  <meta property="og:image:height" content="720" />
  
  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Harbor City Event Staffing" />
  <meta name="twitter:image" content="https://harborcitystaffing.com/opengraph.jpg?v=1" />
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