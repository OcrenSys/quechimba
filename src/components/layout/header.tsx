import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SITE_NAME, whatsappMessages } from "@/lib/constants";
import { createWhatsAppUrl } from "@/lib/utils";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Eventos", href: "#eventos" },
  { label: "Semana", href: "#semana" },
  { label: "Promociones", href: "#promociones" },
  { label: "Cumpleaños", href: "#cumpleanos" },
  { label: "Menú", href: "#menu" },
  { label: "Deportes", href: "#deportes" },
  { label: "Galería", href: "#galeria" },
  { label: "Ubicación", href: "#ubicacion" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-blackBase/70 backdrop-blur-xl">
      <Container className="flex min-h-16 items-center gap-3 py-3">
        <a href="#inicio" className="flex min-w-fit items-center gap-3" aria-label="Ir al inicio">
          <Image src="/images/logos/logo.png" alt={SITE_NAME} width={132} height={44} priority className="h-11 w-auto" />
        </a>
        <nav aria-label="Navegación principal" className="hidden flex-1 justify-center lg:flex">
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-bold text-grayMuted transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blueElectric"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Button
            href={createWhatsAppUrl(whatsappMessages.hero)}
            target="_blank"
            rel="noreferrer"
            className="px-3 sm:px-5"
            aria-label="Reservar por WhatsApp"
          >
            <MessageCircle size={18} aria-hidden="true" />
            <span className="hidden sm:inline">Reservar por WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </Button>
        </div>
      </Container>
      <div className="border-t border-white/10 lg:hidden">
        <Container>
          <nav className="flex gap-1 overflow-x-auto py-2" aria-label="Navegación móvil">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="min-w-fit rounded-md px-3 py-2 text-xs font-bold uppercase text-grayMuted transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </Container>
      </div>
    </header>
  );
}
