import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95";

  const variants = {
    primary: "bg-primary text-white shadow-md hover:shadow-lg hover:shadow-primary/20 hover:bg-[#152e6e] hover:-translate-y-0.5",
    secondary: "bg-white/80 backdrop-blur-md text-text-primary shadow-sm hover:shadow-md hover:bg-white border border-border/50",
    ghost: "hover:bg-primary/5 hover:text-primary transition-colors",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:shadow-md hover:shadow-primary/20",
  };

  const sizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-12 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
