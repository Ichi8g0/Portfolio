import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahmoud — Full-Stack Developer & Product Builder",
  description:
    "Mahmoud is a full-stack developer, backend specialist, and product/brand designer building backend-first products — from architecture to brand — for founders who need more than a freelancer.",
  keywords: [
    "full-stack developer",
    "backend specialist",
    "product designer",
    "brand designer",
    "freelance developer",
    "MVP development",
    "backend architecture",
  ],
  authors: [{ name: "Mahmoud" }],
  openGraph: {
    title: "Mahmoud — Full-Stack Developer & Product Builder",
    description:
      "I build backend-first products — from architecture to brand, for founders who need more than a freelancer.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-ink text-bone antialiased selection:bg-ember selection:text-ink">
        {children}
      </body>
    </html>
  );
}
