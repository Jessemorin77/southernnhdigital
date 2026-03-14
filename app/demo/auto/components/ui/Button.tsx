import Link from "next/link";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "outline" | "white";
  size?: "default" | "lg";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variants = {
  primary:
    "bg-emerald-700 text-white hover:bg-emerald-800 border border-emerald-700 hover:border-emerald-800",
  outline:
    "bg-transparent text-emerald-700 border border-emerald-700 hover:bg-emerald-50",
  white:
    "bg-white text-emerald-700 border border-white hover:bg-gray-100",
};

const sizes = {
  default: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  href,
  variant = "primary",
  size = "default",
  children,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
