"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`bg-bg-secondary border border-border rounded-xl p-6 ${
        hover ? "card-glow cursor-default" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
