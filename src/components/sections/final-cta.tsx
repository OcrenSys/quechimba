import { Cake, MessageCircle, TicketPercent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { whatsappMessages } from "@/lib/constants";
import { createWhatsAppUrl } from "@/lib/utils";

export function FinalCtaSection() {
  return (
    <Section className="bg-[radial-gradient(circle_at_20%_20%,rgba(236,0,140,0.28),transparent_28%),radial-gradient(circle_at_85%_12%,rgba(0,163,255,0.26),transparent_24%),#050505]">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-black uppercase text-gold">Reserva hoy</p>
          <h2 className="mt-4 font-display text-4xl font-black uppercase leading-tight neon-text sm:text-5xl">
            ¿Listo para prender la noche?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-200">
            Reserva tu mesa, pregunta por promociones activas o separa tu paquete de cumpleaños.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={createWhatsAppUrl(whatsappMessages.hero)} target="_blank" rel="noreferrer" variant="gold">
              <MessageCircle size={18} aria-hidden="true" />
              Reservar mesa
            </Button>
            <Button href="#promociones" variant="secondary">
              <TicketPercent size={18} aria-hidden="true" />
              Consultar promociones
            </Button>
            <Button href={createWhatsAppUrl(whatsappMessages.birthday("Paquete Premium"))} target="_blank" rel="noreferrer" variant="ghost">
              <Cake size={18} aria-hidden="true" />
              Separar cumpleaños
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
