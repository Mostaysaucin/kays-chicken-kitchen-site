import { EMAIL, PHONE, PHONE_HREF } from "@/lib/constants";

export default function Catering() {
  const features = [
    {
      icon: (
        <svg aria-hidden="true" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="1.5" strokeLinecap="round">
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
        <svg aria-hidden="true" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="1.5" strokeLinecap="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      title: "Corporate Events",
      desc: "Feed your team with Chicago flavor they won't forget",
    },
    {
      icon: (
        <svg aria-hidden="true" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="1.5" strokeLinecap="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      title: "Family Gatherings",
      desc: "Bring everyone together with real soul food, Chicago style",
    },
    {
      icon: (
        <svg aria-hidden="true" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="1.5" strokeLinecap="round">
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
    <section id="catering" className="section-padding" style={{ background: "var(--background)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-sm tracking-widest mb-3"
            style={{ fontFamily: "var(--font-heading)", color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.15em" }}
          >
            Events &amp; Catering
          </p>
          <h2
            className="text-4xl sm:text-5xl mb-5"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--text-primary)" }}
          >
            Catering for <span style={{ color: "var(--secondary)" }}>Any Occasion</span>
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
            Bring the authentic Chicago flavor to your next event. From corporate lunches to
            family reunions, we&apos;ve got you covered with food that brings people together.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 mb-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center p-6 sm:p-8 rounded-xl"
              style={{ background: "var(--surface)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3
                className="text-sm sm:text-base mb-2"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "0.05em" }}
              >
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Info & CTA */}
        <div className="text-center">
          <div
            className="inline-block p-8 rounded-xl mb-8"
            style={{ background: "var(--surface)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p className="text-sm mb-3" style={{ color: "var(--text-secondary)", fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Get in touch for catering inquiries
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-sm font-bold transition-colors" style={{ color: "var(--secondary)" }}>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {EMAIL}
              </a>
              <a href={PHONE_HREF} className="flex items-center gap-2 text-sm font-bold transition-colors" style={{ color: "var(--secondary)" }}>
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {PHONE}
              </a>
            </div>
          </div>
          <div>
            <a href={`mailto:${EMAIL}`} className="btn-primary">
              Inquire About Catering
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
