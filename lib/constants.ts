export type NavLink = {
  label: string;
  href: string;
};

export type Service = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

export type Testimonial = {
  name: string;
  quote: string;
  rating: number;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type ContactInfo = {
  phone: string;
  email: string;
  address: string;
  hoursWeekday: string;
  hoursSaturday: string;
  whatsapp: string;
};

export type SocialLink = {
  platform: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home",     href: "/" },
  { label: "Treatments", href: "/services" },
  { label: "About",    href: "/about" },
  { label: "Gallery",  href: "/gallery" },
  { label: "Contact",  href: "/contact" },
];

export const SERVICES: Service[] = [
  {
    id: "botox",
    name: "Botox",
    description:
      "Reduce fine lines and wrinkles with precision injectable treatments.",
    icon: "Syringe",
  },
  {
    id: "lip-filler",
    name: "Lip Filler",
    description:
      "Enhance lip volume and definition with natural-looking results.",
    icon: "Smile",
  },
  {
    id: "face-lifting-thread",
    name: "Face Lifting Thread",
    description:
      "Non-surgical lift using dissolvable threads for immediate tightening.",
    icon: "ArrowUpRight",
  },
  {
    id: "laser-hair-removal",
    name: "Laser Hair Removal",
    description:
      "Permanent hair reduction using advanced laser technology.",
    icon: "Zap",
  },
  {
    id: "tattoo-removal",
    name: "Tattoo Removal",
    description:
      "Safe, effective laser removal with minimal downtime.",
    icon: "Eraser",
  },
  {
    id: "skin-peeling",
    name: "Skin Peeling",
    description:
      "Chemical peels that resurface skin for a brighter, smoother complexion.",
    icon: "Layers",
  },
  {
    id: "prp-hair-treatment",
    name: "PRP Hair Treatment",
    description:
      "Platelet-rich plasma therapy to stimulate natural hair regrowth.",
    icon: "Droplets",
  },
  {
    id: "microneedling-prp",
    name: "MicroNeedling PRP",
    description:
      "Combined micro-needling and PRP for deep skin rejuvenation.",
    icon: "Shield",
  },
  {
    id: "hydrafacial",
    name: "HydraFacial",
    description:
      "Multi-step facial that cleanses, exfoliates, and hydrates in one session.",
    icon: "Sparkles",
  },
];

export const SECONDARY_SERVICES: string[] = [
  "Dimpleplasty",
  "Earlobe Repair",
  "Blepharoplasty",
  "Mole Removal",
  "Skintag Removal",
  "Scar Revision",
  "Hair Transplantation",
  "Laser Vaginal Rejuvenation",
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Anu",
    rating: 5,
    quote:
      "Dr. Jyoti Gurung is the most kind and empathetic doctor I have ever met. She listened to every concern and remembered everything I said. Truly exceptional care.",
  },
  {
    name: "Susmita Thapa Magar",
    rating: 5,
    quote:
      "I visited for freckles removal and couldn't be happier with the results. The staff were knowledgeable and attentive, and the clinic had a genuinely welcoming atmosphere.",
  },
  {
    name: "Rosemin R",
    rating: 5,
    quote:
      "Dr. Jyoti Gurung is very friendly and a wonderful doctor. I've rarely found such a kind dermatologist in Pokhara. The staff were warm and welcoming. Will definitely recommend.",
  },
  {
    name: "Gurung Amber",
    rating: 5,
    quote:
      "My experience was wonderful. The staff were incredibly friendly and Dr. Rakshya was excellent. I'm recommending this clinic to all my friends and family.",
  },
  {
    name: "Gita Gurung",
    rating: 5,
    quote:
      "Lovely ambiance and Dr. Anil Kumar Bhatta listened so patiently to all my concerns. I can already see visible results on my skin. Highly recommend.",
  },
];

export const TEAM: TeamMember[] = [
  {
    name: "Simran Bista",
    role: "Senior Nurse",
    bio: "Aesthetic nurse specialising in cosmetic and dermatologic procedures. Passionate about anti-aging treatments using energy-based devices to treat pigmentation, vascular issues, scarring, and skin rejuvenation.",
  },
  {
    name: "Chandra Chaudary",
    role: "Pharmacist",
    bio: "Ensures patients receive safe and effective medications while providing valuable health advice. Collaborates with healthcare professionals to optimise medication therapies.",
  },
  {
    name: "Prashna Biswokarma",
    role: "Receptionist",
    bio: "First point of contact for visitors. Manages appointment booking, phone calls, and front desk operations.",
  },
  {
    name: "Sabhyata Khatri",
    role: "Administrative Manager",
    bio: "Energetic and hard-working. Manages data entry, record keeping, and coordination across departments.",
  },
  {
    name: "Bibita Achhami",
    role: "Beautician",
    bio: "Focuses on cosmetic skin treatments including facials, massages, and appearance-enhancing procedures.",
  },
];

export const STATS: Stat[] = [
  { value: "500+",  label: "Happy Patients" },
  { value: "4+",    label: "Years of Excellence" },
  { value: "20+",   label: "Advanced Treatments" },
  { value: "4.8★",  label: "Google Rating" },
];

export const CONTACT_INFO: ContactInfo = {
  phone:          "061-591803",
  email:          "dynamicsderm@gmail.com",
  address:        "New Road, Pokhara, Nepal",
  hoursWeekday:   "Sunday–Friday: 10:00 AM – 6:00 PM",
  hoursSaturday:  "Saturday: Closed",
  whatsapp:       "https://wa.me/977061591803",
};

export const TAGLINE = "Where Science Meets Your Skin";

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "Facebook",  href: "https://www.facebook.com/derm.dynamics/" },
  { platform: "Instagram", href: "https://www.instagram.com/dermdynamics/?hl=en" },
  { platform: "TikTok",    href: "https://www.tiktok.com/@dermdynamics" },
  { platform: "X",         href: "https://x.com/dranil_phd" },
  { platform: "YouTube",   href: "https://www.youtube.com/c/DrAnilKumarBhattaPhD" },
];
