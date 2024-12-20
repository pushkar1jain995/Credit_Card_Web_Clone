"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Product } from "./types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="relative h-full transition-shadow hover:shadow-lg">
      {product.popular && (
        <Badge className="absolute -top-2 right-4 bg-primary text-primary-foreground">
          Most Popular
        </Badge>
      )}
      
      <CardHeader>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">{product.name}</h3>
          <p className="text-muted-foreground">{product.description}</p>
        </div>
        <div className="mt-4">
          {product.annualFee === 0 ? (
            <div className="text-3xl font-bold">No Annual Fee</div>
          ) : (
            <div>
              <span className="text-3xl font-bold">${product.annualFee}</span>
              <span className="text-muted-foreground">/year</span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent>
        <ul className="space-y-3">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button className="w-full" variant={product.popular ? "default" : "outline"}>
          Apply Now
        </Button>
      </CardFooter>
    </Card>
  );
}