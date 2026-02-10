"use client";

import { useState } from "react";
import { ORDER_CAUSEWAY, ORDER_BEARSS } from "@/lib/constants";

interface MenuItem {
  name: string;
  price?: string;
  desc?: string;
  img?: string;
}

interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: "whole-wings",
    label: "Whole Wing Combos",
    items: [
      { name: "10 Whole Wings & Fries", price: "$22.99", desc: "Whole wings with our signature fries", img: "https://static.wixstatic.com/media/2041f5_c7ff9d7dbb014e43959de5044e3ed183~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/2041f5_c7ff9d7dbb014e43959de5044e3ed183~mv2.jpg" },
      { name: "20 Whole Wings & Fries", price: "$49.49", desc: "Party-size whole wings", img: "https://static.wixstatic.com/media/2041f5_459fda4742114148878ae59dba06985c~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/2041f5_459fda4742114148878ae59dba06985c~mv2.jpg" },
      { name: "30 Whole Wings & Fries", price: "$64.99", desc: "Feed the whole crew" },
      { name: "50 Whole Wings Party Pack", price: "$99.99", desc: "The ultimate party platter" },
    ],
  },
  {
    id: "traditional-wings",
    label: "Traditional Wings",
    items: [
      { name: "6 Piece Wings", price: "$15.49", desc: "Crispy Chicago-style seasoned wings", img: "https://static.wixstatic.com/media/8b06b4_4a8f718f467a4fd6bbac84ac9abca0e4~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_4a8f718f467a4fd6bbac84ac9abca0e4~mv2.jpg" },
      { name: "10 Piece Wings", price: "$22.00", desc: "Perfect for sharing" },
      { name: "15 Piece Wings Combo", price: "$22.99", desc: "Best value wing combo" },
      { name: "Traditional Wings & Fries", price: "$15.99", desc: "Drums & flats with fries" },
      { name: "20 Piece Wings", price: "$35.99", desc: "Big appetite? We got you" },
    ],
  },
  {
    id: "chicken",
    label: "Chicken",
    items: [
      { name: "Chicken Tenders (3pc)", price: "$10.99", desc: "Hand-breaded with Chicago seasoning", img: "https://static.wixstatic.com/media/8b06b4_e18d5d387e154c65838ca810e5976831~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_e18d5d387e154c65838ca810e5976831~mv2.jpg" },
      { name: "Chicken Tenders (5pc)", price: "$14.99", desc: "Extra tenders for extra hunger" },
      { name: "Chicken Gizzards & Livers", price: "$10.99", desc: "A Chicago soul food classic", img: "https://static.wixstatic.com/media/8b06b4_5c2932173e7c4b6eaf71488bd635ba97~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_5c2932173e7c4b6eaf71488bd635ba97~mv2.jpg" },
      { name: "Chicken Sandwich", price: "$11.75", desc: "Crispy chicken on a toasted bun", img: "https://static.wixstatic.com/media/8b06b4_1abe9c9136c44a808cf3c325e44967f7~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_1abe9c9136c44a808cf3c325e44967f7~mv2.jpg" },
    ],
  },
  {
    id: "seafood",
    label: "Seafood",
    items: [
      { name: "2 Pcs Grouper", price: "$16.99", desc: "Fresh grouper fillets, golden fried", img: "https://static.wixstatic.com/media/8b06b4_4484ceed69d7485d9b5df5c456db5182~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_4484ceed69d7485d9b5df5c456db5182~mv2.jpg" },
      { name: "Grouper Sandwich", price: "$16.75", desc: "Crispy grouper on a fresh bun" },
      { name: "Fish Sandwich", price: "$11.75", desc: "Classic fried fish sandwich", img: "https://static.wixstatic.com/media/2041f5_80a604da678040f39d686b21b4094789~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/2041f5_80a604da678040f39d686b21b4094789~mv2.jpg" },
      { name: "Fish, Fries & Hush Puppies", price: "$15.99", desc: "Fish special with 3 hush puppies", img: "https://static.wixstatic.com/media/8b06b4_ea2b56c6b3834e339f835923cb57f297~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_ea2b56c6b3834e339f835923cb57f297~mv2.jpg" },
      { name: "Catfish Nuggets", price: "$10.99", desc: "7-9 pieces of tender catfish" },
      { name: "Shrimp", price: "$15.50", desc: "Perfectly seasoned fried shrimp", img: "https://static.wixstatic.com/media/8b06b4_75244bd541c34705b28c2ce8a93c6568~mv2.png/v1/fill/w_400,h_400,al_c,q_85/8b06b4_75244bd541c34705b28c2ce8a93c6568~mv2.png" },
      { name: "Jumbo Shrimp", price: "$24.50", desc: "Large gulf shrimp, golden crispy" },
      { name: "10 Jumbo Shrimp Special", price: "$29.75", desc: "With fries & hush puppies" },
      { name: "Fish & 8 Shrimp Special", price: "$24.75", desc: "Best of both with 3 hush puppies" },
      { name: "Wings, Shrimp & Fries", price: "$21.98", desc: "The best of everything", img: "https://static.wixstatic.com/media/8b06b4_0adbf0d8a7204259a87d3dbbb2125068~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_0adbf0d8a7204259a87d3dbbb2125068~mv2.jpg" },
      { name: "Fish, Shrimp & Fries", price: "$19.48", desc: "Seafood lover's combo" },
    ],
  },
  {
    id: "sides",
    label: "Sides",
    items: [
      { name: "Fries", price: "$4.99", desc: "Crispy golden fries", img: "https://static.wixstatic.com/media/8b06b4_c52f41438b8148ab99857deadca79ae8~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_c52f41438b8148ab99857deadca79ae8~mv2.jpg" },
      { name: "Fried Okra", price: "$5.99", desc: "Southern-style fried okra" },
      { name: "Hush Puppies", price: "$4.99", desc: "Homemade cornmeal fritters" },
      { name: "Mac and Cheese", price: "$5.99", desc: "Creamy baked mac & cheese" },
      { name: "Pizza Puffs", price: "$3.99", desc: "Chicago hometown favorite", img: "https://static.wixstatic.com/media/8b06b4_feeb4e0cd5da42e18c321db281a50820~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/8b06b4_feeb4e0cd5da42e18c321db281a50820~mv2.jpg" },
      { name: "Onion Rings", price: "$5.99", desc: "Crispy hand-battered rings", img: "https://static.wixstatic.com/media/2041f5_d21a8b47dc164948b78c57f5c81f13c7~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/2041f5_d21a8b47dc164948b78c57f5c81f13c7~mv2.jpg" },
      { name: "Coleslaw", price: "$3.99", desc: "Creamy Southern coleslaw" },
    ],
  },
  {
    id: "kids",
    label: "Kids Meals",
    items: [
      { name: "Kids Wings (4pc)", price: "$8.99", desc: "4 wings with fries & drink" },
      { name: "Kids Tenders (2pc)", price: "$7.99", desc: "2 chicken tenders with fries & drink" },
      { name: "Kids Fish & Fries", price: "$8.99", desc: "Fish fillet with fries & drink" },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      { name: "Red Velvet Cake", price: "$5.99", desc: "Homemade, Ms. Kay's recipe" },
      { name: "Pound Cake", price: "$4.99", desc: "Homemade, dense & buttery" },
      { name: "Key Lime Cake", price: "$5.99", desc: "Tangy citrus with cream frosting" },
    ],
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("whole-wings");

  const currentCategory = menuData.find((c) => c.id === activeCategory) || menuData[0];

  return (
    <section id="menu" className="section-padding" style={{ background: "var(--background)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
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
            Our Menu
          </p>
          <h2
            className="text-4xl sm:text-5xl mb-4"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--text-primary)" }}
          >
            Chicago Flavor,{" "}
            <span style={{ color: "var(--secondary)" }}>Tampa Style</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Every item made fresh to order with our signature Chicago seasonings. Served with the
            one and only authentic Chicago Style Mild Sauce.
          </p>
        </div>

        {/* Sauce Callout */}
        <div
          className="text-center mb-8 py-4 px-6 rounded-lg mx-auto max-w-2xl"
          style={{ background: "var(--surface)", border: "1px solid rgba(221,40,3,0.3)" }}
        >
          <p className="text-sm" style={{ color: "var(--secondary)", fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            All meals come with Kay&apos;s Signature Chicago Mild Sauce. No ketchup served.
          </p>
          <p className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>
            Seasoning options: Lite &middot; Regular &middot; Extra
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className="menu-tabs flex gap-2 overflow-x-auto pb-4 mb-8 -mx-6 px-6 justify-center flex-wrap"
          role="tablist"
          aria-label="Menu categories"
        >
          {menuData.map((category) => (
            <button
              key={category.id}
              id={`tab-${category.id}`}
              role="tab"
              aria-selected={activeCategory === category.id}
              aria-controls={`panel-${category.id}`}
              onClick={() => setActiveCategory(category.id)}
              className="whitespace-nowrap px-5 py-2.5 rounded-full text-sm transition-all duration-200"
              style={{
                fontFamily: "var(--font-heading)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 600,
                minHeight: "44px",
                background:
                  activeCategory === category.id ? "var(--primary)" : "var(--surface)",
                color: activeCategory === category.id ? "var(--text-on-primary)" : "var(--text-secondary)",
                border:
                  activeCategory === category.id
                    ? "2px solid var(--primary)"
                    : "2px solid rgba(255,255,255,0.1)",
              }}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div
          key={currentCategory.id}
          id={`panel-${currentCategory.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${currentCategory.id}`}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 menu-panel-enter"
        >
          {currentCategory.items.map((item) => (
            <div
              key={item.name}
              className="flex gap-4 p-4 rounded-xl menu-item-card"
              style={{
                background: "var(--surface)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Food Image */}
              {item.img && (
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden shrink-0">
                  <img
                    src={item.img}
                    alt={item.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              {/* Text Content */}
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <div className="flex items-start justify-between gap-3">
                  <h3
                    className="text-base font-semibold"
                    style={{ fontFamily: "var(--font-body)", textTransform: "none", letterSpacing: "0", color: "var(--text-primary)" }}
                  >
                    {item.name}
                  </h3>
                  {item.price && (
                    <span
                      className="text-lg font-bold shrink-0"
                      style={{ color: "var(--secondary)", fontFamily: "var(--font-heading)" }}
                    >
                      {item.price}
                    </span>
                  )}
                </div>
                {item.desc && (
                  <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Order CTAs — both locations */}
        <div className="text-center mt-12">
          <p className="text-sm mb-4" style={{ color: "var(--text-secondary)", fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Order from your nearest location
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={ORDER_CAUSEWAY} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Order &mdash; Causeway Blvd
            </a>
            <a href={ORDER_BEARSS} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Order &mdash; Bearss Ave
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
