import { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { getSEOPageBySlug, getAllSEOSlugs } from "@/data/seoPages";
import SEOPageContent from "@/components/seo/SEOPageContent";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return getAllSEOSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = getSEOPageBySlug(params.slug);

  if (!page) {
    return {
      title: "Page Not Found | Kumar Nature Cure Hospital",
      description: "Explore authentic nature cure, yoga therapy, and advanced dental care at Kumar Nature Cure Hospital Karur.",
    };
  }

  const canonicalUrl = `https://www.knchkarur.com/${params.slug}`;

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: canonicalUrl,
      siteName: "Kumar Nature Cure Hospital (KNCH)",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: page.heroImage || "/images/knch_full_logo.jpg",
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [page.heroImage || "/images/knch_full_logo.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
  };
}

export default function DynamicRootSEOPage({ params }: PageProps) {
  const page = getSEOPageBySlug(params.slug);

  if (!page) {
    notFound();
  }

  const baseUrl = "https://www.knchkarur.com";
  const currentUrl = `${baseUrl}/${params.slug}`;

  // Hospital Schema (Strictly Authentic Karur Address)
  const hospitalSchema = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "@id": `${currentUrl}#hospital`,
    name: "Kumar Nature Cure Hospital (KNCH)",
    alternateName: ["KNCH Karur", "P.K.Hospital Nature cure -Yoga-Dental", "குமார் இயற்கை மற்றும் பல் மருத்துவமனை"],
    url: currentUrl,
    logo: `${baseUrl}/images/knch_full_logo.jpg`,
    image: `${baseUrl}${page.heroImage}`,
    description: page.metaDescription,
    telephone: "+91-81481-29709",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shakthi Nagar, Gandhigramam, Trichy National Highway",
      addressLocality: "Karur",
      addressRegion: "Tamil Nadu",
      postalCode: "639004",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "10.9574",
      longitude: "78.0847",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "09:30",
        closes: "13:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "17:00",
        closes: "20:30",
      },
    ],
    medicalSpecialty: [
      "Naturopathy",
      "Yoga Therapy",
      "Acupuncture",
      "Hydrotherapy",
      "Diet Therapy",
      "Dentistry",
    ],
    availableService: page.featuredTreatments.map((t) => ({
      "@type": "MedicalTherapy",
      name: t,
    })),
    department: [
      {
        "@type": "Dentist",
        name: "Kumar Hospital Dental Wing",
        telephone: "+91-73737-29709",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Kumar Nature Cure Hospital, Shakthi Nagar, Gandhigramam",
          addressLocality: "Karur",
          addressRegion: "Tamil Nadu",
          postalCode: "639004",
          addressCountry: "IN",
        },
        founder: {
          "@type": "Person",
          name: "Dr. M. Anitha Sukumar, BDS",
          jobTitle: "Senior Dental Specialist",
        },
      },
    ],
    founder: {
      "@type": "Person",
      name: "Dr. C. Sukumar, BNYS",
      jobTitle: "Founder & Chief Medical Officer",
      alumniOf: "The Tamil Nadu Dr. M.G.R. Medical University, Chennai",
    },
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  // Breadcrumb Schema (Home > Current Page, NO "Locations")
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.title,
        item: currentUrl,
      },
    ],
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <Script
        id={`hospital-schema-${page.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalSchema) }}
      />
      <Script
        id={`faq-schema-${page.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id={`breadcrumb-schema-${page.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SEOPageContent pageData={page} />
    </>
  );
}
