"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Star } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const BULLETS = [
  "Medically trained doctors with internationally recognised qualifications",
  "Advanced Korean skincare technology & evidence-based techniques",
  "Trusted by 500+ satisfied patients across Nepal",
];

const STYLES = `
.ha-section {
  background: var(--color-accent);
  padding: clamp(72px, 10vw, 112px) 0;
  overflow: hidden;
}
.ha-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(20px, 5vw, 48px);
  display: grid;
  grid-template-columns: 1fr;
  gap: 56px;
  align-items: center;
}
@media (min-width: 900px) {
  .ha-container {
    grid-template-columns: 1fr 1fr;
    gap: clamp(40px, 6vw, 80px);
  }
}

/* ── Image stack ── */
.ha-images {
  position: relative;
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
  aspect-ratio: 4/4.2;
}
.ha-img-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 78%;
  aspect-ratio: 3/4;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(184,145,42,0.20);
  box-shadow: 0 24px 64px rgba(0,0,0,0.40);
  z-index: 1;
}
.ha-img-bottom {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 65%;
  aspect-ratio: 4/3;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(184,145,42,0.25);
  box-shadow: 0 16px 48px rgba(0,0,0,0.45);
  z-index: 2;
}

/* ── Reviews badge ── */
.ha-badge {
  position: absolute;
  top: 12px;
  right: 0;
  z-index: 3;
  background: #1a1306;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  box-shadow: 0 8px 28px rgba(0,0,0,0.40);
  min-width: 110px;
}
.ha-badge-number {
  font-family: var(--font-heading);
  font-size: 28px;
  font-weight: 700;
  color: var(--color-accent);
  line-height: 1;
  letter-spacing: -0.03em;
}
.ha-badge-stars {
  display: flex;
  gap: 2px;
}
.ha-badge-label {
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: rgba(255,255,255,0.70);
  text-align: center;
  text-transform: uppercase;
}

/* ── Right content ── */
.ha-label {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(0,0,0,0.55);
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}
.ha-label::before {
  content: "";
  display: block;
  width: 20px;
  height: 1px;
  background: rgba(0,0,0,0.40);
}
.ha-heading {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: clamp(30px, 3.8vw, 44px);
  letter-spacing: -0.03em;
  color: #1a1306;
  line-height: 1.15;
  margin: 0 0 20px;
}
.ha-heading em {
  font-style: italic;
  color: rgba(0,0,0,0.75);
}
.ha-body {
  font-family: var(--font-body);
  font-size: 15px;
  color: rgba(0,0,0,0.68);
  line-height: 1.75;
  margin: 0 0 28px;
}
.ha-bullets {
  list-style: none;
  margin: 0 0 36px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.ha-bullet {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: var(--font-body);
  font-size: 14px;
  color: rgba(0,0,0,0.68);
  line-height: 1.5;
}
.ha-check {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(0,0,0,0.12);
  border: 1px solid rgba(0,0,0,0.20);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1px;
}
.ha-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: #1a1306;
  color: #fff;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease;
}
.ha-cta:hover {
  background: #2e2009;
  transform: translateY(-1px);
}
`;

export default function HomeAbout() {
  const reduce = useReducedMotion();
  const sa = reduce !== true;

  const fadeUp = (delay = 0) =>
    sa
      ? { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.6, ease: "easeOut" as const, delay } }
      : {};

  return (
    <section className="ha-section" aria-labelledby="ha-heading">
      <style>{STYLES}</style>
      <div className="ha-container">

        {/* ── Image stack ── */}
        <motion.div className="ha-images" {...fadeUp(0)}>
          <div className="ha-img-top">
            <Image
              src="/brand_assets/aboutus1.png"
              alt="Derma Dynamics treatment in progress"
              fill
              unoptimized
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
          <div className="ha-img-bottom">
            <Image
              src="/brand_assets/aboutus2.png"
              alt="Derma Dynamics clinic and team"
              fill
              unoptimized
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          {/* Floating reviews badge */}
          <div className="ha-badge" aria-label="542 five-star Google reviews">
            <span className="ha-badge-number">542+</span>
            <div className="ha-badge-stars" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={10} fill="var(--color-accent)" color="var(--color-accent)" />
              ))}
            </div>
            <span className="ha-badge-label">Google Reviews</span>
          </div>
        </motion.div>

        {/* ── Right content ── */}
        <div>
          <motion.div {...fadeUp(0.1)}>
            <p className="ha-label">About Us</p>
            <h2 id="ha-heading" className="ha-heading">
              Nepal&apos;s Premier<br />
              <em>Aesthetic Clinic</em>
            </h2>
            <p className="ha-body">
              Derma Dynamics offers unparalleled skin, hair, and laser treatments
              with real, medically-backed results. Our mission is excellent patient
              care in a warm, welcoming environment — every treatment customised
              to your unique needs using the latest Korean skincare technology.
            </p>
          </motion.div>

          <motion.ul className="ha-bullets" aria-label="Why choose us" {...fadeUp(0.2)}>
            {BULLETS.map((b) => (
              <li key={b} className="ha-bullet">
                <span className="ha-check" aria-hidden="true">
                  <Check size={11} color="rgba(0,0,0,0.65)" strokeWidth={2.5} />
                </span>
                {b}
              </li>
            ))}
          </motion.ul>

          <motion.div {...fadeUp(0.3)}>
            <Link href="/about" className="ha-cta">
              View more details →
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
