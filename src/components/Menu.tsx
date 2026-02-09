"use client";

import { useState } from "react";

interface MenuItem {
  name: string;
  price?: string;
}

interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: "wings",
    label: "Wings",
    items: [
      { name: "6 Piece Wings", price: "$15.49" },
      { name: "10 Piece Wings", price: "$22.00" },
      { name: "10 Whole Wings & Fries", price: "$22.99" },
      { name: "15 Piece Wings Combo", price: "$22.99" },
      { name: "20 Whole Wings & Fries", price: "$49.49" },
      { name: "Traditional Wings", price: "$15.99" },
    ],
  },
  {
    id: "fish",
    label: "Fish",
    items: [
      { name: "2 Pcs Grouper", price: "$16.99" },
      { name: "Grouper Sandwich", price: "$16.75" },
      { name: "Catfish Nuggets", price: "$10.99" },
      { name: "Fish Sandwich", price: "$11.75" },
      { name: "Fish Fries & Hush Puppies Special", price: "$15.99" },
    ],
  },
  {
    id: "shrimp",
    label: "Shrimp",
    items: [
      { name: "Shrimp", price: "$15.50" },
      { name: "Jumbo Shrimp", price: "$24.50" },
      { name: "10 Jumbo Shrimp Special", price: "$29.75" },
      { name: "Fish & 8 Shrimp Special", price: "$24.75" },
    ],
  },
  {
    id: "chicken",
    label: "Chicken",
    items: [
      { name: "Chicken Tenders" },
      { name: "Chicken Gizzards & Livers" },
    ],
  },
  {
    id: "combos",
    label: "Combo Specials",
    items: [
      { name: "Wings Shrimp & Fries", price: "$21.98" },
      { name: "Fish Shrimp & Fries", price: "$19.48" },
    ],
  },
  {
    id: "sides",
    label: "Sides & Extras",
    items: [
      { name: "Fries" },
      { name: "Fried Okra" },
      { name: "Hush Puppies" },
      { name: "Mac and Cheese" },
      { name: "Pizza Puffs" },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      { name: "Red Velvet Cake (Homemade)" },
      { name: "Pound Cake (Homemade)" },
      { name: "Key Lime Cake" },
    ],
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("wings");

  const currentCategory = menuData.find((c) => c.id === activeCategory) || menuData[0];

  return (
    <section id="menu" className="section-padding" style={{ background: "var(--bg-dark)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
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
            Our Menu
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}
          >
            Chicago Flavor,{" "}
            <span style={{ color: "var(--gold)" }}>Tampa Style</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Every item made fresh to order with our signature Chicago seasonings. Served with the
            one and only authentic Chicago Style Mild Sauce.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className="menu-tabs flex gap-2 overflow-x-auto pb-4 mb-8 -mx-6 px-6"
          role="tablist"
          aria-label="Menu categories"
        >
          {menuData.map((category) => (
            <button
              key={category.id}
              role="tab"
              aria-selected={activeCategory === category.id}
              aria-controls={`panel-${category.id}`}
              onClick={() => setActiveCategory(category.id)}
              className="whitespace-nowrap px-6 py-3 rounded-full text-sm transition-all duration-200"
              style={{
                fontFamily: "var(--font-heading)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 600,
                minHeight: "48px",
                background:
                  activeCategory === category.id ? "var(--red)" : "var(--surface)",
                color: activeCategory === category.id ? "white" : "var(--text-muted)",
                border:
                  activeCategory === category.id
                    ? "2px solid var(--red)"
                    : "2px solid transparent",
              }}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div
          id={`panel-${currentCategory.id}`}
          role="tabpanel"
          aria-labelledby={currentCategory.id}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {currentCategory.items.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between p-5 rounded-lg transition-all duration-200 hover:border-[#CC0000]/30"
              style={{
                background: "var(--surface)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div>
                <h3
                  className="text-base font-semibold text-white mb-1"
                  style={{ fontFamily: "var(--font-body)", textTransform: "none", letterSpacing: "0" }}
                >
                  {item.name}
                </h3>
              </div>
              {item.price && (
                <span
                  className="text-lg font-bold ml-4 shrink-0"
                  style={{ color: "var(--gold)", fontFamily: "var(--font-heading)" }}
                >
                  {item.price}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Order CTA */}
        <div className="text-center mt-12">
          <a href="tel:8138930415" className="btn-gold">
            Order Online
          </a>
        </div>
      </div>
    </section>
  );
}
