"use client";

import { HeroParallax } from "@/components/ui/aceternity/hero-parallax";
import { FeaturesSection } from "./components/features/features-section";
import { BenefitsSection } from "./components/benefits/benefits-section";
import { ProcessSection } from "./components/process/process-section";
import { products } from "./data";
import { Navbar } from "@/components/navbar";

export default function LearnMorePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navbar with proper spacing */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      
      {/* Hero Section with proper spacing */}
      <div className="pt-16"> {/* Add padding-top to account for navbar height */}
        <div className="h-[40vh] md:h-[60vh] lg:h-[80vh]">
          <HeroParallax products={products} />
        </div>
      </div>
      
      {/* Content sections with proper spacing */}
      <div className="relative z-10 bg-background">
        {/* Features Section */}
        <div className="py-20">
          <FeaturesSection />
        </div>

        {/* Benefits Section */}
        <div className="py-20 bg-black/5 dark:bg-white/5">
          <BenefitsSection />
        </div>

        {/* Process Section */}
        <div className="py-20">
          <ProcessSection />
        </div>
      </div>
    </main>
  );
}