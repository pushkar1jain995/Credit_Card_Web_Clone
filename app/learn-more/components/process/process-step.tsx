"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function ProcessStep({ step, title, description, icon }: ProcessStepProps) {
  return (
    <motion.div 
      whileHover={{ x: 10 }}
      className="flex gap-6 items-start group"
    >
      <div className="relative">
        <div className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center",
          "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground",
          "transition-colors duration-300"
        )}>
          {icon}
        </div>
        {/* Connecting line */}
        <div className="absolute top-12 bottom-0 left-1/2 w-px bg-border group-hover:bg-primary/50 -translate-x-1/2 transition-colors duration-300" />
      </div>

      <div className="flex-1 pb-12">
        <div className="text-sm text-muted-foreground mb-2">Step {step}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}