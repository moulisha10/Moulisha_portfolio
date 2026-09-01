export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="font-display text-xs uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
      <h1 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h1>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
