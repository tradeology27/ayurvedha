"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface FAQItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((faq, index) => (
        <div 
          key={index} 
          className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:border-primary/30 transition-colors"
        >
          <button
            className="w-full px-6 py-4 flex items-center justify-between text-left bg-background hover:bg-gray-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
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
                <div className="px-6 py-4 text-foreground/75 font-light leading-relaxed bg-white border-t border-gray-100">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
