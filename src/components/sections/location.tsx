import { Clock, MapPin, MessageCircle, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/sections/section-heading";
import { GOOGLE_MAPS_URL, whatsappMessages } from "@/lib/constants";
import { createWhatsAppUrl } from "@/lib/utils";

const hours = [
  ["Miércoles", "4PM"],
  ["Jueves", "4PM"],
  ["Viernes", "4PM"],
  ["Sábado", "4PM"],
  ["Eventos especiales", "11AM"],
];

export function LocationSection() {
  return (
    <Section id="ubicacion" ariaLabelledby="ubicacion-title" className="bg-blackBase">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              id="ubicacion-title"
              eyebrow="Ubicación"
              title="Ciudad Sandino, Plaza Cali"
              description="Media cuadra abajo. Llega fácil, reserva antes de salir y asegura tu mesa para el evento."
            />
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer" variant="secondary">
                <Navigation size={18} aria-hidden="true" />
                Google Maps
              </Button>
              <Button href={createWhatsAppUrl(whatsappMessages.location)} target="_blank" rel="noreferrer">
                <MessageCircle size={18} aria-hidden="true" />
                WhatsApp
              </Button>
            </div>
          </div>
          <Card className="border-gold/25 bg-[linear-gradient(145deg,rgba(245,197,66,0.12),rgba(17,24,39,0.88),rgba(236,0,140,0.10))]">
            <div className="grid gap-5 md:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-lg border border-white/10 bg-blackBase/65 p-5">
                <MapPin className="mb-4 text-magentaNeon" size={30} aria-hidden="true" />
                <h3 className="font-display text-2xl font-black uppercase text-white">Encuéntranos</h3>
                <div className="mt-5 space-y-3 text-sm leading-6 text-grayMuted">
                  <p>
                    <strong className="text-white">Ciudad Sandino</strong>
                  </p>
                  <p>Plaza Cali</p>
                  <p>Media cuadra abajo</p>
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-blackBase/65 p-5">
                <Clock className="mb-4 text-gold" size={30} aria-hidden="true" />
                <h3 className="font-display text-2xl font-black uppercase text-white">Horarios</h3>
                <dl className="mt-5 grid gap-3">
                  {hours.map(([day, hour]) => (
                    <div key={day} className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
                      <dt className="text-sm font-bold text-grayMuted">{day}</dt>
                      <dd className="text-sm font-black text-white">{hour}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="mt-5 rounded-lg border border-dashed border-white/20 bg-blackBase/55 p-6 text-center">
              <p className="font-black uppercase text-white">Mapa de referencia</p>
              <p className="mt-2 text-sm text-grayMuted">El botón abre la ubicación de Plaza Cali en Google Maps.</p>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
