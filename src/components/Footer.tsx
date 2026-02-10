const ORDER_CAUSEWAY = "https://kayschickenkitchen.smartonlineorder.com";
const ORDER_BEARSS = "https://online.skytab.com/04019c96e9c8c93ddbfcc825a37f240a";

export default function Footer() {
  return (
    <footer className="site-footer section-padding" style={{ background: "var(--background)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3
              className="text-2xl mb-3"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--secondary)" }}
            >
              KAY&apos;S CHICKEN KITCHEN
            </h3>
            <p className="text-sm mb-4" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
              Tampa&apos;s ONLY Chicago Style Fried Chicken &amp; Fish with the Authentic Chicago
              Style Mild Sauce. Bringing Chicago flavor to Tampa since 2017.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="badge">Black-Owned</span>
              <span className="badge">Woman-Owned</span>
              <span className="badge">Est. 2017</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/kayschickenkitchen"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: "var(--text-secondary)" }}
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://facebook.com/kayschickenkitchen"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: "var(--text-secondary)" }}
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@kayskitchentampa"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: "var(--text-secondary)" }}
                aria-label="TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Locations Column */}
          <div>
            <h4
              className="text-sm tracking-widest mb-4"
              style={{ fontFamily: "var(--font-heading)", color: "var(--secondary)", textTransform: "uppercase", letterSpacing: "0.15em" }}
            >
              Our Locations
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-bold mb-1" style={{ color: "var(--text-primary)" }}>Causeway Blvd (Drive-Thru)</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=10323+Causeway+Blvd+Tampa+FL+33619"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                  style={{ color: "var(--text-secondary)" }}
                >
                  10323 Causeway Blvd, Tampa, FL 33619
                </a>
                <p className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>Tue-Sat 11am-8:30pm</p>
              </div>
              <div>
                <p className="text-sm font-bold mb-1" style={{ color: "var(--text-primary)" }}>Bearss Ave (Full-Service)</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=2808+E+Bearss+Ave+Tampa+FL+33613"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                  style={{ color: "var(--text-secondary)" }}
                >
                  2808 E Bearss Ave, Tampa, FL 33613
                </a>
                <p className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>Tue-Thu 11am-2am | Fri-Sat 11am-4am | Sun 12pm-2am</p>
              </div>
              <div>
                <a href="tel:8138930415" className="text-sm font-bold hover:underline" style={{ color: "var(--primary)" }}>
                  (813) 893-0415
                </a>
                <span className="mx-2" style={{ color: "var(--text-secondary)" }}>|</span>
                <a href="mailto:kayssmokehouse@gmail.com" className="text-sm hover:underline" style={{ color: "var(--text-secondary)" }}>
                  kayssmokehouse@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Order & Delivery Column */}
          <div>
            <h4
              className="text-sm tracking-widest mb-4"
              style={{ fontFamily: "var(--font-heading)", color: "var(--secondary)", textTransform: "uppercase", letterSpacing: "0.15em" }}
            >
              Order Online
            </h4>
            <div className="space-y-3">
              <a
                href={ORDER_CAUSEWAY}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-colors"
                style={{ color: "var(--text-primary)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--secondary)" }} />
                Causeway Blvd
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-auto opacity-40">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
              <a
                href={ORDER_BEARSS}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-colors"
                style={{ color: "var(--text-primary)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--primary)" }} />
                Bearss Ave
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-auto opacity-40">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>

              {/* Delivery Platforms */}
              <div className="pt-4 mt-1" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <p className="text-xs tracking-wider mb-3" style={{ fontFamily: "var(--font-heading)", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Delivery Partners
                </p>
                <div className="flex flex-wrap gap-2">
                  {["DoorDash", "Uber Eats", "Postmates"].map((platform) => (
                    <span
                      key={platform}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{ background: "var(--surface)", color: "var(--text-secondary)", fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "0.05em" }}
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
            &copy; {new Date().getFullYear()} Kay&apos;s Chicken Kitchen, Est. 2017. All rights reserved. | Black-Owned &amp; Woman-Owned
          </p>
        </div>
      </div>
    </footer>
  );
}
