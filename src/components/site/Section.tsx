import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
      <h2 className="text-3xl md:text-5xl font-semibold leading-[1.05]">{title}</h2>
      {description && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-ember/20 blur-3xl" />
      <div className="container-x relative py-24 md:py-32">
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.02] max-w-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{description}</p>
        )}
      </div>
    </section>
  );
}
