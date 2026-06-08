import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero, S as Section } from "./Section-c5qIU7pn.mjs";
import { B as Briefcase, b as MapPin, L as Linkedin, a as Mail, D as Download } from "../_libs/lucide-react.mjs";
const photoAzbarMd = "/assets/team-azbar-md-BfR2iuJi.jpg";
const photoBimDirector = "/assets/team-bim-director-Dy4doqvo.jpg";
const photoSupervisionLead = "/assets/team-supervision-lead-ncDa_Uzs.jpg";
const photoMechanicalLead = "/assets/team-mechanical-lead-B4C5VQgs.jpg";
const photoMechanicalLead2 = "/assets/team-mechanical-lead-new-6DgnDWCO.jpg";
const photoElectricalLead = "/assets/team-electrical-lead-BhdkNSM-.jpg";
const team = [{
  slug: "azbar-md",
  photo: photoAzbarMd,
  name: "Engr. Braimoh Tunde",
  title: "md/ceo",
  experience: "18+ years",
  location: "Abuja, FCT, Nig.",
  bio: "Engr. Braimoh Tunde, the Managing Director and CEO of Azbar Engineering is a seasoned building services mechanical engineer with over 18 years of experience in MEP Engineering, Design, Maintenance, Supervision, Management, and Systems Troubleshooting. His career has spanned several prestigious companies, including A4 Associates Limited, Denver Building Services Limited, CMB Vertikal Construction, Cosgrove Investment Ltd, and Nairda Ltd. Engr. Tunde’s expertise and hands-on involvement in numerous high-proﬁle projects have laid the foundation for Azbar Engineering.",
  specialties: ["design", "review", "management", "coordination"],
  email: "md@azbarengineering.com",
  linkedin: "#",
  resume: "/resumes/azbar-md.pdf"
}, {
  slug: "coo",
  photo: photoSupervisionLead,
  name: "Engr. Anas Abdullahi",
  title: "COO",
  experience: "FAAN & Cosgrove",
  location: "Abuja, FCT, Nig.",
  bio: "Engr. Anas Abdullahi, Chief Operating Oﬃcer at Azbar Engineering, brings extensive experience from leading major projects with the Federal Airports Authority of Nigeria (FAAN) and Cosgrove. With a proven track record in managing large-scale engineering initiatives, he plays a pivotal role in driving operational excellence.",
  specialties: ["management", "strategy", "execution"],
  email: "site@azbarengineering.com",
  linkedin: "#",
  resume: "/resumes/supervision-lead.pdf"
}, {
  slug: "gm",
  photo: photoBimDirector,
  name: "Engr. Olugbemiga Ogunjumo",
  title: "GM",
  experience: "25+ years",
  location: "Abuja, FCT, Nig.",
  bio: "Engr. Olugbemiga Ogunjumo, General Manager at Azbar Engineering, has over 25 years of experience managing large-scale projects. His career includes work with prestigious organizations such as the World Bank, Mar & Mor, and AY-Ahmed Consults, where he has consistently driven successful project outcomes through expert engineering management.",
  specialties: ["Project Outcomes", "Engineering Management", "Strategy"],
  email: "bim@azbarengineering.com",
  linkedin: "#",
  resume: "/resumes/bim-director.pdf"
}, {
  slug: "cto",
  photo: photoMechanicalLead,
  name: "Engr. Adebayo Adeleke",
  title: "CTO",
  experience: "Derock-B CEO",
  location: "Abuja, FCT, Nig.",
  bio: "Engr. Adebayo Adeleke brings a wealth of experience from his tenure at Denver Building Services Ltd (UK) and as Head of Facility Management at Global PFI. As the CEO of Derock-B Engineering Company, he has led the company for years and now strategically partners with Azbar Engineering.",
  specialties: ["management", "strategy", "execution", "review"],
  email: "mech@azbarengineering.com",
  linkedin: "#",
  resume: "/resumes/mechanical-lead.pdf"
}, {
  slug: "electrical-lead",
  photo: photoElectricalLead,
  name: "ENGR. MUHAMMAD ZIAULHAQQ ABUBAKAR",
  title: "Heads Electrical Systems Design",
  experience: "14+ years",
  location: "Abuja, FCT, Nig.",
  bio: "Owns electrical distribution design, lighting, ELV integration and authority approvals. Liaises with utilities on incoming supply and metering strategy.",
  specialties: ["LV/MV Distribution", "Lighting", "ELV/Security", "Approvals"],
  email: "elec@azbarengineering.com",
  linkedin: "#",
  resume: "/resumes/electrical-lead.pdf"
}, {
  slug: "mechanical-lead-2",
  photo: photoMechanicalLead2,
  name: "ENGR. TUNDE DAVID",
  title: "Mechanical Lead",
  experience: "Lead designer",
  location: "Abuja, FCT, Nig.",
  bio: "Lead designer for HVAC systems, load modelling, and energy-efficient mechanical solutions tuned for tropical and mixed-climate buildings.",
  specialties: ["HVAC Design", "Load Modelling", "Energy", "Ventilation"],
  email: "mech@azbarengineering.com",
  linkedin: "#",
  resume: "/resumes/mechanical-lead.pdf"
}];
function Team() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Our team", title: "Engineers who design what they supervise.", description: "A senior team of MEPF engineers, BIM modellers and site supervisors — accountable from first sketch to final commissioning." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: team.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group flex flex-col border border-border bg-surface/40 hover:border-ember/50 transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[3/4] bg-background border-b border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: m.photo, alt: m.name, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover object-top" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-6 flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold", children: m.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-ember mt-1", children: m.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-3 w-3" }),
            " ",
            m.experience
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
            " ",
            m.location
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: m.bio }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-1.5", children: m.specialties.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider px-2 py-1 border border-border bg-background/60 text-muted-foreground", children: s }, s)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-4 border-t border-border flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: m.linkedin, "aria-label": `${m.name} on LinkedIn`, className: "hover:text-ember transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${m.email}`, "aria-label": `Email ${m.name}`, className: "hover:text-ember transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: m.resume, download: true, className: "inline-flex items-center gap-1.5 text-xs font-medium text-ember hover:underline", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Resume (PDF)" })
          ] })
        ] })
      ] })
    ] }, m.slug)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border bg-surface/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x py-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-3", children: "Join us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-semibold", children: "We're always interested in great MEPF engineers." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-muted-foreground", children: [
        "Send your CV to",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:careers@azbarengineering.com", className: "text-ember hover:underline", children: "careers@azbarengineering.com" })
      ] })
    ] }) })
  ] });
}
export {
  Team as component
};
