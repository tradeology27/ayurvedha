import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/home/Services";
import TreatmentExplorer from "@/components/treatments/TreatmentExplorer";
import { ShieldCheck, HeartPulse, Sparkles, Phone } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Specialised Naturopathy Treatments | Mud Therapy, Hydrotherapy, Yoga",
  description: "Explore drugless naturopathy treatments: Mud bath & packs, Spinal spray, Steam bath, Plantain leaf bath, Hip bath, Diet therapy, and Yoga at KNCH Karur.",
  alternates: {
    canonical: "/treatments",
  },
};

export default function TreatmentsPage() {
  return (
    <>
      <PageHeader 
        title="Our Specialised Treatments" 
        breadcrumb={[{ name: "Treatments", path: "/treatments" }]} 
        bgImage="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Core Specialized Treatments from Home Page */}
      <Services hideExploreLink={true} />

      {/* Interactive Treatments & Category Explorer */}
      <TreatmentExplorer />

      {/* Conditions Treated Overview */}
      <section className="py-20 bg-background border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">
              Clinical Specializations
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2 mb-4">
              Health Conditions We Treat
            </h2>
            <p className="text-foreground/70 font-light">
              Integrating classical Naturopathy, Mud therapy, Hydrotherapy, and Yoga for root-cause healing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Spine & Joint Disorders",
                items: ["Cervical & Lumbar Spondylosis", "Sciatica & Disc Prolapse", "Knee Osteoarthritis", "Frozen Shoulder & Stiffness"],
                icon: HeartPulse,
              },
              {
                title: "Metabolic & Lifestyle Disorders",
                items: ["Type 2 Diabetes & High Sugar", "Obesity & Visceral Fat", "Hypertension & High BP", "Fatty Liver & High Cholesterol"],
                icon: ShieldCheck,
              },
              {
                title: "Digestive & Gastrointestinal",
                items: ["Chronic Constipation", "Acid Peptic Disease & GERD", "Irritable Bowel Syndrome (IBS)", "Sluggish Digestion & Toxemia"],
                icon: Sparkles,
              },
              {
                title: "Stress & Neurological Health",
                items: ["Chronic Insomnia & Sleeplessness", "Anxiety, Depression & Burnout", "Migraines & Tension Headaches", "Nervous Exhaustion"],
                icon: Sparkles,
              },
              {
                title: "Skin & Allergy Care",
                items: ["Psoriasis & Scalp Dermatitis", "Chronic Eczema & Dry Itch", "Allergic Rhinitis & Sinusitis", "Bronchial Asthma & Wheezing"],
                icon: ShieldCheck,
              },
              {
                title: "Women's Health & Hormones",
                items: ["PCOD / PCOS Natural Care", "Menopausal Hot Flashes", "Hormonal Weight Resistance", "Pelvic Congestion & Cramps"],
                icon: HeartPulse,
              },
            ].map((cond, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-gray-200/80 shadow-sm hover:shadow-md transition-all hover:border-secondary/40"
              >
                <div className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-5">
                  <cond.icon size={22} />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {cond.title}
                </h3>
                <ul className="space-y-2">
                  {cond.items.map((item, i) => (
                    <li key={i} className="text-sm text-foreground/75 font-light flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Consultation CTA */}
      <section className="py-20 bg-primary text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">

          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Need a Customized Treatment Plan?
          </h2>
          <p className="text-white/80 font-light max-w-2xl mx-auto mb-8 text-base md:text-lg">
            Consult our Founder & Chief Medical Officer Dr. C. Sukumar, B.N.Y.S. at Kumar Nature Cure Hospital (KNCH), Karur to design a tailor-made therapy and residential stay protocol for your health recovery.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-block bg-secondary text-primary font-bold px-8 py-3.5 rounded-full hover:bg-secondary/90 transition-all shadow-lg text-sm"
            >
              Book Doctor Consultation
            </Link>
            <a 
              href="tel:+918148129709" 
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/20 text-white px-8 py-3.5 rounded-full font-medium transition-all text-sm"
            >
              <Phone size={15} /> Call: 81481 29709
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
