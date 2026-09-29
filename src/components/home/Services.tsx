"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { specialisedTreatments } from "@/data/treatments";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Services({ hideExploreLink = false }: { hideExploreLink?: boolean } = {}) {
  return (
    <section id="specialised-treatments" className="pt-12 pb-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-5 leading-tight">
            Our Specialised Treatments
          </h2>
          <p className="text-foreground/75 font-light text-base md:text-lg leading-relaxed">
            At <strong>Kumar Nature Cure Hospital</strong>, we offer authentic drugless healing combining the 5 natural elements. Experience profound cellular detoxification and long-lasting recovery.
          </p>
        </div>

        {/* 8 Specialised Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {specialisedTreatments.map((treatment, idx) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-background rounded-3xl overflow-hidden border border-gray-200/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
            >
              {/* Card Image */}
              <div className="relative h-60 w-full overflow-hidden bg-gray-200">
                <Image
                  src={treatment.image}
                  alt={treatment.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, (max-width: 1400px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                

                {/* Bottom title over image */}
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white leading-tight">
                    {treatment.name}
                  </h3>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-7 flex flex-col flex-grow">
                <p className="text-primary font-semibold text-xs sm:text-sm mb-2">
                  {treatment.tagline}
                </p>
                <p className="text-foreground/80 font-normal text-sm sm:text-base mb-5 leading-relaxed line-clamp-3">
                  {treatment.description}
                </p>

                {/* Key Benefits */}
                <div className="space-y-2.5 mb-6 pt-4 border-t border-gray-200/60 flex-grow">
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-secondary">
                    Key Health Benefits:
                  </p>
                  {treatment.benefits.slice(0, 3).map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/85 font-medium">
                      <CheckCircle2 size={16} className="text-secondary shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Card CTA */}
                <div className="pt-2 flex items-center justify-between gap-3">
                  <a
                    href={`https://wa.me/918148129709?text=${encodeURIComponent(`*Hello Kumar Hospital!* 👋\n\nI would like to book the *${treatment.name}* therapy. Please provide more details.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 bg-primary text-white hover:bg-primary/90 rounded-xl text-center text-sm sm:text-base font-bold transition-all shadow hover:shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Book {treatment.name}</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore All 50+ Treatments Bar */}
        {!hideExploreLink && (
          <div className="mt-16 text-center">
            <p className="text-foreground/70 text-sm mb-4 font-light">
              Looking for other therapies? Explore our full catalogue of 50+ Naturopathy, Hydrotherapy & Yoga treatments.
            </p>
            <Link
              href="/treatments"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-secondary text-primary font-bold rounded-full hover:bg-secondary/90 transition-all shadow-lg text-sm"
            >
              <span>Explore All 50+ Modern Treatments</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
