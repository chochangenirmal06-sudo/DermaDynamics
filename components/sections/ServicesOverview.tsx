"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  {
    number: "01",
    name: "Botox",
    image: "/brand_assets/botox.png",
    description:
      "Precision injectables that smooth fine lines and restore a naturally rested, youthful appearance.",
  },
  {
    number: "02",
    name: "Lip Filler",
    image: "/brand_assets/lipfiller.png",
    description:
      "Enhance lip volume and definition with hyaluronic acid for natural, beautiful results.",
  },
  {
    number: "03",
    name: "Face Lifting Thread",
    image: "/brand_assets/Face Lifting.png",
    description:
      "Non-surgical lift using dissolvable threads for immediate skin tightening and contouring.",
  },
  {
    number: "04",
    name: "Laser Hair Removal",
    image: "/brand_assets/laserhair.png",
    description:
      "Permanent hair reduction using advanced laser technology. Smooth skin, lasting results.",
  },
  {
    number: "05",
    name: "Tattoo Removal",
    image: "/brand_assets/tatto.png",
    description:
      "Safe, precise laser removal with minimal downtime and maximum effectiveness.",
  },
  {
    number: "06",
    name: "Skin Peeling",
    image: "/brand_assets/skinpeeling.png",
    description:
      "Medical-grade peels that resurface skin for a visibly brighter, smoother complexion.",
  },
  {
    number: "07",
    name: "PRP Hair Treatment",
    image: "/brand_assets/prphair.png",
    description:
      "Platelet-rich plasma therapy to stimulate your scalp and encourage natural hair regrowth.",
  },
  {
    number: "08",
    name: "MicroNeedling PRP",
    image: "/brand_assets/microneedling.png",
    description:
      "Combined micro-needling and PRP for deep skin rejuvenation and collagen stimulation.",
  },
];

export default function ServicesOverview() {
  const reduce = useReducedMotion();
  const shouldAnimate = reduce !== true;

  return (
    <section className="so-section" aria-labelledby="so-heading">
      <style>{`
        .so-section {
          background-color: var(--color-bg);
          padding: 64px 0;
        }
        @media (min-width: 1024px) {
          .so-section { padding: 100px 0; }
        }

        .so-container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 24px;
          box-sizing: border-box;
        }
        @media (min-width: 768px) {
          .so-container { padding: 0 32px; }
        }
        @media (min-width: 1024px) {
          .so-container { padding: 0 40px; }
        }

        /* ── Section header ── */
        .so-header { margin-bottom: 56px; }
        .so-label {
          font-family: var(--font-body);
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-accent);
          display: block;
          margin-bottom: 12px;
        }
        .so-heading {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: clamp(36px, 4vw, 52px);
          letter-spacing: -0.03em;
          color: var(--color-heading);
          line-height: 1.15;
          margin: 0 0 12px;
        }
        .so-subline {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 16px;
          color: var(--color-body);
          line-height: 1.6;
          margin: 0;
        }

        /* ── Grid ── */
        .so-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        @media (min-width: 900px) {
          .so-grid { grid-template-columns: repeat(3, 1fr); gap: 22px; }
        }
        @media (min-width: 1024px) {
          .so-grid { grid-template-columns: repeat(4, 1fr); gap: 24px; }
        }

        /* ── Card shell ── */
        .so-card {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          cursor: pointer;
          aspect-ratio: 4 / 5;
          box-shadow: var(--shadow-card);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          -webkit-tap-highlight-color: transparent;
        }
        .so-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-float);
        }
        .so-card:focus-visible {
          outline: 2px solid var(--color-accent);
          outline-offset: 3px;
        }

        /* Image zoom wrapper */
        .so-img-wrap {
          position: absolute;
          inset: 0;
          transition: transform 0.5s ease;
        }
        .so-card:hover .so-img-wrap { transform: scale(1.06); }

        /* Always-on gradient overlay */
        .so-gradient {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            to bottom,
            rgba(28,24,18,0.00) 0%,
            rgba(28,24,18,0.15) 40%,
            rgba(28,24,18,0.75) 75%,
            rgba(28,24,18,0.92) 100%
          );
          pointer-events: none;
        }

        /* Hover darkener — layered on top of gradient */
        .so-card::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(
            to bottom,
            transparent 50%,
            rgba(28,24,18,0.14) 100%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .so-card:hover::after { opacity: 1; }

        /* Card content */
        .so-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 3;
          padding: 24px;
        }
        .so-num {
          display: block;
          font-family: var(--font-body);
          font-size: 11px;
          letter-spacing: 0.1em;
          color: rgba(250,248,245,0.55);
          margin-bottom: 8px;
        }
        .so-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 22px;
          color: var(--color-bg);
          line-height: 1.2;
          margin: 0 0 8px;
        }
        .so-desc {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 13px;
          color: rgba(250,248,245,0.72);
          line-height: 1.6;
          margin: 0 0 16px;
        }
        .so-book-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--color-accent);
          color: #ffffff;
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 12px;
          letter-spacing: 0.04em;
          padding: 8px 16px;
          border-radius: var(--radius-full);
          text-decoration: none;
          white-space: nowrap;
          touch-action: manipulation;
          transition: background-color 0.2s ease;
        }
        .so-book-btn:hover { background: var(--color-accent-dark); }
        .so-book-btn:focus-visible {
          outline: 2px solid #ffffff;
          outline-offset: 2px;
        }

        /* ── Mobile card content scaling ── */
        @media (max-width: 899px) {
          .so-content { padding: 12px; }
          .so-num { font-size: 10px; margin-bottom: 4px; }
          .so-name { font-size: 15px; margin-bottom: 4px; }
          .so-desc { font-size: 11px; line-height: 1.5; margin-bottom: 10px; }
          .so-book-btn { font-size: 10px; padding: 6px 10px; }
        }

        /* ── Section footer ── */
        .so-footer {
          text-align: center;
          margin-top: 64px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .so-footer-text {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 15px;
          color: var(--color-body);
          margin: 0;
        }
        .so-footer-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 13px 26px;
          background: var(--color-accent);
          color: #ffffff;
          border-radius: 8px;
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 14px;
          text-decoration: none;
          min-height: 44px;
          cursor: pointer;
          box-shadow: var(--shadow-gold);
          transition: background-color 0.2s ease, transform 0.2s ease;
        }
        .so-footer-btn:hover {
          background: var(--color-accent-dark);
          transform: translateY(-1px);
        }
        .so-footer-btn:focus-visible {
          outline: 2px solid var(--color-accent);
          outline-offset: 3px;
        }

        /* ── Reduced motion ── */
        @media (prefers-reduced-motion: reduce) {
          .so-card,
          .so-img-wrap,
          .so-card::after,
          .so-book-btn,
          .so-footer-btn { transition: none !important; }
        }
      `}</style>

      <div className="so-container">

        {/* ── Section header ── */}
        <motion.div
          className="so-header"
          initial={shouldAnimate ? { opacity: 0, y: 32 } : undefined}
          whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true, margin: "-80px" }}
          transition={shouldAnimate ? { duration: 0.6, ease: "easeOut" } : undefined}
        >
          <span className="so-label">OUR TREATMENTS</span>
          <h2 id="so-heading" className="so-heading">Our Signature Treatments</h2>
          <p className="so-subline">Science-backed. Expertly delivered.</p>
        </motion.div>

        {/* ── 3×3 card grid ── */}
        <div className="so-grid" role="list">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.name}
              role="listitem"
              initial={shouldAnimate ? { opacity: 0, y: 24 } : undefined}
              whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true, margin: "-60px" }}
              transition={
                shouldAnimate
                  ? { duration: 0.5, ease: "easeOut", delay: i * 0.07 }
                  : undefined
              }
            >
              <div className="so-card">
                {/* Image */}
                <div className="so-img-wrap">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    unoptimized
                    loading="lazy"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                {/* Gradient overlay */}
                <div className="so-gradient" aria-hidden="true" />

                {/* Text content */}
                <div className="so-content">
                  <span className="so-num">{service.number}</span>
                  <h3 className="so-name">{service.name}</h3>
                  <p className="so-desc">{service.description}</p>
                  <a
                    href="https://wa.me/977061591803"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="so-book-btn"
                    aria-label={`Book ${service.name} via WhatsApp`}
                  >
                    Book this treatment →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Section footer ── */}
        <div className="so-footer">
          <p className="so-footer-text">Explore our full range of aesthetic treatments</p>
          <Link href="/services" className="so-footer-btn">
            View All Our Treatments →
          </Link>
        </div>

      </div>
    </section>
  );
}
