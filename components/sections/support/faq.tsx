"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I report a lost or stolen card?",
    answer: "You can report a lost or stolen card immediately through our mobile app, online banking, or by calling our 24/7 support line. Your card will be blocked instantly, and a replacement will be sent to you."
  },
  {
    question: "How do I dispute a transaction?",
    answer: "Log into your online account or mobile app, locate the transaction in question, and select 'Dispute Transaction.' Follow the prompts to submit your claim. You can also call our support team for assistance."
  },
  {
    question: "When will I receive my new card?",
    answer: "New cards typically arrive within 7-10 business days. If you need your card sooner, we offer expedited shipping options that can deliver your card within 2-3 business days."
  },
  {
    question: "How do I activate my new card?",
    answer: "You can activate your new card through our mobile app, online banking, or by calling the activation number provided with your card. The process takes just a few minutes."
  },
  {
    question: "How do I change my PIN?",
    answer: "You can change your PIN through our secure mobile app, at any of our ATMs, or by calling our support team. For security reasons, some methods may require additional verification."
  }
];

export function FAQSection() {
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
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">
            Find quick answers to common questions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </Container>
    </section>
  );
}