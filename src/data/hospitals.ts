export interface HospitalBranch {
  id: string;
  name: string;
  tamilName: string;
  tagline: string;
  category: string;
  image: string;
  badge: string;
  description: string;
  features: string[];
  facilities: string[];
  address: {
    line1: string;
    area: string;
    city: string;
    landmark: string;
    pincode: string;
  };
  phones: string[];
  timings: string;
  doctors: string[];
  stayAvailable: boolean;
}

export const hospitalBranches: HospitalBranch[] = [
  {
    id: "knch-main",
    name: "Kumar Nature Cure Hospital (KNCH)",
    tamilName: "குமார் இயற்கை மற்றும் பல் மருத்துவமனை",
    tagline: "Headquarters & Comprehensive Healthcare Center",
    category: "Main Hospital & Clinical Center",
    image: "/images/kumar_hospital_main.jpg",
    badge: "Est. 2003 • Main Hospital",
    description:
      "Started in 2003, our main hospital is located at Shakthi Nagar, Gandhigramam, just 5 km from Karur Bus Stand on the Trichy National Highway. Equipped with multi-specialty nature cure therapy suites, dental care, hydrotherapy, and comfortable residential rooms.",
    features: [
      "5 km from Karur Bus Stand (Trichy National Highway)",
      "Daily Outpatient & Inpatient Consultations",
      "Specialised Naturopathy, Yoga, Acupuncture & Dental Clinic",
      "Comfortable accommodation to suit an individual's budget",
      "Supervised round-the-clock by experienced doctors"
    ],
    facilities: [
      "Consultation Suites (Dr. C. Sukumar, BNYS & Dr. M. Anitha Sukumar, BDS)",
      "Dedicated Hydrotherapy & Steam Bath Units",
      "Natural Massage & Reflexology Chambers",
      "Full-fledged Dental Care Department",
      "Inpatient Patient Rooms (Single & Sharing)",
      "Herbal Pharmacy & Natural Diet Counter"
    ],
    address: {
      line1: "Shakthi Nagar, Gandhigramam",
      area: "Trichy National Highway (5km from Bus Stand)",
      city: "Karur",
      landmark: "Near Gandhigramam",
      pincode: "639004"
    },
    phones: ["+91 81481 29709", "+91 98424 29709"],
    timings: "Morning: 9:30 AM – 1:30 PM | Evening: 5:00 PM – 8:30 PM",
    doctors: ["Dr. C. Sukumar, B.N.Y.S. (Founder & CMO)", "Dr. M. Anitha Sukumar, B.D.S. (Dental Specialist)"],
    stayAvailable: true
  },
  {
    id: "pk-green-campus",
    name: "P.K.Hospital Nature cure -Yoga-Dental",
    tamilName: "பி. கே இயற்கை மருத்துவமனை-யோகா-பல் மருத்துவம்",
    tagline: "10,000 Sq.Ft Lush Green Healing Sanctuary",
    category: "Nature Retreat & Residential Campus",
    image: "/images/pk_hospital_green_campus.jpg",
    badge: "Greenery Sanctuary • Inpatient Retreat",
    description:
      "Nestled amidst 10,000 sq.ft of peaceful, pollution-free land surrounded by serene nature and lush trees. This campus is specially crafted for deep residential rejuvenation, long-term chronic recovery, banana-leaf sun baths, mud therapy, and daily yoga under fresh open skies.",
    features: [
      "Situated in 10,000 sq.ft of serene green landscape",
      "Pollution-free, peaceful atmosphere for mind & body relaxation",
      "Open-air Plantain-Leaf Bath decks & Mud Therapy courts",
      "Dedicated Yoga & Meditation Lawn",
      "Nutritious organic satvik healing diet prepared fresh"
    ],
    facilities: [
      "Residential Inpatient Cottages & Budget-friendly Rooms",
      "Sun-Drenched Plantain-Leaf Bath Platform",
      "Natural Mineral Mud Bath & Clay Preparation Court",
      "Spinal Spray & Immersion Hydrotherapy Pools",
      "Open-Air Yoga & Pranayama Pavilion",
      "Medicinal Herbal Gardens & Walking Trails"
    ],
    address: {
      line1: "P.K. Hospital Campus, Greenery Nature Enclave",
      area: "Gandhigramam Surroundings",
      city: "Karur",
      landmark: "Close to Trichy National Highway",
      pincode: "639004"
    },
    phones: ["+91 81481 29709", "+91 98424 29709"],
    timings: "Residential Care: 24 Hours | Day Visit: 8:00 AM – 6:00 PM",
    doctors: ["Dr. C. Sukumar, B.N.Y.S. (Founder & Chief Medical Officer)"],
    stayAvailable: true
  }
];
