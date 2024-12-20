export interface Product {
  id: string;
  name: string;
  description: string;
  annualFee: number;
  features: string[];
  popular?: boolean;
}

export interface ComparisonFeature {
  id: string;
  name: string;
  availability: {
    [key: string]: boolean;
  };
}