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
    default: "Core AI Solutions — AI Receptionist for UK Businesses",
    template: "%s | Core AI Solutions",
  },
  description:
    "Stop losing £2,000/month to missed calls. AI receptionist that answers every call, qualifies leads, and books jobs — 24/7. Built for plumbers, estate agents, and home service businesses across the UK.",
  keywords: [
    "AI receptionist for plumbers UK",
    "voice AI for estate agents",
    "AI phone answering UK",
    "AI receptionist UK",
    "automated call handling",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://coreaisolutions.co.uk",
    siteName: "Core AI Solutions",
    title: "Core AI Solutions — AI Receptionist for UK Businesses",
    description:
      "Stop losing £2,000/month to missed calls. AI receptionist that answers every call, qualifies leads, and books jobs — 24/7.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Core AI Solutions — AI Receptionist for UK Businesses",
    description:
      "Stop losing £2,000/month to missed calls. AI receptionist that answers every call 24/7.",
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
                "AI receptionist and automation systems for UK small businesses.",
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
