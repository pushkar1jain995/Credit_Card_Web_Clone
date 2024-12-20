"use client";

import { TextReveal } from "@/components/ui/aceternity/text-reveal";
import { StickyScroll } from "@/components/ui/aceternity/sticky-scroll";
import { features } from "../../data";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";
import { motion } from "framer-motion";

export function FeaturesSection() {
  return (
    <section className="relative">
      <BackgroundBeams className="opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <TextReveal 
            text="Why Choose CreditPro?" 
            className="text-4xl md:text-6xl font-bold mb-6"
          />
          <p className="text-lg md:text-xl text-muted-foreground">
            Experience the perfect blend of security, rewards, and convenience
          </p>
        </motion.div>

        <div className="h-[80vh] max-w-6xl mx-auto">
          <StickyScroll content={features} />
        </div>
      </div>
    </section>
  );
}