"use client";

import { useState, Fragment } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const STEPS = [
  {
    number: 1,
    tab: "Book",
    goldWord: "Book Your",
    darkWord: "Appointment",
    description:
      "Schedule your visit at Derma Dynamics in minutes. Choose your preferred date and treatment, and our team will confirm your slot right away.",
    bullets: [
      "We offer flexible appointment slots six days a week",
      "WhatsApp booking available for instant confirmation",
      "Receive a reminder before your visit so you're fully prepared",
    ],
    image: "/brand_assets/step1-opt.jpg",
    imageAlt: "Patient booking an appointment at Derma Dynamics",
  },
  {
    number: 2,
    tab: "Consult",
    goldWord: "Meet Your",
    darkWord: "Doctor",
    description:
      "Every treatment begins with a personal consultation. Your doctor listens carefully to your concerns, assesses your skin, and designs a treatment plan built around your goals.",
    bullets: [
      "One-on-one time with a medically trained doctor",
      "No pressure, just honest, expert advice tailored to you",
      "Your skin type, concerns, and desired results are fully discussed",
    ],
    image: "/brand_assets/step2-opt.jpg",
    imageAlt: "Doctor consulting with a patient at Derma Dynamics",
  },
  {
    number: 3,
    tab: "Treat",
    goldWord: "Receive Your",
    darkWord: "Treatment",
    description:
      "Relax in our clean, modern clinic while our certified professionals deliver your chosen treatment using advanced Korean technology and medically approved techniques.",
    bullets: [
      "All procedures performed by trained medical professionals",
      "Korean-grade equipment for precise, safe, effective results",
      "Comfortable environment designed around your care and confidence",
    ],
    image: "/brand_assets/step3-opt.jpg",
    imageAlt: "Patient receiving a skin treatment at Derma Dynamics",
  },
  {
    number: 4,
    tab: "Results",
    goldWord: "See Your",
    darkWord: "Results",
    description:
      "Watch your skin transform. Most patients notice visible improvements after their first session, with results continuing to build over time, leaving you glowing with confidence.",
    bullets: [
      "Visible improvements from the very first session",
      "Personalised aftercare guidance provided after every treatment",
      "Long-lasting results backed by science and medical expertise",
    ],
    image: "/brand_assets/step4-opt.jpg",
    imageAlt: "Patient showing glowing skin results from Derma Dynamics treatment",
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const shouldAnimate = reduce !== true;

  const step = STEPS[active];

  return (
    <section aria-labelledby="hiw-heading" style={{ backgroundColor: "var(--color-bg)" }}>
      <style>{`
        /* ── Section wrapper ── */
        .hiw-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 64px 24px;
          box-sizing: border-box;
        }
        @media (min-width: 1024px) {
          .hiw-inner { padding: 100px 48px; }
        }

        /* ── Section header ── */
        .hiw-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 40px;
          gap: 12px;
        }
        .hiw-pill {
          display: inline-block;
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: var(--color-accent);
          border: 1.5px solid var(--color-accent);
          border-radius: var(--radius-full);
          padding: 5px 16px;
          line-height: 1;
        }
        .hiw-heading {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 36px;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: var(--color-heading);
          margin: 0;
        }
        @media (min-width: 768px) {
          .hiw-heading { font-size: 42px; }
          .hiw-header { margin-bottom: 48px; }
        }

        /* ── Tab row — mobile: 2×2 grid ── */
        .hiw-tabs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 28px;
        }
        /* Hide connectors on mobile — they live in the flex row only */
        .hiw-tab-connector { display: none; }

        /* ── Desktop: horizontal pill row ── */
        @media (min-width: 640px) {
          .hiw-tabs {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            overflow-x: auto;
            padding-bottom: 4px;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .hiw-tabs::-webkit-scrollbar { display: none; }
          .hiw-tab-connector { display: block; }
        }

        .hiw-tab {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 10px 16px;
          border-radius: var(--radius-full);
          border: 1.5px solid var(--color-border);
          background: none;
          cursor: pointer;
          transition: border-color 0.2s ease, background 0.2s ease;
          white-space: nowrap;
          min-height: 44px;
        }
        @media (min-width: 640px) {
          .hiw-tab {
            padding: 10px 20px;
            justify-content: flex-start;
            flex-shrink: 0;
          }
        }
        .hiw-tab:hover {
          border-color: color-mix(in srgb, var(--color-accent) 50%, var(--color-border));
        }
        .hiw-tab:hover .hiw-tab-name { color: var(--color-heading); opacity: 1; }
        .hiw-tab.active {
          border-color: var(--color-accent);
        }

        .hiw-tab-circle {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1.5px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 600;
          color: var(--color-body);
          flex-shrink: 0;
          transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
        }
        @media (min-width: 640px) {
          .hiw-tab-circle { width: 32px; height: 32px; font-size: 13px; }
        }
        .hiw-tab.active .hiw-tab-circle {
          background: var(--color-accent);
          border-color: var(--color-accent);
          color: #fff;
        }

        .hiw-tab-name {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 500;
          color: var(--color-body);
          opacity: 0.6;
          transition: opacity 0.2s ease, color 0.2s ease;
        }
        @media (min-width: 640px) {
          .hiw-tab-name { font-size: 14px; }
        }
        .hiw-tab.active .hiw-tab-name {
          color: var(--color-heading);
          opacity: 1;
          font-weight: 600;
        }

        /* Connector line between tabs (desktop only) */
        .hiw-tab-connector {
          height: 1px;
          width: 28px;
          background: var(--color-border);
          flex-shrink: 0;
        }

        /* ── Content card ── */
        .hiw-card {
          background: var(--color-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-card);
          display: grid;
          grid-template-columns: 1fr;
        }
        @media (min-width: 768px) {
          .hiw-card {
            grid-template-columns: 1fr 1fr;
            min-height: 420px;
          }
        }

        /* Content pane */
        .hiw-content {
          padding: 36px 28px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 20px;
        }
        @media (min-width: 1024px) {
          .hiw-content { padding: 52px 48px; gap: 24px; }
        }

        .hiw-step-heading {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 32px;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin: 0;
        }
        @media (min-width: 1024px) {
          .hiw-step-heading { font-size: 40px; }
        }
        .hiw-step-heading .gold { color: var(--color-accent); }
        .hiw-step-heading .dark { color: var(--color-heading); }

        .hiw-description {
          font-family: var(--font-body);
          font-size: 15px;
          line-height: 1.7;
          color: var(--color-body);
          margin: 0;
        }

        .hiw-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .hiw-bullet {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-family: var(--font-body);
          font-size: 14px;
          line-height: 1.55;
          color: var(--color-body);
        }
        .hiw-bullet-icon {
          color: var(--color-accent);
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* CTA button */
        .hiw-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          align-self: flex-start;
          background: var(--color-accent);
          color: #fff;
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 500;
          padding: 14px 28px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          min-height: 44px;
          transition: background 0.2s ease, transform 0.2s ease;
          box-shadow: var(--shadow-gold);
        }
        .hiw-cta:hover {
          background: var(--color-accent-dark);
          transform: translateY(-1px);
        }
        .hiw-cta:focus-visible {
          outline: 2px solid var(--color-accent);
          outline-offset: 3px;
        }
        .hiw-cta:active { transform: translateY(0); }

        /* Image pane */
        .hiw-image-wrap {
          position: relative;
          min-height: 280px;
          overflow: hidden;
        }
        @media (min-width: 768px) {
          .hiw-image-wrap {
            min-height: unset;
            height: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hiw-tab, .hiw-tab-circle, .hiw-tab-name, .hiw-cta { transition: none !important; }
        }
      `}</style>

      <div className="hiw-inner">
        {/* Header */}
        <motion.div
          className="hiw-header"
          initial={shouldAnimate ? { opacity: 0, y: 24 } : undefined}
          whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true, margin: "-60px" }}
          transition={shouldAnimate ? { duration: 0.6, ease: "easeOut" } : undefined}
        >
          <span className="hiw-pill">How It Works</span>
          <h2 id="hiw-heading" className="hiw-heading">
            From your first message<br />
            <span style={{ color: "var(--color-accent)" }}>to glowing results</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="hiw-tabs"
          role="tablist"
          aria-label="Process steps"
          initial={shouldAnimate ? { opacity: 0, y: 16 } : undefined}
          whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true, margin: "-60px" }}
          transition={shouldAnimate ? { duration: 0.5, ease: "easeOut", delay: 0.1 } : undefined}
        >
          {STEPS.map((s, i) => (
            <Fragment key={s.number}>
              <button
                role="tab"
                aria-selected={active === i}
                aria-controls="hiw-panel"
                className={`hiw-tab${active === i ? " active" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="hiw-tab-circle" aria-hidden="true">
                  {s.number}
                </span>
                <span className="hiw-tab-name">{s.tab}</span>
              </button>
              {i < STEPS.length - 1 && (
                <div className="hiw-tab-connector" aria-hidden="true" />
              )}
            </Fragment>
          ))}
        </motion.div>

        {/* Content card */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 24 } : undefined}
          whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true, margin: "-60px" }}
          transition={shouldAnimate ? { duration: 0.6, ease: "easeOut", delay: 0.15 } : undefined}
        >
          <div
            id="hiw-panel"
            role="tabpanel"
            className="hiw-card"
            style={{ border: "1px solid #E8E0D0", borderRadius: "16px", background: "#FFFFFF", overflow: "hidden" }}
          >
            {/* Left: text content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${active}`}
                className="hiw-content"
                initial={shouldAnimate ? { opacity: 0, x: -16 } : undefined}
                animate={shouldAnimate ? { opacity: 1, x: 0 } : undefined}
                exit={shouldAnimate ? { opacity: 0, x: 16 } : undefined}
                transition={shouldAnimate ? { duration: 0.3, ease: "easeOut" } : undefined}
              >
                <h3 className="hiw-step-heading">
                  <span className="gold">{step.goldWord} </span>
                  <span className="dark">{step.darkWord}</span>
                </h3>
                <p className="hiw-description">{step.description}</p>
                <ul className="hiw-bullets">
                  {step.bullets.map((b) => (
                    <li key={b} className="hiw-bullet">
                      <ArrowUpRight
                        size={16}
                        className="hiw-bullet-icon"
                        aria-hidden="true"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/97761591803"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hiw-cta"
                >
                  Book Your Appointment
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </motion.div>
            </AnimatePresence>

            {/* Right: image */}
            <div className="hiw-image-wrap">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`img-${active}`}
                  style={{ position: "absolute", top: "16px", right: "16px", bottom: "16px", left: 0, borderRadius: "12px", overflow: "hidden" }}
                  initial={shouldAnimate ? { opacity: 0, scale: 1.04 } : undefined}
                  animate={shouldAnimate ? { opacity: 1, scale: 1 } : undefined}
                  exit={shouldAnimate ? { opacity: 0, scale: 0.97 } : undefined}
                  transition={shouldAnimate ? { duration: 0.4, ease: "easeOut" } : undefined}
                >
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    loading={active === 0 ? "eager" : "lazy"}
                    priority={active === 0}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
