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
      googleRating: "4.2",
      googleReviews: "171",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=10323+Causeway+Blvd+Tampa+FL+33619",
      orderUrl: ORDER_CAUSEWAY,
      highlight: null,
    },
    {
      name: "Bearss Ave",
      type: "Full-Service",
      address: "2808 E Bearss Ave",
      city: "Tampa, FL 33613",
      phone: "(813) 893-0415",
      hours: [
        { days: "Tue - Thu", time: "11:00 AM - 2:00 AM" },
        { days: "Fri - Sat", time: "11:00 AM - 4:00 AM" },
        { days: "Sun", time: "12:00 PM - 2:00 AM" },
        { days: "Mon", time: "Closed" },
      ],
      features: ["Dine-In", "Takeout", "Late Night"],
      googleRating: "4.6",
      googleReviews: "206",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=2808+E+Bearss+Ave+Tampa+FL+33613",
      orderUrl: ORDER_BEARSS,
      highlight: "Open until 4AM on weekends!",
    },
  ];

  return (
    <section id="locations" className="section-padding" style={{ background: "var(--background-alt)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-sm tracking-widest mb-3"
            style={{ fontFamily: "var(--font-heading)", color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.15em" }}
          >
            Find Us
          </p>
          <h2
            className="text-4xl sm:text-5xl"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--text-primary-on-light)" }}
          >
            Two Tampa <span style={{ color: "var(--primary)" }}>Locations</span>
          </h2>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="rounded-2xl overflow-hidden"
              style={{ background: "white", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
            >
              {/* Card Header */}
              <div className="px-6 py-5 flex items-center justify-between" style={{ background: "var(--accent)" }}>
                <h3 className="text-xl" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--text-primary)" }}>
                  {loc.name}
                </h3>
                <span
                  className="text-[11px] px-3 py-1 rounded-full font-semibold"
                  style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "0.08em", background: "var(--primary)", color: "var(--text-on-primary)" }}
                >
                  {loc.type}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8">
                {/* Google Rating */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4].map((i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--secondary)">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                    <svg width="14" height="14" viewBox="0 0 24 24">
                      <defs>
                        <linearGradient id={`star-${loc.name}`}>
                          <stop offset={loc.name === "Causeway Blvd" ? "20%" : "60%"} stopColor="var(--secondary)" />
                          <stop offset={loc.name === "Causeway Blvd" ? "20%" : "60%"} stopColor="#ccc" />
                        </linearGradient>
                      </defs>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill={`url(#star-${loc.name})`} />
                    </svg>
                  </div>
                  <span className="text-sm font-bold" style={{ color: "var(--text-primary-on-light)" }}>{loc.googleRating}</span>
                  <span className="text-xs" style={{ color: "var(--text-secondary-on-light)" }}>({loc.googleReviews} Google reviews)</span>
                </div>

                {/* Highlight */}
                {loc.highlight && (
                  <div className="mb-5 py-2 px-4 rounded-lg text-sm font-bold" style={{ background: "rgba(221,40,3,0.08)", color: "var(--primary)", fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {loc.highlight}
                  </div>
                )}

                {/* Address + Phone */}
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div>
                    <p className="text-[11px] tracking-wider mb-1.5 uppercase" style={{ fontFamily: "var(--font-heading)", color: "var(--text-secondary-on-light)" }}>Address</p>
                    <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline leading-snug" style={{ color: "var(--text-primary-on-light)", fontWeight: 500 }}>
                      {loc.address}<br />{loc.city}
                    </a>
                  </div>
                  <div>
                    <p className="text-[11px] tracking-wider mb-1.5 uppercase" style={{ fontFamily: "var(--font-heading)", color: "var(--text-secondary-on-light)" }}>Phone</p>
                    <a href="tel:8138930415" className="text-sm font-bold hover:underline" style={{ color: "var(--primary)" }}>{loc.phone}</a>
                  </div>
                </div>

                {/* Hours */}
                <div className="mb-5">
                  <p className="text-[11px] tracking-wider mb-2 uppercase" style={{ fontFamily: "var(--font-heading)", color: "var(--text-secondary-on-light)" }}>Hours</p>
                  <div className="space-y-1">
                    {loc.hours.map((h) => (
                      <div key={h.days} className="flex justify-between text-sm" style={{ color: "var(--text-primary-on-light)" }}>
                        <span style={{ fontWeight: 500 }}>{h.days}</span>
                        <span style={{ color: h.time === "Closed" ? "var(--primary)" : "var(--text-primary-on-light)", fontWeight: h.time === "Closed" ? 600 : 400 }}>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="flex gap-2 flex-wrap mb-5">
                  {loc.features.map((f) => (
                    <span key={f} className="text-[11px] px-3 py-1.5 rounded-full font-semibold" style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "0.06em", background: "rgba(221,40,3,0.07)", color: "var(--primary)" }}>
                      {f}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a href={loc.orderUrl} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 text-center !py-3 !text-sm">
                    Order Online
                  </a>
                  <a
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center inline-flex items-center justify-center gap-2 py-3 text-sm font-bold rounded hover:bg-gray-50 transition-colors"
                    style={{ color: "var(--primary)", fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "0.05em", border: "2px solid var(--primary)" }}
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
