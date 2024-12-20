"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Bell, Fingerprint } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Fraud Protection",
    description: "24/7 monitoring and zero liability for unauthorized charges"
  },
  {
    icon: Lock,
    title: "Instant Card Lock",
    description: "Lock your card instantly from our mobile app"
  },
  {
    icon: Bell,
    title: "Real-time Alerts",
    description: "Instant notifications for all transactions"
  },
  {
    icon: Fingerprint,
    title: "Secure Authentication",
    description: "Biometric authentication for all sensitive operations"
  }
];

export function SecuritySection() {
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
          <h2 className="text-3xl font-bold mb-4">Security Features</h2>
          <p className="text-muted-foreground">
            Your security is our top priority
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
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