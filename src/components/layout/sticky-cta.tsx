import { Cake, MessageCircle, TicketPercent } from "lucide-react";
import { whatsappMessages } from "@/lib/constants";
import { createWhatsAppUrl } from "@/lib/utils";

const actions = [
  { label: "Reservar mesa", href: createWhatsAppUrl(whatsappMessages.hero), icon: MessageCircle },
  { label: "Promos", href: "#promociones", icon: TicketPercent },
  { label: "Cumpleaños", href: "#cumpleanos", icon: Cake },
];

export function StickyCta() {
  return (
    <>
      <a
        href={createWhatsAppUrl(whatsappMessages.hero)}
        target="_blank"
        rel="noreferrer"
        aria-label="Reservar mesa por WhatsApp"
        className="fixed bottom-24 right-4 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-magentaNeon text-white shadow-neon transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold md:flex"
      >
        <MessageCircle size={25} aria-hidden="true" />
      </a>
      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-blackBase/92 px-3 py-2 backdrop-blur-xl md:hidden" aria-label="Acciones rápidas">
        <div className="grid grid-cols-3 gap-2">
          {actions.map((action) => {
            const Icon = action.icon;
            const external = action.href.startsWith("http");

            return (
              <a
                key={action.label}
                href={action.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 text-center text-[0.68rem] font-black uppercase text-white"
              >
                <Icon size={17} aria-hidden="true" />
                {action.label}
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}
