"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  description: string;
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
        {title}
      </h2>
      <p className="text-lg text-muted-foreground">
        {description}
      </p>
    </motion.div>
  );
}