import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import AppointmentForm from "@/components/home/AppointmentForm";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Appointments | Kumar Nature Cure Hospital & P.K. Hospital",
  description: "Contact Kumar Nature Cure Hospital (Gandhigramam, Karur) and P.K. Hospital (Kulithalai). Call +91 94433 34220 / +91 94432 40040 or book your consultation online.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Contact Our 2 Hospitals" 
        breadcrumb={[{ name: "Contact", path: "/contact" }]} 
        bgImage="https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Two Campuses Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">
              Karur, Tamil Nadu
            </span>
            <h2 className="text-3xl font-heading font-bold text-primary mt-2">
              Visit or Contact Our Hospital
            </h2>
            <p className="text-foreground/70 font-light text-sm mt-1">
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
                  <div>
                    <a href="tel:+918148129709" className="hover:text-primary font-bold block">
                      +91 81481 29709
                    </a>
                    <a href="tel:+919842429709" className="hover:text-primary font-bold block mt-0.5">
                      +91 98424 29709
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-primary shrink-0 mt-0.5" />
                  <a href="mailto:contact@knchkarur.com" className="hover:text-primary block transition-colors">
                    contact@knchkarur.com
                  </a>
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
                  <span className="leading-relaxed">
                    P.K.Hospital Nature cure -Yoga-Dental,<br/>
                    Karur, Tamil Nadu.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <a href="tel:+918148129709" className="hover:text-primary font-bold block">
                      +91 81481 29709
                    </a>
                    <a href="tel:+919842429709" className="hover:text-primary font-bold block mt-0.5">
                      +91 98424 29709
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-primary shrink-0 mt-0.5" />
                  <a href="mailto:contact@knchkarur.com" className="hover:text-primary block transition-colors">
                    contact@knchkarur.com
                  </a>
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
              <h4 className="text-lg font-bold text-primary mb-3 text-center">P.K. Hospital (Nature Retreat)</h4>
              <div className="rounded-3xl overflow-hidden shadow-xl h-[400px] w-full border border-gray-200">
                <iframe 
                  src="https://maps.google.com/maps?q=P.K.Hospital+Nature+cure+-Yoga-Dental,+Karur+-+Sengal+Rd,+Sengal,+Tamil+Nadu+639102&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="P.K. Hospital Karur Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
