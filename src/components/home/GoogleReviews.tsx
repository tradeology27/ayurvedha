"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, CheckCircle2, ExternalLink, MessageSquareQuote, ShieldCheck, Heart, Sparkles, Calendar } from "lucide-react";
import { patientReviews, googleRatingSummary } from "@/data/reviews";
import Link from "next/link";

// Google G-Logo SVG Component
function GoogleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

export default function GoogleReviews() {
  const [activeFilter, setActiveFilter] = useState<"all" | "naturopathy" | "stay" | "dental">("all");

  const filteredReviews = activeFilter === "all"
    ? patientReviews
    : patientReviews.filter((r) => r.department === activeFilter);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-stone-50 via-white to-background relative overflow-hidden border-t border-gray-100">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Google Badge */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          
          {/* Official Google Reviews Badge */}
          <div className="inline-flex items-center gap-2.5 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm mb-4 hover:shadow-md transition-shadow">
            <GoogleIcon className="w-5 h-5 shrink-0" />
            <span className="text-xs font-bold uppercase tracking-wider text-foreground/80">
              Google Verified Patient Reviews
            </span>
            <span className="flex items-center gap-0.5 text-amber-500 text-xs font-bold bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
              <Star size={12} className="fill-amber-400 text-amber-400" />
              {googleRatingSummary.overallRating} / 5.0
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mb-4 leading-tight">
            Loved & Trusted by Our Patients
          </h2>
          <p className="text-foreground/75 font-light text-base md:text-lg leading-relaxed">
            Real recovery stories and genuine feedback from patients who experienced natural drugless healing and gentle dental care at Kumar Hospital.
          </p>
        </div>

        {/* Google Rating Highlights Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-md mb-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            
            {/* 1. Overall Score */}
            <div className="flex flex-col items-center justify-center pt-2 sm:pt-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-4xl sm:text-5xl font-heading font-extrabold text-primary">
                  {googleRatingSummary.overallRating}
                </span>
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-foreground/60 font-medium">Out of 5.0</span>
                </div>
              </div>
              <p className="text-xs font-bold text-foreground/80 uppercase tracking-wider">
                Overall Google Rating
              </p>
            </div>

            {/* 2. Total Reviews */}
            <div className="flex flex-col items-center justify-center pt-4 sm:pt-0">
              <span className="text-4xl sm:text-5xl font-heading font-extrabold text-secondary mb-1">
                180+
              </span>
              <p className="text-xs font-bold text-foreground/80 uppercase tracking-wider">
                5-Star Patient Reviews
              </p>
              <p className="text-[11px] text-foreground/60 mt-0.5">Across Karur & Tamil Nadu</p>
            </div>

            {/* 3. Recommendation Rate */}
            <div className="flex flex-col items-center justify-center pt-4 sm:pt-0">
              <span className="text-4xl sm:text-5xl font-heading font-extrabold text-primary mb-1">
                {googleRatingSummary.recommendationRate}
              </span>
              <p className="text-xs font-bold text-foreground/80 uppercase tracking-wider">
                Recommendation Rate
              </p>
              <p className="text-[11px] text-foreground/60 mt-0.5">Proven Drugless Care</p>
            </div>

          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {[
            { id: "all", label: "All Reviews (6)" },
            { id: "naturopathy", label: "🌿 Nature Cure & Spine Care (2)" },
            { id: "stay", label: "🏡 24-Acre Residential Stay (2)" },
            { id: "dental", label: "🦷 Dental Care Clinic (2)" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === tab.id
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-foreground/75 border border-gray-200 hover:border-secondary hover:text-primary shadow-2xs"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((rev, idx) => (
              <motion.div
                key={rev.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  {/* Top Row: User Avatar, Name, Location & Verified Google Badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-full ${rev.avatarColor} text-white font-bold flex items-center justify-center text-sm shadow-md shrink-0`}>
                        {rev.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-primary text-sm sm:text-base leading-tight">
                          {rev.name}
                        </h4>
                        <p className="text-[11px] text-foreground/60 font-medium">
                          {rev.location} • <span className="text-foreground/45">{rev.date}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full border border-blue-100 shrink-0">
                      <GoogleIcon className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </div>
                  </div>

                  {/* Star Rating & Treatment Tag */}
                  <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-gray-100">
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-secondary bg-secondary/10 px-2.5 py-1 rounded-full uppercase tracking-wider truncate max-w-[160px]">
                      {rev.treatment}
                    </span>
                  </div>

                  {/* Review Text */}
                  <div className="relative">
                    <MessageSquareQuote size={20} className="text-gray-200 absolute -top-1 -left-1 pointer-events-none" />
                    <p className="text-xs sm:text-sm text-foreground/80 font-normal leading-relaxed pl-4 italic">
                      &ldquo;{rev.review}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Card Footer: Verified Trust Indicator */}
                <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-foreground/60">
                  <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                    <CheckCircle2 size={13} className="text-emerald-600" /> Verified Recovery
                  </span>
                  <span className="text-[10px] text-foreground/50">Google Reviews</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Direct Action Bar: Write a Review on Google & Book Appointment */}
        <div className="bg-primary text-white rounded-3xl p-8 sm:p-10 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 bg-secondary text-primary text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
              <Sparkles size={13} /> Share Your Healing Journey
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-3">
              Had a Treatment with Us?
            </h3>
            <p className="text-white/80 font-light text-xs sm:text-sm leading-relaxed mb-6">
              Your feedback inspires others on their path to natural health and drugless healing. Leave a Google Review for Kumar Nature Cure Hospital & Dental Care.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={googleRatingSummary.googleMapsReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 font-bold px-6 py-3 rounded-full text-xs sm:text-sm transition-all shadow-md"
              >
                <GoogleIcon className="w-4 h-4" />
                <span>Write a Google Review</span>
                <ExternalLink size={14} />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-secondary text-primary hover:bg-secondary/90 font-bold px-6 py-3 rounded-full text-xs sm:text-sm transition-all shadow-md"
              >
                <Calendar size={14} />
                <span>Book Consultation Online</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
