"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { CONTACT_INFO, SERVICES, SECONDARY_SERVICES } from "@/lib/constants";
import FAQBranches from "@/components/sections/FAQBranches";

// ─── Data ─────────────────────────────────────────────────────────────────────

const H1_WORDS = "Let's Start Your Skin Journey.".split(" ");

const INFO_ITEMS = [
  {
    Icon: MessageCircle,
    label: "WhatsApp",
    value: "Message us — fastest reply",
    href: CONTACT_INFO.whatsapp,
    external: true,
  },
  {
    Icon: Phone,
    label: "Call",
    value: CONTACT_INFO.phone,
    href: "tel:+97761591803",
    external: false,
  },
  {
    Icon: Mail,
    label: "Email",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
    external: false,
  },
  {
    Icon: MapPin,
    label: "Visit",
    value: CONTACT_INFO.address,
    href: "https://maps.google.com/?q=New+Road+Pokhara+Nepal",
    external: true,
  },
  {
    Icon: Clock,
    label: "Hours",
    value: `${CONTACT_INFO.hoursWeekday}\n${CONTACT_INFO.hoursSaturday}`,
    href: null,
    external: false,
  },
] as const;

const INIT = { name: "", phone: "", email: "", service: "", message: "" };

// ─── Styles ───────────────────────────────────────────────────────────────────

const STYLES = `
/* ── Hero ── */
.cp-hero {
  position: relative;
  background: linear-gradient(135deg, #8B6914 0%, #B8912A 40%, #9A7820 100%);
  padding: 96px 24px 80px;
  overflow: hidden;
  box-sizing: border-box;
}
.cp-hero-grain {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity: 0.04;
  pointer-events: none;
}
.cp-hero-accent-line {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255,255,255,0.30), transparent);
}
.cp-hero-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
}
@media (min-width: 1024px) { .cp-hero-inner { padding: 0 48px; } }

.cp-hero-label {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.70);
  display: block;
  margin-bottom: 20px;
}
.cp-hero-h1 {
  font-family: var(--font-heading);
  font-size: clamp(38px, 5.5vw, 64px);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #ffffff;
  line-height: 1.1;
  margin: 0 0 24px;
  max-width: 720px;
}
.cp-word-wrap {
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
  margin-right: 0.22em;
  line-height: 1.15;
}
.cp-word { display: inline-block; }
.cp-hero-sub {
  font-family: var(--font-heading);
  font-size: clamp(16px, 1.8vw, 20px);
  font-weight: 400;
  color: rgba(255,255,255,0.84);
  line-height: 1.6;
  margin: 0;
  max-width: 560px;
}

/* ── Form section ── */
.cp-section {
  background: var(--color-bg);
  padding: 88px 0 100px;
  box-sizing: border-box;
  overflow-x: hidden;
}
.cp-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;
}
@media (min-width: 1024px) { .cp-container { padding: 0 48px; } }

.cp-split {
  display: grid;
  grid-template-columns: 1fr;
  gap: 56px;
}
.cp-split > * { min-width: 0; }
@media (min-width: 1024px) {
  .cp-split { grid-template-columns: 1fr 360px; gap: 80px; align-items: start; }
}

/* ── Form column ── */
.cp-form-title {
  font-family: var(--font-heading);
  font-size: clamp(26px, 3vw, 36px);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--color-heading);
  line-height: 1.2;
  margin: 0 0 10px;
}
.cp-form-sub {
  font-family: var(--font-body);
  font-size: 15px;
  color: var(--color-body);
  line-height: 1.7;
  margin: 0 0 40px;
}

/* Field rows */
.cp-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
}
@media (min-width: 640px) { .cp-row { grid-template-columns: 1fr 1fr; gap: 20px; } }

.cp-field {
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
}
.cp-label {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  color: var(--color-heading);
  letter-spacing: 0.01em;
  margin-bottom: 8px;
}
.cp-optional {
  font-weight: 400;
  color: var(--color-body);
  font-size: 12px;
  margin-left: 4px;
}
.cp-input {
  font-family: var(--font-body);
  font-size: 15px;
  color: var(--color-heading);
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 14px 16px;
  outline: none;
  box-sizing: border-box;
  width: 100%;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  appearance: none;
  -webkit-appearance: none;
}
.cp-input::placeholder { color: var(--color-body); opacity: 0.55; }
.cp-input:focus {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(184,145,42,0.12);
}
.cp-select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%238A7550' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 40px;
  cursor: pointer;
}
.cp-textarea {
  resize: none;
  line-height: 1.6;
  min-height: 120px;
}

/* Submit */
.cp-submit {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--color-accent);
  color: #ffffff;
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 500;
  padding: 16px 32px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  min-height: 52px;
  touch-action: manipulation;
  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 16px rgba(184,145,42,0.28);
}
.cp-submit:hover {
  background: var(--color-accent-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(184,145,42,0.38);
}
.cp-submit:active { transform: translateY(0); }
.cp-submit-hint {
  font-family: var(--font-body);
  font-size: 12px;
  color: var(--color-body);
  margin-top: 12px;
  opacity: 0.7;
}

/* Success state */
.cp-success {
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
}
.cp-success-title {
  font-family: var(--font-heading);
  font-size: 22px;
  font-weight: 700;
  color: var(--color-heading);
  margin: 0;
}
.cp-success-sub {
  font-family: var(--font-body);
  font-size: 15px;
  color: var(--color-body);
  line-height: 1.6;
  margin: 0;
  max-width: 380px;
}
.cp-success-reset {
  font-family: var(--font-body);
  font-size: 13px;
  color: var(--color-accent);
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 0;
  text-decoration: underline;
  text-underline-offset: 3px;
  margin-top: 8px;
}

/* ── Info column ── */
.cp-info-sticky {
  position: sticky;
  top: 104px;
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 32px 28px;
  box-shadow: var(--shadow-card);
}
.cp-info-eyebrow {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin: 0 0 20px;
}
.cp-info-row {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 14px 0;
  border-bottom: 1px solid var(--color-border);
  text-decoration: none;
}
.cp-info-row:last-of-type { border-bottom: none; }
.cp-info-link {
  transition: opacity 0.2s ease;
  cursor: pointer;
}
.cp-info-link:hover { opacity: 0.72; }
.cp-info-icon {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  background: var(--color-bg-alt);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent);
  flex-shrink: 0;
  margin-top: 1px;
}
.cp-info-text {
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
}
.cp-info-label {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-body);
}
.cp-info-value {
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--color-heading);
  line-height: 1.5;
}


/* ── Responsive ── */
@media (max-width: 767px) {
  .cp-hero { padding: 72px 24px 64px; }
  .cp-section { padding: 64px 0 80px; }
  .cp-info-sticky { position: static; }
}

/* ── Reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  .cp-input, .cp-submit, .cp-info-link { transition: none !important; }
}
`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const reduce = useReducedMotion();
  const sa = reduce !== true;
  const [form, setForm] = useState(INIT);
  const [submitted, setSubmitted] = useState(false);

  const set =
    (k: keyof typeof INIT) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: { preventDefault(): void }) => {
    e.preventDefault();
    const msg = [
      `Hi! I'd like to book a consultation at Derma Dynamics.`,
      ``,
      `Name: ${form.name}`,
      form.phone ? `Phone: ${form.phone}` : "",
      form.email ? `Email: ${form.email}` : "",
      `Service: ${form.service || "General Consultation"}`,
      form.message ? `Notes: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(
      `https://wa.me/977061591803?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
    setSubmitted(true);
  };

  const entryDelay = 0.2 + H1_WORDS.length * 0.08 + 0.12;

  return (
    <>
      <style>{STYLES}</style>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="cp-hero" aria-label="Contact page header">
        <div className="cp-hero-grain" aria-hidden="true" />
        <div className="cp-hero-accent-line" aria-hidden="true" />

        <div className="cp-hero-inner">
          <motion.span
            className="cp-hero-label"
            initial={sa ? { opacity: 0, y: 10 } : undefined}
            animate={sa ? { opacity: 1, y: 0 } : undefined}
            transition={sa ? { duration: 0.5, delay: 0.1, ease: "easeOut" } : undefined}
          >
            Get in Touch
          </motion.span>

          <h1
            className="cp-hero-h1"
            aria-label="Let's Start Your Skin Journey."
          >
            {H1_WORDS.map((word, i) => (
              <span key={i} className="cp-word-wrap" aria-hidden="true">
                <motion.span
                  className="cp-word"
                  initial={sa ? { opacity: 0, y: "110%" } : undefined}
                  animate={sa ? { opacity: 1, y: 0 } : undefined}
                  transition={
                    sa
                      ? {
                          duration: 0.7,
                          ease: [0.16, 1, 0.3, 1],
                          delay: 0.2 + i * 0.08,
                        }
                      : undefined
                  }
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="cp-hero-sub"
            initial={sa ? { opacity: 0, y: 12 } : undefined}
            animate={sa ? { opacity: 1, y: 0 } : undefined}
            transition={sa ? { duration: 0.6, delay: entryDelay, ease: "easeOut" } : undefined}
          >
            <em>
              Fill in the form and we&apos;ll reach out within a few hours —
              or message us directly on WhatsApp.
            </em>
          </motion.p>
        </div>
      </section>

      {/* ── Form + Info ───────────────────────────────────────────────── */}
      <section className="cp-section" aria-labelledby="cp-form-heading">
        <div className="cp-container">
          <div className="cp-split">

            {/* Form */}
            <motion.div
              className="cp-form-col"
              initial={sa ? { opacity: 0, y: 32 } : undefined}
              whileInView={sa ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true, margin: "-60px" }}
              transition={sa ? { duration: 0.7, ease: [0.16, 1, 0.3, 1] } : undefined}
            >
              <h2 id="cp-form-heading" className="cp-form-title">
                Book a Consultation
              </h2>
              <p className="cp-form-sub">
                Tell us about yourself and what you&apos;re looking to achieve.
                We&apos;ll take it from there.
              </p>

              {submitted ? (
                <motion.div
                  className="cp-success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle
                      cx="22"
                      cy="22"
                      r="22"
                      fill="var(--color-accent)"
                      opacity="0.12"
                    />
                    <path
                      d="M13 22l7 7 11-14"
                      stroke="var(--color-accent)"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="cp-success-title">WhatsApp is ready for you!</p>
                  <p className="cp-success-sub">
                    Your details are pre-filled. Just tap Send and our team will
                    respond shortly.
                  </p>
                  <button
                    className="cp-success-reset"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>

                  {/* Name + Phone */}
                  <div className="cp-row">
                    <motion.div
                      className="cp-field"
                      initial={sa ? { opacity: 0, y: 16 } : undefined}
                      whileInView={sa ? { opacity: 1, y: 0 } : undefined}
                      viewport={{ once: true }}
                      transition={sa ? { duration: 0.5, ease: "easeOut", delay: 0.08 } : undefined}
                    >
                      <label className="cp-label" htmlFor="cp-name">
                        Full Name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="cp-name"
                        type="text"
                        className="cp-input"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={set("name")}
                        required
                        autoComplete="name"
                      />
                    </motion.div>

                    <motion.div
                      className="cp-field"
                      initial={sa ? { opacity: 0, y: 16 } : undefined}
                      whileInView={sa ? { opacity: 1, y: 0 } : undefined}
                      viewport={{ once: true }}
                      transition={sa ? { duration: 0.5, ease: "easeOut", delay: 0.16 } : undefined}
                    >
                      <label className="cp-label" htmlFor="cp-phone">
                        Phone / WhatsApp <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="cp-phone"
                        type="tel"
                        className="cp-input"
                        placeholder="+977 or local number"
                        value={form.phone}
                        onChange={set("phone")}
                        required
                        autoComplete="tel"
                      />
                    </motion.div>
                  </div>

                  {/* Email */}
                  <motion.div
                    className="cp-field"
                    initial={sa ? { opacity: 0, y: 16 } : undefined}
                    whileInView={sa ? { opacity: 1, y: 0 } : undefined}
                    viewport={{ once: true }}
                    transition={sa ? { duration: 0.5, ease: "easeOut", delay: 0.24 } : undefined}
                  >
                    <label className="cp-label" htmlFor="cp-email">
                      Email Address{" "}
                      <span className="cp-optional">(optional)</span>
                    </label>
                    <input
                      id="cp-email"
                      type="email"
                      className="cp-input"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={set("email")}
                      autoComplete="email"
                    />
                  </motion.div>

                  {/* Service */}
                  <motion.div
                    className="cp-field"
                    initial={sa ? { opacity: 0, y: 16 } : undefined}
                    whileInView={sa ? { opacity: 1, y: 0 } : undefined}
                    viewport={{ once: true }}
                    transition={sa ? { duration: 0.5, ease: "easeOut", delay: 0.32 } : undefined}
                  >
                    <label className="cp-label" htmlFor="cp-service">
                      Treatment Interested In
                    </label>
                    <select
                      id="cp-service"
                      className="cp-input cp-select"
                      value={form.service}
                      onChange={set("service")}
                    >
                      <option value="">Select a treatment…</option>
                      <optgroup label="Featured Treatments">
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Surgical &amp; Specialty">
                        {SECONDARY_SERVICES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </optgroup>
                      <option value="General Consultation / Not Sure Yet">
                        General Consultation / Not Sure Yet
                      </option>
                    </select>
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    className="cp-field"
                    initial={sa ? { opacity: 0, y: 16 } : undefined}
                    whileInView={sa ? { opacity: 1, y: 0 } : undefined}
                    viewport={{ once: true }}
                    transition={sa ? { duration: 0.5, ease: "easeOut", delay: 0.40 } : undefined}
                  >
                    <label className="cp-label" htmlFor="cp-message">
                      Anything else we should know?{" "}
                      <span className="cp-optional">(optional)</span>
                    </label>
                    <textarea
                      id="cp-message"
                      className="cp-input cp-textarea"
                      placeholder="Describe your skin concerns, previous treatments, or any questions…"
                      value={form.message}
                      onChange={set("message")}
                      rows={4}
                    />
                  </motion.div>

                  {/* Submit */}
                  <motion.div
                    initial={sa ? { opacity: 0, y: 16 } : undefined}
                    whileInView={sa ? { opacity: 1, y: 0 } : undefined}
                    viewport={{ once: true }}
                    transition={sa ? { duration: 0.5, ease: "easeOut", delay: 0.48 } : undefined}
                  >
                    <button type="submit" className="cp-submit">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M11.93 2C6.44 2 2 6.44 2 11.93c0 1.92.54 3.72 1.47 5.25L2 22l4.97-1.45C8.38 21.48 10.11 22 11.93 22 17.42 22 22 17.56 22 11.93 22 6.44 17.56 2 11.93 2zm0 18.16c-1.69 0-3.27-.49-4.6-1.34l-.33-.2-3.43 1 .98-3.33-.21-.35c-.93-1.36-1.47-3-1.47-4.74C2.87 7.01 7.01 2.87 11.93 2.87c4.91 0 9.07 4.14 9.07 9.06 0 4.91-4.14 9.07-9.07 9.07z" />
                      </svg>
                      Send via WhatsApp
                    </button>
                    <p className="cp-submit-hint">
                      Opens WhatsApp with your details pre-filled. No account
                      needed.
                    </p>
                  </motion.div>
                </form>
              )}
            </motion.div>

            {/* Info sidebar */}
            <motion.div
              className="cp-info-col"
              initial={sa ? { opacity: 0, x: 28 } : undefined}
              whileInView={sa ? { opacity: 1, x: 0 } : undefined}
              viewport={{ once: true, margin: "-60px" }}
              transition={sa ? { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.18 } : undefined}
            >
              <div className="cp-info-sticky">
                <p className="cp-info-eyebrow">Reach us directly</p>

                {INFO_ITEMS.map((item, i) => {
                  const { Icon } = item;
                  const inner = (
                    <>
                      <span className="cp-info-icon" aria-hidden="true">
                        <Icon size={15} />
                      </span>
                      <span className="cp-info-text">
                        <span className="cp-info-label">{item.label}</span>
                        <span
                          className="cp-info-value"
                          style={{ whiteSpace: "pre-line" }}
                        >
                          {item.value}
                        </span>
                      </span>
                    </>
                  );

                  return item.href ? (
                    <motion.a
                      key={i}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="cp-info-row cp-info-link"
                      initial={sa ? { opacity: 0, x: 12 } : undefined}
                      whileInView={sa ? { opacity: 1, x: 0 } : undefined}
                      viewport={{ once: true }}
                      transition={sa ? { duration: 0.4, ease: "easeOut", delay: 0.25 + i * 0.09 } : undefined}
                    >
                      {inner}
                    </motion.a>
                  ) : (
                    <motion.div
                      key={i}
                      className="cp-info-row"
                      initial={sa ? { opacity: 0, x: 12 } : undefined}
                      whileInView={sa ? { opacity: 1, x: 0 } : undefined}
                      viewport={{ once: true }}
                      transition={sa ? { duration: 0.4, ease: "easeOut", delay: 0.25 + i * 0.09 } : undefined}
                    >
                      {inner}
                    </motion.div>
                  );
                })}

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <FAQBranches />
    </>
  );
}
