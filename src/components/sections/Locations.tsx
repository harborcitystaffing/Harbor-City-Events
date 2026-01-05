export function Locations() {
  const regions = [
    "Jersey City",
    "Hoboken",
    "Manhattan",
    "Brooklyn",
    "Queens",
    "Bayonne",
    "Hoboken",
    "Weehawken",
    "Fort Lee",
    "Edgewater",
    "Long Island City",
    "Newark"
  ];

  return (
    <section className="py-12 md:py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-[10px] md:text-sm font-heading font-bold tracking-[0.4em] text-primary/40 uppercase mb-8 md:mb-12">
          Serving All Locations Across
        </h3>
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-x-4 gap-y-4 md:gap-x-12 md:gap-y-6">
          {regions.map((location, index) => (
            <span key={index} className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-primary/60 font-bold hover:text-secondary transition-all duration-300 cursor-default text-center">
              {location}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
