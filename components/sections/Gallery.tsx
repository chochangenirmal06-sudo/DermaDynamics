"use client";

import { useRef, useEffect } from "react";

const IMAGES = [
  "/brand_assets/hydrafacial.png",
  "/brand_assets/botox.png",
  "/brand_assets/skinpeeling.png",
  "/brand_assets/lipfiller.png",
  "/brand_assets/laserhair.png",
  "/brand_assets/microneedling.png",
  "/brand_assets/tatto.png",
  "/brand_assets/Face Lifting.png",
  "/brand_assets/prphair.png",
  "/brand_assets/hydrafacial.png",
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pref = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const headingChildren = headingRef.current
      ? (Array.from(headingRef.current.children) as HTMLElement[])
      : [];

    headingChildren.forEach((el, i) => {
      el.style.opacity = "0";
      if (!pref) el.style.transform = "translateY(20px)";
      el.style.transition = `opacity 0.5s ease ${i * 0.1}s${!pref ? `, transform 0.5s ease ${i * 0.1}s` : ""}`;
    });

    const grid = gridRef.current;
    if (grid) {
      grid.style.opacity = "0";
      if (!pref) grid.style.transform = "translateY(24px)";
      grid.style.transition = "opacity 0.6s ease 0.3s" + (!pref ? ", transform 0.6s ease 0.3s" : "");
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        headingChildren.forEach(el => {
          el.style.opacity = "1";
          if (!pref) el.style.transform = "translateY(0)";
        });
        if (grid) {
          grid.style.opacity = "1";
          if (!pref) grid.style.transform = "translateY(0)";
        }
        observer.disconnect();
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="gallery" aria-labelledby="gallery-heading" className="gal-section">
      <style>{`
        .gal-section {
          background: var(--color-bg-alt);
          padding: 100px 0;
        }

        .gal-heading-wrap {
          padding: 0 48px;
          text-align: center;
          margin-bottom: 56px;
        }
        .gal-label {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-accent);
          display: block;
        }
        .gal-divider {
          width: 80px;
          height: 1px;
          background: var(--color-accent);
          margin: 12px auto 20px;
          border: none;
        }
        .gal-h2 {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: clamp(24px, 4vw, 42px);
          line-height: 1.2;
          letter-spacing: -0.03em;
          color: var(--color-heading);
          margin: 0;
        }
        .gal-subline {
          font-family: var(--font-heading);
          font-style: italic;
          font-weight: 400;
          font-size: clamp(16px, 2.5vw, 22px);
          color: var(--color-decorative);
          margin: 12px 0 0;
        }

        .gal-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
          padding: 0 48px;
          max-width: 1400px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .gal-cell {
          aspect-ratio: 1 / 1;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
        }

        .gal-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }
        .gal-cell:hover .gal-img {
          transform: scale(1.05);
        }

        @media (max-width: 1024px) {
          .gal-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 639px) {
          .gal-section       { padding: 64px 0; }
          .gal-heading-wrap  { padding: 0 24px; }
          .gal-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
            padding: 0 24px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gal-img { transition: none !important; }
        }
      `}</style>

      <div className="gal-heading-wrap" ref={headingRef}>
        <span className="gal-label">Real Results</span>
        <hr className="gal-divider" aria-hidden="true" />
        <h2 id="gallery-heading" className="gal-h2">
          Transformations That Speak for Themselves
        </h2>
        <p className="gal-subline">
          Every result is real. Every patient, a story of renewed confidence.
        </p>
      </div>

      <div className="gal-grid" ref={gridRef}>
        {IMAGES.map((src, i) => (
          <div key={i} className="gal-cell">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              className="gal-img"
              loading="lazy"
              width={400}
              height={400}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
