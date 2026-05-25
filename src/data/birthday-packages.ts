import type { BirthdayPackage } from "@/types";

export const birthdayPackages: BirthdayPackage[] = [
  {
    name: "Paquete 1",
    price: "C$ 3,000",
    benefits: [
      "2U Flor de Caña Ultra Lite LT",
      "12 cervezas",
      "12 alitas",
      "Trago de cortesía para el cumpleañero",
    ],
  },
  {
    name: "Paquete 2",
    price: "C$ 4,000",
    benefits: [
      "1U Flor de Caña Ultra Lite LT",
      "1U Gran Reserva LT",
      "1U botella tequila",
      "6 cervezas nacionales",
      "6U Spark",
      "1U nachos mixtos",
    ],
  },
  {
    name: "Paquete 3",
    price: "C$ 5,000",
    benefits: [
      "1U Flor de Caña Ultra Lite LT",
      "2U Jägermeister BT + Redbull",
      "6U Smirnoff",
      "1U tostones mixtos",
    ],
  },
  {
    name: "Paquete Premium",
    price: "C$ 7,000",
    benefits: [
      "1U Jose Cuervo BT",
      "1U Jägermeister BT",
      "1U Flor de Caña Gran Reserva LT",
      "1U Finlandia BT",
      "1 pichel cranberry",
      "1 pichel jugo naranja",
      "16 alitas",
    ],
    featured: true,
  },
];
