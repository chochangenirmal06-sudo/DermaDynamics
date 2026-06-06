"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const FEATURES = [
  {
    num: "01",
    title: "We Actually Listen First",
    body: "Before anything else, we sit with you. Your concerns, goals, and skin history shape the entire plan.",
  },
  {
    num: "02",
    title: "Korean Technology in Nepal",
    body: "The same devices trusted by Seoul's top clinics, now available across our three clinics in Nepal.",
  },
  {
    num: "03",
    title: "Specialists, Not Generalists",
    body: "Every procedure performed by medically trained specialists. No rotating GPs, no guesswork.",
  },
  {
    num: "04",
    title: "Treatment Tailored to You",
    body: "One size never fits all. We build your plan around your skin, and we'll always recommend the best option.",
  },
] as const;

const STYLES = `
.wcu-section {
  background: linear-gradient(135deg, #7A5510 0%, #B8912A 50%, #8B6914 100%);
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}

.wcu-wave {
  display: block;
  line-height: 0;
  font-size: 0;
}

.wcu-wrap {
  max-width: 1180px;
  margin: 0 auto;
  padding: clamp(48px, 6vw, 80px) clamp(24px, 5vw, 80px);
  display: grid;
  grid-template-columns: 44fr 56fr;
  gap: clamp(48px, 6vw, 88px);
  align-items: center;
}

/* ── Left column ── */
.wcu-left {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.wcu-eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;
}
.wcu-eyebrow-line {
  width: 28px;
  height: 1.5px;
  background: rgba(255, 255, 255, 0.6);
  flex-shrink: 0;
}
.wcu-eyebrow-text {
  font-family: var(--font-body);
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.75);
}

.wcu-heading {
  font-family: var(--font-heading);
  font-size: clamp(28px, 3.2vw, 46px);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1.06;
  color: #ffffff;
  margin: 0;
}

.wcu-intro {
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 1.82;
  color: rgba(255, 255, 255, 0.88);
  margin: 0;
}

/* 3:2 landscape image — balanced against 2×2 card grid */
.wcu-img-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 2;
  border-radius: 18px;
  overflow: hidden;
  box-shadow:
    0 2px 4px rgba(0,0,0,0.15),
    0 10px 28px rgba(0,0,0,0.28),
    0 32px 72px rgba(0,0,0,0.32);
  border: 1px solid rgba(255, 255, 255, 0.22);
}
.wcu-img-frame::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 18px;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.1);
  z-index: 2;
  pointer-events: none;
}

/* ── Right column: scattered cards ── */
.wcu-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  padding: 24px 16px;
}

.wcu-card {
  background: rgba(18, 14, 6, 0.90);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 26px 20px;
  cursor: default;
  transition:
    transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.45s ease,
    border-color 0.45s ease;
  box-shadow:
    0 4px 14px rgba(0,0,0,0.35),
    0 14px 36px rgba(0,0,0,0.3);
  will-change: transform;
}

.wcu-card:nth-child(1) { transform: rotate(-6deg) translate(-10px, 6px); }
.wcu-card:nth-child(2) { transform: rotate(5deg) translate(10px, -10px); }
.wcu-card:nth-child(3) { transform: rotate(-4deg) translate(-8px, 10px); }
.wcu-card:nth-child(4) { transform: rotate(6deg) translate(8px, -6px); }

.wcu-card:hover {
  transform: rotate(0deg) translate(0, -10px) !important;
  border-color: rgba(255, 255, 255, 0.32);
  box-shadow:
    0 24px 56px rgba(0,0,0,0.45),
    0 0 0 1px rgba(255,255,255,0.18);
  position: relative;
  z-index: 10;
}

.wcu-card-num {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 18px;
  flex-shrink: 0;
}

.wcu-card-title {
  font-family: var(--font-heading);
  font-size: 15.5px;
  font-weight: 700;
  color: #F0E6CE;
  margin: 0 0 9px;
  line-height: 1.25;
  letter-spacing: -0.02em;
}

.wcu-card-body {
  font-family: var(--font-body);
  font-size: 13px;
  line-height: 1.74;
  color: rgba(200, 185, 150, 0.9);
  margin: 0;
}

/* ── Responsive ── */
@media (max-width: 1023px) {
  .wcu-wrap { gap: 40px; }
}

@media (max-width: 767px) {
  .wcu-wrap {
    grid-template-columns: 1fr;
    gap: 44px;
  }
  .wcu-cards {
    padding: 8px 0;
    gap: 16px;
  }
  .wcu-card:nth-child(1),
  .wcu-card:nth-child(2),
  .wcu-card:nth-child(3),
  .wcu-card:nth-child(4) {
    transform: none !important;
  }
}

@media (prefers-reduced-motion: reduce) {
  .wcu-card { transition: none !important; }
  .wcu-card:hover { transform: none !important; }
}
`;

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const, margin: "-40px" },
  transition: { duration: 0.6, ease: EASE, delay },
});

export default function KoreanTech() {
  const reduce = useReducedMotion();
  const sa = reduce !== true;

  return (
    <section aria-labelledby="wcu-heading" className="wcu-section">
      <style>{STYLES}</style>

      {/* Top wave: bg-color curves down into the gold section */}
      <div className="wcu-wave" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "100px" }}
        >
          <path d="M0,0 L1440,0 C1080,100 360,100 0,0 Z" fill="var(--color-bg)" />
        </svg>
      </div>

      <div className="wcu-wrap">
        {/* Left: text + square photo */}
        <div className="wcu-left">
          <motion.div className="wcu-eyebrow" {...(sa ? fadeUp(0) : {})}>
            <span className="wcu-eyebrow-line" aria-hidden="true" />
            <span className="wcu-eyebrow-text">Why Derma Dynamics</span>
          </motion.div>

          <motion.h2
            id="wcu-heading"
            className="wcu-heading"
            {...(sa ? fadeUp(0.07) : {})}
          >
            You Deserve More Than<br />a Generic Clinic
          </motion.h2>

          <motion.p className="wcu-intro" {...(sa ? fadeUp(0.14) : {})}>
            We&apos;re not a general practice that does skin on the side. Derma
            Dynamics exists for one thing: helping your skin thrive.
          </motion.p>

          <motion.div
            className="wcu-img-frame"
            {...(sa ? fadeUp(0.22) : {})}
          >
            <Image
              src="/brand_assets/whychooseus.png"
              alt="Dr. Uma Keyal and Dr. Anil, Derma Dynamics specialists"
              fill
              unoptimized
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 44vw, 42vw"
              style={{ objectFit: "cover", objectPosition: "center center" }}
              priority={false}
            />
          </motion.div>
        </div>

        {/* Right: scattered feature cards */}
        <div className="wcu-cards">
          {FEATURES.map(({ num, title, body }, i) => (
            <motion.div
              key={num}
              {...(sa ? {
                initial: { opacity: 0, y: 32 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, margin: "-20px" },
                transition: {
                  duration: 0.55,
                  ease: EASE,
                  delay: 0.08 + i * 0.1,
                },
              } : {})}
            >
              <div className="wcu-card">
                <div className="wcu-card-num" aria-hidden="true">{num}</div>
                <h3 className="wcu-card-title">{title}</h3>
                <p className="wcu-card-body">{body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom wave: bg-color scoops up from the gold section into testimonials */}
      <div className="wcu-wave" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "100px" }}
        >
          <path d="M0,100 L1440,100 C1080,0 360,0 0,100 Z" fill="var(--color-bg)" />
        </svg>
      </div>
    </section>
  );
}
