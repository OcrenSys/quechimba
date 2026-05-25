"use client";

import Image from "next/image";
import { CalendarDays, Clock, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { featuredEvents } from "@/data/events";
import { usePrefersReducedMotion } from "@/lib/animations/use-prefers-reduced-motion";
import { whatsappMessages } from "@/lib/constants";
import { createWhatsAppUrl } from "@/lib/utils";

export function HeroCarousel() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeEvent = featuredEvents[activeIndex];

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % featuredEvents.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <div className="relative mx-auto w-full max-w-[25rem] lg:max-w-[30rem]">
      <div className="absolute inset-4 rounded-[2rem] bg-magentaNeon/20 blur-3xl" />
      <article className="hero-poster-motion group relative overflow-hidden rounded-xl border border-white/15 bg-blackSoft shadow-neon">
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            key={activeEvent.image}
            src={activeEvent.image}
            alt={activeEvent.alt}
            fill
            priority
            sizes="(max-width: 768px) 92vw, (max-width: 1200px) 42vw, 480px"
            className="object-cover transition duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blackBase via-blackBase/20 to-blackBase/10" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>
        <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3">
          <Badge className="border-gold/70 bg-blackBase/70 text-gold">{activeEvent.category}</Badge>
          <div className="rounded-md border border-white/15 bg-blackBase/75 px-3 py-2 text-right text-xs font-black uppercase text-white backdrop-blur">
            {activeEvent.date}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          {/* <h2 className="font-display text-3xl font-black uppercase leading-tight text-white">
            {activeEvent.title}
          </h2> */}
          <div className="mt-3 flex flex-wrap gap-3 text-sm font-bold text-zinc-200">
            <span className="inline-flex items-center gap-2">
              <CalendarDays size={16} aria-hidden="true" />
              {activeEvent.date}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock size={16} aria-hidden="true" />
              {activeEvent.time}
            </span>
          </div>
          {/* <p className="mt-3 text-sm leading-6 text-zinc-300">{activeEvent.description}</p> */}
          <Button
            className="mt-5 w-full"
            variant="gold"
            href={createWhatsAppUrl(whatsappMessages.event(activeEvent.title))}
            target="_blank"
            rel="noreferrer"
            aria-label={`Reservar por WhatsApp para ${activeEvent.title}`}
          >
            <MessageCircle size={18} aria-hidden="true" />
            Reservar WhatsApp
          </Button>
        </div>
      </article>
      <div className="mt-5 flex justify-center gap-2" aria-label="Eventos destacados">
        {featuredEvents.map((event, index) => (
          <button
            key={event.title}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Mostrar ${event.title}`}
            className={`h-2.5 rounded-full transition ${
              activeIndex === index ? "w-9 bg-gold" : "w-2.5 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
