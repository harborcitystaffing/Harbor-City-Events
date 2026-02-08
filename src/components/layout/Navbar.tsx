import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
      ? "flex flex-col space-y-8 text-2xl font-serif text-primary" 
      : "flex space-x-10 text-xs uppercase tracking-[0.2em] font-medium text-primary/70 hover:text-primary transition-all";

    const handleClick = (id: string) => {
      scrollToSection(id);
      if (closeMenu) closeMenu();
    };

    return (
      <div className={baseClass}>
        <button onClick={() => handleClick("services")} className="hover:text-secondary transition-colors text-left cursor-pointer">Services</button>
        <button onClick={() => handleClick("why-us")} className="hover:text-secondary transition-colors text-left cursor-pointer">Philosophy</button>
        <button onClick={() => handleClick("process")} className="hover:text-secondary transition-colors text-left cursor-pointer">Process</button>
        <button onClick={() => handleClick("contact")} className="hover:text-secondary transition-colors text-left cursor-pointer">Inquire</button>
      </div>
    );
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? "bg-white/80 backdrop-blur-md py-4 border-b border-primary/5 shadow-sm" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">
        {/* LOGO SECTION - RESTORED SIZE + TIGHTER GAP */}
        <div 
          className="flex items-center gap-1.5 cursor-pointer" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <img 
            src="/logo1.png" 
            alt="Harbor City Icon" 
            className="h-10 md:h-12 w-auto object-contain" 
          />
          <div className="block">
            <span className="block text-sm font-bold tracking-[0.3em] uppercase leading-none text-primary">
              Harbor City
            </span>
            <span className="block text-[10px] tracking-[0.4em] uppercase text-secondary font-medium mt-1">
              Event Staffing
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-12">
          <NavLinks />
          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-primary text-white hover:bg-secondary hover:text-primary transition-all duration-500 rounded-none px-8 py-6 text-xs uppercase tracking-widest font-bold"
          >
            Request Quote
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary hover:bg-transparent">
                <div className="flex flex-col gap-1.5 items-end">
                  <div className="h-0.5 w-8 bg-primary"></div>
                  <div className="h-0.5 w-5 bg-secondary"></div>
                  <div className="h-0.5 w-8 bg-primary"></div>
                </div>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] border-none bg-white p-12">
              <div className="flex flex-col h-full justify-between">
                <div className="mt-12">
                  <NavLinks mobile closeMenu={() => setIsOpen(false)} />
                </div>
                <div className="space-y-8">
                  <div className="h-px w-full bg-primary/10"></div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground">New York Metropolitan Area</p>
                  <Button 
                    onClick={() => {
                      scrollToSection("contact");
                      setIsOpen(false);
                    }}
                    className="w-full bg-primary text-white py-8 rounded-none text-sm uppercase tracking-widest font-bold"
                  >
                    Request a Quote
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}