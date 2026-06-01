import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ServicesOverview from "@/components/sections/ServicesOverview";
import HowItWorks from "@/components/sections/HowItWorks";
import KoreanTech from "@/components/sections/KoreanTech";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import FAQBranches from "@/components/sections/FAQBranches";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <HowItWorks />
      <KoreanTech />
      <Gallery />
      <Testimonials />
      <FAQBranches />
      <CTABanner />
    </>
  );
}
