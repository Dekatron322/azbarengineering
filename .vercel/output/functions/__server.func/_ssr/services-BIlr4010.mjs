import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageHero, S as Section } from "./Section-c5qIU7pn.mjs";
import { c as Boxes, H as HardHat, C as CircleCheck, W as Wind, Z as Zap, d as Droplets, F as Flame, A as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const mepf = [{
  icon: Wind,
  t: "Mechanical / HVAC",
  items: ["Load calculations & equipment sizing", "Duct & piping layouts", "Indoor air quality strategy", "Energy modelling"]
}, {
  icon: Zap,
  t: "Electrical & ELV",
  items: ["Power distribution & sizing", "Lighting design & calculations", "Earthing & lightning protection", "ELV, data & security systems"]
}, {
  icon: Droplets,
  t: "Plumbing & Drainage",
  items: ["Water supply & hot-water systems", "Sanitary & storm drainage", "Pump & tank sizing", "Water reuse strategies"]
}, {
  icon: Flame,
  t: "Fire Protection",
  items: ["Sprinkler & standpipe design", "Fire alarm & detection", "Smoke management", "Code & authority compliance"]
}];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Services", title: "Three integrated services. One accountable partner.", description: "Azbar provides full-service MEPF consulting — from concept design through BIM coordination to on-site supervision and commissioning." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid lg:grid-cols-3 gap-6", children: [{
      icon: Boxes,
      t: "01 — MEPF Design",
      d: "Integrated mechanical, electrical, plumbing and fire systems engineered for performance, efficiency and code compliance."
    }, {
      icon: HardHat,
      t: "02 — BIM Modelling",
      d: "Revit-based MEPF models to LOD 350–400 with Navisworks clash detection, federated coordination and BEP aligned to ISO 19650."
    }, {
      icon: CircleCheck,
      t: "03 — Site Supervision",
      d: "Full construction supervision: shop-drawing review, RFIs, QA/QC, witnessed testing and commissioning oversight."
    }].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 border border-border bg-surface/40 hover:border-ember/40 transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "h-8 w-8 text-ember" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-xl font-semibold", children: p.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: p.d })
    ] }, p.t)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-surface/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x py-20 md:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-4", children: "MEPF disciplines" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-semibold leading-[1.05] max-w-3xl", children: "Every system, engineered in-house." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid md:grid-cols-2 gap-4", children: mepf.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border border-border bg-background", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center bg-ember/10 text-ember", children: /* @__PURE__ */ jsxRuntimeExports.jsx(d.icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: d.t })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2 text-sm text-muted-foreground", children: d.items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ember", children: "·" }),
          " ",
          i
        ] }, i)) })
      ] }, d.t)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-4", children: "How we work" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-semibold max-w-3xl", children: "A repeatable process from concept to commissioning." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid md:grid-cols-5 gap-4", children: [["01", "Brief", "Scope, programme & success criteria."], ["02", "Design", "Concept → schematic → detailed engineering."], ["03", "BIM", "Federated models, clash-free coordination."], ["04", "Tender", "Specs, BoQs and tender support."], ["05", "Supervise", "On-site supervision & commissioning."]].map(([n, t, d]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border border-border bg-surface/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-ember text-sm", children: n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-semibold", children: t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: d })
      ] }, n)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 bg-ember px-6 py-3 text-sm font-medium text-ember-foreground", children: [
        "Discuss your project ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] })
  ] });
}
export {
  Services as component
};
