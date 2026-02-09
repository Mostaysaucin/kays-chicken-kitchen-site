export default function OrderCTA() {
  return (
    <section
      id="order"
      className="relative flex items-center justify-center text-center"
      style={{
        background: "var(--red)",
        padding: "60px 24px",
      }}
    >
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(0,0,0,0.1) 20px, rgba(0,0,0,0.1) 22px)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl mb-6"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "white" }}
        >
          Ready to Taste{" "}
          <span style={{ color: "var(--gold)" }}>Chicago?</span>
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="tel:8138930415" className="btn-gold">
            Order Now
          </a>
          <a href="tel:8138930415" className="btn-white-outline">
            Call to Order: (813) 893-0415
          </a>
        </div>
      </div>
    </section>
  );
}
