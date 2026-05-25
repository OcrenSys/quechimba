import { Beer, Martini, MessageCircle, Wine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/sections/section-heading";
import { promotions } from "@/data/promotions";
import { whatsappMessages } from "@/lib/constants";
import { cn, createWhatsAppUrl } from "@/lib/utils";

const accentStyles = {
  gold: "border-gold/45 text-gold shadow-gold",
  magenta: "border-magentaNeon/45 text-magentaNeon shadow-neon",
  blue: "border-blueElectric/45 text-blueElectric shadow-neon",
};

const icons = [Beer, Martini, Beer, Beer, Wine, Martini, Wine];

export function PromotionsSection() {
  return (
    <Section id="promociones" ariaLabelledby="promociones-title" className="bg-blackSoft/55">
      <Container>
        <SectionHeading
          id="promociones-title"
          eyebrow="Promociones activas"
          title="Bebidas frías, combos y promos de evento"
          description="Ofertas reales para llegar con tu mesa lista. La disponibilidad puede variar según día, DJ y evento."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {promotions.map((promo, index) => {
            const Icon = icons[index] ?? Beer;

            return (
              <Card
                key={promo.name}
                className={cn(
                  "group border bg-blackBase/70 transition duration-300 hover:-translate-y-1",
                  accentStyles[promo.accent],
                )}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md border border-white/10 bg-white/5">
                  <Icon className={accentStyles[promo.accent].split(" ")[1]} size={26} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-black uppercase text-white">{promo.name}</h3>
                <p className="mt-2 font-display text-3xl font-black uppercase text-gold">{promo.price}</p>
                <p className="mt-3 min-h-16 text-sm leading-6 text-grayMuted">{promo.description}</p>
                <Button
                  variant="ghost"
                  className="mt-6 w-full"
                  href={createWhatsAppUrl(whatsappMessages.promo(promo.name))}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Consultar promoción ${promo.name} por WhatsApp`}
                >
                  <MessageCircle size={17} aria-hidden="true" />
                  Consultar promo
                </Button>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
