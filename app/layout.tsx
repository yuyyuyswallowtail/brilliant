import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CustomCursor } from "@/components/custom-cursor";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const title = "BRILLIANT — Digital Products, Designed & Built";
const description =
  "BRILLIANT is a digital product studio. We design and build products for ambitious teams that want clarity, speed and substance.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/", siteName: "BRILLIANT", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <CustomCursor />
      </body>
    </html>
  );
}
