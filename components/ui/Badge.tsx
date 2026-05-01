import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "success" | "warning" | "tech" | "status";
}

export default function Badge({ variant = "default", className, children, ...props }: BadgeProps) {
  const variants = {
    default: "bg-primary/10 text-primary border border-primary/20",
    tech: "bg-white/60 backdrop-blur-sm text-text-primary border border-white/80 shadow-sm",
    status: "bg-amber/10 text-[#B45309] border border-amber/20",
    outline: "border border-border/60 text-text-primary bg-white/40 backdrop-blur-sm",
    success: "bg-emerald/10 text-emerald border border-emerald/20",
    warning: "bg-amber/10 text-amber border border-amber/20",
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
