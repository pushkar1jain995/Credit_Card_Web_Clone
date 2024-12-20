"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { ProductCard } from "./product-card";
import { products } from "./data";

export function ProductCards() {
  return (
    <section className="py-16 bg-black/5 dark:bg-white/5">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}