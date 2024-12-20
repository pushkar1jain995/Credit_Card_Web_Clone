"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { LifeBuoy } from "lucide-react";

export function SupportHero() {
  return (
    <section className="pt-24 lg:pt-32 pb-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="mb-6 flex justify-center">
            <LifeBuoy className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
            24/7 Customer Support
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            We're here to help you with any questions or concerns
          </p>
        </motion.div>
      </Container>
    </section>
  );
}