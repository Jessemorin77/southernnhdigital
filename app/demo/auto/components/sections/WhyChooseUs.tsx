import SectionHeader from "../ui/SectionHeader";

const reasons = [
  {
    icon: "🔧",
    title: "ASE Certified Technicians",
    description: "Our master technicians have the training and experience to work on any make and model.",
  },
  {
    icon: "📝",
    title: "Upfront, Honest Pricing",
    description: "You get a written estimate before we start. No hidden fees, no surprise charges, ever.",
  },
  {
    icon: "🛡️",
    title: "24-Month / 24K Warranty",
    description: "Every repair is backed by our warranty. If something isn't right, we'll make it right.",
  },
  {
    icon: "⏱️",
    title: "Same-Day Service Available",
    description: "Many services completed same day. Oil changes and inspections — no appointment needed.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family Owned & Operated",
    description: "15+ years in Manchester. We treat every customer like a neighbor because you are one.",
  },
  {
    icon: "💬",
    title: "Clear Communication",
    description: "We explain what's going on in plain English. You'll always know what we're doing and why.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Why Choose Granite State Auto"
          subtitle="We've built our reputation one honest repair at a time."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center p-6">
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{reason.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
