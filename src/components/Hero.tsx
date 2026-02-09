export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center text-center"
      style={{
        minHeight: "80vh",
        background: "linear-gradient(135deg, rgba(204, 0, 0, 0.15) 0%, rgba(26, 26, 26, 0.95) 100%), #0F0F0F",
      }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 25% 25%, #CC0000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 md:py-40">
        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 animate-fade-in-up">
          <span className="badge">Black-Owned</span>
          <span className="badge">Woman-Owned</span>
          <span className="badge">Est. 2017</span>
          <span className="badge">2 Tampa Locations</span>
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 animate-fade-in-up animate-delay-100"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            lineHeight: 1.05,
          }}
        >
          Chicago&apos;s Finest Fried Chicken.{" "}
          <span style={{ color: "var(--gold)" }}>Tampa&apos;s Favorite.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-200"
          style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}
        >
          Tampa&apos;s ONLY Chicago Style Fried Chicken &amp; Fish with the Authentic Chicago Style
          Mild Sauce
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
          <a href="tel:8138930415" className="btn-gold">
            Order Now
          </a>
          <a href="#menu" className="btn-red-outline">
            View Our Menu
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{
          background: "linear-gradient(to top, #0F0F0F 0%, transparent 100%)",
        }}
      />
    </section>
  );
}
