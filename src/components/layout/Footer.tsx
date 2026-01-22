import logo from "@assets/generated_images/minimalist_luxury_event_staffing_logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <img src={logo} alt="Harbor City" className="h-12 w-auto brightness-0 invert" />
              <span className="text-xl font-bold tracking-[0.3em] uppercase">Harbor City</span>
            </div>
            <p className="text-white/40 max-w-md leading-relaxed text-lg font-light mb-12">
              The premier choice for white-glove staffing solutions. We bring the sophistication of Manhattan hospitality to the finest venues across the Metropolitan area.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/harborcitystaffing/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/60 hover:text-secondary transition-colors"
              >
                Instagram
              </a>
              <a 
                href="https://www.linkedin.com/company/harbor-city-staffing/about/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/60 hover:text-secondary transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61586817336693" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/60 hover:text-secondary transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2 lg:col-start-8">
            <h3 className="font-bold text-xs uppercase tracking-[0.3em] mb-8 text-secondary">Navigation</h3>
            <ul className="space-y-4 text-white/60 text-sm font-medium">
              <li><button onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => document.getElementById('why-us')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-white transition-colors">Philosophy</button></li>
              <li><button onClick={() => document.getElementById('process')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-white transition-colors">Process</button></li>
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-white transition-colors">Inquire</button></li>
            </ul>
          </div>
          
          <div className="lg:col-span-3">
            <h3 className="font-bold text-xs uppercase tracking-[0.3em] mb-8 text-secondary">Contact</h3>
            <ul className="space-y-6 text-white/60">
              <li className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-white/30">Headquarters</span>
                <span className="text-sm font-medium">New York Metropolitan Area</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-white/30">Phone</span>
                <a href="tel:5515541032" className="text-lg font-serif italic text-white hover:text-secondary transition-colors">(551) 554-1032</a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-white/30">Email</span>
                <a href="mailto:harborcityinfo@gmail.com" className="text-sm font-medium hover:text-white transition-colors">harborcityinfo@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.4em] text-white/20">
          <p>&copy; {new Date().getFullYear()} Harbor City Event Staffing. Crafted for Excellence.</p>
          <div className="flex gap-12">
             <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
             <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}