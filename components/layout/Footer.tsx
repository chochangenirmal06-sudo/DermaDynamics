import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Phone } from "lucide-react";
import { NAV_LINKS, CONTACT_INFO, SOCIAL_LINKS, TAGLINE } from "@/lib/constants";
import { LOCATIONS } from "@/lib/locations";

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

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function SocialIcon({ platform }: { platform: string }) {
  if (platform === "Facebook")  return <FacebookIcon />;
  if (platform === "Instagram") return <InstagramIcon />;
  if (platform === "TikTok")    return <TikTokIcon />;
  if (platform === "X")         return <XIcon />;
  if (platform === "YouTube")   return <YouTubeIcon />;
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-8">

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
                  target="_blank"
                  rel="noopener noreferrer"
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

          {/* Column 3 — Email only */}
          <div>
            <h3 className={colHeadingClass}>Contact Us</h3>
            <address className="not-italic flex flex-col gap-3">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className={`${linkClass} break-all`}
              >
                {CONTACT_INFO.email}
              </a>
            </address>
          </div>

        </div>

        {/* Branch cards row */}
        <div className="mt-10 pt-10 border-t [border-color:rgba(255,255,255,0.18)]">
          <h3 className={`${colHeadingClass} mb-6`}>Our Clinics</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {LOCATIONS.map((location) => (
              <div
                key={location.slug}
                style={{
                  background: "rgba(255,255,255,0.09)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  borderRadius: "12px",
                  padding: "18px 20px",
                }}
              >
                <p className="font-heading font-semibold text-[15px] [color:#ffffff] mb-3 leading-snug">
                  {location.fullName}
                </p>
                <div className="flex items-start gap-2 mb-2">
                  <MapPin size={12} style={{ color: "rgba(255,255,255,0.55)", marginTop: "2px", flexShrink: 0 }} aria-hidden="true" />
                  <span className="font-body text-[13px] [color:rgba(255,255,255,0.75)] leading-snug">
                    {location.address}<br />{location.addressNote}
                  </span>
                </div>
                <div className="flex items-start gap-2 mb-3">
                  <Clock size={12} style={{ color: "rgba(255,255,255,0.55)", marginTop: "2px", flexShrink: 0 }} aria-hidden="true" />
                  <span className="font-body text-[13px] [color:rgba(255,255,255,0.75)] leading-snug">
                    {location.hours}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={location.phone.tel}
                    className="inline-flex items-center gap-1.5 font-body text-[12px] font-medium [color:rgba(255,255,255,0.90)] hover:[color:#ffffff] [transition:color_0.15s_ease]"
                    aria-label={`Call ${location.fullName}`}
                  >
                    <Phone size={11} aria-hidden="true" />
                    {location.phone.display}
                  </a>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="font-body text-[12px] font-medium [color:rgba(255,255,255,0.90)] hover:[color:#ffffff] [transition:color_0.15s_ease]"
                  >
                    View clinic →
                  </Link>
                </div>
              </div>
            ))}
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
            Pokhara · Lalitpur · Dhangadhi
          </p>
        </div>
      </div>
    </footer>
  );
}
