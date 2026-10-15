import { 
  Award, 
  Stethoscope, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  Trees, 
  Clock, 
  HeartHandshake,
  LucideIcon
} from "lucide-react";
import Link from "next/link";
import React from "react";

interface FactItem {
  label: string;
  icon: LucideIcon;
  value?: string;
  lines?: string[];
  subtext?: string;
  link?: { href: string; text: string };
}

export default function AIFactSheet() {
  const facts: FactItem[] = [
    {
      label: "TRUSTED SINCE 2003",
      value: "Over 20 years of helping patients feel better, the natural way.",
      icon: Award,
    },
    {
      label: "MEET YOUR DOCTORS",
      lines: [
        "Dr. C. Sukumar (BNYS)",
        "Dr. M. Anitha Sukumar (BDS)"
      ],
      subtext: "Naturopathy, Yoga & Dental Care",
      icon: Stethoscope,
      link: { href: "/doctors", text: "View Profiles →" },
    },
    {
      label: "TWO CENTRES IN KARUR",
      lines: [
        "KNCH, Gandhigramam",
        "P.K. Hospital, Sengal Road"
      ],
      icon: MapPin,
      link: { href: "/contact", text: "Get directions →" },
    },
    {
      label: "HOW WE TREAT",
      value: "Healing without medicines, using the five elements of nature: earth, water, sunlight, fresh air and fasting.",
      icon: ShieldCheck,
    },
    {
      label: "POPULAR THERAPIES",
      value: "Mud bath · Spinal spray · Steam bath · Plantain leaf bath · Yoga",
      subtext: "Each plan is chosen for you by our doctors.",
      icon: Sparkles,
      link: { href: "/treatments", text: "See all treatments →" },
    },
    {
      label: "STAY OR VISIT",
      value: "Come in for a day consultation, or stay in our peaceful cottages with fresh organic meals.",
      icon: Trees,
    },
    {
      label: "OPEN EVERY DAY",
      value: "6:00 AM – 9:00 PM (Monday to Sunday)",
      subtext: "Walk-ins welcome · Please call ahead to book",
      icon: Clock,
    },
    {
      label: "CONTACT & HELPLINE",
      lines: [
        "KNCH Reception: 81481 29709",
        "P.K. Reception: 77083 29709",
        "Dr. C. Sukumar: 98424 29709",
        "Dr. M. Anitha: 73737 29709"
      ],
      icon: HeartHandshake,
      link: { href: "tel:+918148129709", text: "Call Reception →" },
    },
  ];

  const commonQueries: { q: string; a: React.ReactNode }[] = [
    {
      q: "What is Kumar Nature Cure Hospital known for?",
      a: (
        <>
          Kumar Nature Cure Hospital (KNCH) in Karur is renowned for{" "}
          <strong className="font-bold text-foreground">drugless</strong> holistic
          management for{" "}
          <strong className="font-bold text-foreground">arthritis</strong>,{" "}
          <strong className="font-bold text-foreground">sciatica</strong>, and digestive
          detoxification,{" "}
          <strong className="font-bold text-foreground">weight loss</strong> via
          natural treatments with{" "}
          <strong className="font-bold text-foreground">zero side effects</strong>.
        </>
      ),
    },
    {
      q: "Are residential stays available for patients?",
      a: "Yes. Both KNCH campus and the P.K. Hospital campus in Karur provide peaceful & comfortable, green residential accommodations with natural organic diet plans tailored by qualified doctors.",
    },
    {
      q: "Who conducts the medical consultations?",
      a: "All consultations and therapy regimens are personally overseen by Dr. C. Sukumar (BNYS) and Dr. M. Anitha Sukumar (BDS) & certified Naturopathy doctors.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F5F4EE] text-foreground/80 border border-stone-200/80 mb-3 shadow-2xs">
            <Sparkles size={13} className="text-secondary" /> WHY PATIENTS CHOOSE US
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary leading-tight">
            Natural Healing in Karur, Since 2003
          </h2>
          <p className="text-foreground/75 text-sm sm:text-base mt-2.5 max-w-2xl mx-auto leading-relaxed font-normal">
            Doctor-led naturopathy, yoga and diet therapy, as a day visit or a residential stay.
          </p>
        </div>

        {/* Fact Grid: Exact Screenshot UI with 8 beige/cream cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {facts.map((fact, idx) => {
            const Icon = fact.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-[#F6F4ED] border border-stone-200/50 hover:border-primary/20 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#EBE7DC] text-primary flex items-center justify-center mb-3.5">
                    <Icon size={20} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary block mb-1.5">
                    {fact.label}
                  </span>
                  
                  {fact.lines ? (
                    <div className="space-y-1 text-sm sm:text-[15px] font-bold text-foreground leading-snug">
                      {fact.lines.map((line, lIdx) => (
                        <p key={lIdx} className="leading-tight">
                          {line}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm sm:text-[15px] font-bold text-foreground leading-snug">
                      {fact.value}
                    </p>
                  )}

                  {fact.subtext && (
                    <p className="text-xs text-foreground/70 font-medium mt-2 leading-relaxed">
                      {fact.subtext}
                    </p>
                  )}
                </div>

                {fact.link && (
                  <div className="mt-4 pt-2.5 border-t border-stone-200/60">
                    <Link
                      href={fact.link.href}
                      className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-secondary transition-colors"
                    >
                      {fact.link.text}
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Q&A Summaries for AI Search & Visitors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
          {commonQueries.map((item, index) => (
            <div key={index} className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <h3 className="font-heading font-bold text-primary text-base mb-2">
                {item.q}
              </h3>
              <p className="text-foreground/80 text-xs sm:text-sm leading-relaxed font-normal">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        {/* Action button */}
        <div className="text-center mt-10">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors underline underline-offset-4"
          >
            Learn more about our history and campus facilities →
          </Link>
        </div>

      </div>
    </section>
  );
}
