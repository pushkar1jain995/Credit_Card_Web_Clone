"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are the credit score requirements?",
    answer: "Credit score requirements vary by card type. Our Standard card typically requires a score of 670+, Premium 720+, and Elite 750+. However, we consider multiple factors in our approval process."
  },
  {
    question: "How long does the application process take?",
    answer: "Most applications receive an instant decision. If we need additional information, the process may take 5-7 business days. Once approved, you'll receive your card within 7-10 business days."
  },
  {
    question: "Are there any foreign transaction fees?",
    answer: "Our Premium and Elite cards have no foreign transaction fees. The Standard card has a 3% foreign transaction fee."
  },
  {
    question: "How do I redeem my rewards?",
    answer: "Rewards can be redeemed through our mobile app or website. Options include statement credits, travel bookings, gift cards, and direct deposits to your bank account."
  },
  {
    question: "What kind of travel insurance is included?",
    answer: "Coverage varies by card type. All cards include basic trip cancellation and car rental insurance. Premium and Elite cards add trip delay, lost baggage, and emergency medical coverage."
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our credit cards
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}