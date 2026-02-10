const ORDER_CAUSEWAY = "https://kayschickenkitchen.smartonlineorder.com";
const ORDER_BEARSS = "https://online.skytab.com/04019c96e9c8c93ddbfcc825a37f240a";

export default function OrderCTA() {
  return (
    <section
      id="order"
      className="section-padding relative text-center overflow-hidden"
      style={{ background: "var(--primary)" }}
    >
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(0,0,0,0.15) 20px, rgba(0,0,0,0.15) 22px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2
          className="text-4xl sm:text-5xl mb-3"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--text-on-primary)" }}
        >
          Ready to Taste <span style={{ color: "var(--secondary)" }}>Chicago?</span>
        </h2>
        <p className="text-sm sm:text-base mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
          Order online for pickup or delivery from either Tampa location
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-5">
          <a
            href={ORDER_CAUSEWAY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !text-sm w-full sm:w-auto"
          >
            Order &mdash; Causeway Blvd
          </a>
          <a
            href={ORDER_BEARSS}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !text-sm w-full sm:w-auto"
          >
            Order &mdash; Bearss Ave
          </a>
        </div>
        <a
          href="tel:8138930415"
          className="inline-flex items-center gap-2 text-sm transition-colors"
          style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.8)" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          (813) 893-0415
        </a>

        {/* Delivery platforms */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <span className="text-xs tracking-wider" style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
            Also on:
          </span>
          {["DoorDash", "Uber Eats", "Postmates"].map((platform) => (
            <span
              key={platform}
              className="text-xs tracking-wider"
              style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", letterSpacing: "0.08em" }}
            >
              {platform}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
