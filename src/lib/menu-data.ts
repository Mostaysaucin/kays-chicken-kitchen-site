import type { LocationId } from "./constants";

export interface MenuItemSize {
  size: string;
  price: string;
  comboPrice?: string; // combo price (includes side) for this size
}

export interface MenuItem {
  name: string;
  price?: string;           // Simple fixed price
  sizes?: MenuItemSize[];   // Size/quantity options
  comboPrice?: string;      // combo price including side (base + $4.00 = fries)
  comboPremiumNote?: string; // e.g. "Other side +$3 · Mac & Cheese +$4"
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
// Causeway menu — base from SkyTab, repriced per owner "Menu 7-8-2026".
// 10323 CAUSEWAY BLVD, TAMPA, FL 33619
// Combo model (2026-07-08): listed price is wings/protein only; the combo
// includes FRIES at base + $4.00. Substitute a non-fry side +$3.00, or
// Mac & Cheese +$4.00 (on top of the combo price).
// Chi-Town wings & Whole Wing Bucket include the owner's $1 increase effective
// 2026-09-02; Snack Pack pricing is unchanged.
// Categories Sauce Additional and EXTRA REQUEST excluded from display tabs.
// ---------------------------------------------------------------------------
const causewayMenu: MenuCategory[] = [
  {
    id: "chitown-whole-wings",
    label: "Chi-Town Whole Wings",
    items: [
      {
        name: "3 Whole Wings & Side",
        price: "$8.99",
        desc: "Includes side. Other side +$3, Mac & Cheese +$4",
      },
      {
        name: "4 Whole Wings & Side",
        price: "$10.99",
        desc: "Includes side. Other side +$3, Mac & Cheese +$4",
        img: "/images/food/wings-whole-10pc.jpg",
      },
      {
        name: "6 Whole Wings & Side",
        price: "$13.99",
        desc: "Includes side. Other side +$3, Mac & Cheese +$4",
      },
      {
        name: "8 Whole Wings & Side",
        price: "$15.99",
        desc: "Includes side. Other side +$3, Mac & Cheese +$4",
      },
      {
        name: "10 Whole Wings & Side",
        price: "$18.99",
        desc: "Includes side. Other side +$3, Mac & Cheese +$4",
        img: "/images/food/wings-whole-20pc.jpg",
      },
      {
        name: "12 Whole Wings & Side",
        price: "$21.99",
        desc: "Includes side. Other side +$3, Mac & Cheese +$4",
      },
      {
        name: "15 Whole Wings & Side",
        price: "$27.99",
        desc: "Includes side. Other side +$3, Mac & Cheese +$4",
      },
    ],
  },
  {
    id: "jumbo-drums-flats",
    label: "JUMBO Drums & Flats",
    items: [
      {
        name: "6 Piece Wings",
        price: "$8.99",
        comboPrice: "$12.99",
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
        img: "/images/food/wings-jumbo.jpg",
      },
      {
        name: "10 Piece Wings",
        price: "$13.99",
        comboPrice: "$17.99",
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
        img: "/images/food/wings-fries-seasoned.jpg",
      },
      {
        name: "20 Piece Wings",
        price: "$25.99",
        comboPrice: "$29.99",
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
      },
      {
        name: "30 Piece Wings",
        price: "$36.99",
        comboPrice: "$40.99",
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
      },
      {
        name: "50 Piece Wings",
        price: "$59.99",
        comboPrice: "$63.99",
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
      },
      {
        name: "100 Piece Wings",
        price: "$119.99",
        comboPrice: "$123.99",
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
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
          { size: "4 Piece", price: "$9.99", comboPrice: "$13.99" },
          { size: "6 Piece", price: "$12.99", comboPrice: "$16.99" },
        ],
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
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
          { size: "1 Piece", price: "$7.99", comboPrice: "$11.99" },
          { size: "2 Piece", price: "$13.99", comboPrice: "$17.99" },
        ],
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
        img: "/images/food/grouper.jpg",
      },
      {
        name: "Catfish Nuggets",
        sizes: [
          { size: "7-9 Pieces", price: "$9.99", comboPrice: "$13.99" },
          { size: "10-13 Pieces", price: "$12.99", comboPrice: "$16.99" },
        ],
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
      },
      {
        name: "Grouper",
        sizes: [
          { size: "1 Piece", price: "$12.99", comboPrice: "$16.99" },
          { size: "2 Piece", price: "$17.99", comboPrice: "$21.99" },
        ],
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
        img: "/images/food/fish-fillets.jpg",
      },
      {
        name: "Jumbo Shrimp",
        sizes: [
          { size: "7 Pieces", price: "$11.99", comboPrice: "$15.99" },
          { size: "11 Pieces", price: "$18.99", comboPrice: "$22.99" },
        ],
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
        img: "/images/food/shrimp.jpg",
      },
      {
        name: "Shrimp",
        sizes: [
          { size: "11 Pieces", price: "$9.99", comboPrice: "$13.99" },
          { size: "18 Pieces", price: "$15.99", comboPrice: "$19.99" },
        ],
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
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
        img: "/images/food/fish-fries-hushpuppies.jpg",
      },
      {
        name: "Fish & Hush Puppies Special",
        price: "$13.99",
        desc: "Includes side & 3 hush puppies",
        img: "/images/food/fish-hushpuppies.jpg",
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
          { size: "1/2 LB", price: "$7.99", comboPrice: "$11.99" },
          { size: "1 LB", price: "$10.99", comboPrice: "$14.99" },
        ],
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
        img: "/images/food/gizzards.jpg",
      },
      {
        name: "Liver",
        sizes: [
          { size: "1/2 LB", price: "$7.99", comboPrice: "$11.99" },
          { size: "1 LB", price: "$10.99", comboPrice: "$14.99" },
        ],
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
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
        comboPrice: "$11.99",
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
        img: "/images/food/chicken-sandwich.jpg",
      },
      {
        name: "Fish Sandwich",
        price: "$8.99",
        comboPrice: "$12.99",
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
        img: "/images/food/fish-sandwich.jpg",
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
      { name: "2 Chicken Strips W/ Fries", price: "$7.99", desc: "Ages 5 & under only. Includes fries" },
      { name: "2 Wings Traditional W/ Fries", price: "$7.99", desc: "Ages 5 & under only. Includes fries" },
      { name: "4 Pcs Catfish Nuggets W/ Fries", price: "$7.99", desc: "Ages 5 & under only. Includes fries" },
    ],
  },
  {
    id: "whole-wing-bucket",
    label: "Whole Wing Bucket",
    items: [
      { name: "20 Whole Wings", price: "$31.99", img: "/images/food/wing-bucket.jpg" },
      { name: "25 Whole Wings", price: "$38.99" },
      { name: "30 Whole Wings", price: "$45.99" },
      { name: "40 Whole Wings", price: "$59.99" },
      { name: "50 Whole Wings", price: "$72.99" },
      { name: "75 Whole Wings", price: "$102.99" },
      { name: "100 Whole Wings", price: "$132.99" },
    ],
  },
  {
    id: "add-ons",
    label: "Add-Ons",
    items: [
      { name: "5 Cut Wings", price: "$7.99" },
      { name: "4 Shrimp", price: "$3.00" },
      { name: "6 Shrimp", price: "$5.00" },
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
        img: "/images/food/fries.jpg",
      },
      { name: "Hush Puppies", price: "$5.99" },
      { name: "Jalapeno", price: "$0.60" },
      { name: "Large 6 Oz Mild Sauce", price: "$5.99" },
      { name: "Large Corn Nuggets", price: "$7.49" },
      { name: "Large Hush Puppies", price: "$7.49" },
      { name: "Large Okra", price: "$7.49" },
      { name: "Large Onion Rings", price: "$7.49" },
      { name: "Okra", price: "$7.50" },
      {
        name: "Onion Rings",
        price: "$5.99",
        img: "/images/food/onion-rings.jpg",
      },
      {
        name: "Pizza Puff",
        price: "$5.99",
        img: "/images/food/pizza-puff.jpg",
      },
      { name: "Whole Jalepeno Pepper", price: "$0.50" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Bearss menu — base from SkyTab, repriced per owner "Menu 7-8-2026".
// 2808 E BEARSS AVE, TAMPA, FL 33613
// Same combo model as Causeway (combo = base + $4.00 fries; non-fry side
// +$3.00; Mac & Cheese +$4.00). Chi-Town wings, Whole Wing Bucket, and Chicken
// & Waffle include the owner's $1 increase effective 2026-09-02; Snack Pack
// pricing is unchanged. Lemonade collapsed to a single item. Categories Sauce
// Additional and EXTRA REQUEST excluded from display tabs.
// ---------------------------------------------------------------------------
const bearssMenu: MenuCategory[] = [
  {
    id: "chitown-whole-wings",
    label: "Chi-Town Whole Wings",
    items: [
      {
        name: "3 Whole Wings & Side",
        price: "$8.99",
        desc: "Includes side. Other side +$3, Mac & Cheese +$4",
      },
      {
        name: "4 Whole Wings & Side",
        price: "$10.99",
        desc: "Includes side. Other side +$3, Mac & Cheese +$4",
        img: "/images/food/wings-whole-10pc.jpg",
      },
      {
        name: "6 Whole Wings & Side",
        price: "$13.99",
        desc: "Includes side. Other side +$3, Mac & Cheese +$4",
      },
      {
        name: "8 Whole Wings & Side",
        price: "$15.99",
        desc: "Includes side. Other side +$3, Mac & Cheese +$4",
      },
      {
        name: "10 Whole Wings & Side",
        price: "$18.99",
        desc: "Includes side. Other side +$3, Mac & Cheese +$4",
        img: "/images/food/wings-whole-20pc.jpg",
      },
      {
        name: "12 Whole Wings & Side",
        price: "$21.99",
        desc: "Includes side. Other side +$3, Mac & Cheese +$4",
      },
      {
        name: "15 Whole Wings & Side",
        price: "$27.99",
        desc: "Includes side. Other side +$3, Mac & Cheese +$4",
      },
    ],
  },
  {
    id: "jumbo-drums-flats",
    label: "JUMBO Drums & Flats",
    items: [
      {
        name: "6 Piece Wings",
        price: "$8.99",
        comboPrice: "$12.99",
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
        img: "/images/food/wings-jumbo.jpg",
      },
      {
        name: "10 Piece Wings",
        price: "$13.99",
        comboPrice: "$17.99",
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
        img: "/images/food/wings-fries-seasoned.jpg",
      },
      {
        name: "20 Piece Wings",
        price: "$25.99",
        comboPrice: "$29.99",
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
      },
      {
        name: "30 Piece Wings",
        price: "$36.99",
        comboPrice: "$40.99",
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
      },
      {
        name: "50 Piece Wings",
        price: "$59.99",
        comboPrice: "$63.99",
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
      },
      {
        name: "100 Piece Wings",
        price: "$119.99",
        comboPrice: "$123.99",
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
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
        img: "/images/food/wings-shrimp-basket.jpg",
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
          { size: "4 Piece", price: "$9.99", comboPrice: "$13.99" },
          { size: "6 Piece", price: "$12.99", comboPrice: "$16.99" },
        ],
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
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
          { size: "1/2 LB", price: "$7.99", comboPrice: "$11.99" },
          { size: "1 LB", price: "$10.99", comboPrice: "$14.99" },
        ],
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
        img: "/images/food/gizzards.jpg",
      },
      {
        name: "Liver",
        sizes: [
          { size: "1/2 LB", price: "$7.99", comboPrice: "$11.99" },
          { size: "1 LB", price: "$10.99", comboPrice: "$14.99" },
        ],
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
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
          { size: "1 Piece", price: "$7.99", comboPrice: "$11.99" },
          { size: "2 Piece", price: "$13.99", comboPrice: "$17.99" },
        ],
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
        img: "/images/food/grouper.jpg",
      },
      {
        name: "Catfish Nuggets",
        sizes: [
          { size: "7-9 Pieces", price: "$9.99", comboPrice: "$13.99" },
          { size: "10-13 Pieces", price: "$12.99", comboPrice: "$16.99" },
        ],
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
      },
      {
        name: "Catfish Filet",
        sizes: [
          { size: "1 Piece", price: "$7.99", comboPrice: "$11.99" },
          { size: "2 Piece", price: "$13.99", comboPrice: "$17.99" },
        ],
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
      },
      {
        name: "Grouper",
        sizes: [
          { size: "1 Piece", price: "$12.99", comboPrice: "$16.99" },
          { size: "2 Piece", price: "$17.99", comboPrice: "$21.99" },
        ],
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
      },
      {
        name: "Whiting",
        sizes: [
          { size: "3 Pieces", price: "$9.99", comboPrice: "$13.99" },
          { size: "5 Pieces", price: "$12.99", comboPrice: "$16.99" },
        ],
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
      },
      {
        name: "Jumbo Shrimp",
        sizes: [
          { size: "7 Pieces", price: "$11.99", comboPrice: "$15.99" },
          { size: "11 Pieces", price: "$18.99", comboPrice: "$22.99" },
        ],
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
        img: "/images/food/shrimp.jpg",
      },
      {
        name: "Shrimp",
        sizes: [
          { size: "11 Pieces", price: "$9.99", comboPrice: "$13.99" },
          { size: "18 Pieces", price: "$15.99", comboPrice: "$19.99" },
        ],
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
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
        img: "/images/food/story-plate.jpg",
      },
      {
        name: "Fish, Side & Hush Puppies Special",
        price: "$13.99",
        desc: "Includes side & 3 hush puppies",
        img: "/images/food/fish-hushpuppies.jpg",
      },
    ],
  },
  {
    id: "kays-chicken-waffle",
    label: "Chicken & Waffle",
    items: [
      { name: "3 Tenders + Waffles", price: "$15.99" },
      { name: "3 Whole Wings + Waffles", price: "$15.99" },
      { name: "Waffle Only", price: "$6.99" },
    ],
  },
  {
    id: "sandwiches",
    label: "Sandwiches",
    items: [
      {
        name: "Chicken Sandwich",
        price: "$7.99",
        comboPrice: "$11.99",
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
        img: "/images/food/chicken-sandwich.jpg",
      },
      {
        name: "Fish Sandwich",
        price: "$8.99",
        comboPrice: "$12.99",
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
        img: "/images/food/fish-sandwich.jpg",
      },
      {
        name: "Grouper Sandwich",
        price: "$12.99",
      },
      {
        name: "Kay's Sweet Steak",
        price: "$11.99",
        comboPrice: "$15.99",
        comboPremiumNote: "Other side +$3 · Mac & Cheese +$4",
        desc: "Sweet Hot or Original Sweet",
      },
    ],
  },
  {
    id: "kids-meal",
    label: "Kids Meal",
    items: [
      { name: "2 Wings Traditional W/ Fries", price: "$7.99", desc: "Ages 5 & under only. Includes fries" },
      { name: "2 Chicken Strips W/ Fries", price: "$7.99", desc: "Ages 5 & under only. Includes fries" },
      { name: "4 Pcs Catfish Nuggets W/ Fries", price: "$7.99", desc: "Ages 5 & under only. Includes fries" },
    ],
  },
  {
    id: "whole-wing-bucket",
    label: "Whole Wing Bucket",
    items: [
      { name: "20 Whole Wings", price: "$31.99", img: "/images/food/wing-bucket.jpg" },
      { name: "25 Whole Wings", price: "$38.99" },
      { name: "30 Whole Wings", price: "$45.99" },
      { name: "40 Whole Wings", price: "$59.99" },
      { name: "50 Whole Wings", price: "$72.99" },
      { name: "75 Whole Wings", price: "$102.99" },
      { name: "100 Whole Wings", price: "$132.99" },
    ],
  },
  {
    id: "add-ons",
    label: "Add-Ons",
    items: [
      { name: "5 Cut Wings", price: "$7.99" },
      { name: "4 Shrimp", price: "$3.00" },
      { name: "6 Shrimp", price: "$5.00" },
    ],
  },
  {
    id: "kays-lemonade",
    label: "Kay's Lemonade",
    items: [
      {
        name: "Lemonade",
        sizes: [
          { size: "Small", price: "$2.99" },
          { size: "Medium", price: "$4.99" },
          { size: "Large", price: "$6.99" },
          { size: "1/2 Gallon", price: "$9.99" },
        ],
        img: "/images/food/fruit-slushy.jpg",
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
      { name: "Bottle Water", price: "$2.49" },
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
      { name: "Original Pound Cake", price: "$6.99", note: "Sold Out", img: "/images/food/pound-cake.jpg" },
    ],
  },
  {
    id: "sides",
    label: "Sides",
    items: [
      { name: "Bread", price: "$0.25" },
      {
        name: "Fries",
        price: "$4.99",
        img: "/images/food/fries.jpg",
      },
      { name: "Basket For Fries", price: "$6.99" },
      { name: "Cheese Fries", price: "$6.99" },
      { name: "Red Beans & Rice", price: "$4.99" },
      {
        name: "Rice",
        sizes: [
          { size: "Reg", price: "$3.99" },
          { size: "Lg", price: "$6.99" },
        ],
      },
      { name: "Grits Regular", price: "$2.99" },
      { name: "Okra", price: "$5.99" },
      { name: "Mozzarella Sticks", price: "$5.99" },
      { name: "Corn Nuggets", price: "$5.99" },
      { name: "Hush Puppies", price: "$5.99" },
      {
        name: "Onion Rings",
        price: "$5.99",
        img: "/images/food/onion-rings.jpg",
      },
      { name: "Mac & Cheese", price: "$6.99" },
      {
        name: "Pizza Puff",
        price: "$5.99",
        img: "/images/food/pizza-puff.jpg",
      },
      { name: "Pizza Puff (Beef)", price: "$6.99" },
      { name: "Whole Jalepeno Pepper", price: "$0.50" },
      { name: "Large 6 Oz Mild Sauce", price: "$5.99" },
      { name: "Large Rice & Beans", price: "$6.99" },
      { name: "Large Cheese Fries", price: "$8.99" },
      { name: "Large Grits", price: "$5.99" },
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
