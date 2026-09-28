"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, 
  Check, 
  Clock, 
  Sparkles, 
  Search, 
  Droplets, 
  Activity, 
  Apple, 
  HeartHandshake, 
  Compass, 
  Flame, 
  Moon, 
  ShieldAlert,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  Filter,
  type LucideIcon
} from "lucide-react";
import Link from "next/link";
import { treatmentCategories, TreatmentCategory, TreatmentItem } from "@/data/treatments";

const categoryIconMap: Record<string, LucideIcon> = {
  Droplets: Droplets,
  Sparkles: Sparkles,
  Activity: Activity,
  Apple: Apple,
  Hand: Activity,
  ShieldAlert: ShieldAlert,
  Zap: Sparkles,
  HeartHandshake: HeartHandshake,
  Compass: Compass,
  Flame: Flame,
  Moon: Moon,
};

export default function TreatmentExplorer() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("specialised");
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string>("plantain-leaf-bath");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const activeCategory = useMemo(() => {
    return treatmentCategories.find((cat) => cat.id === activeCategoryId) || treatmentCategories[0];
  }, [activeCategoryId]);

  // Search filter across all categories
  const filteredTreatments = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();
    const results: { category: TreatmentCategory; item: TreatmentItem }[] = [];
    treatmentCategories.forEach((cat) => {
      cat.treatments.forEach((item) => {
        if (
          item.name.toLowerCase().includes(q) ||
          item.tagline.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.benefits.some((b) => b.toLowerCase().includes(q)) ||
          item.indications?.some((ind) => ind.toLowerCase().includes(q))
        ) {
          results.push({ category: cat, item });
        }
      });
    });
    return results;
  }, [searchQuery]);

  const activeTreatment = useMemo(() => {
    const currentList = activeCategory.treatments;
    return currentList.find((t) => t.id === selectedTreatmentId) || currentList[0];
  }, [activeCategory, selectedTreatmentId]);

  return (
    <section className="py-16 md:py-24 bg-white" id="treatments-explorer">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">

          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">
            Natural Treatments & Therapies
          </h2>
          <p className="text-foreground/70 font-light text-base md:text-lg">
            Explore authentic Naturopathy, Ayurveda, and specialized holistic treatments tailored to restore inner balance and vital health.
          </p>

          {/* Search bar */}
          <div className="mt-8 relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search treatments (e.g., Enema, Mud Pack, Shirodhara, Sciatica)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-full border border-gray-200 bg-background/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 text-foreground transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 px-2.5 py-1 rounded-full transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* If Search is Active */}
        {filteredTreatments ? (
          <div className="max-w-5xl mx-auto">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-bold text-primary">
                Search Results ({filteredTreatments.length})
              </h3>
              <button
                onClick={() => setSearchQuery("")}
                className="text-sm text-secondary font-medium hover:underline"
              >
                Back to all categories
              </button>
            </div>

            {filteredTreatments.length === 0 ? (
              <div className="text-center py-16 bg-background rounded-3xl p-8 border border-gray-100">
                <p className="text-gray-500 mb-4">No treatments found matching &quot;{searchQuery}&quot;</p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  View All Treatments
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredTreatments.map(({ category, item }) => (
                  <div
                    key={`${category.id}-${item.id}`}
                    className="bg-background rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all hover:border-secondary/50"
                  >
                    <div className="flex items-center gap-2 text-xs font-semibold text-secondary uppercase tracking-wider mb-2">
                      <span>{category.name}</span>
                      <span>â€¢</span>
                      {item.duration && <span>{item.duration}</span>}
                    </div>
                    <h4 className="text-xl font-heading font-bold text-primary mb-2">
                      {item.name}
                    </h4>
                    <p className="text-sm text-foreground/75 font-light mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mb-4">
                      <div className="text-xs font-semibold text-foreground/80 mb-2">Key Benefits:</div>
                      <ul className="space-y-1.5">
                        {item.benefits.slice(0, 3).map((b, i) => (
                          <li key={i} className="text-xs text-foreground/70 flex items-start gap-2">
                            <CheckCircle2 size={14} className="text-secondary shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary transition-colors"
                    >
                      Book Consultation <ArrowRight size={14} />
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Main Two-Column Layout (Matching the user's design) */
          <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[620px]">
              
              {/* LEFT COLUMN: Categories Navigation (Exact style as screenshot) */}
              <div className="lg:col-span-4 border-r border-gray-100 bg-white">
                <div className="p-4 bg-background/50 border-b border-gray-100 font-semibold text-xs tracking-wider uppercase text-primary/80 flex items-center justify-between">
                  <span>Categories ({treatmentCategories.length})</span>
                  <Filter size={14} className="text-secondary" />
                </div>
                <div className="divide-y divide-gray-100 overflow-y-auto max-h-[680px]">
                  {treatmentCategories.map((cat) => {
                    const isActive = activeCategoryId === cat.id;
                    const IconComponent = categoryIconMap[cat.iconName] || Sparkles;

                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setActiveCategoryId(cat.id);
                          setSelectedTreatmentId(cat.treatments[0]?.id || "");
                        }}
                        className={`w-full text-left px-6 py-4 flex items-center justify-between transition-all duration-200 group ${
                          isActive
                            ? "bg-secondary/10 text-secondary font-bold pl-7 border-l-4 border-secondary"
                            : "text-foreground hover:bg-gray-50/80 hover:text-primary"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <IconComponent 
                            size={18} 
                            className={isActive ? "text-secondary" : "text-gray-400 group-hover:text-primary"} 
                          />
                          <span className={`text-base ${isActive ? "text-secondary font-bold" : "font-medium text-foreground"}`}>
                            {cat.name}
                          </span>
                        </div>
                        <ChevronRight
                          size={18}
                          className={`transition-transform duration-200 ${
                            isActive
                              ? "text-secondary translate-x-1 font-bold"
                              : "text-gray-400 group-hover:text-primary group-hover:translate-x-0.5"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* RIGHT COLUMN: Treatment Items & Full Details */}
              <div className="lg:col-span-8 bg-background/30 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  {/* Category Header */}
                  <div className="border-b border-gray-200 pb-5 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div>
                      <span className="text-xs font-bold text-secondary uppercase tracking-widest">
                        Category Therapies
                      </span>
                      <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mt-1">
                        {activeCategory.name}
                      </h3>
                      <p className="text-sm text-foreground/70 font-light mt-1">
                        {activeCategory.shortDesc}
                      </p>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all self-start md:self-auto shrink-0 shadow-sm"
                    >
                      <PhoneCall size={14} /> Consult Doctor
                    </Link>
                  </div>

                  {/* Sub-items Selector Pill list (Matching the right-hand list in screenshot) */}
                  <div className="mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-foreground/60 mb-3">
                      Select Treatment:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeCategory.treatments.map((treatment) => {
                        const isSelected = selectedTreatmentId === treatment.id;
                        return (
                          <button
                            key={treatment.id}
                            onClick={() => setSelectedTreatmentId(treatment.id)}
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                              isSelected
                                ? "bg-primary text-white shadow-md font-semibold scale-102"
                                : "bg-white text-foreground border border-gray-200 hover:border-secondary hover:text-secondary"
                            }`}
                          >
                            {treatment.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Active Treatment Card Detail */}
                  <AnimatePresence mode="wait">
                    {activeTreatment && (
                      <motion.div
                        key={activeTreatment.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.25 }}
                        className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm"
                      >
                        {/* Title & Duration */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <h4 className="text-2xl font-heading font-bold text-primary">
                            {activeTreatment.name}
                          </h4>
                          {activeTreatment.duration && (
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                              <Clock size={13} /> {activeTreatment.duration}
                            </span>
                          )}
                        </div>

                        {/* Tagline */}
                        <p className="text-sm font-medium text-secondary mb-4 italic">
                          &ldquo;{activeTreatment.tagline}&rdquo;
                        </p>

                        {/* Description */}
                        <p className="text-foreground/80 font-light text-sm md:text-base leading-relaxed mb-6">
                          {activeTreatment.description}
                        </p>

                        {/* Benefits list */}
                        <div className="mb-6 bg-background/60 p-5 rounded-xl border border-gray-100">
                          <h5 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                            Key Clinical & Health Benefits:
                          </h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                            {activeTreatment.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs md:text-sm text-foreground/80 font-light">
                                <div className="p-0.5 bg-primary/10 text-primary rounded-full shrink-0 mt-0.5">
                                  <Check size={12} strokeWidth={3} />
                                </div>
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Indications */}
                        {activeTreatment.indications && activeTreatment.indications.length > 0 && (
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-semibold text-foreground/70 mr-1">Recommended for:</span>
                            {activeTreatment.indications.map((ind, i) => (
                              <span
                                key={i}
                                className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-light"
                              >
                                {ind}
                              </span>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom Assistance Banner */}
                <div className="mt-8 pt-4 border-t border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground/70">
                  <span>
                    Need guidance choosing between therapies? Our doctors evaluate your Prakriti constitution.
                  </span>
                  <Link
                    href="/contact"
                    className="text-primary font-bold hover:text-secondary inline-flex items-center gap-1 shrink-0 transition-colors"
                  >
                    Schedule Assessment <ArrowRight size={14} />
                  </Link>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
