"use client";

import { motion, useReducedMotion } from "framer-motion";

const TICKER_ITEMS = [
  { bullet: "★", text: "4.8 Google Rating" },
  { bullet: "✦", text: "500+ Happy Patients" },
  { bullet: "✦", text: "4+ Years of Excellence" },
  { bullet: "✦", text: "20+ Advanced Treatments" },
  { bullet: "✦", text: "Korean Technology & Techniques" },
  { bullet: "✦", text: "Medically Trained Doctors" },
  { bullet: "✦", text: "Two Clinic Branches" },
  { bullet: "✦", text: "Warm & Welcoming Care" },
];

const STATS = [
  { value: "500+", label: "Happy Patients" },
  { value: "4.8★", label: "Google Rating" },
  { value: "4+",   label: "Years of Excellence" },
  { value: "20+",  label: "Advanced Treatments" },
];

export default function TrustBar() {
  const reduce = useReducedMotion();
  const shouldAnimate = reduce !== true;

  return (
    <section
      style={{ backgroundColor: "var(--color-bg)", overflow: "hidden", padding: "40px 0" }}
      aria-labelledby="wcu-heading"
    >
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .wcu-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 16px 20px;
          box-sizing: border-box;
        }

        /* Mobile: single column */
        .wcu-grid {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        /* Left */
        .wcu-left {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .wcu-label {
          font-family: var(--font-body);
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-accent);
        }
        .wcu-heading {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 26px;
          line-height: 1.2;
          letter-spacing: -0.03em;
          color: var(--color-heading);
        }
        .wcu-body {
          font-family: var(--font-body);
          font-size: 15px;
          line-height: 1.7;
          color: var(--color-body);
        }

        /* Right */
        .wcu-right {
          display: flex;
          flex-direction: column;
          gap: 20px;
          min-width: 0;
        }

        /* Ticker */
        .wcu-ticker-wrap {
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        .wcu-ticker-track {
          display: flex;
          width: max-content;
          align-items: center;
          gap: 36px;
          animation: marquee-left 35s linear infinite;
          will-change: transform;
        }
        .wcu-ticker-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .wcu-ticker-bullet {
          font-family: var(--font-body);
          color: var(--color-accent);
          font-size: 13px;
          line-height: 1;
        }
        .wcu-ticker-text {
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 15px;
          color: var(--color-heading);
        }

        /* Stats — 2x2 on mobile */
        .wcu-stats {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          width: 100%;
          box-sizing: border-box;
        }
        .wcu-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px 8px;
          gap: 4px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-right: 1px solid rgba(255, 255, 255, 0.15);
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          min-width: 0;
          box-sizing: border-box;
        }
        .wcu-stat:nth-child(2n) { border-right: none; }
        .wcu-stat:nth-last-child(-n+2) { border-bottom: none; }

        .wcu-stat-value {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 26px;
          color: var(--color-accent);
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .wcu-stat-label {
          font-family: var(--font-body);
          font-size: 11px;
          color: var(--color-body);
          opacity: 0.65;
          text-align: center;
          line-height: 1.3;
        }

        /* Tablet 640px+ — 4 col stats */
        @media (min-width: 640px) {
          .wcu-stats {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
          .wcu-stat {
            padding: 24px 12px;
            border-bottom: none;
          }
          .wcu-stat:nth-child(2n) {
            border-right: 1px solid rgba(255, 255, 255, 0.15);
          }
          .wcu-stat:last-child { border-right: none; }
          .wcu-stat-value { font-size: 30px; }
          .wcu-ticker-text { font-size: 18px; }
          .wcu-ticker-bullet { font-size: 15px; }
        }

        /* Desktop 1024px+ — side by side */
        @media (min-width: 1024px) {
          .wcu-inner {
            padding: 20px 48px;
          }
          .wcu-grid {
            flex-direction: row;
            align-items: center;
            gap: 0;
          }
          .wcu-left {
            flex: 0 0 36%;
            width: 36%;
            padding-right: 48px;
            border-right: 1px solid var(--color-border);
            box-sizing: border-box;
          }
          .wcu-heading { font-size: 30px; }
          .wcu-right {
            flex: 0 0 64%;
            width: 64%;
            padding-left: 48px;
            gap: 24px;
            box-sizing: border-box;
          }
          .wcu-stat { padding: 26px 12px; }
          .wcu-stat-value { font-size: 32px; }
          .wcu-ticker-text { font-size: 20px; }
          .wcu-ticker-bullet { font-size: 16px; }
          .wcu-ticker-track { gap: 52px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .wcu-ticker-track { animation: none !important; }
        }
      `}</style>

      <div className="wcu-inner">
        <div className="wcu-grid">

          {/* Left */}
          <motion.div
            className="wcu-left"
            initial={shouldAnimate ? { opacity: 0, y: 24 } : undefined}
            whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, margin: "-60px" }}
            transition={shouldAnimate ? { duration: 0.6, ease: "easeOut" as const } : undefined}
          >
            <h2 id="wcu-heading" className="wcu-heading">
              Nepal&apos;s Most Trusted<br />Skin Clinic.
            </h2>
            <p className="wcu-body">
              From advanced Korean technology to medically trained doctors,
              every visit to Derma Dynamics is designed around your results
              and your comfort.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            className="wcu-right"
            initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
            whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, margin: "-60px" }}
            transition={shouldAnimate ? { duration: 0.6, ease: "easeOut" as const, delay: 0.1 } : undefined}
          >
            {/* Ticker */}
            <div className="wcu-ticker-wrap">
              <div className="wcu-ticker-track" aria-hidden="true">
                {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                  <span key={i} className="wcu-ticker-item">
                    <span className="wcu-ticker-bullet">{item.bullet}</span>
                    <span className="wcu-ticker-text">{item.text}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="wcu-stats">
              {STATS.map((stat) => (
                <div key={stat.label} className="wcu-stat">
                  <span className="wcu-stat-value">{stat.value}</span>
                  <span className="wcu-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
