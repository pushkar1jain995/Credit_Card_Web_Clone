"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, BookOpen, PlayCircle, Download } from "lucide-react";

const resources = [
  {
    icon: FileText,
    title: "User Guides",
    description: "Step-by-step guides for card features and services",
    action: "View Guides"
  },
  {
    icon: BookOpen,
    title: "Knowledge Base",
    description: "Detailed articles about card benefits and policies",
    action: "Browse Articles"
  },
  {
    icon: PlayCircle,
    title: "Video Tutorials",
    description: "Visual guides for using our services",
    action: "Watch Videos"
  },
  {
    icon: Download,
    title: "Downloads",
    description: "Forms, documents, and mobile apps",
    action: "Download Now"
  }
];

export function ResourceCenter() {
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
          <h2 className="text-3xl font-bold mb-4">Resource Center</h2>
          <p className="text-muted-foreground">
            Everything you need to make the most of your card
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <resource.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground mb-4">{resource.description}</p>
                  <Button variant="outline" className="w-full">
                    {resource.action}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}