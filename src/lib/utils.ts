import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { WHATSAPP_PHONE } from "@/lib/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
