import type { Metadata } from "next";
import "./globals.css";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "BTL Audit AI – Billboard & Signage Compliance",
  description: "AI compliance for billboards & retail signage across India."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleTagManager gtmId="GTM-MM5PWB94" />
      <GoogleAnalytics gaId="G-M6HMK9JLLG" />
    </html>
  );
}
