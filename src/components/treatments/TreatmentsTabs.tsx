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
    badge: "Core Holistic Healing",
  },
  {
    id: "dental",
    title: "Dental Care Clinic",
    tamilTitle: "பல் மருத்துவ சிகிச்சை",
    tagline: "Comprehensive oral care by Dr. M. Anitha Sukumar, B.D.S., D.N.Y.S.",
    icon: Smile,
    badge: "20+ Years Clinical Care",
  },
  {
    id: "health-shop",
    title: "KNCH Health Shop",
    tamilTitle: "இயற்கை அங்காடி",
    tagline: "Pure herbal remedies, nutrition snacks, organic foods & therapy gear",
    icon: ShoppingBag,
    badge: "Pure Organic Essentials",
  },
];

function TreatmentsTabsContent() {
  const searchParams = useSearchParams();
  const queryTab = searchParams.get("tab") || searchParams.get("section");

  const [activeTab, setActiveTab] = useState<TreatmentSectionTab>("naturopathy");

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

      // Scroll smoothly to treatments tabs
      const el = document.getElementById("treatment-section-tabs");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="w-full" id="treatment-section-tabs">
      {/* 3-Section Selector Navigation Bar */}
      <div className="bg-white/90 backdrop-blur-md sticky top-16 z-30 border-b border-gray-200/80 shadow-xs">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-1.5">
              <Sparkles size={14} />
              Select Healthcare Department:
            </span>
            <span className="text-xs text-foreground/60 hidden sm:inline-block">
              Choose a section to explore our therapies, clinical procedures, or organic wellness store
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;

              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  type="button"
                  className={`group relative text-left p-4 rounded-2xl transition-all duration-300 border flex flex-col justify-between ${
                    isActive
                      ? "bg-primary text-white border-primary shadow-lg shadow-primary/15 scale-[1.01]"
                      : "bg-gray-50/70 hover:bg-white text-primary border-gray-200 hover:border-secondary/40 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                          isActive
                            ? "bg-secondary text-primary"
                            : "bg-white text-secondary group-hover:bg-secondary/15 border border-gray-200 group-hover:border-secondary/30"
                        }`}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-base leading-tight">
                          {tab.title}
                        </h3>
                        <p className={`text-xs ${isActive ? "text-secondary font-medium" : "text-foreground/50"}`}>
                          {tab.tamilTitle}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full shrink-0 ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-secondary/10 text-secondary"
                      }`}
                    >
                      {tab.badge}
                    </span>
                  </div>

                  <p
                    className={`text-xs line-clamp-2 mt-1 leading-relaxed ${
                      isActive ? "text-white/80 font-light" : "text-foreground/65"
                    }`}
                  >
                    {tab.tagline}
                  </p>

                  {isActive && (
                    <motion.div
                      layoutId="tabActiveIndicator"
                      className="absolute -bottom-1 left-6 right-6 h-1 bg-secondary rounded-full"
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
            <section className="py-20 bg-background border-t border-gray-100">
              <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                    Clinical Specializations
                  </span>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2 mb-4">
                    Health Conditions We Treat
                  </h2>
                  <p className="text-foreground/70 font-light">
                    Integrating classical Naturopathy, Mud therapy, Hydrotherapy, and Yoga for root-cause healing.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                      className="bg-white rounded-2xl p-7 border border-gray-200/80 shadow-sm hover:shadow-md transition-all hover:border-secondary/40"
                    >
                      <div className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-5">
                        <cond.icon size={22} />
                      </div>
                      <h3 className="text-xl font-heading font-bold text-primary mb-3">
                        {cond.title}
                      </h3>
                      <ul className="space-y-2">
                        {cond.items.map((item, i) => (
                          <li key={i} className="text-sm text-foreground/75 font-light flex items-center gap-2">
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
            <section className="py-20 bg-primary text-white text-center relative overflow-hidden">
              <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Need a Customized Naturopathy Plan?
                </h2>
                <p className="text-white/80 font-light max-w-2xl mx-auto mb-8 text-base md:text-lg">
                  Consult our Founder & Chief Medical Officer Dr. C. Sukumar, B.N.Y.S. at Kumar Nature Cure Hospital (KNCH), Karur to design a tailor-made therapy and residential stay protocol for your health recovery.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    href="/contact" 
                    className="inline-block bg-secondary text-primary font-bold px-8 py-3.5 rounded-full hover:bg-secondary/90 transition-all shadow-lg text-sm"
                  >
                    Book Doctor Consultation
                  </Link>
                  <a 
                    href="tel:+918148129709" 
                    className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/20 text-white px-8 py-3.5 rounded-full font-medium transition-all text-sm"
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
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-widest text-secondary font-bold mb-2">
            Explore All Departments
          </p>
          <h3 className="text-xl md:text-2xl font-heading font-bold text-primary mb-6">
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
