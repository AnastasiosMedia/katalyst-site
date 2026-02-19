"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary";

  const variants = {
    primary:
      "bg-accent-gold text-bg-primary hover:bg-accent-gold-hover hover:-translate-y-0.5",
    secondary:
      "bg-transparent text-text-secondary border border-border hover:border-border-hover hover:text-text-primary",
    outline:
      "bg-transparent text-text-primary border border-border hover:border-accent-gold/30 hover:text-accent-gold",
    ghost:
      "bg-transparent text-text-secondary hover:text-text-primary",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs font-bold tracking-wide",
    md: "px-6 py-3 text-sm font-bold",
    lg: "px-8 py-4 text-sm font-bold tracking-wide",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
