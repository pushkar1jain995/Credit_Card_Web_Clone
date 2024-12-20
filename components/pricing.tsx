"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const plans = [
  {
    name: "Standard",
    price: "0",
    description: "Perfect for getting started",
    features: [
      "No annual fee",
      "2% cashback on dining",
      "1% cashback on all purchases",
      "Basic travel insurance",
      "24/7 customer support"
    ]
  },
  {
    name: "Premium",
    price: "95",
    description: "Most popular choice",
    features: [
      "5% cashback on dining",
      "3% cashback on travel",
      "2% cashback on all purchases",
      "Comprehensive travel insurance",
      "Airport lounge access",
      "Concierge service"
    ],
    highlighted: true
  },
  {
    name: "Elite",
    price: "295",
    description: "For the distinguished cardholder",
    features: [
      "7% cashback on dining",
      "5% cashback on travel",
      "3% cashback on all purchases",
      "Premium travel insurance",
      "Unlimited lounge access",
      "24/7 private concierge",
      "Exclusive event access"
    ]
  }
];

export function Pricing() {
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
            Choose Your Card
          </h2>
          <p className="text-lg text-muted-foreground">
            Select the perfect card for your lifestyle
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`relative h-full ${plan.highlighted ? 'border-primary shadow-lg' : ''}`}>
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/year</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="h-4 w-4 text-primary mr-2" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.highlighted ? "default" : "outline"}>
                    Apply Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}