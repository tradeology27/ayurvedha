import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import GalleryViewer from "@/components/gallery/GalleryViewer";
import { galleryItems } from "@/data/gallery";
import { MapPin, Phone, Sparkles, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Kumar Nature Cure Hospital Campus Photos | Gandhigramam, Karur",
  description: "View authentic photos of Kumar Nature Cure Hospital (KNCH) at Gandhigramam, Karur: Reception, patient AC/Twin-bed rooms, Mud bath, Hydrotherapy spinal tubs, Steam bath, Natural Store, and Yoga hall.",
  alternates: {
    canonical: "/gallery/kumar-nature-cure-hospital",
  },
  openGraph: {
    title: "KNCH Gandhigramam Campus Photos | Karur",
    description: "Explore photos of the 10,000 sq.ft clinical nature cure hospital and patient rooms at Gandhigramam, Karur.",
    url: "https://www.knchkarur.com/gallery/kumar-nature-cure-hospital",
    images: ["/images/gallery/knch/C9126T01.JPG"],
  },
};

export default function KNCHGalleryPage() {
  const knchItems = galleryItems.filter((i) => i.category === "Kumar Nature Cure Hospital");

  return (
    <>
      <PageHeader 
        title="Kumar Nature Cure Hospital Photos" 
        breadcrumb={[
          { name: "Gallery", path: "/gallery" },
          { name: "KNCH Campus", path: "/gallery/kumar-nature-cure-hospital" }
        ]} 
        bgImage="/images/gallery/knch/C9126T01.JPG"
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
              className="px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap bg-primary text-white shadow-sm flex items-center gap-1.5"
            >
              <Building2 size={14} className="text-secondary" />
              Kumar Nature Cure Hospital (Gandhigramam)
            </Link>
            <Link
              href="/gallery/pk-hospital"
              className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap text-foreground/70 hover:bg-gray-100 flex items-center gap-1.5"
            >
              <MapPin size={14} />
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
              Main Clinical Center • Gandhigramam, Karur • Est. 2003
            </div>
            <h1 className="text-2xl sm:text-4xl font-heading font-bold text-primary">
              Kumar Nature Cure Hospital Campus Gallery
            </h1>
            <p className="text-foreground/80 font-light text-sm sm:text-base leading-relaxed">
              Situated in 10,000 sq.ft of serene greenery on Trichy Highway, Gandhigramam (~3 km from Karur Central Bus Stand). Features air-conditioned patient suites, hydrotherapy tubs, herbal steam chambers, clinical yoga hall, and in-house dental care wing.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <GalleryViewer items={knchItems} />
        </div>
      </section>

      {/* Campus Details Banner */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-4">
            <h3 className="text-xl font-heading font-bold text-primary flex items-center gap-2">
              <MapPin size={20} className="text-secondary" />
              KNCH Campus Visit Details
            </h3>
            <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-light">
              <strong>Address:</strong> Kumar Hospital - Nature Cure - Yoga - Dental, Sakthi Nagar, Gandhigramam, Karur, Tamil Nadu 639004. Located directly on Trichy National Highway.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-semibold">
              <a
                href="tel:+918148129709"
                className="px-5 py-2.5 bg-primary text-white rounded-full flex items-center gap-1.5 hover:bg-primary/90 transition-all shadow-sm"
              >
                <Phone size={13} /> Call Reception: 81481 29709
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Kumar+Hospital+-+Nature+Cure+-+Yoga+-+Dental,+Kumar+Hospital,+Sakthi+Nagar,+Gandhigramam,+Karur,+Tamil+Nadu+639004"
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
