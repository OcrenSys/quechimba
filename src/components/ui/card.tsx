import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-neon backdrop-blur",
        className,
      )}
    >
      {children}
    </div>
  );
}
