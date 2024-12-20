import { BenefitsHero } from "@/components/sections/benefits/hero";
import { RewardsSection } from "@/components/sections/benefits/rewards";
import { TravelPerks } from "@/components/sections/benefits/travel-perks";
import { LifestyleSection } from "@/components/sections/benefits/lifestyle";
import { SecuritySection } from "@/components/sections/benefits/security";
import { BenefitsCTA } from "@/components/sections/benefits/cta";

export default function BenefitsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <BenefitsHero />
      <RewardsSection />
      <TravelPerks />
      <LifestyleSection />
      <SecuritySection />
      <BenefitsCTA />
    </main>
  );
}