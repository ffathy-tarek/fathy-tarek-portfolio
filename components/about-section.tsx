"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { User, Server, Database, Code2 } from "lucide-react";

const coreStrengths = [
  {
    icon: Server,
    title: "Backend Architecture",
    description:
      "Designing structured and maintainable server-side systems.",
  },
  {
    icon: Database,
    title: "Database Design & Optimization",
    description:
      "Building efficient relational schemas and performance-focused queries.",
  },
  {
    icon: Code2,
    title: "Clean Code & Scalable Systems",
    description:
      "Writing maintainable, readable, and extensible codebases.",
  },
];

export function AboutSection() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="px-6 py-24">
      <div ref={ref} className="reveal-section mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <User className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground">
            {"About Me"}
          </h2>
        </div>

        <div className="mt-2 h-1 w-16 rounded-full bg-primary" />

        {/* USP Highlight Box */}
        <div className="mt-8 rounded-xl border border-primary/25 bg-primary/5 px-6 py-5">
          <p className="text-sm font-medium uppercase tracking-widest text-primary/70">
            {"What I Do"}
          </p>
          <p className="mt-2 text-pretty text-base leading-relaxed text-primary">
            {"I transform complex business requirements into structured, high-performance, database-driven systems with clean architecture and scalable backend logic."}
          </p>
        </div>

        {/* Main About Content */}
        <div className="mt-8 space-y-5 text-pretty leading-relaxed text-muted-foreground">
          <p>
            {"I am a Full-Stack .NET Developer with strong foundations in Object-Oriented Programming, Data Structures, Algorithms, and Database Design."}
          </p>
          <p>
            {"I specialize in building scalable, maintainable, and performance-oriented web applications using clean architecture principles and structured backend logic."}
          </p>
          <p>
            {"My core strength lies in Backend Development and Database Architecture, where I design optimized relational database systems and implement efficient business logic that ensures long-term scalability and system reliability."}
          </p>
          <p>
            {"Through hands-on project implementation, I have worked with C#, SQL Server, HTML, and CSS to deliver structured and production-ready applications. I continuously refine my skills in software engineering best practices to contribute effectively within professional development teams."}
          </p>
        </div>

        {/* Core Strengths Grid */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {"Core Strengths"}
          </h3>
          <div className="mt-1 h-0.5 w-10 rounded-full bg-primary/50" />

          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {coreStrengths.map((strength) => (
              <div
                key={strength.title}
                className="group rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:scale-105"
                  style={{
                    filter:
                      "drop-shadow(0 0 4px hsl(213 94% 58% / 0.2))",
                  }}
                >
                  <strength.icon className="h-5 w-5" />
                </div>
                <h4 className="mt-4 text-sm font-semibold text-foreground">
                  {strength.title}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
