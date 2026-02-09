export default function Footer() {
  return (
    <footer className="site-footer section-padding" style={{ background: "var(--bg-dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3
              className="text-2xl mb-3"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--gold)" }}
            >
              KAY&apos;S CHICKEN KITCHEN
            </h3>
            <p className="text-sm mb-4" style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
              Tampa&apos;s ONLY Chicago Style Fried Chicken &amp; Fish with the Authentic Chicago
              Style Mild Sauce. Bringing Chicago flavor to Tampa since 2017.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="badge">Black-Owned</span>
              <span className="badge">Woman-Owned</span>
              <span className="badge">Est. 2017</span>
            </div>
          </div>

          {/* Locations Column */}
          <div>
            <h4
              className="text-sm tracking-widest mb-4"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--gold)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
              }}
            >
              Our Locations
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-bold text-white mb-1">Causeway Blvd (Drive-Thru)</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=10323+Causeway+Blvd+Tampa+FL+33619"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                  style={{ color: "var(--text-muted)" }}
                >
                  10323 Causeway Blvd, Tampa, FL 33619
                </a>
              </div>
              <div>
                <p className="text-sm font-bold text-white mb-1">Bearss Ave (Full-Service)</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=2808+E+Bearss+Ave+Tampa+FL+33613"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                  style={{ color: "var(--text-muted)" }}
                >
                  2808 E Bearss Ave, Tampa, FL 33613
                </a>
              </div>
              <div>
                <a
                  href="tel:8138930415"
                  className="text-sm font-bold hover:underline"
                  style={{ color: "var(--red)" }}
                >
                  (813) 893-0415
                </a>
              </div>
            </div>
          </div>

          {/* Social & Order Column */}
          <div>
            <h4
              className="text-sm tracking-widest mb-4"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--gold)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
              }}
            >
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href="https://instagram.com/kayschickenkitchen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm hover:text-[#FFD700] transition-colors"
                style={{ color: "var(--text-muted)" }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
                @kayschickenkitchen
              </a>
              <a
                href="tel:8138930415"
                className="btn-gold w-full text-center !text-sm !py-3 mt-4"
              >
                Order Online
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 text-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            &copy; {new Date().getFullYear()} Kay&apos;s Chicken Kitchen, Est. 2017. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
