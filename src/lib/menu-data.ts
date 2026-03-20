import type { LocationId } from "./constants";

export interface MenuItemSize {
  size: string;
  price: string;
}

export interface MenuItem {
  name: string;
  price?: string;
  sizes?: MenuItemSize[];
  desc?: string;
  img?: string;
  note?: string; // e.g. "Sold Out"
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

// ---------------------------------------------------------------------------
// Causeway menu — scraped from SkyTab 2026-03-20
// 10323 CAUSEWAY BLVD, TAMPA, FL 33619
// Categories that are add-ons (Sauce Additional, EXTRA REQUEST) are excluded
// from the display tabs; a note is shown instead.
// ---------------------------------------------------------------------------
const causewayMenu: MenuCategory[] = [
  {
    id: "chitown-whole-wings",
    label: "Chi-Town Whole Wings",
    items: [
      {
        name: "4 Whole Wings & Side",
        price: "$12.99",
        img: "https://static.wixstatic.com/media/2041f5_c7ff9d7dbb014e43959de5044e3ed183~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/2041f5_c7ff9d7dbb014e43959de5044e3ed183~mv2.jpg",
      },
      { name: "6 Whole Wings & Side", price: "$14.99" },
      { name: "8 Whole Wings & Side", price: "$18.99" },
      {
        name: "10 Whole Wings & Side",
        price: "$23.99",
        img: "https://static.wixstatic.com/media/2041f5_459fda4742114148878ae59dba06985c~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/2041f5_459fda4742114148878ae59dba06985c~mv2.jpg",
      },
      { name: "20 Whole Wings & Side", price: "$39.99" },
    ],
  },
  {
    id: "chicken-specialty",
    label: "Chicken Specialty",
    items: [
      {
        name: "Gizzards combo",
        sizes: [
          { size: "1/2 LB", price: "$7.99" },
          { size: "1 LB", price: "$10.99" },
        ],
        img: "https://static.wixstatic.com/media/8b06b4_5c2932173e7c4b6eaf71488bd635ba97~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_5c2932173e7c4b6eaf71488bd635ba97~mv2.jpg",
      },
      {
        name: "Gizzards Only",
        sizes: [
          { size: "1/2 LB", price: "$7.99" },
          { size: "1 LB", price: "$10.99" },
        ],
      },
      {
        name: "Liver Combo",
        sizes: [
          { size: "1/2 LB", price: "$7.99" },
          { size: "1 LB", price: "$10.99" },
        ],
      },
      {
        name: "Liver Only",
        sizes: [
          { size: "1/2 LB", price: "$7.99" },
          { size: "1 LB", price: "$10.99" },
        ],
      },
    ],
  },
  {
    id: "chicken-tenders",
    label: "Chicken Tenders",
    items: [
      {
        name: "Chicken Tenders Combo",
        sizes: [
          { size: "4 Piece", price: "$9.99" },
          { size: "6 Piece", price: "$12.99" },
        ],
        img: "https://static.wixstatic.com/media/8b06b4_e18d5d387e154c65838ca810e5976831~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_e18d5d387e154c65838ca810e5976831~mv2.jpg",
      },
      {
        name: "Chicken Tenders Only",
        sizes: [
          { size: "4 Piece", price: "$9.99" },
          { size: "6 Piece", price: "$12.99" },
        ],
      },
    ],
  },
  {
    id: "fish-only",
    label: "Fish Only",
    items: [
      {
        name: "Basa Only",
        sizes: [
          { size: "1 Piece", price: "$7.99" },
          { size: "2 Piece", price: "$13.99" },
        ],
        img: "https://static.wixstatic.com/media/8b06b4_4484ceed69d7485d9b5df5c456db5182~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_4484ceed69d7485d9b5df5c456db5182~mv2.jpg",
      },
      {
        name: "Catfish Nuggets Only",
        sizes: [
          { size: "7-9 Pieces", price: "$9.99" },
          { size: "10-13 Pieces", price: "$12.99" },
        ],
      },
      {
        name: "Grouper Only",
        sizes: [
          { size: "1 Piece", price: "$12.99" },
          { size: "2 Piece", price: "$17.99" },
        ],
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
        img: "https://static.wixstatic.com/media/8b06b4_4a8f718f467a4fd6bbac84ac9abca0e4~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_4a8f718f467a4fd6bbac84ac9abca0e4~mv2.jpg",
      },
      { name: "6 Piece Wings Combo", price: "$10.99" },
      { name: "10 Piece Wings", price: "$15.99" },
      { name: "10 Piece Wings Combo", price: "$15.99" },
      { name: "15 Piece Wings", price: "$29.00" },
      { name: "15 Piece Wings Combo", price: "$23.99" },
      { name: "20 Piece Wings", price: "$37.75" },
      { name: "20 Piece Wings Combo", price: "$28.99" },
      { name: "25 Piece Wings", price: "$34.99" },
      { name: "25 Piece Wings Combo", price: "$34.99" },
      { name: "50 Piece Wings", price: "$63.99" },
      { name: "50 Piece Wings Combo", price: "$63.99" },
    ],
  },
  {
    id: "kids-meal",
    label: "Kids Meal",
    items: [
      { name: "2 Chicken Strips W/ Side", price: "$7.99" },
      { name: "2 Wings Traditional W/ Side", price: "$7.99" },
      { name: "4 Pcs Catfish Nuggets W/ Side", price: "$7.99" },
    ],
  },
  {
    id: "sandwiches",
    label: "Sandwiches",
    items: [
      {
        name: "Chicken Sandwich",
        price: "$7.99",
        img: "https://static.wixstatic.com/media/8b06b4_1abe9c9136c44a808cf3c325e44967f7~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_1abe9c9136c44a808cf3c325e44967f7~mv2.jpg",
      },
      { name: "Chicken Combo", price: "$7.99" },
      { name: "Fish Combo", price: "$8.99" },
      {
        name: "Fish Only",
        price: "$8.99",
        img: "https://static.wixstatic.com/media/2041f5_80a604da678040f39d686b21b4094789~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/2041f5_80a604da678040f39d686b21b4094789~mv2.jpg",
      },
      { name: "Grouper", price: "$12.99" },
    ],
  },
  {
    id: "seafood-specials",
    label: "Seafood Specials",
    items: [
      { name: "10 Jumbo Shrimp Special", price: "$23.99" },
      {
        name: "Basa Combo",
        sizes: [
          { size: "1 Piece", price: "$7.99" },
          { size: "2 Piece", price: "$13.99" },
        ],
      },
      {
        name: "Catfish Nuggets Combo",
        sizes: [
          { size: "7-9 Pieces", price: "$9.99" },
          { size: "10-13 Pieces", price: "$12.99" },
        ],
      },
      { name: "Fish & 8 Shrimp Special", price: "$18.99" },
      {
        name: "Fish & 3 Hush Puppies Special",
        price: "$13.99",
        img: "https://static.wixstatic.com/media/8b06b4_ea2b56c6b3834e339f835923cb57f297~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_ea2b56c6b3834e339f835923cb57f297~mv2.jpg",
      },
      {
        name: "Grouper Combo",
        sizes: [
          { size: "1 Piece", price: "$12.99" },
          { size: "2 Piece", price: "$17.99" },
        ],
      },
      {
        name: "Jumbo Shrimp Combo",
        sizes: [
          { size: "7 Jumbo Shrimp", price: "$11.99" },
          { size: "11 Jumbo Shrimp", price: "$18.99" },
        ],
        img: "https://static.wixstatic.com/media/8b06b4_75244bd541c34705b28c2ce8a93c6568~mv2.png/v1/fill/w_400,h_400,al_c,q_85/8b06b4_75244bd541c34705b28c2ce8a93c6568~mv2.png",
      },
      {
        name: "Shrimp Combo",
        sizes: [
          { size: "11 Shrimp", price: "$9.99" },
          { size: "18 Shrimp", price: "$15.99" },
        ],
      },
    ],
  },
  {
    id: "shrimp-only",
    label: "Shrimp Only",
    items: [
      {
        name: "Jumbo Shrimp",
        sizes: [
          { size: "7 Jumbo Shrimp", price: "$11.99" },
          { size: "11 Jumbo Shrimp", price: "$18.99" },
        ],
      },
      {
        name: "Shrimp",
        sizes: [
          { size: "11 Shrimp", price: "$9.99" },
          { size: "18 Shrimp", price: "$15.99" },
        ],
      },
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
// Categories that are add-ons (Sauce Additional, EXTRA REQUEST) are excluded
// from the display tabs; a note is shown instead.
// ---------------------------------------------------------------------------
const bearssMenu: MenuCategory[] = [
  {
    id: "chitown-whole-wings",
    label: "Chi-Town Whole Wings",
    items: [
      {
        name: "4 Whole Wings & Side",
        price: "$12.99",
        img: "https://static.wixstatic.com/media/2041f5_c7ff9d7dbb014e43959de5044e3ed183~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/2041f5_c7ff9d7dbb014e43959de5044e3ed183~mv2.jpg",
      },
      { name: "6 Whole Wings & Side", price: "$14.99" },
      { name: "8 Whole Wings & Side", price: "$18.99" },
      {
        name: "10 Whole Wings & Side",
        price: "$23.99",
        img: "https://static.wixstatic.com/media/2041f5_459fda4742114148878ae59dba06985c~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/2041f5_459fda4742114148878ae59dba06985c~mv2.jpg",
      },
      { name: "20 Whole Wings & Side", price: "$39.99" },
    ],
  },
  {
    id: "jumbo-drums-flats",
    label: "JUMBO Drums & Flats",
    items: [
      {
        name: "6 Piece Wings",
        price: "$10.99",
        img: "https://static.wixstatic.com/media/8b06b4_4a8f718f467a4fd6bbac84ac9abca0e4~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_4a8f718f467a4fd6bbac84ac9abca0e4~mv2.jpg",
      },
      { name: "6 Piece Wings Combo", price: "$10.99" },
      { name: "10 Piece Wings", price: "$15.99" },
      { name: "10 Piece Wings Combo", price: "$15.99" },
      { name: "15 Piece Wings", price: "$23.99" },
      { name: "15 Piece Wings Combo", price: "$23.99" },
      { name: "20 Piece Wings", price: "$28.99" },
      { name: "20 Piece Wings Combo", price: "$28.99" },
      { name: "25 Piece Wings", price: "$34.99" },
      { name: "25 Piece Wings Combo", price: "$34.99" },
      { name: "50 Piece Wings", price: "$63.99" },
      { name: "50 Piece Wings Combo", price: "$63.99" },
    ],
  },
  {
    id: "mixed-chicken-meals",
    label: "Mixed Chicken Meals",
    items: [
      { name: "3 Pcs Mix 1 Side (Leg, Thigh, Wing) Meal", price: "$8.99" },
      { name: "4 Pcs Mixed (Legs & Thighs) & 1 Side", price: "$10.99" },
      { name: "6 Pcs Mixed (Legs & Thigh) & 1 Side", price: "$12.99" },
      { name: "10 Pcs Mixed (Legs & Thighs) & 1 Side", price: "$18.99" },
      { name: "21 Pcs Mixed (8L, 8T, 5W) & 1 Large Side", price: "$31.99" },
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
    id: "chicken-tenders",
    label: "Chicken Tenders",
    items: [
      {
        name: "Chicken Tenders Combo",
        sizes: [
          { size: "4 Piece", price: "$9.99" },
          { size: "6 Piece", price: "$12.99" },
        ],
        img: "https://static.wixstatic.com/media/8b06b4_e18d5d387e154c65838ca810e5976831~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_e18d5d387e154c65838ca810e5976831~mv2.jpg",
      },
      {
        name: "Chicken Tenders",
        sizes: [
          { size: "4 Piece", price: "$9.99" },
          { size: "6 Piece", price: "$12.99" },
        ],
      },
    ],
  },
  {
    id: "chicken-specialty",
    label: "Chicken Specialty",
    items: [
      {
        name: "Gizzards combo",
        sizes: [
          { size: "1/2 LB", price: "$7.99" },
          { size: "1 LB", price: "$10.99" },
        ],
        img: "https://static.wixstatic.com/media/8b06b4_5c2932173e7c4b6eaf71488bd635ba97~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_5c2932173e7c4b6eaf71488bd635ba97~mv2.jpg",
      },
      {
        name: "Liver Combo",
        sizes: [
          { size: "1/2 LB", price: "$7.99" },
          { size: "1 LB", price: "$10.99" },
        ],
      },
      {
        name: "Gizzards",
        sizes: [
          { size: "1/2 LB", price: "$7.99" },
          { size: "1 LB", price: "$10.99" },
        ],
      },
      {
        name: "Liver",
        sizes: [
          { size: "1/2 LB", price: "$7.99" },
          { size: "1 LB", price: "$10.99" },
        ],
      },
    ],
  },
  {
    id: "snack-pack",
    label: "Snack Pack",
    items: [
      { name: "2 WHOLE Wings & 5 Shrimp", price: "$8.99" },
      { name: "2 WHOLE Wings & Basa", price: "$8.99" },
      { name: "2 WHOLE Wings & Pizza Puff", price: "$8.99" },
      { name: "2 WHOLE Wings & Gizzards", price: "$8.99" },
      { name: "Basa & 3 Shrimp", price: "$8.99" },
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
      { name: "Basket For fries", price: "$6.99" },
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
  {
    id: "fish-only",
    label: "Fish Only",
    items: [
      {
        name: "Basa",
        sizes: [
          { size: "1 Piece", price: "$7.99" },
          { size: "2 Piece", price: "$13.99" },
        ],
        img: "https://static.wixstatic.com/media/8b06b4_4484ceed69d7485d9b5df5c456db5182~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_4484ceed69d7485d9b5df5c456db5182~mv2.jpg",
      },
      {
        name: "Catfish Nuggets",
        sizes: [
          { size: "7-9 Pieces", price: "$9.99" },
          { size: "10-13 Pieces", price: "$12.99" },
        ],
      },
      {
        name: "Grouper",
        sizes: [
          { size: "1 Piece", price: "$12.99" },
          { size: "2 Piece", price: "$17.99" },
        ],
      },
      {
        name: "Whiting",
        sizes: [
          { size: "3 piece", price: "$9.99" },
          { size: "5 piece", price: "$12.99" },
        ],
      },
      {
        name: "Catfish Filet",
        sizes: [
          { size: "1 Catfish Filet", price: "$7.99" },
          { size: "2 Catfish Filet", price: "$13.99" },
        ],
      },
    ],
  },
  {
    id: "shrimp-only",
    label: "Shrimp Only",
    items: [
      {
        name: "Jumbo Shrimp",
        sizes: [
          { size: "7 Jumbo Shrimp", price: "$11.99" },
          { size: "11 Jumbo Shrimp", price: "$18.99" },
        ],
        img: "https://static.wixstatic.com/media/8b06b4_75244bd541c34705b28c2ce8a93c6568~mv2.png/v1/fill/w_400,h_400,al_c,q_85/8b06b4_75244bd541c34705b28c2ce8a93c6568~mv2.png",
      },
      {
        name: "Shrimp",
        sizes: [
          { size: "11 Shrimp", price: "$9.99" },
          { size: "18 Shrimp", price: "$15.99" },
        ],
      },
    ],
  },
  {
    id: "seafood-specials",
    label: "Seafood Specials",
    items: [
      {
        name: "Catfish Combo",
        sizes: [
          { size: "1 Catfish Filet", price: "$7.99" },
          { size: "2 Catfish Filet", price: "$13.99" },
        ],
      },
      {
        name: "Whiting Combo",
        sizes: [
          { size: "3 piece", price: "$9.99" },
          { size: "5 piece", price: "$12.99" },
        ],
      },
      {
        name: "Basa Combo",
        sizes: [
          { size: "1 Piece", price: "$7.99" },
          { size: "2 Piece", price: "$13.99" },
        ],
      },
      {
        name: "Catfish Nuggets Combo",
        sizes: [
          { size: "7-9 Pieces", price: "$9.99" },
          { size: "10-13 Pieces", price: "$12.99" },
        ],
      },
      {
        name: "Grouper Combo",
        sizes: [
          { size: "1 Piece", price: "$12.99" },
          { size: "2 Piece", price: "$17.99" },
        ],
      },
      {
        name: "Jumbo Shrimp Combo",
        sizes: [
          { size: "7 Jumbo Shrimp", price: "$11.99" },
          { size: "11 Jumbo Shrimp", price: "$18.99" },
        ],
      },
      {
        name: "Shrimp Combo",
        sizes: [
          { size: "11 Shrimp", price: "$9.99" },
          { size: "18 Shrimp", price: "$15.99" },
        ],
      },
      { name: "10 Jumbo Shrimp, Side & Hush Puppies Special", price: "$23.99" },
      {
        name: "Fish & 8 Shrimp 3 Hush Puppies Special",
        price: "$18.99",
        img: "https://static.wixstatic.com/media/8b06b4_0adbf0d8a7204259a87d3dbbb2125068~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_0adbf0d8a7204259a87d3dbbb2125068~mv2.jpg",
      },
      {
        name: "Fish, side & 3 Hush Puppies Special",
        price: "$13.99",
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
        name: "Chicken Sandwich Combo",
        price: "$7.99",
        img: "https://static.wixstatic.com/media/8b06b4_1abe9c9136c44a808cf3c325e44967f7~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_1abe9c9136c44a808cf3c325e44967f7~mv2.jpg",
      },
      {
        name: "Fish Sandwich Combo",
        price: "$8.99",
        img: "https://static.wixstatic.com/media/2041f5_80a604da678040f39d686b21b4094789~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/2041f5_80a604da678040f39d686b21b4094789~mv2.jpg",
      },
      { name: "Grouper Sandwich", price: "$12.99" },
      { name: "Kay's Sweet Steak", price: "$11.99" },
      { name: "Chicken Sandwich", price: "$7.99" },
      { name: "Fish Sandwich", price: "$8.99" },
    ],
  },
  {
    id: "kids-meal",
    label: "Kids Meal",
    items: [
      { name: "2 Wings Traditional W/ Side", price: "$7.99" },
      { name: "2 Chicken Strips W/ Side", price: "$7.99" },
      { name: "4 Pcs Catfish Nuggets W/ Side", price: "$7.99" },
    ],
  },
  {
    id: "kays-lemonade",
    label: "Kay's Lemonade",
    items: [
      { name: "DRINK: 1/2 Gallons MIXED", price: "$10.99" },
      {
        name: "SLUSHY: Mixed FLAVORS",
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
        name: "DRINK: Mix ALL Flavors",
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
];

export const menuByLocation: Record<LocationId, MenuCategory[]> = {
  causeway: causewayMenu,
  bearss: bearssMenu,
};

export const defaultMenu = causewayMenu;
