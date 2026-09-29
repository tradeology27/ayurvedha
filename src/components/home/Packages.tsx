"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    name: "Basic Wellness",
    duration: "7 Days",
    price: "₹35,000",
    desc: "Perfect for a quick detox, stress relief, and natural rejuvenation.",
    features: [
      "Doctor Consultation & Vital Check",
      "Full Body Therapeutic Massage",
      "Mud Packs & Herbal Steam Bath",
      "Natural Diet & Raw Juice Therapy",
      "Daily Yoga & Pranayama Sessions",
      "Comfortable Budget Accommodation",
    ],
    recommended: false,
  },
  {
    name: "Deep Healing",
    duration: "14 Days",
    price: "₹65,000",
    desc: "Comprehensive 5-element drugless care for chronic health conditions.",
    features: [
      "Comprehensive Root-Cause Diagnosis",
      "Full Body Mud Bath & Spinal Spray",
      "Signature Plantain-Leaf Sun Bath",
      "Acupuncture & Hydrotherapy Regimen",
      "Customized Clinical Diet Therapy",
      "Comfortable Residential Cottage Stay",
      "Post-Discharge Lifestyle Follow-up",
    ],
    recommended: true,
  },
  {
    name: "Premium Retreat",
    duration: "21 Days",
    price: "₹95,000",
    desc: "Complete lifestyle transformation in our 24-acre serene nature campus.",
    features: [
      "Daily Chief Doctor Consultations",
      "Advanced 5-Element Detox Regimen",
      "Comprehensive Dental Wellness Check",
      "Exclusive Organic Healing Meals",
      "Private Yoga & Meditation Guidance",
      "24-Acre Lush Greenery Accommodation",
      "6 Months Continuous Follow-up Support",
    ],
    recommended: false,
  },
];

export default function Packages() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">
            Healing Packages
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Invest in Your Health
          </h3>
          <p className="text-lg text-foreground/70 font-light">
            Choose a holistic healing journey that suits your needs. All packages include personalized care from our expert Naturopathy and Dental specialists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative bg-white rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                pkg.recommended
                  ? "border-2 border-secondary shadow-2xl scale-100 md:scale-105 z-10"
                  : "border border-gray-100 shadow-lg hover:shadow-xl"
              }`}
            >
              {pkg.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8 pb-8 border-b border-gray-100">
                <h4 className="text-2xl font-heading font-bold text-primary mb-2">
                  {pkg.name}
                </h4>
                <p className="text-secondary font-medium mb-4">{pkg.duration}</p>
                <div className="text-4xl font-bold text-foreground mb-4">
                  {pkg.price}
                </div>
                <p className="text-foreground/70 text-sm font-light h-10">
                  {pkg.desc}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary shrink-0">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="text-foreground/80 font-light text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`block w-full text-center py-4 rounded-full font-medium transition-colors ${
                  pkg.recommended
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-gray-100 text-primary hover:bg-gray-200"
                }`}
              >
                Choose Package
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
