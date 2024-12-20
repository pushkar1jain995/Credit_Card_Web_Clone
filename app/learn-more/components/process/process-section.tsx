"use client";

import { TextReveal } from "@/components/ui/aceternity/text-reveal";
import { TracingBeam } from "@/components/ui/aceternity/tracing-beam";
import { ProcessStep } from "./process-step";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, CheckCircle, CreditCard, Gift } from "lucide-react";

const steps = [
  {
    step: "1",
    title: "Apply Online",
    description: "Complete our simple online application in minutes. No paperwork needed.",
    icon: <FileText className="w-6 h-6" />
  },
  {
    step: "2",
    title: "Quick Decision",
    description: "Get an instant decision on your application with our advanced processing system.",
    icon: <CheckCircle className="w-6 h-6" />
  },
  {
    step: "3",
    title: "Receive Your Card",
    description: "Your new card will arrive within 5-7 business days after approval.",
    icon: <CreditCard className="w-6 h-6" />
  },
  {
    step: "4",
    title: "Start Earning",
    description: "Begin using your card and earning rewards on every purchase.",
    icon: <Gift className="w-6 h-6" />
  }
];

export function ProcessSection() {
  return (
    <section className="relative">
      <TracingBeam>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <TextReveal 
              text="How It Works" 
              className="text-4xl md:text-6xl font-bold mb-6"
            />
            <p className="text-lg md:text-xl text-muted-foreground">
              Get started with your new card in four simple steps
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {steps.map((step) => (
              <ProcessStep key={step.step} {...step} />
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mt-16"
            >
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </TracingBeam>
    </section>
  );
}