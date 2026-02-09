"use client";

import { useState, useEffect } from "react";

const ORDER_URL = "https://kayschickenkitchen.smartonlineorder.com";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        <a href="#" className="flex items-center gap-2" aria-label="Kay's Chicken Kitchen home">
          <span
            className="text-xl md:text-2xl font-bold tracking-wider"
            style={{ fontFamily: "var(--font-heading)", color: "var(--gold)" }}
          >
            KAY&apos;S
          </span>
          <span
            className="text-xs md:text-sm tracking-widest text-white/80 hidden sm:block"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            CHICKEN KITCHEN
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

        {/* Desktop Order Button */}
        <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="btn-gold hidden md:inline-flex !py-2 !px-6 !text-sm">
          Order Online
        </a>

        {/* Mobile: hamburger only — Order is in the sticky bottom bar */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
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
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-4 text-center"
              onClick={() => setMenuOpen(false)}
            >
              Order Online
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
