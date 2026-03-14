export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  price: string;
  included: string[];
  signs: string[];
  process: { step: string; description: string }[];
  pricing: {
    range: string;
    factors: string[];
    note: string;
  };
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "oil-changes",
    title: "Oil Changes & Maintenance",
    shortTitle: "Oil Changes",
    description:
      "Keep your engine running smooth with regular oil changes and scheduled maintenance. We use quality filters and oils matched to your vehicle's specs.",
    icon: "🛢️",
    price: "From $39.99",
    included: [
      "Up to 5 quarts of conventional or synthetic oil",
      "New oil filter",
      "21-point inspection",
      "Tire pressure check & adjust",
      "Top off all fluids",
      "Visual brake inspection",
    ],
    signs: [
      "Dashboard oil change light is on",
      "Engine sounds louder than usual",
      "Oil looks dark and gritty on the dipstick",
      "You can't remember your last oil change",
      "You've driven 3,000–5,000 miles since last change",
    ],
    process: [
      { step: "Check In", description: "Drop off your vehicle — no appointment needed for oil changes." },
      { step: "Drain & Replace", description: "We drain the old oil, replace the filter, and fill with the correct grade of oil for your vehicle." },
      { step: "Inspect", description: "We perform a complimentary 21-point inspection while we're under the hood." },
      { step: "Report", description: "We'll let you know what we found and if anything needs attention soon." },
    ],
    pricing: {
      range: "$39.99 – $89.99",
      factors: ["Conventional vs. synthetic oil", "Vehicle make and model", "Oil capacity"],
      note: "We always provide a written estimate before any work begins.",
    },
    faqs: [
      { question: "How often should I change my oil?", answer: "Most modern vehicles can go 5,000–7,500 miles between oil changes with synthetic oil, but we recommend checking your owner's manual. Older vehicles or those using conventional oil should stick to every 3,000–5,000 miles." },
      { question: "Do I need synthetic oil?", answer: "Many newer vehicles require synthetic oil. We'll check your manufacturer's recommendations and let you know. Synthetic costs a bit more but lasts longer and provides better protection." },
      { question: "How long does an oil change take?", answer: "Typically 20–30 minutes. No appointment needed — just stop by during business hours." },
    ],
  },
  {
    slug: "brakes",
    title: "Brake Service & Repair",
    shortTitle: "Brakes",
    description:
      "Don't take chances with your brakes. From pad replacements to complete brake system overhauls, we keep you stopping safely.",
    icon: "🛑",
    price: "From $149.99",
    included: [
      "Brake pad or shoe replacement",
      "Rotor inspection and measurement",
      "Brake fluid check",
      "Caliper inspection",
      "Brake line inspection",
      "Road test after service",
    ],
    signs: [
      "Squealing or grinding noise when braking",
      "Brake pedal feels soft or spongy",
      "Vehicle pulls to one side when braking",
      "Steering wheel vibrates when braking",
      "Brake warning light is on",
    ],
    process: [
      { step: "Inspection", description: "We remove the wheels and measure pad thickness, rotor condition, and check all brake components." },
      { step: "Estimate", description: "We give you a written estimate with exactly what needs to be done and what it costs — no surprises." },
      { step: "Repair", description: "We replace worn pads, resurface or replace rotors as needed, and address any other issues found." },
      { step: "Test", description: "Every brake job gets a road test to make sure everything feels right before you drive away." },
    ],
    pricing: {
      range: "$149.99 – $499.99 per axle",
      factors: ["Pads only vs. pads and rotors", "Vehicle make and model", "Caliper replacement if needed"],
      note: "We always provide a written estimate before any work begins.",
    },
    faqs: [
      { question: "How long do brake pads last?", answer: "Typically 30,000–70,000 miles depending on your driving habits, vehicle, and pad material. City driving with frequent stops wears pads faster." },
      { question: "Can I just replace the pads?", answer: "Sometimes, but rotors often need to be resurfaced or replaced at the same time for proper braking performance. We'll measure and let you know." },
      { question: "How do I know if my brakes need service?", answer: "Squealing, grinding, vibrating, or a soft brake pedal are all signs. If your brake warning light is on, come in right away." },
    ],
  },
  {
    slug: "diagnostics",
    title: "Engine Diagnostics",
    shortTitle: "Diagnostics",
    description:
      "Check engine light on? We use dealer-level scan tools and years of experience to pinpoint the problem fast — so you're not paying for guesswork.",
    icon: "🔍",
    price: "From $99.99",
    included: [
      "OBD-II code scan and interpretation",
      "Live data analysis",
      "Component testing as needed",
      "Visual inspection of related systems",
      "Written report of findings",
      "Repair recommendations with estimates",
    ],
    signs: [
      "Check engine light is on or flashing",
      "Vehicle is running rough or misfiring",
      "Poor fuel economy",
      "Strange smells from the engine or exhaust",
      "Vehicle stalls or has trouble starting",
    ],
    process: [
      { step: "Scan", description: "We connect our advanced scan tools to read all stored and pending codes from your vehicle's computer." },
      { step: "Analyze", description: "Codes are just the starting point. We use live data, freeze frame data, and our experience to narrow down the actual cause." },
      { step: "Test", description: "We test specific components — sensors, actuators, circuits — to confirm the diagnosis before recommending repairs." },
      { step: "Report", description: "You get a clear explanation of the problem, what caused it, and a written estimate for the repair." },
    ],
    pricing: {
      range: "$99.99 – $149.99",
      factors: ["Complexity of the issue", "Number of systems involved", "Testing time required"],
      note: "Diagnostic fee is applied toward the cost of repair if you choose to have us fix it.",
    },
    faqs: [
      { question: "Can I just get the code read for free?", answer: "Parts stores offer free code reads, but a code alone doesn't tell you what's wrong — it tells you what the computer detected. Proper diagnostics involves testing to find the root cause." },
      { question: "Is it safe to drive with the check engine light on?", answer: "A steady light usually means you can drive to the shop. A flashing check engine light means stop driving immediately — it indicates a serious misfire that can damage your catalytic converter." },
      { question: "How long does diagnostics take?", answer: "Simple issues can be diagnosed in 30–60 minutes. Complex electrical or intermittent problems may take longer. We'll keep you updated." },
    ],
  },
  {
    slug: "inspections",
    title: "NH State Inspections",
    shortTitle: "Inspections",
    description:
      "Quick, thorough NH state safety and emissions inspections. If something needs fixing to pass, we'll give you honest options.",
    icon: "✅",
    price: "$39.99",
    included: [
      "Complete NH safety inspection",
      "OBD-II emissions test",
      "Brake system check",
      "Tire condition and tread depth",
      "Lights, signals, and wipers",
      "Steering and suspension components",
      "Windshield and glass condition",
      "Exhaust system inspection",
    ],
    signs: [
      "Your inspection sticker is expired or expiring soon",
      "You just moved to New Hampshire",
      "You recently purchased a vehicle",
      "Your vehicle failed inspection elsewhere and you want a second opinion",
    ],
    process: [
      { step: "Arrive", description: "No appointment needed for inspections. First come, first served during business hours." },
      { step: "Inspect", description: "We go through every item on the NH state checklist thoroughly and honestly." },
      { step: "Results", description: "If your vehicle passes, you get your new sticker. If it doesn't, we'll explain exactly what needs to be fixed." },
      { step: "Repair Options", description: "If repairs are needed, we'll give you a fair estimate. No pressure — you can have us fix it or take it elsewhere." },
    ],
    pricing: {
      range: "$39.99",
      factors: ["Same price for all vehicles"],
      note: "Inspection fee is separate from any repairs needed to pass.",
    },
    faqs: [
      { question: "When is my inspection due?", answer: "New Hampshire inspections are due by the last day of the month shown on your sticker. Driving with an expired sticker can result in a fine." },
      { question: "What if my car fails?", answer: "We'll tell you exactly what failed and why. You have 60 days to get the repairs done and come back for a free re-inspection on the failed items." },
      { question: "Do I need an appointment?", answer: "No — inspections are first come, first served. They typically take about 30 minutes." },
    ],
  },
  {
    slug: "steering-suspension",
    title: "Steering & Suspension",
    shortTitle: "Steering & Suspension",
    description:
      "Rough ride? Pulling to one side? We repair and replace shocks, struts, ball joints, tie rods, and more to get your ride smooth and safe.",
    icon: "🔧",
    price: "From $199.99",
    included: [
      "Complete suspension inspection",
      "Shock and strut evaluation",
      "Ball joint and tie rod check",
      "Control arm and bushing inspection",
      "Wheel alignment check",
      "Road test before and after",
    ],
    signs: [
      "Vehicle pulls to one side",
      "Uneven tire wear",
      "Clunking or knocking over bumps",
      "Excessive bouncing after hitting a bump",
      "Steering feels loose or wanders",
      "Nose dives when braking",
    ],
    process: [
      { step: "Test Drive", description: "We drive your vehicle to feel the issue firsthand before putting it on the lift." },
      { step: "Inspect", description: "Full inspection of all suspension and steering components — shocks, struts, ball joints, tie rods, bushings, and more." },
      { step: "Estimate", description: "We show you exactly what's worn and give you a written estimate with options for repair." },
      { step: "Repair & Align", description: "We replace worn components and perform an alignment to make sure everything is dialed in." },
    ],
    pricing: {
      range: "$199.99 – $899.99",
      factors: ["Which components need replacement", "Vehicle make and model", "Whether alignment is needed"],
      note: "We always provide a written estimate before any work begins.",
    },
    faqs: [
      { question: "How long do shocks and struts last?", answer: "Typically 50,000–100,000 miles, but New Hampshire roads can shorten that. If your ride feels bouncy or you hear clunking over bumps, it's time to check." },
      { question: "Do I need an alignment after suspension work?", answer: "Almost always yes. We include an alignment check with all suspension repairs and will recommend a full alignment when needed." },
      { question: "Can I drive with a bad ball joint?", answer: "A worn ball joint is a serious safety concern — if it fails completely, you can lose control of the vehicle. Don't wait on this one." },
    ],
  },
  {
    slug: "transmission",
    title: "Transmission Service",
    shortTitle: "Transmission",
    description:
      "Transmission problems don't get better on their own. From fluid changes to full rebuilds, we handle it all in-house.",
    icon: "⚙️",
    price: "From $179.99",
    included: [
      "Transmission fluid exchange",
      "Filter replacement (where applicable)",
      "Pan inspection and gasket replacement",
      "Electronic scan for transmission codes",
      "Road test to verify shift quality",
      "Fluid level and condition check",
    ],
    signs: [
      "Transmission slipping or hesitating",
      "Hard or rough shifting",
      "Grinding or shaking when shifting",
      "Burning smell",
      "Transmission fluid is dark or has particles",
      "Check engine light with transmission codes",
    ],
    process: [
      { step: "Evaluate", description: "We road test your vehicle, scan for codes, and check fluid condition to understand what's happening." },
      { step: "Diagnose", description: "Based on our findings, we determine if a fluid service, minor repair, or major repair is needed." },
      { step: "Estimate", description: "You get a clear, written estimate before we do any work. No surprises." },
      { step: "Service", description: "From a simple fluid exchange to a full rebuild, we handle transmission work in-house." },
    ],
    pricing: {
      range: "$179.99 – $3,500+",
      factors: ["Fluid service vs. repair vs. rebuild", "Vehicle make and model", "Automatic vs. manual transmission"],
      note: "We always provide a written estimate before any work begins.",
    },
    faqs: [
      { question: "How often should I change transmission fluid?", answer: "Most manufacturers recommend every 30,000–60,000 miles. Check your owner's manual, or we can look it up for you." },
      { question: "Is a transmission flush the same as a fluid exchange?", answer: "No. We perform fluid exchanges, not flushes. A fluid exchange is gentler on your transmission and replaces the old fluid without the high pressure that flushes use." },
      { question: "Can you fix my transmission or do I need a new one?", answer: "We always try to repair first. Many transmission issues can be resolved without a full replacement. We'll diagnose the problem and give you honest options." },
    ],
  },
  {
    slug: "ac-heating",
    title: "AC & Heating",
    shortTitle: "AC & Heating",
    description:
      "Stay comfortable year-round. We diagnose and repair automotive climate systems — from AC recharges to heater core replacements.",
    icon: "❄️",
    price: "From $129.99",
    included: [
      "AC system performance test",
      "Refrigerant level check and recharge",
      "Leak detection with UV dye",
      "Compressor and clutch inspection",
      "Heater core and blend door evaluation",
      "Cabin air filter check",
    ],
    signs: [
      "AC blows warm or lukewarm air",
      "Heater doesn't get hot",
      "Strange smells from the vents",
      "Foggy windshield that won't clear",
      "AC makes clicking or grinding noises",
      "AC only works on certain settings",
    ],
    process: [
      { step: "Test", description: "We check vent temperatures, system pressures, and overall performance to see what's happening." },
      { step: "Diagnose", description: "We use leak detection equipment, pressure gauges, and electrical testing to find the root cause." },
      { step: "Estimate", description: "You get a clear explanation and written estimate before we begin any repairs." },
      { step: "Repair", description: "From a simple recharge to compressor replacement, we handle it all and verify everything works before you leave." },
    ],
    pricing: {
      range: "$129.99 – $1,200+",
      factors: ["Type of repair needed", "Refrigerant type (R-134a vs. R-1234yf)", "Parts availability"],
      note: "We always provide a written estimate before any work begins.",
    },
    faqs: [
      { question: "Why does my AC work sometimes and not others?", answer: "Intermittent AC issues often point to a failing compressor clutch, low refrigerant, or an electrical problem. We can diagnose the exact cause." },
      { question: "How often does AC need to be recharged?", answer: "A properly sealed system shouldn't need recharging. If your AC needs refrigerant, there's likely a leak that should be found and fixed." },
      { question: "Why does my car smell musty when I turn on the AC?", answer: "This is usually mold or mildew buildup in the evaporator. We can clean the system and replace your cabin air filter to fix it." },
    ],
  },
  {
    slug: "electrical",
    title: "Electrical & Battery",
    shortTitle: "Electrical & Battery",
    description:
      "Modern vehicles run on complex electrical systems. We diagnose and repair everything from dead batteries to wiring issues and module failures.",
    icon: "🔋",
    price: "From $79.99",
    included: [
      "Battery testing and replacement",
      "Alternator and charging system test",
      "Starter motor diagnosis",
      "Parasitic draw testing",
      "Wiring and connector inspection",
      "Module scanning and programming",
    ],
    signs: [
      "Car won't start or is slow to crank",
      "Battery keeps dying",
      "Dimming or flickering headlights",
      "Electrical accessories not working",
      "Battery warning light is on",
      "Burning smell from electrical components",
    ],
    process: [
      { step: "Test", description: "We test your battery, alternator, and starter to check the basics of your electrical system." },
      { step: "Diagnose", description: "For complex issues, we trace circuits, check for parasitic draws, and test individual components." },
      { step: "Estimate", description: "Clear explanation and written estimate — no guesswork pricing." },
      { step: "Repair", description: "We repair or replace the faulty components and verify the entire system is working correctly." },
    ],
    pricing: {
      range: "$79.99 – $799.99",
      factors: ["Battery replacement vs. electrical diagnosis", "Complexity of the issue", "Parts needed"],
      note: "We always provide a written estimate before any work begins.",
    },
    faqs: [
      { question: "How long does a car battery last?", answer: "Typically 3–5 years in New Hampshire. Cold winters are tough on batteries. We recommend testing yours every fall." },
      { question: "Why does my battery keep dying?", answer: "A battery that keeps dying usually means there's a parasitic draw — something is draining power when the car is off. We can test for this and find the culprit." },
      { question: "Can you work on hybrid or EV batteries?", answer: "We currently service conventional 12V systems. For high-voltage hybrid or EV battery issues, we recommend a dealer or specialist." },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
