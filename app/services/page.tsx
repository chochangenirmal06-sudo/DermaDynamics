import type { Metadata } from "next";
import ServicesPage from "@/components/sections/ServicesPage";

export const metadata: Metadata = {
  title: "Our Treatments | Derma Dynamics Clinic",
  description:
    "Explore skin, hair and laser treatments at Derma Dynamics — Botox, HydraFacial, PRP, Thread Lift and more, available across our clinics in Pokhara, Lalitpur, and Dhangadhi.",
  openGraph: {
    title: "Our Treatments | Derma Dynamics Clinic",
    description:
      "Explore skin, hair and laser treatments at Derma Dynamics — Botox, HydraFacial, PRP, Thread Lift and more, available across our clinics in Pokhara, Lalitpur, and Dhangadhi.",
    siteName: "Derma Dynamics Clinic",
  },
};

export default function Services() {
  return <ServicesPage />;
}
