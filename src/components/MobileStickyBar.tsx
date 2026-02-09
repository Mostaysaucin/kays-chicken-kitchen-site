"use client";

import { useState } from "react";

const ORDER_CAUSEWAY = "https://kayschickenkitchen.smartonlineorder.com";
const ORDER_BEARSS = "https://online.skytab.com/04019c96e9c8c93ddbfcc825a37f240a";

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
            className="btn-gold flex-1 text-center !py-3 !text-xs !px-2"
          >
            Causeway Blvd
          </a>
          <a
            href={ORDER_BEARSS}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold flex-1 text-center !py-3 !text-xs !px-2"
          >
            Bearss Ave
          </a>
          <button
            onClick={() => setExpanded(false)}
            className="text-white/60 px-2 text-lg"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      ) : (
        <button
          onClick={() => setExpanded(true)}
          className="btn-gold w-full text-center !py-3"
        >
          Order Online Now
        </button>
      )}
    </div>
  );
}
