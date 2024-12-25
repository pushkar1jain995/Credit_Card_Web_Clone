"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CreditCard } from "lucide-react";

interface LoadingScreenProps {
  className?: string;
}

export function LoadingScreen({ className }: LoadingScreenProps) {
  return (
    <div className={cn(
      "fixed inset-0 z-50 flex items-center justify-center overflow-hidden",
      className
    )}>
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: "200%" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(var(--background))_70%)]" />
      </div>

      {/* Technology pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px] opacity-30" />

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="mb-8"
        >
          <CreditCard className="h-12 w-12 text-primary" />
        </motion.div>

        {/* Animated rings */}
        <div className="relative">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border border-primary/50"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.5, opacity: [0, 0.5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeOut"
              }}
            />
          ))}

          {/* Center dot with gradient */}
          <motion.div
            className="h-4 w-4 rounded-full bg-gradient-to-r from-primary to-primary/80"
            animate={{ scale: [0.8, 1, 0.8] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Loading text with gradient */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary"
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
}