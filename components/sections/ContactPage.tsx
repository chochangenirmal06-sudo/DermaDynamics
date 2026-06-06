"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import FAQBranches from "@/components/sections/FAQBranches";

const BRANCHES = [
  {
    name: "Derma Dynamics Pokhara",
    address: "New Rd, Pokhara 33700",
    note: "Inside Bhat-Bhateni Supermarket",
    hours: "Open every day: 10:00 AM – 5:30 PM",
    tel: "tel:061591803",
    wa: "https://wa.me/977061591803",
    display: "061-591803",
  },
  {
    name: "Derma Dynamics Lalitpur",
    address: "Lagankhel Satdobato Rd",
    note: "Lalitpur 44600",
    hours: "Sun–Fri: 10:00 AM – 6:00 PM · Sat: Closed",
    tel: "tel:015908320",
    wa: "https://wa.me/977015908320",
    display: "01-5908320",
  },
  {
    name: "Derma Dynamics Dhangadhi",
    address: "Campus Road Marg",
    note: "Dhangadhi 10900",
    hours: "Open every day: 10:00 AM – 6:00 PM",
    tel: "tel:091590718",
    wa: "https://wa.me/977091590718",
    display: "091-590718",
  },
];

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const STYLES = `
.cp-hero {
  position: relative;
  background: linear-gradient(135deg, #8B6914 0%, #B8912A 40%, #9A7820 100%);
  padding: 80px 24px 72px;
  overflow: hidden;
}
.cp-hero-grain {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity: 0.04;
  pointer-events: none;
}
.cp-hero-inner {
  max-width: 860px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  text-align: center;
}
.cp-hero-label {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.72);
  display: block;
  margin-bottom: 16px;
}
.cp-hero-h1 {
  font-family: var(--font-heading);
  font-size: clamp(36px, 5vw, 60px);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #ffffff;
  line-height: 1.1;
  margin: 0 0 20px;
}
.cp-hero-h1 em {
  font-style: italic;
  color: rgba(255,255,255,0.82);
}
.cp-hero-sub {
  font-family: var(--font-body);
  font-size: 16px;
  color: rgba(255,255,255,0.78);
  line-height: 1.7;
  margin: 0;
}

/* ── Branch section ── */
.cp-section {
  background: var(--color-bg);
  padding: 80px 0 96px;
}
.cp-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(20px, 5vw, 56px);
}
.cp-section-label {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-accent);
  display: block;
  margin-bottom: 10px;
}
.cp-section-title {
  font-family: var(--font-heading);
  font-size: clamp(26px, 3vw, 38px);
  font-weight: 700;
  color: var(--color-heading);
  letter-spacing: -0.03em;
  margin: 0 0 48px;
  line-height: 1.15;
}

/* ── Cards grid ── */
.cp-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
@media (max-width: 900px) {
  .cp-cards { grid-template-columns: 1fr; max-width: 560px; }
}

.cp-card {
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-top: 3px solid var(--color-accent);
  border-radius: 16px;
  padding: 28px 26px 24px;
  display: flex;
  flex-direction: column;
  gap: 0;
  transition: box-shadow 0.25s ease, border-color 0.25s ease;
}
.cp-card:hover {
  box-shadow: 0 8px 32px rgba(184,145,42,0.12);
  border-color: rgba(184,145,42,0.7);
}

.cp-card-name {
  font-family: var(--font-heading);
  font-size: 20px;
  font-weight: 700;
  color: var(--color-heading);
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin: 0 0 18px;
}

.cp-card-row {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  margin-bottom: 10px;
}
.cp-card-icon {
  color: var(--color-accent);
  flex-shrink: 0;
  margin-top: 2px;
}
.cp-card-text {
  font-family: var(--font-body);
  font-size: 13.5px;
  color: var(--color-body);
  line-height: 1.55;
}
.cp-card-note {
  font-size: 12px;
  color: var(--color-body);
  opacity: 0.72;
}

/* Divider inside card */
.cp-card-divider {
  height: 1px;
  background: var(--color-border);
  margin: 16px 0;
}

/* Action buttons */
.cp-card-actions {
  display: flex;
  gap: 8px;
  margin-top: 4px;
}
.cp-card-btn {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 12px;
  border-radius: 8px;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease;
  min-height: 40px;
  white-space: nowrap;
}
.cp-card-btn:hover { transform: translateY(-1px); }
.cp-card-btn-wa {
  background: rgba(37,211,102,0.10);
  border: 1px solid rgba(37,211,102,0.35);
  color: #1a7a3a;
}
.dark .cp-card-btn-wa { color: #4cde80; background: rgba(37,211,102,0.12); }
.cp-card-btn-wa:hover { background: rgba(37,211,102,0.20); }
.cp-card-btn-call {
  background: var(--color-accent);
  border: 1px solid var(--color-accent);
  color: #fff;
}
.cp-card-btn-call:hover { background: var(--color-accent-dark); border-color: var(--color-accent-dark); }

/* ── Email strip ── */
.cp-email-strip {
  margin-top: 48px;
  padding-top: 36px;
  border-top: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.cp-email-label {
  font-family: var(--font-body);
  font-size: 13px;
  color: var(--color-body);
}
.cp-email-link {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  color: var(--color-accent);
  text-decoration: none;
  transition: opacity 0.15s ease;
}
.cp-email-link:hover { opacity: 0.75; }

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .cp-card, .cp-card-btn { transition: none !important; transform: none !important; }
}
`;

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function ContactPage() {
  const reduce = useReducedMotion();
  const sa = reduce !== true;

  return (
    <>
      <style>{STYLES}</style>

      {/* Hero */}
      <section className="cp-hero" aria-label="Contact page header">
        <div className="cp-hero-grain" aria-hidden="true" />
        <motion.div
          className="cp-hero-inner"
          initial={sa ? { opacity: 0, y: 24 } : undefined}
          animate={sa ? { opacity: 1, y: 0 } : undefined}
          transition={sa ? { duration: 0.65, ease: EASE } : undefined}
        >
          <span className="cp-hero-label">Get in Touch</span>
          <h1 className="cp-hero-h1">
            Find Your Nearest Clinic.<br />
            <em>We're Ready When You Are.</em>
          </h1>
          <p className="cp-hero-sub">
            Pick a branch and reach us directly on WhatsApp or by phone.
            No forms, no waiting — just a direct line to our team.
          </p>
        </motion.div>
      </section>

      {/* Branch cards */}
      <section className="cp-section" aria-labelledby="cp-branches-heading">
        <div className="cp-container">
          <motion.div
            initial={sa ? { opacity: 0, y: 20 } : undefined}
            whileInView={sa ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, amount: 0.2 }}
            transition={sa ? { duration: 0.55, ease: EASE } : undefined}
          >
            <span className="cp-section-label">Our Clinics</span>
            <h2 id="cp-branches-heading" className="cp-section-title">
              Three Locations, One Standard of Care
            </h2>
          </motion.div>

          <div className="cp-cards">
            {BRANCHES.map((branch, i) => (
              <motion.div
                key={branch.name}
                className="cp-card"
                initial={sa ? { opacity: 0, y: 28 } : undefined}
                whileInView={sa ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, amount: 0.15 }}
                transition={sa ? { duration: 0.55, ease: EASE, delay: i * 0.1 } : undefined}
              >
                <h3 className="cp-card-name">{branch.name}</h3>

                <div className="cp-card-row">
                  <MapPin size={14} className="cp-card-icon" aria-hidden="true" />
                  <span className="cp-card-text">
                    {branch.address}
                    {branch.note && <><br /><span className="cp-card-note">{branch.note}</span></>}
                  </span>
                </div>

                <div className="cp-card-row">
                  <Clock size={14} className="cp-card-icon" aria-hidden="true" />
                  <span className="cp-card-text">{branch.hours}</span>
                </div>

                <div className="cp-card-row">
                  <Phone size={14} className="cp-card-icon" aria-hidden="true" />
                  <span className="cp-card-text">{branch.display}</span>
                </div>

                <div className="cp-card-divider" aria-hidden="true" />

                <div className="cp-card-actions">
                  <a
                    href={branch.wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cp-card-btn cp-card-btn-wa"
                    aria-label={`WhatsApp ${branch.name}`}
                  >
                    <WhatsAppIcon /> WhatsApp
                  </a>
                  <a
                    href={branch.tel}
                    className="cp-card-btn cp-card-btn-call"
                    aria-label={`Call ${branch.name}`}
                  >
                    <Phone size={13} aria-hidden="true" /> Call
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Email */}
          <div className="cp-email-strip">
            <span className="cp-email-label">For general enquiries:</span>
            <a href={`mailto:${CONTACT_INFO.email}`} className="cp-email-link">
              {CONTACT_INFO.email}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQBranches />
    </>
  );
}
