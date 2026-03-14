import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MobileStickyCta from "./components/layout/MobileStickyCta";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Granite State Auto Repair | Manchester, NH",
  description:
    "Honest, expert auto repair in Manchester, NH. ASE Certified mechanics, 24-month warranty, and fair prices. Oil changes, brakes, diagnostics & more.",
};

export default function AutoDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${dmSerif.variable} ${dmSans.variable} font-sans bg-white text-gray-900`}
      style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}
    >
      <Header />
      <main className="pb-16 lg:pb-0">{children}</main>
      <Footer />
      <MobileStickyCta />
    </div>
  );
}
