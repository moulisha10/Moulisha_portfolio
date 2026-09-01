import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Tools — React, Node.js, MongoDB" },
      {
        name: "description",
        content:
          "The languages, frameworks and tools I use daily: React, TypeScript, Tailwind CSS, Node.js, Express, MongoDB and more.",
      },
      { property: "og:title", content: "Skills & Tools — Moulisha Roy" },
      {
        property: "og:description",
        content: "Frontend, backend and tooling stack I work with every day.",
      },
    ],
  }),
  component: Skills,
});

const groups = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "TanStack Router", "Framer Motion", "Vite"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST & tRPC", "Auth / JWT"],
  },
  {
    title: "Tooling & craft",
    items: ["Git & GitHub", "Docker", "Playwright", "Figma", "CI/CD", "Accessibility (WCAG)"],
  },
];

function Skills() {
  return (
    <section className="section-shell">
      <SectionHeading
        eyebrow="Skills & tools"
        title="A stack I actually enjoy working in."
        description="Depth over novelty. These are the tools I reach for when a project needs to ship and then survive maintenance a year later."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <div key={group.title} className="rounded-2xl border border-border/60 bg-card p-6">
            <h2 className="font-display text-lg font-semibold">{group.title}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
