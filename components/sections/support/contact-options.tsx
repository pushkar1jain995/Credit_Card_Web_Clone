"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageSquare, Video } from "lucide-react";

const contactOptions = [
  {
    icon: Phone,
    title: "Phone Support",
    description: "Talk to our support team 24/7",
    action: "Call Now",
    available: "Available 24/7"
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with our support team instantly",
    action: "Start Chat",
    available: "Available 24/7"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Get help via email",
    action: "Send Email",
    available: "Response within 24 hours"
  },
  {
    icon: Video,
    title: "Video Call",
    description: "Schedule a video call with an expert",
    action: "Schedule Call",
    available: "By appointment"
  }
];

export function ContactOptions() {
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
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground">
            Choose your preferred way to get in touch
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <option.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                  <p className="text-muted-foreground mb-4">{option.description}</p>
                  <Button className="w-full mb-2">{option.action}</Button>
                  <p className="text-sm text-muted-foreground">{option.available}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}