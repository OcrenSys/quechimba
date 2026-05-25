import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://que-chimba-parce.vercel.app"),
  title: "Que Chimba Parce | Discoteca y Club Nocturno",
  description:
    "Eventos, promociones, paquetes de cumpleaños, bebidas y reservas en Que Chimba Parce.",
  keywords: [
    "discoteca",
    "club nocturno",
    "Que Chimba Parce",
    "Discoteca Ciudad Sandino",
    "Club nocturno Ciudad Sandino",
    "Promociones bares Ciudad Sandino",
    "Karaoke Ciudad Sandino",
    "Jueves Cervecero Ciudad Sandino",
    "Birthday packages Ciudad Sandino",
    "eventos Ciudad Sandino",
    "promociones de bebidas",
    "cumpleaños",
    "reservas WhatsApp",
    "Plaza Cali",
  ],
  openGraph: {
    title: "Que Chimba Parce | Discoteca y Club Nocturno",
    description:
      "Eventos, promociones, paquetes de cumpleaños, bebidas y reservas en Que Chimba Parce.",
    images: [
      {
        url: "/og-que-chimba-parce.svg",
        width: 1200,
        height: 630,
        alt: "Logo y luces neon de Que Chimba Parce",
      },
    ],
    locale: "es_NI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
