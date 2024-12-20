"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export function HeroSection() {
  const router = useRouter();
  return (
    <section className="relative min-h-screen pt-16 overflow-hidden">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-small" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

      <Container className="relative z-10 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)] py-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
              Elevate Your Financial Journey
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Experience premium benefits, exclusive rewards, and unmatched security with our innovative credit card solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Started
              </Button>
              <Button 
  size="lg" 
  variant="outline" 
  onClick={() => {
    console.log('Navigating to /learn-more'); // Optional debug log
    router.push('/learn-more');
  }}
>
  Learn More
</Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative lg:h-[600px]"
          >
            <div className="relative w-full h-full">
              <Image
                src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1000"
                alt="Premium Credit Card"
                fill
                className="object-contain rounded-2xl"
                priority
              />
              {/* Gradient overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}