"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { dentalCategories } from "@/data/dental";
import { 
  CheckCircle2, 
  ChevronRight, 
  PhoneCall, 
  Clock, 
  Sparkles,
  ShieldCheck,
  Stethoscope,
  Smile,
  ArrowRight
} from "lucide-react";

export default function DentalShowcase() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("diagnostic-preventive");

  const activeCategory = dentalCategories.find((c) => c.id === activeCategoryId) || dentalCategories[0];

  return (
    <section className="py-12 bg-white" id="dental-care-section">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Doctor Header Banner */}
        <div className="bg-gradient-to-br from-primary/5 via-secondary/10 to-primary/5 rounded-3xl p-6 md:p-8 border border-secondary/20 mb-12 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
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
                <span>Book Appointment</span>
              </a>
            </div>
          </div>
        </div>

        {/* Two-Column Interactive Explorer */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden max-w-6xl mx-auto">
          {/* Mobile horizontal category pills */}
          <div className="md:hidden flex gap-2 overflow-x-auto p-3 bg-gray-50 border-b border-gray-200 no-scrollbar">
            {dentalCategories.map((cat) => {
              const isActive = activeCategoryId === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition-all ${
                    isActive
                      ? "bg-primary text-white shadow-sm"
                      : "bg-white text-foreground/80 border border-gray-200"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[540px]">
            
            {/* Left Column: Dental Category Navigation (Desktop/Tablet) */}
            <div className="hidden md:block md:col-span-5 lg:col-span-4 border-r border-gray-100 bg-white">
              <div className="p-4 bg-background/50 border-b border-gray-100 font-semibold text-xs tracking-wider uppercase text-primary/80 flex items-center justify-between">
                <span>Dental Services ({dentalCategories.length})</span>
                <Smile size={15} className="text-secondary" />
              </div>
              <div className="divide-y divide-gray-100 overflow-y-auto max-h-[620px]">
                {dentalCategories.map((cat) => {
                  const isActive = activeCategoryId === cat.id;

                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategoryId(cat.id)}
                      className={`w-full text-left px-5 py-4 flex items-center justify-between transition-all duration-200 group ${
                        isActive
                          ? "bg-secondary/10 text-secondary font-bold pl-6 border-l-4 border-secondary"
                          : "text-foreground hover:bg-gray-50/80 hover:text-primary"
                      }`}
                    >
                      <span className={`text-sm md:text-base ${isActive ? "text-secondary font-bold" : "font-medium text-foreground"}`}>
                        {cat.name}
                      </span>
                      <ChevronRight
                        size={16}
                        className={`shrink-0 ml-2 transition-transform duration-200 ${
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

            {/* Right Column: Procedure Details & Photo */}
            <div className="col-span-1 md:col-span-7 lg:col-span-8 bg-background/30 p-6 md:p-8 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  {/* Category Title & Tagline */}
                  <div className="border-b border-gray-200 pb-5">
                    <span className="text-xs font-bold text-secondary uppercase tracking-widest">
                      Specialized Dental Procedure
                    </span>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mt-1">
                      {activeCategory.name}
                    </h3>
                    <p className="text-sm font-medium text-secondary italic mt-1">
                      &ldquo;{activeCategory.tagline}&rdquo;
                    </p>
                    <p className="text-sm text-foreground/80 font-light mt-3 leading-relaxed">
                      {activeCategory.description}
                    </p>
                  </div>

                  {/* Image & Procedures Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    
                    {/* Procedures List */}
                    <div className="md:col-span-7 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3.5 flex items-center gap-1.5">
                        <ShieldCheck size={14} className="text-secondary" />
                        Available Dental Procedures:
                      </h4>
                      <ul className="space-y-2.5">
                        {activeCategory.services.map((service, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/85 font-medium">
                            <CheckCircle2 size={16} className="text-secondary shrink-0 mt-0.5" />
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Procedure Image */}
                    <div className="md:col-span-5 relative h-56 md:h-64 rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-gray-100">
                      <Image
                        src={activeCategory.image}
                        alt={activeCategory.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold">
                        KNCH Dental Care Clinic
                      </div>
                    </div>

                  </div>

                  {/* Bottom Appointment Prompt */}
                  <div className="pt-4 border-t border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-foreground/75">
                      <p className="font-semibold text-primary">Need relief from dental pain or cosmetic consultation?</p>
                      <p>Appointments available Mon - Sat &bull; Walk-ins welcome for dental emergencies.</p>
                    </div>
                    <a
                      href={`https://wa.me/917373729709?text=${encodeURIComponent(
                        `*Hello Dr. Anitha Sukumar!* 👋\n\nI would like to inquire about *${activeCategory.name}* at your dental clinic. Please guide me.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-primary text-white hover:bg-primary/90 rounded-full text-xs font-bold transition-all shadow shrink-0 flex items-center gap-1.5"
                    >
                      <span>Inquire About {activeCategory.name.split(" ")[0]}</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
