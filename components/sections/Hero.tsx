"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { CONTACT_INFO } from "@/lib/constants";
import HeroVideoBackground from "@/components/sections/HeroVideoBackground";

const TYPEWRITER_TERMS = [
  "Acne & Scars",
  "Botox & Fillers",
  "Laser Hair Removal",
  "Hair PRP",
  "Skin Brightening",
];

function useTypewriter(terms: string[]) {
  const [displayed, setDisplayed] = useState("");
  const [termIdx, setTermIdx] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting">("typing");

  useEffect(() => {
    const term = terms[termIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayed.length < term.length) {
        timeout = setTimeout(() => setDisplayed(term.slice(0, displayed.length + 1)), 70);
      } else {
        timeout = setTimeout(() => setPhase("pause"), 1400);
      }
    } else if (phase === "pause") {
      timeout = setTimeout(() => setPhase("deleting"), 0);
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setTermIdx((i) => (i + 1) % terms.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, phase, termIdx, terms]);

  return displayed;
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);
  return isDesktop;
}

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let disposed = false;
    let animFrameId = 0;
    let renderer: import("three").WebGLRenderer | null = null;
    let geometry: import("three").BufferGeometry | null = null;
    let material: import("three").PointsMaterial | null = null;
    let onResize: (() => void) | null = null;

    import("three").then((THREE) => {
      if (disposed || !canvasRef.current) return;

      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      const scene = new THREE.Scene();
      const cam = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
      cam.position.z = 5;

      const rend = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
      rend.setSize(w, h);
      rend.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer = rend;

      const count = 60;
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        positions[i * 3]     = (Math.random() - 0.5) * 14;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry = geo;

      const mat = new THREE.PointsMaterial({
        color: 0xb8912a,
        size: 0.05,
        transparent: true,
        opacity: 0.25,
        sizeAttenuation: true,
      });
      material = mat;

      const points = new THREE.Points(geo, mat);
      scene.add(points);

      const handleResize = () => {
        if (!canvasRef.current) return;
        const nw = canvasRef.current.clientWidth;
        const nh = canvasRef.current.clientHeight;
        cam.aspect = nw / nh;
        cam.updateProjectionMatrix();
        rend.setSize(nw, nh);
      };
      onResize = handleResize;
      window.addEventListener("resize", handleResize);

      const animate = () => {
        if (disposed) return;
        animFrameId = requestAnimationFrame(animate);
        points.rotation.y += 0.0004;
        points.rotation.x += 0.0002;
        rend.render(scene, cam);
      };
      animate();
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(animFrameId);
      if (onResize) window.removeEventListener("resize", onResize);
      geometry?.dispose();
      material?.dispose();
      renderer?.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="block w-full h-full"
      aria-hidden="true"
    />
  );
}

function ScrollChevron() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const onScroll = () => setOpacity(1 - Math.min(window.scrollY / 80, 1));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      style={{ opacity }}
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" as const }}
      aria-hidden="true"
    >
      <ChevronDown size={28} strokeWidth={1.5} style={{ color: "rgba(250,248,245,0.60)" }} />
    </motion.div>
  );
}

const TRUST_BADGES = [
  "Specialist-registered with Nepal Medical Council",
  "PhD-qualified consultants",
  "29+ published scientific papers",
  "International training & awards",
];

export default function Hero() {
  const reduce = useReducedMotion();
  const isDesktop = useIsDesktop();
  const typewritten = useTypewriter(TYPEWRITER_TERMS);

  const delay = (d: number) => ({
    initial: reduce ? undefined : { y: 24, opacity: 0 },
    animate: reduce ? undefined : { y: 0, opacity: 1 },
    transition: reduce ? undefined : { duration: 0.7, ease: "easeOut" as const, delay: d },
  });

  return (
    <section
      className="relative flex flex-col justify-center overflow-hidden"
      style={{ minHeight: "calc(100vh - 140px)", backgroundColor: "#1C1812" }}
      aria-label="Hero"
    >
      {/* Layer 1 — background photo (always present; mobile fallback when videos hidden) */}
      <Image
        src="/brand_assets/heroimage.png"
        alt="Derma Dynamics luxury treatment room with mountain view, Pokhara"
        fill
        priority
        unoptimized
        className="object-cover object-center"
        style={{ zIndex: 0 }}
      />

      {/* Layer 1b — crossfading video background (desktop only, renders above Image) */}
      <HeroVideoBackground />

      {/* Layer 2 — dark warm gradient for text contrast */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(28,24,18,0.45) 0%, rgba(28,24,18,0.65) 60%, rgba(28,24,18,0.82) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Layer 3 — Three.js particle field — desktop + motion-OK only */}
      {isDesktop && !reduce && (
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }} aria-hidden="true">
          <ParticleField />
        </div>
      )}

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes badge-shine {
          0% { transform: translateX(-120%) skewX(-15deg); opacity: 0; }
          10% { opacity: 1; }
          60%, 100% { transform: translateX(220%) skewX(-15deg); opacity: 0; }
        }
        @keyframes badge-pulse {
          0%, 100% { box-shadow: 0 0 0px 0px rgba(184,145,42,0), inset 0 0 0px 0px rgba(184,145,42,0); }
          50% { box-shadow: 0 0 14px 2px rgba(184,145,42,0.18), inset 0 0 8px 0px rgba(184,145,42,0.08); }
        }
        @keyframes sparkle-spin {
          0% { transform: rotate(0deg) scale(1); opacity: 0.7; }
          50% { transform: rotate(180deg) scale(1.3); opacity: 1; }
          100% { transform: rotate(360deg) scale(1); opacity: 0.7; }
        }
      `}</style>

      {/* Content — full-width padded container, NOT percentage-clamped */}
      <div className="relative z-10 w-full px-6 md:px-14 lg:px-24 pt-16 pb-28 md:pb-32">

        {/* Text column */}
        <div className="max-w-[580px] lg:max-w-[680px]">

          {/* Label badge */}
          <motion.div className="mb-6 lg:mb-8" {...delay(0)}>
            <div
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(184,145,42,0.18) 0%, rgba(28,24,18,0.55) 100%)",
                border: "1px solid rgba(184,145,42,0.55)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                animation: "badge-pulse 3.5s ease-in-out infinite",
              }}
            >
              {/* shimmer sweep */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "45%",
                  height: "100%",
                  background: "linear-gradient(90deg, transparent 0%, rgba(255,220,120,0.30) 50%, transparent 100%)",
                  animation: "badge-shine 3.5s ease-in-out infinite",
                  pointerEvents: "none",
                }}
              />
              <span
                className="font-body text-[11px] sm:text-[12px] lg:text-[13px] uppercase tracking-[0.20em] relative"
                style={{
                  background: "linear-gradient(90deg, rgba(230,205,140,0.95) 0%, rgba(255,240,180,1) 50%, rgba(230,205,140,0.95) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Advanced Dermatology &amp; Aesthetic Excellence
              </span>
            </div>
          </motion.div>

          {/* H1 */}
          <motion.h1
            className="font-heading font-bold leading-[1.05] mb-6 lg:mb-8"
            style={{ color: "white" }}
            {...delay(0.15)}
          >
            <span className="block text-[42px] sm:text-[58px] lg:text-[76px] xl:text-[88px]" style={{ letterSpacing: "-0.03em" }}>
              We treat:
            </span>
            <span
              className="block text-[42px] sm:text-[58px] lg:text-[76px] xl:text-[88px]"
              style={{ color: "var(--color-accent)", letterSpacing: "-0.03em" }}
            >
              {typewritten}
              <span aria-hidden="true" style={{ borderRight: "3px solid var(--color-accent)", marginLeft: "2px", display: "inline-block", animation: "blink 1s step-end infinite" }} />
            </span>
          </motion.h1>

          {/* Body */}
          <motion.p
            className="font-heading leading-relaxed mb-10 text-[16px] sm:text-[18px] lg:text-[21px] xl:text-[23px]"
            style={{ color: "rgba(255,255,255,0.75)" }}
            {...delay(0.3)}
          >
            Expert care for your skin, hair, and nails, delivered by internationally trained dermatologists with a personal touch. From medical dermatology to cutting-edge cosmetic treatments, we&apos;re Nepal&apos;s trusted destination for results that last.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-4"
            {...delay(0.45)}
          >
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-7 min-h-[52px] rounded-sm font-body font-medium text-[15px] bg-accent hover:bg-accent-dark [transition:background-color_0.2s_ease,transform_0.2s_ease,box-shadow_0.2s_ease] hover:-translate-y-px cursor-pointer touch-manipulation"
              style={{ color: "white", boxShadow: "var(--shadow-gold)" }}
            >
              Request an Appointment →
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-7 min-h-[52px] rounded-sm font-body text-[15px] [transition:opacity_0.2s_ease,transform_0.2s_ease] hover:opacity-80 hover:-translate-y-px cursor-pointer touch-manipulation"
              style={{
                color: "white",
                border: "1px solid rgba(255,255,255,0.45)",
                backgroundColor: "transparent",
              }}
            >
              Explore Treatments
            </a>
          </motion.div>

        </div>

        {/* Credential panel */}
        <motion.div className="mt-10 max-w-[680px] lg:max-w-none" {...delay(0.6)}>
          <div
            className="rounded-xl overflow-hidden"
            style={{
              borderTop: "1px solid rgba(184,145,42,0.45)",
              borderRight: "1px solid rgba(255,255,255,0.07)",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              borderLeft: "1px solid rgba(255,255,255,0.07)",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            {/* Mobile: 2×2 grid */}
            <div className="grid grid-cols-2 lg:hidden">
              {TRUST_BADGES.map((badge, i) => (
                <div
                  key={i}
                  className="px-4 py-3.5 flex items-start gap-2"
                  style={{
                    borderLeft: i % 2 === 1 ? "1px solid rgba(184,145,42,0.18)" : undefined,
                    borderTop: i >= 2 ? "1px solid rgba(184,145,42,0.18)" : undefined,
                  }}
                >
                  <span aria-hidden="true" style={{ color: "var(--color-accent)", fontSize: "7px", marginTop: "3px", flexShrink: 0 }}>✦</span>
                  <span className="font-body text-[10px] uppercase tracking-wider leading-relaxed" style={{ color: "rgba(250,248,245,0.75)" }}>
                    {badge}
                  </span>
                </div>
              ))}
            </div>

            {/* Desktop: single row, equal-width cells */}
            <div className="hidden lg:flex">
              {TRUST_BADGES.map((badge, i) => (
                <div
                  key={i}
                  className="flex-1 px-5 py-4 flex items-start gap-2.5"
                  style={{ borderLeft: i > 0 ? "1px solid rgba(184,145,42,0.18)" : undefined }}
                >
                  <span aria-hidden="true" style={{ color: "var(--color-accent)", fontSize: "7px", marginTop: "3px", flexShrink: 0 }}>✦</span>
                  <span className="font-body text-[11px] xl:text-[12px] uppercase tracking-wider leading-relaxed" style={{ color: "rgba(250,248,245,0.75)" }}>
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll chevron */}
      {!reduce && <ScrollChevron />}

      {/* Wave transition to next section */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none"
        style={{ zIndex: 20 }}
      >
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full"
          style={{ height: "clamp(40px, 5vw, 80px)" }}
        >
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
            fill="var(--color-accent)"
          />
        </svg>
      </div>
    </section>
  );
}
