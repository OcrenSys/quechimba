import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/sections/section-heading";
import { galleryItems } from "@/data/gallery";
import { cn } from "@/lib/utils";

export function GallerySection() {
  return (
    <Section id="galeria" ariaLabelledby="galeria-title" className="bg-blackSoft/55">
      <Container>
        <SectionHeading
          id="galeria-title"
          eyebrow="Galería"
          title="Así se mira la noche cuando está encendida"
          description="Posters, comida y momentos reales listos para convertirse en la galería oficial del negocio."
        />
        <div className="columns-1 gap-5 space-y-5 md:columns-2 lg:columns-3">
          {galleryItems.map((item) => (
            <article
              key={item.title}
              className={cn(
                "group relative break-inside-avoid overflow-hidden rounded-lg border border-white/10 bg-blackBase shadow-neon",
                item.featured ? "min-h-[25rem]" : "min-h-[21rem]",
              )}
            >
              <div className={cn("relative", item.featured ? "aspect-[4/5]" : "aspect-[3/4]")}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 92vw, (max-width: 1024px) 46vw, 31vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blackBase via-blackBase/10 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <Badge className="mb-3 border-gold/40 bg-blackBase/70 text-gold">{item.category}</Badge>
                {/* <h3 className="font-display text-2xl font-black uppercase text-white">{item.title}</h3> */}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
