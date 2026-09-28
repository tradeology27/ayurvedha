"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "S. Murugesan",
    location: "Karur, Tamil Nadu",
    quote: "After 10 days of mud therapy and massages at Kumar Hospital, my 3-year chronic back pain completely vanished without any surgery.",
    rating: 5,
  },
  {
    name: "Revathi Subramanian",
    location: "Trichy, Tamil Nadu",
    quote: "The signature Plantain-Leaf bath and fasting completely normalized my sugar levels. The serene green campus provided total peace of mind.",
    rating: 5,
  },
  {
    name: "K. Venkatesh",
    location: "Coimbatore, Tamil Nadu",
    quote: "Exceptional nature cure hospital with budget-friendly stays. The doctor-supervised care and fresh natural diet made me feel 10 years younger.",
    rating: 5,
  },
  {
    name: "Meenakshi Sundaram",
    location: "Erode, Tamil Nadu",
    quote: "Both the Naturopathy care and dental treatment are top-notch. Very caring and patient-friendly environment right on the Trichy Highway.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-5">
            Words of Healing & Recovery
          </h2>
          <p className="text-white/80 font-light max-w-2xl mx-auto text-base sm:text-lg">
            Hear from patients who experienced remarkable recovery through our drugless therapies and residential stay at Kumar Nature Cure Hospital.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pb-8 max-w-6xl mx-auto"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="!pb-14"
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white/10 backdrop-blur-md border border-white/15 p-7 rounded-3xl h-full flex flex-col relative mt-4 shadow-xl">
                  <div className="absolute -top-5 left-6 bg-secondary w-10 h-10 rounded-xl flex items-center justify-center shadow-lg">
                    <Quote className="text-primary" size={18} fill="currentColor" />
                  </div>
                  
                  <div className="flex gap-1 mb-4 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < testimonial.rating ? "text-secondary" : "text-white/20"}
                        fill={i < testimonial.rating ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                  
                  <div className="flex-grow flex flex-col justify-center mb-6">
                    <p className="text-white/90 italic text-sm leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>
                  
                  <div className="pt-3 border-t border-white/15">
                    <h4 className="font-heading font-bold text-white text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-white/70 text-xs mt-0.5">{testimonial.location}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
