"use client";

import { TextReveal } from "@/components/ui/aceternity/text-reveal";
import { TracingBeam } from "@/components/ui/aceternity/tracing-beam";
import { ProcessStep } from "./process-step";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    step: "1",
    title: "Apply Online",
    description: "Complete our simple online application in minutes. No paperwork needed."
  },
  {
    step: "2",
    title: "Quick Decision",
    description: "Get an instant decision on your application with our advanced processing system."
  },
  {
    step: "3",
    title: "Receive Your Card",
    description: "Your new card will arrive within 5-7 business days after approval."
  },
  {
    step: "4",
    title: "Start Earning",
    description: "Begin using your card and earning rewards on every purchase."
  }
];

export function ProcessSection() {
  return (
    <TracingBeam className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <TextReveal 
            text="How It Works" 
            className="text-4xl md:text-5xl font-bold text-center mb-20"
          />
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProcessStep {...step} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <Button size="lg" className="group">
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </TracingBeam>
  );
}