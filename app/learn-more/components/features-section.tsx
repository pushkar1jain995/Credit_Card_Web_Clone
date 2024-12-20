"use client";

import { TextReveal } from "@/components/ui/aceternity/text-reveal";
import { StickyScroll } from "@/components/ui/aceternity/sticky-scroll";
import { features } from "../data";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";

export function FeaturesSection() {
  return (
    <section className="py-20 relative">
      <BackgroundBeams />
      <div className="container mx-auto px-4 relative z-10">
        <TextReveal 
          text="Why Choose CreditPro?" 
          className="text-4xl md:text-5xl font-bold text-center mb-20"
        />
        <div className="h-[80vh]">
          <StickyScroll content={features} />
        </div>
      </div>
    </section>
  );
}