"use client";

import { useEffect, useRef } from "react";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** If true, stagger direct children with .reveal-child */
  staggerChildren?: boolean;
}

/**
 * Wraps children in a reveal container that animates in when
 * scrolled into view via IntersectionObserver.
 */
export function SectionReveal({
  children,
  className = "",
  delay = 0,
  staggerChildren = false,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Add stagger class to children if requested
    if (staggerChildren) {
      Array.from(el.children).forEach((child) => {
        child.classList.add("reveal", "reveal-child");
      });
    } else {
      el.classList.add("reveal");
    }

    if (delay) {
      el.style.transitionDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (staggerChildren) {
              Array.from(el.children).forEach((child) => {
                child.classList.add("visible");
              });
            } else {
              el.classList.add("visible");
            }
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, staggerChildren]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
