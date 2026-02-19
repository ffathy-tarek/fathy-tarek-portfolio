"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Code2,
  Wrench,
  Heart,
  Globe,
  Star,
  Server,
  Terminal,
  BookOpen,
} from "lucide-react";

/* ───────────────────── Data ───────────────────── */

const coreExpertise = [
  "Backend Development (ASP.NET Core MVC)",
  "Entity Framework & ORM Concepts",
  "Relational Database Design",
  "SQL & PL/SQL",
  "Query Optimization & Normalization (1NF\u20133NF)",
  "Object-Oriented Programming (OOP)",
];

const backendAndDatabase = [
  "C#",
  "ASP.NET Core MVC",
  "Entity Framework",
  "SQL Server",
  "Oracle Database",
  "PL/SQL",
  "MySQL",
];

const programmingLanguages = ["C#", "Java", "C++", "JavaScript"];

const csFoundations = [
  "Data Structures",
  "Algorithms",
  "OOP",
  "Problem Solving",
  "System Analysis",
];

const devTools = [
  "Visual Studio",
  "Visual Studio Code",
  "Git",
  "GitHub",
  "IntelliJ",
  "CLion",
];

const languages = [
  { name: "Arabic", level: "Native", percent: 100 },
  { name: "English", level: "Very Good", percent: 85 },
  { name: "German", level: "Good", percent: 60 },
];

const softSkills = [
  "Team Collaboration",
  "Communication",
  "Analytical Thinking",
  "Adaptability",
  "Time Management",
  "Research Skills",
];

/* ───────────────── Reusable pieces ───────────────── */

function SkillBadge({
  label,
  variant = "default",
}: {
  label: string;
  variant?: "primary" | "default";
}) {
  return (
    <span
      className={`inline-flex items-center rounded-lg border px-3 py-1.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
        variant === "primary"
          ? "border-primary/25 bg-primary/5 text-primary hover:border-primary/50 hover:shadow-[0_0_10px_hsl(213_94%_58%/0.12)]"
          : "border-border bg-secondary/50 text-secondary-foreground hover:border-primary/30 hover:text-accent-foreground hover:shadow-[0_0_10px_hsl(213_94%_58%/0.08)]"
      }`}
    >
      {label}
    </span>
  );
}

function SectionCard({
  icon: Icon,
  title,
  children,
  highlight = false,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-6 transition-all duration-300 ${
        highlight
          ? "border-primary/30 bg-card/60 shadow-[0_0_20px_hsl(213_94%_58%/0.06)] hover:shadow-[0_0_28px_hsl(213_94%_58%/0.1)]"
          : "border-border/50 bg-card/40 hover:border-border/80 hover:shadow-[0_2px_16px_hsl(222_47%_11%/0.4)]"
      }`}
    >
      <div className="mb-5 flex items-center gap-2.5">
        <Icon className="h-[18px] w-[18px] text-primary" />
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
      </div>
      {children}
    </div>
  );
}

/* ───────────────── Main component ───────────────── */

export function SkillsSection() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="px-6 py-24">
      <div ref={ref} className="reveal-section mx-auto max-w-5xl">
        {/* Section heading */}
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Code2 className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground">
            {"Skills"}
          </h2>
        </div>
        <div className="mt-2 h-1 w-16 rounded-full bg-primary" />

        {/* ── Core Expertise (full width, highlighted) ── */}
        <div className="mt-10">
          <SectionCard icon={Star} title="Core Expertise" highlight>
            <div className="flex flex-wrap gap-2">
              {coreExpertise.map((s) => (
                <SkillBadge key={s} label={s} variant="primary" />
              ))}
            </div>
          </SectionCard>
        </div>

        {/* ── 2-column grid ── */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* Backend & Database */}
          <SectionCard icon={Server} title="Backend & Database Technologies">
            <div className="flex flex-wrap gap-2">
              {backendAndDatabase.map((s) => (
                <SkillBadge key={s} label={s} />
              ))}
            </div>
          </SectionCard>

          {/* Programming Languages */}
          <SectionCard icon={Terminal} title="Programming Languages">
            <div className="flex flex-wrap gap-2">
              {programmingLanguages.map((s) => (
                <SkillBadge key={s} label={s} />
              ))}
            </div>
          </SectionCard>

          {/* CS Foundations */}
          <SectionCard icon={BookOpen} title="Computer Science Foundations">
            <div className="flex flex-wrap gap-2">
              {csFoundations.map((s) => (
                <SkillBadge key={s} label={s} />
              ))}
            </div>
          </SectionCard>

          {/* Development Tools */}
          <SectionCard icon={Wrench} title="Development Tools">
            <div className="flex flex-wrap gap-2">
              {devTools.map((s) => (
                <SkillBadge key={s} label={s} />
              ))}
            </div>
          </SectionCard>

          {/* Languages */}
          <SectionCard icon={Globe} title="Languages">
            <div className="space-y-3.5">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">
                      {lang.name}
                    </span>
                    <span className="text-xs font-medium text-primary">
                      {lang.level}
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-primary/70 transition-all duration-500"
                      style={{ width: `${lang.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Soft Skills */}
          <SectionCard icon={Heart} title="Soft Skills">
            <div className="flex flex-wrap gap-2">
              {softSkills.map((s) => (
                <SkillBadge key={s} label={s} />
              ))}
            </div>
          </SectionCard>
        </div>
      </div>
    </section>
  );
}
