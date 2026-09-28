"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { hospitalBranches } from "@/data/hospitals";
import { MapPin, Phone, Clock, Bed, CheckCircle2, Stethoscope, ArrowRight } from "lucide-react";

export default function HospitalsSection() {
  return (
    <section id="hospitals" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-5 leading-tight">
            Our Hospitals & Healing Campuses
          </h2>
          <p className="text-foreground/75 font-light text-base md:text-lg leading-relaxed">
            Under <strong>Kumar Nature Cure Hospital</strong>, we serve patients through two specialized centers — our main multi-specialty clinical hospital and our serene 10,000 sq.ft. green nature retreat.
          </p>
        </div>

        {/* Hospitals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {hospitalBranches.map((hospital, index) => (
            <motion.div
              key={hospital.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image Container with Badge */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-gray-100">
                <Image
                  src={hospital.image}
                  alt={hospital.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                




                {/* Bottom Overlay Title */}
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <p className="text-secondary text-xs font-semibold uppercase tracking-wider mb-1">
                    {hospital.category}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white leading-snug">
                    {hospital.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <p className="text-foreground/80 font-light text-sm sm:text-base mb-6 leading-relaxed">
                  {hospital.description}
                </p>

                {/* Key Features */}
                <div className="mb-6 space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                    Campus Highlights:
                  </h4>
                  {hospital.features.slice(0, 4).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/85 font-medium">
                      <CheckCircle2 size={16} className="text-secondary shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Address & Timings */}
                <div className="bg-background rounded-2xl p-4 sm:p-5 border border-gray-200/80 mb-6 space-y-3 text-xs sm:text-sm text-foreground/80">
                  <div className="flex items-start gap-2.5">
                    <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-primary block font-semibold">{hospital.address.line1}</strong>
                      <span>{hospital.address.area}, {hospital.address.city} - {hospital.address.pincode}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Clock size={16} className="text-primary shrink-0" />
                    <span>{hospital.timings}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Stethoscope size={16} className="text-primary shrink-0" />
                    <span className="font-medium text-primary">{hospital.doctors.join(" • ")}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <a
                    href={`tel:${hospital.phones[0].replace(/\s+/g, '')}`}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-primary text-primary hover:bg-primary hover:text-white font-medium text-sm transition-all"
                  >
                    <Phone size={15} /> Call Hospital
                  </a>
                  <Link
                    href={`/contact?hospital=${encodeURIComponent(hospital.name)}`}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-primary text-white hover:bg-primary/90 font-medium text-sm transition-all shadow-md"
                  >
                    Book Consult <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Accommodation Callout */}
        <div className="mt-14 max-w-4xl mx-auto bg-primary text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-secondary font-bold text-xs uppercase tracking-widest">
              Comfortable Inpatient Stay
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold">
              Looking for Residential Healing & Accommodation?
            </h3>
            <p className="text-white/80 font-light text-sm sm:text-base max-w-xl">
              KNCH provides modern and comfortable accommodation to suit each individual&apos;s budget. We recommend patients stay in our serene green premises supervised 24/7 by qualified doctors.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-3.5 rounded-full transition-all shadow-lg text-sm"
          >
            Inquire About Rooms
          </Link>
        </div>
      </div>
    </section>
  );
}
