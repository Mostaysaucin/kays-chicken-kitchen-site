export default function Instagram() {
  /* REAL photos from Kay's website and DoorDash */
  const gridItems = [
    { img: "https://static.wixstatic.com/media/8b06b4_4a8f718f467a4fd6bbac84ac9abca0e4~mv2.jpg/v1/fill/w_600,h_600,al_c,q_80/8b06b4_4a8f718f467a4fd6bbac84ac9abca0e4~mv2.jpg", label: "Wings" },
    { img: "https://static.wixstatic.com/media/8b06b4_4484ceed69d7485d9b5df5c456db5182~mv2.jpg/v1/fill/w_600,h_600,al_c,q_80/8b06b4_4484ceed69d7485d9b5df5c456db5182~mv2.jpg", label: "Grouper" },
    { img: "https://static.wixstatic.com/media/8b06b4_75244bd541c34705b28c2ce8a93c6568~mv2.png/v1/fill/w_600,h_600,al_c,q_85/8b06b4_75244bd541c34705b28c2ce8a93c6568~mv2.png", label: "Shrimp" },
    { img: "https://static.wixstatic.com/media/8b06b4_1abe9c9136c44a808cf3c325e44967f7~mv2.jpg/v1/fill/w_600,h_600,al_c,q_80/8b06b4_1abe9c9136c44a808cf3c325e44967f7~mv2.jpg", label: "Chicken Sandwich" },
    { img: "https://static.wixstatic.com/media/8b06b4_feeb4e0cd5da42e18c321db281a50820~mv2.jpg/v1/fill/w_600,h_600,al_c,q_80/8b06b4_feeb4e0cd5da42e18c321db281a50820~mv2.jpg", label: "Pizza Puffs" },
    { img: "https://static.wixstatic.com/media/8b06b4_e18d5d387e154c65838ca810e5976831~mv2.jpg/v1/fill/w_600,h_600,al_c,q_80/8b06b4_e18d5d387e154c65838ca810e5976831~mv2.jpg", label: "Chicken Strips" },
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
