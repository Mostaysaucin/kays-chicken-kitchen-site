"use client";

import { useState } from "react";

const ORDER_URL = "https://www.clover.com/online-ordering/kays-kitchen-tampa";

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
    id: "wings",
    label: "Wings",
    items: [
      { name: "6 Piece Wings", price: "$15.49", desc: "Crispy Chicago-style seasoned wings" },
      { name: "10 Piece Wings", price: "$22.00", desc: "Perfect for sharing" },
      { name: "10 Whole Wings & Fries", price: "$22.99", desc: "Whole wings with our signature fries" },
      { name: "15 Piece Wings Combo", price: "$22.99", desc: "Best value wing combo" },
      { name: "20 Whole Wings & Fries", price: "$49.49", desc: "Party-size whole wings" },
      { name: "Traditional Wings", price: "$15.99", desc: "Drums & flats with fries" },
    ],
  },
  {
    id: "fish",
    label: "Fish",
    items: [
      { name: "2 Pcs Grouper", price: "$16.99", desc: "Fresh grouper fillets, golden fried" },
      { name: "Grouper Sandwich", price: "$16.75", desc: "Crispy grouper on a fresh bun" },
      { name: "Catfish Nuggets", price: "$10.99", desc: "7-9 pieces of tender catfish" },
      { name: "Fish Sandwich", price: "$11.75", desc: "Classic fried fish sandwich" },
      { name: "Fish, Fries & Hush Puppies", price: "$15.99", desc: "Fish special with 3 hush puppies" },
    ],
  },
  {
    id: "shrimp",
    label: "Shrimp",
    items: [
      { name: "Shrimp", price: "$15.50", desc: "Perfectly seasoned fried shrimp" },
      { name: "Jumbo Shrimp", price: "$24.50", desc: "Large gulf shrimp, golden crispy" },
      { name: "10 Jumbo Shrimp Special", price: "$29.75", desc: "With fries & hush puppies" },
      { name: "Fish & 8 Shrimp Special", price: "$24.75", desc: "Best of both with 3 hush puppies" },
    ],
  },
  {
    id: "chicken",
    label: "Chicken",
    items: [
      { name: "Chicken Tenders", desc: "Hand-breaded with Chicago seasoning" },
      { name: "Chicken Gizzards & Livers", desc: "A Chicago soul food classic" },
    ],
  },
  {
    id: "combos",
    label: "Combos",
    items: [
      { name: "Wings, Shrimp & Fries", price: "$21.98", desc: "The best of everything" },
      { name: "Fish, Shrimp & Fries", price: "$19.48", desc: "Seafood lover's combo" },
    ],
  },
  {
    id: "sides",
    label: "Sides",
    items: [
      { name: "Fries", desc: "Crispy golden fries" },
      { name: "Fried Okra", desc: "Southern-style fried okra" },
      { name: "Hush Puppies", desc: "Homemade cornmeal fritters" },
      { name: "Mac and Cheese", desc: "Creamy baked mac & cheese" },
      { name: "Pizza Puffs", desc: "Chicago hometown favorite" },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      { name: "Red Velvet Cake", desc: "Homemade, Ms. Kay's recipe" },
      { name: "Pound Cake", desc: "Homemade, dense & buttery" },
      { name: "Key Lime Cake", desc: "Tangy citrus with cream frosting" },
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
          className="menu-tabs flex gap-2 overflow-x-auto pb-4 mb-8 -mx-6 px-6 justify-center flex-wrap"
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
              className="whitespace-nowrap px-5 py-2.5 rounded-full text-sm transition-all duration-200"
              style={{
                fontFamily: "var(--font-heading)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 600,
                minHeight: "44px",
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
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {currentCategory.items.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between p-5 rounded-lg transition-all duration-200 hover:border-[#CC0000]/30"
              style={{
                background: "var(--surface)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex-1 min-w-0">
                <h3
                  className="text-base font-semibold text-white mb-1"
                  style={{ fontFamily: "var(--font-body)", textTransform: "none", letterSpacing: "0" }}
                >
                  {item.name}
                </h3>
                {item.desc && (
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
                )}
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
          <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
            Order Online
          </a>
        </div>
      </div>
    </section>
  );
}
