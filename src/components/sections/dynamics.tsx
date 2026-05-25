import { Gift, Megaphone, Sparkles, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const dynamics = [
  { title: "Rifas en eventos", description: "Premios, shots, combos y sorpresas durante la noche.", icon: Trophy },
  { title: "Dinámicas en redes", description: "Participa en publicaciones, historias y lives para ganar beneficios.", icon: Megaphone },
  { title: "Promociones sorpresa", description: "Activaciones por hora, por mesa o por temática del evento.", icon: Sparkles },
  { title: "Beneficios cumpleañeros", description: "Detalles especiales para quienes celebran con reserva previa.", icon: Gift },
];

export function DynamicsSection() {
  return (
    <Section className="relative overflow-hidden bg-blackBase">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(236,0,140,0.16),transparent_42%,rgba(0,163,255,0.16))]" />
      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-gold">Rifas y dinámicas</p>
            <h2 className="mt-4 font-display text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
              Dinámicas, rifas y sorpresas cada semana
            </h2>
            <p className="mt-4 text-base leading-7 text-grayMuted">
              La experiencia cambia por evento: participa, etiqueta, reserva y mantente pendiente de las redes.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {dynamics.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="bg-blackSoft/75">
                  <Icon className="mb-4 text-magentaNeon" size={28} aria-hidden="true" />
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-grayMuted">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
