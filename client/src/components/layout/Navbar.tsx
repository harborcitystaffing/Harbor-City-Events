import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@assets/Screenshot_2026-01-03_at_11.17.59_PM_1767585508261.jpeg";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const NavLinks = ({ mobile = false, closeMenu }: { mobile?: boolean; closeMenu?: () => void }) => {
    const baseClass = mobile 
      ? "flex flex-col space-y-4 text-lg font-medium text-primary" 
      : "flex space-x-8 text-sm font-medium text-white/90 hover:text-white transition-colors";

    const handleClick = (id: string) => {
      scrollToSection(id);
      if (closeMenu) closeMenu();
    };

    return (
      <div className={baseClass}>
        <button onClick={() => handleClick("services")} className="hover:text-secondary transition-colors text-left">Services</button>
        <button onClick={() => handleClick("why-us")} className="hover:text-secondary transition-colors text-left">Why Us</button>
        <button onClick={() => handleClick("process")} className="hover:text-secondary transition-colors text-left">How It Works</button>
        <button onClick={() => handleClick("contact")} className="hover:text-secondary transition-colors text-left">Contact</button>
      </div>
    );
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/95 backdrop-blur-sm shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo */}
          <img src={logo} alt="Harbor City Event Staff" className={`h-12 w-auto brightness-0 invert`} />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-secondary text-primary hover:bg-white hover:text-primary font-semibold rounded-none px-6"
          >
            Request a Quote
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="mt-8">
                <NavLinks mobile closeMenu={() => {}} />
                <Button 
                  onClick={() => scrollToSection("contact")}
                  className="w-full mt-6 bg-primary text-white hover:bg-primary/90"
                >
                  Request a Quote
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
