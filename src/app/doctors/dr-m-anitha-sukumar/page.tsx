import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Calendar, 
  GraduationCap, 
  Award, 
  ShieldCheck,
  Smile
} from "lucide-react";
import { doctorsData } from "@/data/doctors";

export const metadata: Metadata = {
  title: "Dr. M. Anitha Sukumar, B.D.S. | Dental Specialist & Head of Dental Wing | KNCH Karur",
  description:
    "Consult Dr. M. Anitha Sukumar (B.D.S.), Head of the Dental Wing at Kumar Nature Cure Hospital, Karur. 18+ years experience in gentle, painless, and completely sterile dental treatments.",
  alternates: {
    canonical: "/doctors/dr-m-anitha-sukumar",
  },
};

export default function DrAnithaProfilePage() {
  const doc = doctorsData.find((d) => d.id === "dr-m-anitha-sukumar") || doctorsData[1];

  const dentistSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Dr. M. Anitha Sukumar",
    "honorificPrefix": "Dr.",
    "honorificSuffix": "B.D.S.",
    "jobTitle": "Dental Specialist & Head of Dental Wing",
    "image": "https://www.knchkarur.com/images/dr_anitha_sukumar.jpg",
    "url": "https://www.knchkarur.com/doctors/dr-m-anitha-sukumar",
    "telephone": "+917373729709",
    "worksFor": {
      "@type": "Hospital",
      "name": "Kumar Nature Cure Hospital - Dental Wing",
      "url": "https://www.knchkarur.com/treatments/dental"
    },
    "medicalSpecialty": [
      "Dentistry",
      "Endodontics",
      "Periodontics",
      "Prosthodontics",
      "Cosmetic Dentistry"
    ],
    "description":
      "Heads the specialized Dental Wing of Kumar Nature Cure Hospital. Offering comprehensive treatment for all acute and chronic dental conditions in a 100% sterile atmosphere."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
      />

      <PageHeader
        title="Dr. M. Anitha Sukumar, B.D.S."
        breadcrumb={[
          { name: "Doctors", path: "/doctors" },
          { name: "Dr. M. Anitha Sukumar", path: "/doctors/dr-m-anitha-sukumar" }
        ]}
        bgImage="/images/kumar_hospital_main.jpg"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          
          {/* Main Profile Grid */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-100 shadow-xl mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              {/* Doctor Photo & Badges (Col 1-5) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-stone-100 max-w-md mx-auto">
                  <Image
                    src={doc.image}
                    alt="Dr. M. Anitha Sukumar, B.D.S. - Dental Specialist"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white font-bold text-xs uppercase px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                      <Award size={14} /> Head of Dental Wing
                    </span>
                  </div>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="bg-stone-50 p-4 rounded-2xl border border-gray-100">
                    <p className="text-2xl font-heading font-bold text-primary">18+ Years</p>
                    <p className="text-[11px] text-foreground/70 uppercase tracking-wider font-semibold">Clinical Experience</p>
                  </div>
                  <div className="bg-stone-50 p-4 rounded-2xl border border-gray-100">
                    <p className="text-2xl font-heading font-bold text-primary">100%</p>
                    <p className="text-[11px] text-foreground/70 uppercase tracking-wider font-semibold">Sterile Protocol</p>
                  </div>
                </div>

                {/* Contact Card */}
                <div className="bg-primary/5 rounded-2xl p-5 border border-primary/10 space-y-3 text-xs sm:text-sm">
                  <div className="flex items-center gap-2.5 text-primary font-semibold">
                    <Clock size={16} className="text-secondary shrink-0" />
                    <span>{doc.timings}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-foreground/80">
                    <MapPin size={16} className="text-secondary shrink-0" />
                    <span>Kumar Nature Cure Hospital, Shakthi Nagar, Karur</span>
                  </div>
                  <div className="pt-2 border-t border-primary/10 flex flex-col gap-2">
                    <a
                      href="tel:+917373729709"
                      className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shadow-md"
                    >
                      <Phone size={14} /> Direct Call: 73737 29709
                    </a>
                    <Link
                      href="/contact?doctor=Dr.%20M.%20Anitha%20Sukumar"
                      className="w-full flex items-center justify-center gap-2 py-3 bg-secondary text-primary rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-secondary/90 transition-all shadow-md"
                    >
                      <Calendar size={14} /> Book Dental Appointment
                    </Link>
                  </div>
                </div>
              </div>

              {/* Biography & Philosophy (Col 6-12) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3.5 py-1 rounded-full inline-block mb-2">
                    Dental Specialist &amp; Surgeon
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary leading-tight">
                    Dr. M. Anitha Sukumar
                  </h2>
                  <p className="text-secondary font-bold text-base mt-1">
                    B.D.S. (Bachelor of Dental Surgery)
                  </p>
                  <p className="text-xs text-foreground/60 flex items-center gap-1.5 mt-1 font-medium">
                    <GraduationCap size={15} className="text-primary shrink-0" />
                    Registered Dental Surgeon • Tamil Nadu Dental Council
                  </p>
                </div>

                {/* Healing Statement Box */}
                <div className="bg-primary/5 border-l-4 border-secondary p-5 rounded-r-2xl">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-1.5">
                    <Smile size={14} className="text-secondary" />
                    Oral Health &amp; General Body Wellness:
                  </h4>
                  <p className="text-sm md:text-base text-foreground/85 font-medium italic leading-relaxed">
                    &ldquo;All kinds of dental diseases are treated here with utmost care in a completely sterile atmosphere. Oral Health is a vital part of general health. The oral cavity reflects the general status of a person. Improving oral health can have a tremendous impact on improving the general health and well-being of our community.&rdquo;
                  </p>
                </div>

                {/* Biography Details */}
                <div className="space-y-4 text-foreground/80 font-light text-sm sm:text-base leading-relaxed">
                  <p>
                    <strong>Dr. M. Anitha Sukumar, B.D.S.</strong> looks after the dental wing of Kumar Nature Cure Hospital. With over 18 years of dedicated clinical practice, she is widely appreciated for her gentle touch, empathetic patient communication, and meticulous attention to infection control.
                  </p>
                  <p>
                    Understanding that tooth decay, gum disease, and chronic oral inflammation directly impact cardiovascular health, blood sugar control, and digestion, Dr. Anitha established the dental department as an integral component of our hospital&apos;s holistic wellness vision.
                  </p>
                  <p>
                    Whether you require a routine preventive checkup, pain-free root canal treatment, or smile makeover, every procedure is carried out in a calm, modern setting designed to eliminate dental anxiety for both children and elders.
                  </p>
                </div>

                {/* Clinical Focus Areas */}
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                    Dental Procedures &amp; Specializations:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      "Utmost Care in Completely Sterile Atmosphere",
                      "Painless Rotary Root Canal Treatments (RCT)",
                      "Aesthetic Tooth-Colored Composite Fillings",
                      "Zirconia & Ceramic Dental Crowns and Bridges",
                      "Ultrasonic Scaling, Polishing & Gum Therapy",
                      "Gentle Extractions & Wisdom Tooth Management",
                      "Pediatric Dental Care & Preventive Sealants",
                      "Smile Designing & Teeth Whitening Services"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/85">
                        <CheckCircle2 size={16} className="text-secondary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Strict Sterilization Protocol */}
                <div className="p-4 bg-stone-50 rounded-2xl border border-gray-200 text-xs text-foreground/80 space-y-2">
                  <h4 className="font-bold text-primary flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                    <ShieldCheck size={14} className="text-green-700" />
                    Strict 4-Tier Sterilization Protocol:
                  </h4>
                  <p className="leading-relaxed">
                    All instruments undergo ultrasonic decontamination, packaging in hermetically sealed pouches, and high-pressure Class-B autoclave sterilization to guarantee zero cross-contamination.
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* Colleague Doctor Showcase */}
          <div className="bg-stone-50 rounded-3xl p-8 sm:p-10 border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              <div className="relative w-20 h-24 rounded-2xl overflow-hidden shrink-0 border border-gray-200 shadow-sm">
                <Image
                  src="/images/dr_sukumar.jpg"
                  alt="Dr. C. Sukumar"
                  fill
                  sizes="80px"
                  className="object-cover object-top"
                />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                  Founder &amp; Chief Medical Officer
                </span>
                <h4 className="text-xl font-heading font-bold text-primary">
                  Dr. C. Sukumar, B.N.Y.S.
                </h4>
                <p className="text-xs sm:text-sm text-foreground/70 font-light max-w-lg">
                  Founder and Managing Director with 20+ years expertise in 100% drugless Naturopathy, clinical Yoga therapy, and chronic disease reversal.
                </p>
              </div>
            </div>

            <Link
              href="/doctors/dr-c-sukumar"
              className="shrink-0 bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5"
            >
              View Dr. Sukumar&apos;s Profile &rarr;
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
