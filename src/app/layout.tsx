import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://coreaisolutions.co.uk"),
  title: {
    default: "Revenue Recovery Audit — Find Exactly Where Your Business Is Losing Money | Core AI Solutions",
    template: "%s | Core AI Solutions",
  },
  description:
    "Stop losing revenue to missed calls, dead leads & manual admin. Free AI Readiness Audit + £297 Revenue Recovery Audit. ACCA-qualified consultant shows you the exact £ your business is bleeding.",
  keywords: [
    "revenue recovery audit",
    "AI audit for business",
    "AI automation UK",
    "free AI audit",
    "business revenue leaks",
    "AI employee",
    "workflow automation",
    "ACCA qualified",
    "HireOnce",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://coreaisolutions.co.uk",
    siteName: "Core AI Solutions",
    title: "Revenue Recovery Audit — Find Exactly Where Your Business Is Losing Money",
    description:
      "Stop losing revenue to missed calls, dead leads & manual admin. ACCA-qualified consultant shows you the exact £ your business is bleeding and how AI fixes it.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revenue Recovery Audit — Find Where Your Business Is Losing Money",
    description:
      "Stop losing revenue to missed calls, dead leads & manual admin. Free AI audit + £297 deep dive with exact £ figures.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Core AI Solutions",
              url: "https://coreaisolutions.co.uk",
              description:
                "Revenue Recovery Audits for UK businesses. ACCA-qualified consultant finds exact £ amounts of revenue leaks, then deploys AI automation to fix them.",
              founder: {
                "@type": "Person",
                name: "Manny Amoah",
                jobTitle: "ACCA-Qualified AI Automation Consultant",
              },
              serviceType: ["Revenue Recovery Audit", "AI Automation", "HireOnce AI Employee", "Workflow Automation"],
              areaServed: [
                { "@type": "Country", "name": "United Kingdom" },
                { "@type": "Country", "name": "United States" },
              ],
              priceRange: "£297-£997",
              sameAs: [
                "https://www.linkedin.com/in/manny-amoah",
                "https://twitter.com/mannyamoah_",
                "https://www.youtube.com/@mannyamoah"
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "London",
                addressCountry: "GB",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans bg-white text-gray-800 antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
