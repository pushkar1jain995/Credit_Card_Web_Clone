"use client";

import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../../components/ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock4,
  Percent,
  UserRound,
  FileEdit,
  CreditCard,
  Receipt,
} from "lucide-react";

export default function AnimatedModalDemo() {
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
    <div className="py-40  flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Learn More
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
          ℹ️
          </div>
        </ModalTrigger>
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
            <div className="py-10 flex flex-wrap gap-4 items-start justify-center max-w-sm mx-auto">
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
          <ModalFooter className="gap-4 flex-wrap justify-center">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm min-w-[84px]">
              Cancel
            </button>
            <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black min-w-[84px]">
              Apply Now
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}