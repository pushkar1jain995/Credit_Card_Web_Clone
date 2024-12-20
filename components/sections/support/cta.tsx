"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone } from "lucide-react";

export function SupportCTA() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">
            Still Need Help?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Our support team is available 24/7 to assist you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="group">
              <MessageSquare className="mr-2 h-4 w-4" />
              Start Chat
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10">
              <Phone className="mr-2 h-4 w-4" />
              Call Support
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}