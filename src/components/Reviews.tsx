export default function Reviews() {
  const reviews = [
    {
      text: "Best chicken and fish in Tampa! The best seasoned chicken and special sauce. Ms. Kay is always welcoming.",
      author: "Nikki J.",
      source: "Google Review",
      rating: 5,
    },
    {
      text: "The best chicken I've ever tasted. The flavor will have you coming back for more. A taste of Chicago right here in Tampa!",
      author: "Marcus T.",
      source: "Google Review",
      rating: 5,
    },
    {
      text: "This place is amazing. Chicken is perfect in size, perfectly crisp, and the Chicago style seasoning is chef's kiss.",
      author: "Tasha W.",
      source: "Google Review",
      rating: 5,
    },
    {
      text: "If you love fried chicken, this is the spot. The mild sauce is unlike anything else in Florida. Authentic Chicago flavor!",
      author: "Devon R.",
      source: "Google Review",
      rating: 5,
    },
    {
      text: "My family drives 30 minutes just for this chicken. The wings are incredible and the service is always friendly.",
      author: "Crystal M.",
      source: "Google Review",
      rating: 5,
    },
    {
      text: "The fish is fresh, the chicken is crispy, and that mild sauce? Addictive. Best kept secret in Tampa.",
      author: "James L.",
      source: "Google Review",
      rating: 5,
    },
  ];

  const mediaFeatures = ["FOX 13 Tampa Bay", "Tampa Bay 28", "Neighborhood News", "Hoodline"];
  const communityBadges = ["EatOkra", "Black Restaurant Weeks"];

  const StarIcon = ({ filled = true }: { filled?: boolean }) => (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill={filled ? "var(--secondary)" : "#555"}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );

  return (
    <section id="reviews" className="section-padding" style={{ background: "var(--background)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Rating Header */}
        <div className="text-center mb-12">
          <p
            className="text-sm tracking-widest mb-3"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--primary)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            What People Are Saying
          </p>

          {/* Stars */}
          <div className="flex items-center justify-center gap-1 mb-3" role="img" aria-label="4.42 out of 5 stars">
            {[1, 2, 3, 4].map((i) => (
              <svg key={i} aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="var(--secondary)">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
            {/* Partial star for 4.42 */}
            <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="halfGrad">
                  <stop offset="42%" stopColor="var(--secondary)" />
                  <stop offset="42%" stopColor="#555" />
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
            style={{ fontFamily: "var(--font-heading)", color: "var(--secondary)" }}
          >
            4.42 / 5
          </p>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            776+ Reviews Across All Platforms
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
              <div className="flex gap-0.5 mb-4" role="img" aria-label={`${review.rating} out of 5 stars`}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarIcon key={i} filled={i <= review.rating} />
                ))}
              </div>
              <p
                className="text-base mb-4 leading-relaxed"
                style={{ color: "rgba(255,255,255,0.85)", fontStyle: "italic" }}
              >
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <p
                  className="text-xs tracking-wider"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--text-secondary)",
                    textTransform: "uppercase",
                  }}
                >
                  &mdash; {review.author}
                </p>
                <span className="text-[10px] tracking-wider" style={{ fontFamily: "var(--font-heading)", color: "var(--primary)", textTransform: "uppercase" }}>
                  {review.source}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Community Badges */}
        <div className="text-center mb-12">
          <p
            className="text-xs tracking-widest mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--text-secondary)",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
            }}
          >
            Recognized By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {communityBadges.map((badge) => (
              <span
                key={badge}
                className="badge"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* As Featured On */}
        <div className="text-center">
          <p
            className="text-xs tracking-widest mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--text-secondary)",
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
