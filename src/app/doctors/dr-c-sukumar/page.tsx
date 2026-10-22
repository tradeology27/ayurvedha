import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Calendar, 
  GraduationCap, 
  Award
} from "lucide-react";
import { doctorsData } from "@/data/doctors";

export const metadata: Metadata = {
  title: "Dr. C. Sukumar, B.N.Y.S. | Founder & Chief Medical Officer | Kumar Nature Cure Hospital Karur",
  description:
    "Consult Dr. C. Sukumar (B.N.Y.S., Dr. MGR Medical University), Founder & Chief Medical Officer of Kumar Nature Cure Hospital. 20+ years practicing drugless Naturopathy, Yoga therapy, and chronic disease reversal in Karur.",
  alternates: {
    canonical: "/doctors/dr-c-sukumar",
  },
};

export default function DrSukumarProfilePage() {
  const doc = doctorsData.find((d) => d.id === "dr-c-sukumar") || doctorsData[0];

  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. C. Sukumar",
    "honorificPrefix": "Dr.",
    "honorificSuffix": "B.N.Y.S.",
    "jobTitle": "Founder & Chief Medical Officer",
    "image": "https://www.knchkarur.com/images/dr_sukumar.jpg",
    "url": "https://www.knchkarur.com/doctors/dr-c-sukumar",
    "telephone": "+919842429709",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "The Tamil Nadu Dr. M.G.R. Medical University, Chennai"
    },
    "worksFor": [
      {
        "@type": "Hospital",
        "name": "Kumar Nature Cure Hospital",
        "url": "https://www.knchkarur.com/hospitals/kumar-nature-cure-hospital"
      },
      {
        "@type": "Hospital",
        "name": "P.K. Hospital Nature Cure - Yoga - Dental",
        "url": "https://www.knchkarur.com/hospitals/pk-hospital"
      }
    ],
    "medicalSpecialty": [
      "Naturopathy",
      "Yoga Therapy",
      "Acupuncture",
      "Chronic Disease Reversal",
      "Dietetics"
    ],
    "description":
      "Founder and Chief Medical Officer of Kumar Nature Cure Hospital since 2003. Specialised in treating acute and chronic diseases through 100% drugless Nature Cure therapies without any medicine and surgery."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />

      <PageHeader
        title="Dr. C. Sukumar, B.N.Y.S."
        breadcrumb={[
          { name: "Doctors", path: "/doctors" },
          { name: "Dr. C. Sukumar", path: "/doctors/dr-c-sukumar" }
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
                    alt="Dr. C. Sukumar, B.N.Y.S. - Kumar Nature Cure Hospital"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary text-primary font-bold text-xs uppercase px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                      <Award size={14} /> Founder &amp; Chief Medical Officer
                    </span>
                  </div>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="bg-stone-50 p-4 rounded-2xl border border-gray-100">
                    <p className="text-2xl font-heading font-bold text-primary">20+ Years</p>
                    <p className="text-[11px] text-foreground/70 uppercase tracking-wider font-semibold">Clinical Practice</p>
                  </div>
                  <div className="bg-stone-50 p-4 rounded-2xl border border-gray-100">
                    <p className="text-2xl font-heading font-bold text-primary">Est. 2003</p>
                    <p className="text-[11px] text-foreground/70 uppercase tracking-wider font-semibold">Running Hospital</p>
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
                    <span>KNCH (Gandhigramam) &amp; P.K. Hospital (Sengal)</span>
                  </div>
                  <div className="pt-2 border-t border-primary/10 flex flex-col gap-2">
                    <a
                      href="tel:+919842429709"
                      className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shadow-md"
                    >
                      <Phone size={14} /> Direct Call: 98424 29709
                    </a>
                    <Link
                      href="/contact?doctor=Dr.%20C.%20Sukumar"
                      className="w-full flex items-center justify-center gap-2 py-3 bg-secondary text-primary rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-secondary/90 transition-all shadow-md"
                    >
                      <Calendar size={14} /> Book Consultation
                    </Link>
                  </div>
                </div>
              </div>

              {/* Biography & Philosophy (Col 6-12) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3.5 py-1 rounded-full inline-block mb-2">
                    Naturopathy &amp; Yoga Physician
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary leading-tight">
                    Dr. C. Sukumar
                  </h2>
                  <p className="text-secondary font-bold text-base mt-1">
                    B.N.Y.S. (Bachelor of Naturopathy &amp; Yogic Science)
                  </p>
                  <p className="text-xs text-foreground/60 flex items-center gap-1.5 mt-1 font-medium">
                    <GraduationCap size={15} className="text-primary shrink-0" />
                    Alumnus: The Tamil Nadu Dr. M.G.R. Medical University, Chennai
                  </p>
                </div>

                {/* Healing Statement Box */}
                <div className="bg-primary/5 border-l-4 border-secondary p-5 rounded-r-2xl">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-1.5">
                    <Sparkles size={14} className="text-secondary" />
                    Core Medicine-Free Philosophy:
                  </h4>
                  <p className="text-sm md:text-base text-foreground/85 font-medium italic leading-relaxed">
                    &ldquo;Our hospital is specialised for treating all kinds of diseases either acute or chronic by Nature Cure Therapies without any medicine and surgery. During the treatment and after treatment people can avoid allopathy and herbal medicine.&rdquo;
                  </p>
                </div>

                {/* Biography Details */}
                <div className="space-y-4 text-foreground/80 font-light text-sm sm:text-base leading-relaxed">
                  <p>
                    <strong>Dr. C. Sukumar</strong>, the Chief Medical Officer and Managing Director of Kumar Nature Cure Hospital, is a well-qualified, passionate Naturopathy and Yoga physician. He graduated with the degree of Bachelor of Naturopathy and Yogic Science (B.N.Y.S.) from the prestigious <strong>The Tamil Nadu Dr. M.G.R. Medical University, Chennai</strong>.
                  </p>
                  <p>
                    In 2003, Dr. Sukumar established Kumar Nature Cure Hospital in Karur with the mission of proving that the human body possesses an innate healing intelligence. By removing accumulated morbid matter (toxins) through the five primal elements of nature — Space, Air, Fire, Water, and Earth — chronic diseases can be permanently reversed rather than suppressed by lifelong pharmaceuticals.
                  </p>
                  <p>
                    In 2017, recognizing the need for deep residential immersion, he founded <strong>P.K. Hospital</strong> across 24 acres of pollution-free land in Sengal, Karur. Over the past two decades, Dr. Sukumar has guided thousands of patients from Tamil Nadu, Karnataka, Kerala, and abroad to complete drugless recovery.
                  </p>
                </div>

                {/* Clinical Focus Areas */}
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                    Key Areas of Clinical Expertise:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      "Treatment without Medicine & Surgery",
                      "Permanent Avoidance of Allopathy & Herbal Drugs",
                      "Type-2 Diabetes & Blood Pressure Reversal",
                      "Chronic Spine, Disc & Joint Pain Relief",
                      "Obesity, Weight Loss & Fatty Liver Correction",
                      "Digestive Health, Ulcers & Acid Reflux Therapy",
                      "Plantain-Leaf Sun Baths & Full Body Mud Therapy",
                      "Clinical Yoga Therapy & Therapeutic Pranayama"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/85">
                        <CheckCircle2 size={16} className="text-secondary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Campuses Supervised */}
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                    Campuses Supervised by Dr. C. Sukumar:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <Link
                      href="/hospitals/kumar-nature-cure-hospital"
                      className="p-3 bg-stone-50 hover:bg-stone-100 rounded-xl border border-gray-200 transition-colors block"
                    >
                      <strong className="text-primary block font-semibold">KNCH Main Hospital</strong>
                      <span className="text-foreground/70">Shakthi Nagar, Gandhigramam (Karur)</span>
                    </Link>
                    <Link
                      href="/hospitals/pk-hospital"
                      className="p-3 bg-stone-50 hover:bg-stone-100 rounded-xl border border-gray-200 transition-colors block"
                    >
                      <strong className="text-primary block font-semibold">P.K. Hospital Campus</strong>
                      <span className="text-foreground/70">24 Acres Green Retreat, Sengal (Karur)</span>
                    </Link>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Colleague Doctor Showcase */}
          <div className="bg-stone-50 rounded-3xl p-8 sm:p-10 border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              <div className="relative w-20 h-24 rounded-2xl overflow-hidden shrink-0 border border-gray-200 shadow-sm">
                <Image
                  src="/images/dr_anitha_sukumar.jpg"
                  alt="Dr. M. Anitha Sukumar"
                  fill
                  sizes="80px"
                  className="object-cover object-top"
                />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                  Specialist Dental Wing
                </span>
                <h4 className="text-xl font-heading font-bold text-primary">
                  Dr. M. Anitha Sukumar, B.D.S.
                </h4>
                <p className="text-xs sm:text-sm text-foreground/70 font-light max-w-lg">
                  Heads our specialized Dental Wing with 18+ years experience in comprehensive, sterile oral care as a foundation of overall body wellness.
                </p>
              </div>
            </div>

            <Link
              href="/doctors/dr-m-anitha-sukumar"
              className="shrink-0 bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5"
            >
              View Dr. Anitha&apos;s Profile &rarr;
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
