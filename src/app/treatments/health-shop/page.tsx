import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import HealthShopShowcase from "@/components/treatments/HealthShopShowcase";
import { Leaf, Smile, ShoppingBag, Sparkles, Phone, MessageCircle, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "KNCH Health Shop | Pure Herbal Remedies, Organic Foods & Wellness Essentials Karur",
  description: "Doctor-recommended herbal remedies, organic cold-pressed oils, nutritional powders, natural therapy supplies & Satvik healthy foods at KNCH Health Shop, Gandhigramam, Karur.",
  alternates: {
    canonical: "/treatments/health-shop",
  },
  openGraph: {
    title: "KNCH Health Shop | Organic & Herbal Store Karur",
    description: "Doctor-prescribed herbal preparations, natural nutrition, and wellness gear in Karur.",
    url: "https://www.knchkarur.com/treatments/health-shop",
    images: ["/images/health_shop_hero.jpg"],
  },
};

export default function KNCHHealthShopPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "KNCH Health Shop",
    "url": "https://www.knchkarur.com/treatments/health-shop",
    "description": "Authentic organic wellness store providing herbal remedies, cold-pressed oils, health foods, and natural therapy accessories.",
    "telephone": "+91 81481 29709",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kumar Nature Cure Hospital, Shakthi Nagar, Gandhigramam",
      "addressLocality": "Karur",
      "addressRegion": "Tamil Nadu",
      "postalCode": "639004",
      "addressCountry": "IN"
    },
    "priceRange": "₹"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHeader 
        title="KNCH Organic Health Shop" 
        breadcrumb={[
          { name: "Treatments", path: "/treatments" },
          { name: "Health Shop", path: "/treatments/health-shop" }
        ]} 
        bgImage="/images/health_shop_hero.jpg"
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
              className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap text-foreground/70 hover:bg-gray-100 flex items-center gap-1.5"
            >
              <Smile size={14} />
              Dental Care Clinic
            </Link>
            <Link
              href="/treatments/health-shop"
              className="px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap bg-primary text-white shadow-sm flex items-center gap-1.5"
            >
              <ShoppingBag size={14} className="text-secondary" />
              KNCH Health Shop
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Banner */}
      <section className="py-12 bg-amber-50/50 border-b border-amber-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <Sparkles size={13} className="text-secondary" />
              100% Authentic • Preservative-Free • Doctor Approved
            </div>
            <h1 className="text-2xl sm:text-4xl font-heading font-bold text-primary">
              Pure Natural Nutrition &amp; Therapeutic Wellness Essentials
            </h1>
            <p className="text-foreground/80 font-light text-sm sm:text-base leading-relaxed">
              Located within our Gandhigramam hospital premises, the <strong>KNCH Health Shop</strong> curates premium doctor-certified natural remedies, pure cold-pressed edible &amp; massage oils, unadulterated herbal juices, organic millets, and therapy equipment for your ongoing home wellness regimen.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-primary">
                <CheckCircle2 size={16} className="text-secondary" />
                <span>Zero Artificial Additives &amp; Preservatives</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-primary">
                <CheckCircle2 size={16} className="text-secondary" />
                <span>Doctor Recommended Formulations</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-primary">
                <CheckCircle2 size={16} className="text-secondary" />
                <span>In-Store Purchase &amp; Parcel Assistance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Health Shop Showcase Component */}
      <HealthShopShowcase />

      {/* Direct Order Enquiry CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <ShoppingBag size={40} className="text-secondary mx-auto" />
          <h2 className="text-2xl sm:text-4xl font-heading font-bold">
            Looking for Specific Natural Remedies or Herbal Products?
          </h2>
          <p className="text-white/80 font-light text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Visit the store at our Gandhigramam hospital reception or message our pharmacy team directly via WhatsApp to enquire about product availability and usage guidelines.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="https://wa.me/918148129709?text=Hello%20KNCH!%20I%20would%20like%20to%20enquire%20about%20products%20at%20the%20Health%20Shop."
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-[#25D366] text-white font-bold rounded-full text-xs sm:text-sm uppercase tracking-wider hover:bg-[#20bd5a] transition-all shadow-md flex items-center gap-2"
            >
              <MessageCircle size={15} /> WhatsApp Shop Enquiry
            </a>
            <a
              href="tel:+918148129709"
              className="px-7 py-3.5 bg-white/10 border border-white/20 text-white font-bold rounded-full text-xs sm:text-sm uppercase tracking-wider hover:bg-white/20 transition-all shadow-md flex items-center gap-2"
            >
              <Phone size={15} /> Call Store: 81481 29709
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
