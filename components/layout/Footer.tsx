import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SERVICES, CONTACT_INFO, SOCIAL_LINKS, TAGLINE } from "@/lib/constants";

function FacebookIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.31 8.31 0 0 0 4.86 1.55V6.79a4.85 4.85 0 0 1-1.09-.1z" />
    </svg>
  );
}

function SocialIcon({ platform }: { platform: string }) {
  if (platform === "Facebook") return <FacebookIcon />;
  if (platform === "Instagram") return <InstagramIcon />;
  if (platform === "TikTok") return <TikTokIcon />;
  return null;
}

const colHeadingClass =
  "font-body font-semibold text-[11px] uppercase tracking-[0.1em] mb-5" +
  " " +
  "[color:rgba(255,255,255,0.60)]";

const linkClass =
  "font-body text-[14px] leading-[1.6] [color:rgba(255,255,255,0.82)]" +
  " hover:[color:#ffffff] [transition:color_0.15s_ease]";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: 'linear-gradient(135deg, #8B6914 0%, #B8912A 40%, #9A7820 100%)' }} aria-label="Site footer">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1 — Logo, tagline, social icons */}
          <div className="flex flex-col">
            <Link href="/" aria-label="Derma Dynamics — return to homepage">
              <Image
                src="/brand_assets/logo.png"
                alt="Derma Dynamics"
                width={798}
                height={704}
                className="h-10 w-auto"
                unoptimized
                priority
              />
            </Link>

            <p className="mt-4 font-body text-[18px] leading-[1.4] [color:rgba(255,255,255,0.85)]">
              {TAGLINE}
            </p>

            <div className="flex items-center gap-3 mt-6">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.href}
                  aria-label={link.platform}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full [background:rgba(255,255,255,0.15)] [color:rgba(255,255,255,0.80)] hover:[color:#ffffff] hover:[background:rgba(255,255,255,0.28)] [transition:color_0.2s_ease,background_0.2s_ease] cursor-pointer touch-manipulation"
                >
                  <SocialIcon platform={link.platform} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className={colHeadingClass}>Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3 — Treatments (first 5) */}
          <div>
            <h3 className={colHeadingClass}>Our Treatments</h3>
            <ul className="flex flex-col gap-3">
              {SERVICES.slice(0, 5).map((service) => (
                <li
                  key={service.id}
                  className="font-body text-[14px] leading-[1.6] [color:rgba(255,255,255,0.78)]"
                >
                  {service.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact info */}
          <div>
            <h3 className={colHeadingClass}>Contact Us</h3>
            <address className="not-italic flex flex-col gap-3">
              <span className="font-body text-[14px] leading-[1.6] [color:rgba(255,255,255,0.78)]">
                {CONTACT_INFO.address}
              </span>

              <a
                href={`tel:${CONTACT_INFO.phone.replace("-", "")}`}
                className={linkClass}
              >
                {CONTACT_INFO.phone}
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className={`${linkClass} break-all`}
              >
                {CONTACT_INFO.email}
              </a>

              <div className="flex flex-col gap-1 font-body text-[14px] leading-[1.6] [color:rgba(255,255,255,0.78)]">
                <span>{CONTACT_INFO.hoursWeekday}</span>
                <span>{CONTACT_INFO.hoursSaturday}</span>
              </div>
            </address>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t [border-color:rgba(255,255,255,0.22)]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-5 flex flex-wrap items-center justify-between gap-2">
          <p className="font-body text-[13px] [color:rgba(255,255,255,0.55)]">
            © {year} Derma Dynamics Clinic. All rights reserved.
          </p>
          <p className="font-body text-[13px] [color:rgba(255,255,255,0.55)]">
            {CONTACT_INFO.address}
          </p>
        </div>
      </div>
    </footer>
  );
}
