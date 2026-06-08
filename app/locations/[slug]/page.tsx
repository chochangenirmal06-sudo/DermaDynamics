import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationPage from "@/components/sections/LocationPage";
import { LOCATIONS, getLocationBySlug } from "@/lib/locations";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return LOCATIONS.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};

  return {
    title: `${location.fullName} | Skin, Hair & Laser Clinic`,
    description: `Visit Derma Dynamics in ${location.city}: ${location.address}. ${location.hours}. Reach us directly via WhatsApp or phone for consultations and treatments.`,
  };
}

export default async function Location({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  return <LocationPage location={location} />;
}
