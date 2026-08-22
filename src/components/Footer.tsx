import Link from "next/link";
import Image from "next/image";

const footerLinks = {
 platform: [
 { href: "/", label: "الرئيسية" },
 { href: "/#how-it-works", label: "كيف تعمل MOVA" },
 { href: "/passengers", label: "للركاب" },
 { href: "/drivers", label: "للسائقين" },
 ],
 company: [
 { href: "/about", label: "عن MOVA" },
 { href: "/#safety", label: "الأمان والثقة" },
 { href: "/#faq", label: "الأسئلة الشائعة" },
 { href: "/contact", label: "تواصل معنا" },
 ],
 legal: [
 { href: "/privacy", label: "سياسة الخصوصية" },
 { href: "/terms", label: "الشروط والأحكام" },
 ],
};

export default function Footer() {
 return (
 <footer className="bg-teal-900 text-white" role="contentinfo">
 {/* Main footer content */}
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
 {/* Brand column */}
 <div className="lg:col-span-1">
 <Link href="/" className="flex items-center gap-2.5 mb-5" aria-label="MOVA">
 <Image
 src="/mova_logo_full.svg"
 alt="MOVA"
 width={120}
 height={40}
 className="h-9 w-auto brightness-0 invert"
 />
 </Link>
 <p className="text-teal-100/80 text-sm leading-relaxed font-cairo max-w-xs">
 MOVA هي منصة تقنية مصممة لتبسيط التنقل وربط الركاب بالسائقين
 </p>
 <p className="text-teal-100/60 text-xs mt-4 font-cairo">
 MOVA is a technology platform designed to simplify transportation and connect passengers with drivers.
 </p>
 </div>

 {/* Platform links */}
 <div>
 <h3 className="font-almarai font-bold text-white mb-5 text-sm tracking-wider uppercase opacity-80">
 المنصة
 </h3>
 <ul className="space-y-3">
 {footerLinks.platform.map((link) => (
 <li key={link.href}>
 <Link
 href={link.href}
 className="text-teal-100/70 hover:text-white text-sm transition-colors duration-200 font-cairo"
 >
 {link.label}
 </Link>
 </li>
 ))}
 </ul>
 </div>

 {/* Company links */}
 <div>
 <h3 className="font-almarai font-bold text-white mb-5 text-sm tracking-wider uppercase opacity-80">
 الشركة
 </h3>
 <ul className="space-y-3">
 {footerLinks.company.map((link) => (
 <li key={link.href}>
 <Link
 href={link.href}
 className="text-teal-100/70 hover:text-white text-sm transition-colors duration-200 font-cairo"
 >
 {link.label}
 </Link>
 </li>
 ))}
 </ul>
 </div>

 {/* Legal + App CTA */}
 <div>
 <h3 className="font-almarai font-bold text-white mb-5 text-sm tracking-wider uppercase opacity-80">
 القانونية
 </h3>
 <ul className="space-y-3 mb-8">
 {footerLinks.legal.map((link) => (
 <li key={link.href}>
 <Link
 href={link.href}
 className="text-teal-100/70 hover:text-white text-sm transition-colors duration-200 font-cairo"
 >
 {link.label}
 </Link>
 </li>
 ))}
 </ul>
 </div>
 </div>
 </div>

 {/* Bottom bar */}
 <div className="border-t border-teal-800">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
 <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
 <p className="text-teal-100/50 text-xs font-cairo text-center sm:text-right">
 © 2026 MOVA. جميع الحقوق محفوظة All rights reserved.
 </p>
 <div className="flex items-center gap-4">
 <Link href="/privacy" className="text-teal-100/50 hover:text-teal-100 text-xs transition-colors font-cairo">
 الخصوصية
 </Link>
 <span className="text-teal-800">•</span>
 <Link href="/terms" className="text-teal-100/50 hover:text-teal-100 text-xs transition-colors font-cairo">
 الشروط
 </Link>
 <span className="text-teal-800">•</span>
 <Link href="/contact" className="text-teal-100/50 hover:text-teal-100 text-xs transition-colors font-cairo">
 تواصل معنا
 </Link>
 </div>
 </div>
 </div>
 </div>
 </footer>
 );
}
