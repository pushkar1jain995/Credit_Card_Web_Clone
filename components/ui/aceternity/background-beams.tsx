"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const BackgroundBeams = () => {
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top } = ref.current?.getBoundingClientRect() ?? {
        left: 0,
        top: 0,
      };
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    };

    ref.current?.addEventListener("mousemove", handleMouseMove);

    return () => {
      ref.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (!isMounted) return null;

  return (
    <div
      ref={ref}
      className="absolute inset-0 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          background:
            "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--primary) 0%, transparent 60%)",
          "--mouse-x": springX,
          "--mouse-y": springY,
        }}
      />
    </div>
  );
};