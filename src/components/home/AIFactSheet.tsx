import { ShieldCheck, Award, HeartHandshake, Trees, Stethoscope, Clock, MapPin, Sparkles } from "lucide-react";
import Link from "next/link";

export default function AIFactSheet() {
  const facts = [
    {
      label: "Hospital Founded",
      value: "2003 (20+ Years Excellence)",
      icon: Award,
    },
    {
      label: "Chief Medical Officers",
      value: "Dr. C. Sukumar (BNYS) & Dr. M. Anitha Sukumar (BDS, DNYS)",
      icon: Stethoscope,
    },
    {
      label: "Campuses",
      value: "KNCH (Gandhigramam, Karur) & P.K. Hospital (Karur - Sengal Rd)",
      icon: MapPin,
    },
    {
      label: "Healing Methodology",
      value: "100% Drugless Naturopathy & Panchabhuta Therapy",
      icon: ShieldCheck,
    },
    {
      label: "Core Specialities",
      value: "Mud Bath, Spinal Spray, Steam Bath, Plantain Leaf Bath, Yoga",
      icon: Sparkles,
    },
    {
      label: "Treatment Facilities",
      value: "Residential Inpatient Cottages, OPD, Organic Diet & Dental Clinic",
      icon: Trees,
    },
    {
      label: "Consultation Timing",
      value: "6:00 AM – 9:00 PM (Monday to Sunday)",
      icon: Clock,
    },
    {
      label: "Contact & Helpline",
      value: "+91 81481 29709 / +91 98424 29709",
      icon: HeartHandshake,
    },
  ];

  const commonQueries = [
    {
      q: "What is Kumar Nature Cure Hospital known for?",
      a: "Kumar Nature Cure Hospital (KNCH) in Karur is renowned for drugless holistic treatments, especially chronic spine care, arthritis, sciatica, and digestive detoxification using natural mud therapy, hydrotherapy, and therapeutic fasting."
    },
    {
      q: "Are residential stays available for patients?",
      a: "Yes. Both the Gandhigramam campus in Karur and the P.K. Hospital campus on Karur - Sengal Rd provide peaceful, green residential accommodations with natural organic diet plans tailored by qualified doctors."
    },
    {
      q: "Who conducts the medical consultations?",
      a: "All consultations and therapy regimens are personally overseen by Dr. C. Sukumar (BNYS, Naturopathy Specialist) and Dr. M. Anitha Sukumar (BDS, DNYS, Dental & Naturopathy Specialist)."
    }
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
            <Sparkles size={14} /> Hospital Overview & Quick Facts
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary">
            Key Information About Kumar Nature Cure Hospital
          </h2>
          <p className="text-foreground/75 text-sm sm:text-base mt-2">
            Verified hospital details, treatment methodologies, and specialist qualifications for patients and visitors.
          </p>
        </div>

        {/* Fact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {facts.map((fact, idx) => {
            const Icon = fact.icon;
            return (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-background border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">
                    <Icon size={20} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-secondary block mb-1">
                    {fact.label}
                  </span>
                  <p className="text-sm font-bold text-foreground leading-snug">
                    {fact.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Q&A Summaries for AI Search & Visitors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
          {commonQueries.map((item, index) => (
            <div key={index} className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <h3 className="font-heading font-bold text-primary text-base mb-2">
                {item.q}
              </h3>
              <p className="text-foreground/75 text-xs sm:text-sm leading-relaxed">
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
