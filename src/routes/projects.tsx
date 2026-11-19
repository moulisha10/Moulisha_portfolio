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
    name: "Z-vision",
    blurb:
      "Explainable AI-based image detection system to classify real vs AI-generated images.",
    stack: ["React", "Tailwind CSS", "Node.js", "Express", "Python", "FastAPI", "TensorFlow"],
    href: "https://github.com/moulisha10/Zvision.git",
  },
  {
    name: "Emergi-sensei",
    blurb:
      "Realtime multimodal emergency intelligence platform that detects critical incidents and alerts relevant authorities.",
    stack: ["React", "Tailwind CSS", "Python", "FastAPI", "MobileNetV2"],
    href: "https://github.com/moulisha10/Emergisensei.git",
  },
  {
    name: "Classification of Fire Types in India",
    blurb: "Predict the type of fire using MODIS fire detection Satelite data for India.",
    stack: ["Python", "Numpy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"],
    href: "https://github.com/moulisha10/Fire_classification.git",
  },
  {
    name: "Medical Assistant AI Agent",
    blurb:
      "AI-driven diagnostic agent to classify patient symptoms from text inputs, delivering accurate diagnoses.",
    stack: ["Python", "LangChain", "LangGraph", "GenAI"],
    href: "https://github.com/moulisha10/Medical_assistant_agent.git",
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
