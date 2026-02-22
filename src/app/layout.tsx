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
    default: "Core AI Solutions — AI Automation for Business Owners",
    template: "%s | Core AI Solutions",
  },
  description:
    "AI employees for your business. Voice AI, workflow automation, and done-for-you AI assistants that handle calls, follow up leads, and manage admin — 24/7. ACCA-qualified founder.",
  keywords: [
    "AI automation for business",
    "AI employee",
    "voice AI UK",
    "workflow automation",
    "n8n automation",
    "AI assistant for business",
    "SecondYou",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://coreaisolutions.co.uk",
    siteName: "Core AI Solutions",
    title: "Core AI Solutions — AI Employees for Business Owners",
    description:
      "AI automation that saves SMBs time and recovers revenue. Voice AI, workflow automation, and done-for-you AI assistants — 24/7.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Core AI Solutions — AI Employees for Business Owners",
    description:
      "AI automation that saves SMBs time and recovers revenue. Your calls answered. Your leads followed up. 24/7.",
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
              "@type": "LocalBusiness",
              name: "Core AI Solutions",
              url: "https://coreaisolutions.co.uk",
              description:
                "AI automation and AI employees for UK business owners.",
              founder: {
                "@type": "Person",
                name: "Manny Amoah",
              },
              areaServed: {
                "@type": "Country",
                name: "United Kingdom",
              },
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
