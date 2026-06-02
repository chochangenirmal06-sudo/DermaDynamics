"use client";

import { motion, useReducedMotion } from "framer-motion";

// ─── Data ─────────────────────────────────────────────────────────────────────

const FEATURED = {
  src: "/brand_assets/hydrafacial.png",
  label: "Hydrafacial",
  title: "Signature HydraFacial · Deep Glow",
  alt: "HydraFacial treatment procedure",
};

const RIGHT_ITEMS = [
  { src: "/brand_assets/botox.png",    label: "Botox & Fillers",      alt: "Botox injection procedure" },
  { src: "/brand_assets/laserhair.png", label: "Laser Hair Removal",  alt: "Laser hair removal treatment" },
];

const BOTTOM_ITEMS = [
  { src: "/brand_assets/microneedling.png", label: "Microneedling",     alt: "Microneedling procedure" },
  { src: "/brand_assets/skinpeeling.png",   label: "Skin Peeling",      alt: "Skin peeling treatment" },
  { src: "/brand_assets/lipfiller.png",     label: "Lip Filler",        alt: "Lip filler treatment" },
  { src: "/brand_assets/prphair.png",       label: "PRP Hair Therapy",  alt: "PRP hair therapy procedure" },
];

// ─── Styles ───────────────────────────────────────────────────────────────────

const STYLES = `
.gal-section {
  background: var(--color-bg-alt);
  padding: 100px 0;
}
@media (max-width: 767px) { .gal-section { padding: 64px 0; } }

.gal-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;
}
@media (min-width: 768px)  { .gal-container { padding: 0 40px; } }
@media (min-width: 1024px) { .gal-container { padding: 0 48px; } }

/* ── Heading ── */
.gal-heading {
  text-align: center;
  margin-bottom: 52px;
}
.gal-eyebrow {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 14px;
}
.gal-h2 {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: clamp(28px, 4vw, 44px);
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: var(--color-heading);
  margin: 0 0 12px;
}
.gal-sub {
  font-family: var(--font-heading);
  font-style: italic;
  font-weight: 400;
  font-size: clamp(15px, 1.8vw, 20px);
  color: var(--color-decorative);
  margin: 0;
}

/* ── Mosaic layout ── */
.gal-upper {
  display: grid;
  grid-template-columns: 2.1fr 1fr;
  gap: 10px;
  height: 520px;
}
.gal-right {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
}
.gal-lower {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 10px;
}
.gal-lower .gal-card { height: 210px; }

/* ── Image card ── */
.gal-card {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  cursor: default;
  background: var(--color-border);
}
.gal-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
}
.gal-card:hover img { transform: scale(1.04); }

.gal-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 30%, rgba(10,8,5,0.82) 100%);
  pointer-events: none;
}
.gal-text {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
}
.gal-cat {
  display: block;
  font-family: var(--font-body);
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.62);
  margin-bottom: 5px;
}
.gal-title {
  font-family: var(--font-heading);
  font-size: clamp(16px, 1.6vw, 22px);
  font-weight: 600;
  color: #ffffff;
  letter-spacing: -0.02em;
  line-height: 1.25;
  margin: 0;
}

/* ── Responsive ── */
@media (max-width: 1023px) {
  .gal-upper { grid-template-columns: 1.5fr 1fr; height: 400px; }
  .gal-lower { grid-template-columns: repeat(2, 1fr); }
  .gal-lower .gal-card { height: 180px; }
}
@media (max-width: 639px) {
  .gal-upper { grid-template-columns: 1fr; height: auto; gap: 8px; }
  .gal-upper > .gal-card { height: 280px; }
  .gal-right { grid-template-rows: auto; grid-template-columns: 1fr 1fr; gap: 8px; }
  .gal-right .gal-card { height: 180px; }
  .gal-lower { grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 8px; }
  .gal-lower .gal-card { height: 150px; }
}

@media (prefers-reduced-motion: reduce) {
  .gal-card img { transition: none !important; }
}
`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function Gallery() {
  const sa = useReducedMotion() !== true;

  const fadeUp = (delay = 0) => {
    if (!sa) return {};
    return {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-60px" },
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const, delay },
    };
  };

  return (
    <section id="gallery" aria-labelledby="gal-h2" className="gal-section">
      <style>{STYLES}</style>

      <div className="gal-container">

        {/* Heading */}
        <motion.div className="gal-heading" {...fadeUp(0)}>
          <span className="gal-eyebrow">Real Results</span>
          <h2 id="gal-h2" className="gal-h2">
            Transformations That Speak<br />for Themselves
          </h2>
          <p className="gal-sub">
            Every result is real. Every patient, a story of renewed confidence.
          </p>
        </motion.div>

        {/* Upper mosaic */}
        <motion.div className="gal-upper" {...fadeUp(0.1)}>

          {/* Featured — large left card */}
          <div className="gal-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={FEATURED.src} alt={FEATURED.alt} loading="lazy" width={780} height={520} />
            <div className="gal-overlay" aria-hidden="true" />
            <div className="gal-text">
              <span className="gal-cat">{FEATURED.label}</span>
              <p className="gal-title">{FEATURED.title}</p>
            </div>
          </div>

          {/* Right column — two stacked */}
          <div className="gal-right">
            {RIGHT_ITEMS.map((item) => (
              <div key={item.label} className="gal-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.src} alt={item.alt} loading="lazy" width={380} height={255} />
                <div className="gal-overlay" aria-hidden="true" />
                <div className="gal-text">
                  <span className="gal-cat">{item.label}</span>
                </div>
              </div>
            ))}
          </div>

        </motion.div>

        {/* Lower row — four equal */}
        <motion.div className="gal-lower" {...fadeUp(0.18)}>
          {BOTTOM_ITEMS.map((item) => (
            <div key={item.label} className="gal-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.src} alt={item.alt} loading="lazy" width={270} height={210} />
              <div className="gal-overlay" aria-hidden="true" />
              <div className="gal-text">
                <span className="gal-cat">{item.label}</span>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
