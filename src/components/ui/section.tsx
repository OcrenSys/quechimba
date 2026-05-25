import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  ariaLabelledby?: string;
};

export function Section({ id, children, className, ariaLabelledby }: SectionProps) {
  return (
    <section id={id} aria-labelledby={ariaLabelledby} className={cn("py-16 sm:py-20 lg:py-24", className)}>
      {children}
    </section>
  );
}
