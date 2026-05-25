import type { LucideIcon } from "lucide-react";

export type Event = {
  title: string;
  date: string;
  time: string;
  image: string;
  category: string;
  description: string;
  featured: boolean;
  alt: string;
};

export type Promotion = {
  name: string;
  price: string;
  description: string;
  accent: "gold" | "magenta" | "blue";
};

export type BirthdayPackage = {
  name: string;
  price: string;
  benefits: string[];
  featured?: boolean;
};

export type MenuGroup = {
  category: string;
  items: string[];
};

export type GalleryItem = {
  title: string;
  category: string;
  image: string;
  alt: string;
  featured?: boolean;
};

export type WeeklyExperience = {
  day: string;
  title: string;
  description: string;
  active?: boolean;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};
