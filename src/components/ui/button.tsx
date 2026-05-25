import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "gold" | "ghost";
};

const variants = {
  primary:
    "bg-magentaNeon text-white shadow-neon hover:bg-[#ff1aa3] focus-visible:outline-magentaNeon",
  secondary:
    "border border-blueElectric/70 bg-blueElectric/10 text-white hover:bg-blueElectric/20 focus-visible:outline-blueElectric",
  gold:
    "bg-gold text-blackBase shadow-gold hover:bg-[#ffd765] focus-visible:outline-gold",
  ghost:
    "border border-white/15 bg-white/5 text-white hover:bg-white/10 focus-visible:outline-white",
};

export function Button({ children, className, variant = "primary", ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-extrabold uppercase tracking-normal transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
