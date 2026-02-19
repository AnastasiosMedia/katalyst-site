interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "success";
  className?: string;
}

export default function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variants = {
    default: "bg-bg-tertiary text-text-secondary border-border",
    accent: "bg-accent-gold/[0.06] text-accent-gold border-accent-gold/15",
    success: "bg-success/10 text-success border-success/20",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
