"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  Stethoscope, 
  Leaf, 
  Bed, 
  Sun, 
  Sprout, 
  HeartHandshake, 
  Sparkles 
} from "lucide-react";
import Link from "next/link";

const reasons = [
  {
    icon: <Leaf size={24} />,
    title: "100% Drugless Healing",
    desc: "Panchamahabhuta therapies treating root causes without pharmaceutical side effects.",
    link: "/treatments"
  },
  {
    icon: <Stethoscope size={24} />,
    title: "Founder-Led Care",
    desc: "Directly guided by Founder Dr. C. Sukumar, B.N.Y.S. with over 20 years of clinical mastery.",
    link: "/doctors"
  },
  {
    icon: <Bed size={24} />,
    title: "Comfortable Accommodation",
    desc: "Residential facilities designed to suit each individual patient's budget.",
    link: "/contact"
  },
  {
    icon: <Sun size={24} />,
    title: "Signature Plantain-Leaf Bath",
    desc: "Iconic sun-perspiration detox therapy harnessing natural chlorophyll.",
    link: "/treatments"
  },
  {
    icon: <Building2 size={24} />,
    title: "10,000 Sq.Ft Green Campus",
    desc: "Surrounded by calm, serene nature and greenery for total mental and physical peace.",
    link: "/gallery"
  },
  {
    icon: <Sprout size={24} />,
    title: "Organic Satvik & Juice Diet",
    desc: "Nutritious natural healing meals tailored to individual body constitution.",
    link: "/treatments"
  },
  {
    icon: <Sparkles size={24} />,
    title: "Holistic Dental Care Wing",
    desc: "Unique dedicated dental department led by Dr. M. Anitha Sukumar, B.D.S. in a sterile setup.",
    link: "/treatments"
  },
  {
    icon: <HeartHandshake size={24} />,
    title: "Established Since 2003",
    desc: "Over two decades of trusted healing legacy on Trichy National Highway, Karur.",
    link: "/about"
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0c2419] via-primary to-[#0f2b1d] text-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -ml-40 -mb-40 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white mb-6 leading-[1.1] drop-shadow-lg">
            The Kumar Hospital <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500">Nature Cure & Dental</span> Difference
          </h2>
          <p className="text-white/80 font-light text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            We restore harmony between mind and body through personalized drugless therapies, serene natural surroundings, and expert medical supervision.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-7xl mx-auto">
          {reasons.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-start hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              <Link href={feat.link} className="absolute inset-0 z-20 cursor-pointer rounded-3xl">
                <span className="sr-only">Read more about {feat.title}</span>
              </Link>
              {/* Subtle hover gradient inside card */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-600 text-primary font-bold mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 z-10">
                <div className="absolute inset-0 bg-secondary/40 blur-xl -z-10 group-hover:bg-secondary/60 transition-colors" />
                {feat.icon}
              </div>
              
              <h3 className="font-heading font-bold text-xl text-white mb-3 z-10 drop-shadow-sm group-hover:text-amber-100 transition-colors">
                {feat.title}
              </h3>
              <p className="text-white/70 font-light text-sm leading-relaxed z-10">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Callout Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2.5rem] p-8 sm:p-14 shadow-2xl text-foreground relative overflow-hidden max-w-5xl mx-auto border border-gray-100"
        >
          {/* Subtle background pattern in stats box */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-gray-200/60 relative z-10">
            <div className="pt-4 sm:pt-0 px-2 group">
              <div className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-green-700 mb-2 transform group-hover:scale-105 transition-transform duration-300">
                20+
              </div>
              <p className="text-sm font-extrabold text-foreground/80 uppercase tracking-wider">Years Experience</p>
              <p className="text-xs text-foreground/50 mt-1 font-medium">Est. 2003</p>
            </div>

            <div className="pt-4 sm:pt-0 px-2 group">
              <div className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-amber-400 to-orange-500 mb-2 transform group-hover:scale-105 transition-transform duration-300">
                100%
              </div>
              <p className="text-sm font-extrabold text-foreground/80 uppercase tracking-wider">Medicine-Free</p>
              <p className="text-xs text-foreground/50 mt-1 font-medium">No Drugs & No Surgery</p>
            </div>

            <div className="pt-4 sm:pt-0 px-2 group">
              <div className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-green-700 mb-2 transform group-hover:scale-105 transition-transform duration-300">
                50+
              </div>
              <p className="text-sm font-extrabold text-foreground/80 uppercase tracking-wider">Modern Treatments</p>
              <p className="text-xs text-foreground/50 mt-1 font-medium">Drugless Therapies</p>
            </div>

            <div className="pt-4 sm:pt-0 px-2 group">
              <div className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-amber-400 to-orange-500 mb-2 transform group-hover:scale-105 transition-transform duration-300">
                10K
              </div>
              <p className="text-sm font-extrabold text-foreground/80 uppercase tracking-wider">Sq.Ft Green Land</p>
              <p className="text-xs text-foreground/50 mt-1 font-medium">Calm & Serene</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
