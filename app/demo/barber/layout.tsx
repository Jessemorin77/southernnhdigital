import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MobileStickyCta from "./components/layout/MobileStickyCta";

const playfair = Playfair_Display({
  variable: "--font-barber-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-barber-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Elm Street Barber Co. | Manchester, NH",
  description:
    "Premium barbershop in Manchester, NH. Precision fades, straight razor shaves, beard work & more. 4.9 stars from 185+ reviews. Book your appointment today.",
};

export default function BarberDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${playfair.variable} ${inter.variable}`}
      style={{
        fontFamily: "var(--font-barber-body), system-ui, sans-serif",
        background: "#0A0A0A",
        color: "#E8E4DF",
      }}
    >
      <Header />
      <main className="pb-16 lg:pb-0">{children}</main>
      <Footer />
      <MobileStickyCta />
    </div>
  );
}
