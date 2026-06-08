"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { NAV_LINKS, CONTACT_INFO } from "@/lib/constants";
import { navbarVariants } from "@/lib/animations";
import { useTheme } from "@/components/providers/ThemeProvider";


const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

const dropdownVariants: Variants = {
  hidden: { opacity: 0, y: -6, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.18, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.98,
    transition: { duration: 0.12, ease: "easeIn" },
  },
};

const accordionVariants: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto", opacity: 1, transition: { duration: 0.2, ease: "easeOut" } },
  exit: { height: 0, opacity: 0, transition: { duration: 0.15, ease: "easeIn" } },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const { theme, toggle, mounted } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu and dropdowns whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
    setMobileAccordionOpen(false);
  }, [pathname]);

  // Close the desktop dropdown on outside click
  useEffect(() => {
    if (!dropdownOpen) return;
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [dropdownOpen]);

  return (
    <>
      {/* Skip-to-content — visible only on keyboard focus */}
      <a
        href="#main-content"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-[200] focus-visible:px-4 focus-visible:py-2 focus-visible:bg-accent focus-visible:text-white focus-visible:rounded-sm focus-visible:outline-none"
      >
        Skip to main content
      </a>

      <motion.header
        variants={shouldReduceMotion ? undefined : navbarVariants}
        initial={shouldReduceMotion ? undefined : "hidden"}
        animate={shouldReduceMotion ? undefined : "visible"}
        className={[
          "fixed top-0 left-0 right-0 z-40",
          "[transition:background-color_0.3s_ease,box-shadow_0.3s_ease,border-color_0.3s_ease]",
          scrolled ? "bg-card border-b border-border shadow-navbar" : "border-b",
        ].join(" ")}
        style={!scrolled ? { backgroundColor: "transparent", borderColor: "transparent" } : undefined}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 h-[140px] flex items-center justify-between">
          <Link href="/" aria-label="Derma Dynamics — return to homepage">
            <Image
              src="/brand_assets/logo.png"
              alt="Derma Dynamics — Where Science Meets Your Skin"
              width={798}
              height={704}
              className="h-[100px] w-auto"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop nav — hidden below md */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => {
              const isHash = link.href.startsWith("/#");
              const childActive = link.children?.some((child) => pathname === child.href) ?? false;
              const active = (!isHash && pathname === link.href) || childActive;
              const cls = [
                "relative font-body text-[14px] uppercase tracking-[0.08em] py-1",
                "[transition:color_0.15s_ease]",
                active ? "text-accent" : "text-body hover:text-accent",
              ].join(" ");

              if (link.children) {
                return (
                  <div key={link.label} ref={dropdownRef} className="relative">
                    <button
                      type="button"
                      onClick={() => setDropdownOpen((v) => !v)}
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                      className={`${cls} inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none`}
                    >
                      {link.label}
                      <ChevronDown
                        size={13}
                        strokeWidth={2}
                        aria-hidden="true"
                        className={`[transition:transform_0.2s_ease] ${dropdownOpen ? "rotate-180" : ""}`}
                      />
                      {active && (
                        <span
                          aria-hidden="true"
                          className="absolute -bottom-px left-0 right-0 h-[2px] bg-accent rounded-full"
                        />
                      )}
                    </button>
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          variants={shouldReduceMotion ? undefined : dropdownVariants}
                          initial={shouldReduceMotion ? undefined : "hidden"}
                          animate={shouldReduceMotion ? undefined : "visible"}
                          exit={shouldReduceMotion ? undefined : "exit"}
                          role="menu"
                          aria-label={`${link.label} menu`}
                          className="absolute top-full left-0 mt-3 min-w-[180px] rounded-sm border border-border bg-card shadow-navbar overflow-hidden py-2 z-50"
                        >
                          {link.children.map((child) => {
                            const childIsActive = pathname === child.href;
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                role="menuitem"
                                onClick={() => setDropdownOpen(false)}
                                aria-current={childIsActive ? "page" : undefined}
                                className={[
                                  "block px-4 py-2.5 font-body text-[14px]",
                                  "[transition:color_0.15s_ease,background-color_0.15s_ease]",
                                  childIsActive
                                    ? "text-accent bg-bg-alt font-medium"
                                    : "text-body hover:text-accent hover:bg-bg-alt",
                                ].join(" ")}
                              >
                                {child.label}
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              if (isHash) {
                return (
                  <a key={link.href} href={link.href} className={cls}>
                    {link.label}
                  </a>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cls}
                >
                  {link.label}
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-px left-0 right-0 h-[2px] bg-accent rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            {/* Book button — hidden on xs, always visible sm+ */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center px-5 min-h-[44px] rounded-sm bg-accent hover:bg-accent-dark text-white text-[14px] font-body font-medium [transition:background-color_0.2s_ease,transform_0.2s_ease] hover:-translate-y-px cursor-pointer touch-manipulation"
            >
              Book Appointment →
            </Link>

            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggle}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="inline-flex items-center justify-center w-10 h-10 rounded-sm text-body hover:text-accent [transition:color_0.15s_ease] cursor-pointer focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mounted && (
                  <motion.span
                    key={theme}
                    initial={shouldReduceMotion ? undefined : { rotate: -30, opacity: 0 }}
                    animate={shouldReduceMotion ? undefined : { rotate: 0, opacity: 1 }}
                    exit={shouldReduceMotion ? undefined : { rotate: 30, opacity: 0 }}
                    transition={{ duration: 0.18, ease: "easeInOut" }}
                    style={{ display: "flex" }}
                  >
                    {theme === "dark"
                      ? <Sun size={18} strokeWidth={1.75} aria-hidden="true" />
                      : <Moon size={18} strokeWidth={1.75} aria-hidden="true" />}
                  </motion.span>
                )}
              </AnimatePresence>
              {!mounted && <span style={{ width: 18, height: 18, display: "block" }} />}
            </button>

            {/* Hamburger — hidden on md+ */}
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-sm text-heading hover:text-accent [transition:color_0.15s_ease] cursor-pointer focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              {menuOpen
                ? <X size={22} strokeWidth={1.75} aria-hidden="true" />
                : <Menu size={22} strokeWidth={1.75} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              role="navigation"
              aria-label="Mobile navigation"
              variants={shouldReduceMotion ? undefined : mobileMenuVariants}
              initial={shouldReduceMotion ? undefined : "hidden"}
              animate={shouldReduceMotion ? undefined : "visible"}
              exit={shouldReduceMotion ? undefined : "exit"}
              className="md:hidden border-t border-border bg-card"
            >
              <div className="max-w-[1200px] mx-auto px-6 py-3 flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  const isHash = link.href.startsWith("/#");
                  const childActive = link.children?.some((child) => pathname === child.href) ?? false;
                  const active = (!isHash && pathname === link.href) || childActive;
                  const cls = [
                    "flex items-center px-3 min-h-[44px] rounded-sm",
                    "text-[14px] font-body uppercase tracking-[0.08em]",
                    "[transition:color_0.15s_ease,background-color_0.15s_ease]",
                    active
                      ? "text-accent bg-bg-alt font-medium"
                      : "text-body hover:text-accent hover:bg-bg-alt",
                  ].join(" ");

                  if (link.children) {
                    return (
                      <div key={link.label}>
                        <button
                          type="button"
                          onClick={() => setMobileAccordionOpen((v) => !v)}
                          aria-expanded={mobileAccordionOpen}
                          className={`${cls} w-full justify-between cursor-pointer bg-transparent border-none`}
                        >
                          {link.label}
                          <ChevronDown
                            size={16}
                            strokeWidth={2}
                            aria-hidden="true"
                            className={`[transition:transform_0.2s_ease] ${mobileAccordionOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileAccordionOpen && (
                            <motion.div
                              variants={shouldReduceMotion ? undefined : accordionVariants}
                              initial={shouldReduceMotion ? undefined : "hidden"}
                              animate={shouldReduceMotion ? undefined : "visible"}
                              exit={shouldReduceMotion ? undefined : "exit"}
                              className="overflow-hidden flex flex-col gap-1 pl-4"
                            >
                              {link.children.map((child) => {
                                const childIsActive = pathname === child.href;
                                return (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    onClick={() => setMenuOpen(false)}
                                    aria-current={childIsActive ? "page" : undefined}
                                    className={[
                                      "flex items-center px-3 min-h-[40px] rounded-sm",
                                      "text-[13px] font-body uppercase tracking-[0.08em]",
                                      "[transition:color_0.15s_ease,background-color_0.15s_ease]",
                                      childIsActive
                                        ? "text-accent bg-bg-alt font-medium"
                                        : "text-body/80 hover:text-accent hover:bg-bg-alt",
                                    ].join(" ")}
                                  >
                                    {child.label}
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  if (isHash) {
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={cls}
                      >
                        {link.label}
                      </a>
                    );
                  }
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={cls}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 flex items-center justify-center min-h-[44px] px-5 rounded-sm bg-accent hover:bg-accent-dark text-white text-[14px] font-body font-medium [transition:background-color_0.2s_ease] cursor-pointer touch-manipulation"
                >
                  Book Appointment →
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
