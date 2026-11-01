import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono-next",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Memora — AI-Powered Digital Memory & Legacy Platform",
  description:
    "Memora helps verified, authorized family members preserve and interact with an AI representation of a deceased loved one using authenticated personal materials and archival records. An ethical, privacy-conscious memorial platform.",
  keywords: [
    "digital legacy",
    "AI memorial",
    "memory preservation",
    "family heritage",
    "ethical AI",
    "RAG memory platform",
  ],
  authors: [{ name: "Memora Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Memora — AI-Powered Digital Memory & Legacy Platform",
    description:
      "An ethical, privacy-conscious platform for preserving and interacting with AI representations of loved ones.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07090e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
