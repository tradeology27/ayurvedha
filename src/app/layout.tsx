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
    template: "%s | Kumar Nature Cure Hospital (KNCH)"
  },
  description: "Established in 2003 at Gandhigramam, Karur. 10,000 sq.ft serene greenery campus offering specialized Naturopathy, Mud therapy, Hydrotherapy, Yoga & Diet therapy. Drugless healing by Dr. C. Sukumar & Dr. M. Anitha Sukumar.",
  keywords: [
    "Kumar Nature Cure Hospital",
    "KNCH Karur",
    "P.K. Hospital Kulithalai",
    "Naturopathy Hospital Karur",
    "Nature Cure Hospital Tamil Nadu",
    "Best Naturopathy Center Tamil Nadu",
    "Mud Therapy Karur",
    "Hydrotherapy Karur",
    "Yoga Therapy Hospital",
    "Plantain Leaf Bath Karur",
    "Dr C Sukumar Naturopathy",
    "Dr M Anitha Sukumar",
    "Drugless Healing Hospital",
    "Ayurveda and Naturopathy Karur",
    "Diet Therapy Tamil Nadu",
    "இயற்கை மருத்துவமனை கரூர்"
  ],
  authors: [{ name: "Dr. C. Sukumar, BNYS" }, { name: "Dr. M. Anitha Sukumar, BDS, DNYS" }],
  creator: "Kumar Nature Cure Hospital",
  publisher: "Kumar Nature Cure Hospital",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.kumarnaturecure.com",
    title: "Kumar Nature Cure Hospital (KNCH) | Karur, Tamil Nadu",
    description: "10,000 sq.ft serene greenery campus offering specialized Naturopathy, Mud therapy, Hydrotherapy, and Yoga. Drugless healing since 2003.",
    siteName: "Kumar Nature Cure Hospital",
    images: [
      {
        url: "/images/knch_full_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kumar Nature Cure Hospital - Logo & Campus",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumar Nature Cure Hospital | Drugless Healing in Karur",
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
  category: "Medical & Health",
};

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "@id": "https://www.kumarnaturecure.com/#hospital",
    "name": "Kumar Nature Cure Hospital",
    "alternateName": ["KNCH", "P.K. Hospital", "Kumar Naturopathy Hospital"],
    "url": "https://www.kumarnaturecure.com",
    "logo": "https://www.kumarnaturecure.com/images/knch_full_logo.jpg",
    "image": "https://www.kumarnaturecure.com/images/knch_main_campus.jpg",
    "description": "Established in 2003 at Gandhigramam, Karur. 10,000 sq.ft serene greenery campus offering specialized Naturopathy, Mud therapy, Hydrotherapy, Yoga and Diet therapy.",
    "telephone": "+91 94433 34220",
    "priceRange": "₹₹",
    "medicalSpecialty": [
      "Physiotherapy",
      "Dietetics"
    ],
    "availableService": [
      { "@type": "MedicalTherapy", "name": "Naturopathy & Drugless Healing" },
      { "@type": "MedicalTherapy", "name": "Mud Therapy & Mud Bath" },
      { "@type": "MedicalTherapy", "name": "Hydrotherapy & Spinal Spray" },
      { "@type": "MedicalTherapy", "name": "Plantain Leaf Sun Bath" },
      { "@type": "MedicalTherapy", "name": "Therapeutic Yoga & Pranayama" },
      { "@type": "MedicalTherapy", "name": "Diet Therapy & Natural Nutrition" }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shakthi Nagar, Gandhigramam",
      "addressLocality": "Karur",
      "addressRegion": "Tamil Nadu",
      "postalCode": "639004",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.9574,
      "longitude": 78.0809
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "06:00",
        "closes": "21:00"
      }
    ],
    "founder": [
      {
        "@type": "Person",
        "name": "Dr. C. Sukumar",
        "jobTitle": "Chief Medical Officer & Founder",
        "honorificSuffix": "BNYS"
      },
      {
        "@type": "Person",
        "name": "Dr. M. Anitha Sukumar",
        "jobTitle": "Dental Specialist & Naturopath",
        "honorificSuffix": "BDS, DNYS"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Karur" />
        <meta name="geo.position" content="10.9574;78.0809" />
        <meta name="ICBM" content="10.9574, 78.0809" />
      </head>
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
