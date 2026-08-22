import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";
import { IconUser, IconCar, IconGear } from "@/components/Icons";

export const metadata: Metadata = {
 title: "عن MOVA — منصة تقنية للتنقل",
 description:
 "تعرف على MOVA، منصة تقنية مصرية تركز على تحسين طريقة تواصل الركاب مع السائقين وتبسيط تجربة التنقل",
};

export default function AboutPage() {
 return (
 <ScrollAnimator>
 <Navbar />
 <main>
 {/* Hero */}
 <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-teal-900">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <div className="inline-flex items-center justify-center bg-white/10 border border-white/20 px-6 py-2.5 md:px-8 md:py-3 rounded-full mb-6 animate-on-scroll">
 <span className="text-white/90 font-bold text-base md:text-lg font-cairo">عن MOVA</span>
 </div>
 <h1 className="text-4xl lg:text-5xl font-almarai font-extrabold text-white mb-6 animate-on-scroll leading-tight">
 نبني التقنية التي تجعل التنقل أوضح
 </h1>
 <p className="text-white/70 text-xl font-cairo leading-relaxed animate-on-scroll">
 MOVA هي منصة تقنية تربط الركاب بالسائقين وتساعدهم على إتمام رحلاتهم بشكل واضح وموثوق
 </p>
 </div>
 </section>

 {/* Mission */}
 <section className="py-20 lg:py-28 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 <div>
 <div className="inline-flex items-center justify-center bg-teal-50 px-6 py-2.5 md:px-8 md:py-3 rounded-full mb-6 animate-on-scroll">
 <span className="text-teal-700 font-bold text-base md:text-lg font-cairo">مهمتنا</span>
 </div>
 <h2 className="text-3xl lg:text-4xl font-almarai font-extrabold text-teal-900 mb-5 animate-on-scroll">
 تبسيط التنقل من خلال التقنية
 </h2>
 <p className="text-ink-600 font-cairo leading-relaxed text-lg mb-5 animate-on-scroll">
 نؤمن بأن التنقل يجب أن يكون واضحًا وبسيطًا ومتاحًا للجميع لذلك نركز على بناء منصة تقنية تجعل كل خطوة في رحلة التنقل أكثر وضوحًا وموثوقية
 </p>
 <p className="text-ink-600 font-cairo leading-relaxed text-lg animate-on-scroll">
 MOVA توفر التقنية التي تساعد على ربط الركاب بالسائقين، وليس الخدمة نفسها نحن منصة رقمية تسهّل عملية الاتصال وتنظيم الرحلات
 </p>
 </div>
 <div className="space-y-5 animate-on-scroll-left">
 {[
 {
 num: "01",
 title: "الوضوح أولاً",
 body: "كل ما يحدث في الرحلة يجب أن يكون واضحًا للراكب والسائق على حد سواء",
 },
 {
 num: "02",
 title: "الثقة في كل خطوة",
 body: "نبني أدوات تساعد على بناء الثقة بين مستخدمي المنصة من خلال الشفافية",
 },
 {
 num: "03",
 title: "تقنية في خدمة الناس",
 body: "التقنية أداة لتسهيل حياة الناس، ليس لتعقيدها هذا ما نصممه من أجله",
 },
 ].map((item) => (
 <div key={item.num} className="flex gap-5 p-5 bg-surface rounded-2xl border border-surface-dark">
 <span className="text-2xl font-grotesk font-bold text-teal-300 flex-shrink-0">{item.num}</span>
 <div>
 <h3 className="font-almarai font-bold text-teal-900 mb-1">{item.title}</h3>
 <p className="text-ink-600 font-cairo text-sm leading-relaxed">{item.body}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* What We Build */}
 <section className="py-20 lg:py-28 bg-surface">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-14 animate-on-scroll">
 <div className="inline-flex items-center justify-center bg-teal-50 px-6 py-2.5 md:px-8 md:py-3 rounded-full mb-5">
 <span className="text-teal-700 font-bold text-base md:text-lg font-cairo">ما نبنيه</span>
 </div>
 <h2 className="text-3xl lg:text-4xl font-almarai font-extrabold text-teal-900 mb-4">
 منصة رقمية متكاملة للتنقل
 </h2>
 <p className="text-ink-600 text-lg max-w-2xl mx-auto font-cairo leading-relaxed">
 نبني مجموعة من الأدوات الرقمية التي تعمل معًا لتوفير تجربة تنقل واضحة وموثوقة
 </p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger">
 {[
 { title: "تطبيق الركاب", body: "تطبيق يتيح للركاب طلب الرحلات ومتابعة تفاصيلها والتواصل مع السائقين", icon: <IconUser className="w-12 h-12 text-teal-700" /> },
 { title: "تطبيق السائقين", body: "واجهة مخصصة للسائقين لاستقبال الطلبات وإدارة رحلاتهم ومتابعة نشاطهم", icon: <IconCar className="w-12 h-12 text-teal-700" /> },
 { title: "البنية التقنية", body: "منصة رقمية موثوقة تربط الطرفين وتدير عمليات الرحلات بشكل آمن وفعال", icon: <IconGear className="w-12 h-12 text-teal-700" /> },
 ].map((item, i) => (
 <div key={i} className="animate-on-scroll p-8 bg-white rounded-2xl border border-surface-dark shadow-card card-hover text-center">
 <span className="flex justify-center mb-5">{item.icon}</span>
 <h3 className="font-almarai font-extrabold text-teal-900 text-xl mb-3">{item.title}</h3>
 <p className="text-ink-600 font-cairo leading-relaxed text-sm">{item.body}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Vision */}
 <section className="py-20 lg:py-24 bg-teal-900">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <div className="animate-on-scroll">
 <div className="inline-flex items-center justify-center bg-white/10 border border-white/20 px-6 py-2.5 md:px-8 md:py-3 rounded-full mb-6">
 <span className="text-white/90 font-bold text-base md:text-lg font-cairo">رؤيتنا</span>
 </div>
 <h2 className="text-3xl lg:text-4xl font-almarai font-extrabold text-white mb-6 leading-tight">
 تنقل أكثر وضوحًا لكل شخص
 </h2>
 <p className="text-white/70 text-xl font-cairo leading-relaxed mb-10">
 نسعى نحو مستقبل يكون فيه التنقل أوضح وأكثر موثوقية — رحلة واحدة في كل مرة
 </p>
 <div className="flex flex-wrap gap-4 justify-center">
 <Link href="/passengers" className="px-7 py-4 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-2xl transition-all duration-200 font-cairo">
 للركاب
 </Link>
 <Link href="/drivers" className="px-7 py-4 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold rounded-2xl transition-all duration-200 font-cairo">
 للسائقين
 </Link>
 </div>
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </ScrollAnimator>
 );
}
