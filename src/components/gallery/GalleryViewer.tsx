"use client";

import { useState } from "react";
import Image from "next/image";
import { X, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface GalleryItem {
  src: string;
  title: string;
  category: "P.K. Hospital" | "Kumar Nature Cure Hospital";
  description: string;
}

const categories = ["P.K. Hospital", "Kumar Nature Cure Hospital"];

export default function GalleryViewer({ items }: { items: GalleryItem[] }) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("P.K. Hospital");

  const filteredItems = items.filter((item) => item.category === activeCategory);

  return (
    <>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">
          Explore Our Campuses
        </h2>
        <p className="text-foreground/75 font-light text-base sm:text-lg">
          Take a look at our serene greenery campuses, authentic drugless natural treatments, and hospital facilities.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold transition-all shadow-sm flex items-center gap-2 ${
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

      {/* Gallery Grid */}
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-xl overflow-y-auto"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="fixed top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white p-2.5 sm:p-3 transition-colors bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md z-20"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              aria-label="Close image modal"
            >
              <X size={22} className="sm:w-6 sm:h-6" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl bg-black/40 rounded-3xl overflow-hidden p-2 sm:p-4 my-auto" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[45vh] sm:h-[65vh] md:h-[72vh] rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src={selectedImage.src} 
                  alt={selectedImage.title} 
                  fill 
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl mt-3 sm:mt-4 text-center border border-white/10 shadow-lg">
                <h4 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mb-1.5 sm:mb-2 text-white drop-shadow-md">{selectedImage.title}</h4>
                <p className="text-white/90 text-xs sm:text-sm md:text-base font-light max-w-2xl mx-auto drop-shadow">{selectedImage.description}</p>
                <div className="mt-3 sm:mt-4 inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-amber-300 uppercase tracking-widest bg-amber-400/20 border border-amber-400/30 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-sm">
                  <MapPin size={13} /> {selectedImage.category}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
