import Image from "next/image";
import { MessageCircle, Star, Utensils } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { whatsappMessages } from "@/lib/constants";
import { createWhatsAppUrl } from "@/lib/utils";

export function MenuSection() {
  return (
    <Section id="menu" ariaLabelledby="menu-title" className="bg-blackSoft/55">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-blackBase shadow-neon">
            <div className="relative aspect-[16/10] min-h-72">
              <Image
                src="/images/food/patacon-pisao.webp"
                alt="Patacón pisao servido en Que Chimba Parce"
                fill
                sizes="(max-width: 1024px) 92vw, 52vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blackBase/15 via-transparent to-blackBase/40" />
            </div>
          </div>
          <div>
            <Badge className="border-gold/60 bg-gold/10 text-gold">
              <Star size={14} aria-hidden="true" />
              Favorito del público
            </Badge>
            <h2 id="menu-title" className="mt-5 font-display text-4xl font-black uppercase leading-tight text-white sm:text-5xl">
              Patacón Pisao&apos;
            </h2>
            <p className="mt-5 max-w-xl text-2xl font-black uppercase leading-9 text-zinc-100">
              Crujiente. Grande. Perfecto para compartir.
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-grayMuted">
              El plato estrella para acompañar la tardeada, abrir mesa o picar entre amigos antes de que suba la música.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Patacón pisao", "Cervezas nacionales", "Ron y vodka", "Cocteles y energizantes"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-blackBase/70 p-3">
                  <Utensils className="text-blueElectric" size={18} aria-hidden="true" />
                  <span className="text-sm font-bold text-white">{item}</span>
                </div>
              ))}
            </div>
            <Button href={createWhatsAppUrl(whatsappMessages.menu)} target="_blank" rel="noreferrer" variant="gold" className="mt-7">
              <MessageCircle size={18} aria-hidden="true" />
              Consultar menú
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
