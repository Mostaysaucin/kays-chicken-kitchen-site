"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ORDER_CAUSEWAY, ORDER_BEARSS } from "@/lib/constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const orderRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (orderRef.current && !orderRef.current.contains(e.target as Node)) {
        setOrderOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Global Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (orderOpen) setOrderOpen(false);
        if (menuOpen) {
          setMenuOpen(false);
          hamburgerRef.current?.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [orderOpen, menuOpen]);

  // Focus trap for mobile menu
  const handleMenuKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== "Tab" || !mobileMenuRef.current) return;
    const focusable = mobileMenuRef.current.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }, []);

  const navLinks = [
    { label: "Our Story", href: "#story" },
    { label: "Menu", href: "#menu" },
    { label: "Reviews", href: "#reviews" },
    { label: "Locations", href: "#locations" },
    { label: "Catering", href: "#catering" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      style={{
        background: scrolled ? "rgba(15,15,15,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none shrink-0" aria-label="Kay's Chicken Kitchen home">
          <span
            className="text-xl sm:text-2xl md:text-3xl font-bold"
            style={{ fontFamily: "var(--font-heading)", color: "var(--secondary)", letterSpacing: "0.04em" }}
          >
            KAY&apos;S CHICKEN KITCHEN
          </span>
          <span
            className="text-[9px] sm:text-[10px] md:text-xs tracking-[0.25em] uppercase mt-0.5"
            style={{ fontFamily: "var(--font-heading)", color: "var(--text-secondary)" }}
          >
            Chicago Style &bull; Tampa, FL
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wider transition-colors"
              style={{
                fontFamily: "var(--font-heading)",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--secondary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Order Button with Dropdown */}
        <div className="hidden md:block relative" ref={orderRef}>
          <button
            onClick={() => setOrderOpen(!orderOpen)}
            className="btn-primary !py-2.5 !px-6 !text-sm flex items-center gap-2"
          >
            Order Online
            <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          {orderOpen && (
            <div
              className="absolute right-0 top-full mt-2 w-56 rounded-lg overflow-hidden shadow-2xl"
              style={{ background: "var(--accent)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <a
                href={ORDER_CAUSEWAY}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3.5 text-sm transition-colors"
                style={{
                  fontFamily: "var(--font-heading)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "var(--text-primary)",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
                onClick={() => setOrderOpen(false)}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: "var(--secondary)" }} />
                Causeway Blvd
              </a>
              <a
                href={ORDER_BEARSS}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3.5 text-sm transition-colors"
                style={{
                  fontFamily: "var(--font-heading)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "var(--text-primary)",
                }}
                onClick={() => setOrderOpen(false)}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: "var(--primary)" }} />
                Bearss Ave
              </a>
            </div>
          )}
        </div>

        {/* Mobile: hamburger only */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            ref={hamburgerRef}
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} style={{ background: "var(--text-primary)" }} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} style={{ background: "var(--text-primary)" }} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} style={{ background: "var(--text-primary)" }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div ref={mobileMenuRef} onKeyDown={handleMenuKeyDown} className="md:hidden border-t" style={{ background: "rgba(15,15,15,0.98)", backdropFilter: "blur(12px)", borderColor: "rgba(255,255,255,0.1)" }}>
          <nav className="flex flex-col py-4 px-6" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-lg tracking-wider transition-colors border-b"
                style={{
                  fontFamily: "var(--font-heading)",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.9)",
                  borderColor: "rgba(255,255,255,0.05)",
                }}
              >
                {link.label}
              </a>
            ))}
            <p className="text-xs mt-4 mb-2 uppercase tracking-widest" style={{ fontFamily: "var(--font-heading)", color: "var(--text-secondary)" }}>
              Order Online
            </p>
            <a
              href={ORDER_CAUSEWAY}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 text-base tracking-wider transition-colors border-b flex items-center gap-3"
              style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase", color: "var(--secondary)", borderColor: "rgba(255,255,255,0.05)" }}
              onClick={() => setMenuOpen(false)}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: "var(--secondary)" }} />
              Causeway Blvd
            </a>
            <a
              href={ORDER_BEARSS}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 text-base tracking-wider transition-colors flex items-center gap-3"
              style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase", color: "var(--secondary)" }}
              onClick={() => setMenuOpen(false)}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: "var(--primary)" }} />
              Bearss Ave
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
