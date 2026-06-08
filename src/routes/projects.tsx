import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import innovationHub from "@/assets/innovation-hub.jpg";
import fifthHaven from "@/assets/5th-haven.jpg";
import spaceview from "@/assets/spaceview-towers.jpg";
import asokoro from "@/assets/asokoro-terraces.jpg";
import villa71 from "@/assets/villa-71.jpg";
import zentroa from "@/assets/zentroa-estate.jpg";
import maitama from "@/assets/maitama-duplexes.jpg";
import fourIsles from "@/assets/4-isles-hotel.jpg";
import luxuryTowers from "@/assets/luxury-towers.jpg";
import tower from "@/assets/project-tower.jpg";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Azbar Engineering" },
      { name: "description", content: "Selected MEPF, BIM coordination and supervision projects by Azbar Engineering Services Limited." },
      { property: "og:title", content: "Projects · Azbar Engineering" },
      { property: "og:description", content: "Selected MEPF & BIM projects." },
      { property: "og:url", content: "/projects" },
      { property: "og:image", content: innovationHub },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const projects = [
  { img: innovationHub, sector: "Commercial", title: "Innovation Hub - Wuse 2 Abuja", scope: "MEPF design & BIM coordination + Suppervision", meta: "Status: Ongoing", year: "2024" },
  { img: fifthHaven, sector: "RESIDENTIAL", title: "5th Haven by Rolling Bricks", scope: "MEPF design + site supervision", meta: "Status: Ongoing", year: "2023" },
  { img: spaceview, sector: "RESIDENTIAL", title: "Spaceview Towers by Avantgardian", scope: "MEPF Design and Supervision", meta: "Status: Ongoing", year: "2023" },
  { img: asokoro, sector: "RESIDENTIAL", title: "Asokoro Terraces", scope: "MEPF Design and Supervision", meta: "Status: Ongoing", year: "2022" },
  { img: villa71, sector: "RESIDENTIAL", title: "Villa 71 - Guzape", scope: "MEPF design & Supervision", meta: "Status: Ongoing", year: "2024" },
  { img: zentroa, sector: "MIX-USED", title: "The Zentroa Estate ", scope: "MEPF Design + Supervision", meta: "Status: Ongoing", year: "2023" },
  { img: maitama, sector: "RESIDENTIAL", title: "Maitama Duplexes", scope: "MEPF Design + Supervision", meta: "Status: Ongoing", year: "2022" },
  { img: fourIsles, sector: "HOSPITALITY", title: "4-Isles Hotel", scope: "MEPF design & supervision", meta: "Status: Ongoing", year: "2024" },
  { img: luxuryTowers, sector: "Residential", title: "Luxury residential Estate", scope: "MEPF design & Supervision", meta: "Status: Completed", year: "2023" },
];

function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Our projects"
        title="Delivered across residential, hospitality, and commercial."
        description="A selection of some MEPF, BIM coordination and site supervision projects delivered by the Azbar team."
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden border border-border bg-surface/40"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-wider text-muted-foreground">
                  <span className="text-ember whitespace-pre-line">{p.sector}</span>
                  <span>{p.year}</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold flex items-start justify-between gap-3">
                  {p.title}
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-ember" />
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.scope}</p>
                <p className="mt-1 text-xs text-muted-foreground/80">{p.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section className="border-t border-border bg-surface/30">
        <div className="container-x py-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ["220+", "Projects delivered"],
            ["12", "Sectors served"],
            ["1.4M m²", "Designed in BIM"],
            ["0", "Major site clashes"],
          ].map(([n, l]) => (
            <div key={l} className="border-l-2 border-ember pl-4">
              <div className="font-display text-3xl font-semibold">{n}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}