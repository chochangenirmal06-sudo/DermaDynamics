"use client";

import { motion, useReducedMotion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "I was totally scared about my face, frustrated and depressed because of pimples. But you helped me get clear, glowing skin with smooth texture in just 2 months. Can't imagine how fast I healed. Life-savers, truly.",
    name: "Pankaj Roniyar",
    location: "Pokhara",
    stars: 5,
    initials: "PR",
  },
  {
    quote:
      "I had acne for almost 5 years. After just one round of treatment, everything cleared up. Great facility, very welcoming team. Best clinic.",
    name: "Dikshya Pandey",
    location: "Pokhara",
    stars: 5,
    initials: "DP",
  },
  {
    quote:
      "Nepal's best skin clinic. The entire team, as well as the doctor, has a lot of experience. I am quite pleased with every service provided.",
    name: "Pradeep Adhikari",
    location: "Pokhara",
    stars: 5,
    initials: "PA",
  },
  {
    quote:
      "Best skin clinic for skin treatment. Highly recommend visiting Dr. Anil Kumar Bhatta, the best skin doctor in Nepal.",
    name: "Barsha Kunwar",
    location: "Pokhara",
    stars: 5,
    initials: "BK",
  },
  {
    quote:
      "I'd recommend this place to anyone with skin issues. Wide range of treatments at affordable prices, and every member of the team is experienced and professional.",
    name: "Kamal Malla",
    location: "Pokhara",
    stars: 5,
    initials: "KM",
  },
  {
    quote:
      "My 5-year acne problem solved in just 2 months. Best service ever. Best clinic.",
    name: "Richa Shrestha",
    location: "Pokhara",
    stars: 5,
    initials: "RS",
  },
  {
    quote:
      "Experience is very good. Staff is highly experienced. If you have any skin issue, please visit. I'm very happy with the care I received.",
    name: "Dilip",
    location: "Pokhara",
    stars: 5,
    initials: "D",
  },
  {
    quote:
      "Visit once and you'll automatically come back. Such a wonderful place.",
    name: "Bijaya Giri",
    location: "Pokhara",
    stars: 5,
    initials: "BG",
  },
];

function TestimonialCard({
  t,
  ariaHidden,
  id,
}: {
  t: (typeof TESTIMONIALS)[0];
  ariaHidden?: boolean;
  id: string;
}) {
  return (
    <div className="tm-card" key={id} aria-hidden={ariaHidden || undefined}>
      <div className="tm-stars" aria-label={`${t.stars} out of 5 stars`}>
        {"★".repeat(t.stars)}
      </div>
      <p className="tm-quote">{t.quote}</p>
      <div className="tm-footer">
        <div className="tm-avatar" aria-hidden="true">{t.initials}</div>
        <div className="tm-meta">
          <span className="tm-name">{t.name}</span>
          <span className="tm-doctor">Google Review</span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const reduce = useReducedMotion();
  const shouldAnimate = reduce !== true;

  return (
    <section
      aria-labelledby="tm-heading"
      style={{ backgroundColor: "var(--color-bg)", overflow: "hidden" }}
    >
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* ── Container ── */
        .tm-container {
          max-width: 1200px;
          margin: 0 auto;
          padding-left: 48px;
          padding-right: 48px;
          box-sizing: border-box;
        }
        @media (max-width: 767px) {
          .tm-container { padding-left: 24px; padding-right: 24px; }
        }

        /* ── Section header ── */
        .tm-header {
          text-align: center;
          padding-top: 96px;
          padding-bottom: 64px;
        }
        @media (max-width: 767px) {
          .tm-header { padding-top: 64px; padding-bottom: 48px; }
        }
        .tm-label {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-accent);
          display: block;
          margin-bottom: 12px;
        }
        .tm-divider {
          display: block;
          width: 40px;
          height: 1px;
          background: var(--color-accent);
          margin: 0 auto 20px;
          opacity: 0.45;
        }
        .tm-heading {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: clamp(36px, 4vw, 52px);
          letter-spacing: -0.03em;
          color: var(--color-heading);
          line-height: 1.15;
          margin: 0 0 14px;
        }
        .tm-subline {
          font-family: var(--font-heading);
          font-weight: 400;
          font-size: 18px;
          color: var(--color-decorative);
          margin: 0 0 20px;
        }
        .tm-google-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: var(--color-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-full);
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--color-body);
        }
        .tm-google-stars {
          color: var(--color-accent);
          letter-spacing: 1px;
        }

        /* ── Marquee rows area ── */
        .tm-marquee-area {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* ── Row wrap (overflow + fade mask) ── */
        .tm-row-wrap {
          overflow: hidden;
          mask-image: linear-gradient(
            to right,
            transparent 0px,
            black 120px,
            black calc(100% - 120px),
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0px,
            black 120px,
            black calc(100% - 120px),
            transparent 100%
          );
        }

        /* ── Scrolling track ── */
        .tm-track {
          display: flex;
          width: max-content;
          gap: 24px;
          will-change: transform;
        }
        .tm-track-left  { animation: marquee-left  52s linear infinite; }
        .tm-track-right { animation: marquee-right 60s linear infinite; }

        /* Pause only the row being hovered — other row keeps scrolling */
        .tm-row-wrap:hover .tm-track {
          animation-play-state: paused;
        }

        /* ── Card ── */
        .tm-card {
          flex-shrink: 0;
          width: 380px;
          background: var(--color-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 28px;
          box-shadow: var(--shadow-card);
          display: flex;
          flex-direction: column;
          gap: 16px;
          box-sizing: border-box;
        }
        .tm-quote-icon {
          font-family: var(--font-heading);
          font-size: 64px;
          line-height: 0.7;
          color: var(--color-accent);
          opacity: 0.22;
          display: block;
          user-select: none;
        }
        .tm-quote {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 15px;
          line-height: 1.7;
          color: var(--color-body);
          flex: 1;
          margin: 0;
        }
        .tm-footer {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .tm-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          color: var(--color-accent);
          flex-shrink: 0;
        }
        .tm-meta {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }
        .tm-name {
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 14px;
          color: var(--color-heading);
          line-height: 1.2;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .tm-doctor {
          font-family: var(--font-body);
          font-size: 12px;
          color: var(--color-body);
          opacity: 0.65;
        }
        .tm-stars {
          font-size: 14px;
          color: var(--color-accent);
          letter-spacing: 2px;
        }

        /* ── CTA strip ── */
        .tm-cta {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          padding-top: 64px;
          padding-bottom: 96px;
        }
        @media (max-width: 767px) {
          .tm-cta { padding-top: 48px; padding-bottom: 64px; }
        }
        .tm-cta-text {
          font-family: var(--font-body);
          font-size: 15px;
          color: var(--color-body);
          opacity: 0.8;
          margin: 0;
        }
        .tm-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: var(--color-accent);
          color: #fff;
          border-radius: 8px;
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 15px;
          text-decoration: none;
          min-height: 44px;
          box-shadow: 0 4px 20px rgba(184,145,42,0.22);
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .tm-cta-btn:hover {
          background: var(--color-accent-dark);
          transform: translateY(-1px);
        }
        .tm-cta-btn:focus-visible {
          outline: 2px solid var(--color-whatsapp);
          outline-offset: 3px;
        }

        /* ── Mobile overrides ── */
        @media (max-width: 767px) {
          .tm-card  { width: 300px; }
          .tm-track { gap: 16px; }
          .tm-row-wrap {
            mask-image: linear-gradient(
              to right,
              transparent 0px,
              black 60px,
              black calc(100% - 60px),
              transparent 100%
            );
            -webkit-mask-image: linear-gradient(
              to right,
              transparent 0px,
              black 60px,
              black calc(100% - 60px),
              transparent 100%
            );
          }
        }

        /* ── Reduced motion ── */
        @media (prefers-reduced-motion: reduce) {
          .tm-track-left,
          .tm-track-right {
            animation-play-state: paused !important;
          }
        }
      `}</style>

      {/* ── Header ── */}
      <div className="tm-container">
        <motion.div
          className="tm-header"
          initial={shouldAnimate ? { opacity: 0, y: 32 } : undefined}
          whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true, margin: "-80px" }}
          transition={shouldAnimate ? { duration: 0.6, ease: "easeOut" } : undefined}
        >
          <span className="tm-label">What Our Patients Say</span>
          <span className="tm-divider" aria-hidden="true" />
          <h2 id="tm-heading" className="tm-heading">
            Trusted by hundreds of patients across Nepal.
          </h2>
          <div className="tm-google-pill">
            <span className="tm-google-stars" aria-hidden="true">★★★★★</span>
            <span>5.0 rating · Verified Google Reviews</span>
          </div>
        </motion.div>
      </div>

      {/* ── Marquee rows — full viewport width ── */}
      <div className="tm-marquee-area" aria-label="Patient testimonials">
        {/* Row 1: scrolls left */}
        <div className="tm-row-wrap">
          <div className="tm-track tm-track-left">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={`r1a-${i}`} id={`r1a-${i}`} t={t} />
            ))}
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={`r1b-${i}`} id={`r1b-${i}`} t={t} ariaHidden />
            ))}
          </div>
        </div>

        {/* Row 2: scrolls right (fully decorative) */}
        <div className="tm-row-wrap" aria-hidden="true">
          <div className="tm-track tm-track-right">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={`r2a-${i}`} id={`r2a-${i}`} t={t} ariaHidden />
            ))}
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={`r2b-${i}`} id={`r2b-${i}`} t={t} ariaHidden />
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA strip ── */}
      <div className="tm-container">
        <motion.div
          className="tm-cta"
          initial={shouldAnimate ? { opacity: 0, y: 24 } : undefined}
          whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true, margin: "-60px" }}
          transition={shouldAnimate ? { duration: 0.6, ease: "easeOut" } : undefined}
        >
          <p className="tm-cta-text">
            Join hundreds of patients who&apos;ve already transformed their confidence.
          </p>
          <a
            href="https://wa.me/97761591803"
            target="_blank"
            rel="noopener noreferrer"
            className="tm-cta-btn"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Book Your Appointment →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
