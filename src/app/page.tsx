import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Doctors from "@/components/home/Doctors";
import AppointmentForm from "@/components/home/AppointmentForm";

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
