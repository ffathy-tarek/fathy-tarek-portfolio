"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";

export function CTASection() {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="bg-card px-6 py-24">
      <div ref={ref} className="reveal-section mx-auto max-w-2xl text-center">
        {/* Opening Statement */}
        <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
          {"Currently open to "}
          <span className="font-medium text-foreground">
            {"Software Development Internship"}
          </span>
          {" and "}
          <span className="font-medium text-foreground">
            {"Backend Engineering"}
          </span>
          {" opportunities."}
        </p>

        {/* Primary CTA - Send Me an Email */}
        <div className="mt-10">
          <a
            href="mailto:ffathy2244@gmail.com"
            className="glow-btn inline-flex items-center gap-2.5 rounded-lg bg-primary px-7 py-3 text-base font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90"
          >
            <Mail className="h-4.5 w-4.5" />
            {"Send Me an Email"}
          </a>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-10 h-px w-16 bg-border" />

        {/* Contact Info */}
        <div className="mt-10 flex flex-col items-center gap-4">
          {/* Email */}
          <a
            href="mailto:ffathy2244@gmail.com"
            className="group flex items-center gap-3 rounded-lg border border-transparent px-5 py-3 text-sm transition-all hover:border-primary/20 hover:bg-primary/5"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 transition-colors group-hover:bg-primary/15">
              <Mail className="h-4 w-4 text-primary" />
            </span>
            <span className="font-medium text-foreground transition-colors group-hover:text-primary">
              {"ffathy2244@gmail.com"}
            </span>
            <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-all group-hover:text-primary group-hover:opacity-100" />
          </a>

          {/* Phone */}
          <div className="flex items-center gap-3 px-5 py-3 text-sm">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10">
              <Phone className="h-4 w-4 text-primary" />
            </span>
            <span className="font-medium text-foreground">
              {"+20 1091353719"}
            </span>
          </div>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/fathy-tarek-cs"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-lg border border-transparent px-5 py-3 text-sm transition-all hover:border-primary/20 hover:bg-primary/5"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 transition-colors group-hover:bg-primary/15">
              <Linkedin className="h-4 w-4 text-primary" />
            </span>
            <span className="font-medium text-foreground transition-colors group-hover:text-primary">
              {"linkedin.com/in/fathy-tarek-cs"}
            </span>
            <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-all group-hover:text-primary group-hover:opacity-100" />
          </a>
        </div>

        {/* Closing Line */}
        <p className="mt-10 text-pretty text-base font-medium leading-relaxed tracking-wide text-muted-foreground">
          {"Let\u2019s build scalable, performance-oriented systems that make real impact."}
        </p>
      </div>
    </section>
  );
}
