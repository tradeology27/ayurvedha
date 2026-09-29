import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, Bed, Heart, Sparkles, Mail, Globe } from "lucide-react";

const FacebookIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 shadow-md flex-shrink-0">
                <Image src="/images/knch_emblem.jpg" alt="KNCH Logo" fill sizes="48px" className="object-cover" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-heading font-bold text-white block leading-tight">
                  Kumar Hospital
                </span>
                <span className="text-secondary text-[10px] sm:text-xs font-semibold tracking-widest uppercase block mt-0.5">
                  Nature Cure & Dental
                </span>
              </div>
            </Link>
            <p className="text-white/80 text-xs sm:text-sm font-light leading-relaxed">
              Started in 2003 in Karur, Tamil Nadu. Situated in 10,000 sq.ft of serene greenery providing peace, relaxation of mind & body, and doctor-supervised budget-friendly residential healing.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs bg-white/10 text-secondary px-3 py-1 rounded-full font-medium">
                <Sparkles size={13} /> 20+ Years Experience • Est. 2003
              </span>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://www.facebook.com/profile.php?id=61592404211155" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-secondary text-white hover:text-primary p-2 rounded-full transition-all">
                <FacebookIcon size={16} />
              </a>
              <a href="https://www.instagram.com/kumarnaturecure" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-secondary text-white hover:text-primary p-2 rounded-full transition-all">
                <InstagramIcon size={16} />
              </a>
              <a href="https://youtube.com/@kumarnaturecurehospital" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-secondary text-white hover:text-primary p-2 rounded-full transition-all">
                <YoutubeIcon size={16} />
              </a>
            </div>
          </div>

          {/* Specialised Treatments */}
          <div>
            <h3 className="text-base font-heading font-bold mb-4 text-secondary tracking-wide">
              Specialised Treatments
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/treatments" className="text-white/80 hover:text-secondary transition-colors">
                  Massage Therapy
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="text-white/80 hover:text-secondary transition-colors">
                  Acupuncture
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="text-white/80 hover:text-secondary transition-colors">
                  Steam Bath
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="text-white/80 hover:text-secondary transition-colors">
                  Diet Therapy
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="text-white/80 hover:text-secondary transition-colors">
                  Mud Therapy
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="text-white/80 hover:text-secondary transition-colors">
                  Hydrotherapy
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="text-white/80 hover:text-secondary transition-colors">
                  Yoga Therapy & Pranayama
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="text-white/80 hover:text-secondary transition-colors">
                  Plantain-Leaf Bath
                </Link>
              </li>
              <li>
                <Link href="/treatments?tab=dental" className="text-white/80 hover:text-secondary transition-colors">
                  Dental Care Clinic
                </Link>
              </li>
              <li>
                <Link href="/treatments?tab=health-shop" className="text-white/80 hover:text-secondary transition-colors">
                  KNCH Health Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Campuses & Locations */}
          <div>
            <h3 className="text-base font-heading font-bold mb-4 text-secondary tracking-wide">
              Our Campuses
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              {/* KNCH Location */}
              <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <p className="font-bold text-white text-[13px] flex items-center gap-1.5 mb-1.5">
                  <MapPin size={14} className="text-secondary" /> KNCH Campus
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Kumar+Hospital+-+Nature+Cure+-+Yoga+-+Dental,+Kumar+Hospital,+Sakthi+Nagar,+Gandhigramam,+Karur,+Tamil+Nadu+639004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/75 text-xs leading-relaxed block hover:text-white transition-colors"
                >
                  Kumar Hospital - Nature Cure - Yoga - Dental, Kumar Hospital, Sakthi Nagar, Gandhigramam, Karur, Tamil Nadu 639004
                </a>
                <p className="text-secondary text-xs mt-2 font-semibold flex items-center gap-1 uppercase tracking-wider">
                  <Bed size={12} /> Outpatient & Inpatient Care
                </p>
              </div>

              {/* PK Hospital Location */}
              <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <p className="font-bold text-white text-[13px] flex items-center gap-1.5 mb-1.5">
                  <MapPin size={14} className="text-secondary" /> P.K. Hospital Campus
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=P.K.Hospital+Nature+cure+-Yoga-Dental,+Karur+-+Sengal+Rd,+Sengal,+Tamil+Nadu+639102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/75 text-xs leading-relaxed block hover:text-white transition-colors"
                >
                  P.K.Hospital Nature cure -Yoga-Dental, Karur - Sengal Rd, Sengal, Tamil Nadu 639102, India
                </a>
                <p className="text-secondary text-xs mt-2 font-semibold flex items-center gap-1 uppercase tracking-wider">
                  <Bed size={12} /> Nature Retreat & Residential Stay
                </p>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-base font-heading font-bold mb-4 text-secondary tracking-wide">
              Contact & Timings
            </h3>
            <ul className="space-y-4 text-xs sm:text-sm">
              <li className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                <Phone className="text-secondary shrink-0 mt-0.5" size={16} />
                <div className="text-white/90 space-y-2.5">
                  <div>
                    <span className="text-white/60 text-[11px] uppercase tracking-wider block">Reception</span>
                    <a href="tel:+918148129709" className="hover:text-secondary block font-bold text-sm">
                      81481 29709
                    </a>
                  </div>
                  <div>
                    <span className="text-white/60 text-[11px] uppercase tracking-wider block">Dr. C. Sukumar</span>
                    <a href="tel:+919842429709" className="hover:text-secondary block font-bold text-sm">
                      98424 29709
                    </a>
                  </div>
                  <div>
                    <span className="text-white/60 text-[11px] uppercase tracking-wider block">Dr. M. Anitha</span>
                    <a href="tel:+917373729709" className="hover:text-secondary block font-bold text-sm">
                      73737 29709
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                <Mail className="text-secondary shrink-0 mt-0.5" size={16} />
                <div className="text-white/90">
                  <span className="text-white/60 text-[11px] uppercase tracking-wider block">Email</span>
                  <a href="mailto:contact@knchkarur.com" className="hover:text-secondary block font-medium text-xs sm:text-sm">
                    contact@knchkarur.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                <Globe className="text-secondary shrink-0 mt-0.5" size={16} />
                <div className="text-white/90">
                  <span className="text-white/60 text-[11px] uppercase tracking-wider block">Website</span>
                  <a href="https://knchkarur.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary block font-medium text-xs sm:text-sm">
                    www.knchkarur.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                <Clock className="text-secondary shrink-0 mt-0.5" size={16} />
                <div className="text-white/80 font-light text-[11px] leading-relaxed">
                  <span className="block text-white font-medium mb-1 text-xs">Consultation Hours</span>
                  Morning: 9:30 AM – 1:30 PM<br />
                  Evening: 5:00 PM – 8:30 PM
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Navigation Quick Links */}
        <div className="border-t border-white/10 pt-6 pb-6 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium">
          <Link href="/" className="text-white/80 hover:text-secondary transition-colors">Home</Link>
          <Link href="/about" className="text-white/80 hover:text-secondary transition-colors">About Us</Link>
          <Link href="/treatments" className="text-white/80 hover:text-secondary transition-colors">Treatments</Link>
          <Link href="/doctors" className="text-white/80 hover:text-secondary transition-colors">Doctors</Link>
          <Link href="/gallery" className="text-white/80 hover:text-secondary transition-colors">Gallery</Link>
          <Link href="/contact" className="text-white/80 hover:text-secondary transition-colors">Contact</Link>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-white/60">
          <p>
            &copy; {new Date().getFullYear()} Kumar Nature Cure Hospital. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            <span>Natural drugless healing with care</span>
            <Heart size={12} className="text-secondary fill-secondary" />
            <span>Karur, Tamil Nadu</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
