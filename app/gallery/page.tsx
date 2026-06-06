import type { Metadata } from "next";
import GalleryPage from "@/components/sections/GalleryPage";

export const metadata: Metadata = {
  title: "Gallery | Derma Dynamics Clinic",
  description:
    "Browse real before-and-after patient results from Derma Dynamics. Unretouched photos from actual patients showing the results of our medically-backed skin treatments.",
};

export default function Gallery() {
  return <GalleryPage />;
}
