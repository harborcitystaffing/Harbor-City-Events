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
    <section className="py-12 bg-white border-t border-slate-100">
      <div className="container mx-auto">
        <h3 className="text-center text-sm font-heading font-bold tracking-widest text-primary/40 uppercase mb-8">
          Serving All Locations Across
        </h3>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {regions.map((location, index) => (
            <span key={index} className="text-primary/60 font-medium hover:text-secondary transition-colors cursor-default">
              {location}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
