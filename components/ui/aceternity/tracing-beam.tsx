"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const TracingBeam = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const mouseY = useMotionValue(0);
  const springY = useSpring(mouseY, {
    damping: 25,
    stiffness: 700,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrollProgress = (window.scrollY - rect.top) / rect.height;
      mouseY.set(rect.height * Math.min(Math.max(scrollProgress, 0), 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mouseY]);

  if (!isMounted) return null;

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
    >
      <div className="absolute left-8 top-0 w-px h-full bg-gradient-to-b from-primary/20 via-primary to-primary/20" />
      <motion.div
        className="absolute left-8 w-2 h-2 -ml-1 rounded-full bg-primary"
        style={{ top: springY }}
      />
      {children}
    </motion.div>
  );
};