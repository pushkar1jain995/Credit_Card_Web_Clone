"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import { Cover } from "@/components/ui/cover";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import React from "react";
import {
  ShieldCheck,
  Clock4,
  Percent,
  UserRound,
  FileEdit,
  CreditCard,
  Receipt,
} from "lucide-react";

export function HeroSection() {
  const images = [
    "https://images.unsplash.com/photo-1556740772-1a741367b93e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1699973056666-b1eed2289d75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNyZWRpdCUyMGNhcmR8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1681819806705-82a1968cf5f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNyZWRpdCUyMGNhcmR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1556740720-776b84291f8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNyZWRpdCUyMGNhcmR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1430276084627-789fe55a6da0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNyZWRpdCUyMGNhcmR8ZW58MHx8MHx8fDA%3D",
  ];

  const services = [
    {
      icon: <ShieldCheck className="mr-1 h-4 w-4" />,
      text: "Secure transactions",
    },
    {
      icon: <Percent className="mr-1 h-4 w-4" />,
      text: "Low interest rates",
    },
    {
      icon: <Clock4 className="mr-1 h-4 w-4" />,
      text: "24/7 customer support",
    },
    {
      icon: <FileEdit className="mr-1 h-4 w-4" />,
      text: "Easy application process",
    },
    {
      icon: <CreditCard className="mr-1 h-4 w-4" />,
      text: "Flexible payment options",
    },
    {
      icon: <Receipt className="mr-1 h-4 w-4" />,
      text: "Transparent fees",
    },
  ];
  return (
    <section className="relative min-h-screen pt-16 overflow-hidden">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-small" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

      <Container className="relative z-10 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)] py-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
            <Cover>Elevate Your Financial Journey</Cover>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Experience premium benefits, exclusive rewards, and unmatched
              security with our innovative credit card solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Started
              </Button>
              <Modal>
                <ModalTrigger className="hover:bg-gray-900">Learn More</ModalTrigger>
                <ModalBody>
                  <ModalContent>
                    <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                      Learn more about our{" "}
                      <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                        services
                      </span>{" "}
                      today!
                    </h4>
                    <div className="flex justify-center items-center">
                      {images.map((image, idx) => (
                        <motion.div
                          key={"images" + idx}
                          style={{
                            rotate: Math.random() * 20 - 10,
                          }}
                          whileHover={{
                            scale: 1.1,
                            rotate: 0,
                            zIndex: 100,
                          }}
                          whileTap={{
                            scale: 1.1,
                            rotate: 0,
                            zIndex: 100,
                          }}
                          className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                        >
                          <Image
                            src={image}
                            alt="credit company images"
                            width="500"
                            height="500"
                            className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                          />
                        </motion.div>
                      ))}
                    </div>
                    <div className="py-3 flex flex-wrap gap-4 items-start justify-center max-w-sm mx-auto">
                      {services.map((service, idx) => (
                        <div
                          key={`service-${idx}`}
                          className="flex items-center justify-center"
                        >
                          <span className="text-neutral-700 dark:text-neutral-300 text-sm flex items-center">
                            {service.icon} {service.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </ModalContent>
                </ModalBody>
              </Modal>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative lg:h-[600px]"
          >
            <div className="relative flex items-center justify-center">
              <BackgroundGradient className="rounded-[22px] max-w-sm bg-white dark:bg-zinc-900">
              <Image
                src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1000"
                alt="Premium Credit Card"
                width={350}
                height={400}
                className="object-contain rounded-2xl w-auto h-auto"
                priority
              />
              </BackgroundGradient>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
