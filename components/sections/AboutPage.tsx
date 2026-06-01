"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { User } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const DOCTORS = [
  {
    name: "Dr. Uma Keyal",
    credentials: "MD, PhD",
    role: "Lead Aesthetic Physician",
    bio: "A distinguished physician who graduated from Tianjin Medical University, China, with her MD degree, followed by a PhD from Tongji University — one of China's most prestigious research institutions. Dr. Uma further advanced her clinical expertise through the highly selective Salzburg Weill Cornell Seminar programme, bringing the latest evidence-based Korean aesthetic protocols to Derma Dynamics Pokhara.",
    highlights: [
      "MD — Tianjin Medical University, China",
      "PhD — Tongji University, China",
      "Salzburg Weill Cornell Seminar, Austria",
    ],
    photo: "/brand_assets/dr-uma-keyal.png",
  },
  {
    name: "Dr. Anil Kumar Bhatta",
    credentials: "MD, PhD",
    role: "Senior Aesthetic Surgeon",
    bio: "A highly respected aesthetic surgeon celebrated for his exceptional precision and deep attentiveness to each patient's individual concerns. Dr. Anil combines advanced surgical and non-surgical expertise with a warm, patient-first philosophy — consistently delivering visible, lasting results that speak for themselves.",
    highlights: [
      "Advanced Aesthetic & Surgical Training",
      "Non-Surgical Rejuvenation Specialist",
      "Patient-First Clinical Philosophy",
    ],
    photo: "/brand_assets/dr-anil.png",
  },
];

const TEAM_MEMBERS = [
  {
    name: "Simran Bista",
    role: "Senior Nurse",
    bio: "Aesthetic nurse specialising in anti-aging energy-based device treatments for pigmentation, vascular issues, and skin rejuvenation.",
    photo: "/brand_assets/simran-bista.jpg",
  },
  {
    name: "Chandra Chaudary",
    role: "Pharmacist",
    bio: "Ensures every patient receives safe, optimal medications while collaborating with the clinical team to personalise therapy.",
    photo: "/brand_assets/chandra-chaudary.jpg",
  },
  {
    name: "Prashna Biswokarma",
    role: "Receptionist",
    bio: "Your first point of contact — warmly managing appointments, calls, and every aspect of front desk operations.",
    photo: "/brand_assets/prashna-biswokarma.jpg",
  },
  {
    name: "Sabhyata Khatri",
    role: "Administrative Manager",
    bio: "Detail-driven and energetic — overseeing records, coordination, and operational excellence across the clinic.",
    photo: "/brand_assets/sabhyata-khatri.jpg",
  },
  {
    name: "Bibita Achhami",
    role: "Beautician",
    bio: "Specialises in facials, massages, and cosmetic skin treatments that complement our medical procedures.",
    photo: "/brand_assets/bibita-achhami.jpg",
  },
];

// ─── Styles ───────────────────────────────────────────────────────────────────

const STYLES = `
/* ── Shared ── */
.ab-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;
}
@media (min-width: 768px)  { .ab-container { padding: 0 40px; } }
@media (min-width: 1024px) { .ab-container { padding: 0 48px; } }

.ab-label {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 14px;
}
.ab-h2 {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: clamp(32px, 4vw, 48px);
  letter-spacing: -0.03em;
  color: var(--color-heading);
  line-height: 1.15;
  margin: 0 0 14px;
}
.ab-italic {
  font-style: italic;
  font-weight: 400;
  color: var(--color-accent);
}
.ab-section-header { text-align: center; margin-bottom: 56px; }
.ab-body-center {
  font-family: var(--font-body);
  font-size: 16px;
  color: var(--color-body);
  line-height: 1.75;
  max-width: 580px;
  margin: 0 auto;
}

/* ── Leadership ── */
.ab-lead {
  background: var(--color-bg);
  padding: 88px 0 96px;
}
@media (max-width: 767px) { .ab-lead { padding: 64px 0; } }

.ab-lead-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
@media (min-width: 900px) { .ab-lead-grid { grid-template-columns: repeat(2, 1fr); } }

.ab-doctor-card {
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  padding: 40px 36px;
  box-shadow: var(--shadow-card);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.ab-doctor-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-float);
}
@media (max-width: 767px) { .ab-doctor-card { padding: 28px 24px; } }

.ab-avatar {
  position: relative;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  overflow: hidden;
  background: linear-gradient(135deg, #B8912A, #8B6914);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  border: 2px solid rgba(184,145,42,0.30);
  box-shadow: 0 4px 16px rgba(0,0,0,0.10);
  flex-shrink: 0;
}
.ab-creds {
  font-family: var(--font-body);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 6px;
}
.ab-doc-name {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 26px;
  color: var(--color-heading);
  letter-spacing: -0.02em;
  line-height: 1.15;
  margin: 0 0 4px;
}
.ab-doc-role {
  font-family: var(--font-body);
  font-size: 13px;
  color: var(--color-body);
  opacity: 0.70;
  margin: 0 0 22px;
}
.ab-divider {
  height: 1px;
  background: var(--color-border);
  margin-bottom: 22px;
}
.ab-doc-bio {
  font-family: var(--font-body);
  font-size: 14px;
  line-height: 1.75;
  color: var(--color-body);
  margin: 0 0 22px;
}
.ab-highlights {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.ab-highlights li {
  font-family: var(--font-body);
  font-size: 13px;
  color: var(--color-body);
  display: flex;
  align-items: center;
  gap: 9px;
}
.ab-bullet { color: var(--color-accent); font-size: 10px; flex-shrink: 0; }

/* ── Mission quote — gold gradient break ── */
.ab-quote-section {
  position: relative;
  background: linear-gradient(135deg, #8B6914 0%, #B8912A 40%, #9A7820 100%);
  padding: 96px 0;
  overflow: hidden;
}
@media (max-width: 767px) { .ab-quote-section { padding: 72px 0; } }

.ab-quote-grain {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity: 0.04;
  pointer-events: none;
}
.ab-quote-wrap {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}
.ab-quote-mark {
  display: block;
  font-family: var(--font-heading);
  font-size: 96px;
  line-height: 0.75;
  color: rgba(255,255,255,0.22);
  margin-bottom: 16px;
  user-select: none;
}
.ab-quote-text {
  font-family: var(--font-heading);
  font-weight: 400;
  font-style: italic;
  font-size: clamp(22px, 3.2vw, 40px);
  color: #ffffff;
  line-height: 1.4;
  letter-spacing: -0.02em;
  margin: 0 0 20px;
}
.ab-quote-author {
  display: block;
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.65);
  margin-bottom: 22px;
  font-style: normal;
}
.ab-quote-context {
  font-family: var(--font-body);
  font-size: 15px;
  color: rgba(255,255,255,0.82);
  line-height: 1.75;
  max-width: 520px;
  margin: 0 auto;
}

/* ── Team gallery ── */
.ab-team {
  background: var(--color-bg-alt);
  padding: 88px 0 96px;
}
@media (max-width: 767px) { .ab-team { padding: 64px 0; } }

.ab-team-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 36px 20px;
}
@media (min-width: 640px)  { .ab-team-grid { grid-template-columns: repeat(3, 1fr); } }
@media (min-width: 1024px) { .ab-team-grid { grid-template-columns: repeat(5, 1fr); gap: 28px; } }

.ab-team-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.ab-portrait {
  position: relative;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(184,145,42,0.28);
  box-shadow: 0 0 0 4px rgba(184,145,42,0.08);
  margin-bottom: 16px;
  flex-shrink: 0;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
@media (min-width: 768px) { .ab-portrait { width: 110px; height: 110px; } }
.ab-portrait:hover {
  border-color: #B8912A;
  box-shadow: 0 0 14px rgba(184,145,42,0.28), 0 0 0 4px rgba(184,145,42,0.12);
}
.ab-team-name {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 16px;
  color: var(--color-heading);
  letter-spacing: -0.01em;
  margin: 0 0 4px;
}
.ab-team-role {
  font-family: var(--font-body);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin: 0 0 10px;
}
.ab-team-bio {
  font-family: var(--font-body);
  font-size: 13px;
  color: var(--color-body);
  line-height: 1.6;
  margin: 0;
}

/* ── Reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  .ab-doctor-card, .ab-portrait { transition: none !important; }
}
`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function AboutPage() {
  const reduce = useReducedMotion();
  const sa = reduce !== true;

  const fadeUp = (delay = 0) => {
    if (!sa) return {};
    return {
      initial: { opacity: 0, y: 28 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const, delay },
    };
  };

  return (
    <>
      <style>{STYLES}</style>

      {/* ── Leadership ────────────────────────────────────────────────── */}
      <section className="ab-lead" aria-labelledby="ab-lead-h2">
        <div className="ab-container">

          <motion.div className="ab-section-header" {...fadeUp(0)}>
            <span className="ab-label">Our Leadership</span>
            <h2 id="ab-lead-h2" className="ab-h2">
              The Doctors Behind<br />
              <em className="ab-italic">Every Result</em>
            </h2>
            <p className="ab-body-center">
              Both physicians hold advanced postgraduate qualifications from internationally
              recognised medical universities — a standard of expertise rarely found in Nepal.
            </p>
          </motion.div>

          <div className="ab-lead-grid">
            {DOCTORS.map((doc, i) => (
              <motion.div key={doc.name} className="ab-doctor-card" {...fadeUp(i * 0.13)}>
                <div className="ab-avatar">
                  {doc.photo ? (
                    <Image
                      src={doc.photo}
                      alt={`Portrait of ${doc.name}`}
                      fill
                      unoptimized
                      style={{ objectFit: "cover", objectPosition: "top center" }}
                    />
                  ) : (
                    <User size={32} strokeWidth={1.5} color="rgba(255,255,255,0.90)" />
                  )}
                </div>
                <div className="ab-creds">{doc.credentials}</div>
                <h3 className="ab-doc-name">{doc.name}</h3>
                <p className="ab-doc-role">{doc.role}</p>
                <div className="ab-divider" />
                <p className="ab-doc-bio">{doc.bio}</p>
                <ul className="ab-highlights" aria-label="Credentials">
                  {doc.highlights.map((h) => (
                    <li key={h}>
                      <span className="ab-bullet" aria-hidden="true">✦</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Mission quote ─────────────────────────────────────────────── */}
      <section className="ab-quote-section" aria-label="Our mission">
        <div className="ab-quote-grain" aria-hidden="true" />
        <div className="ab-container">
          <motion.div className="ab-quote-wrap" {...fadeUp(0)}>
            <span className="ab-quote-mark" aria-hidden="true">&ldquo;</span>
            <blockquote className="ab-quote-text">
              Pleasure in the job puts perfection in the work.
            </blockquote>
            <cite className="ab-quote-author">— Aristotle</cite>
            <p className="ab-quote-context">
              At Derma Dynamics, we believe that when passion truly drives our work,
              exceptional outcomes follow naturally. Every procedure we perform reflects
              that conviction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Team gallery ──────────────────────────────────────────────── */}
      <section className="ab-team" aria-labelledby="ab-team-h2">
        <div className="ab-container">

          <motion.div className="ab-section-header" {...fadeUp(0)}>
            <span className="ab-label">The Team</span>
            <h2 id="ab-team-h2" className="ab-h2">
              The People Who<br />
              <em className="ab-italic">Care for You</em>
            </h2>
            <p className="ab-body-center">
              Every member of our team was chosen for their expertise, warmth, and shared
              commitment to making your visit as exceptional as your results.
            </p>
          </motion.div>

          <div className="ab-team-grid" role="list">
            {TEAM_MEMBERS.map((m, i) => (
              <motion.article
                key={m.name}
                className="ab-team-card"
                role="listitem"
                {...fadeUp(i * 0.09)}
              >
                <motion.div
                  className="ab-portrait"
                  whileHover={sa ? { scale: 1.04 } : undefined}
                  transition={{ duration: 0.3, ease: "easeOut" as const }}
                >
                  <Image
                    src={m.photo}
                    alt={`Portrait of ${m.name}`}
                    fill
                    unoptimized
                    style={{ objectFit: "cover", objectPosition: "top center" }}
                  />
                </motion.div>
                <h3 className="ab-team-name">{m.name}</h3>
                <p className="ab-team-role">{m.role}</p>
                <p className="ab-team-bio">{m.bio}</p>
              </motion.article>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
