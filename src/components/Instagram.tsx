export default function Instagram() {
  const gridItems = [
    { img: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80&auto=format", label: "Wings" },
    { img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80&auto=format", label: "Fish & Chips" },
    { img: "https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?w=600&q=80&auto=format", label: "Shrimp" },
    { img: "https://images.unsplash.com/photo-1608039829572-9b7218c0e14e?w=600&q=80&auto=format", label: "Mild Sauce" },
    { img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&q=80&auto=format", label: "Fresh & Hot" },
    { img: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=600&q=80&auto=format", label: "Combos" },
  ];

  return (
    <section
      id="instagram"
      className="section-padding"
      style={{ background: "var(--bg-warm)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p
            className="text-sm tracking-widest mb-3"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--red)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            Follow the Flavor
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl mb-3"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--dark)" }}
          >
            @kayschickenkitchen
          </h2>
          <p className="text-base" style={{ color: "#666" }}>
            29K+ followers &middot; 923 posts
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-10">
          {gridItems.map((item, index) => (
            <a
              key={index}
              href="https://instagram.com/kayschickenkitchen"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square rounded-lg overflow-hidden relative group"
              aria-label={`Instagram post: ${item.label}`}
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mb-2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none" />
                </svg>
                <span
                  className="text-xs tracking-widest text-white"
                  style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase" }}
                >
                  {item.label}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="text-center">
          <a
            href="https://instagram.com/kayschickenkitchen"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red"
          >
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
