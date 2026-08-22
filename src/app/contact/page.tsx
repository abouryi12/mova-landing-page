"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";

export default function ContactPage() {
 const [formState, setFormState] = useState({
 name: "",
 email: "",
 subject: "",
 message: "",
 });
 const [submitted, setSubmitted] = useState(false);
 const [submitting, setSubmitting] = useState(false);

 const handleSubmit = async (e: React.FormEvent) => {
 e.preventDefault();
 setSubmitting(true);
 // Simulate submission
 await new Promise((res) => setTimeout(res, 1200));
 setSubmitting(false);
 setSubmitted(true);
 };

 return (
 <ScrollAnimator>
 <Navbar />
 <main>
 {/* Hero */}
 <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-surface">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <div className="inline-flex items-center justify-center bg-teal-50 px-6 py-2.5 md:px-8 md:py-3 rounded-full mb-6 animate-on-scroll">
 <span className="text-teal-700 font-bold text-base md:text-lg font-cairo">التواصل معنا</span>
 </div>
 <h1 className="text-4xl lg:text-5xl font-almarai font-extrabold text-teal-900 mb-5 animate-on-scroll">
 نسعد بالتواصل معك
 </h1>
 <p className="text-ink-600 text-xl font-cairo leading-relaxed animate-on-scroll">
 سواء كان لديك استفسار، شراكة مقترحة، أو طلب دعم — نحن هنا للمساعدة
 </p>
 </div>
 </section>

 {/* Contact content */}
 <section className="py-16 lg:py-20 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
 {/* Info */}
 <div>
 <div className="space-y-6 mb-10">
 {[
 {
 icon: (
 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
 </svg>
 ),
 label: "البريد الإلكتروني",
 value: "contact@mova.app",
 note: "للاستفسارات العامة والدعم",
 },
 {
 icon: (
 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
 </svg>
 ),
 label: "الشراكات والأعمال",
 value: "partners@mova.app",
 note: "لطلبات الشراكات وتكامل الدفع",
 },
 {
 icon: (
 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
 </svg>
 ),
 label: "الدعم الفني",
 value: "support@mova.app",
 note: "لمشاكل التطبيق والحسابات",
 },
 ].map((item, i) => (
 <div key={i} className="flex items-start gap-4 animate-on-scroll">
 <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 flex-shrink-0">
 {item.icon}
 </div>
 <div>
 <p className="font-cairo font-semibold text-ink-800 mb-0.5">{item.label}</p>
 <p className="font-cairo font-bold text-teal-700">{item.value}</p>
 <p className="font-cairo text-ink-500 text-sm">{item.note}</p>
 </div>
 </div>
 ))}
 </div>

 <div className="p-6 bg-surface rounded-2xl border border-surface-dark animate-on-scroll">
 <h3 className="font-almarai font-extrabold text-teal-900 text-lg mb-3">للمؤسسات وشركات الدفع</h3>
 <p className="text-ink-600 font-cairo text-sm leading-relaxed">
 إذا كنت ممثلاً لمؤسسة مالية أو شركة خدمات دفع وتريد التعاون مع MOVA، يُرجى التواصل عبر البريد الإلكتروني المخصص للشراكات مع توضيح طبيعة الطلب
 </p>
 </div>
 </div>

 {/* Form */}
 <div className="animate-on-scroll-left">
 {submitted ? (
 <div className="flex flex-col items-center justify-center h-full min-h-80 text-center p-8 bg-teal-50 rounded-2xl border border-teal-200">
 <div className="w-16 h-16 rounded-2xl bg-teal-700 flex items-center justify-center mb-5 shadow-teal-glow">
 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
 </svg>
 </div>
 <h3 className="font-almarai font-extrabold text-teal-900 text-2xl mb-3">تم الإرسال!</h3>
 <p className="text-ink-600 font-cairo">
 شكرًا على تواصلك سيرد عليك فريقنا في أقرب وقت ممكن
 </p>
 </div>
 ) : (
 <form
 id="contact-form"
 onSubmit={handleSubmit}
 className="p-8 bg-surface rounded-2xl border border-surface-dark space-y-5"
 noValidate
 >
 <div>
 <label htmlFor="contact-name" className="block font-cairo font-semibold text-ink-800 mb-2 text-sm">
 الاسم الكامل <span className="text-amber-500">*</span>
 </label>
 <input
 id="contact-name"
 type="text"
 required
 value={formState.name}
 onChange={(e) => setFormState({ ...formState, name: e.target.value })}
 placeholder="اسمك الكامل"
 className="w-full px-4 py-3 bg-white border border-surface-dark rounded-xl text-ink-900 font-cairo placeholder-ink-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-colors"
 />
 </div>

 <div>
 <label htmlFor="contact-email" className="block font-cairo font-semibold text-ink-800 mb-2 text-sm">
 البريد الإلكتروني <span className="text-amber-500">*</span>
 </label>
 <input
 id="contact-email"
 type="email"
 required
 value={formState.email}
 onChange={(e) => setFormState({ ...formState, email: e.target.value })}
 placeholder="example@email.com"
 dir="ltr"
 className="w-full px-4 py-3 bg-white border border-surface-dark rounded-xl text-ink-900 font-cairo placeholder-ink-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-colors text-right"
 />
 </div>

 <div>
 <label htmlFor="contact-subject" className="block font-cairo font-semibold text-ink-800 mb-2 text-sm">
 موضوع الرسالة <span className="text-amber-500">*</span>
 </label>
 <select
 id="contact-subject"
 required
 value={formState.subject}
 onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
 className="w-full px-4 py-3 bg-white border border-surface-dark rounded-xl text-ink-900 font-cairo focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-colors appearance-none"
 >
 <option value="">اختر موضوع الرسالة</option>
 <option value="general">استفسار عام</option>
 <option value="support">دعم فني</option>
 <option value="partnership">شراكة أو تكامل</option>
 <option value="driver">الانضمام كسائق</option>
 <option value="payment">استفسار عن الدفع</option>
 <option value="other">أخرى</option>
 </select>
 </div>

 <div>
 <label htmlFor="contact-message" className="block font-cairo font-semibold text-ink-800 mb-2 text-sm">
 الرسالة <span className="text-amber-500">*</span>
 </label>
 <textarea
 id="contact-message"
 required
 rows={5}
 value={formState.message}
 onChange={(e) => setFormState({ ...formState, message: e.target.value })}
 placeholder="اكتب رسالتك هنا.."
 className="w-full px-4 py-3 bg-white border border-surface-dark rounded-xl text-ink-900 font-cairo placeholder-ink-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-colors resize-none"
 />
 </div>

 <button
 id="contact-submit"
 type="submit"
 disabled={submitting}
 className="w-full py-4 bg-teal-700 hover:bg-teal-800 disabled:opacity-70 text-white font-bold text-lg rounded-xl transition-all duration-200 hover:shadow-teal-glow active:scale-95 font-cairo flex items-center justify-center gap-2"
 >
 {submitting ? (
 <>
 <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
 </svg>
 جاري الإرسال..
 </>
 ) : (
 "إرسال الرسالة"
 )}
 </button>
 </form>
 )}
 </div>
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </ScrollAnimator>
 );
}
