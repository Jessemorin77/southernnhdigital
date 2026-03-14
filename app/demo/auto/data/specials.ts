export interface Special {
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  details: string[];
  cta: string;
}

export const specials: Special[] = [
  {
    title: "Oil Change Special",
    description: "Full synthetic oil change with filter and 21-point inspection.",
    price: "$49.99",
    originalPrice: "$79.99",
    badge: "Most Popular",
    details: [
      "Up to 5 quarts full synthetic oil",
      "New oil filter",
      "21-point inspection",
      "Tire pressure check & adjust",
    ],
    cta: "Claim This Offer",
  },
  {
    title: "Brake Service Package",
    description: "Front or rear brake pads installed with rotor inspection.",
    price: "$149.99",
    originalPrice: "$199.99",
    badge: "Save $50",
    details: [
      "Premium brake pads",
      "Rotor inspection & measurement",
      "Brake fluid check",
      "Road test included",
    ],
    cta: "Claim This Offer",
  },
  {
    title: "AC Recharge",
    description: "Beat the heat — full AC performance test and refrigerant recharge.",
    price: "$129.99",
    originalPrice: "$169.99",
    badge: "Seasonal",
    details: [
      "AC performance test",
      "Refrigerant recharge",
      "Leak check",
      "Vent temperature verification",
    ],
    cta: "Claim This Offer",
  },
  {
    title: "New Customer Special",
    description: "First time at Granite State? Get a free inspection with any service over $100.",
    price: "FREE Inspection",
    badge: "First Visit",
    details: [
      "Complimentary multi-point inspection",
      "With any service over $100",
      "New customers only",
      "No appointment needed",
    ],
    cta: "Schedule Your First Visit",
  },
];
