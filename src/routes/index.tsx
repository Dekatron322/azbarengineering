import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Boxes, HardHat, Layers3, Zap, Droplets, Wind, Flame } from "lucide-react";
import heroBim from "@/assets/hero-bim.jpg";
import bimSystems from "@/assets/bim-systems.jpg";
import whatWeDoEngineering from "@/assets/what-we-do-engineering.jpg";
import dantataLogo from "@/assets/dantata.png.asset.json";
import avantGardianLogo from "@/assets/avantgardian.png.asset.json";
import cosgroveLogo from "@/assets/cosgrove.png.asset.json";
import growthillLogo from "@/assets/growthill.png.asset.json";
import greyBouldersLogo from "@/assets/greyboulders.png.asset.json";
import leptonsLogo from "@/assets/leptons.png.asset.json";
import makMakLogo from "@/assets/makmak.png.asset.json";
import modernShelterLogo from "@/assets/modernshelter.png.asset.json";
import rollingBricksLogo from "@/assets/rollingbricks.png.asset.json";
import pithLogo from "@/assets/pith.png.asset.json";
import studioContraLogo from "@/assets/studio-contra.jpg.asset.json";
import rollingEnergyLogo from "@/assets/rolling-energy.jpg.asset.json";

const clientLogos: { src: string; alt: string }[] = [
  { src: dantataLogo.url, alt: "Dantata — One Square Meter" },
  { src: avantGardianLogo.url, alt: "AvantGardian" },
  { src: cosgroveLogo.url, alt: "Cosgrove" },
  { src: growthillLogo.url, alt: "Growthill" },
  { src: greyBouldersLogo.url, alt: "Grey Boulders" },
  { src: leptonsLogo.url, alt: "Leptons Multiconcept" },
  { src: makMakLogo.url, alt: "Mak & Mak Ltd" },
  { src: modernShelterLogo.url, alt: "Modern Shelter Systems & Services Ltd" },
  { src: rollingBricksLogo.url, alt: "Rolling Bricks" },
  { src: pithLogo.url, alt: "Pith Engineering" },
  { src: studioContraLogo.url, alt: "Studio Contra" },
  { src: rollingEnergyLogo.url, alt: "Rolling Energy" },
];
import { Section, SectionHeader } from "@/components/site/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Azbar Engineering — MEPF Consulting · BIM · Supervision" },
      { name: "description", content: "MEPF consulting firm delivering BIM-led mechanical, electrical, plumbing and fire design plus rigorous construction supervision." },
      { property: "og:title", content: "Azbar Engineering — MEPF · BIM · Supervision" },
      { property: "og:description", content: "BIM-led MEPF design and supervision for buildings that work." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const disciplines = [
  { icon: Wind, label: "Mechanical / HVAC" },
  { icon: Zap, label: "Electrical & ELV" },
  { icon: Droplets, label: "Plumbing & Drainage" },
  { icon: Flame, label: "Fire Protection" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img
            src={heroBim}
            alt="BIM model of MEP systems on dual monitors"
            width={1600}
            height={1100}
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 grid-bg opacity-30" />
        </div>
        <div className="container-x relative py-28 md:py-40">
          <div className="eyebrow">MEPF Design</div>
          <h1 className="mt-5 text-5xl md:text-7xl font-semibold leading-[0.98] max-w-4xl">
            Buildings that work,<br />
            <span className="text-ember">engineered in BIM.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Azbar Engineering Services Limited delivers integrated mechanical, electrical, plumbing
            and fire safety design with BIM coordination and disciplined site supervision.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 bg-ember px-5 py-3 text-sm font-medium text-ember-foreground transition-transform hover:-translate-y-0.5"
            >
              Explore services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 border border-border bg-surface/50 px-5 py-3 text-sm font-medium text-foreground hover:bg-surface"
            >
              View projects
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            {[
              ["100+", "Projects delivered"],
              ["15+", "YEARS "],
              ["200+", "Designed in BIM"],
              ["LOD 400", "Coordination"],
            ].map(([n, l]) => (
              <div key={l} className="border-l-2 border-ember pl-4">
                <div className="font-display text-2xl md:text-3xl font-semibold">{n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISCIPLINES STRIP */}
      <section className="border-b border-border bg-surface/30">
        <div className="container-x py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {disciplines.map((d) => (
            <div key={d.label} className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-ember/10 text-ember">
                <d.icon className="h-5 w-5" />
              </div>
              <span className="font-display text-sm font-medium">{d.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE DO */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="overflow-hidden border border-border lg:sticky lg:top-24">
            <img
              src={whatWeDoEngineering}
              alt="Azbar engineering team reviewing MEPF plans"
              loading="lazy"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="space-y-8">
            <SectionHeader
              eyebrow="What we do"
              title="Three pillars. One coordinated outcome."
              description="From concept to commissioning, we keep MEPF systems coordinated, code-compliant, and constructible."
            />
            <div className="grid gap-4">
              {[
                { icon: Layers3, t: "MEPF Design", d: "Integrated mechanical, electrical, plumbing and fire systems engineered for performance and code compliance." },
                { icon: Boxes, t: "BIM Modelling & Coordination", d: "Revit-based modelling to LOD 350–400 with clash detection, federated coordination and 4D scheduling." },
                { icon: HardHat, t: "Construction Supervision", d: "On-site supervision, QA/QC, RFI/shop-drawing review, testing and commissioning oversight." },
              ].map((s) => (
                <Link
                  key={s.t}
                  to="/services"
                  className="group flex gap-5 p-6 border border-border bg-surface/40 hover:bg-surface hover:border-ember/40 transition-colors"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-ember text-ember-foreground">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{s.t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground self-center transition-transform group-hover:translate-x-1 group-hover:text-ember" />
                </Link>
              ))}
            </div>
          </div>
        </div>


      </Section>

      {/* BIM FEATURE */}
      <section className="border-y border-border bg-surface/20">
        <div className="container-x py-20 md:py-28 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">BIM-led design</div>
            <h2 className="text-3xl md:text-5xl font-semibold leading-[1.05]">
              We model the building before anyone breaks ground.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Every duct, pipe, conduit and cable tray lives in a federated Revit model. We catch
              clashes early, optimise routing, and hand contractors drawings they can actually
              build from.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {[
                "Revit MEP design to LOD 350–400",
                "Navisworks clash detection & resolution",
                "Coordinated shop drawings & schedules",
                "BIM Execution Plans aligned with ISO 19650",
              ].map((i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-ember">→</span> {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <div className="relative">
              <div className="absolute -inset-4 bg-ember/10 blur-2xl" />
              <img
                src={bimSystems}
                alt="Isometric BIM render of MEP systems"
                width={1400}
                height={1000}
                loading="lazy"
                className="relative w-full border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR CLIENTS */}
      <Section>
        <SectionHeader
          eyebrow="Our clients"
          title="Trusted by teams across the built environment."
          description="A selection of organisations we've delivered MEPF design, BIM and supervision for."
        />
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-border border border-border">
          {Array.from({ length: 12 }).map((_, i) => {
            const logo = clientLogos[i];
            return (
              <div
                key={i}
                className="aspect-[3/2] bg-background flex items-center justify-center p-6 group hover:bg-surface/60 transition-colors"
              >
                {logo ? (
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-16 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground/60">
                    Logo {i + 1}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="relative overflow-hidden border border-border p-10 md:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-ember/20 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-8 items-end">
            <div>
              <div className="eyebrow mb-3">Start a project</div>
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                Have a building that needs MEPF expertise?
              </h2>
            </div>
            <div className="md:text-right">
              <p className="text-muted-foreground mb-6">
                Tell us about the scope. We'll get back within one business day.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-ember px-6 py-3 text-sm font-medium text-ember-foreground"
              >
                Contact Azbar <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
