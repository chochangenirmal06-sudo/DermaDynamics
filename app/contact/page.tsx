import type { Metadata } from "next";
import ContactPage from "@/components/sections/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us | Derma Dynamics Clinic",
  description:
    "Find your nearest Derma Dynamics clinic across Pokhara, Lalitpur, and Dhangadhi. Reach us directly via WhatsApp or phone.",
};

export default function Contact() {
  return <ContactPage />;
}
