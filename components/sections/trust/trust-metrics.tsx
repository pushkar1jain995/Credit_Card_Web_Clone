"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    value: "20M+",
    label: "Active Users Worldwide"
  },
  {
    value: "150+",
    label: "Countries Supported"
  },
  {
    value: "99.9%",
    label: "Service Uptime"
  }
];

export function TrustMetrics() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="mt-16 grid md:grid-cols-3 gap-8 text-center"
    >
      {metrics.map((metric, index) => (
        <div key={index} className="p-6 rounded-xl bg-card border">
          <div className="text-4xl font-bold mb-2 text-primary">{metric.value}</div>
          <p className="text-muted-foreground">{metric.label}</p>
        </div>
      ))}
    </motion.div>
  );
}