"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Phone, X } from "lucide-react";

const BRANCHES = [
  {
    city: "Pokhara",
    tel: "tel:061591803",
    wa: "https://wa.me/977061591803",
  },
  {
    city: "Lalitpur",
    tel: "tel:015908320",
    wa: "https://wa.me/977015908320",
  },
  {
    city: "Dhangadhi",
    tel: "tel:091590718",
    wa: "https://wa.me/977091590718",
  },
];

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  const animate = mounted && reduce !== true;

  return (
    <div ref={wrapRef} style={{ position: "fixed", bottom: 28, right: 28, zIndex: 999 }}>
      <style>{`
        .wa-trigger {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #25D366;
          color: #ffffff;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(37,211,102,0.40), 0 2px 8px rgba(0,0,0,0.14);
          -webkit-tap-highlight-color: transparent;
          transition: background 0.2s ease;
        }
        .wa-trigger:hover { background: #1fb855; }
        .wa-trigger:focus-visible {
          outline: 2px solid #25D366;
          outline-offset: 3px;
        }

        /* Pulse rings */
        .wa-pulse {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid rgba(37,211,102,0.55);
          animation: wa-ring 2.2s ease-out infinite;
          pointer-events: none;
        }
        .wa-pulse-2 { animation-delay: 1.1s; }
        @keyframes wa-ring {
          0%   { transform: scale(1);    opacity: 0.7; }
          60%  { transform: scale(1.55); opacity: 0;   }
          100% { transform: scale(1.55); opacity: 0;   }
        }

        /* Popup panel */
        .wa-panel {
          position: absolute;
          bottom: 68px;
          right: 0;
          width: 260px;
          background: #1c1812;
          border: 1px solid rgba(184,145,42,0.30);
          border-radius: 16px;
          box-shadow: 0 16px 48px rgba(0,0,0,0.45), 0 4px 16px rgba(0,0,0,0.30);
          overflow: hidden;
        }

        .wa-panel-header {
          padding: 14px 18px 12px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .wa-panel-title {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
        }
        .wa-panel-close {
          background: none;
          border: none;
          color: rgba(255,255,255,0.45);
          cursor: pointer;
          padding: 2px;
          display: flex;
          align-items: center;
          border-radius: 4px;
          transition: color 0.15s ease;
          line-height: 0;
        }
        .wa-panel-close:hover { color: rgba(255,255,255,0.85); }

        .wa-branch {
          padding: 13px 18px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }
        .wa-branch:last-child { border-bottom: none; }

        .wa-branch-city {
          font-family: var(--font-heading);
          font-size: 15px;
          font-weight: 600;
          color: #ffffff;
          letter-spacing: -0.01em;
          flex: 1;
          min-width: 0;
        }

        .wa-branch-btns {
          display: flex;
          gap: 6px;
          flex-shrink: 0;
        }
        .wa-branch-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          padding: 6px 10px;
          border-radius: 6px;
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 500;
          text-decoration: none;
          cursor: pointer;
          white-space: nowrap;
          min-height: 30px;
          transition: background 0.15s ease;
        }
        .wa-branch-btn-wa {
          background: rgba(37,211,102,0.15);
          border: 1px solid rgba(37,211,102,0.30);
          color: #4cde80;
        }
        .wa-branch-btn-wa:hover { background: rgba(37,211,102,0.25); }
        .wa-branch-btn-call {
          background: rgba(184,145,42,0.18);
          border: 1px solid rgba(184,145,42,0.35);
          color: #d4aa4a;
        }
        .wa-branch-btn-call:hover { background: rgba(184,145,42,0.28); }

        @media (prefers-reduced-motion: reduce) {
          .wa-pulse { animation: none !important; }
          .wa-trigger, .wa-branch-btn, .wa-panel-close { transition: none !important; }
        }
        @media (max-width: 767px) {
          /* position is set inline via the parent div */
        }
      `}</style>

      {/* Popup panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="wa-panel"
            role="dialog"
            aria-label="Choose a clinic to contact"
            initial={animate ? { opacity: 0, y: 8, scale: 0.96 } : undefined}
            animate={animate ? { opacity: 1, y: 0, scale: 1 } : undefined}
            exit={animate ? { opacity: 0, y: 8, scale: 0.96 } : undefined}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="wa-panel-header">
              <span className="wa-panel-title">Choose a clinic</span>
              <button
                className="wa-panel-close"
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                <X size={14} />
              </button>
            </div>

            {BRANCHES.map((branch) => (
              <div key={branch.city} className="wa-branch">
                <span className="wa-branch-city">{branch.city}</span>
                <div className="wa-branch-btns">
                  <a
                    href={branch.wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wa-branch-btn wa-branch-btn-wa"
                    aria-label={`WhatsApp ${branch.city}`}
                    onClick={() => setOpen(false)}
                  >
                    <WhatsAppIcon size={11} /> WA
                  </a>
                  <a
                    href={branch.tel}
                    className="wa-branch-btn wa-branch-btn-call"
                    aria-label={`Call ${branch.city}`}
                    onClick={() => setOpen(false)}
                  >
                    <Phone size={11} aria-hidden="true" /> Call
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger button */}
      <motion.button
        className="wa-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close contact options" : "Contact us"}
        aria-expanded={open}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.4, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={animate ? { scale: 1.08 } : undefined}
        whileTap={animate ? { scale: 0.95 } : undefined}
      >
        {animate && !open && (
          <>
            <span className="wa-pulse" aria-hidden="true" />
            <span className="wa-pulse wa-pulse-2" aria-hidden="true" />
          </>
        )}
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "close" : "wa"}
            initial={animate ? { rotate: -30, opacity: 0 } : undefined}
            animate={animate ? { rotate: 0, opacity: 1 } : undefined}
            exit={animate ? { rotate: 30, opacity: 0 } : undefined}
            transition={{ duration: 0.15 }}
            style={{ display: "flex" }}
          >
            {open ? <X size={22} /> : <WhatsAppIcon size={24} />}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
