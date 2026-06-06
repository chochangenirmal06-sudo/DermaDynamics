import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import HomeAbout from "@/components/sections/HomeAbout";
import HowItWorks from "@/components/sections/HowItWorks";
import KoreanTech from "@/components/sections/KoreanTech";
import Testimonials from "@/components/sections/Testimonials";
import ResultsGallery from "@/components/sections/ResultsGallery";
import FAQBranches from "@/components/sections/FAQBranches";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeAbout />
      <ServicesOverview />

      {/* Ornamental section divider */}
      <div
        aria-hidden="true"
        style={{
          padding: "clamp(8px, 2vw, 16px) clamp(40px, 6vw, 120px)",
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, var(--color-accent))", opacity: 0.5 }} />
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          <div style={{ width: "5px", height: "5px", background: "var(--color-accent)", transform: "rotate(45deg)", opacity: 0.4 }} />
          <div style={{ width: "9px", height: "9px", background: "var(--color-accent)", transform: "rotate(45deg)", opacity: 0.75 }} />
          <div style={{ width: "5px", height: "5px", background: "var(--color-accent)", transform: "rotate(45deg)", opacity: 0.4 }} />
        </div>
        <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, var(--color-accent))", opacity: 0.5 }} />
      </div>

      <HowItWorks />
      <KoreanTech />
      <Testimonials />
      <ResultsGallery />
      <FAQBranches />
      <CTABanner />
    </>
  );
}
