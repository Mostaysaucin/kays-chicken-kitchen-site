"use client";

import { useEffect, useRef } from "react";
import { useLocation } from "@/lib/location-context";
import { LOCATIONS } from "@/lib/constants";
import type { LocationId } from "@/lib/constants";

export default function LocationPicker() {
  const { showPicker, setLocation, dismissPicker } = useLocation();
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showPicker) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismissPicker();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [showPicker, dismissPicker]);

  // Focus trap
  useEffect(() => {
    if (!showPicker || !dialogRef.current) return;
    const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
      'button, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length > 0) focusable[0].focus();
  }, [showPicker]);

  if (!showPicker) return null;

  const locationCards: { id: LocationId; icon: string; tagline: string }[] = [
    { id: "causeway", icon: "📍", tagline: "Card only • Tue-Sat 11am-8:30pm" },
    { id: "bearss", icon: "🏠", tagline: "Full menu • Open late nights" },
  ];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}
      role="dialog"
      aria-modal="true"
      aria-label="Choose your location"
    >
      <div
        ref={dialogRef}
        className="w-full max-w-md rounded-2xl overflow-hidden animate-fade-in-up"
        style={{ background: "var(--accent)" }}
      >
        <div className="p-6 sm:p-8 text-center">
          <h2
            className="text-2xl sm:text-3xl mb-2"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--secondary)" }}
          >
            Choose Your Location
          </h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
            We&apos;ll show you the right menu &amp; order link
          </p>

          <div className="space-y-3">
            {locationCards.map((card) => {
              const loc = LOCATIONS[card.id];
              return (
                <button
                  key={card.id}
                  onClick={() => setLocation(card.id)}
                  className="w-full text-left p-4 rounded-xl transition-all duration-200"
                  style={{
                    background: "var(--surface)",
                    border: "2px solid rgba(255,255,255,0.08)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--primary)";
                    e.currentTarget.style.background = "rgba(221,40,3,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.background = "var(--surface)";
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl" aria-hidden="true">{card.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span
                          className="text-base font-bold"
                          style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
                        >
                          {loc.name}
                        </span>
                        <span
                          className="text-[10px] px-2 py-0.5 rounded-full"
                          style={{ background: "var(--primary)", color: "var(--text-on-primary)", fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "0.05em" }}
                        >
                          {loc.type}
                        </span>
                      </div>
                      <p className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>
                        {card.tagline}
                      </p>
                    </div>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                </button>
              );
            })}
          </div>

          <button
            onClick={dismissPicker}
            className="mt-4 text-sm transition-colors"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "0.08em" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            I&apos;ll decide later
          </button>
        </div>
      </div>
    </div>
  );
}
