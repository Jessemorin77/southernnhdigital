interface StarRatingProps {
  rating: number;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "text-sm",
  md: "text-lg",
  lg: "text-2xl",
};

export default function StarRating({ rating, size = "md" }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <div className={`flex items-center gap-0.5 ${sizes[size]}`} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < fullStars ? "text-yellow-400" : i === fullStars && hasHalf ? "text-yellow-400" : "text-gray-300"}>
          {i < fullStars ? "★" : i === fullStars && hasHalf ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}
