"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const FAQS = [
  {
    q: "Do I need a doctor's referral to book an appointment?",
    a: "No referral is needed. Simply contact us via WhatsApp or our contact form and we'll arrange a convenient time for your consultation.",
  },
  {
    q: "How many sessions will I need to see results?",
    a: "It depends on the treatment and your skin. Most patients see visible improvement after their first session. During your consultation, our doctors will give you a personalised treatment plan with a realistic timeline.",
  },
  {
    q: "Is laser hair removal safe for all skin types?",
    a: "Yes. We use advanced laser technology specifically calibrated for South Asian skin tones, ensuring safe and effective results with minimal risk of irritation.",
  },
  {
    q: "What should I do to prepare for my first visit?",
    a: "Come with a clean face, free of makeup or heavy skincare products. Arrive 10 minutes early to complete a short intake form. Our team will guide you through everything.",
  },
  {
    q: "Are your doctors medically trained and certified?",
    a: "Absolutely. Every treatment at Derma Dynamics is performed or supervised by our medically trained doctors. We never allow unqualified staff to perform clinical procedures.",
  },
  {
    q: "How do I know which treatment is right for my skin?",
    a: "That's exactly what your free consultation is for. Our doctors will assess your skin in person and recommend the most effective treatment for your specific concerns and goals.",
  },
];

export default function FAQBranches() {
  const [openIndex, setOpenIndex] = useState(0);
  const reduce = useReducedMotion();
  const shouldAnimate = reduce !== true;

  return (
    <section
      aria-labelledby="faq-heading"
      style={{ backgroundColor: "var(--color-accent)", padding: "96px 0" }}
    >
      <style>{`
        .fb-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          box-sizing: border-box;
        }
        @media (min-width: 1024px) { .fb-container { padding: 0 48px; } }

        /* Centered FAQ wrapper */
        .faq-wrap {
          max-width: 760px;
          margin: 0 auto;
        }

        /* Header */
        .faq-label {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.65);
          display: block;
          margin-bottom: 12px;
        }
        .faq-heading {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: clamp(32px, 4vw, 44px);
          letter-spacing: -0.03em;
          color: #1a1306;
          line-height: 1.15;
          margin: 0 0 12px;
        }
        .faq-subline {
          font-family: var(--font-heading);
          font-weight: 400;
          font-style: italic;
          font-size: 17px;
          color: rgba(0,0,0,0.55);
          margin: 0 0 40px;
        }

        /* Accordion item */
        .faq-item {
          background: var(--color-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 20px 24px;
          margin-bottom: 12px;
          box-shadow: var(--shadow-card);
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
          cursor: pointer;
        }
        .faq-item.open {
          border-color: rgba(0,0,0,0.35);
          box-shadow: 0 8px 32px rgba(0,0,0,0.28), 0 2px 8px rgba(0,0,0,0.18);
        }
        .faq-item:last-child { margin-bottom: 0; }

        .faq-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          min-height: 44px;
          touch-action: manipulation;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          width: 100%;
          text-align: left;
        }
        .faq-question {
          font-family: var(--font-body);
          font-size: 16px;
          font-weight: 600;
          color: var(--color-heading);
          flex: 1;
          min-width: 0;
          line-height: 1.4;
        }
        .faq-icon {
          width: 32px;
          height: 32px;
          flex-shrink: 0;
          border-radius: 50%;
          border: 1px solid var(--color-border);
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease, border-color 0.3s ease;
          color: var(--color-accent);
        }
        .faq-item.open .faq-icon {
          transform: rotate(45deg);
          border-color: var(--color-accent);
        }
        .faq-body {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.4s ease;
        }
        .faq-item.open .faq-body { max-height: 500px; }
        .faq-answer {
          font-family: var(--font-body);
          font-size: 15px;
          color: var(--color-body);
          line-height: 1.7;
          padding-top: 12px;
        }

        @media (prefers-reduced-motion: reduce) {
          .faq-item, .faq-icon, .faq-body { transition: none !important; }
        }
      `}</style>

      <div className="fb-container">
        <motion.div
          className="faq-wrap"
          initial={shouldAnimate ? { opacity: 0, y: 32 } : undefined}
          whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true, margin: "-80px" }}
          transition={shouldAnimate ? { duration: 0.6, ease: "easeOut" as const } : undefined}
        >
          <span className="faq-label">Have Questions?</span>
          <h2 id="faq-heading" className="faq-heading">
            Frequently Asked <em>Questions</em>
          </h2>
          <p className="faq-subline">
            Everything you need to know before your first visit.
          </p>

          <div role="list">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                role="listitem"
                className={`faq-item${openIndex === i ? " open" : ""}`}
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                <button
                  className="faq-row"
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="faq-question">{faq.q}</span>
                  <span className="faq-icon" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <line x1="7" y1="1" x2="7" y2="13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      <line x1="1" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className="faq-body"
                  role="region"
                >
                  <p className="faq-answer">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
