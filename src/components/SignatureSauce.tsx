export default function SignatureSauce() {
  return (
    <section
      id="sauce"
      className="section-padding relative text-center overflow-hidden"
      style={{ background: "var(--red)" }}
    >
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(0,0,0,0.1) 20px, rgba(0,0,0,0.1) 22px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl mb-4"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "white" }}
        >
          The Authentic Chicago Style{" "}
          <span style={{ color: "var(--gold)" }}>Mild Sauce</span>
        </h2>
        <p
          className="text-base sm:text-lg mb-8 max-w-xl mx-auto"
          style={{ color: "rgba(255,255,255,0.9)", lineHeight: 1.7 }}
        >
          Tangy, sweet, slightly spicy &mdash; and you can&apos;t get it anywhere else in Tampa. Our
          signature mild sauce is made from a family recipe brought straight from Chicago. Forget
          ketchup. This is the real deal.
        </p>
        <a href="#menu" className="btn-gold">
          Try It For Yourself
        </a>
      </div>
    </section>
  );
}
