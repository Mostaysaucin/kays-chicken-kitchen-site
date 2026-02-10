export default function Story() {
  const stats = [
    { value: "2017", label: "Founded" },
    { value: "29K+", label: "IG Followers" },
    { value: "4.4", label: "Star Rating" },
    { value: "776+", label: "Reviews" },
  ];

  return (
    <section
      id="story"
      className="section-padding"
      style={{ background: "var(--background-alt)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Story Content */}
          <div>
            <p
              className="text-sm tracking-widest mb-4"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--primary)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
              }}
            >
              Our Story
            </p>
            <h2
              className="text-4xl sm:text-5xl mb-8"
              style={{
                fontFamily: "var(--font-accent)",
                fontWeight: 400,
                fontStyle: "italic",
                textTransform: "none",
                letterSpacing: "0",
                lineHeight: 1.2,
                color: "var(--text-primary-on-light)",
              }}
            >
              From a Chicago Kitchen to Tampa&apos;s Table
            </h2>
            <div className="space-y-5" style={{ color: "var(--text-primary-on-light)", fontSize: "16px", lineHeight: 1.8 }}>
              <p>
                Kay Lee grew up in the kitchens of Chicago&apos;s South Side, where fried chicken
                wasn&apos;t just food &mdash; it was family, it was culture, it was home. Every bite
                carried the warmth of a grandmother&apos;s recipe and the unmistakable flavor of
                Chicago&apos;s legendary mild sauce.
              </p>
              <p>
                When Ms. Kay moved to Tampa, she discovered something was missing. Nobody was doing
                Chicago-style fried chicken. Nobody had the mild sauce. So in 2017, she and her
                husband Alvin launched a food trailer with one mission: bring the real Chicago flavor
                to Tampa Bay.
              </p>
              <p>
                What started as a trailer became a movement. Through the challenges of COVID-19, Kay
                kept cooking, kept serving, and kept growing. Today, Kay&apos;s Chicken Kitchen has
                two thriving Tampa locations &mdash; a drive-thru on Causeway Blvd and a full-service
                restaurant on Bearss Ave &mdash; and has been featured on FOX 13 Tampa Bay.
              </p>
            </div>

            {/* Owner Quote */}
            <blockquote
              className="mt-8 pl-6"
              style={{
                borderLeft: "3px solid var(--primary)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-accent)",
                  fontStyle: "italic",
                  fontSize: "18px",
                  lineHeight: 1.6,
                  color: "var(--text-primary-on-light)",
                }}
              >
                &ldquo;It has a distinct taste. It&apos;s Ms. Kay&apos;s. Nobody in Tampa is cooking like Ms. Kay&apos;s.&rdquo;
              </p>
              <cite
                className="block mt-3 text-sm not-italic"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--primary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                &mdash; Ms. Kay Lee, Owner &amp; Founder
              </cite>
            </blockquote>
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
                      color: "var(--primary)",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs tracking-wider"
                    style={{
                      fontFamily: "var(--font-heading)",
                      textTransform: "uppercase",
                      color: "var(--text-secondary-on-light)",
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
