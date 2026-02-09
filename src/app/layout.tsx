import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kay's Chicken Kitchen | Chicago Style Fried Chicken & Fish in Tampa, FL",
  description:
    "Tampa's ONLY Chicago Style Fried Chicken & Fish with Authentic Chicago Style Mild Sauce. Black-owned, woman-owned. Two Tampa locations. Order online or visit us today!",
  keywords:
    "Kay's Chicken Kitchen, Chicago fried chicken Tampa, Chicago mild sauce, fried chicken Tampa FL, fish and chips Tampa, Black-owned restaurant Tampa, woman-owned restaurant",
  openGraph: {
    title: "Kay's Chicken Kitchen | Chicago's Finest Fried Chicken. Tampa's Favorite.",
    description:
      "Tampa's ONLY Chicago Style Fried Chicken & Fish with the Authentic Chicago Style Mild Sauce. Two locations in Tampa, FL.",
    url: "https://kayschickenkitchen.com",
    siteName: "Kay's Chicken Kitchen",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kay's Chicken Kitchen | Chicago Fried Chicken in Tampa",
    description:
      "Tampa's ONLY Chicago Style Fried Chicken & Fish with Authentic Chicago Style Mild Sauce.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Kay's Chicken Kitchen",
    alternateName: "Kay's Kitchen",
    description:
      "Tampa's ONLY Chicago Style Fried Chicken & Fish with the Authentic Chicago Style Mild Sauce",
    url: "https://kayschickenkitchen.com",
    telephone: "+1-813-893-0415",
    servesCuisine: ["American", "Fried Chicken", "Chicago Style"],
    priceRange: "$$",
    foundingDate: "2017",
    founder: {
      "@type": "Person",
      name: "Kay Lee",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "200",
      bestRating: "5",
    },
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "10323 Causeway Blvd",
        addressLocality: "Tampa",
        addressRegion: "FL",
        postalCode: "33619",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "2808 E Bearss Ave",
        addressLocality: "Tampa",
        addressRegion: "FL",
        postalCode: "33613",
        addressCountry: "US",
      },
    ],
    sameAs: ["https://instagram.com/kayschickenkitchen"],
    hasMenu: {
      "@type": "Menu",
      name: "Kay's Chicken Kitchen Menu",
      hasMenuSection: [
        {
          "@type": "MenuSection",
          name: "Wings",
          hasMenuItem: [
            { "@type": "MenuItem", name: "6 Piece Wings", offers: { "@type": "Offer", price: "15.49", priceCurrency: "USD" } },
            { "@type": "MenuItem", name: "10 Piece Wings", offers: { "@type": "Offer", price: "22.00", priceCurrency: "USD" } },
          ],
        },
        {
          "@type": "MenuSection",
          name: "Fish",
          hasMenuItem: [
            { "@type": "MenuItem", name: "2 Pcs Grouper", offers: { "@type": "Offer", price: "16.99", priceCurrency: "USD" } },
            { "@type": "MenuItem", name: "Fish Sandwich", offers: { "@type": "Offer", price: "11.75", priceCurrency: "USD" } },
          ],
        },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
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
      <body>{children}</body>
    </html>
  );
}
