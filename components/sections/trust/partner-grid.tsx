"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Partner {
  name: string;
  logo: string;
  description: string;
}

interface PartnerGridProps {
  partners: Partner[];
}

export function PartnerGrid({ partners }: PartnerGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {partners.map((partner, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative"
        >
          <div className="aspect-[4/3] relative overflow-hidden rounded-xl bg-gradient-to-b from-background/80 to-background mb-4">
            <Image
              src={partner.logo}
              alt={partner.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">{partner.name}</h3>
            <p className="text-sm text-muted-foreground">{partner.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}