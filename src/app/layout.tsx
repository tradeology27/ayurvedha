import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kumarnaturecure.com'),
  title: {
    default: "Kumar Nature Cure Hospital (KNCH) | Karur, Tamil Nadu",
    template: "%s | Kumar Nature Cure Hospital"
  },
  description: "Established in 2003 at Shakthi Nagar, Gandhigramam, Karur. 10,000 sq.ft serene greenery campus offering specialized Naturopathy, Mud therapy, Hydrotherapy, Yoga, and Plantain-Leaf bath.",
  keywords: ["Naturopathy Hospital Karur", "Kumar Nature Cure", "KNCH", "Yoga Therapy", "Mud Therapy", "Hydrotherapy", "Nature Cure Tamil Nadu", "Drugless Healing"],
  authors: [{ name: "Dr. C. Sukumar" }, { name: "Dr. M. Anitha Sukumar" }],
  creator: "Kumar Nature Cure Hospital",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.kumarnaturecure.com",
    title: "Kumar Nature Cure Hospital | Drugless Healing in Karur",
    description: "10,000 sq.ft serene greenery campus offering specialized Naturopathy, Mud therapy, Hydrotherapy, and Yoga.",
    siteName: "Kumar Nature Cure Hospital",
    images: [
      {
        url: "/images/knch_full_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kumar Nature Cure Hospital Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumar Nature Cure Hospital | Karur",
    description: "Specialized Naturopathy, Mud therapy, Hydrotherapy, and Yoga in a 10,000 sq.ft green campus.",
    images: ["/images/knch_full_logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.jpg',
    shortcut: '/icon.jpg',
    apple: '/icon.jpg',
  },
};

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased flex flex-col min-h-screen bg-background text-foreground`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <WhatsAppButton />

        {/* Google Translate Scripts */}
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="lazyOnload"
        />
        <Script id="google-translate-init" strategy="lazyOnload">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement(
                { pageLanguage: 'en', includedLanguages: 'en,ta,hi,ml,te', layout: google.translate.TranslateElement.InlineLayout.SIMPLE },
                'google_translate_element'
              );
            }
          `}
        </Script>
      </body>
    </html>
  );
}
