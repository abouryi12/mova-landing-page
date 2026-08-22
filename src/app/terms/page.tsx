import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";

export const metadata: Metadata = {
 title: "الشروط والأحكام — MOVA",
 description: "الشروط والأحكام التي تنظم استخدام منصة MOVA لخدمات التنقل التقنية",
};

export default function TermsPage() {
 return (
 <ScrollAnimator>
 <Navbar />
 <main>
 <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-teal-900">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
 <h1 className="text-4xl lg:text-5xl font-almarai font-extrabold text-white mb-4 animate-on-scroll">
 الشروط والأحكام
 </h1>
 <p className="text-white/70 font-cairo text-lg animate-on-scroll">
 آخر تحديث: [تاريخ النفاذ]
 </p>
 </div>
 </section>

 <section className="py-16 lg:py-20 bg-white">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="space-y-10 animate-on-scroll">

 <div className="p-6 bg-amber-50 rounded-2xl border border-amber-200">
 <p className="text-ink-700 font-cairo leading-relaxed">
 باستخدامك لمنصة MOVA، فإنك توافق على الالتزام بهذه الشروط والأحكام إذا لم توافق على هذه الشروط، يُرجى التوقف عن استخدام المنصة
 </p>
 <p className="text-ink-500 font-cairo text-sm mt-3">
 <strong>تنبيه:</strong> هذه الشروط مُعدّة لأغراض توضيحية ويُنصح بمراجعتها قانونياً قبل الاستخدام في بيئة الإنتاج
 </p>
 </div>

 {[
 {
 title: "1. طبيعة MOVA ودورها",
 content: `MOVA هي منصة تقنية تعمل كوسيط رقمي يربط الركاب بالسائقين المستقلين MOVA لا تُقدّم خدمات النقل مباشرةً، بل توفر التقنية التي تتيح الاتصال بين الطرفين وإدارة عمليات الرحلات

السائقون مستقلون وليسوا موظفين أو وكلاء لدى MOVA. MOVA ليست مسؤولة عن تصرفات السائقين أو الركاب بما يتجاوز ما تتيحه المنصة من أدوات وضمانات`,
 },
 {
 title: "2. شروط الاستخدام",
 content: `يُشترط للاستخدام:

- أن يكون المستخدم بالغاً وفق القانون المحلي المعمول به
- توفير معلومات صحيحة ودقيقة عند إنشاء الحساب
- عدم استخدام المنصة لأي أغراض غير مشروعة أو مخالفة لهذه الشروط
- عدم محاولة الوصول غير المصرح به إلى أنظمة المنصة
- الحفاظ على سرية بيانات الحساب والإبلاغ الفوري عن أي استخدام غير مصرح به`,
 },
 {
 title: "3. حساب المستخدم",
 content: `المستخدم مسؤول عن:

- دقة المعلومات المقدمة في الحساب وتحديثها عند الحاجة
- سرية كلمة المرور وأي رموز مصادقة
- جميع النشاطات التي تتم من خلال حسابه

تحتفظ MOVA بالحق في تعليق الحسابات أو إغلاقها في حال الاشتباه في انتهاك هذه الشروط`,
 },
 {
 title: "4. طلبات الرحلات",
 content: `عند طلب رحلة:

- يُرسل الطلب إلى السائقين المتاحين في المنطقة
- قبول الطلب من قِبل سائق يُنشئ علاقة اتفاق بين الراكب والسائق
- يمكن إلغاء الطلب وفق سياسة الإلغاء المعمول بها في التطبيق
- MOVA تيسّر هذه العملية ولكنها ليست طرفاً في عقد الرحلة بين الراكب والسائق`,
 },
 {
 title: "5. الإلغاء والرسوم",
 content: `قد تُطبَّق رسوم إلغاء في حالات معينة وفق السياسة المعلنة داخل التطبيق تحتفظ MOVA بالحق في تعديل سياسة الإلغاء مع إشعار المستخدمين مسبقاً`,
 },
 {
 title: "6. المدفوعات",
 content: `- تُعالَج المدفوعات عبر وسائل الدفع المدعومة داخل المنصة
- أسعار الرحلات تُحسب وفق آليات التسعير المعمول بها في التطبيق
- في حال الاسترداد، يتم معالجته وفق سياسة الاسترداد المعلنة
- MOVA تستقطع رسومها من مدفوعات الرحلات وفق الشروط المتفق عليها مع السائق`,
 },
 {
 title: "7. التقييمات والمراجعات",
 content: `يُتاح للركاب والسائقين تقييم بعضهم بعد كل رحلة يجب أن تكون التقييمات صادقة وتعكس التجربة الفعلية التقييمات الكاذبة أو المضللة تُعدّ انتهاكاً لهذه الشروط`,
 },
 {
 title: "8. مسؤولية السائق",
 content: `السائقون المنضمون إلى MOVA مسؤولون عن:

- امتلاك الرخص والوثائق القانونية اللازمة
- صيانة مركباتهم والحفاظ عليها في حالة جيدة
- الالتزام بقوانين المرور والسلامة
- التصرف بشكل لائق ومحترم مع الركاب`,
 },
 {
 title: "9. حدود المسؤولية",
 content: `لا تتحمل MOVA المسؤولية عن:

- الأضرار الناتجة عن تصرفات السائقين أو الركاب
- انقطاع الخدمة أو التأخيرات الناجمة عن ظروف خارج سيطرة المنصة
- دقة معلومات الموقع الجغرافي أو وقت الوصول المقدر

في جميع الأحوال، تقتصر مسؤولية MOVA على الحد الأقصى المسموح به قانونياً`,
 },
 {
 title: "10. تعديل الشروط",
 content: `تحتفظ MOVA بالحق في تعديل هذه الشروط في أي وقت سيتم إشعار المستخدمين بأي تغييرات جوهرية عبر البريد الإلكتروني أو إشعار داخل التطبيق الاستمرار في استخدام المنصة بعد نشر التغييرات يُعدّ موافقة على الشروط المحدّثة`,
 },
 {
 title: "11. القانون المطبق وحل النزاعات",
 content: `تخضع هذه الشروط لقوانين جمهورية مصر العربية في حال نشوء أي نزاع، يُسعى أولاً لحله وداياً وإذا تعذّر ذلك، تختص المحاكم المختصة في [المدينة — يُكمل لاحقاً] بالفصل في النزاعات`,
 },
 {
 title: "12. التواصل",
 content: `لأي استفسارات تتعلق بهذه الشروط:

- البريد الإلكتروني: legal@mova.app
- العنوان: [عنوان الكيان القانوني — يُكمل لاحقاً]`,
 },
 ].map((section, i) => (
 <div key={i} className="animate-on-scroll">
 <h2 className="text-2xl font-almarai font-extrabold text-teal-900 mb-4">{section.title}</h2>
 <div className="text-ink-700 font-cairo leading-relaxed space-y-3">
 {section.content.trim().split("\n").map((line, j) => {
 if (line.trim().startsWith("- ")) {
 return (
 <p key={j} className="flex gap-2">
 <span className="text-amber-500 flex-shrink-0">•</span>
 <span>{line.substring(2)}</span>
 </p>
 );
 }
 if (line.trim() === "") return null;
 return <p key={j}>{line}</p>;
 })}
 </div>
 <div className="mt-6 border-b border-surface-dark" />
 </div>
 ))}

 <div className="p-6 bg-teal-50 rounded-2xl border border-teal-100 animate-on-scroll">
 <p className="text-ink-700 font-cairo text-sm leading-relaxed">
 إذا كان لديك أي استفسار حول هذه الشروط، يُرجى{" "}
 <Link href="/contact" className="text-teal-700 font-bold underline">
 التواصل معنا
 </Link>
 .
 </p>
 </div>
 </div>
 </div>
 </section>
 </main>
 <Footer />
 </ScrollAnimator>
 );
}
