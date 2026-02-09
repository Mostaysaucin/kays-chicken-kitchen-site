const ORDER_CAUSEWAY = "https://kayschickenkitchen.smartonlineorder.com";
const ORDER_BEARSS = "https://online.skytab.com/04019c96e9c8c93ddbfcc825a37f240a";

export default function OrderCTA() {
  return (
    <section
      id="order"
      className="relative flex items-center justify-center text-center"
      style={{
        background: "var(--red)",
        padding: "80px 24px",
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

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl mb-4"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "white" }}
        >
          Ready to Taste{" "}
          <span style={{ color: "var(--gold)" }}>Chicago?</span>
        </h2>
        <p className="text-base mb-8" style={{ color: "rgba(255,255,255,0.85)" }}>
          Order online for pickup or delivery from either Tampa location
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <a href={ORDER_CAUSEWAY} target="_blank" rel="noopener noreferrer" className="btn-gold">
            Causeway Blvd
          </a>
          <a href={ORDER_BEARSS} target="_blank" rel="noopener noreferrer" className="btn-gold">
            Bearss Ave
          </a>
        </div>
        <a href="tel:8138930415" className="btn-white-outline">
          Call: (813) 893-0415
        </a>
      </div>
    </section>
  );
}
