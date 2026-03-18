"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: 0 | 1 | 2 | 3;
  className?: string;
}

export default function ScrollReveal({ children, delay = 0, className = "" }: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal();

  const delayClass = delay > 0 ? ` scroll-reveal-delay-${delay}` : "";

  return (
    <div
      ref={ref}
      className={`scroll-reveal${isVisible ? " is-visible" : ""}${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
