"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Code2, Wrench, Heart, Globe } from "lucide-react";

const technicalSkills = [
  "C#",
  "Java",
  "C++",
  "HTML",
  "CSS",
  "JavaScript (Basic)",
  "SQL Server",
  "MySQL",
  "Backend Development Fundamentals (.NET Concepts)",
  "OOP",
  "Data Structures",
  "Algorithms",
  "Database Design & Relational Database Concepts",
  "Problem Solving & System Analysis",
];

const tools = [
  "Microsoft Word",
  "Excel",
  "PowerPoint",
  "IntelliJ",
  "CLion",
  "Visual Studio",
  "Visual Studio Code",
  "SQL Server",
  "Oracle",
  "Git",
  "GitHub",
];

const softSkills = [
  "Teamwork",
  "Communication",
  "Adaptability",
  "Time Management",
  "Multitasking",
  "Research Skills",
  "Self-Motivation",
  "Ability to Work Under Pressure",
];

const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Very Good" },
  { name: "German", level: "Good" },
];

export function SkillsSection() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="px-6 py-24">
      <div ref={ref} className="reveal-section mx-auto max-w-4xl">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Code2 className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground">
            {"Skills"}
          </h2>
        </div>
        <div className="mt-2 h-1 w-16 rounded-full bg-primary" />

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* Technical Skills */}
          <div className="rounded-xl border border-border bg-card/50 p-6">
            <div className="mb-5 flex items-center gap-2">
              <Code2 className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">
                {"Technical Skills"}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-lg border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm font-medium text-primary transition-all duration-200 hover:border-primary/40 hover:bg-primary/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="rounded-xl border border-border bg-card/50 p-6">
            <div className="mb-5 flex items-center gap-2">
              <Wrench className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">
                {"Tools"}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="inline-flex items-center rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground transition-all duration-200 hover:border-primary/30 hover:bg-accent hover:text-accent-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="rounded-xl border border-border bg-card/50 p-6">
            <div className="mb-5 flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">
                {"Soft Skills"}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground transition-all duration-200 hover:border-primary/30 hover:bg-accent hover:text-accent-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="rounded-xl border border-border bg-card/50 p-6">
            <div className="mb-5 flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">
                {"Languages Skills"}
              </h3>
            </div>
            <div className="space-y-3">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between rounded-lg border border-border/50 bg-secondary/50 px-4 py-2.5"
                >
                  <span className="font-medium text-foreground">
                    {lang.name}
                  </span>
                  <span className="text-sm text-primary">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
