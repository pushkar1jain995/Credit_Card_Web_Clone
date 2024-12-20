"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 2);
  const secondRow = products.slice(2, 4);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <div
      ref={ref}
      className="relative h-[300vh] bg-background py-40 overflow-hidden"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center">
        <motion.div style={{ y }} className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background z-10" />
          
          {/* Hero Content */}
          <div className="relative z-20 container mx-auto px-4 mb-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-center mb-6"
            >
              Discover Premium Benefits
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-muted-foreground text-center mb-8 max-w-2xl mx-auto"
            >
              Experience unmatched rewards, security, and convenience with our premium credit card solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center gap-4"
            >
              <Button size="lg">Apply Now</Button>
              <Button size="lg" variant="outline">Compare Cards</Button>
            </motion.div>
          </div>

          {/* Parallax Images */}
          <motion.div style={{ y: y2 }} className="flex justify-center gap-4 px-4">
            {firstRow.map((product) => (
              <a
                key={product.title}
                href={product.link}
                className="relative h-96 w-[30rem] overflow-hidden rounded-xl group"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-500" />
                <h3 className="absolute bottom-4 left-4 text-white text-2xl font-semibold">{product.title}</h3>
              </a>
            ))}
          </motion.div>
          
          <motion.div style={{ y }} className="flex justify-center gap-4 px-4 mt-4">
            {secondRow.map((product) => (
              <a
                key={product.title}
                href={product.link}
                className="relative h-96 w-[30rem] overflow-hidden rounded-xl group"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-500" />
                <h3 className="absolute bottom-4 left-4 text-white text-2xl font-semibold">{product.title}</h3>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};