"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is Ayurveda and how does it work?",
    answer: "Ayurveda is a 5000-year-old natural system of medicine that originated in India. It works on the principle that health and wellness depend on a delicate balance between the mind, body, and spirit. It uses diet, herbal treatment, and yogic breathing to treat illnesses and maintain health.",
  },
  {
    question: "What is Panchakarma?",
    answer: "Panchakarma is the ultimate mind-body healing experience for detoxifying the body, strengthening the immune system, and restoring balance and well-being. It consists of five major purification procedures tailored to an individual's specific body type (Prakriti).",
  },
  {
    question: "How do I know which treatment is right for me?",
    answer: "During your initial consultation, our experienced Ayurvedic doctors will conduct a thorough assessment of your physical and mental health to determine your Prakriti (body constitution) and any imbalances (Vikriti). Based on this, they will recommend a personalized treatment plan.",
  },
  {
    question: "Are Ayurvedic medicines safe? Do they have side effects?",
    answer: "Authentic Ayurvedic medicines are made from natural herbs and minerals and are generally very safe when prescribed by a qualified practitioner. Because they are natural and work with your body's innate intelligence, they rarely have adverse side effects.",
  },
  {
    question: "Do I need to stay at the hospital for all treatments?",
    answer: "Not necessarily. While intensive detox programs like Panchakarma require you to stay at our facility to monitor your diet and provide daily therapies, many treatments and consultations can be done on an outpatient basis.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <PageHeader 
        title="Frequently Asked Questions" 
        breadcrumb={[{ name: "FAQ", path: "/faq" }]} 
        bgImage="https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?q=80&w=2093&auto=format&fit=crop"
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left bg-background hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-heading font-bold text-primary text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`text-secondary transition-transform duration-300 shrink-0 ${openIndex === index ? "rotate-180" : ""}`} 
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 text-foreground/70 font-light bg-white border-t border-gray-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
