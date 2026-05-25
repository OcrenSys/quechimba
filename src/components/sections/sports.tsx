import Image from "next/image";
import { MessageCircle, MonitorPlay } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ParallaxLayer } from "@/components/ui/parallax-layer";
import { PremiumBackgroundMotion } from "@/components/ui/premium-background-motion";
import { Section } from "@/components/ui/section";
import { whatsappMessages } from "@/lib/constants";
import { createWhatsAppUrl } from "@/lib/utils";

export function SportsSection() {
  return (
    <Section id="deportes" ariaLabelledby="deportes-title" className="relative overflow-hidden bg-blackBase">
      <PremiumBackgroundMotion variant="section" />
      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Badge className="border-blueElectric/50 bg-blueElectric/10 text-blueElectric">
              <MonitorPlay size={14} aria-hidden="true" />
              Deportes
            </Badge>
            <h2 id="deportes-title" className="mt-5 font-display text-4xl font-black uppercase leading-tight text-white sm:text-5xl">
              Pantalla gigante y partidos especiales
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-grayMuted">
              Vive El Clásico con fútbol, promociones espectaculares, mesa reservada y ambiente premium para verlo como se debe.
            </p>
            <Button href={createWhatsAppUrl(whatsappMessages.location)} target="_blank" rel="noreferrer" className="mt-7">
              <MessageCircle size={18} aria-hidden="true" />
              Reservar para partido
            </Button>
          </div>
          <ParallaxLayer offset={10}>
            <article className="group relative overflow-hidden rounded-xl border border-white/10 bg-blackSoft shadow-neon">
              <div className="relative aspect-[4/5] lg:aspect-[5/4]">
                <Image
                  src="/images/sports/clasico.webp"
                  alt="Poster de El Clásico en pantalla gigante en Que Chimba Parce"
                  fill
                  sizes="(max-width: 1024px) 92vw, 52vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blackBase/80 via-transparent to-blackBase/10" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <Badge className="mb-3 border-gold/50 bg-blackBase/70 text-gold">El Clásico</Badge>
                <h3 className="font-display text-3xl font-black uppercase text-white">Más que un partido, una pasión</h3>
              </div>
            </article>
          </ParallaxLayer>
        </div>
      </Container>
    </Section>
  );
}
