export default function Instagram() {
  const gridItems = [
    { color: "#CC0000", label: "Wings" },
    { color: "#8B0000", label: "Fish" },
    { color: "#B8860B", label: "Shrimp" },
    { color: "#CC0000", label: "Mild Sauce" },
    { color: "#1A1A1A", label: "Kitchen" },
    { color: "#8B0000", label: "Combos" },
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
              style={{
                background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}CC 100%)`,
              }}
              aria-label={`Instagram post: ${item.label}`}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                <span
                  className="text-sm tracking-widest text-white"
                  style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase" }}
                >
                  {item.label}
                </span>
              </div>
              {/* Instagram icon overlay on hover */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none" />
                </svg>
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
