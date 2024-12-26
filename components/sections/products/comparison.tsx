"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X } from "lucide-react";
import { products, comparisonFeatures } from "./data";

export function ProductComparison() {
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
          <h2 className="text-3xl font-bold mb-4">Compare Cards</h2>
          <p className="text-muted-foreground">
            Find the perfect card that matches your needs
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Feature</TableHead>
                {products.map((product) => (
                  <TableHead key={product.id} className="text-center">
                    {product.name}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonFeatures.map((feature) => (
                <TableRow key={feature.id}>
                  <TableCell className="font-medium">{feature.name}</TableCell>
                  {products.map((product) => (
                    <TableCell key={product.id} className="text-center">
                      {feature.availability[product.id as keyof typeof feature.availability] ? (
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Container>
    </section>
  );
}