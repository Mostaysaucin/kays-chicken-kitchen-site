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
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=10323+Causeway+Blvd+Tampa+FL+33619",
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
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=2808+E+Bearss+Ave+Tampa+FL+33613",
      note: "Featuring DJ Cotton performing R&B from upstairs booth.",
    },
  ];

  return (
    <section
      id="locations"
      className="section-padding"
      style={{ background: "var(--bg-warm)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-sm tracking-widest mb-3"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--red)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            Find Us
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--dark)" }}
          >
            Two Tampa{" "}
            <span style={{ color: "var(--red)" }}>Locations</span>
          </h2>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="rounded-xl overflow-hidden"
              style={{
                background: "white",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              {/* Card Header */}
              <div
                className="px-6 py-4"
                style={{
                  background: "var(--dark)",
                }}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className="text-xl text-white"
                    style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
                  >
                    {loc.name}
                  </h3>
                  <span
                    className="text-xs px-3 py-1 rounded-full"
                    style={{
                      fontFamily: "var(--font-heading)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      background: "var(--red)",
                      color: "white",
                    }}
                  >
                    {loc.type}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-5">
                {/* Address */}
                <div>
                  <p
                    className="text-xs tracking-wider mb-2"
                    style={{
                      fontFamily: "var(--font-heading)",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                    }}
                  >
                    Address
                  </p>
                  <a
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base hover:underline"
                    style={{ color: "var(--dark)", fontWeight: 500 }}
                  >
                    {loc.address}
                    <br />
                    {loc.city}
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <p
                    className="text-xs tracking-wider mb-2"
                    style={{
                      fontFamily: "var(--font-heading)",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                    }}
                  >
                    Phone
                  </p>
                  <a
                    href="tel:8138930415"
                    className="text-lg font-bold hover:underline"
                    style={{ color: "var(--red)", fontFamily: "var(--font-heading)" }}
                  >
                    {loc.phone}
                  </a>
                </div>

                {/* Hours */}
                <div>
                  <p
                    className="text-xs tracking-wider mb-2"
                    style={{
                      fontFamily: "var(--font-heading)",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                    }}
                  >
                    Hours
                  </p>
                  <div className="space-y-1">
                    {loc.hours.map((h) => (
                      <div key={h.days} className="flex justify-between text-sm" style={{ color: "#4A4A4A" }}>
                        <span style={{ fontWeight: 500 }}>{h.days}</span>
                        <span
                          style={{
                            color: h.time === "Closed" ? "var(--red)" : "#4A4A4A",
                            fontWeight: h.time === "Closed" ? 600 : 400,
                          }}
                        >
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="flex gap-2 flex-wrap">
                  {loc.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-3 py-1.5 rounded-full"
                      style={{
                        fontFamily: "var(--font-heading)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        background: "rgba(204, 0, 0, 0.08)",
                        color: "var(--red)",
                        fontWeight: 600,
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Note */}
                {loc.note && (
                  <p
                    className="text-sm pt-2 border-t"
                    style={{
                      color: "#666",
                      fontStyle: "italic",
                      borderColor: "rgba(0,0,0,0.08)",
                    }}
                  >
                    {loc.note}
                  </p>
                )}

                {/* Directions CTA */}
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold hover:underline"
                  style={{
                    color: "var(--red)",
                    fontFamily: "var(--font-heading)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
