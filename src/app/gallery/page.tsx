"use client";

import { useState } from "react";
import Image from "next/image";
import { X, MapPin } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  src: string;
  title: string;
  category: "P.K. Hospital" | "Kumar Nature Cure Hospital";
  description: string;
}

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

const categories = ["P.K. Hospital", "Kumar Nature Cure Hospital"];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("P.K. Hospital");

  const filteredItems = galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <PageHeader 
        title="Photo Gallery" 
        breadcrumb={[{ name: "Gallery", path: "/gallery" }]} 
        bgImage="https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?q=80&w=2072&auto=format&fit=crop"
      />
      
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">

            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">
              Explore Our Campuses
            </h2>
            <p className="text-foreground/75 font-light text-base sm:text-lg">
              Take a look at our serene greenery campuses, authentic drugless natural treatments, and hospital facilities.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-8 py-3.5 rounded-full text-sm font-bold transition-all shadow-sm flex items-center gap-2 ${
                    activeCategory === cat
                      ? "bg-primary text-white shadow-lg scale-105"
                      : "bg-white text-foreground/70 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  <MapPin size={16} className={activeCategory === cat ? "text-secondary" : ""} />
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid with AnimatePresence for smooth transitions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              {filteredItems.map((item, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.5) }}
                  key={item.src} 
                  className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200/80 cursor-pointer group flex flex-col"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative w-full h-72 overflow-hidden bg-gray-100">
                    <Image 
                      src={item.src} 
                      alt={item.title} 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f16]/90 via-[#0a1f16]/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                    


                    <div className="absolute bottom-5 left-5 right-5 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-heading font-bold text-white leading-tight mb-1">
                        {item.title}
                      </h3>
                      <p className="text-white/90 text-xs font-light leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white p-3 transition-colors bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md z-10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              aria-label="Close image modal"
            >
              <X size={24} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl bg-black/40 rounded-3xl overflow-hidden p-2 sm:p-4" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[65vh] sm:h-[75vh] rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src={selectedImage.src} 
                  alt={selectedImage.title} 
                  fill 
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl mt-4 text-center border border-white/10 shadow-lg">
                <h4 className="text-2xl md:text-3xl font-heading font-bold mb-2 text-white drop-shadow-md">{selectedImage.title}</h4>
                <p className="text-white/90 text-sm md:text-base font-light max-w-2xl mx-auto drop-shadow">{selectedImage.description}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 uppercase tracking-widest bg-amber-400/20 border border-amber-400/30 px-4 py-1.5 rounded-full shadow-sm">
                  <MapPin size={14} /> {selectedImage.category}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
