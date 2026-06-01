import {
  Smile,
  Ear,
  Eye,
  XCircle,
  Scissors,
  Wand2,
  Leaf,
  ShieldCheck,
  type LucideProps,
} from "lucide-react";
import type { FC } from "react";

const WA = "https://wa.me/977061591803";

type ServiceItem = {
  num: string;
  name: string;
  desc: string;
  img: string | null;
  alt: string | null;
  Icon: FC<LucideProps> | null;
  eager: boolean;
};

const SERVICES: ServiceItem[] = [
  {
    num: "01",
    name: "Botox",
    desc: "Reduce fine lines and wrinkles with precision injectable treatments.",
    img: "/brand_assets/botox.png",
    alt: "Botox treatment at Derma Dynamics Pokhara",
    Icon: null,
    eager: true,
  },
  {
    num: "02",
    name: "Lip Filler",
    desc: "Enhance lip volume and definition with natural-looking results.",
    img: "/brand_assets/lipfiller.png",
    alt: "Lip filler treatment at Derma Dynamics Pokhara",
    Icon: null,
    eager: true,
  },
  {
    num: "03",
    name: "Face Lifting Thread",
    desc: "Non-surgical lift using dissolvable threads for immediate tightening.",
    img: "/brand_assets/Face Lifting.png",
    alt: "Face lifting thread treatment at Derma Dynamics Pokhara",
    Icon: null,
    eager: true,
  },
  {
    num: "04",
    name: "Laser Hair Removal",
    desc: "Permanent hair reduction using advanced laser technology.",
    img: "/brand_assets/laserhair.png",
    alt: "Laser hair removal at Derma Dynamics Pokhara",
    Icon: null,
    eager: true,
  },
  {
    num: "05",
    name: "Tattoo Removal",
    desc: "Safe, effective laser removal with minimal downtime.",
    img: "/brand_assets/tatto.png",
    alt: "Tattoo removal at Derma Dynamics Pokhara",
    Icon: null,
    eager: false,
  },
  {
    num: "06",
    name: "Skin Peeling",
    desc: "Chemical peels that resurface skin for a brighter, smoother complexion.",
    img: "/brand_assets/skinpeeling.png",
    alt: "Skin peeling treatment at Derma Dynamics Pokhara",
    Icon: null,
    eager: false,
  },
  {
    num: "07",
    name: "PRP Hair Treatment",
    desc: "Platelet-rich plasma therapy to stimulate natural hair regrowth.",
    img: "/brand_assets/prphair.png",
    alt: "PRP hair treatment at Derma Dynamics Pokhara",
    Icon: null,
    eager: false,
  },
  {
    num: "08",
    name: "MicroNeedling PRP",
    desc: "Combined micro-needling and PRP for deep skin rejuvenation.",
    img: "/brand_assets/microneedling.png",
    alt: "MicroNeedling PRP treatment at Derma Dynamics Pokhara",
    Icon: null,
    eager: false,
  },
  {
    num: "09",
    name: "HydraFacial",
    desc: "Multi-step facial that cleanses, exfoliates, and hydrates in one session.",
    img: "/brand_assets/hydrafacial.png",
    alt: "HydraFacial treatment at Derma Dynamics Pokhara",
    Icon: null,
    eager: false,
  },
  {
    num: "10",
    name: "Dimpleplasty",
    desc: "Cosmetic cheek dimple creation.",
    img: null,
    alt: null,
    Icon: Smile,
    eager: false,
  },
  {
    num: "11",
    name: "Earlobe Repair",
    desc: "Correction of torn or stretched earlobes.",
    img: null,
    alt: null,
    Icon: Ear,
    eager: false,
  },
  {
    num: "12",
    name: "Blepharoplasty",
    desc: "Eyelid rejuvenation surgery.",
    img: null,
    alt: null,
    Icon: Eye,
    eager: false,
  },
  {
    num: "13",
    name: "Mole Removal",
    desc: "Safe surgical or laser mole elimination.",
    img: null,
    alt: null,
    Icon: XCircle,
    eager: false,
  },
  {
    num: "14",
    name: "Skintag Removal",
    desc: "Quick, clean removal with minimal downtime.",
    img: null,
    alt: null,
    Icon: Scissors,
    eager: false,
  },
  {
    num: "15",
    name: "Scar Revision",
    desc: "Improving the appearance of scars.",
    img: null,
    alt: null,
    Icon: Wand2,
    eager: false,
  },
  {
    num: "16",
    name: "Hair Transplantation",
    desc: "Permanent natural hair restoration.",
    img: null,
    alt: null,
    Icon: Leaf,
    eager: false,
  },
  {
    num: "17",
    name: "Laser Vaginal Rejuvenation",
    desc: "Advanced intimate wellness treatment.",
    img: null,
    alt: null,
    Icon: ShieldCheck,
    eager: false,
  },
];

function ServiceCard({ service }: { service: ServiceItem }) {
  const { Icon } = service;
  const hasImage = service.img !== null;

  return (
    <a
      href={WA}
      target="_blank"
      rel="noopener noreferrer"
      className={`svc-card${hasImage ? " svc-card--image" : " svc-card--placeholder"}`}
      aria-label={`${service.name} — Book this treatment via WhatsApp`}
    >
      {hasImage ? (
        <>
          <img
            src={service.img!}
            alt={service.alt!}
            className="svc-img"
            width={400}
            height={533}
            loading={service.eager ? "eager" : "lazy"}
            fetchPriority={service.eager ? "high" : undefined}
          />
          <div className="svc-overlay" aria-hidden="true" />
        </>
      ) : (
        <div className="svc-placeholder-bg" aria-hidden="true">
          {Icon && <Icon size={32} />}
          <span className="svc-placeholder-text">Image coming soon</span>
        </div>
      )}

      <div className="svc-content">
        <span className="svc-num">{service.num}</span>
        <h3 className="svc-name">{service.name}</h3>
        <p className="svc-desc">{service.desc}</p>
        <span className="svc-btn">Book this treatment →</span>
      </div>
    </a>
  );
}

const STYLES = `
.svc-page {
  background-color: var(--color-bg);
  min-height: 100vh;
}

/* ── Heading ── */
.svc-header {
  max-width: 1200px;
  margin: 0 auto;
  padding: 56px 24px 36px;
  box-sizing: border-box;
}
.svc-h1 {
  font-family: var(--font-heading);
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.15;
  color: var(--color-heading);
  margin: 0 0 16px;
}
.svc-intro {
  font-family: var(--font-body);
  font-size: 16px;
  color: var(--color-body);
  line-height: 1.7;
  margin: 0;
  max-width: 560px;
}

/* ── Grid ── */
.svc-grid-wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px 64px;
  box-sizing: border-box;
}
.svc-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

/* ── Card shell ── */
.svc-card {
  display: block;
  position: relative;
  aspect-ratio: 4 / 3;
  border-radius: var(--radius-lg);
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;
  touch-action: manipulation;
}
.svc-card:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 3px;
}

/* ── Image card ── */
.svc-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  display: block;
}
.svc-card--image:hover .svc-img {
  transform: scale(1.04);
}
.svc-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(28,24,18,0.08) 0%, rgba(28,24,18,0.72) 100%);
  pointer-events: none;
}
/* Extra darkening layer on hover */
.svc-card--image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(28,24,18,0.10) 0%, rgba(28,24,18,0.16) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}
.svc-card--image:hover::after {
  opacity: 1;
}

/* ── Placeholder card ── */
.svc-card--placeholder {
  background-color: var(--color-bg-alt);
  border: 1px solid var(--color-border);
}
.svc-placeholder-bg {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 28%;
  gap: 10px;
  color: var(--color-accent);
  opacity: 0.6;
}
.svc-placeholder-text {
  font-family: var(--font-body);
  font-size: 13px;
  font-style: italic;
  color: var(--color-body);
  opacity: 0.7;
}

/* ── Card content (both types) ── */
.svc-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 1;
}
.svc-num {
  font-family: var(--font-body);
  font-size: 12px;
  letter-spacing: 0.08em;
  margin-bottom: 4px;
  display: block;
}
.svc-card--image .svc-num  { color: rgba(255,255,255,0.50); }
.svc-card--placeholder .svc-num { color: var(--color-accent); opacity: 0.6; }

.svc-name {
  font-family: var(--font-heading);
  font-size: 22px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 6px;
}
.svc-card--image .svc-name { color: #FAF8F5; }
.svc-card--placeholder .svc-name { color: var(--color-heading); }

.svc-desc {
  font-family: var(--font-body);
  font-size: 13px;
  line-height: 1.6;
  margin: 0 0 16px;
}
.svc-card--image .svc-desc { color: rgba(250,248,245,0.75); }
.svc-card--placeholder .svc-desc { color: var(--color-body); }

.svc-btn {
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  background: var(--color-accent);
  color: #ffffff;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: var(--radius-full);
  white-space: nowrap;
  transition: background 0.2s ease;
  min-height: 44px;
}
.svc-card:hover .svc-btn {
  background: var(--color-accent-dark);
}

/* ── 2-col at 640px — cards become narrow enough for portrait ratio ── */
@media (min-width: 640px) {
  .svc-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
  .svc-card { aspect-ratio: 3 / 4; }
}

/* ── Tablet 768px+ ── */
@media (min-width: 768px) {
  .svc-header { padding: 64px 40px 40px; }
  .svc-grid-wrap { padding: 0 40px 80px; }
}

/* ── Desktop 1024px+ ── */
@media (min-width: 1024px) {
  .svc-header { padding: 80px 80px 48px; }
  .svc-grid-wrap { padding: 0 80px 100px; }
  .svc-grid { grid-template-columns: repeat(4, 1fr); gap: 16px; }
}

/* ── prefers-reduced-motion ── */
@media (prefers-reduced-motion: reduce) {
  .svc-img { transition: none !important; }
  .svc-card--image::after { transition: none !important; }
  .svc-btn { transition: none !important; }
}
`;

export default function ServicesPage() {
  return (
    <>
      <style>{STYLES}</style>

      <div className="svc-page">
        <div className="svc-header">
          <h1 className="svc-h1">Our Services</h1>
          <p className="svc-intro">
            Seventeen advanced procedures, delivered by medically trained
            experts. Book any treatment directly via WhatsApp.
          </p>
        </div>

        <div className="svc-grid-wrap">
          <div className="svc-grid">
            {SERVICES.map((svc) => (
              <ServiceCard key={svc.num} service={svc} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
