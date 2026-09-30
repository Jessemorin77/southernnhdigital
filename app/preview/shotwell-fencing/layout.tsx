import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shotwell Fencing — Thomasville, NC",
  description:
    "Shotwell Fencing — Family-owned fencing, decks, pergolas, and custom welding in Thomasville, High Point, Lexington, and the Triad.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ShotwellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
