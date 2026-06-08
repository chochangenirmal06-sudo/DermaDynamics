export type Location = {
  slug: string;
  city: string;
  fullName: string;
  tagline: string;
  heroImage: string;
  heroImageAlt: string;
  aboutImage: string;
  aboutImageAlt: string;
  address: string;
  addressNote: string;
  hours: string;
  phone: { display: string; tel: string };
  whatsapp: string;
  highlights: string[];
  about: string[];
};

export const LOCATIONS: Location[] = [
  {
    slug: "pokhara",
    city: "Pokhara",
    fullName: "Derma Dynamics Pokhara",
    tagline: "Walk in after your shopping, walk out with healthier skin",
    heroImage: "/brand_assets/aboutus2.png",
    heroImageAlt: "Reception desk at the Derma Dynamics Pokhara clinic",
    aboutImage: "/brand_assets/aboutus1.png",
    aboutImageAlt: "A treatment room at a Derma Dynamics clinic",
    address: "New Rd, Pokhara 33700",
    addressNote: "Inside Bhat-Bhateni Supermarket",
    hours: "Open every day, 10:00 AM to 5:30 PM",
    phone: { display: "061-591803", tel: "tel:061591803" },
    whatsapp: "https://wa.me/977061591803",
    highlights: ["Inside Bhat-Bhateni Supermarket", "Open every day", "Korean laser technology"],
    about: [
      "Our Pokhara clinic sits right inside Bhat-Bhateni on New Road, so a visit can fold into an ordinary errand run. No special trip across town, no half day taken off work. Just walk in, see a dermatologist, and get back to your day.",
      "Led by Dr. Anil Kumar Bhatta and a team trained in Korean dermatological techniques, this branch handles everything from quick refreshes like Botox and lip filler to longer-term care for acne, pigmentation, and hair loss.",
    ],
  },
  {
    slug: "lalitpur",
    city: "Lalitpur",
    fullName: "Derma Dynamics Lalitpur",
    tagline: "Skin care that fits into your everyday route through Lagankhel",
    heroImage: "/brand_assets/herobg.png",
    heroImageAlt: "Reception area branding at a Derma Dynamics clinic",
    aboutImage: "/brand_assets/aboutus1.png",
    aboutImageAlt: "A treatment room at a Derma Dynamics clinic",
    address: "Lagankhel Satdobato Rd, Lalitpur 44600",
    addressNote: "Near the Lagankhel-Satdobato junction",
    hours: "Sunday to Friday, 10:00 AM to 6:00 PM. Closed on Saturday",
    phone: { display: "01-5908320", tel: "tel:015908320" },
    whatsapp: "https://wa.me/977015908320",
    highlights: ["On the Lagankhel-Satdobato road", "Open Sunday to Friday", "Korean laser technology"],
    about: [
      "Our Lalitpur clinic sits along Lagankhel-Satdobato Road, one of the valley's busiest and most familiar corridors. If you live or work nearby, getting here is part of your everyday route rather than a detour you have to plan around.",
      "You'll find the same Derma Dynamics standard here as at our other branches: certified dermatologists, Korean-grade equipment, and a treatment plan built around your skin instead of a one-size-fits-all menu.",
    ],
  },
  {
    slug: "dhangadhi",
    city: "Dhangadhi",
    fullName: "Derma Dynamics Dhangadhi",
    tagline: "Korean-standard skin care, now closer to home in the far west",
    heroImage: "/brand_assets/clinicsnaps1.jpg",
    heroImageAlt: "Patients at the reception of a Derma Dynamics clinic",
    aboutImage: "/brand_assets/aboutus1.png",
    aboutImageAlt: "A treatment room at a Derma Dynamics clinic",
    address: "Campus Road Marg, Dhangadhi 10900",
    addressNote: "Off Campus Road",
    hours: "Open every day, 10:00 AM to 6:00 PM",
    phone: { display: "091-590718", tel: "tel:091590718" },
    whatsapp: "https://wa.me/977091590718",
    highlights: ["Serving the far-western region", "Open every day", "Korean laser technology"],
    about: [
      "Our Dhangadhi clinic on Campus Road brings the kind of dermatology care that's usually concentrated in the country's bigger cities right here to the far west. You no longer need to plan a long trip just to see a certified dermatologist.",
      "From laser treatments to hair restoration to everyday skin concerns, the team here follows the same protocols and uses the same Korean technology as our Pokhara and Lalitpur branches.",
    ],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((location) => location.slug === slug);
}
