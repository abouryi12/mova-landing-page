"use client";

import { useEffect, useRef } from "react";

export default function ScrollAnimator({ children }: { children: React.ReactNode }) {
 const containerRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
 const observer = new IntersectionObserver(
 (entries) => {
 entries.forEach((entry) => {
 if (entry.isIntersecting) {
 entry.target.classList.add("visible");
 }
 });
 },
 { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
 );

 const container = containerRef.current;
 if (!container) return;

 const elements = container.querySelectorAll(
 ".animate-on-scroll, .animate-on-scroll-left"
 );
 elements.forEach((el) => observer.observe(el));

 return () => observer.disconnect();
 }, []);

 return <div ref={containerRef}>{children}</div>;
}
