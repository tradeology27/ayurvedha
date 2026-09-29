"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Phone, MapPin, Clock } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Valid 10-digit phone number is required"),
  hospital: z.string().min(1, "Please select a hospital campus"),
  treatment: z.string().optional(),
  date: z.string().min(1, "Please select a preferred date"),
  message: z.string().min(5, "Please describe your health concerns/symptoms"),
});

type FormData = z.infer<typeof formSchema>;

export default function AppointmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hospital: "knch-main",
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    const hospitalName = data.hospital === "knch-main" ? "Kumar Nature Cure Hospital (Gandhigramam)" : "P.K.Hospital Nature cure -Yoga-Dental (Karur - Sengal Rd)";
    let text = `*New Booking Request!* 🌿\n\n`;
    text += `👤 *Name:* ${data.name}\n`;
    text += `📞 *Phone:* ${data.phone}\n`;
    text += `🏥 *Center:* ${hospitalName}\n`;
    text += `📅 *Date:* ${data.date}\n`;
    if (data.treatment) {
      text += `⚕️ *Treatment:* ${data.treatment}\n`;
    }
    if (data.message) {
      text += `\n💬 *Issues / Message:*\n_${data.message}_\n`;
    }

    const whatsappUrl = `https://wa.me/918148129709?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => {
      setIsSuccess(false);
    }, 6000);
  };

  return (
    <section id="appointment" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row bg-background rounded-3xl overflow-hidden shadow-2xl max-w-6xl mx-auto border border-gray-200/80">
          
          {/* Left Panel: Contact & Hospital Info */}
          <div className="w-full lg:w-2/5 bg-primary text-white p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <span className="text-secondary text-xs font-bold uppercase tracking-widest block mb-2">
                Kumar Nature Cure Hospital
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
                Book Consultation or Residential Stay
              </h3>
              <p className="text-white/80 font-light mb-8 text-sm leading-relaxed">
                Connect with our expert Naturopathy doctors and Dental specialists. Choose between outpatient therapy or peaceful residential stay in our 10,000 sq.ft. green campus.
              </p>

              <div className="space-y-6 text-sm">
                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center text-secondary shrink-0 mt-0.5">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Main Location</h4>
                    <p className="text-white/70 text-xs mt-0.5 leading-relaxed">
                      Shakthi Nagar, Gandhigramam, Karur<br />
                      Trichy National Highway (~5km from Bus Stand)
                    </p>
                  </div>
                </div>

                {/* Direct Phone Numbers */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center text-secondary shrink-0 mt-0.5">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">Direct Contact & Helpline</h4>
                    <p className="text-white/80 text-xs">
                      <span className="text-white/60 block text-[10px] uppercase tracking-wider">Reception:</span>
                      <a href="tel:+918148129709" className="hover:text-secondary font-bold text-sm block">
                        +91 81481 29709
                      </a>
                    </p>
                    <p className="text-white/80 text-xs mt-1.5">
                      <span className="text-white/60 block text-[10px] uppercase tracking-wider">Dr. C. Sukumar:</span>
                      <a href="tel:+919842429709" className="hover:text-secondary font-bold text-sm block">
                        +91 98424 29709
                      </a>
                    </p>
                    <p className="text-white/80 text-xs mt-1.5">
                      <span className="text-white/60 block text-[10px] uppercase tracking-wider">Dr. M. Anitha:</span>
                      <a href="tel:+917373729709" className="hover:text-secondary font-bold text-sm block">
                        +91 73737 29709
                      </a>
                    </p>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center text-secondary shrink-0 mt-0.5">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Consultation Hours</h4>
                    <p className="text-white/70 text-xs mt-0.5">
                      Morning: 9:30 AM – 1:30 PM<br />
                      Evening: 5:00 PM – 8:30 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/15">
              <p className="text-xs text-white/75 italic">
                &ldquo;Providing modern, comfortable accommodation suited to an individual&apos;s budget with 24/7 doctor supervision.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Panel: Clean Interactive Form */}
          <div className="w-full lg:w-3/5 p-8 sm:p-12 relative bg-white">
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm z-10 text-center p-8"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                  Appointment Request Received!
                </h3>
                <p className="text-foreground/75 text-sm max-w-md">
                  Thank you. Dr. Sukumar&apos;s hospital team will call you back shortly on your provided phone number to confirm your consultation or residential stay schedule.
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <span className="text-foreground/50 text-xs font-bold uppercase tracking-widest block mb-2">
                Booking Form
              </span>
              <h4 className="text-xl font-heading font-bold text-primary mb-2">
                Patient Details & Consultation Request
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-foreground/80">
                    Patient Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    placeholder="Enter your name"
                    className={`w-full px-3.5 py-2.5 rounded-xl border bg-background/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm transition-all ${
                      errors.name ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs">{errors.name.message}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-foreground/80">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder="e.g. 81481 29709"
                    className={`w-full px-3.5 py-2.5 rounded-xl border bg-background/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm transition-all ${
                      errors.phone ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              {/* Hospital Center Selection */}
              <div className="space-y-1.5">
                <label htmlFor="hospital" className="text-xs font-bold uppercase tracking-wider text-foreground/80">
                  Hospital Center *
                </label>
                <select
                  id="hospital"
                  {...register("hospital")}
                  className={`w-full px-3.5 py-2.5 rounded-xl border bg-background/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm transition-all ${
                    errors.hospital ? "border-red-500" : "border-gray-200"
                  }`}
                >
                  <option value="knch-main">Kumar Nature Cure Hospital (Gandhigramam, Karur)</option>
                  <option value="pk-hospital">P.K.Hospital Nature cure -Yoga-Dental (Karur - Sengal Rd, Sengal)</option>
                </select>
                {errors.hospital && (
                  <p className="text-red-500 text-xs">{errors.hospital.message}</p>
                )}
              </div>

              {/* Health Message (Optional) */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-foreground/80">
                  Describe Health Concerns / Symptoms *
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={3}
                  placeholder="e.g. Back pain, diabetes, digestive problem, stress, or stay requirement..."
                  className={`w-full px-3.5 py-2.5 rounded-xl border bg-background/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm transition-all resize-none ${
                    errors.message ? "border-red-500" : "border-gray-200"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs">{errors.message.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Treatment Selection (Required) */}
                <div className="space-y-1.5">
                  <label htmlFor="treatment" className="text-xs font-bold uppercase tracking-wider text-foreground/80">
                    Treatment Required (Optional)
                  </label>
                  <select
                    id="treatment"
                    {...register("treatment")}
                    className={`w-full px-3.5 py-2.5 rounded-xl border bg-background/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm transition-all ${
                      errors.treatment ? "border-red-500" : "border-gray-200"
                    }`}
                  >
                    <option value="">Select treatment</option>
                    <option value="General Doctor Consultation">General Doctor Consultation</option>
                    <option value="Massage therapy">Massage Therapy</option>
                    <option value="Acupuncture">Acupuncture Therapy</option>
                    <option value="Steam bath">Steam Bath (Herbal Steam)</option>
                    <option value="Diet therapy">Diet Therapy (Clinical Nutrition)</option>
                    <option value="Mud therapy">Mud Therapy & Mud Bath</option>
                    <option value="Hydrotherapy">Hydrotherapy & Spinal Spray</option>
                    <option value="Yoga therapy">Yoga Therapy & Pranayama</option>
                    <option value="Plantain-leaf bath">Plantain-Leaf Bath (Banana Leaf Sun Bath)</option>
                    <option value="Dental Care">Dental Care (Dr. M. Anitha Sukumar, B.D.S.)</option>
                    <option value="Residential Inpatient Stay">Residential Inpatient Stay</option>
                  </select>
                  {errors.treatment && (
                    <p className="text-red-500 text-xs">{errors.treatment.message}</p>
                  )}
                </div>

                {/* Date */}
                <div className="space-y-1.5">
                  <label htmlFor="date" className="text-xs font-bold uppercase tracking-wider text-foreground/80">
                    Preferred Date *
                  </label>
                  <input
                    id="date"
                    type="date"
                    {...register("date")}
                    className={`w-full px-3.5 py-2.5 rounded-xl border bg-background/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm transition-all ${
                      errors.date ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                  {errors.date && (
                    <p className="text-red-500 text-xs">{errors.date.message}</p>
                  )}
                </div>
              </div>





              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Submitting Request...</span>
                  </>
                ) : (
                  <span>Request Doctor Consultation / Stay</span>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
