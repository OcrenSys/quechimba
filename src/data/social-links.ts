import { Facebook, Instagram, Music2 } from "lucide-react";
import type { SocialLink } from "@/types";

export const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://facebook.com/",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/",
    icon: Instagram,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/",
    icon: Music2,
  },
];
