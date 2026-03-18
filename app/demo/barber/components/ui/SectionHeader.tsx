import FadeIn from "./FadeIn";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  label?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
  label,
}: SectionHeaderProps) {
  return (
    <FadeIn className={`mb-16 ${centered ? "text-center" : ""}`}>
      {label && (
        <span className="text-[#C8A960] text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
          {label}
        </span>
      )}
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
        style={{ fontFamily: "var(--font-barber-display), serif" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-lg text-[#9A9589] max-w-2xl leading-relaxed ${
            centered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
