export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  // General
  {
    question: "Do I need an appointment?",
    answer: "For oil changes and inspections, no appointment is needed — just stop by. For all other services, we recommend calling ahead so we can make sure we have the right parts and time set aside for your vehicle.",
    category: "General",
  },
  {
    question: "What are your hours?",
    answer: "We're open Monday through Friday 7:30 AM to 5:30 PM, and Saturday 8:00 AM to 1:00 PM. We're closed on Sundays.",
    category: "General",
  },
  {
    question: "Do you offer loaner cars or shuttle service?",
    answer: "We don't currently offer loaner vehicles, but we're happy to drop you off or pick you up within the Manchester area while your car is being serviced. Just let us know when you schedule.",
    category: "General",
  },
  {
    question: "What forms of payment do you accept?",
    answer: "We accept Visa, Mastercard, American Express, Discover, cash, and personal checks. We also offer financing options for larger repairs.",
    category: "General",
  },

  // Services
  {
    question: "Do you work on all makes and models?",
    answer: "Yes, we service all domestic and foreign vehicles — cars, trucks, and SUVs. We specialize in Honda, Toyota, Ford, Chevy, and Subaru, but we can handle just about anything.",
    category: "Services",
  },
  {
    question: "Do you do warranty work?",
    answer: "We are not a dealer, so we cannot perform manufacturer warranty repairs. However, all of our own work comes with a 24-month / 24,000-mile warranty.",
    category: "Services",
  },
  {
    question: "Can I bring my own parts?",
    answer: "We prefer to supply our own parts because we can guarantee their quality and warranty them. If you bring your own parts, we'll install them but the parts won't be covered under our warranty.",
    category: "Services",
  },
  {
    question: "Do you provide written estimates?",
    answer: "Always. We will never start work without your approval on a written estimate. If anything changes during the repair, we'll call you before proceeding.",
    category: "Services",
  },

  // Pricing
  {
    question: "How do your prices compare to the dealer?",
    answer: "Our labor rates are typically 30-40% less than dealer rates, and we use quality OEM or equivalent parts. You get the same quality of work without the dealer markup.",
    category: "Pricing",
  },
  {
    question: "Do you offer financing?",
    answer: "Yes, we offer financing options for repairs over $500. Ask Sarah at the front desk about our financing plans — approval is quick and easy.",
    category: "Pricing",
  },
  {
    question: "Is your diagnostic fee applied to the repair?",
    answer: "Yes — if you choose to have us perform the repair, the diagnostic fee is applied toward the total cost of the job.",
    category: "Pricing",
  },

  // Warranty
  {
    question: "What does your warranty cover?",
    answer: "All of our repairs come with a 24-month / 24,000-mile warranty on parts and labor. If something we fixed doesn't hold up, we'll make it right at no additional cost.",
    category: "Warranty",
  },
  {
    question: "What if I have a problem after hours?",
    answer: "If you experience an issue with a repair we performed, call us at (603) 555-0147 and leave a message. We'll get back to you first thing the next business day. For emergencies, we recommend calling AAA.",
    category: "Warranty",
  },
];

export const faqCategories = [...new Set(faqs.map((f) => f.category))];
