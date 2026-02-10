"use client";

import { useState } from "react";
import { ORDER_CAUSEWAY, ORDER_BEARSS } from "@/lib/constants";

export default function MobileStickyBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mobile-sticky-bar" aria-label="Mobile order bar">
      {expanded ? (
        <div className="flex gap-2 w-full">
          <a
            href={ORDER_CAUSEWAY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-1 text-center !py-3 !text-xs !px-2"
          >
            Causeway Blvd
          </a>
          <a
            href={ORDER_BEARSS}
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
