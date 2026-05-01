import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "success" | "warning" | "tech" | "status";
}

export default function Badge({ variant = "default", className, children, ...props }: BadgeProps) {
  const variants = {
    default: "bg-indigo-50 text-primary",
    tech: "bg-indigo-50 text-primary",
    status: "bg-amber-50 text-[#B45309]", // amber-700 approx
    outline: "border border-border text-text-primary",
    success: "bg-emerald/10 text-emerald",
    warning: "bg-amber/10 text-amber",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variants[variant as keyof typeof variants] || variants.default,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
