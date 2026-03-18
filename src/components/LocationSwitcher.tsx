"use client";

import { useLocation } from "@/lib/location-context";
import { LOCATIONS } from "@/lib/constants";

export default function LocationSwitcher() {
  const { selectedLocation, setLocation, hydrated } = useLocation();

  if (!hydrated || !selectedLocation) return null;

  const current = LOCATIONS[selectedLocation];
  const otherId = selectedLocation === "causeway" ? "bearss" as const : "causeway" as const;

  return (
    <button
      onClick={() => setLocation(otherId)}
      className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs transition-all duration-200"
      style={{
        fontFamily: "var(--font-heading)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        background: "rgba(255,255,0,0.1)",
        border: "1px solid rgba(255,255,0,0.25)",
        color: "var(--secondary)",
      }}
      aria-label={`Currently ordering from ${current.name}. Click to switch location.`}
    >
      <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
      {current.name}
      <svg aria-hidden="true" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <polyline points="7 10 12 15 17 10" />
      </svg>
    </button>
  );
}
