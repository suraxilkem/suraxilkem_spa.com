import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import { GoogleTagManagerHead, GoogleTagManagerBody } from "@/components/analytics/GoogleTagManager";
import { buildMetadata, homeSeo } from "@/lib/seo/metadata";
import { siteConfig } from "@/config/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = buildMetadata(homeSeo);

export const viewport: Viewport = {
  themeColor: "#0F1E45",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <GoogleTagManagerHead gtmId={siteConfig.gtmId} />
        <OrganizationJsonLd />
      </head>
      <body>
        <GoogleTagManagerBody gtmId={siteConfig.gtmId} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
