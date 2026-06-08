import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import supervision from "@/assets/construction-supervision.jpg";
import { Target, Compass, ShieldCheck, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Azbar Engineering" },
      { name: "description", content: "Azbar Engineering Services Limited is an MEPF consulting firm built on BIM-led design and on-site supervision discipline." },
      { property: "og:title", content: "About Azbar Engineering" },
      { property: "og:description", content: "Who we are: an MEPF consulting firm built on BIM technology and supervision." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="An MEPF practice built on coordination and craft."
        description="Azbar Engineering Services Limited brings together mechanical, electrical, plumbing and fire engineers with a shared commitment: design that's coordinated in BIM and delivered with discipline on site."
      />

      <Section>
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <img
              src={supervision}
              alt="Engineer supervising MEP installation on site"
              width={1400}
              height={1000}
              loading="lazy"
              className="w-full border border-border"
            />
          </div>
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">Who we are</div>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Engineering with a builder's mindset.
            </h2>
            <p className="mt-5 text-muted-foreground">
              We are MEPF consultants who think like contractors. Our designs are tested against
              constructability from day one. Our drawings are shop-drawing ready. Our supervisors
              know what a code-compliant install actually looks like.
            </p>
            <p className="mt-4 text-muted-foreground">
              That's the Azbar standard — and it's how we deliver projects without surprises.
            </p>
          </div>
        </div>
      </Section>

      <section className="border-y border-border bg-surface/30">
        <div className="container-x py-20 grid md:grid-cols-2 gap-10">
          <div className="border-l-2 border-ember pl-6">
            <div className="eyebrow mb-3">Mission</div>
            <h3 className="text-2xl font-semibold">Coordinated MEPF design, delivered as built.</h3>
            <p className="mt-3 text-muted-foreground">
              To engineer building services that are efficient, compliant and constructible — and
              to see them through to commissioning.
            </p>
          </div>
          <div className="border-l-2 border-ember pl-6">
            <div className="eyebrow mb-3">Vision</div>
            <h3 className="text-2xl font-semibold">The MEPF partner clients call first.</h3>
            <p className="mt-3 text-muted-foreground">
              To be the consulting firm of choice for developers, architects and contractors who
              refuse to compromise on coordination.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="eyebrow mb-4">Values</div>
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight max-w-2xl">
          What we hold ourselves to.
        </h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Target, t: "Precision", d: "Drawings that survive site reality." },
            { icon: Compass, t: "Coordination", d: "Federated BIM, zero clashes at handover." },
            { icon: ShieldCheck, t: "Compliance", d: "Every system to code, no exceptions." },
            { icon: Sparkles, t: "Care", d: "We treat every project like our own." },
          ].map((v) => (
            <div key={v.t} className="p-6 border border-border bg-surface/40">
              <v.icon className="h-6 w-6 text-ember" />
              <h3 className="mt-4 font-semibold">{v.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
