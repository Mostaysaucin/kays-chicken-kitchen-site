import type { Metadata } from "next";
import { HERO_BG_IMAGE } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kay's Chicken Kitchen | Great Food The Chi-Town Way | Tampa, FL",
  description:
    "Tampa's ONLY Chicago Style Fried Chicken & Fish with Authentic Chicago Style Mild Sauce. Black-owned, woman-owned. Two Tampa locations — Causeway Blvd & Bearss Ave. Order online today!",
  keywords:
    "Kay's Chicken Kitchen, Chicago fried chicken Tampa, Chicago mild sauce, fried chicken Tampa FL, fish and chips Tampa, Black-owned restaurant Tampa, woman-owned restaurant, soul food Tampa, Kay Lee",
  openGraph: {
    title: "Kay's Chicken Kitchen | Great Food The Chi-Town Way",
    description:
      "Tampa's ONLY Chicago Style Fried Chicken & Fish with the Authentic Chicago Style Mild Sauce. Two locations in Tampa, FL. Black-Owned. Woman-Owned. Est. 2017.",
    url: "https://kayschickenkitchen.com",
    siteName: "Kay's Chicken Kitchen",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kay's Chicken Kitchen | Great Food The Chi-Town Way",
    description:
      "Tampa's ONLY Chicago Style Fried Chicken & Fish with Authentic Chicago Style Mild Sauce. Two Tampa locations.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://kayschickenkitchen.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "@id": "https://kayschickenkitchen.com/#causeway",
      name: "Kay's Chicken Kitchen - Causeway Blvd",
      alternateName: "Kay's Kitchen",
      description:
        "Tampa's ONLY Chicago Style Fried Chicken & Fish with the Authentic Chicago Style Mild Sauce. Drive-Thru location.",
      url: "https://kayschickenkitchen.com",
      telephone: "+1-813-893-0415",
      email: "kayssmokehouse@gmail.com",
      servesCuisine: ["American", "Fried Chicken", "Chicago Style", "Soul Food"],
      priceRange: "$$",
      foundingDate: "2017",
      founder: {
        "@type": "Person",
        name: "Kay Lee",
        alternateName: "Ms. Kay",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.2",
        reviewCount: "171",
        bestRating: "5",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "10323 Causeway Blvd",
        addressLocality: "Tampa",
        addressRegion: "FL",
        postalCode: "33619",
        addressCountry: "US",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "11:00",
          closes: "20:30",
        },
      ],
      sameAs: [
        "https://instagram.com/kayschickenkitchen",
        "https://facebook.com/kayschickenkitchen",
        "https://tiktok.com/@kayskitchentampa",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "@id": "https://kayschickenkitchen.com/#bearss",
      name: "Kay's Chicken Kitchen - Bearss Ave",
      alternateName: "Kay's Kitchen",
      description:
        "Tampa's ONLY Chicago Style Fried Chicken & Fish with the Authentic Chicago Style Mild Sauce. Full-Service location with late night hours.",
      url: "https://kayschickenkitchen.com",
      telephone: "+1-813-893-0415",
      email: "kayssmokehouse@gmail.com",
      servesCuisine: ["American", "Fried Chicken", "Chicago Style", "Soul Food"],
      priceRange: "$$",
      foundingDate: "2017",
      founder: {
        "@type": "Person",
        name: "Kay Lee",
        alternateName: "Ms. Kay",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.6",
        reviewCount: "206",
        bestRating: "5",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "2808 E Bearss Ave",
        addressLocality: "Tampa",
        addressRegion: "FL",
        postalCode: "33613",
        addressCountry: "US",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Tuesday", "Wednesday", "Thursday"],
          opens: "11:00",
          closes: "02:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Friday", "Saturday"],
          opens: "11:00",
          closes: "04:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "12:00",
          closes: "02:00",
        },
      ],
      sameAs: [
        "https://instagram.com/kayschickenkitchen",
        "https://facebook.com/kayschickenkitchen",
        "https://tiktok.com/@kayskitchentampa",
      ],
    },
  ];

  return (
    <html lang="en">
      <head>
        <link rel="preload" href={HERO_BG_IMAGE} as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Oswald:wght@400;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[var(--primary)] focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
