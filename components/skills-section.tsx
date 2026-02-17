"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Code2, Wrench, Heart, Globe, Star } from "lucide-react";

// Core Expertise - Backend-focused
const coreExpertise = [
  "Backend Development (ASP.NET Core MVC)",
  "Entity Framework & ORM Concepts",
  "Relational Database Design",
  "SQL & PL/SQL",
  "Query Optimization & Normalization (1NF–3NF)",
  "Object-Oriented Programming (OOP)",
];

const backendTechnologies = [
  "C#",
  "ASP.NET Core MVC",
  "Entity Framework",
  "SQL Server",
  "Oracle Database",
  "PL/SQL",
  "MySQL",
];

const programmingLanguages = [
  "C#",
  "Java",
  "C++",
  "JavaScript",
];

const computerScienceFoundations = [
  "Data Structures",
  "Algorithms",
  "OOP",
  "Problem Solving",
  "System Analysis",
];

const tools = [
  "Visual Studio",
  "Visual Studio Code",
  "Git",
  "GitHub",
  "IntelliJ",
  "CLion",
];

const softSkills = [
  "Team Collaboration",
  "Communication",
  "Analytical Thinking",
  "Adaptability",
  "Time Management",
  "Research Skills",
];

const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Very Good" },
  { name: "German", level: "Good" },
];

export function SkillsSection() {
  const ref = useScrollReveal();

  const SkillBadge = ({ skill }: { skill: string }) => (
    <span className="skill-badge inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary transition-all duration-300 hover:border-primary/50 hover:bg-primary/15 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20">
      {skill}
    </span>
  );

  const SecondaryBadge = ({ skill }: { skill: string }) => (
    <span className="skill-badge inline-flex items-center rounded-full border border-border/40 bg-secondary/40 px-4 py-2 text-sm font-medium text-secondary-foreground transition-all duration-300 hover:border-primary/30 hover:bg-secondary/60 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/10">
      {skill}
    </span>
  );

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

        {/* Core Expertise Section - Most Important */}
        <div className="core-expertise-card mt-10 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/8 to-primary/4 p-8 shadow-lg shadow-primary/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
          <div className="mb-6 flex items-center gap-3">
            <Star className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-bold text-foreground">
              {"Core Expertise"}
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {coreExpertise.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </div>

        {/* Other Skill Sections */}
        <div className="mt-12 space-y-8">
          {/* Backend & Database Technologies */}
          <div className="skill-section">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              {"Backend & Database Technologies"}
            </h3>
            <div className="flex flex-wrap gap-3">
              {backendTechnologies.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>

          {/* Programming Languages */}
          <div className="skill-section">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              {"Programming Languages"}
            </h3>
            <div className="flex flex-wrap gap-3">
              {programmingLanguages.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>

          {/* Computer Science Foundations */}
          <div className="skill-section">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              {"Computer Science Foundations"}
            </h3>
            <div className="flex flex-wrap gap-3">
              {computerScienceFoundations.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>

          {/* Development Tools */}
          <div className="skill-section">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              {"Development Tools"}
            </h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <SecondaryBadge key={tool} skill={tool} />
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="skill-section">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              {"Languages"}
            </h3>
            <div className="space-y-2">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between rounded-lg border border-border/40 bg-secondary/30 px-4 py-3 transition-all duration-300 hover:border-primary/30 hover:bg-secondary/50"
                >
                  <span className="font-medium text-foreground">
                    {lang.name}
                  </span>
                  <span className="text-sm font-medium text-primary">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="skill-section">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              {"Soft Skills"}
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <SecondaryBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
