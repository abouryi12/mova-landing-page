"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import DownloadAppButton from "./DownloadAppButton";

const navLinks = [
 { href: "/", label: "الرئيسية" },
 { href: "/#how-it-works", label: "كيف تعمل MOVA" },
 { href: "/passengers", label: "للركاب" },
 { href: "/drivers", label: "للسائقين" },
 { href: "/#safety", label: "الأمان والثقة" },
 { href: "/#faq", label: "الأسئلة الشائعة" },
];

export default function Navbar() {
 const [isOpen, setIsOpen] = useState(false);
 const [scrolled, setScrolled] = useState(false);

 useEffect(() => {
 const handleScroll = () => setScrolled(window.scrollY > 20);
 window.addEventListener("scroll", handleScroll, { passive: true });
 return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 // Close mobile menu on resize
 useEffect(() => {
 const handleResize = () => {
 if (window.innerWidth >= 1024) setIsOpen(false);
 };
 window.addEventListener("resize", handleResize);
 return () => window.removeEventListener("resize", handleResize);
 }, []);

 // Prevent body scroll when menu open
 useEffect(() => {
 document.body.style.overflow = isOpen ? "hidden" : "";
 return () => { document.body.style.overflow = ""; };
 }, [isOpen]);

 return (
 <>
 <header
 className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-card border-b border-surface-dark"
 >
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex items-center justify-between h-16 lg:h-20">
 {/* Logo */}
 <Link href="/" className="flex items-center gap-2.5 flex-shrink-0" aria-label="MOVA الرئيسية">
 <Image
 src="/mova_logo_full.svg"
 alt="MOVA"
 width={120}
 height={40}
 className="h-8 lg:h-9 w-auto"
 />
 </Link>

 {/* Desktop Nav */}
 <nav className="hidden lg:flex items-center gap-1" aria-label="التنقل الرئيسي">
 {navLinks.map((link) => (
 <Link
 key={link.href}
 href={link.href}
 className="px-3.5 py-2 text-base md:text-lg font-bold text-ink-700 rounded-lg hover:text-teal-700 hover:bg-teal-50 transition-colors duration-200"
 >
 {link.label}
 </Link>
 ))}
 </nav>

 {/* Desktop CTA */}
 <div className="hidden lg:flex items-center gap-6 xl:gap-8">
 <Link
 href="/contact"
 className="text-base md:text-lg font-bold text-ink-700 hover:text-teal-700 transition-colors"
 >
 تواصل معنا
 </Link>
 <DownloadAppButton className="hidden lg:flex" />
 </div>

 {/* Mobile hamburger */}
 <button
 id="mobile-menu-toggle"
 aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
 aria-expanded={isOpen}
 onClick={() => setIsOpen(!isOpen)}
 className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-teal-50 transition-colors"
 >
 <span
 className={`block w-6 h-0.5 bg-teal-800 transition-all duration-300 ${
 isOpen ? "rotate-45 translate-y-2" : ""
 }`}
 />
 <span
 className={`block w-6 h-0.5 bg-teal-800 transition-all duration-300 ${
 isOpen ? "opacity-0" : ""
 }`}
 />
 <span
 className={`block w-6 h-0.5 bg-teal-800 transition-all duration-300 ${
 isOpen ? "-rotate-45 -translate-y-2" : ""
 }`}
 />
 </button>
 </div>
 </div>
 </header>

 {/* Mobile overlay */}
 <div
 className={`nav-overlay ${isOpen ? "open" : ""}`}
 onClick={() => setIsOpen(false)}
 aria-hidden="true"
 />

 {/* Mobile drawer */}
 <div
 className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
 isOpen ? "translate-x-0" : "translate-x-full"
 }`}
 role="dialog"
 aria-modal="true"
 aria-label="قائمة التنقل"
 >
 <div className="flex flex-col h-full">
 {/* Drawer header */}
 <div className="flex items-center justify-between p-5 border-b border-surface-dark">
 <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
 <Image
 src="/mova_logo_full.svg"
 alt="MOVA"
 width={100}
 height={32}
 className="h-8 w-auto"
 />
 </Link>
 <button
 onClick={() => setIsOpen(false)}
 aria-label="إغلاق القائمة"
 className="p-2 rounded-lg hover:bg-surface-dark transition-colors"
 >
 <svg className="w-5 h-5 text-ink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
 </svg>
 </button>
 </div>

 {/* Drawer links */}
 <nav className="flex-1 overflow-y-auto py-4 px-4" aria-label="قائمة التنقل المحمول">
 {navLinks.map((link) => (
 <Link
 key={link.href}
 href={link.href}
 onClick={() => setIsOpen(false)}
 className="flex items-center gap-3 px-4 py-3.5 text-base font-semibold text-ink-800 rounded-xl hover:bg-teal-50 hover:text-teal-700 transition-colors mb-1"
 >
 {link.label}
 </Link>
 ))}
 </nav>

 {/* Drawer CTA */}
 <div className="p-5 border-t border-surface-dark space-y-3">
 <div onClick={() => setIsOpen(false)} className="w-full">
 <DownloadAppButton className="w-full" />
 </div>
 <Link
 href="/contact"
 onClick={() => setIsOpen(false)}
 className="block w-full py-3 border border-teal-700 text-teal-700 text-center font-semibold rounded-xl hover:bg-teal-50 transition-colors"
 >
 تواصل معنا
 </Link>
 </div>
 </div>
 </div>
 </>
 );
}
