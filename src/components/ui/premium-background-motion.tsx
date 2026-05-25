import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type BackgroundMotionVariant = "hero" | "section" | "portfolio" | "minimal";

type PremiumBackgroundMotionProps = {
  variant?: BackgroundMotionVariant;
  className?: string;
};

const variantStyles: Record<BackgroundMotionVariant, string> = {
  hero: "opacity-100",
  section: "opacity-75",
  portfolio: "opacity-90",
  minimal: "opacity-50",
};

const dots = [
  [8, 14],
  [18, 58],
  [27, 34],
  [35, 72],
  [43, 18],
  [51, 48],
  [58, 78],
  [66, 24],
  [72, 64],
  [79, 38],
  [84, 16],
  [88, 76],
  [14, 82],
  [92, 52],
];

export function PremiumBackgroundMotion({ variant = "section", className }: PremiumBackgroundMotionProps) {
  return (
    <div aria-hidden="true" className={cn("premium-motion pointer-events-none absolute inset-0 overflow-hidden", variantStyles[variant], className)}>
      <div className="premium-motion__glow premium-motion__glow--one" />
      <div className="premium-motion__glow premium-motion__glow--two" />
      <div className="premium-motion__grid" />
      <div className="premium-motion__scan" />
      <div className="premium-motion__dots">
        {dots.map(([left, top], index) => (
          <span
            key={`${left}-${top}`}
            style={
              {
                left: `${left}%`,
                top: `${top}%`,
                animationDelay: `${index * -1.2}s`,
              } as CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}
