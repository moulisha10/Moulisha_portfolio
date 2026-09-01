import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Moulisha Roy — Developer Story & Approach" },
      {
        name: "description",
        content:
          "How I got into engineering, the way I work with teams, and what I care about when shipping web products.",
      },
      { property: "og:title", content: "About Moulisha Roy" },
      {
        property: "og:description",
        content: "Developer story, working style and experience timeline.",
      },
    ],
  }),
  component: About,
});

const timeline = [
  {
    date: "18th April, 2026",
    role: "Securing 3rd position in Inter College Hackathon",
    detail: "Organized by College of Engineering & Management, Kolaghat.",
  },
  {
    date: "2021 — 2023",
    role: "Full-Stack Developer, Tidepool Studio",
    detail: "Shipped 15+ client apps across e-commerce, fintech and education.",
  },
  {
    date: "2019 — 2021",
    role: "Frontend Developer, Freelance",
    detail: "Built marketing sites and design systems for early-stage startups.",
  },
];

function About() {
  return (
    <section className="section-shell">
      <SectionHeading
        eyebrow="About"
        title="Engineer by trade, designer by instinct."
        description="I started out tinkering with CSS on a school laptop and never stopped. Today I build full-stack products end to end — from database schema to the last hover state."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I care most about clarity: clear interfaces, clear code, clear communication. Most of
            my work sits at the seam between design and engineering, where a small refinement can
            save a user thirty seconds every single day.
          </p>
          <p>
            Outside of work you'll find me writing about developer tooling, contributing to
            open-source React libraries, and taking very long walks to debug problems away from a
            screen.
          </p>
        </div>

        <ol className="space-y-6">
          {timeline.map((item) => (
            <li
              key={item.date}
              className="rounded-2xl border border-border/60 bg-card p-6 transition-colors hover:border-primary/50"
            >
              <p className="font-display text-xs uppercase tracking-[0.2em] text-primary">
                {item.date}
              </p>
              <h2 className="mt-2 text-lg font-semibold">{item.role}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
