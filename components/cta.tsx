"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

export function CTA() {
  return (
    <section className="relative overflow-hidden">
          <div className=" absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    
          <CardSpotlight>
            <div className="py-24 container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto text-center"
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                  Ready to Experience Premium Banking?
                </h2>
                <p className="text-xl mb-8 text-white/80">
                  Join thousands of satisfied members who have transformed their
                  financial journey with our premium credit cards.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" className="group">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-white/20 hover:bg-white/10 text-white hover:text-white"
                    >
                    Compare Cards
                    </Button>
                </div>
              </motion.div>
            </div>
          </CardSpotlight>
        </section>
  );
}