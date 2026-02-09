const ORDER_CAUSEWAY = "https://kayschickenkitchen.smartonlineorder.com";
const ORDER_BEARSS = "https://online.skytab.com/04019c96e9c8c93ddbfcc825a37f240a";

export default function Locations() {
  const locations = [
    {
      name: "Causeway Blvd",
      type: "Drive-Thru",
      address: "10323 Causeway Blvd",
      city: "Tampa, FL 33619",
      phone: "(813) 893-0415",
      hours: [
        { days: "Tue - Sat", time: "11:00 AM - 8:30 PM" },
        { days: "Mon & Sun", time: "Closed" },
      ],
      features: ["Drive-Thru", "Takeout"],
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=10323+Causeway+Blvd+Tampa+FL+33619",
      orderUrl: ORDER_CAUSEWAY,
      note: null,
    },
    {
      name: "Bearss Ave",
      type: "Full-Service",
      address: "2808 E Bearss Ave",
      city: "Tampa, FL 33613",
      phone: "(813) 893-0415",
      hours: [
        { days: "Tue - Thu", time: "11:00 AM - 9:00 PM" },
        { days: "Fri - Sat", time: "11:00 AM - 10:00 PM" },
        { days: "Sun", time: "12:00 PM - 9:00 PM" },
        { days: "Mon", time: "Closed" },
      ],
      features: ["Dine-In", "Takeout"],
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=2808+E+Bearss+Ave+Tampa+FL+33613",
      orderUrl: ORDER_BEARSS,
      note: "Featuring DJ Cotton performing R&B from upstairs booth.",
    },
  ];

  return (
    <section id="locations" className="section-padding" style={{ background: "var(--bg-warm)" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p
            className="text-sm tracking-widest mb-3"
            style={{ fontFamily: "var(--font-heading)", color: "var(--red)", textTransform: "uppercase", letterSpacing: "0.15em" }}
          >
            Find Us
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--dark)" }}
          >
            Two Tampa <span style={{ color: "var(--red)" }}>Locations</span>
          </h2>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="rounded-2xl overflow-hidden"
              style={{ background: "white", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
            >
              {/* Card Header */}
              <div className="px-6 py-5 flex items-center justify-between" style={{ background: "var(--dark)" }}>
                <h3 className="text-xl text-white" style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                  {loc.name}
                </h3>
                <span
                  className="text-[11px] px-3 py-1 rounded-full font-semibold"
                  style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "0.08em", background: "var(--red)", color: "white" }}
                >
                  {loc.type}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6">
                {/* Address + Phone */}
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div>
                    <p className="text-[11px] tracking-wider mb-1.5 uppercase" style={{ fontFamily: "var(--font-heading)", color: "#999" }}>Address</p>
                    <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline leading-snug" style={{ color: "var(--dark)", fontWeight: 500 }}>
                      {loc.address}<br />{loc.city}
                    </a>
                  </div>
                  <div>
                    <p className="text-[11px] tracking-wider mb-1.5 uppercase" style={{ fontFamily: "var(--font-heading)", color: "#999" }}>Phone</p>
                    <a href="tel:8138930415" className="text-sm font-bold hover:underline" style={{ color: "var(--red)" }}>{loc.phone}</a>
                  </div>
                </div>

                {/* Hours */}
                <div className="mb-5">
                  <p className="text-[11px] tracking-wider mb-2 uppercase" style={{ fontFamily: "var(--font-heading)", color: "#999" }}>Hours</p>
                  <div className="space-y-1">
                    {loc.hours.map((h) => (
                      <div key={h.days} className="flex justify-between text-sm" style={{ color: "#444" }}>
                        <span style={{ fontWeight: 500 }}>{h.days}</span>
                        <span style={{ color: h.time === "Closed" ? "var(--red)" : "#444", fontWeight: h.time === "Closed" ? 600 : 400 }}>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="flex gap-2 flex-wrap mb-5">
                  {loc.features.map((f) => (
                    <span key={f} className="text-[11px] px-3 py-1.5 rounded-full font-semibold" style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "0.06em", background: "rgba(204,0,0,0.07)", color: "var(--red)" }}>
                      {f}
                    </span>
                  ))}
                </div>

                {/* Note */}
                {loc.note && (
                  <p className="text-sm mb-5 italic" style={{ color: "#888", borderTop: "1px solid #eee", paddingTop: "12px" }}>{loc.note}</p>
                )}

                {/* Actions */}
                <div className="flex gap-3">
                  <a href={loc.orderUrl} target="_blank" rel="noopener noreferrer" className="btn-gold flex-1 text-center !py-3 !text-sm">
                    Order Online
                  </a>
                  <a
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center inline-flex items-center justify-center gap-2 py-3 text-sm font-bold rounded hover:bg-gray-50 transition-colors"
                    style={{ color: "var(--red)", fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "0.05em", border: "2px solid var(--red)" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Directions
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
