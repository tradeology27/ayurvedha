import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { hospitalBranches } from "@/data/hospitals";
import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Clock, 
  CheckCircle2, 
  Stethoscope, 
  ArrowRight, 
  TreePine, 
  Building2, 
  Compass
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Hospitals & Healing Campuses | Gandhigramam & Sengal, Karur | KNCH",
  description:
    "Kumar Nature Cure Hospital operates two specialized healing centers in Karur — our Main Hospital & Dental Wing at Gandhigramam (est. 2003) and our 24-acre green sanctuary at P.K. Hospital Sengal (est. 2017).",
  alternates: {
    canonical: "/hospitals",
  },
};

export default function HospitalsOverviewPage() {
  return (
    <>
      <PageHeader
        title="Our Hospitals & Healing Campuses"
        breadcrumb={[{ name: "Hospitals", path: "/hospitals" }]}
        bgImage="/images/kumar_hospital_main.jpg"
      />

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Two Specialized Healing Centers
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
              Compassionate Natural Healthcare in Karur
            </h2>
            <p className="text-foreground/75 font-light text-base md:text-lg leading-relaxed">
              Under <strong>Kumar Nature Cure Hospital</strong>, founded by Dr. C. Sukumar (B.N.Y.S.) in 2003, we offer both city-accessible clinical healthcare at Gandhigramam and deep residential nature rejuvenation across 24 acres of serene farmland at Sengal.
            </p>
          </div>

          {/* Quick Campus Navigator Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {hospitalBranches.map((hospital) => {
              const isMain = hospital.id === "knch-main";
              const campusUrl = isMain 
                ? "/hospitals/kumar-nature-cure-hospital" 
                : "/hospitals/pk-hospital";
              const galleryUrl = isMain 
                ? "/gallery/kumar-nature-cure-hospital" 
                : "/gallery/pk-hospital";

              return (
                <div
                  key={hospital.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Photo Container */}
                  <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={hospital.image}
                      alt={hospital.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-secondary text-primary font-bold text-xs uppercase px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                        {isMain ? <Building2 size={14} /> : <TreePine size={14} />}
                        {hospital.badge}
                      </span>
                    </div>

                    {/* Bottom Title */}
                    <div className="absolute bottom-4 left-5 right-5 text-white">
                      <p className="text-secondary text-xs font-semibold uppercase tracking-wider mb-1">
                        {hospital.category}
                      </p>
                      <h3 className="text-2xl font-heading font-bold text-white leading-snug">
                        {hospital.name}
                      </h3>
                      <p className="text-white/80 text-xs font-light mt-1">
                        {hospital.tamilName}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 flex flex-col flex-grow">
                    <p className="text-foreground/80 font-light text-sm sm:text-base mb-6 leading-relaxed">
                      {hospital.description}
                    </p>

                    {/* Highlights List */}
                    <div className="mb-6 space-y-2.5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                        Campus Features:
                      </h4>
                      {hospital.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/85 font-medium">
                          <CheckCircle2 size={16} className="text-secondary shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Quick Specs */}
                    <div className="bg-background rounded-2xl p-4 sm:p-5 border border-gray-200/80 mb-6 space-y-3 text-xs sm:text-sm text-foreground/80">
                      <div className="flex items-start gap-2.5">
                        <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-primary block font-semibold">{hospital.address.line1}</strong>
                          <span>{hospital.address.area}, {hospital.address.city} - {hospital.address.pincode}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <Clock size={16} className="text-primary shrink-0" />
                        <span>{hospital.timings}</span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <Stethoscope size={16} className="text-primary shrink-0" />
                        <span className="font-medium text-primary">{hospital.doctors.join(" • ")}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-auto space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Link
                          href={campusUrl}
                          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-primary text-white hover:bg-primary/90 font-medium text-sm transition-all shadow-md"
                        >
                          Explore Campus <ArrowRight size={15} />
                        </Link>
                        <Link
                          href={galleryUrl}
                          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-primary text-primary hover:bg-primary hover:text-white font-medium text-sm transition-all"
                        >
                          Campus Photos
                        </Link>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-xs">
                        <a 
                          href={`tel:${hospital.phones[0].replace(/\s+/g, '')}`}
                          className="text-primary font-bold hover:text-secondary flex items-center gap-1.5"
                        >
                          <Phone size={13} /> {hospital.phones[0]}
                        </a>
                        <Link 
                          href={`/contact?hospital=${encodeURIComponent(hospital.name)}`}
                          className="text-secondary font-bold hover:underline"
                        >
                          Book Visit &rarr;
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Side-by-Side Campus Comparison Table */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-md mb-20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                At a Glance
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-primary mt-1">
                Comparing Our Campuses
              </h3>
              <p className="text-foreground/70 text-sm mt-2">
                Choose the center that best matches your treatment and accommodation goals.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200 bg-stone-50">
                    <th className="py-4 px-4 font-bold text-primary">Feature / Facility</th>
                    <th className="py-4 px-4 font-bold text-primary">KNCH Main Campus (Gandhigramam)</th>
                    <th className="py-4 px-4 font-bold text-primary">P.K. Hospital Campus (Sengal)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-foreground/85">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-primary">Year Established</td>
                    <td className="py-3 px-4">2003 (20+ Years Running)</td>
                    <td className="py-3 px-4">2017 (8+ Years Running)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-primary">Campus Setting</td>
                    <td className="py-3 px-4">10,000 sq.ft Clinical Setting, Trichy Highway</td>
                    <td className="py-3 px-4">24 Acres Lush Green Farmland Sanctuary</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-primary">Primary Services</td>
                    <td className="py-3 px-4">Naturopathy, Dental Clinic, Health Shop</td>
                    <td className="py-3 px-4">Deep Nature Retreat, Mud Bath, Yoga Lawn</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-primary">Dental Care Wing</td>
                    <td className="py-3 px-4 text-green-700 font-bold">✓ Full Multi-Specialty Dental Clinic</td>
                    <td className="py-3 px-4 text-green-700 font-bold">✓ Dental Clinic Setup Available</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-primary">Accommodation Types</td>
                    <td className="py-3 px-4">AC &amp; Non-AC Rooms, Twin Bed Wards</td>
                    <td className="py-3 px-4">Residential Cottages, Nature-view Rooms</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-primary">Outdoor Natural Therapies</td>
                    <td className="py-3 px-4">Therapy Suites, Hydrotherapy, Steam Units</td>
                    <td className="py-3 px-4">Open-air Sun Deck, Mud Preparation Court</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-primary">Organic Satvik Dining</td>
                    <td className="py-3 px-4">Fresh Healing Juices &amp; Natural Diet</td>
                    <td className="py-3 px-4">Farm-Fresh Organic Satvik Cuisine</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-primary">Best For</td>
                    <td className="py-3 px-4 font-medium text-primary">Daily OPD visits, Dental, Fast Clinical Consultations</td>
                    <td className="py-3 px-4 font-medium text-primary">7 to 21-Day Residential Detox &amp; Chronic Recovery</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom CTA Banner */}
          <div className="bg-primary text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left max-w-xl">
              <span className="text-secondary font-bold text-xs uppercase tracking-widest flex items-center justify-center md:justify-start gap-1.5">
                <Compass size={14} /> Need Help Choosing?
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold">
                Speak With Our Medical Consultation Team
              </h3>
              <p className="text-white/80 font-light text-sm sm:text-base">
                Whether you need a walk-in consultation at Gandhigramam or wish to plan an inpatient rejuvenation stay at our 24-acre Sengal retreat, our doctors are here to guide you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="tel:+918148129709"
                className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-7 py-3.5 rounded-full transition-all shadow-lg text-sm text-center"
              >
                Call: 81481 29709
              </a>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-full transition-all border border-white/20 text-sm text-center"
              >
                Send Inquiry Online
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
