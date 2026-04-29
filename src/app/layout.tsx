import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Phytoroot Extracts | Ayurvedic Cannabis Products",
  description: "World-class Ayurvedic cannabis products from Bharat. Schedule E(1) compliant. Prescription required.",
  keywords: "Ayurvedic, Cannabis, Vijaya, Phytoroot, Hemp, CBD, India, Ayush",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
