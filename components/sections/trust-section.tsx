"use client";

import { Container } from "@/components/ui/container";
import { SectionHeader } from "./trust/section-header";
import { PartnerGrid } from "./trust/partner-grid";
import { TrustMetrics } from "./trust/trust-metrics";
import { partners } from "./trust/data";

export function TrustSection() {
  return (
    <section className="py-24 bg-black/5 dark:bg-white/5 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

      <Container className="relative z-10">
        <SectionHeader
          title="Trusted by Industry Leaders"
          description="Join millions of customers who rely on our secure and innovative financial solutions"
        />
        <PartnerGrid partners={partners} />
        <TrustMetrics />
      </Container>
    </section>
  );
}