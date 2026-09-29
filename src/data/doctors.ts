export interface Doctor {
  id: string;
  name: string;
  tamilName: string;
  role: string;
  designation: string;
  qualifications: string;
  university: string;
  registrationNo?: string;
  experience: string;
  specialty: string;
  focusAreas: string[];
  image: string;
  hospitalBranch: string;
  phone: string;
  timings: string;
  bio: string;
  highlights: string[];
}

export const doctorsData: Doctor[] = [
  {
    id: "dr-c-sukumar",
    name: "Dr. C. Sukumar",
    tamilName: "Dr. C. சுகுமார், B.N.Y.S.",
    role: "Founder, Chief Medical Officer & Managing Director",
    designation: "FOUNDER & CHIEF MEDICAL OFFICER",
    qualifications: "B.N.Y.S. (Bachelor of Naturopathy & Yogic Science)",
    university: "The Tamil Nadu Dr. M.G.R. Medical University, Chennai",
    registrationNo: "Reg. Naturopathy & Yoga Physician",
    experience: "Practicing & Running Hospital Since 2003 (20+ Years)",
    specialty: "Naturopathy, Yoga Therapy & Medicine-Free Chronic Disease Reversal",
    focusAreas: [
      "Treatment without any Medicine & Surgery",
      "Avoidance of Allopathy & Herbal Drugs during and after therapy",
      "Chronic & Acute Disease Reversal through Nature Cure",
      "Therapeutic Fasting, Hydrotherapy & Mud Therapy",
      "Clinical Yoga Therapy & Lifestyle Correction"
    ],
    image: "/images/dr_sukumar.jpg",
    hospitalBranch: "Kumar Nature Cure Hospital, Karur",
    phone: "+91 98424 29709",
    timings: "Morning: 9:30 AM – 1:30 PM | Evening: 5:00 PM – 8:30 PM",
    bio: "Dr. C. Sukumar, the Chief Medical Officer and Managing Director of our hospital is a well qualified and experienced Naturopathy and Yoga practitioner graduated as Bachelor of Naturopathy and Yogic Science (B.N.Y.S) from Dr. MGR Medical University, Chennai. He has been running Kumar Nature Cure Hospital since 2003. Our hospital is specialised for treating all kinds of diseases either acute or chronic by Nature Cure Therapies without any medicine and surgery. During the treatment and after treatment people can avoid allopathy and herbal medicine.",
    highlights: [
      "Graduated from Dr. MGR Medical University, Chennai",
      "Running Kumar Nature Cure Hospital since 2003",
      "Specialised in treating all kinds of diseases (acute or chronic)",
      "100% Drugless & Non-Surgical Nature Cure Therapies",
      "Helps patients avoid allopathy and herbal medicine permanently"
    ]
  },
  {
    id: "dr-m-anitha-sukumar",
    name: "Dr. M. Anitha Sukumar",
    tamilName: "Dr. M. அனிதா சுகுமார், B.D.S.",
    role: "Dental Specialist & Head of Dental Wing",
    designation: "DENTAL SPECIALIST",
    qualifications: "B.D.S. (Bachelor of Dental Surgery)",
    university: "Tamil Nadu Dental Council Registered",
    registrationNo: "Reg. Dental Surgeon",
    experience: "18+ Years Clinical Experience",
    specialty: "Comprehensive Dental Care, Oral Health & Smile Wellness",
    focusAreas: [
      "Utmost Care in a Completely Sterile Atmosphere",
      "Treatment for All Kinds of Dental Diseases",
      "Oral Health as an Integral Reflection of General Health",
      "Preventive, Restorative & Cosmetic Dentistry",
      "Painless Extractions & Root Canal Care"
    ],
    image: "/images/dr_anitha_sukumar.jpg",
    hospitalBranch: "Kumar Nature Cure Hospital, Karur",
    phone: "+91 73737 29709",
    timings: "Morning: 9:30 AM – 1:30 PM | Evening: 5:00 PM – 8:30 PM",
    bio: "Dr. M. Anitha Sukumar B.D.S. looks after the dental wing of this hospital. All kinds of dental diseases are treated here with utmost care in a completely sterile atmosphere. We all know Oral Health is a part of general health. The oral cavity reflects the general status of a person. Improving oral health can have a tremendous impact on improving general health and well-being of a community. To give complete health care our hospital has got dental wing as a unique part of it.",
    highlights: [
      "Heads the specialized Dental Wing of the hospital",
      "Completely sterile atmosphere with strict infection control",
      "Comprehensive treatment for all acute and chronic dental conditions",
      "Focuses on oral health as an essential part of total body wellness",
      "Gentle, patient-centric dental care for the entire family"
    ]
  }
];
