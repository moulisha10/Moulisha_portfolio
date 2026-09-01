import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MapPin, Clock } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Moulisha Roy — Start a Project" },
      {
        name: "description",
        content:
          "Have a project, role or idea in mind? Send a message and I'll reply within two business days.",
      },
      { property: "og:title", content: "Contact Moulisha Roy" },
      {
        property: "og:description",
        content: "Send a message about freelance work, roles or collaborations.",
      },
    ],
  }),
  component: Contact,
});

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter at least 2 characters" })
    .max(100, { message: "Name must be under 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Enter a valid email address" })
    .max(255, { message: "Email must be under 255 characters" }),
  subject: z
    .string()
    .trim()
    .min(3, { message: "Please enter at least 3 characters" })
    .max(120, { message: "Subject must be under 120 characters" }),
  message: z
    .string()
    .trim()
    .min(20, { message: "Tell me a bit more — at least 20 characters" })
    .max(1000, { message: "Message must be under 1000 characters" }),
});

type ContactValues = z.infer<typeof contactSchema>;

const fieldClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/40";

const details = [
  { icon: Mail, label: "hello@moulisharoy.dev" },
  { icon: MapPin, label: "Bengaluru, India — remote friendly" },
  { icon: Clock, label: "Replies within 2 business days" },
];

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (values: ContactValues) => {
    await new Promise((r) => setTimeout(r, 600));
    toast.success(`Thanks ${values.name.split(" ")[0]}! Your message is on its way.`);
    reset();
  };

  return (
    <section className="section-shell">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something together."
        description="Freelance projects, full-time roles or just a good technical conversation — the form goes straight to my inbox."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <ul className="space-y-4">
          {details.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex min-w-0 items-center gap-3 rounded-2xl border border-border/60 bg-card p-5"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                <Icon className="size-5" />
              </span>
              <span className="min-w-0 text-sm text-muted-foreground">{label}</span>
            </li>
          ))}
        </ul>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-5 rounded-2xl border border-border/60 bg-card p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                {...register("name")}
                className={fieldClass}
                placeholder="Jane Doe"
                aria-invalid={!!errors.name}
              />
              {errors.name && (
                <p className="mt-2 text-xs text-destructive">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className={fieldClass}
                placeholder="jane@company.com"
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p className="mt-2 text-xs text-destructive">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="mb-2 block text-sm font-medium">
              Subject
            </label>
            <input
              id="subject"
              {...register("subject")}
              className={fieldClass}
              placeholder="Project enquiry"
              aria-invalid={!!errors.subject}
            />
            {errors.subject && (
              <p className="mt-2 text-xs text-destructive">{errors.subject.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              {...register("message")}
              className={`${fieldClass} resize-y`}
              placeholder="Tell me about your project, timeline and budget."
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <p className="mt-2 text-xs text-destructive">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
          >
            {isSubmitting ? "Sending…" : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}
