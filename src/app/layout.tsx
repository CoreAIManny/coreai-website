import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://coreaisolutions.co.uk"),
  title: {
    default: "Core AI Solutions — Free AI Audit | Find Hidden Costs in Your Business",
    template: "%s | Core AI Solutions",
  },
  description:
    "Free AI audit for UK businesses. We find the hidden costs, missed revenue, and wasted hours in your operations — then show you exactly how AI fixes them. ACCA-qualified consultant.",
  keywords: [
    "AI audit for business",
    "AI automation UK",
    "free AI audit",
    "business efficiency audit",
    "AI employee",
    "workflow automation",
    "n8n automation",
    "OpenClaw deployment",
    "HireOnce",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://coreaisolutions.co.uk",
    siteName: "Core AI Solutions",
    title: "Core AI Solutions — Free AI Audit | Find Hidden Costs in Your Business",
    description:
      "Free AI audit that uncovers hidden costs and missed revenue in your business. ACCA-qualified consultant shows you exactly where AI saves you money.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Core AI Solutions — Free AI Audit | Find Hidden Costs in Your Business",
    description:
      "Free AI audit that uncovers hidden costs and missed revenue. Your business is leaking money — we show you where and how AI fixes it.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
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
                "Free AI audits for UK businesses. ACCA-qualified consultant finds hidden costs, missed revenue, and wasted hours — then deploys AI automation to fix them.",
              founder: {
                "@type": "Person",
                name: "Manny Amoah",
                jobTitle: "ACCA-Qualified AI Automation Consultant",
              },
              serviceType: ["AI Audit", "AI Automation", "OpenClaw Deployment", "Workflow Automation", "Voice AI"],
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
        className={`${inter.variable} ${playfair.variable} font-sans bg-[#0e0e10] text-white antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
