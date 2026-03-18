"use client";

import { LOCATIONS, HERO_BG_IMAGE } from "@/lib/constants";
import { useLocation } from "@/lib/location-context";

export default function Hero() {
  const { selectedLocation, hydrated } = useLocation();
  const loc = selectedLocation ? LOCATIONS[selectedLocation] : null;
  const otherId = selectedLocation === "causeway" ? "bearss" as const : "causeway" as const;
  const other = selectedLocation ? LOCATIONS[otherId] : null;

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center text-center overflow-hidden section-padding"
      style={{ minHeight: "100vh", background: "var(--background)" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${HERO_BG_IMAGE}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(15,15,15,0.55) 0%, rgba(15,15,15,0.75) 100%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto py-32 md:py-40">
        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 animate-fade-in-up">
          <span className="badge">Black-Owned</span>
          <span className="badge">Woman-Owned</span>
          <span className="badge">Est. 2017</span>
          <span className="badge">2 Tampa Locations</span>
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 animate-fade-in-up animate-delay-100"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            lineHeight: 1.05,
            color: "var(--text-primary)",
          }}
        >
          Great Food{" "}
          <span style={{ color: "var(--secondary)" }}>The Chi-Town Way</span>
        </h1>

        {/* Secondary tagline */}
        <p
          className="font-accent text-xl sm:text-2xl md:text-3xl mb-6 animate-fade-in-up animate-delay-100"
          style={{
            fontFamily: "var(--font-accent)",
            fontStyle: "italic",
            color: "rgba(255,255,255,0.85)",
            textTransform: "none",
            letterSpacing: "0",
            fontWeight: 400,
          }}
        >
          Let Me Take Your Taste Buds For A Ride
        </p>

        {/* Subheadline */}
        <p
          className="text-base sm:text-lg max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-200"
          style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}
        >
          Tampa&apos;s ONLY Chicago Style Fried Chicken &amp; Fish with the Authentic Chicago Style Mild Sauce
        </p>

        {/* CTAs — location-aware */}
        <div className="animate-fade-in-up animate-delay-300">
          <p
            className="text-xs tracking-widest mb-4"
            style={{ fontFamily: "var(--font-heading)", color: "var(--secondary)", textTransform: "uppercase", letterSpacing: "0.15em" }}
          >
            Order Online
          </p>
          {hydrated && loc && other ? (
            <div className="flex flex-col items-center gap-3">
              <a href={loc.orderUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Order &mdash; {loc.name}
              </a>
              <a
                href={other.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors"
                style={{ color: "var(--text-secondary)", fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "0.08em" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--secondary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                Or order from {other.name} &rarr;
              </a>
              <a href="#menu" className="btn-red-outline !py-3 !px-8 !text-sm mt-1">
                View Our Menu
              </a>
            </div>
          ) : (
            <div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                <a href={LOCATIONS.causeway.orderUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Order &mdash; Causeway Blvd
                </a>
                <a href={LOCATIONS.bearss.orderUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Order &mdash; Bearss Ave
                </a>
              </div>
              <a href="#menu" className="btn-red-outline !py-3 !px-8 !text-sm">
                View Our Menu
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: "linear-gradient(to top, var(--background) 0%, transparent 100%)" }}
      />
    </section>
  );
}
