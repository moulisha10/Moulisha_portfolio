import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Moulisha Roy — Full-Stack MERN Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Moulisha Roy, a full-stack developer building fast, accessible web apps with React, Node.js and Tailwind CSS.",
      },
      { property: "og:title", content: "Moulisha Roy — Full-Stack MERN Developer" },
      {
        property: "og:description",
        content: "React, Node.js and Tailwind CSS projects, skills and contact details.",
      },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "5+", label: "Years building for the web" },
  { value: "30+", label: "Shipped projects" },
  { value: "12", label: "Open-source contributions" },
];

function Index() {
  return (
    <>
      <section className="hero-glow relative overflow-hidden border-b border-border/60">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="min-w-0">
            <p className="font-display text-xs uppercase tracking-[0.25em] text-primary">
              Full-stack developer · Remote
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
              I build web products that feel effortless.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Hi, I'm Moulisha Roy. I design and engineer end-to-end applications with React,
              Node.js and MongoDB — obsessing over performance, accessibility and the small
              details that make software feel good to use.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
              >
                View my work <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Get in touch
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-4 text-muted-foreground">
              <a href="https://github.com/moulisha10" aria-label="GitHub" className="hover:text-primary">
                <Github className="size-5" />
              </a>
              <a href="https://www.linkedin.com/in/moulisha-roy/" aria-label="LinkedIn" className="hover:text-primary">
                <Linkedin className="size-5" />
              </a>
              <a href="mailto:roymoulisha709@gmail.com" aria-label="Email" className="hover:text-primary">
                <Mail className="size-5" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border/60 shadow-elegant">
              <img
                src={heroImage}
                alt="Abstract amber light streaks on a dark background"
                width={1600}
                height={1200}
                className="h-64 w-full object-cover sm:h-80 lg:h-[26rem]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border/60 bg-card p-6 transition-colors hover:border-primary/50"
            >
              <p className="font-display text-4xl font-bold text-primary">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
