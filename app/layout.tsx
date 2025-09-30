import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BTL Audit AI – Billboard & Signage Compliance",
  description: "AI compliance for billboards & retail signage across India."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
