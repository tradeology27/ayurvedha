import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Doctors from "@/components/home/Doctors";
import AppointmentForm from "@/components/home/AppointmentForm";

export const metadata: Metadata = {
  title: "Kumar Nature Cure Hospital (KNCH) | Best Naturopathy & Yoga Hospital in Karur",
  description: "Experience drugless healing at Kumar Nature Cure Hospital (KNCH), Karur. 10,000 sq.ft lush green campus offering specialized Mud therapy, Hydrotherapy, Yoga, and Plantain-Leaf bath.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Doctors />
      <AppointmentForm />
    </>
  );
}
