"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Plane, Hotel, Car, Umbrella } from "lucide-react";

const travelPerks = [
  {
    icon: Plane,
    title: "Airport Lounge Access",
    description: "Enjoy complimentary access to over 1,300 airport lounges worldwide"
  },
  {
    icon: Hotel,
    title: "Hotel Benefits",
    description: "Get room upgrades and late checkout at luxury hotels"
  },
  {
    icon: Car,
    title: "Car Rental Insurance",
    description: "Comprehensive coverage when you rent with your card"
  },
  {
    icon: Umbrella,
    title: "Travel Protection",
    description: "Trip cancellation and delay insurance included"
  }
];

export function TravelPerks() {
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
          <h2 className="text-3xl font-bold mb-4">Travel Benefits</h2>
          <p className="text-muted-foreground">
            Enjoy premium travel perks and protection worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {travelPerks.map((perk, index) => (
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