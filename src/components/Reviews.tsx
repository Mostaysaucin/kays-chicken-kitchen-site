export default function Reviews() {
  const reviews = [
    {
      text: "Best chicken and fish in Tampa! The best seasoned chicken and special sauce. Ms. Kay is always welcoming.",
      author: "Google Review",
    },
    {
      text: "The best chicken I've ever tasted. The flavor will have you coming back for more.",
      author: "Google Review",
    },
    {
      text: "This place is amazing. Chicken is perfect in size, perfectly crisp, and the Chicago style seasoning is chef's kiss.",
      author: "Google Review",
    },
  ];

  const mediaFeatures = ["FOX 13 Tampa Bay", "Tampa Bay 28", "Neighborhood News"];

  return (
    <section id="reviews" className="section-padding" style={{ background: "var(--bg-dark)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Rating Header */}
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
            What People Are Saying
          </p>

          {/* Stars */}
          <div className="flex items-center justify-center gap-1 mb-3">
            {[1, 2, 3, 4].map((i) => (
              <svg key={i} width="28" height="28" viewBox="0 0 24 24" fill="#FFD700">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
            {/* Half star */}
            <svg width="28" height="28" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="halfGrad">
                  <stop offset="50%" stopColor="#FFD700" />
                  <stop offset="50%" stopColor="#555" />
                </linearGradient>
              </defs>
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                fill="url(#halfGrad)"
              />
            </svg>
          </div>
          <p
            className="text-2xl font-bold mb-1"
            style={{ fontFamily: "var(--font-heading)", color: "var(--gold)" }}
          >
            4.5 / 5
          </p>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            200+ Reviews
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-6 rounded-lg"
              style={{
                background: "var(--surface)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {/* Mini Stars */}
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFD700">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p
                className="text-base mb-4 leading-relaxed"
                style={{ color: "rgba(255,255,255,0.85)", fontStyle: "italic" }}
              >
                &ldquo;{review.text}&rdquo;
              </p>
              <p
                className="text-xs tracking-wider"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                }}
              >
                &mdash; {review.author}
              </p>
            </div>
          ))}
        </div>

        {/* As Featured On */}
        <div className="text-center">
          <p
            className="text-xs tracking-widest mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
            }}
          >
            As Featured On
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {mediaFeatures.map((media) => (
              <span
                key={media}
                className="text-lg md:text-xl"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.4)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {media}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
