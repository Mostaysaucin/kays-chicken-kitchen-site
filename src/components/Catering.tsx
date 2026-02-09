export default function Catering() {
  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Party Platters",
      desc: "Wings, fish, and all the fixings for your next get-together",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      title: "Corporate Events",
      desc: "Feed your team with Chicago flavor they won't forget",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      title: "Family Gatherings",
      desc: "Bring everyone together with real soul food, Chicago style",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
      title: "Custom Menus",
      desc: "Tailored menus designed around your event and preferences",
    },
  ];

  return (
    <section id="catering" className="section-padding" style={{ background: "var(--bg-dark)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-sm tracking-widest mb-3"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--red)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            Events & Catering
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
          >
            Catering for{" "}
            <span style={{ color: "var(--gold)" }}>Any Occasion</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Bring the authentic Chicago flavor to your next event. From corporate lunches to
            family reunions, we&apos;ve got you covered with food that brings people together.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center p-8 rounded-xl transition-all duration-200 hover:border-[#CC0000]/20"
              style={{
                background: "var(--surface)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3
                className="text-base mb-2"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "white" }}
              >
                {feature.title}
              </h3>
              <p className="text-sm" style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="tel:8138930415" className="btn-gold">
            Inquire About Catering
          </a>
        </div>
      </div>
    </section>
  );
}
