"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  ChevronDown, 
  Sparkles, 
  ArrowRight, 
  Plane, 
  Train, 
  Car, 
  ExternalLink,
  MessageCircle,
  HelpCircle,
  Bed,
  Stethoscope,
  Smile,
  Leaf
} from "lucide-react";
import { SEOPageData, seoPagesData } from "@/data/seoPages";
import { hospitalBranches } from "@/data/hospitals";
import AppointmentForm from "@/components/home/AppointmentForm";

interface SEOPageContentProps {
  pageData: SEOPageData;
}

export default function SEOPageContent({ pageData }: SEOPageContentProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Get related pages within same or neighboring categories
  const relatedPages = seoPagesData
    .filter((p) => p.slug !== pageData.slug && (p.category === pageData.category || p.category === "karur"))
    .slice(0, 6);

  // Relevant branches
  const activeBranches = hospitalBranches.filter((b) => 
    pageData.hospitalsCovered.includes(b.id as "knch-main" | "pk-green-campus")
  );
  const displayBranches = activeBranches.length > 0 ? activeBranches : hospitalBranches;

  const whatsappMessage = encodeURIComponent(
    `Hello Kumar Nature Cure Hospital! I found your page regarding "${pageData.title}" from ${pageData.targetLocation.name}. I would like to enquire about consultation & treatments.`
  );

  return (
    <div className="bg-background min-h-screen text-foreground">
      {/* ========================================================
          1. BREADCRUMBS & TOP ALERT
      ======================================================== */}
      <section className="bg-primary/5 border-b border-primary/10 py-3">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-xs md:text-sm text-foreground/70">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary font-semibold truncate max-w-xs sm:max-w-md">
              {pageData.title}
            </span>
          </nav>
        </div>
      </section>

      {/* ========================================================
          2. HERO SECTION
      ======================================================== */}
      <section className="relative bg-gradient-to-br from-primary via-[#16382a] to-[#0f281e] text-white pt-14 pb-20 overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay">
          <Image
            src={pageData.heroImage || "/images/kumar_hospital_main.jpg"}
            alt={pageData.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/40 text-secondary text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
              <Sparkles size={15} />
              <span>{pageData.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight break-words">
              {pageData.headline}
            </h1>

            {/* Tamil Secondary Headline if applicable */}
            {pageData.tamilTitle && (
              <p className="text-lg sm:text-xl font-heading text-secondary/90 font-medium tracking-wide">
                {pageData.tamilTitle}
              </p>
            )}

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-white/85 font-light max-w-3xl mx-auto leading-relaxed">
              {pageData.subheadline}
            </p>

            {/* Clear Hospital Location & Inpatient Serving Notice */}
            <div className="bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/20 text-center max-w-2xl mx-auto space-y-2 shadow-inner">
              <p className="text-xs uppercase tracking-widest text-secondary font-bold flex items-center justify-center gap-1.5">
                <MapPin size={15} className="text-secondary shrink-0" /> Hospital Located in Karur, Tamil Nadu
              </p>
              <p className="text-xs sm:text-sm text-white/95 leading-relaxed">
                {pageData.targetLocation.name.toLowerCase() === "karur"
                  ? "Located at Shakthi Nagar, Gandhigramam (Main Campus) & Sengal 24-Acre Nature Sanctuary, Karur."
                  : `Welcoming patients from ${pageData.targetLocation.name} to our clinical hospital & 24-acre residential healing sanctuary in Karur.`}
              </p>
              {pageData.targetLocation.distanceFromHospital && (
                <div className="flex items-center justify-center flex-wrap gap-x-3 gap-y-1 text-xs text-white/90 font-medium pt-1.5 border-t border-white/15">
                  <span><strong className="text-secondary">Distance:</strong> {pageData.targetLocation.distanceFromHospital}</span>
                  {pageData.targetLocation.travelTime && (
                    <span>• <strong className="text-secondary">Travel Time:</strong> {pageData.targetLocation.travelTime}</span>
                  )}
                </div>
              )}
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={`https://wa.me/918148129709?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle size={18} />
                WhatsApp Consultation
              </a>

              <a
                href="tel:+918148129709"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-secondary hover:bg-secondary/90 text-primary font-bold text-sm sm:text-base shadow-lg transition-all"
              >
                <Phone size={18} />
                Call +91 81481 29709
              </a>

              <button
                type="button"
                onClick={() => setShowAppointmentModal(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/20 font-semibold text-sm sm:text-base transition-all"
              >
                <Calendar size={18} />
                Book Appointment
              </button>
            </div>

            {/* Quick Trust Points Bar */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                <p className="text-xs text-white/60">Practice Experience</p>
                <p className="text-sm font-bold text-secondary">Since 2003 (20+ Yrs)</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                <p className="text-xs text-white/60">Nature Cure Campus</p>
                <p className="text-sm font-bold text-secondary">24 Acres Sanctuary</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                <p className="text-xs text-white/60">Therapy Protocol</p>
                <p className="text-sm font-bold text-secondary">100% Drugless</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                <p className="text-xs text-white/60">Dental Care Wing</p>
                <p className="text-sm font-bold text-secondary">Sterile & Advanced</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          3. DOCTORS & CLINICAL LEADERSHIP
      ======================================================== */}
      <section className="py-16 bg-white border-b border-primary/10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">
              Qualified Medical Excellence
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary">
              Senior Physicians Supervised Healthcare
            </h2>
            <p className="text-foreground/70 text-sm mt-2">
              Direct consultation, personalized treatment planning, and daily patient supervision by university-graduated medical leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Dr. C. Sukumar */}
            <div className="bg-background rounded-2xl p-6 md:p-8 border border-primary/10 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 border-2 border-secondary/40 shadow">
                <Image
                  src="/images/dr_sukumar.jpg"
                  alt="Dr. C. Sukumar BNYS - Founder & CMO"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-wider">
                  Founder & Chief Medical Officer
                </span>
                <h3 className="text-xl font-heading font-bold text-primary">Dr. C. Sukumar</h3>
                <p className="text-xs font-semibold text-secondary">
                  B.N.Y.S. (Bachelor of Naturopathy & Yogic Science)
                </p>
                <p className="text-xs text-foreground/75 leading-relaxed">
                  Graduated from The Tamil Nadu Dr. M.G.R. Medical University, Chennai. Successfully running Kumar Nature Cure Hospital since 2003, specializing in chronic disease reversal without medicine or surgery.
                </p>
                <div className="pt-2 flex items-center justify-center sm:justify-start gap-3">
                  <a href="tel:+919842429709" className="text-xs font-bold text-primary hover:text-secondary flex items-center gap-1">
                    <Phone size={12} className="text-secondary" /> +91 98424 29709
                  </a>
                </div>
              </div>
            </div>

            {/* Dr. M. Anitha Sukumar */}
            <div className="bg-background rounded-2xl p-6 md:p-8 border border-primary/10 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 border-2 border-secondary/40 shadow">
                <Image
                  src="/images/dr_anitha_sukumar.jpg"
                  alt="Dr. M. Anitha Sukumar BDS - Dental Specialist"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-secondary/15 text-primary text-[11px] font-bold uppercase tracking-wider">
                  Dental Specialist & Head of Dental Wing
                </span>
                <h3 className="text-xl font-heading font-bold text-primary">Dr. M. Anitha Sukumar</h3>
                <p className="text-xs font-semibold text-secondary">
                  B.D.S. (Bachelor of Dental Surgery) • 18+ Years Exp.
                </p>
                <p className="text-xs text-foreground/75 leading-relaxed">
                  Registered Dental Surgeon treating all dental diseases with utmost care in a completely sterile atmosphere. Providing painless root canals, cosmetic smile designing, zirconia crowns, and family dentistry.
                </p>
                <div className="pt-2 flex items-center justify-center sm:justify-start gap-3">
                  <a href="tel:+917373729709" className="text-xs font-bold text-primary hover:text-secondary flex items-center gap-1">
                    <Phone size={12} className="text-secondary" /> +91 73737 29709
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. WHY PATIENTS CHOOSE US & KEY BENEFITS
      ======================================================== */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">
              Why Choose Kumar Nature Cure Hospital
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-primary">
              Why Patients from {pageData.targetLocation.name} Trust Us
            </h2>
            <p className="text-foreground/70 text-sm mt-3">
              We replace lifelong medicine dependency with fundamental, scientific five-element healing and patient-first clinical empathy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pageData.whyChooseUs.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-primary/10 shadow-sm hover:shadow-md transition-shadow space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-base">
                  {idx + 1}
                </div>
                <h3 className="font-heading font-bold text-lg text-primary">{item.title}</h3>
                <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Key Benefits Ribbon */}
          <div className="mt-12 bg-primary rounded-2xl p-8 text-white max-w-5xl mx-auto shadow-lg">
            <h3 className="text-xl font-heading font-bold text-secondary mb-6 text-center">
              Direct Health Transformation You Experience
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pageData.keyBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-white/90 font-light">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. FEATURED TREATMENTS & CONDITIONS TREATED
      ======================================================== */}
      <section className="py-16 bg-white border-y border-primary/10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-center">
            
            {/* Left: Treatments Highlight */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary block">
                Evidence-Based Nature Cure & Dentistry
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary">
                Specialised Therapies Tailored for You
              </h2>
              <p className="text-sm text-foreground/75 leading-relaxed">
                Whether you visit our Gandhigramam outpatient center or stay at our 24-acre Sengal retreat campus, every protocol is non-invasive and synchronized to your body&apos;s natural rhythms.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {pageData.featuredTreatments.map((treatment, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 bg-background rounded-xl border border-primary/10 text-xs sm:text-sm font-medium text-foreground">
                    <Leaf size={15} className="text-primary shrink-0" />
                    <span>{treatment}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/treatments"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary hover:text-secondary transition-colors"
                >
                  Explore All 25+ Nature Cure Therapies <ArrowRight size={15} />
                </Link>
                <Link
                  href="/treatments?tab=dental"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-secondary hover:text-primary transition-colors"
                >
                  View Complete Dental Wing <Smile size={15} />
                </Link>
              </div>
            </div>

            {/* Right: Conditions Successfully Treated */}
            <div className="lg:col-span-5 bg-background p-6 sm:p-8 rounded-3xl border border-primary/15 shadow-sm space-y-5">
              <h3 className="text-lg font-heading font-bold text-primary flex items-center gap-2">
                <Stethoscope size={20} className="text-secondary" />
                Conditions Treated Without Surgery or Medicine
              </h3>
              <p className="text-xs text-foreground/70">
                Thousands of chronic patients have successfully reversed long-standing conditions with us:
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-foreground/80">
                {pageData.conditionsTreated.map((condition, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                    <span>{condition}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 border-t border-primary/10">
                <a
                  href={`https://wa.me/918148129709?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-white text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  <MessageCircle size={15} /> Ask Doctor About Your Condition
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          6. OUR DUAL HOSPITAL CAMPUSES
      ======================================================== */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">
              Two Premier Campuses in Karur
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-primary">
              Choose Between Clinical Care or 24-Acre Nature Retreat
            </h2>
            <p className="text-foreground/70 text-sm mt-2">
              Both campuses are fully doctor-supervised, offering inpatient rooms, organic dining, and complete natural care.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {displayBranches.map((branch) => (
              <div 
                key={branch.id}
                className="bg-white rounded-3xl overflow-hidden border border-primary/15 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="relative h-60 w-full">
                  <Image
                    src={branch.image}
                    alt={branch.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-secondary text-xs px-3.5 py-1.5 rounded-full font-bold shadow">
                      {branch.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-primary">
                      {branch.name}
                    </h3>
                    <p className="text-xs font-medium text-secondary">
                      {branch.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                      {branch.description}
                    </p>

                    <div className="pt-2 space-y-2 text-xs text-foreground/80">
                      <div className="flex items-start gap-2">
                        <MapPin size={15} className="text-primary shrink-0 mt-0.5" />
                        <span>
                          {branch.address.line1}, {branch.address.area}, {branch.address.city} - {branch.address.pincode}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={15} className="text-primary shrink-0" />
                        <span>{branch.timings}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bed size={15} className="text-secondary shrink-0" />
                        <span className="font-semibold text-primary">
                          {branch.stayAvailable ? "Inpatient Residential Rooms Available" : "Outpatient Clinic"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-primary/10 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-primary">
                      <Phone size={13} className="text-secondary" />
                      <span>{branch.phones[0]}</span>
                    </div>

                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        branch.name + " " + branch.address.line1 + " " + branch.address.city
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary hover:text-primary transition-colors"
                    >
                      <ExternalLink size={13} /> View on Google Maps
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          7. TRAVEL, DIRECTIONS & HOW TO REACH
      ======================================================== */}
      <section className="py-16 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-primary/10 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                {pageData.targetLocation.isInternational ? <Plane size={24} /> : <Car size={24} />}
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-secondary font-bold block">
                  Travel & Connectivity
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-primary">
                  How to Reach from {pageData.targetLocation.name}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
              {pageData.targetLocation.howToReach || 
                `Karur is centrally positioned in Tamil Nadu with direct rail, road, and nearby airport connectivity from ${pageData.targetLocation.name}.`}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-background p-4 rounded-xl border border-primary/10">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase mb-1">
                  <Plane size={15} className="text-secondary" /> Nearest Airport
                </div>
                <p className="text-xs text-foreground/75">
                  Tiruchirappalli International Airport (TRZ) - only 40 km / 45 mins. Direct domestic & Gulf/SE Asia flights.
                </p>
              </div>

              <div className="bg-background p-4 rounded-xl border border-primary/10">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase mb-1">
                  <Train size={15} className="text-secondary" /> Railway Junction
                </div>
                <p className="text-xs text-foreground/75">
                  Karur Junction (KRR) connects directly with Chennai, Bangalore, Coimbatore, Madurai, Trichy, and Erode.
                </p>
              </div>

              <div className="bg-background p-4 rounded-xl border border-primary/10">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase mb-1">
                  <Car size={15} className="text-secondary" /> National Highways
                </div>
                <p className="text-xs text-foreground/75">
                  NH 44 (North-South corridor) & NH 81 (Trichy-Coimbatore) intersect directly in Karur.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs sm:text-sm text-primary font-medium">
                Need travel assistance or airport/station pickup? Our hospitality team is happy to assist.
              </div>
              <a
                href="tel:+918148129709"
                className="shrink-0 px-4 py-2 rounded-full bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-colors"
              >
                Call Reception 81481 29709
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. FREQUENTLY ASKED QUESTIONS (FAQ WITH ACCORDION)
      ======================================================== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">
              Clear Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary flex items-center justify-center gap-2">
              <HelpCircle size={26} className="text-secondary" />
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-foreground/70 mt-2">
              Common questions answered for patients traveling from {pageData.targetLocation.name}.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {pageData.faq.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="border border-primary/15 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 bg-background hover:bg-primary/5 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading font-bold text-sm sm:text-base text-primary">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-secondary shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 py-4 bg-white text-xs sm:text-sm text-foreground/80 leading-relaxed border-t border-primary/10">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          9. APPOINTMENT FORM SECTION
      ======================================================== */}
      <section className="py-16 bg-primary/5 border-t border-primary/10" id="appointment">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-1">
                Take Your First Step
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary">
                Book a Consultation or Enquire Online
              </h2>
              <p className="text-xs sm:text-sm text-foreground/70 mt-1">
                Fill out the quick form below or send us a WhatsApp message to schedule your visit.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100">
              <AppointmentForm 
                compact={true}
                defaultHospital={pageData.hospitalsCovered.includes("pk-green-campus") ? "pk-hospital" : "knch-main"}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          10. SEARCH ENGINE INDEXING & CRAWLER TAXONOMY
          (Hidden from users via sr-only / semantic indexing for Google/crawlers)
      ======================================================== */}
      <section className="sr-only" aria-hidden="true">
        <h2>Keywords and Related Natural Health Searches for {pageData.targetLocation.name}</h2>
        <ul>
          {pageData.keywords.map((kw, idx) => (
            <li key={idx}>{kw}</li>
          ))}
        </ul>
        <nav aria-label="Related Health Searches">
          <ul>
            {relatedPages.map((related) => (
              <li key={related.slug}>
                <Link href={`/${related.slug}`}>
                  {related.title} - {related.targetLocation.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {/* Modal for Appointment */}
      {showAppointmentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-primary/20">
            <button
              type="button"
              onClick={() => setShowAppointmentModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground flex items-center justify-center font-bold z-10"
              aria-label="Close Modal"
            >
              ✕
            </button>
            <h3 className="text-xl font-heading font-bold text-primary mb-1">
              Schedule Your Visit
            </h3>
            <p className="text-xs text-foreground/70 mb-4">
              Inpatient and outpatient bookings for {pageData.targetLocation.name} patients.
            </p>
            <AppointmentForm 
              compact={true}
              defaultHospital={pageData.hospitalsCovered.includes("pk-green-campus") ? "pk-hospital" : "knch-main"}
            />
          </div>
        </div>
      )}
    </div>
  );
}
