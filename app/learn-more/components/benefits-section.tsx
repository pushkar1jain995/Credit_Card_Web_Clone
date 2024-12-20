"use client";

import { TextReveal } from "@/components/ui/aceternity/text-reveal";
import { CardStack } from "@/components/ui/aceternity/card-stack";
import { benefits } from "../data";
import { motion } from "framer-motion";

export function BenefitsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <TextReveal 
            text="Exclusive Benefits" 
            className="text-4xl md:text-5xl font-bold text-center mb-20"
          />
        </motion.div>
        
        <div className="h-[60vh]">
          <CardStack items={benefits} />
        </div>
      </div>
    </section>
  );
}