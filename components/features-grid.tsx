"use client";

import { HoverEffect } from "../components/ui/card-hover-effect";
import { motion } from "framer-motion";
import { Shield, Gift, Globe, Wallet, Phone, PercentSquareIcon } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Advanced Security",
    description: "State-of-the-art protection for your transactions with real-time fraud monitoring.",
    link: "#",
  },
  {
    icon: Gift,
    title: "Exclusive Rewards",
    description: "Earn points on every purchase and unlock premium rewards and experiences.",
    link: "#",
  },
  {
    icon: Globe,
    title: "Global Acceptance",
    description: "Use your card worldwide with no foreign transaction fees.",
    link: "#",
  },
  {
    icon: Wallet,
    title: "Smart Budgeting",
    description: "Track your spending and manage your finances with our intuitive app.",
    link: "#",
  },
  {
    icon: Phone,
    title: "24/7 Customer Support",
    description: "Get assistance anytime with our dedicated customer support team.",
    link: "#",
  },
  {
    icon: PercentSquareIcon,
    title: "Cashback Offers",
    description: "Enjoy cashback on various purchases and save more with every transaction.",
    link: "#",
  },
];

export function FeaturesGrid() {
  const items = features.map((feature) => ({
    title: feature.title,
    description: feature.description,
    link: feature.link,
    icon: feature.icon,
  }));
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
        <HoverEffect items={items} />
      </div>
    </section>
  );
}
