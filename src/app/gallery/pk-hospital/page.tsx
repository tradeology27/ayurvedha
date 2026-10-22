import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import GalleryViewer from "@/components/gallery/GalleryViewer";
import { galleryItems } from "@/data/gallery";
import { MapPin, Phone, Sparkles, Trees } from "lucide-react";

export const metadata: Metadata = {
  title: "P.K. Hospital 24-Acre Greenery Retreat Photos | Sengal, Karur",
  description: "View photos of P.K. Hospital Nature Cure, Yoga & Dental Sanctuary at Karur - Sengal Rd, Sengal: 24 acres of peaceful greenery, stone cottages, patient rooms, and drone campus views.",
  alternates: {
    canonical: "/gallery/pk-hospital",
  },
  openGraph: {
    title: "P.K. Hospital 24-Acre Nature Sanctuary Photos | Sengal Karur",
    description: "Explore photos of the 24 acres residential nature cure hospital, cottages, and green oxygen-rich campus at Sengal, Karur.",
    url: "https://www.knchkarur.com/gallery/pk-hospital",
    images: ["/images/pk_hospital_green_campus.jpg"],
  },
};

export default function PKHospitalGalleryPage() {
  const pkItems = galleryItems.filter((i) => i.category === "P.K. Hospital");

  return (
    <>
      <PageHeader 
        title="P.K. Hospital Nature Sanctuary Photos" 
        breadcrumb={[
          { name: "Gallery", path: "/gallery" },
          { name: "P.K. Hospital", path: "/gallery/pk-hospital" }
        ]} 
        bgImage="/images/pk_hospital_green_campus.jpg"
      />

      {/* Campus Switcher Sub-Navigation */}
      <section className="bg-white border-b border-gray-200 sticky top-[68px] sm:top-[72px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-center sm:justify-start gap-2 overflow-x-auto no-scrollbar">
            <Link
              href="/gallery"
              className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap text-foreground/70 hover:bg-gray-100"
            >
              All Campuses
            </Link>
            <Link
              href="/gallery/kumar-nature-cure-hospital"
              className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap text-foreground/70 hover:bg-gray-100 flex items-center gap-1.5"
            >
              <MapPin size={14} />
              Kumar Nature Cure Hospital (Gandhigramam)
            </Link>
            <Link
              href="/gallery/pk-hospital"
              className="px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap bg-primary text-white shadow-sm flex items-center gap-1.5"
            >
              <Trees size={14} className="text-secondary" />
              P.K. Hospital (Sengal 24-Acre Retreat)
            </Link>
          </div>
        </div>
      </section>

      {/* Campus Introduction */}
      <section className="py-10 bg-emerald-50/40 border-b border-emerald-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-primary text-xs font-bold uppercase tracking-wider">
              <Sparkles size={13} className="text-secondary" />
              24-Acre Nature Retreat &amp; Inpatient Sanctuary • Sengal, Karur • Est. 2017
            </div>
            <h1 className="text-2xl sm:text-4xl font-heading font-bold text-primary">
              P.K. Hospital 24-Acre Greenery Campus Gallery
            </h1>
            <p className="text-foreground/80 font-light text-sm sm:text-base leading-relaxed">
              Experience the tranquility of our residential healing haven on Karur - Sengal Road. Featuring single-story stone-clad cottages, lush gardens, walking pathways, dedicated yoga pavilion, satvik dining hall, and complete dental clinic.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <GalleryViewer items={pkItems} />
        </div>
      </section>

      {/* Campus Details Banner */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-4">
            <h3 className="text-xl font-heading font-bold text-primary flex items-center gap-2">
              <MapPin size={20} className="text-secondary" />
              P.K. Hospital Campus Visit &amp; Residential Admission
            </h3>
            <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-light">
              <strong>Address:</strong> P.K.Hospital Nature cure -Yoga-Dental, Karur - Sengal Rd, Sengal, Tamil Nadu 639102, India. A 24-acre pollution-free residential sanctuary.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-semibold">
              <a
                href="tel:+917708329709"
                className="px-5 py-2.5 bg-primary text-white rounded-full flex items-center gap-1.5 hover:bg-primary/90 transition-all shadow-sm"
              >
                <Phone size={13} /> Call PK Reception: 77083 29709
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=P.K.Hospital+Nature+cure+-Yoga-Dental,+Karur+-+Sengal+Rd,+Sengal,+Tamil+Nadu+639102"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-white border border-gray-300 text-foreground/80 rounded-full flex items-center gap-1.5 hover:bg-gray-50 transition-all"
              >
                <MapPin size={13} className="text-secondary" /> Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
