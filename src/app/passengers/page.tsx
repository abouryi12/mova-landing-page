import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";
import DownloadAppButton from "@/components/DownloadAppButton";
import { IconMapPin, IconMap, IconUser, IconRadar, IconCard, IconStar, IconClipboard, IconBell, IconMobile } from "@/components/Icons";

export const metadata: Metadata = {
 title: "للركاب — تجربة تنقل أوضح مع MOVA",
 description:
 "اكتشف كيف تساعدك MOVA على طلب رحلتك، متابعة تفاصيلها، والتواصل مع سائقك بكل سهولة",
};

export default function PassengersPage() {
 return (
 <ScrollAnimator>
 <Navbar />
 <main>
 {/* Hero */}
 <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-surface">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
 <div>
 <div className="inline-flex items-center justify-center bg-teal-50 px-6 py-2.5 md:px-8 md:py-3 rounded-full mb-6 animate-on-scroll">
 <span className="text-teal-700 font-bold text-base md:text-lg font-cairo">للركاب</span>
 </div>
 <h1 className="text-4xl lg:text-5xl xl:text-6xl font-almarai font-extrabold text-teal-900 mb-6 leading-tight animate-on-scroll">
 رحلتك تبدأ بسهولة
 </h1>
 <p className="text-ink-600 text-xl font-cairo leading-relaxed mb-8 animate-on-scroll">
 مع MOVA، تطلب رحلتك، تتابع تفاصيلها، وتتواصل مع سائقك — كلها من مكان واحد وبخطوات بسيطة
 </p>
 <div className="flex gap-4 flex-wrap animate-on-scroll">
 <Link
 href="/contact"
 id="passenger-hero-cta"
 className="px-7 py-4 bg-amber-500 hover:bg-amber-400 text-white font-bold text-lg rounded-2xl transition-all duration-200 hover:shadow-amber-glow font-cairo"
 >
 ابدأ الآن
 </Link>
 <Link
 href="/#how-it-works"
 className="px-7 py-4 border-2 border-teal-700 text-teal-700 font-bold text-lg rounded-2xl hover:bg-teal-50 transition-all duration-200 font-cairo"
 >
 كيف تعمل؟
 </Link>
 </div>
 </div>
 <div className="flex justify-center animate-on-scroll-left">
 <div className="relative w-full max-w-md lg:max-w-lg">
 <Image
 src="/passenger-character-2.png"
 alt="تطبيق MOVA للركاب"
 width={600}
 height={600}
 className="w-full h-auto object-contain drop-shadow-xl"
 priority
 />
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Journey steps */}
 <section className="py-20 lg:py-28 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-14 animate-on-scroll">
 <div className="inline-flex items-center justify-center bg-teal-50 px-6 py-2.5 md:px-8 md:py-3 rounded-full mb-5">
 <span className="text-teal-700 font-bold text-base md:text-lg font-cairo">خطوتك خطوة</span>
 </div>
 <h2 className="text-3xl lg:text-4xl font-almarai font-extrabold text-teal-900 mb-4">
 رحلتك من البداية للنهاية
 </h2>
 </div>
 <div className="space-y-6">
 {[
 {
 step: "01",
 title: "أنشئ حسابك",
 body: "سجّل بياناتك وأنشئ حسابك كراكب في دقائق",
 icon: <IconUser className="w-8 h-8 text-white" />,
 },
 {
 step: "02",
 title: "حدد موقعك",
 body: "اختر نقطة انطلاقك من خلال الخريطة أو ابحث عن العنوان مباشرة",
 icon: <IconMapPin className="w-8 h-8 text-white" />,
 },
 {
 step: "03",
 title: "اختر وجهتك",
 body: "أدخل وجهتك وسيعرض التطبيق خيارات الرحلة المتاحة",
 icon: <IconMap className="w-8 h-8 text-white" />,
 },
 {
 step: "04",
 title: "اطلب الرحلة",
 body: "أرسل طلب الرحلة وانتظر تأكيد سائق متاح في منطقتك",
 icon: <IconMobile className="w-8 h-8 text-white" />,
 },
 {
 step: "05",
 title: "تابع التفاصيل",
 body: "اطّلع على معلومات السائق والمركبة وتابع حالة الرحلة لحظة بلحظة",
 icon: <IconRadar className="w-8 h-8 text-white" />,
 },
 {
 step: "06",
 title: "أكمل الرحلة وقيّم",
 body: "عند الوصول، أكمل عملية الدفع وشارك تقييمك لتجربتك",
 icon: <IconStar className="w-8 h-8 text-white" />,
 },
 ].map((item, i) => (
 <div
 key={i}
 className="animate-on-scroll flex items-start gap-6 p-6 lg:p-8 bg-surface rounded-2xl border border-surface-dark"
 >
 <div className="flex-shrink-0">
 <div className="relative w-16 h-16">
 <div className="w-16 h-16 rounded-2xl bg-teal-700 flex items-center justify-center shadow-teal-glow">
 {item.icon}
 </div>
 <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs font-bold font-grotesk">
 {item.step}
 </span>
 </div>
 </div>
 <div>
 <h3 className="font-almarai font-extrabold text-teal-900 text-xl mb-2">{item.title}</h3>
 <p className="text-ink-600 font-cairo leading-relaxed">{item.body}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Features grid */}
 <section className="py-20 lg:py-28 bg-teal-900">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-14 animate-on-scroll">
 <h2 className="text-3xl lg:text-4xl font-almarai font-extrabold text-white mb-4">
 كل ما تحتاجه لرحلة أوضح
 </h2>
 <p className="text-white/70 text-lg font-cairo max-w-xl mx-auto">
 مجموعة من الأدوات التي تجعل كل رحلة أكثر وضوحًا وراحةً
 </p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger">
 {[
 { icon: <IconRadar className="w-8 h-8 text-teal-300" />, title: "متابعة حالة الرحلة", body: "تحديثات فورية عن حالة رحلتك من لحظة القبول حتى الوصول" },
 { icon: <IconUser className="w-8 h-8 text-teal-300" />, title: "معلومات السائق", body: "اطلع على بيانات السائق ومركبته قبل بدء الرحلة" },
 { icon: <IconCard className="w-8 h-8 text-teal-300" />, title: "طرق الدفع المتاحة", body: "اختر طريقة الدفع المناسبة من الخيارات المتاحة داخل التطبيق" },
 { icon: <IconClipboard className="w-8 h-8 text-teal-300" />, title: "سجل الرحلات", body: "راجع تفاصيل رحلاتك السابقة في أي وقت" },
 { icon: <IconStar className="w-8 h-8 text-teal-300" />, title: "التقييم والملاحظات", body: "شارك تقييمك وملاحظاتك بعد كل رحلة" },
 { icon: <IconBell className="w-8 h-8 text-teal-300" />, title: "إشعارات لحظية", body: "تنبيهات فورية عن حالة رحلتك وتحديثاتها" },
 ].map((item, i) => (
 <div key={i} className="animate-on-scroll p-6 bg-white/10 border border-white/10 rounded-2xl">
 <span className="block mb-4">{item.icon}</span>
 <h3 className="font-almarai font-extrabold text-white text-lg mb-2">{item.title}</h3>
 <p className="text-white/60 font-cairo text-sm leading-relaxed">{item.body}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="py-20 bg-amber-500">
 <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <div className="animate-on-scroll">
 <h2 className="text-3xl lg:text-4xl font-almarai font-extrabold text-white mb-5">
 جاهز لأول رحلة؟
 </h2>
 <p className="text-white/80 text-lg font-cairo mb-8">
 حمّل التطبيق وابدأ رحلتك
 </p>
 <DownloadAppButton variant="white" />
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </ScrollAnimator>
 );
}
