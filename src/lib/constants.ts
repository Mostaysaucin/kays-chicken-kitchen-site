// Shared constants — single source of truth for all components
export const ORDER_CAUSEWAY = "https://kayschickenkitchen.smartonlineorder.com";
export const ORDER_BEARSS = "https://online.skytab.com/04019c96e9c8c93ddbfcc825a37f240a";
export const PHONE = "(813) 893-0415";
export const PHONE_HREF = "tel:8138930415";
export const EMAIL = "kayssmokehouse@gmail.com";
export const INSTAGRAM_URL = "https://instagram.com/kayschickenkitchen";
export const FACEBOOK_URL = "https://facebook.com/kayschickenkitchen";
export const TIKTOK_URL = "https://tiktok.com/@kayskitchentampa";
export const HERO_BG_IMAGE = "https://static.wixstatic.com/media/8b06b4_2f62a41d599344f3ae2445223948891f~mv2.jpg/v1/fill/w_1920,h_1280,al_c,q_85,enc_avif,quality_auto/8b06b4_2f62a41d599344f3ae2445223948891f~mv2.jpg";

// Location types and centralized data
export type LocationId = "causeway" | "bearss";

export interface LocationHours {
  days: string;
  time: string;
}

export interface LocationData {
  id: LocationId;
  name: string;
  type: string;
  address: string;
  city: string;
  phone: string;
  hours: LocationHours[];
  hoursNote: string | null;
  paymentNote: string | null;
  features: string[];
  googleRating: string;
  googleReviews: string;
  mapsUrl: string;
  orderUrl: string;
  highlight: string | null;
}

export const LOCATIONS: Record<LocationId, LocationData> = {
  causeway: {
    id: "causeway",
    name: "Causeway Blvd",
    type: "Satellite Location",
    address: "10323 Causeway Blvd",
    city: "Tampa, FL 33619",
    phone: PHONE,
    hours: [
      { days: "Tue - Sat", time: "11:00 AM - 8:30 PM" },
      { days: "Mon & Sun", time: "Closed" },
    ],
    hoursNote: "Last order at 8:20 PM",
    paymentNote: "Card Only • No Cash",
    features: ["Takeout", "Card Only"],
    googleRating: "4.2",
    googleReviews: "171",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=10323+Causeway+Blvd+Tampa+FL+33619",
    orderUrl: ORDER_CAUSEWAY,
    highlight: "Card Only \u2022 No Cash",
  },
  bearss: {
    id: "bearss",
    name: "Bearss Ave",
    type: "Full-Service",
    address: "2808 E Bearss Ave",
    city: "Tampa, FL 33613",
    phone: PHONE,
    hours: [
      { days: "Tue - Thu", time: "11:00 AM - 2:00 AM" },
      { days: "Fri - Sat", time: "11:00 AM - 4:00 AM" },
      { days: "Sun", time: "12:00 PM - 2:00 AM" },
      { days: "Mon", time: "Closed" },
    ],
    hoursNote: null,
    paymentNote: null,
    features: ["Dine-In", "Takeout", "Late Night"],
    googleRating: "4.6",
    googleReviews: "206",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=2808+E+Bearss+Ave+Tampa+FL+33613",
    orderUrl: ORDER_BEARSS,
    highlight: "Open until 4AM on weekends!",
  },
};
