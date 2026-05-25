import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { socialLinks } from "@/data/social-links";
import { SITE_NAME, whatsappMessages } from "@/lib/constants";
import { createWhatsAppUrl } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-blackBase py-10">
      <Container className="grid gap-8 md:grid-cols-[1.3fr_0.7fr_0.8fr] md:items-start">
        <div>
          <div className="mb-3 font-display text-xl font-black uppercase neon-text">{SITE_NAME}</div>
          <p className="max-w-md text-sm leading-6 text-grayMuted">
            Discoteca urbana con eventos, promociones, cumpleaños, rifas y ambiente encendido cada semana.
          </p>
        </div>
        <div>
          <div className="mb-3 text-sm font-black uppercase text-white">Redes</div>
          <div className="flex gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir ${social.label} de Que Chimba Parce`}
                  className="flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white transition hover:border-magentaNeon hover:text-magentaNeon focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blueElectric"
                >
                  <Icon size={19} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
        <div className="md:text-right">
          <Button
            variant="gold"
            href={createWhatsAppUrl(whatsappMessages.location)}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Contactar
          </Button>
          <p className="mt-4 text-xs text-grayMuted">© 2026 Que Chimba Parce. Todos los derechos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}
