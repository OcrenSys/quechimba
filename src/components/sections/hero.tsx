import { CalendarDays, Gift, MessageCircle, Music2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ParallaxLayer } from "@/components/ui/parallax-layer";
import { PremiumBackgroundMotion } from "@/components/ui/premium-background-motion";
import { Section } from "@/components/ui/section";
import { HeroCarousel } from "@/components/sections/hero-carousel";
import { whatsappMessages } from "@/lib/constants";
import { createWhatsAppUrl } from "@/lib/utils";

const trustItems = [
  { label: "Eventos cada semana", icon: CalendarDays },
  { label: "Paquetes de cumpleaños", icon: Gift },
  { label: "Reservas por WhatsApp", icon: MessageCircle },
];

export function Hero() {
  return (
    <Section id="inicio" className="relative isolate overflow-hidden pb-14 pt-36 sm:pt-40">
      <div className="club-grid absolute inset-0 -z-20" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_15%,rgba(236,0,140,0.24),transparent_26%),radial-gradient(circle_at_82%_12%,rgba(0,163,255,0.2),transparent_25%),linear-gradient(180deg,rgba(5,5,5,0.18),#050505_88%)]" />
      <PremiumBackgroundMotion variant="hero" className="-z-10" />
      <Container className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="order-2 lg:order-1">
          <Badge className="border-gold/50 bg-gold/10 text-gold">
            <Music2 size={14} aria-hidden="true" />
            Ciudad Sandino · Plaza Cali
          </Badge>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-black uppercase leading-[0.92] neon-text sm:text-6xl lg:text-7xl">
            La rumba se vive en
            <span className="block text-gold">Que Chimba Parce</span>
          </h1>
          <p className="mt-6 max-w-xl text-xl font-black uppercase leading-8 text-zinc-100 sm:text-2xl">
            Eventos. Promociones. Cumpleaños. Comida. Música. El mejor ambiente.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={createWhatsAppUrl(whatsappMessages.hero)} target="_blank" rel="noreferrer">
              <MessageCircle size={18} aria-hidden="true" />
              Reservar mesa
            </Button>
            <Button href="#eventos" variant="secondary">
              <CalendarDays size={18} aria-hidden="true" />
              Ver próximos eventos
            </Button>
          </div>
          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
                  <Icon className="text-gold" size={18} aria-hidden="true" />
                  <span className="text-sm font-bold text-white">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <ParallaxLayer offset={14}>
            <HeroCarousel />
          </ParallaxLayer>
        </div>
      </Container>
    </Section>
  );
}
