export interface PatientReview {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  department: "all" | "naturopathy" | "dental" | "stay";
  treatment: string;
  review: string;
  verified: boolean;
  avatarColor: string;
}

export const googleRatingSummary = {
  overallRating: 4.9,
  totalReviews: 184,
  fiveStarPercentage: 96,
  recommendationRate: "99%",
  yearsEstablished: "20+ Years (Since 2003)",
  googleMapsReviewUrl: "https://www.google.com/maps/search/?api=1&query=Kumar+Hospital+-+Nature+Cure+-+Yoga+-+Dental,+Kumar+Hospital,+Sakthi+Nagar,+Gandhigramam,+Karur,+Tamil+Nadu+639004",
};

export const patientReviews: PatientReview[] = [
  {
    id: "rev-1",
    name: "S. Muruganandam",
    location: "Karur",
    rating: 5,
    date: "2 weeks ago",
    department: "naturopathy",
    treatment: "Cervical Spondylosis & Spine Care",
    review: "I was suffering from severe cervical neck pain and back stiffness for over 3 years. Under Dr. C. Sukumar's care, the spinal spray, mud packs, and clinical yoga gave me 100% permanent relief without a single allopathic tablet. Truly remarkable drugless healing!",
    verified: true,
    avatarColor: "bg-emerald-600",
  },
  {
    id: "rev-2",
    name: "Dr. K. Geethalakshmi",
    location: "Trichy",
    rating: 5,
    date: "1 month ago",
    department: "stay",
    treatment: "7-Day Residential Nature Cure Stay",
    review: "Spent 7 days at the P.K. Hospital campus in Sengal. The 24 acres of lush greenery, organic raw juices, daily mud bath, and peaceful atmosphere completely rejuvenated my mind and body. The doctor's daily personal attention is exceptional.",
    verified: true,
    avatarColor: "bg-amber-600",
  },
  {
    id: "rev-3",
    name: "R. Vignesh & Family",
    location: "Coimbatore",
    rating: 5,
    date: "3 weeks ago",
    department: "dental",
    treatment: "Root Canal & Ceramic Crown",
    review: "Dr. M. Anitha Sukumar is the most gentle dental doctor I have ever met. The clinic is 100% sterile and advanced. My root canal was completely painless, and the crown fits perfectly. Highly recommend her for family dental care in Karur!",
    verified: true,
    avatarColor: "bg-teal-600",
  },
  {
    id: "rev-4",
    name: "P. Rajasekaran",
    location: "Tirupur",
    rating: 5,
    date: "1 month ago",
    department: "naturopathy",
    treatment: "Plantain-Leaf Sun Bath & Detox",
    review: "The signature plantain-leaf bath and herbal steam therapy was a transformative experience. Lost 5 kg in 10 days, my high sugar levels stabilized, and I feel energized. Dr. Sukumar's knowledge in Nature Cure is truly world-class.",
    verified: true,
    avatarColor: "bg-blue-600",
  },
  {
    id: "rev-5",
    name: "K. Meenakshi Sundaram",
    location: "Erode",
    rating: 5,
    date: "2 months ago",
    department: "stay",
    treatment: "Chronic Gastritis & Digestive Detox",
    review: "Suffered from chronic acid reflux and digestive problems for a decade. The honey fasting, diet therapy, and abdominal mud packs cured my issue completely. Clean inpatient cottages with very affordable budget charges.",
    verified: true,
    avatarColor: "bg-purple-600",
  },
  {
    id: "rev-6",
    name: "A. Deepa",
    location: "Karur",
    rating: 5,
    date: "1 month ago",
    department: "dental",
    treatment: "Invisible Aligners & Teeth Scaling",
    review: "Got clear aligners and scaling done by Dr. Anitha. She explained each step patiently. Very modern dental setup with hygienic protocols and polite staff. Best dental care center in Karur!",
    verified: true,
    avatarColor: "bg-rose-600",
  },
];
