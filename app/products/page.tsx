import { ProductsHero } from "@/components/sections/products/hero";
import { ProductCards } from "@/components/sections/products/cards";
import { ProductFeatures } from "@/components/sections/products/features";
import { ProductComparison } from "@/components/sections/products/comparison";
import { ProductCTA } from "@/components/sections/products/cta";

export default function ProductsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <ProductsHero />
      <ProductCards />
      <ProductFeatures />
      <ProductComparison />
      <ProductCTA />
    </main>
  );
}