export interface Review {
  name: string;
  rating: number;
  date: string;
  text: string;
  service: string;
  platform: string;
}

export const reviews: Review[] = [
  {
    name: "Jennifer M.",
    rating: 5,
    date: "2 weeks ago",
    text: "Took my Accord in for a weird noise when braking. They diagnosed it quickly, showed me exactly what was going on, and had it fixed same day. Fair price, no upselling. This is my shop from now on.",
    service: "Brake Service",
    platform: "Google",
  },
  {
    name: "Tom R.",
    rating: 5,
    date: "1 month ago",
    text: "Been bringing both our cars here for 6 years. Mike and his team are the real deal — honest, skilled, and they stand behind their work. Can't recommend them enough.",
    service: "General Maintenance",
    platform: "Google",
  },
  {
    name: "Amanda K.",
    rating: 5,
    date: "3 weeks ago",
    text: "My check engine light came on and I was worried it would be expensive. They diagnosed it, explained everything clearly, and the fix was way less than I expected. Sarah at the front desk was so helpful too.",
    service: "Engine Diagnostics",
    platform: "Google",
  },
  {
    name: "Chris D.",
    rating: 5,
    date: "1 month ago",
    text: "Fast, honest state inspection. They found an issue with a tail light, fixed it on the spot for a few bucks, and I was out of there in under an hour. No games.",
    service: "NH State Inspection",
    platform: "Google",
  },
  {
    name: "Michelle P.",
    rating: 5,
    date: "2 months ago",
    text: "I'm a single mom and I've been taken advantage of at other shops before. Granite State has always been straight with me — they tell me what's urgent and what can wait. I trust them completely.",
    service: "Oil Change & Maintenance",
    platform: "Google",
  },
  {
    name: "Robert S.",
    rating: 4,
    date: "1 month ago",
    text: "Solid work on my truck's suspension. Rides like new. Only reason for 4 stars is it took a day longer than estimated, but they kept me updated and the quality of work was excellent.",
    service: "Steering & Suspension",
    platform: "Google",
  },
  {
    name: "Lisa W.",
    rating: 5,
    date: "3 months ago",
    text: "My AC died in the middle of July. They got me in the same day, found a leak, and had it fixed by end of day. Lifesavers!",
    service: "AC Repair",
    platform: "Yelp",
  },
  {
    name: "David H.",
    rating: 5,
    date: "2 weeks ago",
    text: "I went to two other shops that couldn't figure out why my car kept dying. Granite State found a parasitic draw in 30 minutes. These guys actually know what they're doing.",
    service: "Electrical Diagnosis",
    platform: "Google",
  },
  {
    name: "Karen T.",
    rating: 5,
    date: "1 month ago",
    text: "Brought my daughter's car in before she headed back to college. They did a full check, oil change, and new tires. Gave her a list of things to watch for. Great people.",
    service: "Oil Change & Inspection",
    platform: "Facebook",
  },
  {
    name: "Mark J.",
    rating: 5,
    date: "2 months ago",
    text: "Transmission was slipping on my F-150. They diagnosed it, gave me options, and the repair has been holding up great for 6 months now. Saved me thousands compared to the dealer quote.",
    service: "Transmission Service",
    platform: "Google",
  },
];

export const reviewPlatforms = [
  { name: "Google", url: "#", reviewCount: 187 },
  { name: "Yelp", url: "#", reviewCount: 28 },
  { name: "Facebook", url: "#", reviewCount: 15 },
];
