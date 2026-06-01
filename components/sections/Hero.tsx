"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { CONTACT_INFO } from "@/lib/constants";
import HeroVideoBackground from "@/components/sections/HeroVideoBackground";

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

export default function Hero() {
  const reduce = useReducedMotion();
  const isDesktop = useIsDesktop();

  const delay = (d: number) => ({
    initial: reduce ? undefined : { y: 24, opacity: 0 },
    animate: reduce ? undefined : { y: 0, opacity: 1 },
    transition: reduce ? undefined : { duration: 0.7, ease: "easeOut" as const, delay: d },
  });

  return (
    <section
      className="relative flex flex-col justify-center overflow-hidden"
      style={{ minHeight: "78vh", backgroundColor: "#1C1812" }}
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
        .hero-content { padding-left: 20px; padding-right: 20px; }
        @media (min-width: 768px) {
          .hero-content { padding-left: clamp(48px, 8vw, 120px); padding-right: 0; }
        }
      `}</style>

      {/* Content */}
      <div
        className="hero-content relative z-10 py-24 w-full"
        style={{ maxWidth: "680px", marginLeft: 0, marginRight: "auto" }}
      >
        <div>

          {/* Label */}
          <motion.p
            className="font-body text-[12px] uppercase tracking-[0.18em] mb-5"
            style={{ color: "rgba(250,248,245,0.80)" }}
            {...delay(0)}
          >
            Pokhara&apos;s Premier Skin &amp; Aesthetic Clinic
          </motion.p>

          {/* H1 */}
          <motion.h1
            className="font-heading font-bold leading-[1.08] mb-5"
            style={{ color: "white" }}
            {...delay(0.15)}
          >
            <span className="block text-[40px] sm:text-[52px] lg:text-[72px]" style={{ letterSpacing: "-0.03em" }}>
              Reveal Your Skin&apos;s
            </span>
            <span
              className="block text-[40px] sm:text-[52px] lg:text-[72px]"
              style={{ color: "var(--color-accent)", letterSpacing: "-0.03em" }}
            >
              True Radiance.
            </span>
          </motion.h1>

          {/* Italic subline */}
          <motion.p
            className="font-heading leading-[1.55] mb-10 text-[16px] sm:text-[18px] lg:text-[22px]"
            style={{ color: "rgba(255,255,255,0.75)" }}
            {...delay(0.3)}
          >
            Science-backed treatments. Medically trained experts.
            <br className="hidden sm:block" />
            Results that last — in the heart of Pokhara.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-4 mb-10"
            {...delay(0.45)}
          >
            <a
              href={CONTACT_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 min-h-[52px] rounded-sm font-body font-medium text-[15px] bg-accent hover:bg-accent-dark [transition:background-color_0.2s_ease,transform_0.2s_ease,box-shadow_0.2s_ease] hover:-translate-y-px cursor-pointer touch-manipulation"
              style={{ color: "white", boxShadow: "var(--shadow-gold)" }}
            >
              Book Your Appointment →
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

          {/* Trust badge */}
          <motion.div {...delay(0.6)}>
            <div
              className="inline-flex items-center gap-2"
              style={{
                backgroundColor: "rgba(28,24,18,0.55)",
                border: "1px solid rgba(250,248,245,0.15)",
                borderRadius: "9999px",
                padding: "8px 16px",
                backdropFilter: "blur(8px)",
              }}
            >
              <div className="flex gap-[3px]" role="img" aria-label="4.8 stars out of 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#B8912A" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="font-body text-[13px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                4.8★ on Google &middot; Trusted by 500+ patients in Pokhara
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll chevron */}
      {!reduce && <ScrollChevron />}
    </section>
  );
}
