import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export default function Card({ hover = true, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl p-6 shadow-glass relative overflow-hidden group",
        hover && "transition-all duration-500 hover:shadow-glass-hover hover:-translate-y-1 hover:bg-white/80",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
