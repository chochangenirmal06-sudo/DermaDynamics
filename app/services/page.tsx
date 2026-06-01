import type { Metadata } from "next";
import ServicesPage from "@/components/sections/ServicesPage";

export const metadata: Metadata = {
  title: "Our Services — Derma Dynamics Clinic Pokhara",
  description:
    "Explore all 17 skin, hair and laser treatments at Derma Dynamics Pokhara. Book Botox, HydraFacial, PRP, Thread Lift and more — directly via WhatsApp.",
  openGraph: {
    title: "Our Services — Derma Dynamics Clinic Pokhara",
    description:
      "Explore all 17 skin, hair and laser treatments at Derma Dynamics Pokhara. Book Botox, HydraFacial, PRP, Thread Lift and more — directly via WhatsApp.",
    url: "https://dermadynamicspokhara.com/services",
    siteName: "Derma Dynamics Clinic Pokhara",
  },
};

export default function Services() {
  return <ServicesPage />;
}
