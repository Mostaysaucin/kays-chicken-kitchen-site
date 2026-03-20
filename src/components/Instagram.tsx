import ScrollReveal from "./ScrollReveal";

export default function Instagram() {
  const videos = [
    { src: "/videos/reel-1-web.mp4", label: "Kay's Kitchen Reel" },
    { src: "/videos/reel-2-web.mp4", label: "Kay's Kitchen Reel" },
    { src: "/videos/reel-3-web.mp4", label: "Kay's Kitchen Reel" },
  ];

  const images = [
    { img: "/images/food/full-spread.jpg", label: "Wings, Mac & Cheese, Greens" },
    { img: "/images/food/wings-fries-sauce-pour.jpg", label: "Wings & Mild Sauce" },
    { img: "/images/food/wing-sauce-kitchen.jpg", label: "Fresh from the Kitchen" },
  ];

  return (
    <section
      id="instagram"
      className="section-padding"
      style={{ background: "var(--background-alt)" }}
    >
      <ScrollReveal>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p
            className="text-sm tracking-widest mb-3"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--primary)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            Follow the Flavor
          </p>
          <h2
            className="text-4xl sm:text-5xl mb-3"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--text-primary-on-light)" }}
          >
            @kayschickenkitchen
          </h2>
          <p className="text-base" style={{ color: "var(--text-secondary-on-light)" }}>
            29K+ followers &middot; Chicago flavor, Tampa heat
          </p>
        </div>

        {/* Videos Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
          {videos.map((video, index) => (
            <a
              key={index}
              href="https://instagram.com/kayschickenkitchen"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-[9/16] sm:aspect-square rounded-lg overflow-hidden relative group block"
              aria-label={`Instagram reel: ${video.label}`}
            >
              <video
                src={video.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                <span
                  className="text-xs tracking-widest"
                  style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase", color: "var(--text-primary)" }}
                >
                  Watch on Instagram
                </span>
              </div>
              {/* Play icon badge */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(0,0,0,0.5)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Images Row */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-10">
          {images.map((item, index) => (
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
                width={600}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
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
                  className="text-xs tracking-widest"
                  style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase", color: "var(--text-primary)" }}
                >
                  {item.label}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Social CTAs */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="https://instagram.com/kayschickenkitchen"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red"
            >
              Follow Us on Instagram
            </a>
          </div>

          {/* Other Socials */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://facebook.com/kayschickenkitchen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-colors"
              style={{ color: "var(--text-secondary-on-light)", fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "0.05em" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook &middot; 8.4K
            </a>
            <a
              href="https://tiktok.com/@kayskitchentampa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-colors"
              style={{ color: "var(--text-secondary-on-light)", fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "0.05em" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
              TikTok
            </a>
          </div>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
