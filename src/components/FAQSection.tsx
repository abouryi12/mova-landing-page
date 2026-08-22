"use client";

import { useState } from "react";

const faqs = [
 {
 q: "ما هي MOVA؟",
 a: "MOVA هي منصة تقنية تساعد الركاب على طلب خدمات التنقل والتواصل مع السائقين من خلال تطبيق واحد نوفر التقنية التي تربط بين الركاب والسائقين بشكل واضح وموثوق",
 },
 {
 q: "كيف أطلب رحلة؟",
 a: "يمكنك تحديد موقع الانطلاق والوجهة وإرسال طلب الرحلة من خلال التطبيق بعد ذلك سيتواصل معك السائق المتاح لتأكيد الرحلة",
 },
 {
 q: "كيف يمكنني الدفع؟",
 a: "يمكنك اختيار إحدى طرق الدفع المدعومة والمتاحة داخل التطبيق نحرص على توفير خيارات دفع واضحة ومناسبة",
 },
 {
 q: "كيف أصبح سائقًا؟",
 a: "يمكنك التسجيل وبدء عملية الانضمام كسائق من خلال MOVA. ستحتاج إلى إكمال بيانات التسجيل والتحقق من المعلومات المطلوبة",
 },
 {
 q: "هل يمكنني متابعة حالة الرحلة؟",
 a: "نعم، يمكنك متابعة تحديثات حالة الرحلة من خلال التطبيق في الوقت الفعلي، من لحظة قبول السائق للرحلة حتى الوصول",
 },
 {
 q: "كيف يتم التعامل مع بياناتي؟",
 a: "يتم التعامل مع البيانات وفقًا لسياسة الخصوصية الخاصة بالمنصة نحرص على حماية معلوماتك وعدم مشاركتها إلا عند الضرورة لتقديم الخدمة",
 },
 {
 q: "ماذا أفعل إذا كان لدي مشكلة في الرحلة؟",
 a: "يمكنك التواصل مع فريق الدعم من خلال التطبيق أو عبر صفحة التواصل على الموقع، وسنعمل على مساعدتك في أسرع وقت",
 },
 {
 q: "هل يمكنني تقييم تجربتي؟",
 a: "نعم، بعد انتهاء كل رحلة يمكنك تقييم تجربتك وإضافة ملاحظاتك هذا يساعدنا على تحسين تجربة الجميع",
 },
];

export default function FAQSection() {
 const [openIndex, setOpenIndex] = useState<number | null>(0);

 return (
 <section id="faq" className="py-20 lg:py-28 bg-surface">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 {/* Header */}
 <div className="text-center mb-14 animate-on-scroll">
 <div className="inline-flex items-center justify-center bg-teal-50 px-6 py-2.5 md:px-8 md:py-3 rounded-full mb-5">
 <span className="text-teal-700 font-bold text-base md:text-lg">الأسئلة الشائعة</span>
 </div>
 <h2 className="text-3xl lg:text-4xl font-almarai font-extrabold text-teal-900 mb-4">
 أسئلة كثيرة؟ إجابات واضحة
 </h2>
 <p className="text-ink-600 text-lg leading-relaxed font-cairo">
 نجيب على الأسئلة الأكثر شيوعًا حول MOVA وكيفية الاستفادة من المنصة
 </p>
 </div>

 {/* FAQ list */}
 <div className="space-y-3">
 {faqs.map((faq, i) => (
 <div
 key={i}
 className="animate-on-scroll border border-surface-dark rounded-2xl overflow-hidden bg-white shadow-card transition-shadow duration-200 hover:shadow-elev"
 style={{ transitionDelay: `${i * 50}ms` }}
 >
 <button
 id={`faq-btn-${i}`}
 aria-expanded={openIndex === i}
 aria-controls={`faq-content-${i}`}
 onClick={() => setOpenIndex(openIndex === i ? null : i)}
 className="w-full flex items-center justify-between gap-4 p-5 lg:p-6 text-right"
 >
 <span className="font-almarai font-bold text-teal-900 text-base lg:text-lg text-right flex-1">
 {faq.q}
 </span>
 <span
 className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
 openIndex === i
 ? "bg-teal-700 text-white rotate-180"
 : "bg-teal-50 text-teal-700"
 }`}
 >
 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
 </svg>
 </span>
 </button>

 <div
 id={`faq-content-${i}`}
 role="region"
 aria-labelledby={`faq-btn-${i}`}
 className={`overflow-hidden transition-all duration-300 ${
 openIndex === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
 }`}
 >
 <p className="px-5 lg:px-6 pb-5 lg:pb-6 text-ink-700 leading-relaxed font-cairo text-sm lg:text-base">
 {faq.a}
 </p>
 </div>
 </div>
 ))}
 </div>

 {/* More questions CTA */}
 <div className="mt-10 text-center animate-on-scroll">
 <p className="text-ink-600 font-cairo mb-4">لم تجد إجابتك؟</p>
 <a
 href="/contact"
 className="inline-flex items-center gap-2 px-6 py-3 border-2 border-teal-700 text-teal-700 font-bold rounded-xl hover:bg-teal-700 hover:text-white transition-all duration-200"
 >
 تواصل معنا
 <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
 </svg>
 </a>
 </div>
 </div>
 </section>
 );
}
