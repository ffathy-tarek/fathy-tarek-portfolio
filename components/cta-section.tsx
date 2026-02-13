"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Linkedin, Mail, Phone, Rocket } from "lucide-react";

export function CTASection() {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="bg-card px-6 py-24">
      <div ref={ref} className="reveal-section mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <Rocket className="h-6 w-6 text-primary" />
        </div>

        <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
          {"I am actively seeking a Software Development Internship or Trainee Position in:"}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {["Full Stack Development", "Backend Development (.NET / C#)", "Database Development"].map(
            (role) => (
              <span
                key={role}
                className="rounded-lg border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
              >
                {role}
              </span>
            )
          )}
        </div>

        <div className="mx-auto mt-8 h-px w-16 bg-border" />

        <div className="mt-8 space-y-3 text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            {"Email: "}
            <a
              href="mailto:ffathy2244@gmail.com"
              onClick={(e) => {
                e.preventDefault();
                window.open("mailto:ffathy2244@gmail.com", "_self");
              }}
              className="font-medium text-foreground transition-colors hover:text-primary"
            >
              {"ffathy2244@gmail.com"}
            </a>
          </p>
          <p className="flex items-center justify-center gap-2">
            <Phone className="h-4 w-4 text-primary" />
            {"Phone: "}
            <span className="font-medium text-foreground">{"+20 1091353719"}</span>
          </p>
          <p className="flex items-center justify-center gap-2">
            <Linkedin className="h-4 w-4 text-primary" />
            {"LinkedIn: "}
            <a
              href="https://www.linkedin.com/in/fathy-tarek-cs"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground transition-colors hover:text-primary"
            >
              {"www.linkedin.com/in/fathy-tarek-cs"}
            </a>
          </p>
        </div>

        <p className="mt-8 text-pretty text-lg font-medium text-foreground">
          {"Let\u2019s build scalable and structured software solutions together."}
        </p>
      </div>
    </section>
  );
}
