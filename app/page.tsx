import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { TrustSection } from "@/components/sections/trust-section";
import { FeaturesGrid } from "@/components/features-grid";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <FeaturesGrid />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  );
}