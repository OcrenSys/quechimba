"use client";

import type { ReactNode } from "react";
import { useParallax } from "@/lib/animations/use-parallax";

type ParallaxLayerProps = {
  children: ReactNode;
  offset?: number;
  className?: string;
};

export function ParallaxLayer({ children, offset = 12, className }: ParallaxLayerProps) {
  const style = useParallax({ offset });

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
