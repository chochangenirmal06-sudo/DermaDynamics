"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const IMAGES = [
  { src: "/brand_assets/gallery1.jpg", w: 1388, h: 1620, alt: "Skin transformation result 1" },
  { src: "/brand_assets/gallery2.jpg", w: 1376, h: 1530, alt: "Skin transformation result 2" },
  { src: "/brand_assets/gallery3.jpg", w: 974,  h: 1644, alt: "Skin transformation result 3" },
  { src: "/brand_assets/gallery4.jpg", w: 954,  h: 1272, alt: "Skin transformation result 4" },
  { src: "/brand_assets/gallery5.jpg", w: 765,  h: 1020, alt: "Skin transformation result 5" },
  { src: "/brand_assets/gallery6.jpg", w: 730,  h: 1242, alt: "Skin transformation result 6" },
  { src: "/brand_assets/gallery7.jpg", w: 1326, h: 1068, alt: "Skin transformation result 7" },
];

const STYLES = `
.rg-section {
  background: #0f0b04;
  overflow: hidden;
}

.rg-wave {
  display: block;
  line-height: 0;
  font-size: 0;
}

.rg-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(20px, 5vw, 60px) clamp(56px, 7vw, 96px);
}

/* Header */
.rg-header {
  text-align: center;
  margin-bottom: clamp(40px, 5vw, 64px);
}

.rg-eyebrow {
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
.rg-eyebrow::before,
.rg-eyebrow::after {
  content: "";
  display: block;
  width: 32px;
  height: 1px;
  background: var(--color-accent);
  opacity: 0.5;
}

.rg-heading {
  font-family: var(--font-heading);
  font-size: clamp(30px, 4vw, 52px);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1.08;
  color: #fff;
  margin: 0 0 16px;
}
.rg-heading em {
  font-style: italic;
  color: var(--color-accent);
}

.rg-subhead {
  font-family: var(--font-body);
  font-size: 15px;
  color: rgba(255,255,255,0.55);
  line-height: 1.75;
  max-width: 520px;
  margin: 0 auto;
}

/* Masonry grid — explicit 3 flex columns for balanced heights */
.rg-grid {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.rg-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

@media (max-width: 900px) {
  .rg-grid { flex-wrap: wrap; }
  .rg-col { flex: 1 1 calc(50% - 7px); }
  .rg-col:last-child { flex: 1 1 100%; flex-direction: row; flex-wrap: wrap; }
  .rg-col:last-child .rg-tile { flex: 1 1 calc(50% - 7px); }
}

@media (max-width: 540px) {
  .rg-col, .rg-col:last-child { flex: 1 1 100%; flex-direction: column; }
  .rg-col:last-child .rg-tile { flex: 1 1 100%; }
}

/* Each image tile */
.rg-tile {
  margin-bottom: 0;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(184,145,42,0.18);
  box-shadow:
    0 2px 8px rgba(0,0,0,0.35),
    0 12px 32px rgba(0,0,0,0.30);
  position: relative;
  cursor: default;
  transition: box-shadow 0.4s ease, border-color 0.4s ease;
}
.rg-tile:hover {
  border-color: rgba(184,145,42,0.55);
  box-shadow:
    0 4px 16px rgba(0,0,0,0.45),
    0 24px 56px rgba(0,0,0,0.40),
    0 0 0 1px rgba(184,145,42,0.3);
}

.rg-tile img {
  display: block;
  width: 100%;
  height: auto;
}

/* Subtle overlay that fades in on hover */
.rg-tile::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 14px;
  background: linear-gradient(
    to bottom,
    transparent 60%,
    rgba(15,11,4,0.55) 100%
  );
  opacity: 0;
  transition: opacity 0.35s ease;
  pointer-events: none;
}
.rg-tile:hover::after {
  opacity: 1;
}

/* Gold accent bottom-bar on hover */
.rg-tile-bar {
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
.rg-tile:hover .rg-tile-bar {
  transform: scaleX(1);
}

/* View More button */
.rg-view-more-wrap {
  text-align: center;
  margin-top: clamp(36px, 5vw, 56px);
}

.rg-view-more {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 36px;
  border-radius: 4px;
  border: 1.5px solid rgba(184,145,42,0.6);
  background: transparent;
  color: var(--color-accent);
  font-family: var(--font-body);
  font-size: 13.5px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-decoration: none;
  transition: background-color 0.22s ease, border-color 0.22s ease, color 0.22s ease, transform 0.22s ease;
}
.rg-view-more:hover {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: #fff;
  transform: translateY(-1px);
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .rg-tile { transition: none !important; }
  .rg-tile:hover::after { opacity: 1; }
  .rg-tile-bar { transition: none !important; transform: scaleX(1); }
  .rg-view-more { transition: none !important; }
}
`;

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function ResultsGallery() {
  const reduce = useReducedMotion();
  const sa = reduce !== true;

  return (
    <section aria-labelledby="rg-heading" className="rg-section">
      <style>{STYLES}</style>

      {/* Top wave: cream → dark */}
      <div className="rg-wave" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "80px" }}
        >
          <path d="M0,0 L1440,0 C1100,80 340,80 0,0 Z" fill="var(--color-bg)" />
        </svg>
      </div>

      <div className="rg-inner">
        {/* Header */}
        <motion.div
          className="rg-header"
          {...(sa ? {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.3 },
            transition: { duration: 0.6, ease: EASE },
          } : {})}
        >
          <p className="rg-eyebrow">Real Results</p>
          <h2 id="rg-heading" className="rg-heading">
            Transformations That<br />
            <em>Speak for Themselves</em>
          </h2>
          <p className="rg-subhead">
            Every photo is a real patient. No filters, no retouching — just
            medically-backed treatments delivering visible results.
          </p>
        </motion.div>

        {/* Masonry grid — columns balanced by total pixel height */}
        {/* Col1: gallery3(tall)+gallery5 ~1147px | Col2: gallery6(tall)+gallery4 ~1152px | Col3: gallery7(short)+gallery1+gallery2 ~1171px */}
        <div className="rg-grid">
          {[
            [IMAGES[2], IMAGES[4]],
            [IMAGES[5], IMAGES[3]],
            [IMAGES[6], IMAGES[0], IMAGES[1]],
          ].map((col, ci) => (
            <div key={ci} className="rg-col">
              {col.map(({ src, w, h, alt }, ti) => (
                <motion.div
                  key={src}
                  className="rg-tile"
                  {...(sa ? {
                    initial: { opacity: 0, y: 28 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, amount: 0.08 },
                    transition: { duration: 0.55, ease: EASE, delay: ci * 0.1 + ti * 0.05 },
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
                  <span className="rg-tile-bar" aria-hidden="true" />
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          className="rg-view-more-wrap"
          {...(sa ? {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.5 },
            transition: { duration: 0.5, ease: EASE, delay: 0.15 },
          } : {})}
        >
          <Link href="/gallery" className="rg-view-more">
            View Full Gallery →
          </Link>
        </motion.div>
      </div>

      {/* Bottom wave: dark → cream */}
      <div className="rg-wave" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "80px" }}
        >
          <path d="M0,80 L1440,80 C1100,0 340,0 0,80 Z" fill="var(--color-bg)" />
        </svg>
      </div>
    </section>
  );
}
