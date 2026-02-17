"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { User, Database, Lightbulb, Code } from "lucide-react";

export function AboutSection() {
  const ref = useScrollReveal();

  const strengths = [
    {
      icon: Lightbulb,
      title: "Backend Architecture",
      description: "Designing structured and maintainable server-side systems.",
    },
    {
      icon: Database,
      title: "Database Design & Optimization",
      description: "Building efficient relational schemas and performance-focused queries.",
    },
    {
      icon: Code,
      title: "Clean Code & Scalable Systems",
      description: "Writing maintainable, readable, and extensible codebases.",
    },
  ];

  return (
    <section id="about" className="px-6 py-24">
      <div ref={ref} className="reveal-section mx-auto max-w-4xl">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <User className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground">
            {"About Me"}
          </h2>
        </div>

        <div className="mt-2 h-1 w-16 rounded-full bg-primary" />

        {/* USP Box */}
        <div className="mt-8 rounded-lg border border-primary/20 bg-primary/5 px-6 py-5">
          <p className="text-balance text-sm font-semibold text-primary">
            {"USP: I transform complex business requirements into structured, high-performance, database-driven systems with clean architecture and scalable backend logic."}
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

        {/* Core Strengths */}
        <div className="mt-12">
          <h3 className="mb-6 text-xl font-bold tracking-tight text-foreground">
            {"Core Strengths"}
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {strengths.map((strength) => {
              const Icon = strength.icon;
              return (
                <div
                  key={strength.title}
                  className="group rounded-lg border border-border bg-secondary/50 p-5 transition-all hover:border-primary/30 hover:bg-secondary"
                >
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="mb-2 font-semibold text-foreground">
                    {strength.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {strength.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
