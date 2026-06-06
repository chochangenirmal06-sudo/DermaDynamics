"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Phone } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <circle cx="9" cy="9" r="7.5" stroke="rgba(255,255,255,0.90)" strokeWidth="1.25" />
      <polyline points="5.5,9.5 7.5,11.5 12.5,6.5" stroke="rgba(255,255,255,0.90)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function DecorativePattern() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 440 520"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
      style={{ position: "absolute", inset: 0 }}
    >
      {[22, 44, 66, 90, 115, 142, 170, 200].map((r) => (
        <circle key={`g1-${r}`} cx="150" cy="265" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.7" />
      ))}
      {[38, 68, 100, 135, 172, 210].map((r) => (
        <circle key={`g2-${r}`} cx="410" cy="55" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.7" />
      ))}
      {[30, 58, 86, 118, 155].map((r) => (
        <circle key={`g3-${r}`} cx="430" cy="490" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.7" />
      ))}
      <circle cx="-15" cy="180" r="210" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <circle cx="460" cy="360" r="260" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <polygon points="220,125 272,218 220,311 168,218" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" transform="rotate(10, 220, 218)" />
      <polygon points="368,44 392,86 368,128 344,86" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.9" transform="rotate(-10, 368, 86)" />
      <polygon points="72,368 108,420 72,472 36,420" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.9" transform="rotate(7, 72, 420)" />
      <polygon points="384,236 406,272 384,308 362,272" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" transform="rotate(-16, 384, 272)" />
    </svg>
  );
}

const TRUST_POINTS = [
  "Medically trained & certified doctors",
  "Advanced Korean laser technology",
  "500+ patients treated",
  "Personalised treatment plans",
];

const BRANCHES = [
  {
    name: "Derma Dynamics Pokhara",
    city: "Pokhara",
    address: "New Rd, Pokhara 33700 · Bhat-Bhateni Supermarket",
    hours: "Open daily: 10:00 AM – 5:30 PM",
    tel: "tel:061591803",
  },
  {
    name: "Derma Dynamics Lalitpur",
    city: "Lalitpur",
    address: "Lagankhel Satdobato Rd, Lalitpur 44600",
    hours: "Sun–Fri: 10:00 AM – 6:00 PM · Sat: Closed",
    tel: "tel:015908320",
  },
  {
    name: "Derma Dynamics Dhangadhi",
    city: "Dhangadhi",
    address: "Campus Road Marg, Dhangadhi 10900",
    hours: "Open daily: 10:00 AM – 6:00 PM",
    tel: "tel:091590718",
  },
];

export default function CTABanner() {
  const reduce = useReducedMotion();
  const shouldAnimate = reduce !== true;

  return (
    <section className="cta-section">
      <style>{`
        .cta-section {
          background-color: var(--color-bg);
          padding: 80px 24px;
        }
        .cta-card {
          max-width: 1100px;
          margin: 0 auto;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 32px 80px rgba(28,24,18,0.22), 0 8px 24px rgba(28,24,18,0.14);
          background: linear-gradient(135deg, #8B6914 0%, #B8912A 40%, #9A7820 100%);
        }
        .cta-left {
          padding: 56px 56px 52px;
          position: relative;
          text-align: center;
        }
        .cta-label {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.88);
          display: block;
          margin-bottom: 20px;
        }
        .cta-heading {
          font-family: var(--font-heading);
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin: 0 0 20px;
        }
        .cta-subline {
          font-family: var(--font-body);
          font-size: 15px;
          color: rgba(255,255,255,0.92);
          line-height: 1.7;
          margin: 0 0 32px;
        }
        .cta-trust-grid {
          display: inline-grid;
          grid-template-columns: 1fr 1fr;
          row-gap: 12px;
          column-gap: 32px;
          margin-bottom: 40px;
          text-align: left;
        }
        .cta-trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .cta-trust-text {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 500;
          color: #ffffff;
          line-height: 1.4;
        }
        .cta-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          color: #8B6914;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 600;
          padding: 14px 28px;
          border-radius: var(--radius-full);
          box-shadow: 0 4px 24px rgba(184,145,42,0.35), 0 1px 4px rgba(184,145,42,0.20);
          min-height: 48px;
          touch-action: manipulation;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          cursor: pointer;
          white-space: nowrap;
        }
        .cta-btn:hover {
          background: rgba(255,255,255,0.92);
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(184,145,42,0.45), 0 2px 8px rgba(184,145,42,0.25);
        }
        .cta-btn:focus-visible {
          outline: 2px solid #B8912A;
          outline-offset: 3px;
        }
        .cta-rating-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: var(--radius-full);
          padding: 10px 16px;
        }
        .cta-rating-stars { display: flex; gap: 2px; }
        .cta-rating-text {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.92);
          white-space: nowrap;
        }

        /* ── Branches below card ── */
        .cta-branches-wrap {
          max-width: 1100px;
          margin: 24px auto 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .cta-branch-card {
          background: var(--color-card);
          border: 1px solid var(--color-border);
          border-top: 2px solid rgba(184,145,42,0.55);
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(28,24,18,0.07);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .cta-branch-card:hover {
          border-color: rgba(184,145,42,0.85);
          border-top-color: var(--color-accent);
          box-shadow: 0 6px 28px rgba(184,145,42,0.14);
        }
        .cta-branch-body {
          padding: 20px 22px;
        }
        .cta-branch-name {
          font-family: var(--font-heading);
          font-size: 17px;
          font-weight: 700;
          color: var(--color-heading);
          margin: 0 0 12px;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }
        .cta-branch-row {
          display: flex;
          align-items: flex-start;
          gap: 7px;
          margin-bottom: 7px;
        }
        .cta-branch-icon {
          color: var(--color-accent);
          flex-shrink: 0;
          margin-top: 1px;
        }
        .cta-branch-text {
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--color-body);
          line-height: 1.5;
        }
        .cta-branch-actions {
          display: flex;
          gap: 7px;
          margin-top: 16px;
        }
        .cta-branch-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 7px 14px;
          border-radius: 999px;
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.2s ease, border-color 0.2s ease;
          cursor: pointer;
          white-space: nowrap;
          min-height: 32px;
        }
        .cta-branch-btn-wa {
          background: rgba(37, 211, 102, 0.1);
          border: 1px solid rgba(37, 211, 102, 0.4);
          color: #1a7a3a;
        }
        .dark .cta-branch-btn-wa { color: #4cde80; }
        .cta-branch-btn-wa:hover { background: rgba(37, 211, 102, 0.2); }
        .cta-branch-btn-call {
          background: var(--color-accent);
          border: 1px solid var(--color-accent);
          color: #fff;
        }
        .cta-branch-btn-call:hover {
          background: var(--color-accent-dark);
          border-color: var(--color-accent-dark);
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .cta-branches-wrap { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 767px) {
          .cta-card { border-radius: 20px; }
          .cta-left { padding: 32px; }
          .cta-heading { font-size: 28px !important; }
          .cta-branches-wrap { grid-template-columns: 1fr; }
        }

        @media (prefers-reduced-motion: reduce) {
          .cta-btn, .cta-branch-card, .cta-branch-btn { transition: none !important; }
        }
      `}</style>

      <motion.div
        initial={shouldAnimate ? { opacity: 0, y: 40 } : undefined}
        whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true, margin: "-60px" }}
        transition={shouldAnimate ? { duration: 0.7, ease: [0.22, 1, 0.36, 1] } : undefined}
      >
        {/* CTA card */}
        <div className="cta-card">
          <div className="cta-left">
            <DecorativePattern />
            <span className="cta-label">SKIN · HAIR · LASER</span>

            <h2 className="cta-heading">
              Transform Your Skin.<br />
              Book a Consultation.
            </h2>

            <p className="cta-subline">
              Medically trained doctors. Korean technology. Results that last.
            </p>

            <div className="cta-trust-grid">
              {TRUST_POINTS.map((point) => (
                <div key={point} className="cta-trust-item">
                  <CheckIcon />
                  <span className="cta-trust-text">{point}</span>
                </div>
              ))}
            </div>

            <div className="cta-row">
              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn"
                aria-label="Book your appointment via WhatsApp"
              >
                Book Your Appointment →
              </a>

              <div className="cta-rating-pill">
                <div className="cta-rating-stars" role="img" aria-label="4.8 stars out of 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="rgba(255,255,255,0.90)" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="cta-rating-text">4.8 · 500+ Patients</span>
              </div>
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  );
}
