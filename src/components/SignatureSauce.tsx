export default function SignatureSauce() {
  return (
    <section
      id="sauce"
      className="section-padding relative text-center overflow-hidden"
      style={{ background: "var(--primary)" }}
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
          className="text-4xl sm:text-5xl mb-4"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--text-on-primary)" }}
        >
          The Authentic Chicago Style{" "}
          <span style={{ color: "var(--secondary)" }}>Mild Sauce</span>
        </h2>
        <p
          className="text-base sm:text-lg mb-6 max-w-xl mx-auto"
          style={{ color: "rgba(255,255,255,0.9)", lineHeight: 1.7 }}
        >
          Tangy, sweet, slightly spicy &mdash; and you can&apos;t get it anywhere else in Tampa. Our
          signature mild sauce is made from a family recipe brought straight from Chicago. Forget
          ketchup. This is the real deal.
        </p>

        {/* Owner quote */}
        <p
          className="text-lg sm:text-xl mb-8 max-w-lg mx-auto"
          style={{
            fontFamily: "var(--font-accent)",
            fontStyle: "italic",
            color: "var(--secondary)",
            textTransform: "none",
            letterSpacing: "0",
            fontWeight: 400,
          }}
        >
          &ldquo;No ketchup. Ever. Only the real Chicago mild sauce.&rdquo;
          <span className="block text-sm mt-2 not-italic" style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.7)" }}>
            &mdash; Ms. Kay
          </span>
        </p>

        <a href="#menu" className="btn-primary">
          Try It For Yourself
        </a>
      </div>
    </section>
  );
}
