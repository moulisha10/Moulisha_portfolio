import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Full-Stack Web Apps by Moulisha Roy" },
      {
        name: "description",
        content:
          "Selected work: a realtime analytics dashboard, a headless commerce storefront, a habit tracker and more.",
      },
      { property: "og:title", content: "Projects — Moulisha Roy" },
      {
        property: "og:description",
        content: "Selected full-stack projects built with React, Node.js and MongoDB.",
      },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    name: "Pulseboard",
    blurb:
      "Realtime analytics dashboard with streaming charts, saved views and role-based access for teams.",
    stack: ["React", "Node.js", "MongoDB", "WebSockets"],
    href: "https://github.com",
  },
  {
    name: "Kindle Commerce",
    blurb:
      "Headless storefront with a custom cart engine, Stripe checkout and sub-second page loads.",
    stack: ["React", "Express", "Stripe", "Tailwind"],
    href: "https://github.com",
  },
  {
    name: "Loop",
    blurb: "Habit tracker with offline-first sync, streak analytics and a calm, focused UI.",
    stack: ["React", "IndexedDB", "Node.js"],
    href: "https://github.com",
  },
  {
    name: "Docsy",
    blurb:
      "Markdown documentation platform with instant search, versioned pages and team comments.",
    stack: ["TypeScript", "MongoDB", "Algolia"],
    href: "https://github.com",
  },
];

function Projects() {
  return (
    <section className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've designed, built and shipped."
        description="A few projects that best represent how I think about product, performance and polish."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className="group flex flex-col rounded-2xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-elegant"
          >
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
              <h2 className="min-w-0 text-xl font-semibold">{p.name}</h2>
              <a
                href={p.href}
                aria-label={`Open ${p.name}`}
                className="shrink-0 rounded-full border border-border p-2 text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary"
              >
                <ArrowUpRight className="size-4" />
              </a>
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <li
                  key={s}
                  className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
