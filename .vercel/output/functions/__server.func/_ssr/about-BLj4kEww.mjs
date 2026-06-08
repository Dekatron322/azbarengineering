import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero, S as Section } from "./Section-c5qIU7pn.mjs";
import { T as Target, g as Compass, S as ShieldCheck, h as Sparkles } from "../_libs/lucide-react.mjs";
const supervision = "/assets/construction-supervision-B6W04V4j.jpg";
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "About us", title: "An MEPF practice built on coordination and craft.", description: "Azbar Engineering Services Limited brings together mechanical, electrical, plumbing and fire engineers with a shared commitment: design that's coordinated in BIM and delivered with discipline on site." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: supervision, alt: "Engineer supervising MEP installation on site", width: 1400, height: 1e3, loading: "lazy", className: "w-full border border-border" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-4", children: "Who we are" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-semibold leading-tight", children: "Engineering with a builder's mindset." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground", children: "We are MEPF consultants who think like contractors. Our designs are tested against constructability from day one. Our drawings are shop-drawing ready. Our supervisors know what a code-compliant install actually looks like." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "That's the Azbar standard — and it's how we deliver projects without surprises." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-surface/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x py-20 grid md:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-2 border-ember pl-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-3", children: "Mission" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold", children: "Coordinated MEPF design, delivered as built." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "To engineer building services that are efficient, compliant and constructible — and to see them through to commissioning." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-2 border-ember pl-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-3", children: "Vision" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold", children: "The MEPF partner clients call first." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "To be the consulting firm of choice for developers, architects and contractors who refuse to compromise on coordination." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-4", children: "Values" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-semibold leading-tight max-w-2xl", children: "What we hold ourselves to." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4", children: [{
        icon: Target,
        t: "Precision",
        d: "Drawings that survive site reality."
      }, {
        icon: Compass,
        t: "Coordination",
        d: "Federated BIM, zero clashes at handover."
      }, {
        icon: ShieldCheck,
        t: "Compliance",
        d: "Every system to code, no exceptions."
      }, {
        icon: Sparkles,
        t: "Care",
        d: "We treat every project like our own."
      }].map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border border-border bg-surface/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(v.icon, { className: "h-6 w-6 text-ember" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-semibold", children: v.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: v.d })
      ] }, v.t)) })
    ] })
  ] });
}
export {
  About as component
};
