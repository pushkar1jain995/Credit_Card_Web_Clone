export const products = [
  {
    id: "starter",
    name: "Starter Card",
    description: "Perfect for building credit",
    annualFee: 0,
    features: [
      "No annual fee",
      "1% cashback on all purchases",
      "Zero fraud liability",
      "Virtual card numbers",
      "Mobile app access"
    ]
  },
  {
    id: "rewards",
    name: "Rewards Plus",
    description: "Maximize your rewards",
    annualFee: 95,
    popular: true,
    features: [
      "3% cashback on dining",
      "2% on travel",
      "1.5% on everything else",
      "Travel insurance",
      "Priority customer service",
      "No foreign transaction fees"
    ]
  },
  {
    id: "elite",
    name: "Elite",
    description: "Premium travel benefits",
    annualFee: 495,
    features: [
      "5% on travel and dining",
      "2% on everything else",
      "Airport lounge access",
      "Annual travel credit",
      "Global entry credit",
      "Concierge service",
      "Premium travel insurance"
    ]
  }
];

export const comparisonFeatures = [
  {
    id: "cashback",
    name: "Cashback Rewards",
    availability: {
      starter: true,
      rewards: true,
      elite: true
    }
  },
  {
    id: "foreign-fees",
    name: "No Foreign Transaction Fees",
    availability: {
      starter: false,
      rewards: true,
      elite: true
    }
  },
  {
    id: "lounge-access",
    name: "Airport Lounge Access",
    availability: {
      starter: false,
      rewards: false,
      elite: true
    }
  },
  {
    id: "travel-insurance",
    name: "Travel Insurance",
    availability: {
      starter: false,
      rewards: true,
      elite: true
    }
  },
  {
    id: "concierge",
    name: "Concierge Service",
    availability: {
      starter: false,
      rewards: false,
      elite: true
    }
  },
  {
    id: "virtual-cards",
    name: "Virtual Card Numbers",
    availability: {
      starter: true,
      rewards: true,
      elite: true
    }
  }
];