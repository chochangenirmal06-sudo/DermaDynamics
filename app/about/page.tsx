import type { Metadata } from "next";
import AboutPage from "@/components/sections/AboutPage";

export const metadata: Metadata = {
  title: "About Us | Derma Dynamics Clinic",
  description:
    "Meet the expert team behind Derma Dynamics. Korea-trained physicians, advanced skincare technology, and a mission to deliver visible, lasting results across Nepal.",
};

export default function About() {
  return <AboutPage />;
}
