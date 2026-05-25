import Image from "next/image";
import { Check, Crown, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/sections/section-heading";
import { birthdayPackages } from "@/data/birthday-packages";
import { whatsappMessages } from "@/lib/constants";
import { cn, createWhatsAppUrl } from "@/lib/utils";

export function BirthdayPackagesSection() {
  const premiumPackage = birthdayPackages.find((pkg) => pkg.featured);
  const standardPackages = birthdayPackages.filter((pkg) => !pkg.featured);

  return (
    <Section id="cumpleanos" ariaLabelledby="cumpleanos-title" className="bg-blackBase">
      <Container>
        <SectionHeading
          id="cumpleanos-title"
          eyebrow="Cumpleaños"
          title="Paquetes para celebrar en grande"
          description="Beneficios reales de la propuesta de cumpleaños: licor, cervezas, comida, cortesía y atención para que la celebración se sienta oficial."
        />
        <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
          <div className="relative overflow-hidden rounded-xl border border-gold/25 bg-blackSoft shadow-gold">
            <div className="relative aspect-[3/4]">
              <Image
                src="/images/birthday/paquetes-cumpleanos.webp"
                alt="Flyer de paquetes de cumpleaños de Que Chimba Parce"
                fill
                sizes="(max-width: 1280px) 92vw, 44vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid gap-5">
            {premiumPackage ? (
              <BirthdayCard pkg={premiumPackage} className="order-first border-gold/70 bg-gold/10 shadow-gold" />
            ) : null}
            <div className="grid gap-5 md:grid-cols-3">
              {standardPackages.map((pkg) => (
                <BirthdayCard key={pkg.name} pkg={pkg} compact />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

type BirthdayCardProps = {
  pkg: (typeof birthdayPackages)[number];
  compact?: boolean;
  className?: string;
};

function BirthdayCard({ pkg, compact, className }: BirthdayCardProps) {
  return (
    <Card className={cn("flex flex-col border-gold/25 bg-blackSoft/80", className)}>
      <div className="mb-4 flex items-start justify-between gap-4">
        <Crown className="text-gold" size={compact ? 24 : 32} aria-hidden="true" />
        {pkg.featured ? <Badge className="border-gold bg-gold text-blackBase">Popular</Badge> : null}
      </div>
      <h3 className="font-display text-2xl font-black uppercase text-white">{pkg.name}</h3>
      <p className={cn("mt-2 font-display font-black uppercase text-gold", compact ? "text-2xl" : "text-4xl")}>{pkg.price}</p>
      <ul className="mt-5 flex flex-1 flex-col gap-3">
        {pkg.benefits.map((benefit) => (
          <li key={benefit} className="flex gap-3 text-sm leading-5 text-zinc-200">
            <Check className="mt-0.5 min-w-4 text-blueElectric" size={16} aria-hidden="true" />
            {benefit}
          </li>
        ))}
      </ul>
      <p className="mt-5 text-xs font-bold uppercase text-grayMuted">Producto sujeto a disponibilidad</p>
      <Button
        variant={pkg.featured ? "gold" : "secondary"}
        className="mt-5 w-full"
        href={createWhatsAppUrl(whatsappMessages.birthday(pkg.name))}
        target="_blank"
        rel="noreferrer"
        aria-label={`Reservar cumpleaños con ${pkg.name}`}
      >
        <MessageCircle size={17} aria-hidden="true" />
        Reservar cumpleaños
      </Button>
    </Card>
  );
}
