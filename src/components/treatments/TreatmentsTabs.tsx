"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Services from "@/components/home/Services";
import TreatmentExplorer from "@/components/treatments/TreatmentExplorer";
import DentalShowcase from "@/components/treatments/DentalShowcase";
import HealthShopShowcase from "@/components/treatments/HealthShopShowcase";
import { 
  Leaf, 
  Smile, 
  ShoppingBag, 
  ShieldCheck, 
  HeartPulse, 
  Sparkles, 
  Phone,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export type TreatmentSectionTab = "naturopathy" | "dental" | "health-shop";

interface TabItem {
  id: TreatmentSectionTab;
  title: string;
  tamilTitle: string;
  tagline: string;
  icon: typeof Leaf;
  badge: string;
}

const TABS: TabItem[] = [
  {
    id: "naturopathy",
    title: "Naturopathy Treatments",
    tamilTitle: "இயற்கை மருத்துவம்",
    tagline: "Drugless 5-element therapies: Mud, Hydro, Diet, Yoga & Acupuncture",
    icon: Leaf,
    badge: "Core Holistic",
  },
  {
    id: "dental",
    title: "Dental Care Clinic",
    tamilTitle: "பல் மருத்துவ சிகிச்சை",
    tagline: "Comprehensive oral care by Dr. M. Anitha Sukumar, B.D.S., D.N.Y.S.",
    icon: Smile,
    badge: "20+ Years",
  },
  {
    id: "health-shop",
    title: "KNCH Health Shop",
    tamilTitle: "இயற்கை அங்காடி",
    tagline: "Pure herbal remedies, nutrition snacks, organic foods & therapy gear",
    icon: ShoppingBag,
    badge: "Organic",
  },
];

function TreatmentsTabsContent() {
  const searchParams = useSearchParams();
  const queryTab = searchParams.get("tab") || searchParams.get("section");

  const [activeTab, setActiveTab] = useState<TreatmentSectionTab>(() => {
    if (queryTab === "dental" || queryTab === "health-shop" || queryTab === "naturopathy") {
      return queryTab as TreatmentSectionTab;
    }
    return "naturopathy";
  });

  useEffect(() => {
    if (queryTab === "dental" || queryTab === "health-shop" || queryTab === "naturopathy") {
      setActiveTab(queryTab as TreatmentSectionTab);
    }
  }, [queryTab]);

  const handleTabChange = (tabId: TreatmentSectionTab) => {
    setActiveTab(tabId);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("tab", tabId);
      window.history.replaceState({}, "", url.toString());
    }
  };

  return (
    <div className="w-full" id="treatment-section-tabs">
      {/* 3-Section Selector Navigation Bar */}
      <div className="bg-white/95 backdrop-blur-md sticky top-[68px] sm:top-[72px] z-30 border-b border-gray-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
          <div className="hidden sm:flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-1.5">
              <Sparkles size={14} />
              Select Healthcare Department:
            </span>
            <span className="text-xs text-foreground/60 hidden lg:inline-block">
              Choose a section to explore our therapies, clinical procedures, or organic wellness store
            </span>
          </div>

          {/* Mobile: horizontal scrollable pills */}
          <div className="flex sm:hidden gap-2 overflow-x-auto no-scrollbar pb-1">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  type="button"
                  className={`inline-flex items-center gap-2 shrink-0 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    isActive
                      ? "bg-primary text-white shadow-md"
                      : "bg-gray-100 text-foreground/80 hover:bg-gray-200"
                  }`}
                >
                  <Icon size={16} className={isActive ? "text-secondary" : "text-gray-500"} />
                  <span className="whitespace-nowrap">
                    {tab.id === "naturopathy" ? "Naturopathy" : tab.id === "dental" ? "Dental Care" : "Health Shop"}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Tablet & Desktop: 3-column card grid */}
          <div className="hidden sm:grid grid-cols-3 gap-2 md:gap-3 lg:gap-4">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;

              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  type="button"
                  className={`group relative text-left p-3 md:p-4 lg:p-5 rounded-2xl transition-all duration-300 border flex flex-col gap-2 ${
                    isActive
                      ? "bg-primary border-primary shadow-lg shadow-primary/20 ring-2 ring-primary/20"
                      : "bg-white hover:bg-emerald-50/40 border-gray-200 hover:border-secondary/50 shadow-xs hover:shadow-md"
                  }`}
                >
                  {/* Top Row: Icon on left, Badge on right */}
                  <div className="flex items-center justify-between gap-1">
                    <div
                      className={`w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? "bg-secondary text-primary shadow-sm"
                          : "bg-primary/10 text-primary group-hover:bg-secondary/20"
                      }`}
                    >
                      <Icon size={17} />
                    </div>

                    <span
                      className={`text-[9px] md:text-[10px] font-bold uppercase tracking-wide px-1.5 md:px-2.5 py-0.5 md:py-1 rounded-full shrink-0 transition-colors text-center leading-tight max-w-[45%] ${
                        isActive
                          ? "bg-white/15 text-white border border-white/20"
                          : "bg-secondary/15 text-primary border border-secondary/30"
                      }`}
                    >
                      {tab.badge}
                    </span>
                  </div>

                  {/* Middle: Title & Tamil Title */}
                  <div>
                    <h3
                      className={`font-heading font-bold text-sm md:text-base lg:text-lg leading-tight transition-colors ${
                        isActive ? "!text-white" : "!text-primary"
                      }`}
                    >
                      {tab.title}
                    </h3>
                    <p
                      className={`text-[10px] md:text-xs mt-0.5 font-semibold transition-colors ${
                        isActive ? "text-secondary" : "text-secondary"
                      }`}
                    >
                      {tab.tamilTitle}
                    </p>
                  </div>

                  {/* Tagline - only on lg screens */}
                  <p
                    className={`hidden lg:block text-xs leading-relaxed line-clamp-2 transition-colors ${
                      isActive ? "text-white/85 font-light" : "text-foreground/70"
                    }`}
                  >
                    {tab.tagline}
                  </p>

                  {/* Active Bottom Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="tabActiveIndicator"
                      className="absolute -bottom-1 left-4 right-4 h-1 bg-secondary rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dynamic Content Displayed by Active Tab */}
      <AnimatePresence mode="wait">
        {activeTab === "naturopathy" && (
          <motion.div
            key="naturopathy-section"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {/* Core Specialized Treatments Carousel/Grid */}
            <Services hideExploreLink={true} />

            {/* Interactive Treatments & Category Explorer */}
            <TreatmentExplorer />

            {/* Conditions Treated Overview */}
            <section className="py-16 md:py-20 bg-background border-t border-gray-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
                  <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                    Clinical Specializations
                  </span>
                  <h2 className="text-2xl md:text-4xl font-heading font-bold text-primary mt-2 mb-4">
                    Health Conditions We Treat
                  </h2>
                  <p className="text-foreground/70 font-light text-sm md:text-base">
                    Integrating classical Naturopathy, Mud therapy, Hydrotherapy, and Yoga for root-cause healing.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
                  {[
                    {
                      title: "Spine & Joint Disorders",
                      items: ["Cervical & Lumbar Spondylosis", "Sciatica & Disc Prolapse", "Knee Osteoarthritis", "Frozen Shoulder & Stiffness"],
                      icon: HeartPulse,
                    },
                    {
                      title: "Metabolic & Lifestyle Disorders",
                      items: ["Type 2 Diabetes & High Sugar", "Obesity & Visceral Fat", "Hypertension & High BP", "Fatty Liver & High Cholesterol"],
                      icon: ShieldCheck,
                    },
                    {
                      title: "Digestive & Gastrointestinal",
                      items: ["Chronic Constipation", "Acid Peptic Disease & GERD", "Irritable Bowel Syndrome (IBS)", "Sluggish Digestion & Toxemia"],
                      icon: Sparkles,
                    },
                    {
                      title: "Stress & Neurological Health",
                      items: ["Chronic Insomnia & Sleeplessness", "Anxiety, Depression & Burnout", "Migraines & Tension Headaches", "Nervous Exhaustion"],
                      icon: Sparkles,
                    },
                    {
                      title: "Skin & Allergy Care",
                      items: ["Psoriasis & Scalp Dermatitis", "Chronic Eczema & Dry Itch", "Allergic Rhinitis & Sinusitis", "Bronchial Asthma & Wheezing"],
                      icon: ShieldCheck,
                    },
                    {
                      title: "Women's Health & Hormones",
                      items: ["PCOD / PCOS Natural Care", "Menopausal Hot Flashes", "Hormonal Weight Resistance", "Pelvic Congestion & Cramps"],
                      icon: HeartPulse,
                    },
                  ].map((cond, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl p-5 md:p-7 border border-gray-200/80 shadow-sm hover:shadow-md transition-all hover:border-secondary/40"
                    >
                      <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                        <cond.icon size={20} />
                      </div>
                      <h3 className="text-lg md:text-xl font-heading font-bold text-primary mb-3">
                        {cond.title}
                      </h3>
                      <ul className="space-y-2">
                        {cond.items.map((item, i) => (
                          <li key={i} className="text-xs md:text-sm text-foreground/75 font-light flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Bottom Doctor Consultation CTA */}
            <section className="py-16 md:py-20 bg-primary text-white text-center relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-2xl md:text-5xl font-heading font-bold mb-6">
                  Need a Customized Naturopathy Plan?
                </h2>
                <p className="text-white/80 font-light max-w-2xl mx-auto mb-8 text-sm md:text-lg">
                  Consult our Founder & Chief Medical Officer Dr. C. Sukumar, B.N.Y.S. at Kumar Nature Cure Hospital (KNCH), Karur to design a tailor-made therapy and residential stay protocol for your health recovery.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    href="/contact" 
                    className="inline-block bg-secondary text-primary font-bold px-6 md:px-8 py-3.5 rounded-full hover:bg-secondary/90 transition-all shadow-lg text-sm"
                  >
                    Book Doctor Consultation
                  </Link>
                  <a 
                    href="tel:+918148129709" 
                    className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/20 text-white px-6 md:px-8 py-3.5 rounded-full font-medium transition-all text-sm"
                  >
                    <Phone size={15} /> Call: 81481 29709
                  </a>
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {activeTab === "dental" && (
          <motion.div
            key="dental-section"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <DentalShowcase />
          </motion.div>
        )}

        {activeTab === "health-shop" && (
          <motion.div
            key="health-shop-section"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <HealthShopShowcase />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick Cross-Department Switcher Footer */}
      <section className="py-10 md:py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-widest text-secondary font-bold mb-2">
            Explore All Departments
          </p>
          <h3 className="text-lg md:text-2xl font-heading font-bold text-primary mb-6">
            Comprehensive Natural Healthcare Under One Roof
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                type="button"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-primary border border-gray-200 hover:border-secondary hover:text-secondary shadow-2xs"
                }`}
              >
                <tab.icon size={14} className={activeTab === tab.id ? "text-secondary" : "text-secondary"} />
                <span>{tab.title}</span>
                <ArrowRight size={12} className="opacity-60" />
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function TreatmentsTabs() {
  return (
    <Suspense fallback={
      <div className="py-20 text-center text-foreground/60 font-light">
        Loading KNCH Treatment Departments...
      </div>
    }>
      <TreatmentsTabsContent />
    </Suspense>
  );
}
