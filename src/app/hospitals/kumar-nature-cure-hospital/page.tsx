import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Clock, 
  CheckCircle2, 
  Bed, 
  Sparkles, 
  ArrowRight, 
  Navigation, 
  Droplets,
  Camera
} from "lucide-react";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Kumar Nature Cure Hospital (KNCH) Gandhigramam Karur | Main Hospital & Dental Wing",
  description:
    "Official campus guide for Kumar Nature Cure Hospital (KNCH) located at Shakthi Nagar, Gandhigramam, Karur. Est. 2003. Naturopathy suites, advanced dental clinic, inpatient rooms, hydrotherapy, timings & directions.",
  alternates: {
    canonical: "/hospitals/kumar-nature-cure-hospital",
  },
};

const knchPhotos = galleryItems.filter(
  (item) => item.category === "Kumar Nature Cure Hospital"
).slice(0, 6);

export default function KnchMainHospitalPage() {
  const hospitalSchema = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "name": "Kumar Nature Cure Hospital (KNCH)",
    "alternateName": "குமார் இயற்கை மற்றும் பல் மருத்துவமனை",
    "image": "https://www.knchkarur.com/images/kumar_hospital_main.jpg",
    "url": "https://www.knchkarur.com/hospitals/kumar-nature-cure-hospital",
    "telephone": ["+918148129709", "+919842429709", "+917373729709"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shakthi Nagar, Gandhigramam, Trichy National Highway",
      "addressLocality": "Karur",
      "addressRegion": "Tamil Nadu",
      "postalCode": "639004",
      "addressCountry": "IN"
    },
    "founder": {
      "@type": "Person",
      "name": "Dr. C. Sukumar, B.N.Y.S.",
      "jobTitle": "Chief Medical Officer & Managing Director"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:30",
        "closes": "13:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "17:00",
        "closes": "20:30"
      }
    ],
    "medicalSpecialty": ["Naturopathy", "Dentistry", "Yoga Therapy", "Acupuncture", "Dietetics"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalSchema) }}
      />

      <PageHeader
        title="Kumar Nature Cure Hospital (KNCH)"
        breadcrumb={[
          { name: "Hospitals", path: "/hospitals" },
          { name: "KNCH Gandhigramam", path: "/hospitals/kumar-nature-cure-hospital" }
        ]}
        bgImage="/images/kumar_hospital_main.jpg"
      />

      {/* Campus Switcher Banner */}
      <section className="bg-stone-100 border-b border-gray-200 py-3 sticky top-[68px] z-30 shadow-sm">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-3 text-xs md:text-sm">
          <div className="flex items-center gap-2 text-primary font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-green-600 animate-pulse" />
            <span>Viewing Campus: <strong>KNCH Main Hospital (Gandhigramam)</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-foreground/70 hidden sm:inline">Looking for our 24-acre green sanctuary?</span>
            <Link
              href="/hospitals/pk-hospital"
              className="inline-flex items-center gap-1.5 font-bold text-secondary hover:text-primary transition-colors bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm"
            >
              Explore P.K. Hospital Sengal &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Campus Hero & Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            {/* Left Photo & Badges */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-stone-100">
                <Image
                  src="/images/kumar_hospital_main.jpg"
                  alt="Kumar Nature Cure Hospital Gandhigramam Karur"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-primary text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg">
                    Est. 2003 • Headquarters
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md text-white p-3.5 rounded-2xl border border-white/20">
                  <p className="text-xs font-bold flex items-center gap-1.5">
                    <MapPin size={14} className="text-secondary" />
                    Shakthi Nagar, Gandhigramam (Trichy National Highway, 3 km from Bus Stand)
                  </p>
                </div>
              </div>

              {/* Quick Info Strip */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                  <p className="text-2xl font-heading font-bold text-primary">2003</p>
                  <p className="text-[11px] text-foreground/70 uppercase tracking-wider font-semibold">Established</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                  <p className="text-2xl font-heading font-bold text-primary">10,000</p>
                  <p className="text-[11px] text-foreground/70 uppercase tracking-wider font-semibold">Sq.Ft Facility</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                  <p className="text-2xl font-heading font-bold text-primary">24 / 7</p>
                  <p className="text-[11px] text-foreground/70 uppercase tracking-wider font-semibold">Doctor Supervised</p>
                </div>
              </div>
            </div>

            {/* Right Story & Mission */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3.5 py-1 rounded-full inline-block">
                Main Clinical Center
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary leading-tight">
                Two Decades of Drugless Healing Excellence
              </h2>
              <p className="text-foreground/80 font-light text-base md:text-lg leading-relaxed">
                Started in 2003 by <strong>Dr. C. Sukumar (B.N.Y.S.)</strong>, our main hospital is situated in 10,000 sq.ft of peaceful premises at Shakthi Nagar, Gandhigramam. Easily accessible along the Trichy National Highway, just 3 km from the Karur Central Bus Stand.
              </p>
              <p className="text-foreground/75 font-light text-sm sm:text-base leading-relaxed">
                KNCH serves both local outpatients and residential inpatients seeking holistic recovery from chronic lifestyle conditions — without drugs, steroids, or surgical intervention. The campus integrates clinical Naturopathy suites with an advanced Dental Care department headed by <strong>Dr. M. Anitha Sukumar (B.D.S.)</strong>.
              </p>

              {/* Core Pillars */}
              <div className="space-y-3 pt-2">
                {[
                  "Complete avoidance of Allopathy and herbal medication during & after therapy",
                  "Dedicated Hydrotherapy, Spinal Spray, Hip Bath & Steam Bath units",
                  "Multi-Specialty Dental Clinic with 100% sterile autoclave infection control",
                  "Air-Conditioned & Non-AC Inpatient accommodation suited to all budgets",
                  "Direct daily consultations by senior qualified medical practitioners"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground/85">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href="tel:+918148129709"
                  className="px-7 py-3.5 bg-primary text-white rounded-full font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shadow-md flex items-center gap-2"
                >
                  <Phone size={14} /> Call Reception: 81481 29709
                </a>
                <Link
                  href="/contact?hospital=Kumar%20Nature%20Cure%20Hospital%20(KNCH)"
                  className="px-7 py-3.5 bg-secondary text-primary rounded-full font-bold text-xs uppercase tracking-wider hover:bg-secondary/90 transition-all shadow-md flex items-center gap-2"
                >
                  Book OPD Consult <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Departments on Campus */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                Comprehensive Departments
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary mt-1">
                Specialized Wings at Gandhigramam
              </h3>
              <p className="text-foreground/70 text-sm mt-2">
                All treatment wings are located under one roof for seamless patient care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Naturopathy Wing */}
              <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                    <Droplets size={24} />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-primary mb-2">
                    Naturopathy &amp; Yoga Wing
                  </h4>
                  <p className="text-foreground/70 text-sm font-light leading-relaxed mb-4">
                    Equipped with specialized spinal spray tubs, hip baths, full-body steam cubicles, reflexology pathways, and a peaceful yoga and meditation hall.
                  </p>
                  <ul className="space-y-2 text-xs text-foreground/80 mb-6">
                    <li>• Hydrotherapy &amp; Spinal Baths</li>
                    <li>• Mud Packs &amp; Full Body Mud Therapy</li>
                    <li>• Acupuncture &amp; Acupressure</li>
                    <li>• Therapeutic Fasting &amp; Satvik Diet</li>
                  </ul>
                </div>
                <Link
                  href="/treatments/naturopathy"
                  className="text-primary font-bold text-xs hover:text-secondary inline-flex items-center gap-1"
                >
                  Explore Naturopathy Treatments &rarr;
                </Link>
              </div>

              {/* Dental Wing */}
              <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-secondary/20 text-secondary flex items-center justify-center mb-5">
                    <Sparkles size={24} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-primary mb-2">
                    Specialized Dental Clinic
                  </h4>
                  <p className="text-foreground/70 text-sm font-light leading-relaxed mb-4">
                    Headed by Dr. M. Anitha Sukumar (B.D.S.). Offering pain-free dental care in a 100% sterile atmosphere, recognizing oral health as the gateway to total wellness.
                  </p>
                  <ul className="space-y-2 text-xs text-foreground/80 mb-6">
                    <li>• Painless Extractions &amp; Root Canal</li>
                    <li>• Aesthetic Crowns, Bridges &amp; Veneers</li>
                    <li>• Ultrasonic Scaling &amp; Teeth Cleaning</li>
                    <li>• Family &amp; Preventive Dentistry</li>
                  </ul>
                </div>
                <Link
                  href="/treatments/dental"
                  className="text-primary font-bold text-xs hover:text-secondary inline-flex items-center gap-1"
                >
                  Explore Dental Care Clinic &rarr;
                </Link>
              </div>

              {/* Health Shop & Inpatient */}
              <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                    <Bed size={24} />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-primary mb-2">
                    Inpatient Suites &amp; Health Shop
                  </h4>
                  <p className="text-foreground/70 text-sm font-light leading-relaxed mb-4">
                    Comfortable residential rooms (AC &amp; Non-AC) with round-the-clock doctor supervision, organic dietary dining, and an in-house natural health remedies store.
                  </p>
                  <ul className="space-y-2 text-xs text-foreground/80 mb-6">
                    <li>• Single Deluxe AC &amp; Twin Sharing Rooms</li>
                    <li>• Fresh Organic Juices &amp; Healing Diet</li>
                    <li>• Herbal Toiletries &amp; Health Supplements</li>
                    <li>• 24/7 Nursing &amp; Medical Supervision</li>
                  </ul>
                </div>
                <Link
                  href="/treatments/health-shop"
                  className="text-primary font-bold text-xs hover:text-secondary inline-flex items-center gap-1"
                >
                  Explore KNCH Health Shop &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Resident Doctors on Campus */}
          <div className="bg-stone-50 rounded-3xl p-8 sm:p-12 border border-gray-200 mb-20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                Experienced Medical Leadership
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-primary mt-1">
                Resident Specialists at KNCH Main Campus
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Dr. C. Sukumar Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/80 flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left">
                <div className="relative w-24 h-28 rounded-xl overflow-hidden shrink-0 border border-gray-100 shadow-sm">
                  <Image
                    src="/images/dr_sukumar.jpg"
                    alt="Dr. C. Sukumar"
                    fill
                    sizes="96px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="space-y-1.5 flex-grow">
                  <span className="bg-secondary/20 text-primary text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block">
                    Founder &amp; CMO
                  </span>
                  <h4 className="text-lg font-heading font-bold text-primary">Dr. C. Sukumar, B.N.Y.S.</h4>
                  <p className="text-xs text-foreground/75 font-light">
                    Over 20 years clinical experience in drugless Nature Cure and chronic disease reversal.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/doctors/dr-c-sukumar"
                      className="text-primary font-bold text-xs hover:text-secondary inline-flex items-center gap-1"
                    >
                      View Profile &amp; Biography &rarr;
                    </Link>
                  </div>
                </div>
              </div>

              {/* Dr. M. Anitha Sukumar Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/80 flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left">
                <div className="relative w-24 h-28 rounded-xl overflow-hidden shrink-0 border border-gray-100 shadow-sm">
                  <Image
                    src="/images/dr_anitha_sukumar.jpg"
                    alt="Dr. M. Anitha Sukumar"
                    fill
                    sizes="96px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="space-y-1.5 flex-grow">
                  <span className="bg-primary text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block">
                    Dental Specialist
                  </span>
                  <h4 className="text-lg font-heading font-bold text-primary">Dr. M. Anitha Sukumar, B.D.S.</h4>
                  <p className="text-xs text-foreground/75 font-light">
                    18+ years experience in comprehensive, sterile oral health and smile designing.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/doctors/dr-m-anitha-sukumar"
                      className="text-primary font-bold text-xs hover:text-secondary inline-flex items-center gap-1"
                    >
                      View Profile &amp; Biography &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Campus Photo Highlights */}
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                  Visual Tour
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-primary mt-1">
                  KNCH Gandhigramam Campus Photos
                </h3>
              </div>
              <Link
                href="/gallery/kumar-nature-cure-hospital"
                className="text-sm font-bold text-primary hover:text-secondary inline-flex items-center gap-1 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm"
              >
                <Camera size={15} /> View Full 18-Photo Gallery &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {knchPhotos.map((photo, i) => (
                <div key={i} className="group relative rounded-2xl overflow-hidden shadow-sm aspect-square bg-stone-100">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-2 flex items-end">
                    <p className="text-[11px] font-semibold text-white truncate">{photo.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timings, Address & Map Info */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              
              {/* Left Info */}
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                    Plan Your Visit
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-primary mt-1">
                    Location &amp; Consultation Hours
                  </h3>
                </div>

                <div className="space-y-4 text-sm text-foreground/80">
                  <div className="flex items-start gap-3 bg-stone-50 p-4 rounded-2xl border border-gray-100">
                    <MapPin className="text-primary shrink-0 mt-1" size={20} />
                    <div>
                      <strong className="text-primary block text-base font-semibold">Address</strong>
                      <span>Kumar Hospital - Nature Cure - Yoga - Dental</span><br />
                      <span>Shakthi Nagar, Gandhigramam, Karur, Tamil Nadu 639004</span><br />
                      <span className="text-xs text-foreground/60 mt-1 block">Landmark: Trichy National Highway (Just 3 km from Karur Central Bus Stand)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-stone-50 p-4 rounded-2xl border border-gray-100">
                    <Clock className="text-primary shrink-0 mt-1" size={20} />
                    <div>
                      <strong className="text-primary block text-base font-semibold">OPD Consultation Timings</strong>
                      <span>Morning: 9:30 AM – 1:30 PM</span><br />
                      <span>Evening: 5:00 PM – 8:30 PM</span><br />
                      <span className="text-xs text-green-700 font-semibold mt-1 block">Open 7 Days a Week for Inpatients &amp; Emergency Care</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-stone-50 p-4 rounded-2xl border border-gray-100">
                    <Phone className="text-primary shrink-0 mt-1" size={20} />
                    <div>
                      <strong className="text-primary block text-base font-semibold">Direct Phone Lines</strong>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                        <a href="tel:+918148129709" className="text-primary hover:text-secondary font-bold">Reception: 81481 29709</a>
                        <a href="tel:+919842429709" className="text-primary hover:text-secondary font-bold">Dr. Sukumar: 98424 29709</a>
                        <a href="tel:+917373729709" className="text-primary hover:text-secondary font-bold">Dr. Anitha: 73737 29709</a>
                        <a href="tel:+917708329709" className="text-primary hover:text-secondary font-bold">Helpline: 77083 29709</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Map & Direct Action */}
              <div className="flex flex-col justify-between space-y-6 bg-stone-50 p-6 sm:p-8 rounded-3xl border border-gray-200">
                <div className="space-y-4">
                  <h4 className="text-xl font-heading font-bold text-primary flex items-center gap-2">
                    <Navigation size={20} className="text-secondary" />
                    How to Reach KNCH Main Campus
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-foreground/80 leading-relaxed">
                    <li>• <strong>From Karur Bus Stand:</strong> Only 3 km (approx. 7 mins by auto or taxi via Trichy Highway).</li>
                    <li>• <strong>From Karur Railway Junction:</strong> 3.5 km via Kovai Road &amp; Gandhigramam Road.</li>
                    <li>• <strong>From Trichy Airport (TRZ):</strong> Approx. 78 km via NH 81 (Trichy - Karur Highway).</li>
                  </ul>
                </div>

                <div className="pt-4 space-y-3">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Kumar+Hospital+-+Nature+Cure+-+Yoga+-+Dental,+Kumar+Hospital,+Sakthi+Nagar,+Gandhigramam,+Karur,+Tamil+Nadu+639004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md text-center"
                  >
                    <Navigation size={14} /> Open in Google Maps
                  </a>
                  <Link
                    href="/contact?hospital=Kumar%20Nature%20Cure%20Hospital%20(KNCH)"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-secondary hover:bg-secondary/90 text-primary font-bold text-xs uppercase tracking-wider transition-all shadow-md text-center"
                  >
                    Book Appointment Online &rarr;
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
