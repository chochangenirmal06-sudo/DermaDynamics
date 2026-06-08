"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Phone } from "lucide-react";
import type { Location } from "@/lib/locations";
import { TESTIMONIALS } from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

function WhatsAppIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const TREATMENTS = [
  { name: "Botox", image: "/brand_assets/botox.png" },
  { name: "Lip Filler", image: "/brand_assets/lipfiller.png" },
  { name: "Laser Hair Removal", image: "/brand_assets/laserhair.png" },
  { name: "HydraFacial", image: "/brand_assets/hydrafacial.png" },
  { name: "MicroNeedling PRP", image: "/brand_assets/microneedling.png" },
  { name: "Tattoo Removal", image: "/brand_assets/tatto.png" },
];

const STYLES = `
.lp-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(20px, 5vw, 56px);
}
.lp-section-label {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-accent);
  display: block;
  margin-bottom: 12px;
}
.lp-section-title {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: clamp(28px, 3.4vw, 42px);
  letter-spacing: -0.03em;
  line-height: 1.15;
  color: var(--color-heading);
  margin: 0 0 20px;
}

/* ── Hero ── */
.lp-hero {
  position: relative;
  min-height: 480px;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.lp-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #8B6914 0%, #B8912A 45%, #161410 100%);
}
.lp-hero-grain {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity: 0.05;
  pointer-events: none;
}
.lp-hero-inner {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 140px clamp(20px, 5vw, 56px) 64px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  align-items: center;
}
@media (max-width: 900px) {
  .lp-hero-inner { grid-template-columns: 1fr; padding-top: 148px; }
}
.lp-hero-eyebrow {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.85);
  display: block;
  margin-bottom: 18px;
}
.lp-hero-h1 {
  font-family: var(--font-heading);
  font-size: clamp(40px, 6vw, 72px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.05;
  color: #ffffff;
  margin: 0 0 18px;
}
.lp-hero-h1 em {
  font-style: italic;
  color: rgba(255,255,255,0.82);
}
.lp-hero-tagline {
  font-family: var(--font-body);
  font-size: clamp(15px, 2vw, 18px);
  color: rgba(255,255,255,0.86);
  line-height: 1.6;
  max-width: 480px;
  margin: 0 0 32px;
}
.lp-hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }
.lp-hero-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 26px;
  border-radius: var(--radius-full);
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  min-height: 48px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}
.lp-hero-btn:hover { transform: translateY(-2px); }
.lp-hero-btn-wa {
  background: #25D366;
  color: #ffffff;
  box-shadow: 0 4px 20px rgba(37,211,102,0.35);
}
.lp-hero-btn-wa:hover { background: #1fb855; }
.lp-hero-btn-call {
  background: rgba(255,255,255,0.14);
  border: 1px solid rgba(255,255,255,0.4);
  color: #ffffff;
  backdrop-filter: blur(6px);
}
.lp-hero-btn-call:hover { background: rgba(255,255,255,0.22); }

.lp-hero-card-wrap { display: flex; justify-content: flex-end; }
.lp-hero-card {
  background: rgba(28,24,18,0.55);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 18px;
  padding: 26px 28px;
  max-width: 320px;
  width: 100%;
  box-shadow: 0 24px 60px rgba(0,0,0,0.35);
}
.lp-hero-card-label {
  font-family: var(--font-body);
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-accent);
  display: block;
  margin-bottom: 16px;
}
.lp-hero-card-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-family: var(--font-body);
  font-size: 13.5px;
  color: rgba(255,255,255,0.85);
  line-height: 1.55;
  margin-bottom: 14px;
}
.lp-hero-card-row:last-child { margin-bottom: 0; }
.lp-hero-card-icon { color: var(--color-accent); flex-shrink: 0; margin-top: 2px; }
.lp-hero-card-note { color: rgba(255,255,255,0.6); font-size: 12px; }
@media (max-width: 900px) {
  .lp-hero-card-wrap { justify-content: flex-start; margin-top: 28px; }
  .lp-hero-card { max-width: 100%; }
}

/* ── About / Why visit ── */
.lp-about { background: var(--color-bg); padding: clamp(72px, 9vw, 112px) 0; }
.lp-about-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(40px, 6vw, 72px);
  align-items: center;
}
@media (max-width: 900px) {
  .lp-about-grid { grid-template-columns: 1fr; }
}
.lp-about-media-wrap { display: flex; justify-content: center; }
.lp-about-media {
  position: relative;
  width: 100%;
  max-width: 420px;
  aspect-ratio: 4 / 5;
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-float);
}
@media (max-width: 900px) {
  .lp-about-media { max-width: 360px; margin: 0 auto; }
}
.lp-about-copy {
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 1.75;
  color: var(--color-body);
  margin: 0 0 16px;
  max-width: 560px;
}
.lp-highlights { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 14px; }
.lp-highlight-chip {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-body);
  font-size: 12.5px;
  font-weight: 500;
  color: var(--color-heading);
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-left: 3px solid var(--color-accent);
  border-radius: var(--radius-full);
  padding: 9px 18px;
}

/* ── Treatments ── */
.lp-treatments { background: var(--color-bg); padding: clamp(72px, 9vw, 112px) 0; }
.lp-treat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 8px;
}
@media (max-width: 900px) { .lp-treat-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .lp-treat-grid { grid-template-columns: 1fr; } }
.lp-treat-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 4 / 5;
  box-shadow: 0 4px 20px rgba(0,0,0,0.14);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}
.lp-treat-card:hover { transform: translateY(-5px); box-shadow: 0 14px 40px rgba(0,0,0,0.22); }
.lp-treat-img-wrap { position: absolute; inset: 0; }
.lp-treat-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.78) 100%);
}
.lp-treat-name {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  padding: 18px 20px;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 17px;
  color: #ffffff;
  letter-spacing: -0.01em;
}
.lp-treat-footer { text-align: center; margin-top: 44px; }
.lp-outline-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 32px;
  border-radius: var(--radius-full);
  border: 1.5px solid var(--color-accent);
  color: var(--color-accent);
  background: transparent;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
}
.lp-outline-btn:hover { background: var(--color-accent); color: #ffffff; transform: translateY(-1px); }

/* ── Testimonials (dark) ── */
.lp-testimonials { position: relative; background: #0f0b04; overflow: hidden; }
.lp-tm-inner { padding: 0 clamp(20px, 5vw, 56px) clamp(72px, 9vw, 112px); max-width: 1200px; margin: 0 auto; }
.lp-tm-header { text-align: center; margin-bottom: clamp(40px, 5vw, 64px); }
.lp-tm-eyebrow {
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
.lp-tm-eyebrow::before, .lp-tm-eyebrow::after {
  content: "";
  display: block;
  width: 32px;
  height: 1px;
  background: var(--color-accent);
  opacity: 0.5;
}
.lp-tm-heading {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: clamp(28px, 3.6vw, 44px);
  letter-spacing: -0.03em;
  line-height: 1.15;
  color: #ffffff;
  margin: 0;
}
.lp-tm-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
@media (max-width: 900px) {
  .lp-tm-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
}
.lp-tm-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(184,145,42,0.18);
  border-radius: 16px;
  padding: 28px 26px;
}
.lp-tm-stars { color: var(--color-accent); font-size: 14px; letter-spacing: 2px; margin-bottom: 14px; }
.lp-tm-quote {
  font-family: var(--font-body);
  font-style: italic;
  font-size: 14.5px;
  color: rgba(255,255,255,0.78);
  line-height: 1.7;
  margin: 0 0 18px;
}
.lp-tm-name { font-family: var(--font-heading); font-size: 14px; font-weight: 600; color: #ffffff; }

/* ── Final CTA ── */
.lp-cta-section { background: var(--color-bg); padding: 0 24px clamp(80px, 9vw, 120px); }
.lp-cta-card {
  max-width: 880px;
  margin: 0 auto;
  text-align: center;
  border-radius: 28px;
  padding: clamp(48px, 6vw, 72px) clamp(32px, 6vw, 64px);
  background: linear-gradient(135deg, #8B6914 0%, #B8912A 40%, #9A7820 100%);
  box-shadow: 0 32px 80px rgba(28,24,18,0.22), 0 8px 24px rgba(28,24,18,0.14);
}
.lp-cta-label {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.85);
  display: block;
  margin-bottom: 18px;
}
.lp-cta-heading {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: clamp(28px, 4vw, 42px);
  color: #ffffff;
  line-height: 1.2;
  letter-spacing: -0.03em;
  margin: 0 0 16px;
}
.lp-cta-sub {
  font-family: var(--font-body);
  font-size: 15px;
  color: rgba(255,255,255,0.88);
  line-height: 1.7;
  max-width: 480px;
  margin: 0 auto 32px;
}
.lp-cta-row { display: flex; align-items: center; justify-content: center; gap: 14px; flex-wrap: wrap; }
.lp-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: var(--radius-full);
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  min-height: 48px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}
.lp-cta-btn:hover { transform: translateY(-2px); }
.lp-cta-btn-wa { background: #ffffff; color: #1a7a3a; box-shadow: 0 4px 24px rgba(0,0,0,0.18); }
.lp-cta-btn-wa:hover { background: rgba(255,255,255,0.92); }
.lp-cta-btn-call { background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.4); color: #ffffff; }
.lp-cta-btn-call:hover { background: rgba(255,255,255,0.22); }

/* ── Reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  .lp-hero-btn, .lp-treat-card, .lp-direction-link, .lp-cta-btn, .lp-outline-btn {
    transition: none !important;
  }
  .lp-treat-card:hover { transform: none !important; }
}
`;

export default function LocationPage({ location }: { location: Location }) {
  const reduce = useReducedMotion();
  const sa = reduce !== true;
  const featuredTestimonials = TESTIMONIALS.slice(0, 3);

  return (
    <>
      <style>{STYLES}</style>

      {/* Hero */}
      <section className="lp-hero" aria-label={`${location.fullName} clinic header`}>
        <div className="lp-hero-overlay" aria-hidden="true" />
        <div className="lp-hero-grain" aria-hidden="true" />

        <div className="lp-hero-inner">
          <motion.div
            initial={sa ? { opacity: 0, y: 24 } : undefined}
            animate={sa ? { opacity: 1, y: 0 } : undefined}
            transition={sa ? { duration: 0.65, ease: EASE } : undefined}
          >
            <span className="lp-hero-eyebrow">Our Clinics · {location.city}</span>
            <h1 className="lp-hero-h1">
              Derma Dynamics<br /><em>{location.city}</em>
            </h1>
            <p className="lp-hero-tagline">{location.tagline}</p>
            <div className="lp-hero-actions">
              <a
                href={location.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="lp-hero-btn lp-hero-btn-wa"
                aria-label={`WhatsApp ${location.fullName}`}
              >
                <WhatsAppIcon /> WhatsApp Us
              </a>
              <a
                href={location.phone.tel}
                className="lp-hero-btn lp-hero-btn-call"
                aria-label={`Call ${location.fullName}`}
              >
                <Phone size={15} aria-hidden="true" /> Call {location.phone.display}
              </a>
            </div>
          </motion.div>

          <motion.div
            className="lp-hero-card-wrap"
            initial={sa ? { opacity: 0, y: 32 } : undefined}
            animate={sa ? { opacity: 1, y: 0 } : undefined}
            transition={sa ? { duration: 0.7, ease: EASE, delay: 0.2 } : undefined}
          >
            <div className="lp-hero-card">
              <span className="lp-hero-card-label">Visit Us</span>
              <div className="lp-hero-card-row">
                <MapPin size={15} className="lp-hero-card-icon" aria-hidden="true" />
                <span>
                  {location.address}<br />
                  <span className="lp-hero-card-note">{location.addressNote}</span>
                </span>
              </div>
              <div className="lp-hero-card-row">
                <Clock size={15} className="lp-hero-card-icon" aria-hidden="true" />
                <span>{location.hours}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About / Why visit */}
      <section className="lp-about" aria-labelledby="lp-about-heading">
        <div className="lp-container lp-about-grid">
          <motion.div
            className="lp-about-media-wrap"
            initial={sa ? { opacity: 0, y: 28 } : undefined}
            whileInView={sa ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, amount: 0.2 }}
            transition={sa ? { duration: 0.6, ease: EASE } : undefined}
          >
            <div className="lp-about-media">
              <Image
                src={location.aboutImage}
                alt={location.aboutImageAlt}
                fill
                unoptimized
                style={{ objectFit: "cover", objectPosition: "center center" }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={sa ? { opacity: 0, y: 28 } : undefined}
            whileInView={sa ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, amount: 0.2 }}
            transition={sa ? { duration: 0.6, ease: EASE, delay: 0.1 } : undefined}
          >
            <span className="lp-section-label">Why Visit This Clinic</span>
            <h2 id="lp-about-heading" className="lp-section-title">
              What makes our {location.city} branch feel like home
            </h2>
            {location.about.map((paragraph, i) => (
              <p key={i} className="lp-about-copy">{paragraph}</p>
            ))}
            <div className="lp-highlights">
              {location.highlights.map((highlight) => (
                <span key={highlight} className="lp-highlight-chip">{highlight}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Treatments here */}
      <section className="lp-treatments" aria-labelledby="lp-treat-heading">
        <div className="lp-container">
          <motion.div
            initial={sa ? { opacity: 0, y: 24 } : undefined}
            whileInView={sa ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, amount: 0.3 }}
            transition={sa ? { duration: 0.55, ease: EASE } : undefined}
          >
            <span className="lp-section-label">Treatments Here</span>
            <h2 id="lp-treat-heading" className="lp-section-title">
              Popular at our {location.city} clinic
            </h2>
          </motion.div>

          <div className="lp-treat-grid">
            {TREATMENTS.map((treatment, i) => (
              <motion.div
                key={treatment.name}
                className="lp-treat-card"
                initial={sa ? { opacity: 0, y: 26 } : undefined}
                whileInView={sa ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, amount: 0.15 }}
                transition={sa ? { duration: 0.5, ease: EASE, delay: i * 0.06 } : undefined}
              >
                <div className="lp-treat-img-wrap">
                  <Image
                    src={treatment.image}
                    alt={treatment.name}
                    fill
                    unoptimized
                    loading="lazy"
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                  />
                </div>
                <div className="lp-treat-overlay" aria-hidden="true" />
                <span className="lp-treat-name">{treatment.name}</span>
              </motion.div>
            ))}
          </div>

          <div className="lp-treat-footer">
            <Link href="/services" className="lp-outline-btn">
              See All Our Treatments →
            </Link>
          </div>
        </div>
      </section>

      {/* What our patients say */}
      <section className="lp-testimonials" aria-labelledby="lp-tm-heading">
        <div className="lp-tm-inner">
          <motion.div
            className="lp-tm-header"
            initial={sa ? { opacity: 0, y: 24 } : undefined}
            whileInView={sa ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, amount: 0.3 }}
            transition={sa ? { duration: 0.6, ease: EASE } : undefined}
          >
            <p className="lp-tm-eyebrow">What Our Patients Say</p>
            <h2 id="lp-tm-heading" className="lp-tm-heading">
              Trusted by hundreds of patients across {location.city}.
            </h2>
          </motion.div>

          <div className="lp-tm-grid">
            {featuredTestimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                className="lp-tm-card"
                initial={sa ? { opacity: 0, y: 26 } : undefined}
                whileInView={sa ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, amount: 0.2 }}
                transition={sa ? { duration: 0.5, ease: EASE, delay: i * 0.08 } : undefined}
              >
                <div className="lp-tm-stars" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {"★".repeat(testimonial.rating)}
                </div>
                <p className="lp-tm-quote">&ldquo;{testimonial.quote}&rdquo;</p>
                <span className="lp-tm-name">{testimonial.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="lp-cta-section" aria-labelledby="lp-cta-heading">
        <motion.div
          className="lp-cta-card"
          initial={sa ? { opacity: 0, y: 32 } : undefined}
          whileInView={sa ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true, amount: 0.3 }}
          transition={sa ? { duration: 0.6, ease: EASE } : undefined}
        >
          <span className="lp-cta-label">Book Your Visit</span>
          <h2 id="lp-cta-heading" className="lp-cta-heading">
            Ready to visit our {location.city} clinic?
          </h2>
          <p className="lp-cta-sub">
            Message us on WhatsApp or give us a call. We will help you find a time
            that works and the right treatment for what you need.
          </p>
          <div className="lp-cta-row">
            <a
              href={location.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="lp-cta-btn lp-cta-btn-wa"
              aria-label={`WhatsApp ${location.fullName}`}
            >
              <WhatsAppIcon /> WhatsApp {location.city}
            </a>
            <a
              href={location.phone.tel}
              className="lp-cta-btn lp-cta-btn-call"
              aria-label={`Call ${location.fullName}`}
            >
              <Phone size={15} aria-hidden="true" /> Call {location.phone.display}
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
