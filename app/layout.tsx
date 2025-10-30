import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wat Scheelt Het? | PVV vs D66 Verkiezingen 2025",
  description: "Live tussenstand van de spannende strijd tussen PVV en D66 bij de Tweede Kamerverkiezingen 2025. D66 15.155 stemmen voorsprong!",
  keywords: ["verkiezingen", "PVV", "D66", "tweede kamer", "2025", "Nederland", "stemmen", "uitslag"],
  authors: [{ name: "Joost Kamstra" }],
  openGraph: {
    title: "Wat Scheelt Het? | PVV vs D66",
    description: "De spanning stijgt! Volg live het minimale verschil tussen PVV en D66 bij de verkiezingen.",
    url: "https://watscheelthet.nl",
    siteName: "Wat Scheelt Het",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PVV vs D66 verkiezingsuitslagen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wat Scheelt Het? | PVV vs D66",
    description: "Live tussenstand verkiezingen: PVV vs D66 - minimaal verschil!",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
