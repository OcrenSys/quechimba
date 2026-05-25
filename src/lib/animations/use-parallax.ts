"use client";

import { type CSSProperties, useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/animations/use-prefers-reduced-motion";

type UseParallaxOptions = {
  offset?: number;
  disabled?: boolean;
};

export function useParallax({ offset = 12, disabled = false }: UseParallaxOptions = {}): CSSProperties {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    if (disabled || prefersReducedMotion) {
      return;
    }

    let frame = 0;

    const update = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const progress = Math.min(window.scrollY / Math.max(window.innerHeight * 1.35, 1), 1);
        setTranslateY(progress * -offset);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [disabled, offset, prefersReducedMotion]);

  return {
    transform: `translate3d(0, ${(disabled || prefersReducedMotion ? 0 : translateY).toFixed(2)}px, 0)`,
    willChange: prefersReducedMotion ? undefined : "transform",
  };
}
