"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Gift, Globe, Wallet, CreditCard, Lock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Advanced Security",
    description: "State-of-the-art protection with real-time fraud monitoring and zero liability."
  },
  {
    icon: Gift,
    title: "Rewards Program",
    description: "Earn points on every purchase and unlock premium rewards and experiences."
  },
  {
    icon: Globe,
    title: "Global Acceptance",
    description: "Use your card worldwide with no foreign transaction fees on premium cards."
  },
  {
    icon: Wallet,
    title: "Digital Wallet",
    description: "Seamlessly integrate with Apple Pay, Google Pay, and Samsung Pay."
  },
  {
    icon: CreditCard,
    title: "Virtual Cards",
    description: "Generate virtual card numbers for safer online shopping."
  },
  {
    icon: Lock,
    title: "Instant Lock",
    description: "Lock your card instantly from our mobile app if lost or stolen."
  }
];

export function ProductFeatures() {
  return (
    <section className="py-16 bg-background">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Card Features</h2>
          <p className="text-muted-foreground">
            Discover the benefits that come with every CreditPro card
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <feature.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}