"use client";

import { useEffect, useRef } from "react";

const VIDEOS = [
  "/brand_assets/herosectionbg1.mp4",
  "/brand_assets/herosectionbg2.mp4",
  "/brand_assets/herosectionbg3.mp4",
];

export default function HeroVideoBackground() {
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoA = videoARef.current;
    const videoB = videoBRef.current;
    if (!videoA || !videoB) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (window.innerWidth < 768) return;

    let currentIndex = 0;
    let active: HTMLVideoElement = videoA;
    let standby: HTMLVideoElement = videoB;
    let transitioning = false;

    active.src = VIDEOS[0];
    standby.src = VIDEOS[1];
    standby.load();
    active.style.opacity = "1";
    standby.style.opacity = "0";

    if (reducedMotion) {
      active.play().then(() => active.pause()).catch(() => {});
      return;
    }

    active.play().catch(() => {});

    let preloaded = false;

    const crossfade = () => {
      if (transitioning) return;
      transitioning = true;

      currentIndex = (currentIndex + 1) % VIDEOS.length;
      const afterNextIndex = (currentIndex + 1) % VIDEOS.length;

      // standby is already playing silently at opacity 0 (started at 5s preload point)
      active.style.transition = "opacity 2500ms ease-in-out";
      standby.style.transition = "opacity 2500ms ease-in-out";
      active.style.opacity = "0";
      standby.style.opacity = "1";

      const prevActive = active;
      const prevStandby = standby;

      setTimeout(() => {
        active = prevStandby;
        standby = prevActive;
        standby.style.transition = "";
        standby.src = VIDEOS[afterNextIndex];
        standby.load();
        preloaded = false;
        transitioning = false;
      }, 2600);
    };

    const handleTimeUpdate = () => {
      if (!active.duration || isNaN(active.duration)) return;
      const remaining = active.duration - active.currentTime;
      if (!preloaded && remaining <= 5) {
        preloaded = true;
        standby.play().catch(() => {});
      }
      if (!transitioning && remaining <= 3) {
        crossfade();
      }
    };

    const onTimeUpdateA = () => { if (active === videoA) handleTimeUpdate(); };
    const onTimeUpdateB = () => { if (active === videoB) handleTimeUpdate(); };

    videoA.addEventListener("timeupdate", onTimeUpdateA);
    videoB.addEventListener("timeupdate", onTimeUpdateB);

    return () => {
      videoA.removeEventListener("timeupdate", onTimeUpdateA);
      videoB.removeEventListener("timeupdate", onTimeUpdateB);
      videoA.pause();
      videoB.pause();
    };
  }, []);

  return (
    <>
      <style>{`
        .hvb-wrap {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .hvb-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        @media (max-width: 767px) {
          .hvb-wrap { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hvb-video { transition: none !important; }
        }
      `}</style>
      <div className="hvb-wrap" aria-hidden="true">
        <video
          ref={videoARef}
          className="hvb-video"
          muted
          playsInline
          preload="auto"
          style={{ opacity: 1 }}
        />
        <video
          ref={videoBRef}
          className="hvb-video"
          muted
          playsInline
          preload="auto"
          style={{ opacity: 0 }}
        />
      </div>
    </>
  );
}
