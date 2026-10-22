import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Clock, 
  CheckCircle2, 
  TreePine, 
  Sun, 
  Bed, 
  ArrowRight, 
  Navigation, 
  Camera,
  Utensils,
  Flower2
} from "lucide-react";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "P.K. Hospital Nature Cure - Yoga - Dental Sengal Karur | 24 Acres Nature Retreat",
  description:
    "Explore P.K. Hospital, our 24-acre lush green healing sanctuary at Sengal, Karur. Est. 2017. Specialised for deep residential detoxification, plantain leaf bath, mud therapy, yoga & satvik organic diet.",
  alternates: {
    canonical: "/hospitals/pk-hospital",
  },
};

const pkPhotos = galleryItems.filter(
  (item) => item.category === "P.K. Hospital"
).slice(0, 6);

export default function PkHospitalPage() {
  const hospitalSchema = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "name": "P.K. Hospital Nature Cure - Yoga - Dental",
    "alternateName": "பி. கே இயற்கை மருத்துவமனை-யோகா-பல் மருத்துவம்",
    "image": "https://www.knchkarur.com/images/pk_hospital_green_campus.jpg",
    "url": "https://www.knchkarur.com/hospitals/pk-hospital",
    "telephone": ["+917708329709", "+919842429709", "+917373729709"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Karur - Sengal Rd, Sengal",
      "addressLocality": "Karur",
      "addressRegion": "Tamil Nadu",
      "postalCode": "639102",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "medicalSpecialty": ["Naturopathy", "Yoga Therapy", "Detoxification", "Residential Wellness", "Dentistry"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalSchema) }}
      />

      <PageHeader
        title="P.K. Hospital Nature Cure - Yoga - Dental"
        breadcrumb={[
          { name: "Hospitals", path: "/hospitals" },
          { name: "P.K. Hospital Sengal", path: "/hospitals/pk-hospital" }
        ]}
        bgImage="/images/pk_hospital_green_campus.jpg"
      />

      {/* Campus Switcher Banner */}
      <section className="bg-stone-100 border-b border-gray-200 py-3 sticky top-[68px] z-30 shadow-sm">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-3 text-xs md:text-sm">
          <div className="flex items-center gap-2 text-primary font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-green-600 animate-pulse" />
            <span>Viewing Campus: <strong>P.K. Hospital 24-Acre Nature Retreat (Sengal)</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-foreground/70 hidden sm:inline">Looking for our Main Gandhigramam Hospital?</span>
            <Link
              href="/hospitals/kumar-nature-cure-hospital"
              className="inline-flex items-center gap-1.5 font-bold text-secondary hover:text-primary transition-colors bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm"
            >
              Explore KNCH Gandhigramam &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Hero & Sanctuary Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            {/* Left Photo & Badges */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-stone-100">
                <Image
                  src="/images/pk_hospital_green_campus.jpg"
                  alt="P.K. Hospital Green Campus Sengal Karur"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-primary text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                    <TreePine size={14} /> 24 Acres Nature Sanctuary • Est. 2017
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md text-white p-3.5 rounded-2xl border border-white/20">
                  <p className="text-xs font-bold flex items-center gap-1.5">
                    <MapPin size={14} className="text-secondary" />
                    Karur - Sengal Rd, Sengal (Tranquil Greenery, 639102)
                  </p>
                </div>
              </div>

              {/* Quick Info Strip */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                  <p className="text-2xl font-heading font-bold text-primary">24</p>
                  <p className="text-[11px] text-foreground/70 uppercase tracking-wider font-semibold">Acres Greenery</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                  <p className="text-2xl font-heading font-bold text-primary">2017</p>
                  <p className="text-[11px] text-foreground/70 uppercase tracking-wider font-semibold">Established</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                  <p className="text-2xl font-heading font-bold text-primary">100%</p>
                  <p className="text-[11px] text-foreground/70 uppercase tracking-wider font-semibold">Pollution Free</p>
                </div>
              </div>
            </div>

            {/* Right Story */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3.5 py-1 rounded-full inline-block">
                Residential Healing Sanctuary
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary leading-tight">
                24 Acres of Serene Green Rejuvenation
              </h2>
              <p className="text-foreground/80 font-light text-base md:text-lg leading-relaxed">
                Started in 2017 under the leadership of <strong>Dr. C. Sukumar (B.N.Y.S.)</strong>, P.K. Hospital was designed as an expansive natural retreat for deep healing. Nestled amidst 24 acres of peaceful, pollution-free landscape surrounded by shade trees and fresh breeze.
              </p>
              <p className="text-foreground/75 font-light text-sm sm:text-base leading-relaxed">
                This sanctuary is specifically tailored for extended residential stays (7 to 21 days), allowing patients with chronic conditions — such as diabetes, arthritis, obesity, hypertension, and stress disorders — to disconnect from city pollution and undergo true 5-element nature cure therapies under open skies.
              </p>

              {/* Core Features */}
              <div className="space-y-3 pt-2">
                {[
                  "24 acres of lush green vegetation, walking trails & herbal gardens",
                  "Open-air sun deck for signature Plantain-Leaf Helio-Therapy baths",
                  "Natural mineral clay & mud preparation court for full-body mud baths",
                  "Dedicated open-air Yoga, Pranayama & Meditation pavilion",
                  "Pure satvik healing meals prepared fresh from farm-fresh produce",
                  "Private single-story residential cottages & budget inpatient rooms"
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
                  href="tel:+917708329709"
                  className="px-7 py-3.5 bg-primary text-white rounded-full font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-all shadow-md flex items-center gap-2"
                >
                  <Phone size={14} /> Call Sengal Campus: 77083 29709
                </a>
                <Link
                  href="/contact?hospital=P.K.Hospital%20Nature%20cure%20-Yoga-Dental"
                  className="px-7 py-3.5 bg-secondary text-primary rounded-full font-bold text-xs uppercase tracking-wider hover:bg-secondary/90 transition-all shadow-md flex items-center gap-2"
                >
                  Inquire Inpatient Stay <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Signature Nature Cure Therapies at Sengal */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                5-Element Drugless Care
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary mt-1">
                Signature Therapies at P.K. Hospital
              </h3>
              <p className="text-foreground/70 text-sm mt-2">
                Experience natural therapies harnessed directly from Earth, Water, Sun, Air, and Space.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Plantain-Leaf Bath */}
              <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-lg hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-2xl bg-secondary/20 text-secondary flex items-center justify-center mb-5">
                  <Sun size={24} className="text-primary" />
                </div>
                <h4 className="text-xl font-heading font-bold text-primary mb-2">
                  Plantain-Leaf Sun Bath
                </h4>
                <p className="text-foreground/70 text-sm font-light leading-relaxed mb-4">
                  Wrapped in fresh plantain leaves under morning sunlight. Induces profuse sweating to eliminate toxins, improve kidney function, reduce water retention, and burn deep fat.
                </p>
                <div className="text-xs font-semibold text-secondary">
                  ✓ Signature Specialty Therapy
                </div>
              </div>

              {/* Mud Therapy */}
              <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-lg hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <Flower2 size={24} />
                </div>
                <h4 className="text-xl font-heading font-bold text-primary mb-2">
                  Mineral Mud Baths &amp; Packs
                </h4>
                <p className="text-foreground/70 text-sm font-light leading-relaxed mb-4">
                  Prepared from uncontaminated natural clay rich in therapeutic minerals. Draws out systemic heat, calms chronic skin conditions, relieves joint inflammation, and tones the skin.
                </p>
                <div className="text-xs font-semibold text-secondary">
                  ✓ Natural Clay Courts on Campus
                </div>
              </div>

              {/* Satvik Nutrition */}
              <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-lg hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-2xl bg-secondary/20 text-secondary flex items-center justify-center mb-5">
                  <Utensils size={24} className="text-primary" />
                </div>
                <h4 className="text-xl font-heading font-bold text-primary mb-2">
                  Farm-Fresh Satvik Dining
                </h4>
                <p className="text-foreground/70 text-sm font-light leading-relaxed mb-4">
                  Spacious open dining canteen serving personalized therapeutic raw juices, tender coconut water, sprouted grains, and nutrient-rich steamed natural preparations.
                </p>
                <div className="text-xs font-semibold text-secondary">
                  ✓ Prepared Fresh 3 Times Daily
                </div>
              </div>
            </div>
          </div>

          {/* Residential Cottages & Rooms */}
          <div className="bg-primary text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-20 relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-secondary font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
                  <Bed size={14} /> Peaceful Inpatient Accommodation
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold leading-tight">
                  Single-Story Cottages Surrounded by Flowering Trees
                </h3>
                <p className="text-white/80 font-light text-sm sm:text-base leading-relaxed">
                  Unlike sterile hospital wards, P.K. Hospital features tranquil cottages with wide corridors, cross-ventilation, and garden views. Patients wake up to birdsong and breathe pure oxygen, which accelerates physiological healing and deep emotional calm.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-white/90">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-secondary shrink-0" />
                    <span>Private Cottages &amp; Twin Sharing Rooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-secondary shrink-0" />
                    <span>24-Hour Attendant &amp; Medical Oversight</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-secondary shrink-0" />
                    <span>Attached Modern Hygienic Restrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-secondary shrink-0" />
                    <span>Family &amp; Companion Stay Permitted</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
                <Link
                  href="/contact?hospital=P.K.Hospital%20Nature%20cure%20-Yoga-Dental"
                  className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-3.5 rounded-full transition-all shadow-lg text-sm text-center"
                >
                  Inquire Room Availability
                </Link>
                <a
                  href="tel:+917708329709"
                  className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3.5 rounded-full transition-all border border-white/20 text-sm text-center"
                >
                  Call: 77083 29709
                </a>
              </div>
            </div>
          </div>

          {/* Photo Gallery Highlights */}
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                  Retreat Gallery
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-primary mt-1">
                  P.K. Hospital Campus Photos
                </h3>
              </div>
              <Link
                href="/gallery/pk-hospital"
                className="text-sm font-bold text-primary hover:text-secondary inline-flex items-center gap-1 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm"
              >
                <Camera size={15} /> View Full 11-Photo Gallery &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {pkPhotos.map((photo, i) => (
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

          {/* Timings, Address & Directions */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                    Plan Your Stay
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-primary mt-1">
                    Retreat Location &amp; Timings
                  </h3>
                </div>

                <div className="space-y-4 text-sm text-foreground/80">
                  <div className="flex items-start gap-3 bg-stone-50 p-4 rounded-2xl border border-gray-100">
                    <MapPin className="text-primary shrink-0 mt-1" size={20} />
                    <div>
                      <strong className="text-primary block text-base font-semibold">Address</strong>
                      <span>P.K.Hospital Nature cure -Yoga-Dental</span><br />
                      <span>Karur - Sengal Rd, Sengal, Tamil Nadu 639102, India</span><br />
                      <span className="text-xs text-foreground/60 mt-1 block">Nestled amidst 24 acres of lush farmland</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-stone-50 p-4 rounded-2xl border border-gray-100">
                    <Clock className="text-primary shrink-0 mt-1" size={20} />
                    <div>
                      <strong className="text-primary block text-base font-semibold">Campus Timings</strong>
                      <span>Residential Inpatients: 24 Hours Active Care</span><br />
                      <span>Day Visitors &amp; Consultations: 8:00 AM – 6:00 PM</span><br />
                      <span className="text-xs text-green-700 font-semibold mt-1 block">Prior advance booking required for residential retreat</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-stone-50 p-4 rounded-2xl border border-gray-100">
                    <Phone className="text-primary shrink-0 mt-1" size={20} />
                    <div>
                      <strong className="text-primary block text-base font-semibold">Direct Phone Lines</strong>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                        <a href="tel:+917708329709" className="text-primary hover:text-secondary font-bold">Campus Reception: 77083 29709</a>
                        <a href="tel:+919842429709" className="text-primary hover:text-secondary font-bold">Dr. C. Sukumar: 98424 29709</a>
                        <a href="tel:+918148129709" className="text-primary hover:text-secondary font-bold">Head Office: 81481 29709</a>
                        <a href="tel:+917373729709" className="text-primary hover:text-secondary font-bold">Dental Care: 73737 29709</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between space-y-6 bg-stone-50 p-6 sm:p-8 rounded-3xl border border-gray-200">
                <div className="space-y-4">
                  <h4 className="text-xl font-heading font-bold text-primary flex items-center gap-2">
                    <Navigation size={20} className="text-secondary" />
                    How to Reach P.K. Hospital Sengal
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-foreground/80 leading-relaxed">
                    <li>• <strong>From Karur City Center:</strong> Travel via Karur - Sengal Road directly to the campus.</li>
                    <li>• <strong>Pickup Service:</strong> Pre-arranged car pickup from Karur Bus Stand or Railway Station is available upon request for residential patients.</li>
                    <li>• <strong>Peaceful Environment:</strong> Far from highway traffic noise, ensuring deep sleep and nervous system relaxation.</li>
                  </ul>
                </div>

                <div className="pt-4 space-y-3">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=P.K.Hospital+Nature+cure+-Yoga-Dental,+Karur+-+Sengal+Rd,+Sengal,+Tamil+Nadu+639102"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md text-center"
                  >
                    <Navigation size={14} /> Open in Google Maps
                  </a>
                  <Link
                    href="/contact?hospital=P.K.Hospital%20Nature%20cure%20-Yoga-Dental"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-secondary hover:bg-secondary/90 text-primary font-bold text-xs uppercase tracking-wider transition-all shadow-md text-center"
                  >
                    Inquire Retreat Packages &rarr;
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
