"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useAnimate, useInView } from "framer-motion";
import { Crosshair, Zap, TrendingUp } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const H2_WORDS = "The Gold Standard of Korean Innovation".split(" ");

const FEATURES = [
  {
    num: 1,
    heading: "Precision",
    body: "Every protocol is calibrated to your exact skin profile. No two treatment plans are alike — because no two patients are.",
    Icon: Crosshair,
  },
  {
    num: 2,
    heading: "Innovation",
    body: "Korean medical-grade devices and actives, available only through certified clinical channels. The technology Seoul trusts — here in Pokhara.",
    Icon: Zap,
  },
  {
    num: 3,
    heading: "Results",
    body: "We measure success in visible outcomes. Beautiful results that last long after your visit — backed by science, delivered with care.",
    Icon: TrendingUp,
  },
] as const;

// ─── Feature column ───────────────────────────────────────────────────────────

function FeatureColumn({
  feature,
  index,
  shouldAnimate,
  triggered,
}: {
  feature: (typeof FEATURES)[number];
  index: number;
  shouldAnimate: boolean;
  triggered: boolean;
}) {
  const [count, setCount] = useState(shouldAnimate ? 0 : feature.num);
  const started = useRef(false);

  useEffect(() => {
    if (!triggered || started.current) return;
    if (!shouldAnimate) {
      setCount(feature.num);
      return;
    }
    started.current = true;
    const duration = 900;
    const t0 = Date.now();
    const tick = () => {
      const p = Math.min((Date.now() - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * feature.num));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [triggered, shouldAnimate, feature.num]);

  const display = String(count).padStart(2, "0");
  const { Icon } = feature;

  return (
    <motion.div
      className={`kt-col kt-col-${index + 1}`}
      initial={shouldAnimate ? { opacity: 0, y: 28 } : undefined}
      whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: "-60px" }}
      transition={
        shouldAnimate
          ? { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }
          : undefined
      }
    >
      <span className="kt-ghost-num" aria-hidden="true">
        {display}
      </span>
      <motion.div
        className="kt-col-rule"
        aria-hidden="true"
        initial={shouldAnimate ? { scaleX: 0 } : undefined}
        whileInView={shouldAnimate ? { scaleX: 1 } : undefined}
        viewport={{ once: true }}
        transition={
          shouldAnimate
            ? { duration: 0.5, ease: "easeOut", delay: index * 0.15 + 0.25 }
            : undefined
        }
        style={{ transformOrigin: "left center" }}
      />
      <h3 className="kt-col-heading">{feature.heading}</h3>
      <p className="kt-col-body">{feature.body}</p>
      <Icon size={24} className="kt-col-icon" aria-hidden="true" />
    </motion.div>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const STYLES = `
.kt-section {
  position: relative;
  background: linear-gradient(135deg, #8B6914 0%, #B8912A 40%, #9A7820 100%);
  padding: 80px 80px;
  box-sizing: border-box;
  overflow: hidden;
}

/* Grain overlay */
.kt-grain {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity: 0.03;
  pointer-events: none;
  z-index: 0;
}

/* ── Top row ── */
.kt-top-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 48px;
  position: relative;
  z-index: 1;
}
.kt-top-left {
  display: flex;
  flex-direction: column;
}
.kt-label {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.70);
  margin-bottom: 20px;
  display: block;
}
.kt-h2 {
  font-family: var(--font-heading);
  font-size: clamp(28px, 3vw, 40px);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #ffffff;
  line-height: 1.15;
  max-width: 560px;
  margin: 0;
}
.kt-h2-word-wrap {
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
  margin-right: 0.25em;
  line-height: 1.25;
}
.kt-h2-word {
  display: inline-block;
}
.kt-top-right {
  font-family: var(--font-heading);
  font-style: italic;
  font-size: 18px;
  color: rgba(255,255,255,0.82);
  max-width: 280px;
  text-align: right;
  line-height: 1.5;
  margin: 0;
  margin-bottom: 4px;
  align-self: flex-end;
}

/* ── Grid (5 tracks: col | divider | col | divider | col) ── */
.kt-grid {
  display: grid;
  grid-template-columns: 1.2fr 1px 0.9fr 1px 1fr;
  align-items: stretch;
  position: relative;
  z-index: 1;
}
.kt-vdivider {
  width: 1px;
  background: rgba(255,255,255,0.22);
  align-self: stretch;
}

/* ── Columns ── */
.kt-col {
  display: flex;
  flex-direction: column;
  cursor: default;
}
.kt-col-1 { padding: 32px 40px 32px 0; }
.kt-col-2 { padding: 32px 40px; }
.kt-col-3 { padding: 32px 0 32px 40px; }

/* Ghost number */
.kt-ghost-num {
  font-family: var(--font-heading);
  font-size: 72px;
  font-weight: 700;
  color: rgba(255,255,255,1);
  opacity: 0.15;
  line-height: 1;
  margin-bottom: -16px;
  display: block;
  transition: opacity 0.4s ease;
  font-variant-numeric: tabular-nums;
}
.kt-col:hover .kt-ghost-num { opacity: 0.28; }

/* Gold rule */
.kt-col-rule {
  width: 40px;
  height: 1px;
  background: rgba(255,255,255,0.70);
  margin-bottom: 28px;
  flex-shrink: 0;
  transition: width 0.4s ease;
}
.kt-col:hover .kt-col-rule { width: 72px; }

/* Heading */
.kt-col-heading {
  font-family: var(--font-heading);
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
  margin: 0 0 16px;
}

/* Body */
.kt-col-body {
  font-family: var(--font-body);
  font-size: 15px;
  color: rgba(255,255,255,0.82);
  line-height: 1.75;
  margin: 0;
  flex: 1;
}

/* Icon */
.kt-col-icon {
  color: rgba(255,255,255,0.70);
  margin-top: auto;
  padding-top: 32px;
  opacity: 0.45;
  flex-shrink: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.kt-col:hover .kt-col-icon {
  opacity: 1;
  transform: scale(1.2);
}

/* ── Tablet (below 1024px): stack columns ── */
@media (max-width: 1023px) {
  .kt-section { padding: 60px 40px; }
  .kt-top-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 40px;
  }
  .kt-top-right { text-align: left; max-width: 100%; align-self: auto; margin-bottom: 0; }
  .kt-grid { grid-template-columns: 1fr; }
  .kt-vdivider { width: 100%; height: 1px; align-self: auto; }
  .kt-col-1,
  .kt-col-2,
  .kt-col-3 { padding: 28px 0; }
}

/* ── Mobile ── */
@media (max-width: 767px) {
  .kt-section { padding: 60px 24px; }
  .kt-top-row { margin-bottom: 36px; }
  .kt-col-1,
  .kt-col-2,
  .kt-col-3 { padding: 24px 0; }
}

/* ── Reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  .kt-ghost-num,
  .kt-col-rule,
  .kt-col-icon { transition: none !important; }
}
`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function KoreanTech() {
  const reduce = useReducedMotion();
  const sa = reduce !== true;

  const [triggered, setTriggered] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  // Imperative quote entry + infinite breathing float
  const [quoteScope, animateQuote] = useAnimate<HTMLParagraphElement>();
  const quoteInView = useInView(quoteScope, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!quoteInView || !sa) return;
    const entryDelay = H2_WORDS.length * 0.07 + 0.2;
    const run = async () => {
      await animateQuote(
        quoteScope.current,
        { opacity: 1, y: 0 },
        { duration: 0.6, delay: entryDelay, ease: [0.16, 1, 0.3, 1] }
      );
      animateQuote(quoteScope.current, { y: [0, -5, 0] }, {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      });
    };
    run();
  }, [quoteInView, sa, animateQuote, quoteScope]);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section aria-labelledby="kt-heading" className="kt-section">
      <style>{STYLES}</style>
      <div className="kt-grain" aria-hidden="true" />

      {/* ── Top row ─────────────────────────────────────────────────── */}
      <div className="kt-top-row">
        <div className="kt-top-left">
          <motion.span
            className="kt-label"
            initial={sa ? { opacity: 0, y: 10 } : undefined}
            whileInView={sa ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true }}
            transition={sa ? { duration: 0.5, ease: [0.16, 1, 0.3, 1] } : undefined}
          >
            WHY PATIENTS CHOOSE US
          </motion.span>

          <h2
            id="kt-heading"
            className="kt-h2"
            aria-label="The Gold Standard of Korean Innovation"
          >
            {H2_WORDS.map((word, i) => (
              <span key={i} className="kt-h2-word-wrap" aria-hidden="true">
                <motion.span
                  className="kt-h2-word"
                  initial={sa ? { opacity: 0, y: "100%" } : undefined}
                  whileInView={sa ? { opacity: 1, y: 0 } : undefined}
                  viewport={{ once: true }}
                  transition={
                    sa
                      ? { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }
                      : undefined
                  }
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h2>
        </div>

        <motion.p
          ref={quoteScope}
          className="kt-top-right"
          initial={sa ? { opacity: 0, y: 8 } : undefined}
        >
          <em>
            The same protocols used in Seoul&apos;s most prestigious clinics —
            now in Pokhara.
          </em>
        </motion.p>
      </div>

      {/* ── Feature grid ────────────────────────────────────────────── */}
      <div className="kt-grid" ref={gridRef}>
        <FeatureColumn
          feature={FEATURES[0]}
          index={0}
          shouldAnimate={sa}
          triggered={triggered}
        />
        <motion.div
          className="kt-vdivider"
          aria-hidden="true"
          initial={sa ? { scaleY: 0 } : undefined}
          whileInView={sa ? { scaleY: 1 } : undefined}
          viewport={{ once: true }}
          transition={sa ? { duration: 0.9, ease: "easeOut", delay: 0.5 } : undefined}
          style={{ transformOrigin: "top" }}
        />
        <FeatureColumn
          feature={FEATURES[1]}
          index={1}
          shouldAnimate={sa}
          triggered={triggered}
        />
        <motion.div
          className="kt-vdivider"
          aria-hidden="true"
          initial={sa ? { scaleY: 0 } : undefined}
          whileInView={sa ? { scaleY: 1 } : undefined}
          viewport={{ once: true }}
          transition={sa ? { duration: 0.9, ease: "easeOut", delay: 0.65 } : undefined}
          style={{ transformOrigin: "top" }}
        />
        <FeatureColumn
          feature={FEATURES[2]}
          index={2}
          shouldAnimate={sa}
          triggered={triggered}
        />
      </div>
    </section>
  );
}
