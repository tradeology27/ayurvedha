import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import TreatmentsTabs from "@/components/treatments/TreatmentsTabs";

export const metadata: Metadata = {
  title: "Specialised Treatments | Naturopathy, Dental Care & Health Shop",
  description: "Explore authentic Naturopathy therapies, Advanced Dental Care Clinic by Dr. M. Anitha Sukumar, and KNCH Organic Health Shop at Kumar Nature Cure Hospital, Karur.",
  alternates: {
    canonical: "/treatments",
  },
};

export default function TreatmentsPage() {
  return (
    <>
      <PageHeader 
        title="Our Specialised Treatments" 
        breadcrumb={[{ name: "Treatments", path: "/treatments" }]} 
        bgImage="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop"
      />

      {/* 3 Main Sections: Naturopathy | Dental | Health Shop */}
      <TreatmentsTabs />
    </>
  );
}

