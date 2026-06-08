import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { Wind, Zap, Droplets, Flame, Boxes, HardHat, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — MEPF · BIM · Supervision · Azbar Engineering" },
      { name: "description", content: "MEPF design, BIM modelling and coordination, and construction supervision services from Azbar Engineering." },
      { property: "og:title", content: "Services · Azbar Engineering" },
      { property: "og:description", content: "MEPF design, BIM coordination and site supervision." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const mepf = [
  { icon: Wind, t: "Mechanical / HVAC", items: ["Load calculations & equipment sizing", "Duct & piping layouts", "Indoor air quality strategy", "Energy modelling"] },
  { icon: Zap, t: "Electrical & ELV", items: ["Power distribution & sizing", "Lighting design & calculations", "Earthing & lightning protection", "ELV, data & security systems"] },
  { icon: Droplets, t: "Plumbing & Drainage", items: ["Water supply & hot-water systems", "Sanitary & storm drainage", "Pump & tank sizing", "Water reuse strategies"] },
  { icon: Flame, t: "Fire Protection", items: ["Sprinkler & standpipe design", "Fire alarm & detection", "Smoke management", "Code & authority compliance"] },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Three integrated services. One accountable partner."
        description="Azbar provides full-service MEPF consulting — from concept design through BIM coordination to on-site supervision and commissioning."
      />

      {/* THREE PILLARS */}
      <Section>
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            { icon: Boxes, t: "01 — MEPF Design", d: "Integrated mechanical, electrical, plumbing and fire systems engineered for performance, efficiency and code compliance." },
            { icon: HardHat, t: "02 — BIM Modelling", d: "Revit-based MEPF models to LOD 350–400 with Navisworks clash detection, federated coordination and BEP aligned to ISO 19650." },
            { icon: CheckCircle2, t: "03 — Site Supervision", d: "Full construction supervision: shop-drawing review, RFIs, QA/QC, witnessed testing and commissioning oversight." },
          ].map((p) => (
            <div key={p.t} className="p-8 border border-border bg-surface/40 hover:border-ember/40 transition-colors">
              <p.icon className="h-8 w-8 text-ember" />
              <h3 className="mt-5 text-xl font-semibold">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* DISCIPLINES */}
      <section className="border-y border-border bg-surface/30">
        <div className="container-x py-20 md:py-28">
          <div className="eyebrow mb-4">MEPF disciplines</div>
          <h2 className="text-3xl md:text-5xl font-semibold leading-[1.05] max-w-3xl">
            Every system, engineered in-house.
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-4">
            {mepf.map((d) => (
              <div key={d.t} className="p-6 border border-border bg-background">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center bg-ember/10 text-ember">
                    <d.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold">{d.t}</h3>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {d.items.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-ember">·</span> {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <Section>
        <div className="eyebrow mb-4">How we work</div>
        <h2 className="text-3xl md:text-4xl font-semibold max-w-3xl">
          A repeatable process from concept to commissioning.
        </h2>
        <div className="mt-12 grid md:grid-cols-5 gap-4">
          {[
            ["01", "Brief", "Scope, programme & success criteria."],
            ["02", "Design", "Concept → schematic → detailed engineering."],
            ["03", "BIM", "Federated models, clash-free coordination."],
            ["04", "Tender", "Specs, BoQs and tender support."],
            ["05", "Supervise", "On-site supervision & commissioning."],
          ].map(([n, t, d]) => (
            <div key={n} className="p-5 border border-border bg-surface/40">
              <div className="font-display text-ember text-sm">{n}</div>
              <div className="mt-2 font-semibold">{t}</div>
              <div className="mt-1 text-xs text-muted-foreground">{d}</div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-ember px-6 py-3 text-sm font-medium text-ember-foreground"
          >
            Discuss your project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
