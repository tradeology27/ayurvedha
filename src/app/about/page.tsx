import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import AboutSection from "@/components/home/About";
import HospitalsSection from "@/components/home/HospitalsSection";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Our Hospitals | Kumar Nature Cure Hospital & P.K. Hospital",
  description: "Learn about Kumar Nature Cure Hospital (est. 2003, Karur) and P.K. Hospital Nature Cure (est. 2017, Sengal, Karur). Over 20 years of drugless naturopathy, hydrotherapy, and yoga therapy.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="About Kumar Nature Cure Hospital" 
        breadcrumb={[{ name: "About", path: "/about" }]} 
        bgImage="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop"
      />
      
      {/* Core About Section */}
      <AboutSection />
      
      {/* Campuses Section */}
      <HospitalsSection />

      {/* Hospital History & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">
            
            {/* Real Photo of P.K. Greenery Campus */}
            <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl border-4 border-background">
              <Image 
                src="/images/pk_hospital_green_campus.jpg" 
                alt="P.K.Hospital Nature cure -Yoga-Dental 24 Acres Greenery Campus" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="bg-secondary text-primary font-bold text-xs uppercase px-3 py-1 rounded-full">
                  24 Acres Greenery Retreat • Est. 2017
                </span>
                <p className="font-heading font-bold text-xl mt-2">
                  P.K.Hospital Nature cure -Yoga-Dental
                </p>
                <p className="text-white/80 text-xs">
                  Peaceful residential healing amidst 24 acres of lush trees and fresh oxygen
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold tracking-widest text-secondary uppercase">
                  Our Healing Mission
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">
                  Natural Drugless Health for Every Family
                </h2>
              </div>

              <p className="text-foreground/80 font-light leading-relaxed">
                Founded in <strong>2003</strong>, <strong>Kumar Nature Cure Hospital (KNCH)</strong> was born out of a profound vision to offer pure, drugless healing to people suffering from chronic diseases, spinal conditions, stress, and lifestyle disorders.
              </p>

              <div className="bg-emerald-50/80 border-l-4 border-primary p-4 rounded-r-2xl">
                <p className="text-foreground/90 text-sm md:text-base leading-relaxed font-normal">
                  We specialize in weight loss treatments, pain management, natural detox and rejuvenation, dental aligners, dental braces, and root canal treatments. Alongside these, we offer naturopathy treatment, mud therapy, yoga therapy, massage therapy, hydrotherapy, and plantain-leaf bath, all designed to heal the body in a gentle, natural way.
                </p>
              </div>

              <p className="text-foreground/80 font-light leading-relaxed">
                Our main center at <strong>Shakthi Nagar, Gandhigramam</strong> (located on Trichy National Highway, ~5km from Karur bus stand) brings comprehensive natural care and dental services close to the heart of Karur. In addition, our <strong>24 acres serene greenery campus at P.K. Hospital (started in 2017)</strong> provides patients with a peaceful sanctuary away from noise, pollution, and daily stress.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "KNCH started in 2003 with over 20+ years of clinical experience",
                  "P.K. Hospital campus started in 2017 across 24 acres of serene greenery",
                  "Comfortable accommodation to suit an individual's budget",
                  "24/7 care supervised by qualified and experienced doctors",
                  "Specialized Plantain-leaf bath, Mud therapy & Hydrotherapy",
                  "Full-fledged dental clinic led by experienced dental surgeons",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-secondary shrink-0" size={18} />
                    <span className="text-sm font-medium text-foreground/90">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 bg-primary text-white hover:bg-primary/90 rounded-full font-medium text-sm transition-all shadow-md"
                >
                  Book Inpatient / OPD Visit
                </Link>
                <a
                  href="tel:+918148129709"
                  className="px-6 py-3.5 border border-primary text-primary hover:bg-primary hover:text-white rounded-full font-medium text-sm transition-all"
                >
                  Call Dr. C. Sukumar
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
