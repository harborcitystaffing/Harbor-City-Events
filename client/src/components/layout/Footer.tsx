export function Footer() {
  return (
    <footer className="bg-primary text-white py-12 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-heading font-bold mb-4">
              HARBOR CITY <span className="text-secondary">EVENT STAFF</span>
            </h2>
            <p className="text-gray-400 max-w-sm">
              Providing professional, reliable, and elegant staffing solutions for Hudson County's premier events. Elevate your hospitality experience.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><button onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => document.getElementById('why-us')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-white transition-colors">Why Choose Us</button></li>
              <li><button onClick={() => document.getElementById('process')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-white transition-colors">How It Works</button></li>
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-white transition-colors">Request Quote</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-secondary">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Jersey City, NJ</li>
              <li><a href="tel:2015550123" className="hover:text-white transition-colors">(201) 555-0123</a></li>
              <li><a href="mailto:events@harborcitystaff.com" className="hover:text-white transition-colors">events@harborcitystaff.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Harbor City Event Staff. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-6">
             <span className="hover:text-white cursor-pointer">Privacy Policy</span>
             <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
