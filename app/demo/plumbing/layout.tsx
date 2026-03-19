import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MobileStickyCta from "./components/layout/MobileStickyCta";

const montserrat = Montserrat({
  variable: "--font-plumbing-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-plumbing-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Granite Plumbing & Home Services | Manchester, NH",
  description:
    "Licensed plumber in Manchester, NH. Plumbing repair, drain cleaning, water heaters, bathroom remodeling, HVAC & 24/7 emergency service. 4.8 stars, 310+ reviews.",
};

export default function PlumbingDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${montserrat.variable} ${sourceSans.variable} bg-white text-gray-800`}
      style={{ fontFamily: "var(--font-plumbing-body), system-ui, sans-serif" }}
    >
      <Header />
      <main className="pb-16 lg:pb-0">{children}</main>
      <Footer />
      <MobileStickyCta />
    </div>
  );
}
