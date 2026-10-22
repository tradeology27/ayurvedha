import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import DentalShowcase from "@/components/treatments/DentalShowcase";
import { Leaf, Smile, ShoppingBag, Sparkles, Phone, Calendar, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Dental Care Clinic | Dr. M. Anitha Sukumar BDS | Kumar Hospital Karur",
  description: "Advanced family dental clinic at Kumar Hospital, Karur led by Dr. M. Anitha Sukumar (BDS). Painless root canals, laser dentistry, teeth cleaning, dental aligners, braces & smile designing.",
  alternates: {
    canonical: "/treatments/dental",
  },
  openGraph: {
    title: "Dental Care Clinic | Kumar Hospital Karur",
    description: "Gentle, sterile and advanced dental treatments in Karur under Dr. M. Anitha Sukumar (BDS).",
    url: "https://www.knchkarur.com/treatments/dental",
    images: ["/images/dental_hero.jpg"],
  },
};

export default function DentalCareClinicPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Kumar Hospital Dental Wing",
    "url": "https://www.knchkarur.com/treatments/dental",
    "description": "Comprehensive dental care clinic in Karur offering painless root canals, teeth cleaning, orthodontic braces, dental aligners, and cosmetic dentistry.",
    "telephone": "+91 73737 29709",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kumar Nature Cure Hospital, Shakthi Nagar, Gandhigramam",
      "addressLocality": "Karur",
      "addressRegion": "Tamil Nadu",
      "postalCode": "639004",
      "addressCountry": "IN"
    },
    "founder": {
      "@type": "Person",
      "name": "Dr. M. Anitha Sukumar",
      "jobTitle": "Dental Surgeon",
      "honorificSuffix": "BDS"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHeader 
        title="Dental Care Clinic" 
        breadcrumb={[
          { name: "Treatments", path: "/treatments" },
          { name: "Dental Care", path: "/treatments/dental" }
        ]} 
        bgImage="/images/dental_hero.jpg"
      />

      {/* Department Navigation Bar */}
      <section className="bg-white border-b border-gray-200 sticky top-[68px] sm:top-[72px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-center sm:justify-start gap-2 overflow-x-auto no-scrollbar">
            <Link
              href="/treatments"
              className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap text-foreground/70 hover:bg-gray-100"
            >
              All Overview
            </Link>
            <Link
              href="/treatments/naturopathy"
              className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap text-foreground/70 hover:bg-gray-100 flex items-center gap-1.5"
            >
              <Leaf size={14} />
              Naturopathy Treatments
            </Link>
            <Link
              href="/treatments/dental"
              className="px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap bg-primary text-white shadow-sm flex items-center gap-1.5"
            >
              <Smile size={14} className="text-secondary" />
              Dental Care Clinic
            </Link>
            <Link
              href="/treatments/health-shop"
              className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap text-foreground/70 hover:bg-gray-100 flex items-center gap-1.5"
            >
              <ShoppingBag size={14} />
              KNCH Health Shop
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Banner */}
      <section className="py-12 bg-sky-50/50 border-b border-sky-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-primary text-xs font-bold uppercase tracking-wider">
              <Sparkles size={13} className="text-secondary" />
              20+ Years Clinical Dentistry • 100% Sterile Environment
            </div>
            <h1 className="text-2xl sm:text-4xl font-heading font-bold text-primary">
              Gentle, Advanced &amp; Painless Oral Healthcare
            </h1>
            <p className="text-foreground/80 font-light text-sm sm:text-base leading-relaxed">
              Led by Senior Dental Specialist <strong>Dr. M. Anitha Sukumar (B.D.S.)</strong>, our dedicated dental wing provides world-class preventive, restorative, and aesthetic dental treatments in a calming, hygienic environment on Trichy Highway, Gandhigramam, Karur.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-primary">
                <CheckCircle2 size={16} className="text-secondary" />
                <span>Painless Single-Sitting Root Canals</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-primary">
                <CheckCircle2 size={16} className="text-secondary" />
                <span>Invisible Aligners &amp; Metal/Ceramic Braces</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-primary">
                <CheckCircle2 size={16} className="text-secondary" />
                <span>Laser Scaling &amp; Kids Dentistry</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Dental Showcase Component */}
      <DentalShowcase />

      {/* Direct Booking CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <ShieldCheck size={40} className="text-secondary mx-auto" />
          <h2 className="text-2xl sm:text-4xl font-heading font-bold">
            Need Dental Treatment or Toothache Relief?
          </h2>
          <p className="text-white/80 font-light text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Walk in during consultation hours or book an advance appointment with Dr. M. Anitha Sukumar (B.D.S.) for a thorough oral examination and personalized treatment plan.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/contact?doctor=Dr.%20M.%20Anitha%20Sukumar"
              className="px-7 py-3.5 bg-secondary text-primary font-bold rounded-full text-xs sm:text-sm uppercase tracking-wider hover:bg-secondary/90 transition-all shadow-md flex items-center gap-2"
            >
              <Calendar size={15} /> Book Dental Consultation
            </Link>
            <a
              href="tel:+917373729709"
              className="px-7 py-3.5 bg-white/10 border border-white/20 text-white font-bold rounded-full text-xs sm:text-sm uppercase tracking-wider hover:bg-white/20 transition-all shadow-md flex items-center gap-2"
            >
              <Phone size={15} /> Call Dental Clinic: 73737 29709
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
