import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";
import DownloadAppButton from "@/components/DownloadAppButton";
import { IconMap, IconRadar, IconClock, IconStar, IconClipboard, IconBell } from "@/components/Icons";

export const metadata: Metadata = {
 title: "للسائقين — انضم إلى MOVA",
 description:
 "انضم إلى MOVA كسائق استقبل طلبات الرحلات، وأدر وقتك بمرونة، وتابع نشاطك كله من خلال تطبيق واضح",
};

export default function DriversPage() {
 return (
 <ScrollAnimator>
 <Navbar />
 <main>
 {/* Hero */}
 <section className="pt-28 pb-0 lg:pt-36 bg-teal-900 relative overflow-hidden">
 <div className="absolute inset-0 opacity-5">
 <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
 <defs>
 <pattern id="grid2" width="60" height="60" patternUnits="userSpaceOnUse">
 <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
 </pattern>
 </defs>
 <rect width="100%" height="100%" fill="url(#grid2)" />
 </svg>
 </div>
 <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
 <div className="pb-16 lg:pb-20">
 <div className="inline-flex items-center justify-center bg-white/10 border border-white/20 px-6 py-2.5 md:px-8 md:py-3 rounded-full mb-6 animate-on-scroll">
 <span className="text-white/90 font-bold text-base md:text-lg font-cairo">للسائقين</span>
 </div>
 <h1 className="text-4xl lg:text-5xl xl:text-6xl font-almarai font-extrabold text-white mb-6 leading-tight animate-on-scroll">
 انطلق أكثر مع MOVA.
 </h1>
 <p className="text-white/70 text-xl font-cairo leading-relaxed mb-8 animate-on-scroll">
 حوّل وقتك على الطريق إلى فرص جديدة مع MOVA، تستقبل الرحلات، وتدير وقتك، وتتابع نشاطك — كلها في تطبيق واحد
 </p>
 <DownloadAppButton variant="solid" />
 </div>
 <div className="flex justify-center items-end">
 <div className="relative w-full max-w-md lg:max-w-lg">
 <Image
 src="/driver-character.png"
 alt="سائق MOVA"
 width={600}
 height={600}
 className="w-full h-auto object-contain"
 priority
 />
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* How to join */}
 <section className="py-20 lg:py-28 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-14 animate-on-scroll">
 <div className="inline-flex items-center justify-center bg-teal-50 px-6 py-2.5 md:px-8 md:py-3 rounded-full mb-5">
 <span className="text-teal-700 font-bold text-base md:text-lg font-cairo">خطوات الانضمام</span>
 </div>
 <h2 className="text-3xl lg:text-4xl font-almarai font-extrabold text-teal-900 mb-4">
 كيف تنضم كسائق؟
 </h2>
 <p className="text-ink-600 text-lg max-w-xl mx-auto font-cairo">
 خطوات واضحة للبدء مع MOVA.
 </p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
 {[
 { step: "01", title: "إنشاء حساب", body: "سجّل بياناتك وأنشئ حسابك كسائق على المنصة" },
 { step: "02", title: "إكمال الملف", body: "أضف معلومات مركبتك وأكمل بيانات التحقق المطلوبة" },
 { step: "03", title: "مراجعة الطلب", body: "يتم مراجعة طلبك والتحقق من المعلومات المقدمة" },
 { step: "04", title: "ابدأ العمل", body: "بعد القبول، ابدأ في استقبال طلبات الرحلات" },
 ].map((item, i) => (
 <div key={i} className="animate-on-scroll text-center p-6 bg-surface rounded-2xl border border-surface-dark">
 <div className="w-14 h-14 rounded-2xl bg-teal-700 flex items-center justify-center text-white font-grotesk font-bold text-xl mx-auto mb-5 shadow-teal-glow">
 {item.step}
 </div>
 <h3 className="font-almarai font-extrabold text-teal-900 text-lg mb-2">{item.title}</h3>
 <p className="text-ink-600 font-cairo text-sm leading-relaxed">{item.body}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Features */}
 <section className="py-20 lg:py-28 bg-surface">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-14 animate-on-scroll">
 <h2 className="text-3xl lg:text-4xl font-almarai font-extrabold text-teal-900 mb-4">
 كل ما تحتاجه في تطبيق واحد
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger">
 {[
 { icon: <IconRadar className="w-8 h-8 text-teal-700" />, title: "استقبال طلبات الرحلات", body: "تلقّ إشعارات فورية بطلبات الرحلات في منطقتك واقبل الطلبات التي تناسبك" },
 { icon: <IconClock className="w-8 h-8 text-teal-700" />, title: "إدارة التوفر", body: "تحكم في أوقات عملك بمرونة كاملة أنت من يقرر متى تعمل ومتى تتوقف" },
 { icon: <IconMap className="w-8 h-8 text-teal-700" />, title: "متابعة مسار الرحلة", body: "تابع كل مرحلة من مراحل الرحلة وصولاً للوجهة بتفاصيل واضحة" },
 { icon: <IconClipboard className="w-8 h-8 text-teal-700" />, title: "سجل النشاط", body: "راجع رحلاتك المكتملة وتفاصيل نشاطك من خلال سجل شامل داخل التطبيق" },
 { icon: <IconStar className="w-8 h-8 text-teal-700" />, title: "تقييمات الركاب", body: "اطلع على تقييمات الركاب وحافظ على مستوى خدمة مرتفع" },
 { icon: <IconBell className="w-8 h-8 text-teal-700" />, title: "إشعارات فورية", body: "استقبل إشعارات لحظية بطلبات الرحلات والتحديثات المهمة" },
 ].map((item, i) => (
 <div key={i} className="animate-on-scroll flex items-start gap-5 p-6 bg-white rounded-2xl border border-surface-dark card-hover shadow-card">
 <span className="flex-shrink-0 mt-0.5">{item.icon}</span>
 <div>
 <h3 className="font-almarai font-extrabold text-teal-900 text-lg mb-2">{item.title}</h3>
 <p className="text-ink-600 font-cairo text-sm leading-relaxed">{item.body}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="py-20 bg-teal-900">
 <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <div className="animate-on-scroll">
 <h2 className="text-3xl lg:text-4xl font-almarai font-extrabold text-white mb-5">
 مستعد للانطلاق؟
 </h2>
 <p className="text-white/70 text-lg font-cairo mb-8 leading-relaxed">
 حمّل التطبيق الآن وابدأ رحلتك مع MOVA كسائق
 </p>
 <DownloadAppButton variant="solid" />
 <p className="text-white/40 text-sm font-cairo mt-4">
 ستتمكن من استكمال إجراءات التسجيل داخل التطبيق
 </p>
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </ScrollAnimator>
 );
}
