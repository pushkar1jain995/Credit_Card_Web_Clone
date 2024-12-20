"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BenefitCardProps {
  title: string;
  description: string;
  icon: string;
  image: string;
}

export function BenefitCard({ title, description, icon, image }: BenefitCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative rounded-xl overflow-hidden group"
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
      </div>

      <div className="relative p-8">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className={cn(
          "text-xl font-semibold mb-2",
          "bg-clip-text text-transparent bg-gradient-to-r",
          "from-foreground to-foreground/80"
        )}>
          {title}
        </h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}