import Image from "next/image";
import { Clock, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PremiumBackgroundMotion } from "@/components/ui/premium-background-motion";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/sections/section-heading";
import { events } from "@/data/events";
import { whatsappMessages } from "@/lib/constants";
import { createWhatsAppUrl } from "@/lib/utils";

export function EventsSection() {
  return (
    <Section id="eventos" ariaLabelledby="eventos-title" className="relative overflow-hidden bg-blackBase">
      <PremiumBackgroundMotion variant="minimal" />
      <Container className="relative">
        <SectionHeading
          id="eventos-title"
          eyebrow="Próximos eventos"
          title="Rumbas listas para vivirlas"
          description="Mira los eventos activos, separa asistencia y llega con tu grupo sin improvisar."
        />
        <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-3 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
          {events.map((event) => (
            <article
              key={event.title}
              className="group relative min-w-[78vw] snap-start overflow-hidden rounded-lg border border-white/10 bg-blackSoft shadow-neon transition duration-300 hover:-translate-y-1 hover:border-gold/55 hover:shadow-gold sm:min-w-0"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.alt}
                  fill
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 46vw, 24vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blackBase via-blackBase/30 to-transparent" />
              </div>
              {/* <div className="absolute left-4 top-4 rounded-md bg-gold px-3 py-2 text-xs font-black uppercase text-blackBase shadow-gold">
                {event.date}
              </div> */}
              <div className="absolute inset-x-0 bottom-0 p-4">
                <Badge className="mb-3 border-blueElectric/40 bg-blueElectric/20">{event.category}</Badge>
                {/* <h3 className="font-display text-2xl font-black uppercase leading-tight text-white">{event.title}</h3> */}
                {/* <p className="mt-2 flex items-center gap-2 text-sm font-bold text-gold">
                  <Clock size={16} aria-hidden="true" />
                  {event.time}
                </p> */}
                {/* <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-200">{event.description}</p> */}
                <Button
                  className="mt-4 w-full"
                  href={createWhatsAppUrl(whatsappMessages.event(event.title))}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Reservar asistencia para ${event.title}`}
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  Reservar
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
