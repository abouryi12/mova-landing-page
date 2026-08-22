import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import ScrollAnimator from "@/components/ScrollAnimator";
import DownloadAppButton from "@/components/DownloadAppButton";
import { IconMapPin, IconMap, IconUser, IconRadar, IconCard, IconStar, IconClipboard, IconBell, IconCar, IconClock, IconChart, IconCompass } from "@/components/Icons";

export const metadata: Metadata = {
 title: "MOVA — تنقّل بسهولة تحرّك بثقة",
 description:
 "من طلب الرحلة إلى الوصول، تساعدك MOVA على إدارة تجربة تنقلك من خلال تطبيق بسيط وواضح",
};

export default function HomePage() {
 return (
 <ScrollAnimator>
 <Navbar />
 <main>
 {/* ======================= HERO ======================= */}
 <section
 className="relative min-h-screen flex items-center overflow-hidden"
 aria-label="القسم الرئيسي"
 >
 {/* Background */}
 <div className="absolute inset-0 z-0 bg-[#0c2424]">
 <Image
 src="/hero-character.png"
 alt="MOVA Driver"
 fill
 priority
 className="object-contain object-left opacity-100 scale-95 origin-left translate-y-8 lg:translate-y-12"
 sizes="100vw"
 />
 {/* Overlay gradient to blend the text side (right) and reveal the image side (left) */}
 <div className="absolute inset-0 bg-gradient-to-l from-[#0c2424] via-[#0f3434]/80 to-transparent" />
 </div>

 {/* Content */}
 <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24 w-full">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
 {/* Text side */}
 <div>


 {/* Headline */}
 <h1 className="text-4xl sm:text-5xl lg:text-6xl font-almarai font-extrabold text-white leading-tight mb-6">
 تنقّل بسهولة
 <br />
 <span className="text-amber-400">تحرّك بثقة</span>
 </h1>

 {/* Supporting text */}
 <p className="text-lg text-white/80 font-cairo leading-relaxed mb-8 max-w-xl">
 من طلب الرحلة إلى الوصول، تساعدك MOVA على إدارة تجربة تنقلك من خلال تطبيق بسيط وواضح
 </p>

 {/* CTAs */}
 <div className="flex flex-wrap gap-4 mb-10">
 <DownloadAppButton variant="solid" text="حمّل التطبيق الآن" />
 </div>

 {/* Empty side to let the background character show through */}
 <div className="hidden lg:block"></div>
 </div>
 </div>
 </div>

 {/* Bottom scroll indicator */}
 <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
 <span className="text-white/40 text-xs font-cairo">اكتشف أكثر</span>
 <div className="w-0.5 h-10 bg-gradient-to-b from-white/40 to-transparent" />
 </div>
 </section>

 {/* ======================= HOW IT WORKS ======================= */}
 <section id="how-it-works" className="py-20 lg:py-28 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16 animate-on-scroll">
 <div className="inline-flex items-center justify-center bg-teal-50 px-6 py-2.5 md:px-8 md:py-3 rounded-full mb-5">
 <span className="text-teal-700 font-bold text-base md:text-lg font-cairo">خطوات بسيطة</span>
 </div>
 <h2 className="text-3xl lg:text-4xl font-almarai font-extrabold text-teal-900 mb-4">
 كيف تعمل MOVA؟
 </h2>
 <p className="text-ink-600 text-lg max-w-xl mx-auto font-cairo leading-relaxed">
 ثلاث خطوات بسيطة تفصلك عن رحلتك
 </p>
 </div>

 {/* Steps */}
 <div className="relative">
 {/* Connecting line (desktop) */}
 <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent -translate-y-8 z-0" />

 <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 relative z-10 stagger">
 {[
 {
 step: "01",
 icon: (
 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
 </svg>
 ),
 title: "حدد وجهتك",
 body: "اختر نقطة الانطلاق ووجهتك بسهولة من خلال خريطة التطبيق التفاعلية",
 },
 {
 step: "02",
 icon: (
 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
 </svg>
 ),
 title: "اطلب رحلتك",
 body: "أرسل طلب الرحلة وتواصل مع السائقين المتاحين في منطقتك",
 },
 {
 step: "03",
 icon: (
 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
 </svg>
 ),
 title: "ابدأ رحلتك",
 body: "تابع تفاصيل رحلتك وحالتها في الوقت الفعلي حتى تصل إلى وجهتك",
 },
 ].map((item, i) => (
 <div
 key={i}
 className="animate-on-scroll flex flex-col items-center text-center lg:items-start lg:text-right"
 >
 {/* Step number + icon */}
 <div className="relative mb-6">
 <div className="w-20 h-20 rounded-2xl bg-teal-700 flex items-center justify-center text-white shadow-teal-glow">
 {item.icon}
 </div>
 <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs font-bold font-grotesk shadow-md">
 {item.step}
 </span>
 </div>

 <h3 className="text-xl font-almarai font-extrabold text-teal-900 mb-3">
 {item.title}
 </h3>
 <p className="text-ink-600 font-cairo leading-relaxed">{item.body}</p>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* ======================= FOR PASSENGERS ======================= */}
 <section id="passengers" className="py-20 lg:py-28 bg-surface">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 {/* Text */}
 <div className="order-2 lg:order-1">
 <div className="inline-flex items-center justify-center bg-teal-50 px-6 py-2.5 md:px-8 md:py-3 rounded-full mb-6 animate-on-scroll">
 <span className="text-teal-700 font-bold text-base md:text-lg font-cairo">للركاب</span>
 </div>

 <h2 className="text-3xl lg:text-4xl font-almarai font-extrabold text-teal-900 mb-5 animate-on-scroll">
 كل ما تحتاجه لرحلة أوضح
 </h2>

 <p className="text-ink-600 font-cairo leading-relaxed text-lg mb-8 animate-on-scroll">
 مع MOVA، يمكنك طلب رحلتك ومتابعة تفاصيلها والتواصل مع سائقك من مكان واحد
 </p>

 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 stagger">
 {[
 { icon: <IconMapPin className="w-5 h-5 text-teal-700" />, text: "طلب رحلة سهل وسريع" },
 { icon: <IconMap className="w-5 h-5 text-teal-700" />, text: "تفاصيل الرحلة واضحة" },
 { icon: <IconUser className="w-5 h-5 text-teal-700" />, text: "معلومات السائق والمركبة" },
 { icon: <IconRadar className="w-5 h-5 text-teal-700" />, text: "متابعة حالة الرحلة" },
 { icon: <IconCard className="w-5 h-5 text-teal-700" />, text: "طرق الدفع المتاحة" },
 { icon: <IconStar className="w-5 h-5 text-teal-700" />, text: "تقييم التجربة" },
 { icon: <IconClipboard className="w-5 h-5 text-teal-700" />, text: "سجل الرحلات" },
 { icon: <IconBell className="w-5 h-5 text-teal-700" />, text: "تحديثات فورية" },
 ].map((feat, i) => (
 <div
 key={i}
 className="animate-on-scroll flex items-center gap-3 p-3.5 bg-white rounded-xl border border-surface-dark"
 >
 <span className="flex-shrink-0">{feat.icon}</span>
 <span className="text-ink-800 font-bold text-base md:text-lg font-cairo">{feat.text}</span>
 </div>
 ))}
 </div>

 <Link
 href="/passengers"
 id="home-passengers-cta"
 className="inline-flex items-center gap-2 px-7 py-4 bg-teal-700 hover:bg-teal-800 text-white font-bold rounded-2xl transition-all duration-200 hover:shadow-teal-glow font-cairo"
 >
 اعرف أكثر عن تجربة الراكب
 <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
 </svg>
 </Link>
 </div>

 {/* Visual */}
 <div className="order-1 lg:order-2 flex justify-center">
 <div className="relative w-full max-w-md lg:max-w-lg">
 <Image
 src="/passenger-character-2.png"
 alt="تطبيق MOVA للركاب"
 width={600}
 height={600}
 className="w-full h-auto object-contain drop-shadow-xl animate-on-scroll-left"
 />
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ======================= FOR DRIVERS ======================= */}
 <section id="drivers" className="py-20 lg:py-28 bg-[#0c2424] relative overflow-hidden">
 {/* Subtle pattern */}
 <div className="absolute inset-0 opacity-5">
 <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
 <defs>
 <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
 <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
 </pattern>
 </defs>
 <rect width="100%" height="100%" fill="url(#grid)" />
 </svg>
 </div>

 <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 {/* Visual */}
 <div className="flex justify-center relative">
 <div 
 className="relative w-full max-w-md lg:max-w-lg animate-on-scroll" 
 style={{ WebkitMaskImage: 'linear-gradient(to left, transparent 0%, black 15%, black 100%)', maskImage: 'linear-gradient(to left, transparent 0%, black 15%, black 100%)' }}
 >
 <Image
 src="/driver-character.png"
 alt="سائق MOVA"
 width={600}
 height={600}
 className="w-full h-auto object-contain drop-shadow-2xl"
 />
 </div>
 </div>

 {/* Text */}
 <div>
 <div className="inline-flex items-center justify-center bg-white/10 border border-white/20 px-6 py-2.5 md:px-8 md:py-3 rounded-full mb-6 animate-on-scroll">
 <span className="text-white/90 font-bold text-base md:text-lg font-cairo">للسائقين</span>
 </div>

 <h2 className="text-3xl lg:text-4xl font-almarai font-extrabold text-white mb-5 animate-on-scroll">
 حوّل وقتك على الطريق إلى فرص جديدة
 </h2>

 <p className="text-white/70 font-cairo leading-relaxed text-lg mb-8 animate-on-scroll">
 مع MOVA، يمكنك استقبال طلبات الرحلات، وإدارة وقتك، ومتابعة نشاطك كله من خلال تطبيق واضح
 </p>

 <div className="space-y-4 mb-8 stagger">
 {[
 { icon: <IconCar className="w-6 h-6 text-amber-400" />, title: "استقبال طلبات الرحلات", body: "تلقّ طلبات الرحلات وقرر بكل حرية" },
 { icon: <IconClock className="w-6 h-6 text-amber-400" />, title: "إدارة التوفر", body: "تحكم في أوقات عملك بمرونة كاملة" },
 { icon: <IconChart className="w-6 h-6 text-amber-400" />, title: "متابعة النشاط", body: "راجع رحلاتك المكتملة وتفاصيل نشاطك" },
 { icon: <IconCompass className="w-6 h-6 text-amber-400" />, title: "متابعة الرحلة", body: "تابع كل مرحلة من مراحل الرحلة بوضوح" },
 ].map((item, i) => (
 <div key={i} className="animate-on-scroll flex items-start gap-4 p-4 bg-white/10 rounded-2xl border border-white/10">
 <span className="flex-shrink-0 mt-0.5">{item.icon}</span>
 <div>
 <h4 className="font-almarai font-bold text-white mb-1">{item.title}</h4>
 <p className="text-white/60 text-sm font-cairo">{item.body}</p>
 </div>
 </div>
 ))}
 <DownloadAppButton variant="solid" />
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ======================= SAFETY ======================= */}
 <section id="safety" className="py-20 lg:py-28 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16 animate-on-scroll">
 <div className="inline-flex items-center justify-center bg-teal-50 px-6 py-2.5 md:px-8 md:py-3 rounded-full mb-5">
 <span className="text-teal-700 font-bold text-base md:text-lg font-cairo">الأمان والثقة</span>
 </div>
 <h2 className="text-3xl lg:text-4xl font-almarai font-extrabold text-teal-900 mb-4">
 الثقة جزء من كل رحلة
 </h2>
 <p className="text-ink-600 text-lg max-w-xl mx-auto font-cairo leading-relaxed">
 نحرص على الشفافية في كل خطوة من خطوات تجربة التنقل
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
 {[
 {
 icon: (
 <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
 </svg>
 ),
 title: "التحقق من الحسابات",
 body: "يمر السائقون بعملية تحقق من المعلومات قبل استخدام المنصة",
 },
 {
 icon: (
 <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
 </svg>
 ),
 title: "معلومات واضحة",
 body: "تحصل على تفاصيل السائق والمركبة قبل بدء كل رحلة",
 },
 {
 icon: (
 <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
 </svg>
 ),
 title: "حماية البيانات",
 body: "بياناتك محمية وفق سياسة الخصوصية الخاصة بالمنصة",
 },
 {
 icon: (
 <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
 </svg>
 ),
 title: "سجل الرحلات",
 body: "كل رحلة مسجلة داخل المنصة ومتاحة لمراجعتها في أي وقت",
 },
 {
 icon: (
 <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
 </svg>
 ),
 title: "التقييم والملاحظات",
 body: "بعد كل رحلة يمكنك تقييم تجربتك ومشاركة ملاحظاتك",
 },
 {
 icon: (
 <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
 </svg>
 ),
 title: "التواصل الواضح",
 body: "قنوات تواصل واضحة بين الراكب والسائق خلال كل رحلة",
 },
 ].map((item, i) => (
 <div
 key={i}
 className="animate-on-scroll p-6 bg-surface rounded-2xl border border-surface-dark card-hover"
 >
 <div className="w-14 h-14 rounded-2xl bg-teal-700 flex items-center justify-center text-white mb-5 shadow-teal-glow">
 {item.icon}
 </div>
 <h3 className="font-almarai font-extrabold text-teal-900 text-lg mb-2">{item.title}</h3>
 <p className="text-ink-600 font-cairo text-sm leading-relaxed">{item.body}</p>
 </div>
 ))}
 </div>
 </div>
 </section>


 {/* ======================= FAQ ======================= */}
 <FAQSection />

 {/* ======================= FINAL CTA ======================= */}
 <section className="py-20 lg:py-28 bg-teal-900 relative overflow-hidden">
 <div className="absolute inset-0 opacity-10">
 <Image src="/hero-bg.jpg" alt="" fill className="object-cover" aria-hidden="true" />
 </div>
 <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <div className="animate-on-scroll">
 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-almarai font-extrabold text-white mb-6 leading-tight">
 جاهز تتحرك مع MOVA؟
 </h2>
 <p className="text-white/70 text-xl font-cairo mb-10 leading-relaxed">
 سواء كنت راكبًا تبحث عن رحلة أو سائقًا يريد الانضمام، MOVA هنا
 </p>
 <div className="flex flex-wrap gap-4 justify-center">
 <DownloadAppButton variant="solid" />
 </div>
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </ScrollAnimator>
 );
}
