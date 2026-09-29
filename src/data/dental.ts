export interface DentalServiceCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  services: string[];
}

export const dentalCategories: DentalServiceCategory[] = [
  {
    id: "diagnostic-preventive",
    name: "Diagnostic & Preventive Services",
    tagline: "Early detection, computerized diagnostics & proactive oral prevention",
    description:
      "Comprehensive clinical dental examination and preventive dentistry to safeguard long-term oral health, protect tooth enamel, and detect issues before they cause discomfort.",
    image: "/images/dental_diagnostic_clinic.jpg",
    services: [
      "Comprehensive Dental Consultations",
      "Digital Dental X-rays (Low radiation intraoral imaging)",
      "Dental Study Models & Diagnostic Casts",
      "Computerized Dental Patient Records",
      "Diet & Lifestyle Oral Health Analysis",
      "Pit & Fissure Sealants for cavity prevention",
      "Professional Fluoride Applications",
      "Oral Health Promotion & Patient Teaching Aids"
    ]
  },
  {
    id: "conservative-endodontic",
    name: "Conservative & Endodontic Services",
    tagline: "Painless root canals & natural tooth-colored restorations",
    description:
      "Advanced preservation of natural teeth through micro-dentistry, tooth-colored aesthetic fillings, and painless root canal treatments utilizing precision endodontic protocols.",
    image: "/images/dental_restorative_care.jpg",
    services: [
      "Light Cured Composite Fillings (Natural Tooth-Colored)",
      "Glass Ionomer Fluoride-Releasing Fillings",
      "Silver Amalgam Fillings",
      "Post & Core Crown Build-Ups",
      "Ceramic & Metal Inlays",
      "Ceramic & Metal Onlays",
      "Single-Sitting Painless Root Canal Treatments (RCT)"
    ]
  },
  {
    id: "esthetic-cosmetic",
    name: "Esthetic Dentistry / Cosmetic Dentistry",
    tagline: "Smile makeovers, professional whitening & custom veneers",
    description:
      "Artistic smile enhancement tailored to your facial harmony. Transform stained, chipped, or misaligned teeth into a brilliant, confident, and natural smile.",
    image: "/images/dental_cosmetic_treatment.jpg",
    services: [
      "Professional Tooth Bleaching & Laser Whitening",
      "Direct Composite Tooth Bonding",
      "Ultra-thin Porcelain & Ceramic Veneers",
      "Enamel Microabrasion for surface stains",
      "Diastema (Tooth Gap) Closure",
      "Cosmetic Smile Designing"
    ]
  },
  {
    id: "prosthodontic",
    name: "Prosthodontic Services",
    tagline: "Full tooth replacement, zirconia crowns & comfortable bridges",
    description:
      "Specialized replacement of missing teeth and damaged tooth structures to restore complete chewing efficiency, clear speech, and facial aesthetics.",
    image: "/images/dental_cosmetic_treatment.jpg",
    services: [
      "Metal-Free All-Ceramic & Zirconia Crowns & Bridges",
      "Porcelain Fused to Metal (PFM) Crowns & Bridges",
      "Full Metal Cast Gold & Alloy Crowns",
      "Complete Acrylic Dentures (Full Mouth Replacement)",
      "Removable Partial Dentures (Cast & Flexible)",
      "Crown & Bridge Maintenance & Re-cementation"
    ]
  },
  {
    id: "periodontic",
    name: "Periodontic Services",
    tagline: "Advanced gum care, ultrasonic scaling & periodontal surgery",
    description:
      "Comprehensive treatment of gums, periodontal ligaments, and supporting bone to arrest bleeding gums, treat pyorrhea, and ensure firm dental foundation.",
    image: "/images/dental_diagnostic_clinic.jpg",
    services: [
      "Ultrasonic Scaling & Deep Root Planing",
      "Correction of Overhanging Restorations",
      "Gingivectomy & Gum Contouring",
      "Subgingival Curettage",
      "Periodontal Flap Surgeries",
      "Bone & Soft Tissue Grafting",
      "Periodontal Tooth Splinting for mobile teeth"
    ]
  },
  {
    id: "maxillofacial",
    name: "Maxillofacial Surgery",
    tagline: "Gentle surgical extractions & impacted wisdom tooth removal",
    description:
      "Safe, sterile, and pain-free surgical extractions performed under local anesthesia with minimal post-operative downtime.",
    image: "/images/dental_restorative_care.jpg",
    services: [
      "Routine Painless Tooth Extractions",
      "Surgical Removal of Impacted Wisdom Teeth",
      "Alveoloplasty & Pre-prosthetic Surgery",
      "Management of Minor Oral Trauma & Abscesses"
    ]
  },
  {
    id: "pediatric",
    name: "Pediatric Dentistry",
    tagline: "Gentle, fear-free dental care for infants, children & teens",
    description:
      "Dedicated, child-friendly oral healthcare in a comforting atmosphere designed to make dental visits fun, fearless, and protective of developing permanent teeth.",
    image: "/images/dental_pediatric_care.jpg",
    services: [
      "Child-Friendly Tooth Fillings",
      "Pit & Fissure Cavity Sealants",
      "Topical Fluoride Treatments",
      "Pulpotomy & Pulpectomy (Baby Root Canals)",
      "Pediatric Stainless Steel Crowns",
      "Space Maintainers for premature baby tooth loss",
      "Habit Breaking Appliances (Thumb sucking / Tongue thrusting)",
      "Dental Growth & Eruption Monitoring",
      "Preventive & Interceptive Orthodontics",
      "Expecting Parent Counselling on Infant Dental Care",
      "Specialized Dentistry for Children with Special Healthcare Needs"
    ]
  }
];
