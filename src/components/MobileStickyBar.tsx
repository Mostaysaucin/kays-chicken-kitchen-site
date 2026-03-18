"use client";

import { useState } from "react";
import { LOCATIONS } from "@/lib/constants";
import { useLocation } from "@/lib/location-context";

export default function MobileStickyBar() {
  const [expanded, setExpanded] = useState(false);
  const { selectedLocation, hydrated } = useLocation();

  const loc = selectedLocation ? LOCATIONS[selectedLocation] : null;

  // If location is selected, show single direct button
  if (hydrated && loc) {
    return (
      <div className="mobile-sticky-bar" aria-label="Mobile order bar">
        <a
          href={loc.orderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full text-center !py-3"
        >
          Order Online &mdash; {loc.name}
        </a>
      </div>
    );
  }

  return (
    <div className="mobile-sticky-bar" aria-label="Mobile order bar">
      {expanded ? (
        <div className="flex gap-2 w-full">
          <a
            href={LOCATIONS.causeway.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-1 text-center !py-3 !text-xs !px-2"
          >
            Causeway Blvd
          </a>
          <a
            href={LOCATIONS.bearss.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-1 text-center !py-3 !text-xs !px-2"
          >
            Bearss Ave
          </a>
          <button
            onClick={() => setExpanded(false)}
            className="px-2 text-lg"
            style={{ color: "var(--text-secondary)" }}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      ) : (
        <button
          onClick={() => setExpanded(true)}
          className="btn-primary w-full text-center !py-3"
        >
          Order Online Now
        </button>
      )}
    </div>
  );
}
