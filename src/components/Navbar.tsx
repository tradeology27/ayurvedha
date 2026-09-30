"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Treatments", path: "/treatments" },
  { name: "Doctors", path: "/doctors" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Read Google Translate cookie (handles /en/xx and /auto/xx)
    const match = document.cookie.match(/googtrans=\/(?:en|auto)\/([a-z]{2})/);
    if (match && match[1]) {
      setCurrentLang(match[1]);
    } else {
      setCurrentLang("en");
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDarkNav = isScrolled || pathname !== '/';

  const handleLanguageChange = (code: string) => {
    if (!code || typeof window === "undefined") return;

    const host = window.location.hostname;
    const cleanHost = host.replace(/^www\./i, '');

    const domains = [
      '',
      host,
      '.' + host,
      cleanHost,
      '.' + cleanHost,
      'www.' + cleanHost,
      '.www.' + cleanHost,
    ];
    const paths = ['/', '', window.location.pathname];

    // 1. Purge all prior cookies so previous language (like Tamil) never gets stuck
    domains.forEach((d) => {
      paths.forEach((p) => {
        const domainStr = d ? `; domain=${d}` : '';
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${p || '/'}${domainStr};`;
      });
    });

    // 2. Set new cookie across domains if not English
    if (code !== "en") {
      const val = `/en/${code}`;
      document.cookie = `googtrans=${val}; path=/;`;
      document.cookie = `googtrans=${val}; path=/; domain=${cleanHost};`;
      document.cookie = `googtrans=${val}; path=/; domain=.${cleanHost};`;
      if (host !== cleanHost) {
        document.cookie = `googtrans=${val}; path=/; domain=${host};`;
        document.cookie = `googtrans=${val}; path=/; domain=.${host};`;
      }
    }

    setCurrentLang(code);
    window.location.reload();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDarkNav
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-gray-100"
          : "bg-primary/80 backdrop-blur-sm py-4 border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between gap-2 lg:gap-3">
          
          {/* Logo with responsive scaling */}
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 xl:gap-3 min-w-0 shrink-0">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 xl:w-12 xl:h-12 rounded-full overflow-hidden shadow-md shrink-0 border-2 border-white/20">
              <Image src="/images/knch_emblem.jpg" alt="KNCH Logo" fill sizes="48px" className="object-cover" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className={`text-sm sm:text-base xl:text-xl font-heading font-bold leading-tight truncate notranslate ${isDarkNav ? 'text-primary' : 'text-white'}`}>
                Kumar Hospital
              </span>
              <span className={`hidden xl:block text-[11px] font-semibold tracking-tight whitespace-nowrap notranslate ${isDarkNav ? 'text-secondary' : 'text-secondary'}`}>
                Nature Cure & Dental • Est. 2003
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (scaled for 1024px+) */}
          <nav className="hidden lg:flex items-center gap-2.5 xl:gap-5 2xl:gap-7 shrink-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`text-xs xl:text-sm font-medium transition-colors px-1.5 py-1 hover:text-secondary whitespace-nowrap ${
                    isActive 
                      ? "text-secondary font-bold" 
                      : (isDarkNav ? "text-foreground/80 hover:text-primary" : "text-white/90")
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Direct Phone & CTA Button (Desktop >= 1024px) */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            {/* Custom Language Switcher */}
            <div className="relative shrink-0">
              <select
                value={currentLang}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className={`appearance-none bg-transparent text-[11px] xl:text-xs font-semibold py-1.5 xl:py-2 pl-2.5 pr-6 xl:pr-7 rounded-full border transition-all cursor-pointer outline-none notranslate ${
                  isDarkNav
                    ? "border-gray-200 text-primary hover:bg-gray-50"
                    : "border-white/30 text-white hover:bg-white/10"
                }`}
              >
                <option value="" className="text-black hidden">Lang</option>
                <option value="en" className="text-black">English</option>
                <option value="ta" className="text-black">தமிழ் (Tamil)</option>
                <option value="hi" className="text-black">हिन्दी (Hindi)</option>
                <option value="ml" className="text-black">മലയാളம் (Malayalam)</option>
                <option value="te" className="text-black">తెలుగు (Telugu)</option>
              </select>
              <div className={`absolute right-2 xl:right-2.5 top-1/2 -translate-y-1/2 pointer-events-none ${isDarkNav ? "text-primary" : "text-white"}`}>
                <svg width="8" height="5" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              {/* Hidden Google Translate mount element */}
              <div id="google_translate_element" className="hidden"></div>
            </div>
            
            <a
              href="tel:+918148129709"
              className={`flex items-center gap-1.5 xl:gap-2 text-[11px] xl:text-xs font-bold py-1.5 xl:py-2 px-3 xl:px-4 rounded-full transition-all shadow-sm group animate-pulse hover:animate-none shrink-0 whitespace-nowrap ${
                isDarkNav
                  ? "text-white bg-green-600 hover:bg-green-700"
                  : "text-white bg-[#25D366] hover:bg-[#20bd5a]"
              }`}
            >
              <Phone size={13} className="text-white fill-white shrink-0" />
              <span className="hidden 2xl:inline">Call: </span>
              <span>81481 29709</span>
            </a>

            <Link
              href="/contact"
              className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-3.5 xl:px-5 py-2 xl:py-2.5 rounded-full text-xs xl:text-sm transition-all shadow-sm shrink-0 whitespace-nowrap"
            >
              <span className="hidden sm:inline">Book </span>Consultation
            </Link>
          </div>

          {/* Mobile Language & Menu Toggle — always shrink-0 so never pushed off screen */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0 ml-auto">
            <div className="relative shrink-0">
              <select
                value={currentLang}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className={`appearance-none bg-transparent text-[11px] font-bold py-1.5 pl-2 pr-5 rounded-full border transition-all cursor-pointer outline-none notranslate ${
                  isDarkNav
                    ? "border-gray-300 text-primary hover:bg-gray-50"
                    : "border-white/40 text-white hover:bg-white/10"
                }`}
                style={{ maxWidth: '72px' }}
              >
                <option value="" className="text-black hidden">EN</option>
                <option value="en" className="text-black">EN</option>
                <option value="ta" className="text-black">தமிழ்</option>
                <option value="hi" className="text-black">हिंदी</option>
                <option value="ml" className="text-black">മലയ്</option>
                <option value="te" className="text-black">తెలుగు</option>
              </select>
              <div className={`absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none ${isDarkNav ? "text-primary" : "text-white"}`}>
                <svg width="7" height="5" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <button
              className={`p-1.5 rounded-lg shrink-0 ${isDarkNav ? 'text-primary' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-semibold py-1 ${
                    pathname === link.path ? "text-secondary font-bold" : "text-foreground/85"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <a
                  href="tel:+918148129709"
                  className="flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl text-sm font-bold shadow-md animate-pulse hover:animate-none"
                >
                  <Phone size={16} className="text-white fill-white" /> Call Now: +91 81481 29709
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-primary hover:bg-primary/90 text-white text-center py-3 rounded-xl text-sm font-bold shadow-md"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
