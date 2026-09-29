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
  Truck,
  Clock,
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
    <div className="bg-background rounded-3xl p-5 md:p-6 lg:p-7 border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-2xl bg-secondary/15 text-primary flex items-center justify-center shrink-0">
            <IconComp size={20} className="text-secondary" />
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-heading font-bold text-primary">
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
            <div key={gIdx} className="bg-white rounded-2xl p-4 md:p-5 border border-gray-100 shadow-sm">
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
  const [laptopSlideIndex, setLaptopSlideIndex] = useState<number>(0);
  const [slideDirection, setSlideDirection] = useState<number>(1);

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

  // Group into pages of 2 cards for laptop slider
  const laptopPages = useMemo(() => {
    const pages: ShopCategory[][] = [];
    for (let i = 0; i < filteredCategories.length; i += 2) {
      pages.push(filteredCategories.slice(i, i + 2));
    }
    return pages;
  }, [filteredCategories]);

  // Reset slide index when category filter or search changes
  useEffect(() => {
    setLaptopSlideIndex(0);
    setSlideDirection(1);
  }, [selectedCategoryId, searchQuery]);

  const totalPages = laptopPages.length;
  const safeSlideIndex = Math.min(laptopSlideIndex, Math.max(0, totalPages - 1));

  const handleNextSlide = () => {
    if (safeSlideIndex < totalPages - 1) {
      setSlideDirection(1);
      setLaptopSlideIndex((prev) => prev + 1);
    }
  };

  const handlePrevSlide = () => {
    if (safeSlideIndex > 0) {
      setSlideDirection(-1);
      setLaptopSlideIndex((prev) => prev - 1);
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

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <button
              onClick={() => setSelectedCategoryId("all")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategoryId === "all"
                  ? "bg-primary text-white shadow-md scale-105"
                  : "bg-background text-foreground/80 hover:bg-gray-100 border border-gray-200"
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
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    isSelected
                      ? "bg-primary text-white shadow-md scale-105"
                      : "bg-background text-foreground/80 hover:bg-gray-100 border border-gray-200"
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
          <>
            {/* ========================================================
                1. LAPTOP VIEW ONLY (>= 1024px / lg:):
                   Swipeable / Paginated Carousel with Controls & Gestures
               ======================================================== */}
            <div className="hidden lg:block w-full">
              {/* Laptop Carousel Navigation Header */}
              {totalPages > 1 && (
                <div className="flex items-center justify-between mb-5 px-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      Categories Slide {safeSlideIndex + 1} of {totalPages}
                    </span>
                    <span className="text-xs text-foreground/60">
                      &bull; Swipe or use arrows to view categories
                    </span>
                  </div>

                  {/* Navigation Arrows & Dot Indicators */}
                  <div className="flex items-center gap-3">
                    {/* Pagination Dots */}
                    <div className="flex items-center gap-1.5 mr-2">
                      {laptopPages.map((_, pIdx) => (
                        <button
                          key={pIdx}
                          onClick={() => {
                            setSlideDirection(pIdx > safeSlideIndex ? 1 : -1);
                            setLaptopSlideIndex(pIdx);
                          }}
                          className={`h-2.5 rounded-full transition-all duration-300 ${
                            pIdx === safeSlideIndex
                              ? "w-8 bg-secondary"
                              : "w-2.5 bg-gray-300 hover:bg-gray-400"
                          }`}
                          aria-label={`Go to slide ${pIdx + 1}`}
                        />
                      ))}
                    </div>

                    {/* Prev Arrow */}
                    <button
                      onClick={handlePrevSlide}
                      disabled={safeSlideIndex === 0}
                      className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                        safeSlideIndex === 0
                          ? "border-gray-200 text-gray-300 cursor-not-allowed"
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
                      className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                        safeSlideIndex === totalPages - 1
                          ? "border-gray-200 text-gray-300 cursor-not-allowed"
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
              <div className="relative overflow-hidden min-h-[580px]">
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
                      if (info.offset.x < -60) {
                        handleNextSlide();
                      } else if (info.offset.x > 60) {
                        handlePrevSlide();
                      }
                    }}
                    className="grid grid-cols-2 gap-6 lg:gap-8 w-full cursor-grab active:cursor-grabbing items-stretch"
                  >
                    {laptopPages[safeSlideIndex]?.map((cat) => (
                      <div key={cat.id} className="h-full">
                        <ShopCategoryCard cat={cat} />
                      </div>
                    ))}

                    {/* If last slide has only 1 card, fill 2nd column with Hospital Store Information banner */}
                    {laptopPages[safeSlideIndex]?.length === 1 && (
                      <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/15 rounded-3xl p-6 lg:p-8 border border-secondary/30 shadow-sm flex flex-col justify-between h-full">
                        <div>
                          <div className="w-12 h-12 rounded-2xl bg-secondary/20 text-primary flex items-center justify-center mb-4">
                            <Truck size={24} className="text-secondary" />
                          </div>
                          <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                            Campus & Courier Service
                          </span>
                          <h4 className="text-2xl font-heading font-bold text-primary mt-1 mb-3">
                            Direct Delivery to Your Doorstep
                          </h4>
                          <p className="text-foreground/80 font-light text-sm leading-relaxed mb-6">
                            All organic wellness foods, honey preserves, native millets, and therapy tools can be purchased directly at our Karur hospital reception or couriered across Tamil Nadu & India.
                          </p>

                          <div className="space-y-3 bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-gray-200/60">
                            <div className="flex items-center gap-2.5 text-xs text-foreground/85 font-medium">
                              <Clock size={16} className="text-secondary shrink-0" />
                              <span>Store Open Daily: 8:00 AM &ndash; 7:30 PM</span>
                            </div>
                            <div className="flex items-center gap-2.5 text-xs text-foreground/85 font-medium">
                              <CheckCircle2 size={16} className="text-secondary shrink-0" />
                              <span>Safe packaging & reliable door courier</span>
                            </div>
                            <div className="flex items-center gap-2.5 text-xs text-foreground/85 font-medium">
                              <CheckCircle2 size={16} className="text-secondary shrink-0" />
                              <span>100% Genuine, tested organic ingredients</span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-8 pt-4 border-t border-gray-200/80 flex items-center justify-between">
                          <span className="text-xs text-foreground/70 font-light">
                            Hospital Pharmacy Desk
                          </span>
                          <a
                            href={`https://wa.me/918148129709?text=${encodeURIComponent(
                              "Hello KNCH Store! 👋\n\nI would like to inquire about courier delivery for organic products. Please share details."
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white hover:bg-primary/90 rounded-xl text-xs font-bold transition-all shadow-sm"
                          >
                            <PhoneCall size={14} />
                            <span>Inquire Courier</span>
                          </a>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Pagination hint for laptop */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-6">
                  {laptopPages.map((_, pIdx) => (
                    <button
                      key={pIdx}
                      onClick={() => {
                        setSlideDirection(pIdx > safeSlideIndex ? 1 : -1);
                        setLaptopSlideIndex(pIdx);
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

            {/* ========================================================
                2. MOBILE & TABLET VIEW ONLY (< 1024px / lg:hidden):
                   Standard Responsive Vertical Scrolling Grid
               ======================================================== */}
            <div className="block lg:hidden w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 w-full">
                {filteredCategories.map((cat) => (
                  <div key={cat.id}>
                    <ShopCategoryCard cat={cat} />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

      </div>
    </section>
  );
}

