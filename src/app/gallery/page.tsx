import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import GalleryViewer, { GalleryItem } from "@/components/gallery/GalleryViewer";

export const metadata: Metadata = {
  title: "Photo Gallery | Hospital Campuses, Treatments & Nature Sanctuary",
  description: "View photos of Kumar Nature Cure Hospital (Karur) and P.K. Hospital (Sengal, Karur): lush green campuses, patient rooms, mud therapy, spinal bath, and yoga hall.",
  alternates: {
    canonical: "/gallery",
  },
};

const galleryItems: GalleryItem[] = [
  // KNCH Images
  { src: "/images/gallery/knch/C9126T01.JPG", category: "Kumar Nature Cure Hospital", title: "Reception Desk", description: "Our friendly staff ready to assist you at the reception." },
  { src: "/images/gallery/knch/C9132T01.JPG", category: "Kumar Nature Cure Hospital", title: "Waiting Area", description: "Comfortable seating area for patients and visitors." },
  { src: "/images/gallery/knch/C9133T01.JPG", category: "Kumar Nature Cure Hospital", title: "Dental Examination", description: "Professional dental care and examination." },
  { src: "/images/gallery/knch/C9143T01.JPG", category: "Kumar Nature Cure Hospital", title: "Dental Treatment", description: "Expert dental treatments in progress." },

  { src: "/images/gallery/knch/C9179T01.JPG", category: "Kumar Nature Cure Hospital", title: "Washbasin Area", description: "Clean and hygienic washbasin facilities." },
  { src: "/images/gallery/knch/C9180T01.JPG", category: "Kumar Nature Cure Hospital", title: "Restroom Facility", description: "Modern and well-maintained restroom amenities." },
  { src: "/images/gallery/knch/C9193T01.JPG", category: "Kumar Nature Cure Hospital", title: "Twin Bed Room", description: "Spacious wards with twin beds for patient care." },
  { src: "/images/gallery/knch/C9194T01.JPG", category: "Kumar Nature Cure Hospital", title: "Air Conditioned Room", description: "Comfortable rooms equipped with AC and TV." },
  { src: "/images/gallery/knch/C9200T01.JPG", category: "Kumar Nature Cure Hospital", title: "Herbal Tea Session", description: "Patients enjoying healthy herbal drinks and relaxing." },
  { src: "/images/gallery/knch/C9204T01.JPG", category: "Kumar Nature Cure Hospital", title: "Natural Diet Centre", description: "Outdoor hut for natural dietary consultations." },
  { src: "/images/gallery/knch/C9220T01.JPG", category: "Kumar Nature Cure Hospital", title: "Steam Bath Therapy", description: "Patient undergoing rejuvenating steam bath therapy." },
  { src: "/images/gallery/knch/C9234T01.JPG", category: "Kumar Nature Cure Hospital", title: "Spinal Bath Tub", description: "Specialized spinal and hip bath facilities for hydrotherapy." },
  { src: "/images/gallery/knch/C9239T01.JPG", category: "Kumar Nature Cure Hospital", title: "Waiting Lounge", description: "Comfortable seating area for patients and visitors." },
  { src: "/images/gallery/knch/C9244T01.JPG", category: "Kumar Nature Cure Hospital", title: "KNCH Natural Store", description: "In-house store for natural remedies and health supplements." },
  { src: "/images/gallery/knch/C9260T01.JPG", category: "Kumar Nature Cure Hospital", title: "Yoga Posture Guides", description: "Educational charts detailing various beneficial yoga asanas." },
  { src: "/images/gallery/knch/C9265T01.JPG", category: "Kumar Nature Cure Hospital", title: "Yoga & Meditation Hall", description: "Spacious and peaceful hall for daily yoga and meditation." },
  { src: "/images/gallery/knch/C9269T01.JPG", category: "Kumar Nature Cure Hospital", title: "Fitness Center", description: "Well-equipped gym with treadmills and fitness gear." },
  { src: "/images/gallery/knch/C9275T01.JPG", category: "Kumar Nature Cure Hospital", title: "Hospital Pathway", description: "Clean pathways connecting the various hospital facilities." },

  // PK Images
  { src: "/images/gallery/pk/C9280T01.JPG", category: "P.K. Hospital", title: "Greenery Campus", description: "Lush natural surroundings at P.K. Hospital." },
  { src: "/images/gallery/pk/C9340T01.JPG", category: "P.K. Hospital", title: "Nature Retreat", description: "A peaceful sanctuary for deep healing." },
  { src: "/images/gallery/pk/DJI_20260909160637_0426_D.JPG", category: "P.K. Hospital", title: "Aerial View", description: "Bird's eye view of our expansive green campus." },
  { src: "/images/gallery/pk/DJI_20260909160648_0427_D.JPG", category: "P.K. Hospital", title: "Campus Landscape", description: "Beautifully integrated with nature." },
  { src: "/images/gallery/pk/DJI_20260909161100_0435_D.JPG", category: "P.K. Hospital", title: "Scenic Grounds", description: "Expansive greenery promoting relaxation." },
  { src: "/images/gallery/pk/DSC_0272.JPG.jpeg", category: "P.K. Hospital", title: "Cottages Exterior", description: "Single-story stone-clad cottages surrounded by plants." },
  { src: "/images/gallery/pk/DSC_0309.JPG.jpeg", category: "P.K. Hospital", title: "Dental Clinic Interior", description: "Modern dental clinic setup with vibrant colors." },
  { src: "/images/gallery/pk/DSC_0343.JPG.jpeg", category: "P.K. Hospital", title: "Yellow Flowering Plants", description: "Beautiful Tecoma stans flowers blooming on campus." },
  { src: "/images/gallery/pk/DSC_0383.JPG.jpeg", category: "P.K. Hospital", title: "Hospital Corridors", description: "Pathways connecting the hospital wards." },
  { src: "/images/gallery/pk/DSC_0386.JPG.jpeg", category: "P.K. Hospital", title: "Dining Hall", description: "Spacious canteen area for healthy meals." },
  { src: "/images/gallery/pk/DSC_0530.JPG.jpeg", category: "P.K. Hospital", title: "Patient Room Interior", description: "Comfortable patient room with twin beds and amenities." },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader 
        title="Photo Gallery" 
        breadcrumb={[{ name: "Gallery", path: "/gallery" }]} 
        bgImage="https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?q=80&w=2072&auto=format&fit=crop"
      />
      
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <GalleryViewer items={galleryItems} />
        </div>
      </section>
    </>
  );
}
