"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, ShoppingBag, Utensils, Plane } from "lucide-react";

const rewards = [
  {
    icon: ShoppingBag,
    title: "Shopping Rewards",
    description: "Earn up to 5% cashback on retail purchases at selected stores"
  },
  {
    icon: Utensils,
    title: "Dining Benefits",
    description: "Get up to 4X points at restaurants worldwide"
  },
  {
    icon: Plane,
    title: "Travel Points",
    description: "Earn 3X points on flights and hotels"
  },
  {
    icon: Gift,
    title: "Welcome Bonus",
    description: "Earn 60,000 bonus points after qualifying purchases"
  }
];

export function RewardsSection() {
  return (
    <section className="py-16 bg-black/5 dark:bg-white/5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Rewards Program</h2>
          <p className="text-muted-foreground">
            Earn points on every purchase and redeem for what matters most to you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rewards.map((reward, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <reward.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{reward.title}</h3>
                  <p className="text-muted-foreground">{reward.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}