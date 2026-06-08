import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero, S as Section } from "./Section-c5qIU7pn.mjs";
import { i as innovationHub } from "./router-8vq-l5wn.mjs";
import { e as ArrowUpRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
const fifthHaven = "/assets/5th-haven-B1ouNBbo.jpg";
const spaceview = "/assets/spaceview-towers-gIvzK9xm.jpg";
const asokoro = "/assets/asokoro-terraces-V_agVcSu.jpg";
const villa71 = "/assets/villa-71-DUupwcBe.jpg";
const zentroa = "/assets/zentroa-estate-Cfhdreba.jpg";
const maitama = "/assets/maitama-duplexes-CW3FRueD.jpg";
const fourIsles = "/assets/4-isles-hotel-CTFpjvFp.jpg";
const luxuryTowers = "/assets/luxury-towers-BNsOJwVx.jpg";
const projects = [{
  img: innovationHub,
  sector: "Commercial",
  title: "Innovation Hub - Wuse 2 Abuja",
  scope: "MEPF design & BIM coordination + Suppervision",
  meta: "Status: Ongoing",
  year: "2024"
}, {
  img: fifthHaven,
  sector: "RESIDENTIAL",
  title: "5th Haven by Rolling Bricks",
  scope: "MEPF design + site supervision",
  meta: "Status: Ongoing",
  year: "2023"
}, {
  img: spaceview,
  sector: "RESIDENTIAL",
  title: "Spaceview Towers by Avantgardian",
  scope: "MEPF Design and Supervision",
  meta: "Status: Ongoing",
  year: "2023"
}, {
  img: asokoro,
  sector: "RESIDENTIAL",
  title: "Asokoro Terraces",
  scope: "MEPF Design and Supervision",
  meta: "Status: Ongoing",
  year: "2022"
}, {
  img: villa71,
  sector: "RESIDENTIAL",
  title: "Villa 71 - Guzape",
  scope: "MEPF design & Supervision",
  meta: "Status: Ongoing",
  year: "2024"
}, {
  img: zentroa,
  sector: "MIX-USED",
  title: "The Zentroa Estate ",
  scope: "MEPF Design + Supervision",
  meta: "Status: Ongoing",
  year: "2023"
}, {
  img: maitama,
  sector: "RESIDENTIAL",
  title: "Maitama Duplexes",
  scope: "MEPF Design + Supervision",
  meta: "Status: Ongoing",
  year: "2022"
}, {
  img: fourIsles,
  sector: "HOSPITALITY",
  title: "4-Isles Hotel",
  scope: "MEPF design & supervision",
  meta: "Status: Ongoing",
  year: "2024"
}, {
  img: luxuryTowers,
  sector: "Residential",
  title: "Luxury residential Estate",
  scope: "MEPF design & Supervision",
  meta: "Status: Completed",
  year: "2023"
}];
function Projects() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Our projects", title: "Delivered across residential, hospitality, and commercial.", description: "A selection of some MEPF, BIM coordination and site supervision projects delivered by the Azbar team." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6", children: projects.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative overflow-hidden border border-border bg-surface/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, width: 1200, height: 900, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs uppercase tracking-wider text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ember whitespace-pre-line", children: p.sector }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.year })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mt-3 text-xl font-semibold flex items-start justify-between gap-3", children: [
          p.title,
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-ember" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: p.scope }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground/80", children: p.meta })
      ] })
    ] }, p.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border bg-surface/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x py-16 grid grid-cols-2 md:grid-cols-4 gap-6", children: [["220+", "Projects delivered"], ["12", "Sectors served"], ["1.4M m²", "Designed in BIM"], ["0", "Major site clashes"]].map(([n, l]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-2 border-ember pl-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl font-semibold", children: n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground mt-1", children: l })
    ] }, l)) }) })
  ] });
}
export {
  Projects as component
};
