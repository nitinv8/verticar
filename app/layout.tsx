import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VertiCar — Community Mobility for Premium Societies",
  description:
    "A shared, trusted car + dedicated driver for families in premium residential societies in Gurgaon. Not a cab. Your community's asset.",
  keywords: "community car, premium society, Gurgaon, DLF Phase 5, shared mobility, trusted driver",
  openGraph: {
    title: "VertiCar — Your community's car. Your trusted driver.",
    description:
      "Membership-based mobility for families in premium societies. Office commutes, school runs, grandparent errands — all sorted.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
