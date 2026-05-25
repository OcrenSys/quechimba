import { Beer, CalendarDays, Mic2, Music2, Trophy, Utensils } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { PremiumBackgroundMotion } from "@/components/ui/premium-background-motion";
import { Section } from "@/components/ui/section";
import { weeklyExperience } from "@/data/weekly-experience";
import { cn } from "@/lib/utils";

const icons = [Utensils, Mic2, Beer, CalendarDays, Music2, Trophy];

export function WeeklyExperienceSection() {
  return (
    <Section id="semana" ariaLabelledby="semana-title" className="relative overflow-hidden bg-blackBase">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(245,197,66,0.08),transparent_35%,rgba(0,163,255,0.08))]" />
      <PremiumBackgroundMotion variant="minimal" />
      <Container className="relative">
        <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <Badge className="mb-4 border-gold/50 bg-gold/10 text-gold">Semana Que Chimba</Badge>
            <h2 id="semana-title" className="font-display text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
              Una razón para venir casi todos los días
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-grayMuted">
            La semana tiene su propio ritmo: karaoke, cervecero, cumpleaños, eventos especiales y partidos en pantalla gigante.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {weeklyExperience.map((item, index) => {
            const Icon = icons[index] ?? CalendarDays;

            return (
              <Card
                key={item.day}
                className={cn(
                  "relative overflow-hidden border-white/10 bg-blackSoft/75",
                  item.active && "border-gold/35 bg-white/[0.065]",
                )}
              >
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-magentaNeon via-gold to-blueElectric" />
                <Icon className={item.active ? "text-gold" : "text-grayMuted"} size={26} aria-hidden="true" />
                <p className="mt-5 text-xs font-black uppercase text-grayMuted">{item.day}</p>
                <h3 className="mt-2 text-xl font-black uppercase text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-grayMuted">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
