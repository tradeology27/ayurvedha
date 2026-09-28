import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FaqAccordion, { FAQItem } from "@/components/faq/FaqAccordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | Naturopathy & Nature Cure",
  description: "Get answers about Naturopathy, Mud therapy, Hydrotherapy, residential admission, inpatient packages, and drugless healing at Kumar Nature Cure Hospital, Karur.",
  alternates: {
    canonical: "/faq",
  },
};

const faqs: FAQItem[] = [
  {
    question: "What is Naturopathy and how does drugless healing work?",
    answer: "Naturopathy is a holistic system of natural medicine that emphasizes the body's self-healing capacity using the five natural elements (Earth, Water, Fire, Air, Ether). Rather than suppressing symptoms with synthetic drugs, it detoxifies the system and restores biological vitality through Mud therapy, Hydrotherapy, Diet therapy, and Yoga.",
  },
  {
    question: "What conditions are treated at Kumar Nature Cure Hospital?",
    answer: "We specialize in chronic conditions including Arthritis & Joint Pain, Spondylosis, Sciatica, Diabetes, Hypertension, Digestive disorders (Gastritis, Constipation), Asthma & Bronchitis, Skin diseases, Obesity, Stress, and post-stroke rehabilitation.",
  },
  {
    question: "Do you offer residential inpatient (admission) facilities?",
    answer: "Yes. Both Kumar Nature Cure Hospital (Gandhigramam, Karur) and P.K. Hospital (Kulithalai) offer residential inpatient facilities surrounded by serene greenery, organic natural diet, and round-the-clock medical care by qualified doctors.",
  },
  {
    question: "What are the key treatments included during a residential stay?",
    answer: "A customized daily regimen typically includes Full-Body Mud Bath, Spinal Spray, Steam Bath, Herbal Enema, Hip Bath, Plantain Leaf Bath, therapeutic Yoga & Pranayama sessions, and therapeutic fasting with raw juices.",
  },
  {
    question: "Can I take outpatient (OPD) consultation without admission?",
    answer: "Yes, outpatient consultations and individual therapy sessions (such as spinal baths, steam therapy, and physiotherapy) are available daily from 6:00 AM to 9:00 PM.",
  },
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHeader 
        title="Frequently Asked Questions" 
        breadcrumb={[{ name: "FAQ", path: "/faq" }]} 
        bgImage="https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?q=80&w=2093&auto=format&fit=crop"
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-3">
              Common Questions About Nature Cure
            </h2>
            <p className="text-foreground/70">
              Clear answers to help you prepare for your health transformation journey.
            </p>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}
