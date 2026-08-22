import type { Metadata } from "next";
import { Cairo, Almarai, Space_Grotesk } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
 subsets: ["arabic", "latin"],
 variable: "--font-cairo",
 weight: ["400", "500", "600", "700", "800"],
 display: "swap",
});

const almarai = Almarai({
 subsets: ["arabic"],
 variable: "--font-almarai",
 weight: ["400", "700", "800"],
 display: "swap",
});

const spaceGrotesk = Space_Grotesk({
 subsets: ["latin"],
 variable: "--font-grotesk",
 weight: ["500", "600", "700"],
 display: "swap",
});

export const metadata: Metadata = {
 title: "MOVA — تنقّل بسهولة تحرّك بثقة",
 description:
 "MOVA هي منصة تقنية تساعد الركاب على طلب خدمات التنقل والتواصل مع السائقين من خلال تطبيق بسيط وواضح",
 keywords: ["MOVA", "تطبيق مواصلات", "ركوب", "سيارة أجرة", "مصر", "ride-hailing"],
 openGraph: {
 title: "MOVA — تنقّل بسهولة تحرّك بثقة",
 description:
 "من طلب الرحلة إلى الوصول، تساعدك MOVA على إدارة تجربة تنقلك من خلال تطبيق بسيط وواضح",
 type: "website",
 locale: "ar_EG",
 },
 twitter: {
 card: "summary_large_image",
 title: "MOVA — تنقّل بسهولة تحرّك بثقة",
 description: "منصة تقنية لخدمات التنقل طلب الرحلة، متابعة التفاصيل، والوصول بسهولة",
 },
 robots: {
 index: true,
 follow: true,
 },
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
 <html
 lang="ar"
 dir="rtl"
 className={`${cairo.variable} ${almarai.variable} ${spaceGrotesk.variable}`}
 >
 <body className="font-cairo bg-surface text-ink-900 antialiased">{children}</body>
 </html>
 );
}
