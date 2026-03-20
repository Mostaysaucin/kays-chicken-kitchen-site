import type { LocationId } from "./constants";

export interface MenuItemSize {
  size: string;
  price: string;
  comboPrice?: string; // with fries price for this size
}

export interface MenuItem {
  name: string;
  price?: string;           // Simple fixed price
  sizes?: MenuItemSize[];   // Size/quantity options
  comboPrice?: string;      // "with fries" price (base + $3.00)
  comboPremiumNote?: string; // e.g. "Premium sides +$5.99"
  desc?: string;
  img?: string;
  note?: string;            // "Sold Out", "Side Included", etc.
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

// ---------------------------------------------------------------------------
// Causeway menu — scraped from SkyTab 2026-03-20
// 10323 CAUSEWAY BLVD, TAMPA, FL 33619
// Pricing restructured 2026-03-20: combo prices shown as honest totals.
// Model 2 combos: listed price does NOT include required side; comboPrice =
// base + $3.00 (fries). Premium sides (Corn Nuggets, Hush Puppies, Okra,
// Onion Rings) add $5.99 at checkout instead of $3.00.
// Categories Sauce Additional and EXTRA REQUEST excluded from display tabs.
// ---------------------------------------------------------------------------
const causewayMenu: MenuCategory[] = [
  {
    id: "chitown-whole-wings",
    label: "Chi-Town Whole Wings",
    items: [
      {
        name: "4 Whole Wings & Side",
        price: "$12.99",
        desc: "Includes fries. Other sides +$2.00",
        img: "https://static.wixstatic.com/media/2041f5_c7ff9d7dbb014e43959de5044e3ed183~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/2041f5_c7ff9d7dbb014e43959de5044e3ed183~mv2.jpg",
      },
      {
        name: "6 Whole Wings & Side",
        price: "$14.99",
        desc: "Includes fries. Other sides +$2.00",
      },
      {
        name: "8 Whole Wings & Side",
        price: "$18.99",
        desc: "Includes fries. Other sides +$2.00",
      },
      {
        name: "10 Whole Wings & Side",
        price: "$23.99",
        desc: "Includes fries. Other sides +$2.00",
        img: "https://static.wixstatic.com/media/2041f5_459fda4742114148878ae59dba06985c~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/2041f5_459fda4742114148878ae59dba06985c~mv2.jpg",
      },
      {
        name: "20 Whole Wings & Side",
        price: "$39.99",
        desc: "Includes large fries. Other sides +$2.00",
      },
    ],
  },
  {
    id: "jumbo-drums-flats",
    label: "JUMBO Drums & Flats",
    items: [
      {
        name: "6 Piece Wings",
        price: "$10.99",
        comboPrice: "$13.99",
        comboPremiumNote: "Premium sides +$5.99",
        img: "https://static.wixstatic.com/media/8b06b4_4a8f718f467a4fd6bbac84ac9abca0e4~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_4a8f718f467a4fd6bbac84ac9abca0e4~mv2.jpg",
      },
      {
        name: "10 Piece Wings",
        price: "$15.99",
        comboPrice: "$18.99",
        comboPremiumNote: "Premium sides +$5.99",
      },
      {
        // Combo base is lower than wings-only at 15pc — show both clearly
        name: "15 Piece Wings",
        price: "$29.00",
        comboPrice: "$26.99",
        comboPremiumNote: "Premium sides +$5.99",
        desc: "Combo with fries is a better deal at $26.99",
      },
      {
        // Combo base is lower than wings-only at 20pc — show both clearly
        name: "20 Piece Wings",
        price: "$37.75",
        comboPrice: "$31.99",
        comboPremiumNote: "Premium sides +$5.99",
        desc: "Combo with fries is a better deal at $31.99",
      },
      {
        name: "25 Piece Wings",
        price: "$34.99",
        comboPrice: "$37.99",
        comboPremiumNote: "Premium sides +$5.99",
      },
      {
        name: "50 Piece Wings",
        price: "$63.99",
        comboPrice: "$66.99",
        comboPremiumNote: "Premium sides +$5.99",
      },
    ],
  },
  {
    id: "chicken-tenders",
    label: "Chicken Tenders",
    items: [
      {
        name: "Chicken Tenders",
        sizes: [
          { size: "4 Piece", price: "$9.99", comboPrice: "$12.99" },
          { size: "6 Piece", price: "$12.99", comboPrice: "$15.99" },
        ],
        comboPremiumNote: "Premium sides +$5.99",
        img: "https://static.wixstatic.com/media/8b06b4_e18d5d387e154c65838ca810e5976831~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_e18d5d387e154c65838ca810e5976831~mv2.jpg",
      },
    ],
  },
  {
    id: "seafood",
    label: "Seafood",
    items: [
      {
        name: "Basa",
        sizes: [
          { size: "1 Piece", price: "$7.99", comboPrice: "$10.99" },
          { size: "2 Piece", price: "$13.99", comboPrice: "$16.99" },
        ],
        comboPremiumNote: "Premium sides +$5.99",
        img: "https://static.wixstatic.com/media/8b06b4_4484ceed69d7485d9b5df5c456db5182~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_4484ceed69d7485d9b5df5c456db5182~mv2.jpg",
      },
      {
        name: "Catfish Nuggets",
        sizes: [
          { size: "7-9 Pieces", price: "$9.99", comboPrice: "$12.99" },
          { size: "10-13 Pieces", price: "$12.99", comboPrice: "$15.99" },
        ],
        comboPremiumNote: "Premium sides +$5.99",
      },
      {
        name: "Grouper",
        sizes: [
          { size: "1 Piece", price: "$12.99", comboPrice: "$15.99" },
          { size: "2 Piece", price: "$17.99", comboPrice: "$20.99" },
        ],
        comboPremiumNote: "Premium sides +$5.99",
      },
      {
        name: "Jumbo Shrimp",
        sizes: [
          { size: "7 Pieces", price: "$11.99", comboPrice: "$14.99" },
          { size: "11 Pieces", price: "$18.99", comboPrice: "$21.99" },
        ],
        comboPremiumNote: "Premium sides +$5.99",
        img: "https://static.wixstatic.com/media/8b06b4_75244bd541c34705b28c2ce8a93c6568~mv2.png/v1/fill/w_400,h_400,al_c,q_85/8b06b4_75244bd541c34705b28c2ce8a93c6568~mv2.png",
      },
      {
        name: "Shrimp",
        sizes: [
          { size: "11 Pieces", price: "$9.99", comboPrice: "$12.99" },
          { size: "18 Pieces", price: "$15.99", comboPrice: "$18.99" },
        ],
        comboPremiumNote: "Premium sides +$5.99",
      },
      // Fixed-price specials — everything included
      {
        name: "10 Jumbo Shrimp Special",
        price: "$23.99",
        desc: "Includes side & hush puppies",
      },
      {
        name: "Fish & 8 Shrimp Special",
        price: "$18.99",
        desc: "Includes 3 hush puppies",
      },
      {
        name: "Fish & Hush Puppies Special",
        price: "$13.99",
        desc: "Includes side & 3 hush puppies",
        img: "https://static.wixstatic.com/media/8b06b4_ea2b56c6b3834e339f835923cb57f297~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_ea2b56c6b3834e339f835923cb57f297~mv2.jpg",
      },
    ],
  },
  {
    id: "chicken-specialty",
    label: "Chicken Specialty",
    items: [
      {
        name: "Gizzards",
        sizes: [
          { size: "1/2 LB", price: "$7.99", comboPrice: "$10.99" },
          { size: "1 LB", price: "$10.99", comboPrice: "$13.99" },
        ],
        comboPremiumNote: "Premium sides +$5.99",
        img: "https://static.wixstatic.com/media/8b06b4_5c2932173e7c4b6eaf71488bd635ba97~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_5c2932173e7c4b6eaf71488bd635ba97~mv2.jpg",
      },
      {
        name: "Liver",
        sizes: [
          { size: "1/2 LB", price: "$7.99", comboPrice: "$10.99" },
          { size: "1 LB", price: "$10.99", comboPrice: "$13.99" },
        ],
        comboPremiumNote: "Premium sides +$5.99",
      },
    ],
  },
  {
    id: "sandwiches",
    label: "Sandwiches",
    items: [
      {
        name: "Chicken Sandwich",
        price: "$7.99",
        comboPrice: "$10.99",
        comboPremiumNote: "Premium sides +$5.99",
        img: "https://static.wixstatic.com/media/8b06b4_1abe9c9136c44a808cf3c325e44967f7~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_1abe9c9136c44a808cf3c325e44967f7~mv2.jpg",
      },
      {
        name: "Fish Sandwich",
        price: "$8.99",
        comboPrice: "$11.99",
        comboPremiumNote: "Premium sides +$5.99",
        img: "https://static.wixstatic.com/media/2041f5_80a604da678040f39d686b21b4094789~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/2041f5_80a604da678040f39d686b21b4094789~mv2.jpg",
      },
      {
        name: "Grouper Sandwich",
        price: "$12.99",
      },
    ],
  },
  {
    id: "kids-meal",
    label: "Kids Meal",
    items: [
      { name: "2 Chicken Strips W/ Side", price: "$7.99", desc: "Includes side" },
      { name: "2 Wings Traditional W/ Side", price: "$7.99", desc: "Includes side" },
      { name: "4 Pcs Catfish Nuggets W/ Side", price: "$7.99", desc: "Includes side" },
    ],
  },
  {
    id: "whole-wing-bucket",
    label: "Whole Wing Bucket",
    items: [
      { name: "12 Whole Wings", price: "$22.99" },
      { name: "18 Whole Wings", price: "$34.99" },
      { name: "24 Whole Wings", price: "$42.99" },
      { name: "50 Whole Wings", price: "$84.99" },
      { name: "75 Whole Wings", price: "$125.99" },
    ],
  },
  {
    id: "sides",
    label: "Sides",
    items: [
      { name: "Basket For Fries", price: "$6.99" },
      { name: "Bread", price: "$0.30" },
      { name: "Corn Nuggets", price: "$5.99" },
      {
        name: "Fries",
        price: "$4.99",
        img: "https://static.wixstatic.com/media/8b06b4_c52f41438b8148ab99857deadca79ae8~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_c52f41438b8148ab99857deadca79ae8~mv2.jpg",
      },
      { name: "Hush Puppies", price: "$7.25" },
      { name: "Jalapeno", price: "$0.60" },
      { name: "Large 6 Oz Mild Sauce", price: "$5.99" },
      { name: "Large Corn Nuggets", price: "$7.49" },
      { name: "Large Hush Puppies", price: "$7.49" },
      { name: "Large Okra", price: "$7.49" },
      { name: "Large Onion Rings", price: "$7.49" },
      { name: "Okra", price: "$7.50" },
      {
        name: "Onion Rings",
        price: "$7.50",
        img: "https://static.wixstatic.com/media/2041f5_d21a8b47dc164948b78c57f5c81f13c7~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/2041f5_d21a8b47dc164948b78c57f5c81f13c7~mv2.jpg",
      },
      {
        name: "Pizza Puff",
        price: "$5.99",
        img: "https://static.wixstatic.com/media/8b06b4_feeb4e0cd5da42e18c321db281a50820~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_feeb4e0cd5da42e18c321db281a50820~mv2.jpg",
      },
      { name: "Whole Jalepeno Pepper", price: "$0.50" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Bearss menu — scraped from SkyTab 2026-03-20
// 2808 E BEARSS AVE, TAMPA, FL 33613
// Pricing restructured 2026-03-20: combo prices shown as honest totals.
// Same Model 2 pricing as Causeway (fries +$3.00, other sides vary).
// Bearss has additional side options at checkout (Cheese Fries $6.99,
// Grits $3.99, Mac & Cheese $6.99, Mozz Sticks $5.99, Rice & Beans $2.00).
// Categories Sauce Additional and EXTRA REQUEST excluded from display tabs.
// ---------------------------------------------------------------------------
const bearssMenu: MenuCategory[] = [
  {
    id: "chitown-whole-wings",
    label: "Chi-Town Whole Wings",
    items: [
      {
        name: "4 Whole Wings & Side",
        price: "$12.99",
        desc: "Includes fries. Other sides +$2.00",
        img: "https://static.wixstatic.com/media/2041f5_c7ff9d7dbb014e43959de5044e3ed183~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/2041f5_c7ff9d7dbb014e43959de5044e3ed183~mv2.jpg",
      },
      {
        name: "6 Whole Wings & Side",
        price: "$14.99",
        desc: "Includes fries. Other sides +$2.00",
      },
      {
        name: "8 Whole Wings & Side",
        price: "$18.99",
        desc: "Includes fries. Other sides +$2.00",
      },
      {
        name: "10 Whole Wings & Side",
        price: "$23.99",
        desc: "Includes fries. Other sides +$2.00",
        img: "https://static.wixstatic.com/media/2041f5_459fda4742114148878ae59dba06985c~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/2041f5_459fda4742114148878ae59dba06985c~mv2.jpg",
      },
      {
        name: "20 Whole Wings & Side",
        price: "$39.99",
        desc: "Includes large fries. Other sides +$2.00",
      },
    ],
  },
  {
    id: "jumbo-drums-flats",
    label: "JUMBO Drums & Flats",
    items: [
      {
        name: "6 Piece Wings",
        price: "$10.99",
        comboPrice: "$13.99",
        comboPremiumNote: "Premium sides +$5.99",
        img: "https://static.wixstatic.com/media/8b06b4_4a8f718f467a4fd6bbac84ac9abca0e4~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_4a8f718f467a4fd6bbac84ac9abca0e4~mv2.jpg",
      },
      {
        name: "10 Piece Wings",
        price: "$15.99",
        comboPrice: "$18.99",
        comboPremiumNote: "Premium sides +$5.99",
      },
      {
        name: "15 Piece Wings",
        price: "$23.99",
        comboPrice: "$26.99",
        comboPremiumNote: "Premium sides +$5.99",
      },
      {
        name: "20 Piece Wings",
        price: "$28.99",
        comboPrice: "$31.99",
        comboPremiumNote: "Premium sides +$5.99",
      },
      {
        name: "25 Piece Wings",
        price: "$34.99",
        comboPrice: "$37.99",
        comboPremiumNote: "Premium sides +$5.99",
      },
      {
        name: "50 Piece Wings",
        price: "$63.99",
        comboPrice: "$66.99",
        comboPremiumNote: "Premium sides +$5.99",
      },
    ],
  },
  {
    id: "mixed-chicken-meals",
    label: "Mixed Chicken Meals",
    items: [
      {
        name: "3 Pcs Mix (Leg, Thigh, Wing) & Side",
        price: "$8.99",
        desc: "Includes side",
      },
      {
        name: "4 Pcs Mixed (Legs & Thighs) & Side",
        price: "$10.99",
        desc: "Includes side",
      },
      {
        name: "6 Pcs Mixed (Legs & Thighs) & Side",
        price: "$12.99",
        desc: "Includes side",
      },
      {
        name: "10 Pcs Mixed (Legs & Thighs) & Side",
        price: "$18.99",
        desc: "Includes side",
      },
      {
        name: "21 Pcs Mixed (8L, 8T, 5W) & Large Side",
        price: "$31.99",
        desc: "Includes large side",
      },
    ],
  },
  {
    id: "snack-pack",
    label: "Snack Pack",
    items: [
      {
        name: "2 Whole Wings & 5 Shrimp",
        price: "$8.99",
        desc: "Includes side",
      },
      {
        name: "2 Whole Wings & Basa",
        price: "$8.99",
        desc: "Includes side",
      },
      {
        name: "2 Whole Wings & Pizza Puff",
        price: "$8.99",
        desc: "Includes side",
      },
      {
        name: "2 Whole Wings & Gizzards",
        price: "$8.99",
        desc: "Includes side",
      },
      {
        name: "Basa & 3 Shrimp",
        price: "$8.99",
        desc: "Includes side",
      },
    ],
  },
  {
    id: "chicken-tenders",
    label: "Chicken Tenders",
    items: [
      {
        name: "Chicken Tenders",
        sizes: [
          { size: "4 Piece", price: "$9.99", comboPrice: "$12.99" },
          { size: "6 Piece", price: "$12.99", comboPrice: "$15.99" },
        ],
        comboPremiumNote: "Premium sides +$5.99",
        img: "https://static.wixstatic.com/media/8b06b4_e18d5d387e154c65838ca810e5976831~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_e18d5d387e154c65838ca810e5976831~mv2.jpg",
      },
    ],
  },
  {
    id: "chicken-specialty",
    label: "Chicken Specialty",
    items: [
      {
        name: "Gizzards",
        sizes: [
          { size: "1/2 LB", price: "$7.99", comboPrice: "$10.99" },
          { size: "1 LB", price: "$10.99", comboPrice: "$13.99" },
        ],
        comboPremiumNote: "Premium sides +$5.99",
        img: "https://static.wixstatic.com/media/8b06b4_5c2932173e7c4b6eaf71488bd635ba97~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_5c2932173e7c4b6eaf71488bd635ba97~mv2.jpg",
      },
      {
        name: "Liver",
        sizes: [
          { size: "1/2 LB", price: "$7.99", comboPrice: "$10.99" },
          { size: "1 LB", price: "$10.99", comboPrice: "$13.99" },
        ],
        comboPremiumNote: "Premium sides +$5.99",
      },
    ],
  },
  {
    id: "seafood",
    label: "Seafood",
    items: [
      {
        name: "Basa",
        sizes: [
          { size: "1 Piece", price: "$7.99", comboPrice: "$10.99" },
          { size: "2 Piece", price: "$13.99", comboPrice: "$16.99" },
        ],
        comboPremiumNote: "Premium sides +$5.99",
        img: "https://static.wixstatic.com/media/8b06b4_4484ceed69d7485d9b5df5c456db5182~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_4484ceed69d7485d9b5df5c456db5182~mv2.jpg",
      },
      {
        name: "Catfish Nuggets",
        sizes: [
          { size: "7-9 Pieces", price: "$9.99", comboPrice: "$12.99" },
          { size: "10-13 Pieces", price: "$12.99", comboPrice: "$15.99" },
        ],
        comboPremiumNote: "Premium sides +$5.99",
      },
      {
        name: "Catfish Filet",
        sizes: [
          { size: "1 Piece", price: "$7.99", comboPrice: "$10.99" },
          { size: "2 Piece", price: "$13.99", comboPrice: "$16.99" },
        ],
        comboPremiumNote: "Premium sides +$5.99",
      },
      {
        name: "Grouper",
        sizes: [
          { size: "1 Piece", price: "$12.99", comboPrice: "$15.99" },
          { size: "2 Piece", price: "$17.99", comboPrice: "$20.99" },
        ],
        comboPremiumNote: "Premium sides +$5.99",
      },
      {
        name: "Whiting",
        sizes: [
          { size: "3 Pieces", price: "$9.99", comboPrice: "$12.99" },
          { size: "5 Pieces", price: "$12.99", comboPrice: "$15.99" },
        ],
        comboPremiumNote: "Premium sides +$5.99",
      },
      {
        name: "Jumbo Shrimp",
        sizes: [
          { size: "7 Pieces", price: "$11.99", comboPrice: "$14.99" },
          { size: "11 Pieces", price: "$18.99", comboPrice: "$21.99" },
        ],
        comboPremiumNote: "Premium sides +$5.99",
        img: "https://static.wixstatic.com/media/8b06b4_75244bd541c34705b28c2ce8a93c6568~mv2.png/v1/fill/w_400,h_400,al_c,q_85/8b06b4_75244bd541c34705b28c2ce8a93c6568~mv2.png",
      },
      {
        name: "Shrimp",
        sizes: [
          { size: "11 Pieces", price: "$9.99", comboPrice: "$12.99" },
          { size: "18 Pieces", price: "$15.99", comboPrice: "$18.99" },
        ],
        comboPremiumNote: "Premium sides +$5.99",
      },
      // Fixed-price specials — everything included
      {
        name: "10 Jumbo Shrimp Special",
        price: "$23.99",
        desc: "Includes side & hush puppies",
      },
      {
        name: "Fish & 8 Shrimp Special",
        price: "$18.99",
        desc: "Includes 3 hush puppies",
        img: "https://static.wixstatic.com/media/8b06b4_0adbf0d8a7204259a87d3dbbb2125068~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_0adbf0d8a7204259a87d3dbbb2125068~mv2.jpg",
      },
      {
        name: "Fish, Side & Hush Puppies Special",
        price: "$13.99",
        desc: "Includes side & 3 hush puppies",
        img: "https://static.wixstatic.com/media/8b06b4_ea2b56c6b3834e339f835923cb57f297~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_ea2b56c6b3834e339f835923cb57f297~mv2.jpg",
      },
    ],
  },
  {
    id: "kays-chicken-waffle",
    label: "Chicken & Waffle",
    items: [
      { name: "3 Tenders + Waffles", price: "$14.99" },
      { name: "3 Whole Wings + Waffles", price: "$14.99" },
      { name: "Waffle Only", price: "$5.99" },
    ],
  },
  {
    id: "sandwiches",
    label: "Sandwiches",
    items: [
      {
        name: "Chicken Sandwich",
        price: "$7.99",
        comboPrice: "$10.99",
        comboPremiumNote: "Premium sides +$5.99",
        img: "https://static.wixstatic.com/media/8b06b4_1abe9c9136c44a808cf3c325e44967f7~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_1abe9c9136c44a808cf3c325e44967f7~mv2.jpg",
      },
      {
        name: "Fish Sandwich",
        price: "$8.99",
        comboPrice: "$11.99",
        comboPremiumNote: "Premium sides +$5.99",
        img: "https://static.wixstatic.com/media/2041f5_80a604da678040f39d686b21b4094789~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/2041f5_80a604da678040f39d686b21b4094789~mv2.jpg",
      },
      {
        name: "Grouper Sandwich",
        price: "$12.99",
      },
      {
        name: "Kay's Sweet Steak",
        price: "$11.99",
        comboPrice: "$14.99",
        comboPremiumNote: "Premium sides +$5.99",
        desc: "Sweet Hot or Original Sweet",
      },
    ],
  },
  {
    id: "kids-meal",
    label: "Kids Meal",
    items: [
      { name: "2 Wings Traditional W/ Side", price: "$7.99", desc: "Includes side" },
      { name: "2 Chicken Strips W/ Side", price: "$7.99", desc: "Includes side" },
      { name: "4 Pcs Catfish Nuggets W/ Side", price: "$7.99", desc: "Includes side" },
    ],
  },
  {
    id: "whole-wing-bucket",
    label: "Whole Wing Bucket",
    items: [
      { name: "12 Whole Wings", price: "$22.99" },
      { name: "18 Whole Wings", price: "$34.99" },
      { name: "24 Whole Wings", price: "$42.99" },
      { name: "50 Whole Wings", price: "$84.99" },
      { name: "75 Whole Wings", price: "$125.99" },
    ],
  },
  {
    id: "kays-lemonade",
    label: "Kay's Lemonade",
    items: [
      { name: "DRINK: 1/2 Gallons MIXED", price: "$10.99" },
      {
        name: "SLUSHY: Mixed Flavors",
        sizes: [
          { size: "Small", price: "$4.16" },
          { size: "Regular", price: "$6.25" },
          { size: "Large", price: "$8.33" },
        ],
      },
      {
        name: "SLUSHY: Peach Pineapple",
        sizes: [
          { size: "Small", price: "$4.16" },
          { size: "Regular", price: "$6.25" },
          { size: "Large", price: "$8.33" },
        ],
      },
      {
        name: "DRINK: Peach",
        sizes: [
          { size: "Small", price: "$4.16" },
          { size: "Regular", price: "$6.25" },
          { size: "Large", price: "$8.33" },
        ],
      },
      {
        name: "SLUSHY: Pineapple Mango",
        sizes: [
          { size: "Small", price: "$4.16" },
          { size: "Regular", price: "$6.25" },
          { size: "Large", price: "$8.33" },
        ],
      },
      {
        name: "DRINK: Peach Pineapple",
        sizes: [
          { size: "Small", price: "$4.16" },
          { size: "Regular", price: "$6.25" },
          { size: "Large", price: "$8.33" },
        ],
      },
      {
        name: "DRINK: Pineapple",
        sizes: [
          { size: "Small", price: "$4.16" },
          { size: "Regular", price: "$6.25" },
          { size: "Large", price: "$8.33" },
        ],
      },
      {
        name: "DRINK: Mango",
        sizes: [
          { size: "Small", price: "$4.16" },
          { size: "Regular", price: "$6.25" },
          { size: "Large", price: "$8.33" },
        ],
      },
      {
        name: "DRINK: Mango Pineapple",
        sizes: [
          { size: "Small", price: "$4.16" },
          { size: "Regular", price: "$6.25" },
          { size: "Large", price: "$8.33" },
        ],
      },
      {
        name: "DRINK: Mix All Flavors",
        sizes: [
          { size: "Small", price: "$4.16" },
          { size: "Regular", price: "$6.25" },
          { size: "Large", price: "$8.33" },
        ],
      },
    ],
  },
  {
    id: "soda-punch",
    label: "Soda & Punch",
    items: [
      { name: "Gingerale Bottle", price: "$3.00" },
      { name: "Capri Sun", price: "$1.45" },
      { name: "Orange Bottle", price: "$3.00" },
      { name: "Grape Bottle", price: "$3.00" },
      { name: "Pineapple Bottle", price: "$3.00" },
      { name: "Bottle Water", price: "$2.59" },
      { name: "Strawberry Kiwi Punch", price: "$3.00" },
      { name: "Coke Can", price: "$2.00" },
      { name: "Dr. Pepper Can", price: "$2.00" },
      { name: "Pepsi Can", price: "$2.00" },
      { name: "Sprite Can", price: "$2.00" },
      { name: "Coke Zero Can", price: "$2.00" },
      { name: "JUICE 100% WATERMELON", price: "$3.29", note: "Sold Out" },
      { name: "JUICE 100% ORANGE", price: "$3.29" },
      { name: "Gold Peak Tea Bottle SWEET", price: "$3.00" },
      { name: "Blueberry Punch", price: "$3.00" },
      { name: "Watermelon Punch", price: "$3.49" },
      { name: "Strawberry Banana SPLASH", price: "$3.00" },
      { name: "Cranberry SPLASH", price: "$3.00" },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      { name: "Original Pound Cake", price: "$6.99", note: "Sold Out" },
    ],
  },
  {
    id: "sides",
    label: "Sides",
    items: [
      { name: "Bread", price: "$0.25" },
      {
        name: "Fries",
        price: "$3.99",
        img: "https://static.wixstatic.com/media/8b06b4_c52f41438b8148ab99857deadca79ae8~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_c52f41438b8148ab99857deadca79ae8~mv2.jpg",
      },
      { name: "Basket For Fries", price: "$6.99" },
      { name: "Cheese Fries", price: "$6.99" },
      { name: "Rice & Beans", price: "$3.99" },
      {
        name: "Rice",
        sizes: [
          { size: "Reg", price: "$3.99" },
          { size: "Lg", price: "$6.99" },
        ],
      },
      { name: "Grits Regular", price: "$3.99" },
      { name: "Okra", price: "$5.99" },
      { name: "Mozzarella Sticks", price: "$5.99" },
      { name: "Corn Nuggets", price: "$5.99" },
      { name: "Hush Puppies", price: "$7.75" },
      {
        name: "Onion Rings",
        price: "$7.75",
        img: "https://static.wixstatic.com/media/2041f5_d21a8b47dc164948b78c57f5c81f13c7~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/2041f5_d21a8b47dc164948b78c57f5c81f13c7~mv2.jpg",
      },
      { name: "Mac & Cheese", price: "$6.99" },
      {
        name: "Pizza Puff",
        price: "$5.99",
        img: "https://static.wixstatic.com/media/8b06b4_feeb4e0cd5da42e18c321db281a50820~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_feeb4e0cd5da42e18c321db281a50820~mv2.jpg",
      },
      { name: "Pizza Puff (Beef)", price: "$6.99" },
      { name: "Whole Jalepeno Pepper", price: "$0.50" },
      { name: "Large 6 Oz Mild Sauce", price: "$5.99" },
      { name: "Large Rice & Beans", price: "$6.99" },
      { name: "Large Cheese Fries", price: "$8.99" },
      { name: "Large Grits", price: "$6.99" },
      { name: "Large Okra", price: "$7.49" },
      { name: "Large Corn Nuggets", price: "$7.49" },
      { name: "Large Hush Puppies", price: "$7.49" },
      { name: "Large Mac & Cheese", price: "$8.49" },
      { name: "Large Onion Rings", price: "$7.49" },
      { name: "Large Mozzarella Sticks", price: "$7.49" },
      { name: "Jalapeno", price: "$0.60" },
    ],
  },
];

export const menuByLocation: Record<LocationId, MenuCategory[]> = {
  causeway: causewayMenu,
  bearss: bearssMenu,
};

export const defaultMenu = causewayMenu;
