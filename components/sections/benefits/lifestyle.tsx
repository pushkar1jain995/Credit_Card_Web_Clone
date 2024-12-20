"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Wine, Ticket, Music, Star } from "lucide-react";

const lifestylePerks = [
  {
    icon: Wine,
    title: "Fine Dining",
    description: "Priority reservations at exclusive restaurants worldwide"
  },
  {
    icon: Ticket,
    title: "Event Access",
    description: "Pre-sale tickets and VIP experiences for major events"
  },
  {
    icon: Music,
    title: "Entertainment",
    description: "Exclusive access to concerts and shows"
  },
  {
    icon: Star,
    title: "Luxury Services",
    description: "24/7 concierge service for all your needs"
  }
];

export function LifestyleSection() {
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
          <h2 className="text-3xl font-bold mb-4">Lifestyle Benefits</h2>
          <p className="text-muted-foreground">
            Elevate your lifestyle with exclusive privileges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {lifestylePerks.map((perk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <perk.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{perk.title}</h3>
                  <p className="text-muted-foreground">{perk.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}