"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { galleryItems } from "@/data/gallery";
import { cn } from "@/lib/utils";

export function GalleryShowcase() {
  const showcaseItems = useMemo(() => galleryItems.slice(0, 5), []);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = showcaseItems[activeIndex];

  const goTo = (nextIndex: number) => {
    setActiveIndex((nextIndex + showcaseItems.length) % showcaseItems.length);
  };

  return (
    <div
      className="mb-10 grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch"
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") goTo(activeIndex + 1);
        if (event.key === "ArrowLeft") goTo(activeIndex - 1);
      }}
    >
      <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
        {showcaseItems.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => goTo(index)}
            aria-pressed={activeIndex === index}
            className={cn(
              "relative min-w-fit rounded-md border px-4 py-3 text-left text-sm font-black uppercase transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold lg:min-w-0",
              activeIndex === index
                ? "border-gold bg-gold text-blackBase shadow-gold"
                : "border-white/10 bg-white/5 text-white hover:border-blueElectric/50 hover:bg-white/10",
            )}
          >
            <span>{item.title}</span>
            <span
              className={cn(
                "absolute bottom-0 left-0 h-0.5 bg-magentaNeon transition-all duration-300",
                activeIndex === index ? "w-full" : "w-0",
              )}
            />
          </button>
        ))}
      </div>
      <article className="group relative overflow-hidden rounded-xl border border-white/10 bg-blackBase shadow-neon">
        <div className="relative aspect-[16/10] min-h-[24rem]">
          <Image
            key={activeItem.image}
            src={activeItem.image}
            alt={activeItem.alt}
            fill
            sizes="(max-width: 1024px) 92vw, 62vw"
            className="animate-gallery-active object-cover opacity-0 transition duration-300 ease-out group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blackBase via-blackBase/18 to-transparent" />
        </div>
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
          <div>
            <Badge className="mb-3 border-gold/50 bg-blackBase/70 text-gold">{activeItem.category}</Badge>
            <h3 className="font-display text-3xl font-black uppercase text-white">{activeItem.title}</h3>
            <p className="mt-2 text-sm text-grayMuted">Imagen {activeIndex + 1} de {showcaseItems.length}</p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              aria-label="Imagen anterior"
              className="flex h-11 w-11 items-center justify-center rounded-md border border-white/15 bg-white/10 text-white transition hover:border-gold hover:text-gold"
            >
              <ArrowLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              aria-label="Imagen siguiente"
              className="flex h-11 w-11 items-center justify-center rounded-md border border-white/15 bg-white/10 text-white transition hover:border-gold hover:text-gold"
            >
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-4 right-5 flex gap-1 sm:hidden" aria-label="Progreso de galería">
          {showcaseItems.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Mostrar ${item.title}`}
              className={cn("h-2 rounded-full transition", activeIndex === index ? "w-7 bg-gold" : "w-2 bg-white/35")}
            />
          ))}
        </div>
      </article>
    </div>
  );
}
