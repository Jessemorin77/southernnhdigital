import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Southern NH Digital | Web Design & Google Optimization for Local Businesses",
  description:
    "We help local service businesses in Southern New Hampshire get found online, get more calls, and stop losing customers to competitors. Free online audit.",
  keywords: "web design Manchester NH, Google optimization, local business websites, Southern New Hampshire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
