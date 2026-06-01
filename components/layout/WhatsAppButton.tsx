"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function WhatsAppButton() {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="wa-wrap">
      <style>{`
        .wa-wrap {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 999;
        }

        .wa-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #25D366;
          color: #ffffff;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(37,211,102,0.40), 0 2px 8px rgba(0,0,0,0.12);
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }
        .wa-btn:focus-visible {
          outline: 2px solid #25D366;
          outline-offset: 3px;
        }

        /* Pulse ring */
        .wa-pulse {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid rgba(37,211,102,0.55);
          animation: wa-ring 2.2s ease-out infinite;
          pointer-events: none;
        }
        .wa-pulse-2 {
          animation-delay: 1.1s;
        }

        @keyframes wa-ring {
          0%   { transform: scale(1);   opacity: 0.7; }
          60%  { transform: scale(1.55); opacity: 0; }
          100% { transform: scale(1.55); opacity: 0; }
        }

        /* Tooltip */
        .wa-tooltip {
          position: absolute;
          right: 64px;
          bottom: 50%;
          transform: translateY(50%);
          background: rgba(28,24,18,0.88);
          color: #ffffff;
          font-size: 12px;
          font-family: var(--font-body);
          white-space: nowrap;
          padding: 7px 12px;
          border-radius: 6px;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .wa-tooltip::after {
          content: '';
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border: 5px solid transparent;
          border-left-color: rgba(28,24,18,0.88);
        }
        .wa-wrap:hover .wa-tooltip { opacity: 1; }

        @media (prefers-reduced-motion: reduce) {
          .wa-pulse { animation: none !important; }
        }
        @media (max-width: 767px) {
          .wa-wrap { bottom: 80px; right: 20px; }
        }
      `}</style>

      <motion.a
        href="https://wa.me/977061591803"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="wa-btn"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.4, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={mounted && reduce !== true ? { scale: 1.08 } : undefined}
        whileTap={mounted && reduce !== true ? { scale: 0.95 } : undefined}
      >
        {/* Pulse rings */}
        {mounted && reduce !== true && (
          <>
            <span className="wa-pulse" aria-hidden="true" />
            <span className="wa-pulse wa-pulse-2" aria-hidden="true" />
          </>
        )}

        {/* WhatsApp icon */}
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>

        <span className="wa-tooltip">Chat with us on WhatsApp</span>
      </motion.a>
    </div>
  );
}
