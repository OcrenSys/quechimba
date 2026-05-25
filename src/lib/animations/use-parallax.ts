"use client";

import { type CSSProperties, useEffect, useState } from "react";

type UseParallaxOptions = {
  offset?: number;
  disabled?: boolean;
};

export function useParallax({ offset = 12, disabled = false }: UseParallaxOptions = {}): CSSProperties {
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (disabled || reduceMotion.matches) {
      return;
    }

    let frame = 0;

    const update = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const progress = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1);
        setTranslateY((progress - 0.5) * offset);
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
  }, [disabled, offset]);

  return {
    transform: `translate3d(0, ${(disabled ? 0 : translateY).toFixed(2)}px, 0)`,
  };
}
