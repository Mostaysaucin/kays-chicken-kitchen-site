"use client";

import { useState, useEffect, useRef } from "react";

const ORDER_CAUSEWAY = "https://kayschickenkitchen.smartonlineorder.com";
const ORDER_BEARSS = "https://online.skytab.com/04019c96e9c8c93ddbfcc825a37f240a";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const orderRef = useRef<HTMLDivElement>(null);

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

  const navLinks = [
    { label: "Our Story", href: "#story" },
    { label: "Menu", href: "#menu" },
    { label: "Reviews", href: "#reviews" },
    { label: "Locations", href: "#locations" },
    { label: "Catering", href: "#catering" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0F0F0F]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-baseline gap-1.5 shrink-0" aria-label="Kay's Chicken Kitchen home">
          <span
            className="text-2xl md:text-3xl font-bold"
            style={{ fontFamily: "var(--font-heading)", color: "var(--gold)", letterSpacing: "0.02em" }}
          >
            KAY&apos;S
          </span>
          <span
            className="text-[10px] md:text-xs tracking-[0.2em] text-white/70 uppercase"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Chicken Kitchen
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wider text-white/80 hover:text-[#FFD700] transition-colors"
              style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Order Button with Dropdown */}
        <div className="hidden md:block relative" ref={orderRef}>
          <button
            onClick={() => setOrderOpen(!orderOpen)}
            className="btn-gold !py-2.5 !px-6 !text-sm flex items-center gap-2"
          >
            Order Online
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          {orderOpen && (
            <div
              className="absolute right-0 top-full mt-2 w-56 rounded-lg overflow-hidden shadow-2xl"
              style={{ background: "var(--dark)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <a
                href={ORDER_CAUSEWAY}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3.5 text-sm text-white hover:bg-white/10 transition-colors border-b border-white/5"
                style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "0.05em" }}
                onClick={() => setOrderOpen(false)}
              >
                <span className="w-2 h-2 rounded-full bg-[#FFD700]" />
                Causeway Blvd
              </a>
              <a
                href={ORDER_BEARSS}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3.5 text-sm text-white hover:bg-white/10 transition-colors"
                style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase", letterSpacing: "0.05em" }}
                onClick={() => setOrderOpen(false)}
              >
                <span className="w-2 h-2 rounded-full bg-[#CC0000]" />
                Bearss Ave
              </a>
            </div>
          )}
        </div>

        {/* Mobile: hamburger only */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0F0F0F]/98 backdrop-blur-md border-t border-white/10">
          <nav className="flex flex-col py-4 px-6" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-lg tracking-wider text-white/90 hover:text-[#FFD700] transition-colors border-b border-white/5"
                style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase" }}
              >
                {link.label}
              </a>
            ))}
            <p className="text-xs text-white/40 mt-4 mb-2 uppercase tracking-widest" style={{ fontFamily: "var(--font-heading)" }}>
              Order Online
            </p>
            <a
              href={ORDER_CAUSEWAY}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 text-base tracking-wider text-[#FFD700] hover:text-white transition-colors border-b border-white/5 flex items-center gap-3"
              style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase" }}
              onClick={() => setMenuOpen(false)}
            >
              <span className="w-2 h-2 rounded-full bg-[#FFD700]" />
              Causeway Blvd
            </a>
            <a
              href={ORDER_BEARSS}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 text-base tracking-wider text-[#FFD700] hover:text-white transition-colors flex items-center gap-3"
              style={{ fontFamily: "var(--font-heading)", textTransform: "uppercase" }}
              onClick={() => setMenuOpen(false)}
            >
              <span className="w-2 h-2 rounded-full bg-[#CC0000]" />
              Bearss Ave
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
