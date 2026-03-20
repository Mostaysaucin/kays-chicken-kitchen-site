"use client";

import { useState } from "react";
import { LOCATIONS } from "@/lib/constants";
import { useLocation } from "@/lib/location-context";
import { menuByLocation, defaultMenu } from "@/lib/menu-data";
import type { MenuCategory, MenuItem } from "@/lib/menu-data";
import ScrollReveal from "./ScrollReveal";

// ---------------------------------------------------------------------------
// MenuItemCard — handles single-price, multi-size, and sold-out items
// ---------------------------------------------------------------------------
function MenuItemCard({ item }: { item: MenuItem }) {
  const hasSizes = item.sizes && item.sizes.length > 0;
  const lowestPrice = hasSizes ? item.sizes![0].price : null;

  return (
    <div
      className="flex gap-4 p-4 rounded-xl menu-item-card"
      style={{
        background: "var(--surface)",
        border: "1px solid rgba(255,255,255,0.08)",
        opacity: item.note === "Sold Out" ? 0.6 : 1,
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
        {/* Name row + price/badge */}
        <div className="flex items-start justify-between gap-3">
          <h3
            className="text-base font-semibold"
            style={{
              fontFamily: "var(--font-body)",
              textTransform: "none",
              letterSpacing: "0",
              color: "var(--text-primary)",
            }}
          >
            {item.name}
          </h3>

          <div className="shrink-0 flex flex-col items-end gap-1">
            {item.note === "Sold Out" ? (
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  color: "var(--text-secondary)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Sold Out
              </span>
            ) : hasSizes ? (
              <span
                className="text-base font-bold"
                style={{ color: "var(--secondary)", fontFamily: "var(--font-heading)" }}
              >
                from {lowestPrice}
              </span>
            ) : item.price ? (
              <span
                className="text-lg font-bold"
                style={{ color: "var(--secondary)", fontFamily: "var(--font-heading)" }}
              >
                {item.price}
              </span>
            ) : null}
          </div>
        </div>

        {/* Desc */}
        {item.desc && (
          <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
            {item.desc}
          </p>
        )}

        {/* Size list */}
        {hasSizes && item.note !== "Sold Out" && (
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
            {item.sizes!.map((s) => (
              <li
                key={s.size}
                className="text-xs"
                style={{ color: "var(--text-secondary)" }}
              >
                <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                  {s.size}
                </span>
                {" — "}
                <span style={{ color: "var(--secondary)", fontWeight: 600 }}>
                  {s.price}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Menu section
// ---------------------------------------------------------------------------
export default function Menu() {
  const { selectedLocation, hydrated } = useLocation();

  const menuData: MenuCategory[] =
    hydrated && selectedLocation ? menuByLocation[selectedLocation] : defaultMenu;

  const loc = selectedLocation ? LOCATIONS[selectedLocation] : null;

  const [activeCategory, setActiveCategory] = useState<string>(menuData[0]?.id ?? "");

  // If the active category id doesn't exist in the current menu (e.g. after
  // location switch), fall back to the first category.
  const currentCategory =
    menuData.find((c) => c.id === activeCategory) ?? menuData[0];

  return (
    <section
      id="menu"
      className="section-padding"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
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
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                color: "var(--text-primary)",
              }}
            >
              Chicago Flavor,{" "}
              <span style={{ color: "var(--secondary)" }}>Tampa Style</span>
            </h2>
            <p
              className="text-base max-w-xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              Every item made fresh to order with our signature Chicago seasonings. Served
              with the one and only authentic Chicago Style Mild Sauce.
            </p>
          </div>
        </ScrollReveal>

        {/* Location-specific menu note */}
        {hydrated && selectedLocation && (
          <div
            className="text-center mb-6 py-3 px-5 rounded-lg mx-auto max-w-md"
            style={{
              background: "var(--surface)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
              Showing menu for{" "}
              <strong style={{ color: "var(--secondary)" }}>{loc?.name}</strong>. Menu
              may vary by location.
            </p>
          </div>
        )}

        {/* Sauce Callout */}
        <div
          className="text-center mb-8 py-4 px-6 rounded-lg mx-auto max-w-2xl"
          style={{
            background: "var(--surface)",
            border: "1px solid rgba(221,40,3,0.3)",
          }}
        >
          <p
            className="text-sm"
            style={{
              color: "var(--secondary)",
              fontFamily: "var(--font-heading)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            All meals come with Kay&apos;s Signature Chicago Mild Sauce. No ketchup
            served.
          </p>
          <p className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>
            Seasoning options: Lite &middot; Regular &middot; Extra &middot; Sauces &amp;
            add-ons available — ask in-store or when ordering online
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className="menu-tabs flex gap-2 overflow-x-auto pb-4 mb-8 -mx-6 px-6 flex-wrap justify-center"
          role="tablist"
          aria-label="Menu categories"
        >
          {menuData.map((category) => (
            <button
              key={category.id}
              id={`tab-${category.id}`}
              role="tab"
              aria-selected={activeCategory === category.id}
              aria-controls={`panel-${currentCategory.id}`}
              onClick={() => setActiveCategory(category.id)}
              className="whitespace-nowrap px-5 py-2.5 rounded-full text-sm transition-all duration-200"
              style={{
                fontFamily: "var(--font-heading)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 600,
                minHeight: "44px",
                background:
                  activeCategory === category.id
                    ? "var(--primary)"
                    : "var(--surface)",
                color:
                  activeCategory === category.id
                    ? "var(--text-on-primary)"
                    : "var(--text-secondary)",
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
            <MenuItemCard key={item.name} item={item} />
          ))}
        </div>

        {/* Order CTAs — location-aware */}
        <div className="text-center mt-12">
          <p
            className="text-sm mb-4"
            style={{
              color: "var(--text-secondary)",
              fontFamily: "var(--font-heading)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            {hydrated && loc
              ? `Order from ${loc.name}`
              : "Order from your nearest location"}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {hydrated && loc ? (
              <a
                href={loc.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Order Online &mdash; {loc.name}
              </a>
            ) : (
              <>
                <a
                  href={LOCATIONS.causeway.orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Order &mdash; Causeway Blvd
                </a>
                <a
                  href={LOCATIONS.bearss.orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Order &mdash; Bearss Ave
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
