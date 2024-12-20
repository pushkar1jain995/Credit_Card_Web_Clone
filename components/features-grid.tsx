"use client";

import { motion } from "framer-motion";
import { Shield, Gift, Globe, Wallet } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Advanced Security",
    description: "State-of-the-art protection for your transactions with real-time fraud monitoring.",
  },
  {
    icon: Gift,
    title: "Exclusive Rewards",
    description: "Earn points on every purchase and unlock premium rewards and experiences.",
  },
  {
    icon: Globe,
    title: "Global Acceptance",
    description: "Use your card worldwide with no foreign transaction fees.",
  },
  {
    icon: Wallet,
    title: "Smart Budgeting",
    description: "Track your spending and manage your finances with our intuitive app.",
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Our Card
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the perfect blend of security, rewards, and convenience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-card rounded-xl border hover:border-primary/50 transition-colors"
            >
              <div className="mb-4">
                <feature.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}