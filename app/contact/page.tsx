import type { Metadata } from "next";
import ContactPage from "@/components/sections/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us — Derma Dynamics Clinic Pokhara",
  description:
    "Book a skin consultation at Derma Dynamics Pokhara. Reach us via WhatsApp, phone, or email. Located on New Road, Pokhara — Sunday to Friday, 10am–6pm.",
};

export default function Contact() {
  return <ContactPage />;
}
