import { Badge } from "@/components/ui/badge";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  id: string;
};

export function SectionHeading({ eyebrow, title, description, id }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <Badge className="mb-4 border-magentaNeon/40 bg-magentaNeon/15 text-white">{eyebrow}</Badge>
      <h2 id={id} className="font-display text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-grayMuted">{description}</p>
    </div>
  );
}
