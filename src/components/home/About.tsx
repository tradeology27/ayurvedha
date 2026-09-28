"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="pt-24 pb-12 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-16">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >

            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
              About Kumar Nature Cure Hospital
            </h2>

            <div className="space-y-4 text-foreground/80 font-light leading-relaxed mb-8 text-base md:text-lg">
              <p>
                <strong>Kumar Nature Cure Hospital</strong> was started in <strong>2003</strong>. It is located at <strong>Shakthi Nagar, Gandhigramam</strong> which is about <strong>5km from Karur bus stand in Trichy National Highway</strong>.
              </p>
              <p>
                The hospital is situated in about <strong>10,000 sq.ft. of land</strong> surrounded by a calm and serene atmosphere and full of greenery, which provides peace and relaxation of mind and body.
              </p>
              <p>
                <strong>Our hospital</strong> provides modern and comfortable accommodation to suit an individual&apos;s budget. We recommend patients to stay in our premises which is supervised by qualified and experienced doctors.
              </p>
            </div>

            {/* Specialised Treatments List */}
            <div className="bg-background rounded-2xl p-5 sm:p-6 border border-gray-200/80 mb-8">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-3.5">
                We Do Offer Specialised Treatments Like:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Naturopathy Treatment",
                  "Massage therapy",
                  "Mud therapy",
                  "Hydrotherapy",
                  "Yoga therapy",
                  "Plantain-leaf bath",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="text-secondary shrink-0" size={18} />
                    <span className="font-semibold text-sm sm:text-base text-foreground/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 w-full">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 bg-primary text-white hover:bg-primary/90 rounded-full font-bold transition-all shadow-md text-sm sm:text-base text-center"
              >
                Discover Our Heritage
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full font-bold transition-all text-sm sm:text-base text-center"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>

          {/* Right: Hospital Photo & Floating Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative pt-8 sm:pt-16 lg:pt-0"
          >
            <div className="relative h-[400px] sm:h-[550px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/kumar_hospital_main.jpg"
                alt="Kumar Nature Cure Hospital - Gandhigramam Karur"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              
              {/* Bottom Caption on Photo */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="bg-secondary text-primary font-bold text-xs uppercase px-3 py-1 rounded-full">
                  Gandhigramam, Karur
                </span>
                <p className="font-heading font-bold text-lg mt-2">
                  Kumar Nature Cure Hospital
                </p>
                <p className="text-white/80 text-xs">
                  Main Center • Shakthi Nagar (Trichy Highway, 5km from Bus Stand)
                </p>
              </div>
            </div>

            {/* Floating Stats Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -top-8 right-4 sm:-top-14 sm:-right-6 bg-white p-4 sm:p-6 rounded-2xl shadow-2xl border-b-4 border-secondary max-w-[200px] sm:max-w-xs z-10"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-secondary/15 flex items-center justify-center text-primary font-bold">
                  <Award size={28} className="text-secondary" />
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-primary">
                    20+
                  </div>
                  <p className="text-xs font-bold text-foreground uppercase tracking-wider">
                    Years of Experience
                  </p>
                  <p className="text-foreground/60 text-xs">Serving Since 2003</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* 3 Prominent Stat Counters */}
        <div className="mt-20 pt-12 border-t border-gray-200/80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="pt-6 md:pt-0 px-4">
              <div className="text-4xl sm:text-5xl font-heading font-bold text-primary mb-2">
                20+
              </div>
              <p className="text-lg font-bold text-foreground/90">Years of Experience</p>
              <p className="text-foreground/60 text-xs sm:text-sm mt-1">
                Founded in 2003 with trusted drugless nature cure expertise
              </p>
            </div>

            <div className="pt-6 md:pt-0 px-4">
              <div className="text-4xl sm:text-5xl font-heading font-bold text-secondary mb-2">
                100%
              </div>
              <p className="text-lg font-bold text-foreground/90">Medicine-Free</p>
              <p className="text-foreground/60 text-xs sm:text-sm mt-1">
                Pure Nature Cure Therapies without any medicine or surgery
              </p>
            </div>

            <div className="pt-6 md:pt-0 px-4">
              <div className="text-4xl sm:text-5xl font-heading font-bold text-primary mb-2">
                50+
              </div>
              <p className="text-lg font-bold text-foreground/90">Modern Treatments</p>
              <p className="text-foreground/60 text-xs sm:text-sm mt-1">
                Time-tested natural therapies, hydrotherapy & lifestyle care
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
