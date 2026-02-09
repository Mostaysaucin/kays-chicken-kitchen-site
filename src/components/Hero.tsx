const ORDER_CAUSEWAY = "https://kayschickenkitchen.smartonlineorder.com";
const ORDER_BEARSS = "https://online.skytab.com/04019c96e9c8c93ddbfcc825a37f240a";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center text-center overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://static.wixstatic.com/media/8b06b4_2f62a41d599344f3ae2445223948891f~mv2.jpg/v1/fill/w_1920,h_1280,al_c,q_85,enc_avif,quality_auto/8b06b4_2f62a41d599344f3ae2445223948891f~mv2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(15,15,15,0.55) 0%, rgba(15,15,15,0.75) 100%)" }}
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
          style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}
        >
          Tampa&apos;s ONLY Chicago Style Fried Chicken &amp; Fish with the Authentic Chicago Style Mild Sauce
        </p>

        {/* CTAs — two location buttons */}
        <div className="animate-fade-in-up animate-delay-300">
          <p
            className="text-xs tracking-widest mb-4"
            style={{ fontFamily: "var(--font-heading)", color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.15em" }}
          >
            Order Online
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <a href={ORDER_CAUSEWAY} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Causeway Blvd
            </a>
            <a href={ORDER_BEARSS} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Bearss Ave
            </a>
          </div>
          <a href="#menu" className="btn-red-outline !py-3 !px-8 !text-sm">
            View Our Menu
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: "linear-gradient(to top, #0F0F0F 0%, transparent 100%)" }}
      />
    </section>
  );
}
