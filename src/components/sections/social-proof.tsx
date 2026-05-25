import { Beer, Cake, MapPin, Mic2, MonitorPlay, Music2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const reasons = [
  { title: "Música en vivo", description: "Chicheros, DJs invitados y noches temáticas.", icon: Music2 },
  { title: "Promociones constantes", description: "Cubetas, 3x200, shots y combos por evento.", icon: Beer },
  { title: "Ambiente premium", description: "Luces, cabina, energía urbana y atención de mesa.", icon: Mic2 },
  { title: "Cumpleaños especiales", description: "Paquetes completos para celebrar sin improvisar.", icon: Cake },
  { title: "Pantalla gigante", description: "Partidos especiales con promociones y animación.", icon: MonitorPlay },
  { title: "Ubicación estratégica", description: "Ciudad Sandino, Plaza Cali, media cuadra abajo.", icon: MapPin },
];

export function SocialProofSection() {
  return (
    <Section ariaLabelledby="social-proof-title" className="bg-blackSoft/55">
      <Container>
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase text-gold">Experiencia local</p>
          <h2 id="social-proof-title" className="mt-4 font-display text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
            ¿Por qué vienen a Que Chimba?
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <Card key={reason.title} className="border-white/10 bg-blackBase/70">
                <Icon className="mb-4 text-gold" size={28} aria-hidden="true" />
                <h3 className="text-xl font-black uppercase text-white">{reason.title}</h3>
                <p className="mt-3 text-sm leading-6 text-grayMuted">{reason.description}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
