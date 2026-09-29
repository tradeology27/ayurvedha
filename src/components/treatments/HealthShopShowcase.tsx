"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { healthShopCategories, ShopCategory } from "@/data/healthShop";
import { 
  ShoppingBag, 
  Search, 
  Leaf, 
  CheckCircle2, 
  Sparkles, 
  HeartHandshake, 
  Cookie, 
  Wheat, 
  ArrowRight,
  PhoneCall,
  ChevronLeft,
  ChevronRight,
  type LucideIcon 
} from "lucide-react";

const shopIconMap: Record<string, LucideIcon> = {
  Leaf: Leaf,
  Cookie: Cookie,
  Sparkles: Sparkles,
  Wheat: Wheat,
  HeartHandshake: HeartHandshake,
};

function ShopCategoryCard({ cat }: { cat: ShopCategory }) {
  const IconComp = shopIconMap[cat.iconName] || Leaf;

  return (
    <div className="bg-background rounded-3xl p-5 sm:p-6 lg:p-7 border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-2xl bg-secondary/15 text-primary flex items-center justify-center shrink-0">
            <IconComp size={20} className="text-secondary" />
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-heading font-bold text-primary">
              {cat.name}
            </h4>
            <p className="text-xs text-secondary font-medium italic">
              {cat.tagline}
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-foreground/75 font-light mb-5 leading-relaxed">
          {cat.description}
        </p>

        {/* Product Groups & Lists */}
        <div className="space-y-4">
          {cat.groups.map((group, gIdx) => (
            <div key={gIdx} className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm">
              {group.subheading && (
                <h5 className="text-xs font-bold uppercase tracking-wider text-primary mb-3 pb-1.5 border-b border-gray-100 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  {group.subheading}
                </h5>
              )}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {group.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/85 font-medium">
                    <CheckCircle2 size={15} className="text-secondary shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Order Button for this Category */}
      <div className="mt-6 pt-4 border-t border-gray-200/80 flex items-center justify-between gap-3">
        <span className="text-[11px] text-foreground/60 font-light">
          Available at hospital store
        </span>
        <a
          href={`https://wa.me/918148129709?text=${encodeURIComponent(
            `*Hello Kumar Hospital Store!* 👋\n\nI would like to purchase items from the *${cat.name}* category. Please share price list and courier details.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-xl text-xs font-bold transition-all shrink-0"
        >
          <span>Inquire {cat.name.split(" ")[0]}</span>
          <ArrowRight size={13} />
        </a>
      </div>
    </div>
  );
}

export default function HealthShopShowcase() {
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
    let list = healthShopCategories;

    if (selectedCategoryId !== "all") {
      list = list.filter((c) => c.id === selectedCategoryId);
    }

    if (!searchQuery.trim()) return list;

    const q = searchQuery.toLowerCase();
    return list
      .map((cat) => {
        const matchesCategory = cat.name.toLowerCase().includes(q) || cat.description.toLowerCase().includes(q);
        const filteredGroups = cat.groups
          .map((group) => {
            const matchesSubheading = group.subheading?.toLowerCase().includes(q);
            const filteredItems = group.items.filter((item) => item.toLowerCase().includes(q));
            if (matchesSubheading || filteredItems.length > 0) {
              return {
                ...group,
                items: matchesSubheading ? group.items : filteredItems,
              };
            }
            return null;
          })
          .filter(Boolean) as typeof cat.groups;

        if (matchesCategory) return cat;
        if (filteredGroups.length > 0) {
          return {
            ...cat,
            groups: filteredGroups,
          };
        }
        return null;
      })
      .filter(Boolean) as ShopCategory[];
  }, [selectedCategoryId, searchQuery]);

  // Group into pages (1 card per slide on mobile, 2 cards per slide on tablet & laptop)
  const itemsPerPage = isMobile ? 1 : 2;
  const pages = useMemo(() => {
    const chunks: ShopCategory[][] = [];
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
    <section className="py-10 md:py-14 bg-white" id="health-shop-section">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Health Shop Intro Banner */}
        <div className="bg-gradient-to-r from-emerald-800/10 via-primary/5 to-emerald-800/10 rounded-3xl p-6 md:p-8 border border-emerald-600/20 mb-8 md:mb-10 text-center w-full max-w-5xl mx-auto shadow-sm">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <ShoppingBag size={14} />
            KNCH Organic & Wellness Store
          </div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-2">
            Natural Health Shop & Pharmacy
          </h3>
          <p className="text-foreground/75 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            All authentic products, wild forest honey, native millets, cold-pressed oils, and home naturopathy equipment used during hospital residential therapies are available directly at our campus store.
          </p>

          {/* Quick WhatsApp Inquiry */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/918148129709?text=${encodeURIComponent(
                "Hello KNCH Health Shop! 👋\n\nI would like to inquire about purchasing organic herbal products from your store. Please share product availability and pricing."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white hover:bg-primary/90 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              <PhoneCall size={15} />
              <span>Inquire / Order Products on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Category Pills & Search Bar */}
        <div className="w-full max-w-5xl mx-auto mb-8 space-y-4">
          
          {/* Search Input */}
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search products (e.g., Honey, Amla, Cookies, Enema Can)..."
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

          {/* Category Filter Pills (Scrollable on Mobile, Wrapped on Tablet & Laptop) */}
          <div className="w-full flex items-center justify-start md:justify-center overflow-x-auto md:overflow-visible md:flex-wrap no-scrollbar gap-2 py-2 px-1">
            <button
              onClick={() => setSelectedCategoryId("all")}
              className={`whitespace-nowrap shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategoryId === "all"
                  ? "bg-primary text-white shadow-md scale-102 ring-2 ring-primary/20"
                  : "bg-white text-foreground/80 hover:bg-emerald-50/60 border border-gray-200 shadow-2xs hover:border-secondary/40"
              }`}
            >
              All Product Categories ({healthShopCategories.length})
            </button>
            {healthShopCategories.map((cat) => {
              const isSelected = selectedCategoryId === cat.id;
              const IconComp = shopIconMap[cat.iconName] || Leaf;

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
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Empty Search State */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 bg-background rounded-3xl p-8 border border-gray-100 max-w-md mx-auto">
            <p className="text-gray-500 mb-4">No products found matching &quot;{searchQuery}&quot;</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategoryId("all");
              }}
              className="bg-primary text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-primary/90 transition-colors"
            >
              View All Products
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
                    &bull; Swipe or use arrows to view categories
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
                    aria-label="Previous category slide"
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
                    aria-label="Next category slide"
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
                      <ShopCategoryCard cat={cat} />
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

