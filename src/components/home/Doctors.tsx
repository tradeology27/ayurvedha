"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { doctorsData } from "@/data/doctors";
import { ArrowRight, Phone, CheckCircle2, Calendar, Sparkles, MapPin, Clock } from "lucide-react";

export default function Doctors() {
  return (
    <section id="doctors" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mb-4 leading-tight">
            Meet Our Founders
          </h2>
          <p className="text-foreground/75 font-light text-base md:text-lg">
            Experienced Naturopathy, Yogic Science & Advanced Dental Care under one hospital roof for complete mind-body and oral wellness.
          </p>
        </div>

        {/* Both Doctors Side by Side (2-Columns on LG / XL) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {doctorsData.map((doc, idx) => {
            const isDoctor1 = doc.id === "dr-c-sukumar";

            return (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col sm:flex-row h-full"
              >
                {/* LEFT SIDE: PHOTO, BADGE, AREAS OF EXPERTISE & CALL BUTTON */}
                <div className="w-full sm:w-[45%] lg:w-[43%] shrink-0 p-5 sm:p-6 flex flex-col justify-between bg-stone-50/80 border-b sm:border-b-0 sm:border-r border-gray-100">
                  <div className="space-y-3">
                    {/* Photo Frame (Unified 4:5 aspect ratio) */}
                    <div className="relative w-full rounded-2xl overflow-hidden shadow-md border-2 border-white bg-white aspect-[4/5]">
                      <Image
                        src={doc.image}
                        alt={doc.name}
                        fill
                        priority
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 320px"
                        className="object-cover object-top"
                      />
                    </div>

                    {/* Designation Badge Under Photo */}
                    <div className="text-center pt-0.5">
                      <span className="inline-block bg-secondary text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        {doc.designation}
                      </span>
                      <p className="text-xs text-primary font-bold mt-1">
                        {doc.experience}
                      </p>
                    </div>

                    {/* Areas of Expertise (Moved to Left Column as requested) */}
                    <div className="bg-white rounded-xl p-3 sm:p-3.5 border border-gray-200/80 shadow-sm space-y-1.5">
                      <p className="text-xs font-bold uppercase tracking-wider text-primary">
                        Areas of Expertise:
                      </p>
                      {doc.focusAreas.slice(0, 3).map((area, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-1.5 text-xs sm:text-sm text-foreground/85 font-medium leading-tight">
                          <CheckCircle2 size={15} className="text-secondary shrink-0 mt-0.5" />
                          <span>{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Direct Phone Call Button */}
                  <div className="pt-3 mt-3 border-t border-gray-200/60">
                    <a
                      href={`tel:${doc.phone.replace(/\s+/g, '')}`}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all text-center shadow-sm"
                    >
                      <Phone size={14} /> Call {doc.phone}
                    </a>
                  </div>
                </div>

                {/* RIGHT SIDE: CONTENT, PHILOSOPHY, BIO & TIMINGS */}
                <div className="w-full sm:w-[55%] lg:w-[57%] p-5 sm:p-6 lg:p-7 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Doctor Name & Qualifications */}
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-primary mb-1">
                      {doc.name}
                    </h3>
                    <p className="text-secondary font-bold text-xs sm:text-sm mb-0.5">
                      {doc.qualifications} {doc.registrationNo && `• ${doc.registrationNo}`}
                    </p>
                    <p className="text-foreground/60 text-[11px] sm:text-xs font-medium mb-3">
                      {doc.university}
                    </p>

                    {/* Philosophy / Statement Box */}
                    <div className="bg-primary/5 border-l-4 border-secondary p-3 rounded-r-xl mb-3.5">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-primary mb-1 flex items-center gap-1">
                        <Sparkles size={12} className="text-secondary shrink-0" />
                        {isDoctor1 ? "Medicine-Free Healing:" : "Sterile Oral Care:"}
                      </h4>
                      <p className="text-xs text-foreground/85 font-medium italic leading-relaxed">
                        {isDoctor1 ? (
                          <>&ldquo;Our hospital is specialised for treating all kinds of diseases either acute or chronic by Nature Cure Therapies without any medicine and surgery. During the treatment and after treatment people can avoid allopathy and herbal medicine.&rdquo;</>
                        ) : (
                          <>&ldquo;All kinds of dental diseases are treated here with utmost care in a completely sterile atmosphere. Oral Health reflects general health and well-being of the community.&rdquo;</>
                        )}
                      </p>
                    </div>

                    {/* Bio Summary */}
                    <p className="text-xs text-foreground/75 font-light leading-relaxed mb-3.5">
                      {isDoctor1 ? (
                        <>Dr. C. Sukumar is the Chief Medical Officer and Managing Director of our hospital, graduated as Bachelor of Naturopathy and Yogic Science (B.N.Y.S) from Dr. MGR Medical University, Chennai. He has been successfully running Kumar Nature Cure Hospital since 2003.</>
                      ) : (
                        <>Dr. M. Anitha Sukumar B.D.S. looks after the dental wing of this hospital. To give complete health care, our hospital features this dedicated dental wing as a unique part of our holistic wellness mission.</>
                      )}
                    </p>

                    {/* Consultation Timings & Location Card */}
                    <div className="bg-background rounded-xl p-3 border border-gray-100 text-[11px] text-foreground/80 space-y-1.5 shadow-sm">
                      <div className="flex items-center gap-1.5 font-medium text-primary">
                        <Clock size={13} className="text-secondary shrink-0" />
                        <span>{doc.timings}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-foreground/70">
                        <MapPin size={13} className="text-secondary shrink-0" />
                        <span className="truncate">{doc.hospitalBranch}</span>
                      </div>
                    </div>
                  </div>

                  {/* Book Consultation Button */}
                  <div className="pt-3.5 border-t border-gray-100 mt-4">
                    <Link
                      href={`/contact?doctor=${encodeURIComponent(doc.name)}`}
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-primary hover:bg-primary/90 text-white text-[11px] font-bold uppercase tracking-wider transition-all shadow-sm text-center"
                    >
                      <Calendar size={12} /> Book Consultation
                    </Link>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* View Full Doctors Page CTA */}
        <div className="text-center mt-12">
          <Link
            href="/doctors"
            className="inline-flex items-center gap-2 bg-secondary text-primary font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider hover:bg-secondary/90 transition-all shadow-md"
          >
            <span>View Full Doctor Profiles & Hospital Facilities</span>
            <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
}
