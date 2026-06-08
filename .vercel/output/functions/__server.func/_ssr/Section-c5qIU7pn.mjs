import { j as jsxRuntimeExports } from "../_libs/react.mjs";
function Section({
  children,
  className = "",
  id
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id, className: `py-20 md:py-28 ${className}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x", children }) });
}
function SectionHeader({
  eyebrow,
  title,
  description
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-4", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-semibold leading-[1.05]", children: title }),
    description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-base md:text-lg text-muted-foreground", children: description })
  ] });
}
function PageHero({
  eyebrow,
  title,
  description
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden border-b border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -right-32 h-96 w-96 rounded-full bg-ember/20 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x relative py-24 md:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-4xl md:text-6xl font-semibold leading-[1.02] max-w-4xl", children: title }),
      description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-lg text-muted-foreground", children: description })
    ] })
  ] });
}
export {
  PageHero as P,
  Section as S,
  SectionHeader as a
};
