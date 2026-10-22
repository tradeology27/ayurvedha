import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/home/Services";
import TreatmentExplorer from "@/components/treatments/TreatmentExplorer";
import { Leaf, Smile, ShoppingBag, Sparkles, Phone, Calendar, HeartPulse, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Naturopathy Treatments | Authentic 5-Element Drugless Nature Cure in Karur",
  description: "Explore authentic drugless Naturopathy therapies at Kumar Nature Cure Hospital (KNCH), Karur: Full Body Mud Bath, Spinal Spray, Herbal Steam Bath, Acupuncture, Hydrotherapy & Clinical Yoga under Dr. C. Sukumar (BNYS).",
  alternates: {
    canonical: "/treatments/naturopathy",
  },
  openGraph: {
    title: "Naturopathy Treatments | Kumar Nature Cure Hospital (KNCH)",
    description: "Drugless 5-Element healing: Mud therapy, Hydrotherapy, Acupuncture, Steam bath, and Therapeutic fasting in Karur, Tamil Nadu.",
    url: "https://www.knchkarur.com/treatments/naturopathy",
    images: ["/images/kumar_hospital_main.jpg"],
  },
};

export default function NaturopathyTreatmentsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Kumar Nature Cure Hospital - Naturopathy Wing",
    "url": "https://www.knchkarur.com/treatments/naturopathy",
    "description": "Authentic drugless 5-element Naturopathy, Mud therapy, Hydrotherapy, and Yoga therapy supervised by Dr. C. Sukumar, BNYS.",
    "telephone": "+91 81481 29709",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shakthi Nagar, Gandhigramam",
      "addressLocality": "Karur",
      "addressRegion": "Tamil Nadu",
      "postalCode": "639004",
      "addressCountry": "IN"
    },
    "medicalSpecialty": ["Naturopathy", "Physiotherapy", "Dietetics"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHeader 
        title="Naturopathy Treatments" 
        breadcrumb={[
          { name: "Treatments", path: "/treatments" },
          { name: "Naturopathy", path: "/treatments/naturopathy" }
        ]} 
        bgImage="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop"
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
              className="px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap bg-primary text-white shadow-sm flex items-center gap-1.5"
            >
              <Leaf size={14} className="text-secondary" />
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
              className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap text-foreground/70 hover:bg-gray-100 flex items-center gap-1.5"
            >
              <ShoppingBag size={14} />
              KNCH Health Shop
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Banner */}
      <section className="py-12 bg-emerald-50/50 border-b border-emerald-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-primary text-xs font-bold uppercase tracking-wider">
              <Sparkles size={13} className="text-secondary" />
              Drugless Healing • Pancha Mahabhuta (5 Elements)
            </div>
            <h1 className="text-2xl sm:text-4xl font-heading font-bold text-primary">
              Scientific Nature Cure &amp; Lifestyle Medicine
            </h1>
            <p className="text-foreground/80 font-light text-sm sm:text-base leading-relaxed">
              At Kumar Nature Cure Hospital (KNCH), Karur, we treat the root cause of chronic diseases without chemical pharmaceuticals or invasive surgeries. By harmonizing Earth, Water, Fire, Air, and Ether, our treatments reactivate your body&apos;s natural self-healing vitality under Chief Medical Officer <strong>Dr. C. Sukumar (B.N.Y.S.)</strong>.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-primary">
                <CheckCircle2 size={16} className="text-secondary" />
                <span>Zero Side Effects</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-primary">
                <CheckCircle2 size={16} className="text-secondary" />
                <span>100% Doctor Supervised</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-primary">
                <CheckCircle2 size={16} className="text-secondary" />
                <span>OPD &amp; Inpatient Residential Stays</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Elements Core Breakdown */}
      <Services />

      {/* Interactive 10+ Natural Therapies Explorer */}
      <TreatmentExplorer />

      {/* Call To Action Banner */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <HeartPulse size={40} className="text-secondary mx-auto" />
          <h2 className="text-2xl sm:text-4xl font-heading font-bold">
            Ready to Begin Your Drugless Recovery Journey?
          </h2>
          <p className="text-white/80 font-light text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Consult Dr. C. Sukumar (B.N.Y.S.) at our Gandhigramam or Sengal campus. Available for walk-in outpatient consultations and residential retreat bookings.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-7 py-3.5 bg-secondary text-primary font-bold rounded-full text-xs sm:text-sm uppercase tracking-wider hover:bg-secondary/90 transition-all shadow-md flex items-center gap-2"
            >
              <Calendar size={15} /> Book Naturopathy Consultation
            </Link>
            <a
              href="tel:+918148129709"
              className="px-7 py-3.5 bg-white/10 border border-white/20 text-white font-bold rounded-full text-xs sm:text-sm uppercase tracking-wider hover:bg-white/20 transition-all shadow-md flex items-center gap-2"
            >
              <Phone size={15} /> Call: 81481 29709
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
