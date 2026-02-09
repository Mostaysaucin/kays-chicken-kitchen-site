export default function Story() {
  const stats = [
    { value: "2017", label: "Founded" },
    { value: "29K+", label: "Instagram Followers" },
    { value: "4.5", label: "Star Rating" },
    { value: "2", label: "Tampa Locations" },
  ];

  return (
    <section
      id="story"
      className="section-padding"
      style={{ background: "var(--bg-warm)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Story Content */}
          <div>
            <p
              className="text-sm tracking-widest mb-4"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--red)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
              }}
            >
              Our Story
            </p>
            <h2
              className="font-accent text-3xl sm:text-4xl md:text-5xl mb-8"
              style={{
                color: "var(--dark)",
                fontFamily: "var(--font-accent)",
                fontWeight: 400,
                fontStyle: "italic",
                textTransform: "none",
                letterSpacing: "0",
                lineHeight: 1.2,
              }}
            >
              From a Chicago Kitchen to Tampa&apos;s Table
            </h2>
            <div className="space-y-5" style={{ color: "#4A4A4A", fontSize: "16px", lineHeight: 1.8 }}>
              <p>
                Kay Lee grew up in the kitchens of Chicago&apos;s South Side, where fried chicken
                wasn&apos;t just food &mdash; it was family, it was culture, it was home. Every bite
                carried the warmth of a grandmother&apos;s recipe and the unmistakable flavor of
                Chicago&apos;s legendary mild sauce.
              </p>
              <p>
                When Kay moved to Tampa, she discovered something was missing. Nobody was doing
                Chicago-style fried chicken. Nobody had the mild sauce. So in 2017, she launched a
                food trailer with one mission: bring the real Chicago flavor to Tampa Bay.
              </p>
              <p>
                What started as a trailer became a movement. Through the challenges of COVID-19, Kay
                kept cooking, kept serving, and kept growing. Today, Kay&apos;s Chicken Kitchen has
                two thriving Tampa locations &mdash; a drive-thru on Causeway Blvd and a full-service
                restaurant on Bearss Ave &mdash; and has been featured on FOX 13 Tampa Bay.
              </p>
              <p style={{ fontWeight: 700, color: "var(--dark)" }}>
                One thing hasn&apos;t changed: every piece of chicken is made with love, and the
                only sauce you&apos;ll find is the authentic Chicago mild sauce. No ketchup. Ever.
              </p>
            </div>
          </div>

          {/* Right: Image & Stats */}
          <div>
            {/* REAL food image from Kay's website */}
            <div
              className="rounded-xl mb-8 overflow-hidden"
              style={{
                height: "400px",
                position: "relative",
              }}
            >
              <img
                src="https://static.wixstatic.com/media/8b06b4_0adbf0d8a7204259a87d3dbbb2125068~mv2.jpg/v1/fill/w_800,h_800,al_c,q_80/8b06b4_0adbf0d8a7204259a87d3dbbb2125068~mv2.jpg"
                alt="Kay's Chicken Kitchen wings, shrimp, and fries with mild sauce"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{
                  background: "linear-gradient(to top, rgba(15,15,15,0.9) 0%, transparent 100%)",
                }}
              >
                <span
                  className="text-sm tracking-[0.2em] text-white/90"
                  style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase" }}
                >
                  Since 2017 &middot; Tampa, FL
                </span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-5 rounded-lg"
                  style={{ background: "white", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
                >
                  <div
                    className="text-2xl md:text-3xl mb-1"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      color: "var(--red)",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs tracking-wider"
                    style={{
                      fontFamily: "var(--font-heading)",
                      textTransform: "uppercase",
                      color: "#666",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
