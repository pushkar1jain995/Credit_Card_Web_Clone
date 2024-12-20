"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  content: string;
  image: string;
  index: number;
}

export function FeatureCard({ title, description, content, image, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 to-background/80 group-hover:from-background/20 group-hover:to-background/90 transition-all duration-500" />
      
      <div className="relative z-10 p-8">
        <h3 className={cn(
          "text-2xl md:text-3xl font-bold mb-4",
          "bg-clip-text text-transparent bg-gradient-to-r",
          "from-foreground to-foreground/80"
        )}>
          {title}
        </h3>
        <p className="text-lg text-muted-foreground mb-6">{description}</p>
        <p className="text-foreground/90">{content}</p>
      </div>

      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </motion.div>
  );
}