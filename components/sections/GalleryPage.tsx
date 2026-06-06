"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CONTACT_INFO } from "@/lib/constants";

const ALL_IMAGES = [
  { src: "/brand_assets/gallery1.jpg",  w: 1388, h: 1620, alt: "Skin transformation result" },
  { src: "/brand_assets/gallery2.jpg",  w: 1376, h: 1530, alt: "Skin transformation result" },
  { src: "/brand_assets/gallery3.jpg",  w: 974,  h: 1644, alt: "Skin transformation result" },
  { src: "/brand_assets/gallery4.jpg",  w: 954,  h: 1272, alt: "Skin transformation result" },
  { src: "/brand_assets/gallery5.jpg",  w: 1198, h: 1536, alt: "Skin transformation result" },
  { src: "/brand_assets/gallery6.jpg",  w: 730,  h: 1242, alt: "Skin transformation result" },
  { src: "/brand_assets/gallery7.jpg",  w: 1326, h: 1068, alt: "Skin transformation result" },
  { src: "/brand_assets/gallery8.jpg",  w: 1222, h: 1266, alt: "Skin transformation result" },
  { src: "/brand_assets/gallery9.jpg",  w: 1236, h: 1348, alt: "Skin transformation result" },
  { src: "/brand_assets/gallery10.jpg", w: 942,  h: 1006, alt: "Skin transformation result" },
  { src: "/brand_assets/gallery11.jpg", w: 974,  h: 1456, alt: "Skin transformation result" },
];

// Column distribution balanced by total rendered pixel height at ~380px column width:
// Col 1 (3 images): gallery3+gallery6+gallery11 → ~1883px
// Col 2 (4 images): gallery4+gallery9+gallery2+gallery10 → ~1791px
// Col 3 (4 images): gallery5+gallery1+gallery8+gallery7 → ~1671px
const COLS = [
  [ALL_IMAGES[2], ALL_IMAGES[5], ALL_IMAGES[10]],
  [ALL_IMAGES[3], ALL_IMAGES[8], ALL_IMAGES[1], ALL_IMAGES[9]],
  [ALL_IMAGES[4], ALL_IMAGES[0], ALL_IMAGES[7], ALL_IMAGES[6]],
];

const STYLES = `
.gp-page {
  background: #0f0b04;
  min-height: 100vh;
}

/* ── Hero header ─────────────────────────────── */
.gp-hero {
  padding: clamp(56px, 8vw, 104px) clamp(20px, 5vw, 60px) clamp(48px, 6vw, 80px);
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.gp-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-body);
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 18px;
}
.gp-eyebrow::before,
.gp-eyebrow::after {
  content: "";
  display: block;
  width: 40px;
  height: 1px;
  background: var(--color-accent);
  opacity: 0.45;
}

.gp-heading {
  font-family: var(--font-heading);
  font-size: clamp(36px, 5.5vw, 72px);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1.05;
  color: #fff;
  margin: 0 0 20px;
}
.gp-heading em {
  font-style: italic;
  color: var(--color-accent);
}

.gp-subhead {
  font-family: var(--font-body);
  font-size: 15px;
  color: rgba(255,255,255,0.52);
  line-height: 1.8;
  max-width: 560px;
  margin: 0 auto 0;
}

/* Ornamental rule below header */
.gp-rule {
  display: flex;
  align-items: center;
  gap: 14px;
  max-width: 320px;
  margin: 32px auto 0;
}
.gp-rule-line {
  flex: 1;
  height: 1px;
  background: var(--color-accent);
  opacity: 0.28;
}
.gp-rule-diamond {
  width: 7px;
  height: 7px;
  background: var(--color-accent);
  transform: rotate(45deg);
  opacity: 0.65;
  flex-shrink: 0;
}

/* ── Masonry grid ────────────────────────────── */
.gp-grid-wrap {
  padding: 0 clamp(16px, 4vw, 52px) clamp(64px, 8vw, 112px);
  max-width: 1280px;
  margin: 0 auto;
}

.gp-grid {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.gp-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (max-width: 900px) {
  .gp-grid {
    gap: 12px;
  }
  .gp-col {
    gap: 12px;
  }
}

@media (max-width: 640px) {
  .gp-grid {
    flex-wrap: wrap;
    gap: 10px;
  }
  .gp-col {
    flex: 1 1 calc(50% - 5px);
    gap: 10px;
  }
  /* On very small screens collapse to 1 col */
  @media (max-width: 420px) {
    .gp-col { flex: 1 1 100%; }
  }
}

/* ── Tile ────────────────────────────────────── */
.gp-tile {
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(184,145,42,0.15);
  box-shadow:
    0 2px 8px rgba(0,0,0,0.40),
    0 12px 36px rgba(0,0,0,0.32);
  position: relative;
  cursor: default;
  transition: box-shadow 0.4s ease, border-color 0.4s ease, transform 0.4s ease;
}
.gp-tile:hover {
  border-color: rgba(184,145,42,0.55);
  transform: translateY(-3px);
  box-shadow:
    0 6px 20px rgba(0,0,0,0.50),
    0 28px 64px rgba(0,0,0,0.38),
    0 0 0 1px rgba(184,145,42,0.28);
}

.gp-tile img {
  display: block;
  width: 100%;
  height: auto;
}

/* Gradient overlay on hover */
.gp-tile::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 14px;
  background: linear-gradient(
    to bottom,
    transparent 55%,
    rgba(15,11,4,0.60) 100%
  );
  opacity: 0;
  transition: opacity 0.35s ease;
  pointer-events: none;
}
.gp-tile:hover::after {
  opacity: 1;
}

/* Gold bar */
.gp-tile-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--color-accent-dark), var(--color-accent), var(--color-accent-dark));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 3;
}
.gp-tile:hover .gp-tile-bar {
  transform: scaleX(1);
}

/* ── CTA strip ───────────────────────────────── */
.gp-cta-strip {
  text-align: center;
  padding: clamp(48px, 6vw, 80px) clamp(20px, 5vw, 60px) clamp(72px, 9vw, 120px);
  border-top: 1px solid rgba(184,145,42,0.14);
}

.gp-cta-label {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.17em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 14px;
}

.gp-cta-heading {
  font-family: var(--font-heading);
  font-size: clamp(26px, 3.5vw, 44px);
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin: 0 0 12px;
}
.gp-cta-heading em {
  font-style: italic;
  color: var(--color-accent);
}

.gp-cta-sub {
  font-family: var(--font-body);
  font-size: 14.5px;
  color: rgba(255,255,255,0.5);
  line-height: 1.75;
  margin: 0 0 32px;
}

.gp-cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 36px;
  border-radius: 4px;
  background: var(--color-accent);
  color: #fff;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-decoration: none;
  transition: background-color 0.2s ease, transform 0.2s ease;
  cursor: pointer;
}
.gp-cta-btn:hover {
  background: var(--color-accent-dark);
  transform: translateY(-1px);
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .gp-tile { transition: none !important; transform: none !important; }
  .gp-tile:hover::after { opacity: 1; }
  .gp-tile-bar { transition: none !important; transform: scaleX(1); }
  .gp-cta-btn { transition: none !important; }
}
`;

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function GalleryPage() {
  const reduce = useReducedMotion();
  const sa = reduce !== true;

  return (
    <div className="gp-page">
      <style>{STYLES}</style>

      {/* Hero header */}
      <motion.div
        className="gp-hero"
        {...(sa ? {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.65, ease: EASE },
        } : {})}
      >
        <p className="gp-eyebrow">From Our Clinic</p>
        <h1 className="gp-heading">
          Before &amp; After<br /><em>Images</em>
        </h1>
        <p className="gp-subhead">
          No filters, no touch-ups. Every photo here is from a real patient who walked into
          our clinic and trusted us with their skin.
        </p>
        <div className="gp-rule" aria-hidden="true">
          <span className="gp-rule-line" />
          <span className="gp-rule-diamond" />
          <span className="gp-rule-line" />
        </div>
      </motion.div>

      {/* Masonry grid — 3 explicit columns */}
      <div className="gp-grid-wrap">
        <div className="gp-grid">
          {COLS.map((col, ci) => (
            <div key={ci} className="gp-col">
              {col.map(({ src, w, h, alt }, ti) => (
                <motion.div
                  key={src}
                  className="gp-tile"
                  {...(sa ? {
                    initial: { opacity: 0, y: 32 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, amount: 0.06 },
                    transition: {
                      duration: 0.6,
                      ease: EASE,
                      delay: ci * 0.08 + ti * 0.06,
                    },
                  } : {})}
                >
                  <Image
                    src={src}
                    alt={alt}
                    width={w}
                    height={h}
                    unoptimized
                    style={{ display: "block", width: "100%", height: "auto" }}
                  />
                  <span className="gp-tile-bar" aria-hidden="true" />
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* CTA strip */}
      <motion.div
        className="gp-cta-strip"
        {...(sa ? {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.4 },
          transition: { duration: 0.6, ease: EASE },
        } : {})}
      >
        <p className="gp-cta-label">Ready for Your Transformation?</p>
        <h2 className="gp-cta-heading">
          Your Results Could Be<br /><em>Next</em>
        </h2>
        <p className="gp-cta-sub">
          Book a consultation with our doctors and take the first step toward visible, lasting change.
        </p>
        <a
          href={CONTACT_INFO.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="gp-cta-btn"
        >
          Book a Consultation →
        </a>
      </motion.div>
    </div>
  );
}
