import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YSWS Growth Firm",
  description: "Institutional-grade systems for high-capacity leaders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
