import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import GalleryViewer from "@/components/gallery/GalleryViewer";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Photo Gallery | Hospital Campuses, Treatments & Nature Sanctuary",
  description: "View photos of Kumar Nature Cure Hospital (Karur) and P.K. Hospital (Sengal, Karur): lush green campuses, patient rooms, mud therapy, spinal bath, and yoga hall.",
  alternates: {
    canonical: "/gallery",
  },
};

import Link from "next/link";
import { MapPin, Building2, Trees } from "lucide-react";

export default function GalleryPage() {
  return (
    <>
      <PageHeader 
        title="Photo Gallery" 
        breadcrumb={[{ name: "Gallery", path: "/gallery" }]} 
        bgImage="https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?q=80&w=2072&auto=format&fit=crop"
      />

      {/* Campus Switcher Sub-Navigation */}
      <section className="bg-white border-b border-gray-200 sticky top-[68px] sm:top-[72px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-center sm:justify-start gap-2 overflow-x-auto no-scrollbar">
            <Link
              href="/gallery"
              className="px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap bg-primary text-white shadow-sm flex items-center gap-1.5"
            >
              <MapPin size={14} className="text-secondary" />
              All Campuses
            </Link>
            <Link
              href="/gallery/kumar-nature-cure-hospital"
              className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap text-foreground/70 hover:bg-gray-100 flex items-center gap-1.5"
            >
              <Building2 size={14} />
              Kumar Nature Cure Hospital (Gandhigramam)
            </Link>
            <Link
              href="/gallery/pk-hospital"
              className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap text-foreground/70 hover:bg-gray-100 flex items-center gap-1.5"
            >
              <Trees size={14} />
              P.K. Hospital (Sengal 24-Acre Retreat)
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <GalleryViewer items={galleryItems} />
        </div>
      </section>
    </>
  );
}
