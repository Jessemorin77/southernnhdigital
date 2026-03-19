import FadeIn from "./FadeIn";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  label?: string;
  dark?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
  label,
  dark = false,
}: SectionHeaderProps) {
  return (
    <FadeIn className={`mb-14 ${centered ? "text-center" : ""}`}>
      {label && (
        <span className="text-[#E8742A] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-extrabold leading-tight ${
          dark ? "text-white" : "text-[#1B3A5C]"
        }`}
        style={{ fontFamily: "var(--font-plumbing-display), sans-serif" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl leading-relaxed ${centered ? "mx-auto" : ""} ${
            dark ? "text-gray-300" : "text-gray-500"
          }`}
        >
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
