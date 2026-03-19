export const shopInfo = {
  name: "Granite Plumbing & Home Services",
  shortName: "Granite Plumbing",
  tagline: "Reliable Service. Honest Pricing. Every Job.",
  phone: "(603) 555-0234",
  phoneHref: "tel:+16035550234",
  emergencyPhone: "(603) 555-0234",
  email: "info@graniteplumbingnh.com",
  license: "NH License #4827",
  address: {
    street: "55 Industrial Drive",
    city: "Manchester",
    state: "NH",
    zip: "03103",
    full: "55 Industrial Drive, Manchester, NH 03103",
    mapUrl: "https://maps.google.com/?q=55+Industrial+Drive+Manchester+NH+03103",
  },
  hours: [
    { day: "Monday", hours: "7:00 AM – 6:00 PM" },
    { day: "Tuesday", hours: "7:00 AM – 6:00 PM" },
    { day: "Wednesday", hours: "7:00 AM – 6:00 PM" },
    { day: "Thursday", hours: "7:00 AM – 6:00 PM" },
    { day: "Friday", hours: "7:00 AM – 6:00 PM" },
    { day: "Saturday", hours: "8:00 AM – 2:00 PM" },
    { day: "Sunday", hours: "Emergency Only" },
  ],
  stats: {
    rating: 4.8,
    reviewCount: 310,
    yearsInBusiness: 18,
  },
  owner: {
    name: "Rick Dumont",
    title: "Owner & Master Plumber",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
  },
  services: [
    {
      name: "Plumbing Repair",
      description:
        "Leaking faucets, burst pipes, running toilets, fixture replacements — we diagnose fast and fix it right the first time. No temporary patches.",
      icon: "🔧",
      features: ["Leak detection & repair", "Pipe replacement", "Fixture installation", "Water line repair"],
    },
    {
      name: "Drain Cleaning",
      description:
        "Slow drains, stubborn clogs, sewer backups. We use camera inspections and hydro jetting to clear the problem and keep it from coming back.",
      icon: "🚿",
      features: ["Clog removal", "Hydro jetting", "Camera inspection", "Sewer line cleaning"],
    },
    {
      name: "Water Heater Services",
      description:
        "Installation, repair, and replacement for tank and tankless systems. We'll help you choose the right unit for your home and budget.",
      icon: "🔥",
      features: ["Tank & tankless install", "Repair & maintenance", "Energy-efficient upgrades", "Same-day replacement"],
    },
    {
      name: "Bathroom Remodeling",
      description:
        "From simple fixture upgrades to full gut renovations. We handle the plumbing, tiling, vanities, and everything in between.",
      icon: "🛁",
      features: ["Full renovations", "Tile & flooring", "Vanity & fixture install", "Accessibility upgrades"],
    },
    {
      name: "HVAC Service",
      description:
        "Heating and cooling installation, repair, and seasonal maintenance. Keep your home comfortable year-round with systems that actually work.",
      icon: "❄️",
      features: ["Furnace repair & install", "AC service & install", "Seasonal tune-ups", "Duct cleaning"],
    },
    {
      name: "Emergency Services",
      description:
        "Burst pipes, no heat in January, flooding basement — we answer 24/7 and dispatch a licensed tech to your door fast. No overtime surprises.",
      icon: "🚨",
      features: ["24/7 availability", "60-minute response", "Burst pipe repair", "No overtime charges"],
    },
  ],
  reviews: [
    {
      name: "Karen Mitchell",
      rating: 5,
      service: "Water Heater Install",
      text: "Our water heater died on a Friday night. Rick's team had a new tankless unit installed by Saturday afternoon. They explained all our options, gave us a fair price, and cleaned up like they were never there. Couldn't ask for more.",
      platform: "Google",
    },
    {
      name: "Tom Pelletier",
      rating: 5,
      service: "Emergency Pipe Repair",
      text: "Pipe burst in our basement at 2 AM in February. Called Granite and someone was at our door within 45 minutes. They stopped the flooding, replaced the pipe, and even helped us deal with the water damage referral. Lifesavers.",
      platform: "Google",
    },
    {
      name: "Sarah & Dan Moreau",
      rating: 5,
      service: "Bathroom Remodel",
      text: "We hired Granite for a full master bath renovation and the result is stunning. They were on time every day, kept the work area clean, and the tile work is flawless. Rick even caught a framing issue the previous contractor missed.",
      platform: "Yelp",
    },
    {
      name: "Mike Andreozzi",
      rating: 5,
      service: "Drain Cleaning",
      text: "Had a persistent slow drain that two other companies couldn't fix. Granite ran a camera down the line, found a root intrusion, and cleared it with hydro jetting. Problem solved in one visit. Should have called them first.",
      platform: "Google",
    },
    {
      name: "Linda Chen",
      rating: 5,
      service: "HVAC Repair",
      text: "Our furnace stopped working the week before Christmas. They came out same day, diagnosed a bad ignitor, had the part on the truck, and had us warm again within two hours. Fair price, friendly tech, no upselling. This is our go-to company now.",
      platform: "Facebook",
    },
  ],
  whyChooseUs: [
    {
      title: "Licensed, Bonded & Insured",
      description: "NH License #4827. Full liability coverage. You're protected from start to finish — no exceptions.",
      icon: "🛡️",
    },
    {
      title: "Upfront, Written Pricing",
      description: "You see the price before we start. No hourly surprises, no hidden fees, no \"well, while we're here\" upsells.",
      icon: "📋",
    },
    {
      title: "Same-Day Service",
      description: "Most calls are handled the same day. Emergency calls get a tech dispatched within the hour, 24/7/365.",
      icon: "⚡",
    },
    {
      title: "18 Years of Experience",
      description: "Nearly two decades serving Southern NH. We've seen every problem and we know how to fix it right.",
      icon: "🏆",
    },
    {
      title: "Background-Checked Techs",
      description: "Every technician passes a full background check and drug screening. These are people you can trust in your home.",
      icon: "✅",
    },
    {
      title: "100% Satisfaction Guarantee",
      description: "If you're not happy with our work, we come back and make it right — free of charge. Period.",
      icon: "🤝",
    },
  ],
  serviceAreas: [
    "Manchester",
    "Bedford",
    "Goffstown",
    "Hooksett",
    "Londonderry",
    "Derry",
    "Auburn",
    "Merrimack",
    "Nashua",
    "Concord",
  ],
  specials: [
    {
      title: "$50 Off Your First Service",
      description: "New customers get $50 off any service call. Just mention this offer when you book.",
      badge: "New Customer",
      terms: "Cannot be combined with other offers. Minimum $150 service.",
    },
    {
      title: "Free Estimates",
      description: "Every job starts with a free, no-obligation estimate. We'll assess the problem and give you a clear price before any work begins.",
      badge: "Always Free",
      terms: "Applies to standard service calls during business hours.",
    },
    {
      title: "10% Senior Discount",
      description: "We offer a 10% discount on all services for customers 65 and older. Our way of giving back to the community.",
      badge: "Seniors",
      terms: "Valid with ID. Cannot be combined with other offers.",
    },
  ],
  faqs: [
    {
      question: "How much does a typical service call cost?",
      answer: "It depends on the job, but we always provide a written estimate before starting any work. There are no hidden fees or surprise charges. A standard diagnostic/service call starts at $89, which gets applied to the cost of repair if you move forward.",
    },
    {
      question: "How fast can you respond to an emergency?",
      answer: "For emergencies like burst pipes, flooding, or no heat, we dispatch a licensed technician within 60 minutes, 24 hours a day, 7 days a week. Emergency calls are charged at the same rate as regular calls — no overtime gouging.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, checks, Visa, Mastercard, American Express, Discover, and Apple Pay. We also offer financing options for larger projects like water heater installations, bathroom remodels, and HVAC systems.",
    },
    {
      question: "Do you offer warranties on your work?",
      answer: "Yes. All labor carries a 2-year warranty, and manufacturer warranties apply to all parts and equipment we install. If something we fixed isn't right, we come back and make it right at no cost.",
    },
    {
      question: "Are your technicians background-checked?",
      answer: "Absolutely. Every technician on our team undergoes a full background check, drug screening, and is fully licensed and insured. We understand you're letting someone into your home, and we take that trust seriously.",
    },
    {
      question: "Do you work on weekends?",
      answer: "We offer Saturday service from 8 AM to 2 PM for scheduled appointments. Our 24/7 emergency line is available nights, weekends, and holidays — and we don't charge overtime rates.",
    },
  ],
};
