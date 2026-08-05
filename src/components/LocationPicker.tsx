"use client";

import { useEffect, useRef, useState } from "react";
import { useLocation } from "@/lib/location-context";
import { LOCATIONS } from "@/lib/constants";
import type { LocationId } from "@/lib/constants";

export default function LocationPicker() {
  const { showPicker, setLocation, dismissPicker } = useLocation();
  const dialogRef = useRef<HTMLDivElement>(null);
  const [showNewcomer, setShowNewcomer] = useState(false);

  useEffect(() => {
    if (!showPicker) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (showNewcomer) {
          setShowNewcomer(false);
        } else {
          dismissPicker();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [showPicker, showNewcomer, dismissPicker]);

  useEffect(() => {
    if (!showPicker || !dialogRef.current) return;
    const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
      'button, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length > 0) focusable[0].focus();
  }, [showPicker]);

  if (!showPicker) return null;

  const locationCards: { id: LocationId; icon: string; hoursLine: string }[] = [
    { id: "causeway", icon: "📍", hoursLine: "Tue-Thu 11am-8:30pm | Fri-Sat 11am-3am | Card Only" },
    { id: "bearss", icon: "🏠", hoursLine: "Tue-Thu 11am-12am | Fri-Sat 11am-4am | Sun 12pm-12am" },
  ];

  // Newcomer info screen
  if (showNewcomer) {
    return (
      <div
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 picker-backdrop"
        style={{ background: "rgba(0,0,0,0.82)" }}
        role="dialog"
        aria-modal="true"
        aria-label="First time at Kay's Kitchen"
      >
        <div
          ref={dialogRef}
          className="w-full max-w-md rounded-2xl overflow-hidden picker-modal"
          style={{ background: "var(--accent)" }}
        >
          <div className="p-6 sm:p-8 picker-content">
            <h2
              className="text-2xl sm:text-3xl mb-2 text-center"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--secondary)" }}
            >
              Welcome to Kay&apos;s Kitchen!
            </h2>
            <p className="text-sm mb-5 text-center" style={{ color: "var(--text-secondary)" }}>
              A few things to know before your first visit
            </p>

            <div className="space-y-4">
              {/* Kiosk ordering */}
              <div
                className="p-4 rounded-xl"
                style={{ background: "var(--surface)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl shrink-0" aria-hidden="true">🖥️</span>
                  <div>
                    <p className="text-sm font-bold mb-1" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                      Kiosk Ordering Only
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      We do not have a cashier. Place your order using the kiosks inside so our staff can
                      focus on putting love into every meal. For faster service, order online before you arrive.
                    </p>
                  </div>
                </div>
              </div>

              {/* Seasoning */}
              <div
                className="p-4 rounded-xl"
                style={{ background: "var(--surface)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl shrink-0" aria-hidden="true">🌶️</span>
                  <div>
                    <p className="text-sm font-bold mb-1" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                      Signature Seasoning
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      Every meal comes with Kay&apos;s signature white seasoning (regular) and Chicago mild
                      sauce on the side. Choose your level when ordering: Lite, Regular, Extra, or White Out.
                      No ketchup served.
                    </p>
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div
                className="p-4 rounded-xl"
                style={{ background: "var(--surface)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl shrink-0" aria-hidden="true">💳</span>
                  <div>
                    <p className="text-sm font-bold mb-1" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                      Payment Info
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      <strong style={{ color: "var(--text-primary)" }}>Causeway Blvd:</strong> Card only, no cash accepted at any time.<br />
                      <strong style={{ color: "var(--text-primary)" }}>Bearss Ave:</strong> Cash accepted before 5 PM. Card only after 5 PM.<br />
                      All sales are final. No refunds or exchanges once payment is completed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Wait time */}
              <div
                className="p-4 rounded-xl"
                style={{ background: "var(--surface)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl shrink-0" aria-hidden="true">⏱️</span>
                  <div>
                    <p className="text-sm font-bold mb-1" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                      Fresh to Order
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      Everything is cooked fresh. Wait times are typically 15 to 25 minutes.
                      We&apos;ll call your name when your food is ready.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowNewcomer(false)}
              className="w-full mt-5 py-3 rounded-lg text-sm font-bold transition-colors"
              style={{
                fontFamily: "var(--font-heading)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                background: "var(--secondary)",
                color: "var(--text-on-secondary)",
              }}
            >
              Got It, Choose My Location
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Main location picker
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 picker-backdrop"
      style={{ background: "rgba(0,0,0,0.82)" }}
      role="dialog"
      aria-modal="true"
      aria-label="Choose your location"
    >
      <div
        ref={dialogRef}
        className="w-full max-w-md rounded-2xl overflow-hidden picker-modal"
        style={{ background: "var(--accent)" }}
      >
        <div className="p-6 sm:p-8 text-center picker-content">
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
                  className="location-card-btn w-full text-left p-4 rounded-xl"
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
                      <p className="text-[11px] mt-1 leading-snug" style={{ color: "var(--text-secondary)" }}>
                        {card.hoursLine}
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

          {/* First time? */}
          <button
            onClick={() => setShowNewcomer(true)}
            className="picker-link-btn mt-4 text-sm block mx-auto"
            style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "0.08em" }}
          >
            First time? Read this first
          </button>

          {/* Bookmark tip */}
          <div
            className="mt-4 py-2.5 px-4 rounded-lg"
            style={{ background: "rgba(255,255,0,0.06)", border: "1px solid rgba(255,255,0,0.15)" }}
          >
            <p className="text-[11px]" style={{ color: "var(--secondary)", fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Bookmark this page for faster service. Online orders skip the wait.
            </p>
          </div>

          <button
            onClick={dismissPicker}
            className="picker-dismiss-btn mt-3 text-xs"
          >
            I&apos;ll decide later
          </button>
        </div>
      </div>
    </div>
  );
}
