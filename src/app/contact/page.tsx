import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AppointmentForm from "@/components/home/AppointmentForm";
import { MapPin, Phone, Clock, Mail, Globe, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Appointments | Kumar Nature Cure Hospital & P.K. Hospital",
  description: "Contact Kumar Nature Cure Hospital (Gandhigramam, Karur) and P.K. Hospital (Karur - Sengal Rd). Call Reception: 81481 29709, Dr. C. Sukumar: 98424 29709, Dr. M. Anitha: 73737 29709.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Clean Hospital Hero Image (Pure photograph, zero blur, zero text overlay, natural 16:9 ratio) */}
      <section className="relative w-full pt-[68px] sm:pt-[72px] bg-background">
        <div className="w-full relative aspect-[16/9] overflow-hidden bg-gray-100">
          <Image
            src="/images/contact_hero.jpg"
            alt="P.K. Hospital - Nature Cure, Yoga & Dental, Karur"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* Two Campuses Cards */}
      <section className="py-14 sm:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            {/* Breadcrumb relocated below hero banner */}
            <nav className="inline-flex items-center gap-2 text-xs font-semibold text-foreground/65 bg-white shadow-2xs px-4 py-1.5 rounded-full mb-5 border border-gray-200/80">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <ChevronRight size={13} className="text-secondary" />
              <span className="text-primary font-bold">Contact</span>
            </nav>

            <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-1">
              Karur, Tamil Nadu
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-primary mt-2 mb-3 tracking-tight">
              Visit or Contact Our Hospital
            </h1>
            <p className="text-foreground/75 font-light text-base md:text-lg max-w-2xl mx-auto">
              Started in 2003 on Trichy National Highway, ~5km from Karur bus stand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Campus 1 */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-md">
              <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
                Main Clinical Center
              </span>
              <h3 className="text-2xl font-heading font-bold text-primary mb-1">
                Kumar Nature Cure Hospital
              </h3>
              <p className="text-xs font-semibold text-secondary mb-5">
                குமார் இயற்கை மற்றும் பல் மருத்துவமனை
              </p>

              <div className="space-y-3.5 text-xs sm:text-sm text-foreground/80">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Kumar+Hospital+-+Nature+Cure+-+Yoga+-+Dental,+Kumar+Hospital,+Sakthi+Nagar,+Gandhigramam,+Karur,+Tamil+Nadu+639004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Kumar Hospital - Nature Cure - Yoga - Dental, Kumar Hospital, Sakthi Nagar, Gandhigramam, Karur, Tamil Nadu 639004
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-primary shrink-0 mt-0.5" />
                  <div className="space-y-1.5">
                    <div>
                      <span className="text-[11px] text-foreground/60 uppercase tracking-wider block">Reception</span>
                      <a href="tel:+918148129709" className="hover:text-primary font-bold block text-sm">
                        +91 81481 29709
                      </a>
                    </div>
                    <div>
                      <span className="text-[11px] text-foreground/60 uppercase tracking-wider block">Dr. C. Sukumar</span>
                      <a href="tel:+919842429709" className="hover:text-primary font-bold block text-sm">
                        +91 98424 29709
                      </a>
                    </div>
                    <div>
                      <span className="text-[11px] text-foreground/60 uppercase tracking-wider block">Dr. M. Anitha</span>
                      <a href="tel:+917373729709" className="hover:text-primary font-bold block text-sm">
                        +91 73737 29709
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-foreground/60 uppercase tracking-wider block">Email</span>
                    <a href="mailto:contact@knchkarur.com" className="hover:text-primary block transition-colors font-medium">
                      contact@knchkarur.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-foreground/60 uppercase tracking-wider block">Website</span>
                    <a href="https://knchkarur.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary block transition-colors font-medium">
                      www.knchkarur.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-primary shrink-0 mt-0.5" />
                  <span>
                    Morning: 9:30 AM – 1:30 PM<br />
                    Evening: 5:00 PM – 8:30 PM
                  </span>
                </div>
              </div>
            </div>
            
            {/* Campus 2: PK Hospital */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-md">
              <span className="bg-secondary/20 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
                Nature Retreat Center
              </span>
              <h3 className="text-2xl font-heading font-bold text-primary mb-1">
                P.K. Hospital
              </h3>
              <p className="text-xs font-semibold text-secondary mb-5">
                பி. கே இயற்கை மருத்துவமனை-யோகா-பல் மருத்துவம்
              </p>

              <div className="space-y-3.5 text-xs sm:text-sm text-foreground/80">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=P.K.Hospital+Nature+cure+-Yoga-Dental,+Karur+-+Sengal+Rd,+Sengal,+Tamil+Nadu+639102"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="leading-relaxed hover:text-primary transition-colors block"
                  >
                    <strong className="block font-semibold">P.K.Hospital Nature cure -Yoga-Dental</strong>
                    Karur - Sengal Rd, Sengal,<br/>
                    Tamil Nadu 639102, India.
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-primary shrink-0 mt-0.5" />
                  <div className="space-y-1.5">
                    <div>
                      <span className="text-[11px] text-foreground/60 uppercase tracking-wider block">Reception</span>
                      <a href="tel:+918148129709" className="hover:text-primary font-bold block text-sm">
                        +91 81481 29709
                      </a>
                    </div>
                    <div>
                      <span className="text-[11px] text-foreground/60 uppercase tracking-wider block">Dr. C. Sukumar</span>
                      <a href="tel:+919842429709" className="hover:text-primary font-bold block text-sm">
                        +91 98424 29709
                      </a>
                    </div>
                    <div>
                      <span className="text-[11px] text-foreground/60 uppercase tracking-wider block">Dr. M. Anitha</span>
                      <a href="tel:+917373729709" className="hover:text-primary font-bold block text-sm">
                        +91 73737 29709
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-foreground/60 uppercase tracking-wider block">Email</span>
                    <a href="mailto:contact@knchkarur.com" className="hover:text-primary block transition-colors font-medium">
                      contact@knchkarur.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-foreground/60 uppercase tracking-wider block">Website</span>
                    <a href="https://knchkarur.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary block transition-colors font-medium">
                      www.knchkarur.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-primary shrink-0 mt-0.5" />
                  <span>
                    By Appointment for specific retreats and specialized therapies.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Interactive Booking Form */}
      <div>
        <AppointmentForm />
      </div>

      {/* Map Section */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">
              Hospital Location Maps
            </h3>
            <p className="text-foreground/70 text-sm mt-2">
              Find our main clinical center and nature retreat campus in Karur
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Kumar Hospital Map */}
            <div className="flex flex-col">
              <h4 className="text-lg font-bold text-primary mb-3 text-center">Kumar Nature Cure Hospital</h4>
              <div className="rounded-3xl overflow-hidden shadow-xl h-[400px] w-full border border-gray-200">
                <iframe 
                  src="https://maps.google.com/maps?q=Kumar+Hospital+-+Nature+Cure+-+Yoga+-+Dental,+Kumar+Hospital,+Sakthi+Nagar,+Gandhigramam,+Karur,+Tamil+Nadu+639004&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kumar Nature Cure Hospital Karur Location Map"
                ></iframe>
              </div>
            </div>

            {/* P.K. Hospital Map */}
            <div className="flex flex-col">
              <h4 className="text-lg font-bold text-primary mb-3 text-center">P.K. Hospital (Karur - Sengal Rd)</h4>
              <div className="rounded-3xl overflow-hidden shadow-xl h-[400px] w-full border border-gray-200">
                <iframe 
                  src="https://maps.google.com/maps?q=P.K.Hospital+Nature+cure+-Yoga-Dental,+Karur+-+Sengal+Rd,+Sengal,+Tamil+Nadu+639102&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="P.K. Hospital Nature Cure Yoga Dental - Karur Sengal Road Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
