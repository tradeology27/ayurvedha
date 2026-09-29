"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { dentalCategories, DentalServiceCategory } from "@/data/dental";
import { 
  CheckCircle2, 
  PhoneCall, 
  Sparkles,
  ShieldCheck,
  Stethoscope,
  Smile,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Search,
  CalendarCheck
} from "lucide-react";

function DentalCategoryCard({ cat }: { cat: DentalServiceCategory }) {
  return (
    <div className="bg-background rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full">
      <div>
        {/* Card Image Banner */}
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-100">
          <Image
            src={cat.image}
            alt={cat.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
          
          <div className="absolute top-3.5 left-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-primary text-[11px] font-bold uppercase tracking-wider shadow-xs">
              <ShieldCheck size={13} className="text-secondary" />
              Specialized Care
            </span>
          </div>

          <div className="absolute bottom-3 left-4 right-4 text-white">
            <h4 className="text-lg sm:text-xl font-heading font-bold text-white leading-tight drop-shadow-sm">
              {cat.name}
            </h4>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 flex flex-col">
          <p className="text-xs sm:text-sm text-secondary font-medium italic mb-2">
            &ldquo;{cat.tagline}&rdquo;
          </p>

          <p className="text-xs sm:text-sm text-foreground/75 font-light mb-5 leading-relaxed">
            {cat.description}
          </p>

          {/* Procedures List Box */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm">
            <h5 className="text-xs font-bold uppercase tracking-wider text-primary mb-3 pb-1.5 border-b border-gray-100 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              Available Dental Procedures:
            </h5>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {cat.services.map((service, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/85 font-medium">
                  <CheckCircle2 size={15} className="text-secondary shrink-0 mt-0.5" />
                  <span className="leading-snug">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Card Footer CTA */}
      <div className="p-5 sm:p-6 pt-0">
        <div className="pt-4 border-t border-gray-200/80 flex items-center justify-between gap-3">
          <span className="text-[11px] text-foreground/60 font-light">
            Appointments Mon &ndash; Sat
          </span>
          <a
            href={`https://wa.me/917373729709?text=${encodeURIComponent(
              `*Hello Dr. Anitha Sukumar!* 👋\n\nI would like to inquire about *${cat.name}* at your dental clinic. Please guide me with appointment details.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-primary text-white hover:bg-primary/90 rounded-xl text-xs font-bold transition-all shadow-xs shrink-0"
          >
            <span>Inquire {cat.name.split(" ")[0]}</span>
            <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function DentalShowcase() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [slideDirection, setSlideDirection] = useState<number>(1);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const filteredCategories = useMemo(() => {
    let list = dentalCategories;

    if (selectedCategoryId !== "all") {
      list = list.filter((c) => c.id === selectedCategoryId);
    }

    if (!searchQuery.trim()) return list;

    const q = searchQuery.toLowerCase();
    return list
      .map((cat) => {
        const matchesName = cat.name.toLowerCase().includes(q) || cat.description.toLowerCase().includes(q) || cat.tagline.toLowerCase().includes(q);
        const filteredServices = cat.services.filter((s) => s.toLowerCase().includes(q));

        if (matchesName) return cat;
        if (filteredServices.length > 0) {
          return {
            ...cat,
            services: filteredServices,
          };
        }
        return null;
      })
      .filter(Boolean) as DentalServiceCategory[];
  }, [selectedCategoryId, searchQuery]);

  // Group into pages (1 card per slide on mobile, 2 cards per slide on tablet & laptop)
  const itemsPerPage = isMobile ? 1 : 2;
  const pages = useMemo(() => {
    const chunks: DentalServiceCategory[][] = [];
    for (let i = 0; i < filteredCategories.length; i += itemsPerPage) {
      chunks.push(filteredCategories.slice(i, i + itemsPerPage));
    }
    return chunks;
  }, [filteredCategories, itemsPerPage]);

  // Reset slide index when category filter, search, or screen size changes
  useEffect(() => {
    setSlideIndex(0);
    setSlideDirection(1);
  }, [selectedCategoryId, searchQuery, isMobile]);

  const totalPages = pages.length;
  const safeSlideIndex = Math.min(slideIndex, Math.max(0, totalPages - 1));

  const handleNextSlide = () => {
    if (safeSlideIndex < totalPages - 1) {
      setSlideDirection(1);
      setSlideIndex((prev) => prev + 1);
    }
  };

  const handlePrevSlide = () => {
    if (safeSlideIndex > 0) {
      setSlideDirection(-1);
      setSlideIndex((prev) => prev - 1);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 250 : -250,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -250 : 250,
      opacity: 0,
    }),
  };

  return (
    <section className="py-10 md:py-14 bg-white" id="dental-care-section">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Doctor Header Banner */}
        <div className="bg-gradient-to-br from-primary/5 via-secondary/10 to-primary/5 rounded-3xl p-5 md:p-8 border border-secondary/20 mb-8 md:mb-10 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-secondary shadow-md shrink-0">
                <Image
                  src="/images/dr_anitha_sukumar.jpg"
                  alt="Dr. M. Anitha Sukumar, B.D.S."
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/15 text-primary text-xs font-bold uppercase tracking-wider mb-1.5">
                  <Stethoscope size={13} className="text-secondary" />
                  KNCH Advanced Dental Clinic
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">
                  Dr. M. Anitha Sukumar, B.D.S., D.N.Y.S.
                </h3>
                <p className="text-foreground/75 text-sm md:text-base mt-1">
                  Dental Surgeon & Vice President &bull; <strong>20+ Years of Clinical Dental Excellence</strong>
                </p>
                <p className="text-xs text-secondary font-semibold mt-1">
                  Gentle, hygienic, painless dental treatments for all age groups
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href="tel:+917373729709"
                className="px-5 py-3 bg-white border border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-xl text-sm transition-all shadow-sm flex items-center justify-center gap-2 text-center"
              >
                <PhoneCall size={16} />
                <span>Call: 73737 29709</span>
              </a>
              <a
                href={`https://wa.me/917373729709?text=${encodeURIComponent(
                  "Hello Dr. Anitha Sukumar! 👋\n\nI would like to book a Dental Consultation at Kumar Nature Cure Hospital. Please provide available appointment slots."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-white hover:bg-primary/90 font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 text-center"
              >
                <CalendarCheck size={16} />
                <span>Book Appointment</span>
              </a>
            </div>
          </div>
        </div>

        {/* Category Filter Pills & Search */}
        <div className="w-full max-w-5xl mx-auto mb-8 space-y-4">
          
          {/* Search Input */}
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search dental services (e.g., Root Canal, Braces, Whitening)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-16 py-3 rounded-full border border-gray-200 bg-background/60 focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm text-foreground transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 px-2.5 py-1 rounded-full transition-colors"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills Ribbon */}
          <div className="w-full overflow-x-auto no-scrollbar py-2 px-1 flex items-center gap-2 justify-start md:justify-center">
            <button
              onClick={() => setSelectedCategoryId("all")}
              className={`whitespace-nowrap shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategoryId === "all"
                  ? "bg-primary text-white shadow-md scale-102 ring-2 ring-primary/20"
                  : "bg-white text-foreground/80 hover:bg-emerald-50/60 border border-gray-200 shadow-2xs hover:border-secondary/40"
              }`}
            >
              All Dental Services ({dentalCategories.length})
            </button>
            {dentalCategories.map((cat) => {
              const isSelected = selectedCategoryId === cat.id;
              const IconComp = cat.iconName === "ShieldCheck" ? ShieldCheck :
                               cat.iconName === "Activity" ? Sparkles :
                               cat.iconName === "Sparkles" ? Sparkles :
                               cat.iconName === "HeartPulse" ? Stethoscope :
                               cat.iconName === "Stethoscope" ? Stethoscope : Smile;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategoryId(cat.id)}
                  className={`inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    isSelected
                      ? "bg-primary text-white shadow-md scale-102 ring-2 ring-primary/20"
                      : "bg-white text-foreground/80 hover:bg-emerald-50/60 border border-gray-200 shadow-2xs hover:border-secondary/40"
                  }`}
                >
                  <IconComp size={13} className={isSelected ? "text-secondary" : "text-gray-500"} />
                  <span>{cat.shortName || cat.name}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Empty Search State */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 bg-background rounded-3xl p-8 border border-gray-100 max-w-md mx-auto">
            <p className="text-gray-500 mb-4">No dental procedures found matching &quot;{searchQuery}&quot;</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategoryId("all");
              }}
              className="bg-primary text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-primary/90 transition-colors"
            >
              View All Dental Services
            </button>
          </div>
        ) : (
          <div className="w-full">
            {/* Swipeable Carousel Navigation Header */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mb-5 px-1 sm:px-2">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Slide {safeSlideIndex + 1} of {totalPages}
                  </span>
                  <span className="hidden sm:inline-block text-xs text-foreground/60">
                    &bull; Swipe or use arrows to explore procedures
                  </span>
                </div>

                {/* Navigation Arrows & Dot Indicators */}
                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Pagination Dots */}
                  <div className="flex items-center gap-1.5 mr-1 sm:mr-2">
                    {pages.map((_, pIdx) => (
                      <button
                        key={pIdx}
                        onClick={() => {
                          setSlideDirection(pIdx > safeSlideIndex ? 1 : -1);
                          setSlideIndex(pIdx);
                        }}
                        className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                          pIdx === safeSlideIndex
                            ? "w-6 sm:w-8 bg-secondary"
                            : "w-2 sm:w-2.5 bg-gray-300 hover:bg-gray-400"
                        }`}
                        aria-label={`Go to slide ${pIdx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Prev Arrow */}
                  <button
                    onClick={handlePrevSlide}
                    disabled={safeSlideIndex === 0}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border transition-all ${
                      safeSlideIndex === 0
                        ? "border-gray-200 text-gray-300 cursor-not-allowed opacity-50"
                        : "border-primary/30 bg-white text-primary hover:bg-primary hover:text-white shadow-xs hover:shadow-md cursor-pointer"
                    }`}
                    aria-label="Previous dental service slide"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  {/* Next Arrow */}
                  <button
                    onClick={handleNextSlide}
                    disabled={safeSlideIndex === totalPages - 1}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border transition-all ${
                      safeSlideIndex === totalPages - 1
                        ? "border-gray-200 text-gray-300 cursor-not-allowed opacity-50"
                        : "border-primary/30 bg-white text-primary hover:bg-primary hover:text-white shadow-xs hover:shadow-md cursor-pointer"
                    }`}
                    aria-label="Next dental service slide"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            )}

            {/* Swipeable Animated Carousel Track */}
            <div className="relative overflow-hidden min-h-[480px] sm:min-h-[540px]">
              <AnimatePresence mode="wait" custom={slideDirection}>
                <motion.div
                  key={safeSlideIndex}
                  custom={slideDirection}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  drag={totalPages > 1 ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -50) {
                      handleNextSlide();
                    } else if (info.offset.x > 50) {
                      handlePrevSlide();
                    }
                  }}
                  className={`grid gap-5 md:gap-6 lg:gap-8 w-full cursor-grab active:cursor-grabbing items-stretch ${
                    pages[safeSlideIndex]?.length === 1
                      ? "grid-cols-1 max-w-3xl mx-auto"
                      : "grid-cols-1 md:grid-cols-2"
                  }`}
                >
                  {pages[safeSlideIndex]?.map((cat) => (
                    <div key={cat.id} className="h-full">
                      <DentalCategoryCard cat={cat} />
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Pagination hint */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-6">
                {pages.map((_, pIdx) => (
                  <button
                    key={pIdx}
                    onClick={() => {
                      setSlideDirection(pIdx > safeSlideIndex ? 1 : -1);
                      setSlideIndex(pIdx);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      pIdx === safeSlideIndex
                        ? "w-8 bg-secondary"
                        : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Slide ${pIdx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}

