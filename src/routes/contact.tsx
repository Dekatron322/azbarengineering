import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section } from "@/components/site/Section";
import { Mail, Phone, MapPin, ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Azbar Engineering" },
      { name: "description", content: "Get in touch with Azbar Engineering Services Limited for MEPF design, BIM coordination or construction supervision." },
      { property: "og:title", content: "Contact · Azbar Engineering" },
      { property: "og:description", content: "Discuss a project with the Azbar team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation with our engineers."
        description="Share a few details about your project. We'll respond within one business day."
      />

      <Section>
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="eyebrow mb-3">Reach us</div>
              <h2 className="text-2xl font-semibold">Azbar Engineering Services Limited</h2>
              <p className="mt-2 text-muted-foreground text-sm">
                MEPF Consulting — BIM design & supervision.
              </p>
            </div>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center bg-ember/10 text-ember">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                  <a href="mailto:info@azbarengineering.com" className="text-sm hover:text-ember">info@azbarengineering.com</a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center bg-ember/10 text-ember">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
                  <a href="tel:+2348103173481" className="text-sm hover:text-ember">+2348103173481</a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center bg-ember/10 text-ember">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Office</div>
                  <div className="text-sm">No. 4. Victor A. Morris Street, Mabushi Abuja, FCT, Nig.</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="p-6 md:p-8 border border-border bg-surface/40 space-y-5"
            >
              {sent ? (
                <div className="flex flex-col items-center text-center py-10">
                  <div className="flex h-14 w-14 items-center justify-center bg-ember text-ember-foreground rounded-full">
                    <Check className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">Message received.</h3>
                  <p className="mt-2 text-muted-foreground text-sm max-w-sm">
                    Thanks for reaching out. An Azbar engineer will get back to you within one business day.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-5">
                    <Field label="Name" name="name" required />
                    <Field label="Company" name="company" />
                    <Field label="Email" name="email" type="email" required />
                    <Field label="Phone" name="phone" />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground">
                      Project type
                    </label>
                    <select
                      className="mt-2 w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-ember"
                      defaultValue=""
                    >
                      <option value="" disabled>Select…</option>
                      <option>MEPF Design</option>
                      <option>BIM Modelling & Coordination</option>
                      <option>Construction Supervision</option>
                      <option>Full Scope</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground">
                      Project details
                    </label>
                    <textarea
                      rows={5}
                      required
                      className="mt-2 w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-ember resize-none"
                      placeholder="Tell us about scope, size, programme…"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-ember px-6 py-3 text-sm font-medium text-ember-foreground hover:-translate-y-0.5 transition-transform"
                  >
                    Send enquiry <ArrowRight className="h-4 w-4" />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-wider text-muted-foreground">
        {label} {required && <span className="text-ember">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-ember"
      />
    </div>
  );
}
