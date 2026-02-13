"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { FolderKanban, ExternalLink, Gamepad2, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Project {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  date: string;
  type: string;
  shortDescription: string;
  details: string[];
  improvements: { title: string; items: string[] };
  github?: string;
  keywords?: string[];
}

const projects: Project[] = [
  {
    title: "Brick Breaker Game (2D Game Development)",
    icon: Gamepad2,
    date: "Oct 2024",
    type: "Academic Team Project",
    shortDescription:
      "Developed a 2D Desktop Game using Java and OpenGL, implementing core game development principles.",
    details: [
      "Developed a 2D Desktop Game using Java and OpenGL, implementing core game development principles.",
      "Designed and implemented a structured Collision Detection System to handle ball\u2013brick and ball\u2013paddle interactions accurately.",
      "Built a Multi-Level Game Architecture with dynamic difficulty progression and integrated Score Tracking System.",
      "Implemented Single-Player and Two-Player Modes, improving gameplay flexibility.",
      "Applied Object-Oriented Programming (OOP) principles to ensure modular, maintainable, and scalable code structure.",
      "Collaborated within a 4-member Agile team, completing the project within 4 days under time constraints.",
    ],
    improvements: {
      title: "Technical Improvements & Impact",
      items: [
        "Enhanced gameplay stability by restructuring collision handling logic.",
        "Improved rendering performance through optimized frame update logic.",
        "Reduced logic errors through systematic debugging and code refactoring.",
        "Delivered a fully functional, playable desktop game application.",
      ],
    },
    github: "https://github.com/ffathy-tarek/Brick-Breaker-Java-OpenGl",
  },
  {
    title: "E-Commerce Database System (In Progress)",
    icon: ShoppingCart,
    date: "Jan 2026 \u2013 Present",
    type: "Personal Project",
    shortDescription:
      "Designed and implemented a Relational Database System for an E-commerce Platform with full ERD and normalization.",
    details: [
      "Designed and implemented a Relational Database System for an E-commerce Platform",
      "Created a complete ERD (Entity Relationship Diagram) including: Customers, Products, Orders, Inventory, Payments",
      "Applied Database Normalization (1NF, 2NF, 3NF) to ensure data integrity and eliminate redundancy",
      "Developed SQL CRUD Operations (SELECT, INSERT, UPDATE, DELETE)",
      "Implemented Complex JOIN Queries & Relationship Constraints",
    ],
    improvements: {
      title: "Current Optimization Work",
      items: [
        "Query Performance Optimization",
        "Indexing Strategies",
        "Improving Execution Plans",
      ],
    },
    keywords: [
      "Relational Database Design",
      "SQL Server",
      "Database Normalization",
      "Query Optimization",
      "ERD Modeling",
      "Backend Data Architecture",
    ],
  },
];

export function ProjectsSection() {
  const ref = useScrollReveal();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="bg-card px-6 py-24">
      <div ref={ref} className="reveal-section mx-auto max-w-4xl">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <FolderKanban className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground">
            {"Projects"}
          </h2>
        </div>
        <div className="mt-2 h-1 w-16 rounded-full bg-primary" />

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <button
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-background/50 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                <project.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {project.title}
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="text-xs font-medium text-primary">
                  {project.date}
                </span>
                <span className="text-xs text-muted-foreground">
                  {project.type}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.shortDescription}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog
        open={selectedProject !== null}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription>
                  {`${selectedProject.date} | ${selectedProject.type}`}
                </DialogDescription>
              </DialogHeader>

              {/* Full Description */}
              <div className="mt-4">
                <ul className="space-y-2">
                  {selectedProject.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Improvements */}
              <div className="mt-6">
                <h4 className="mb-3 text-sm font-semibold text-foreground">
                  {selectedProject.improvements.title}
                </h4>
                <ul className="space-y-2">
                  {selectedProject.improvements.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-0.5 text-primary">{"⚡"}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Keywords */}
              {selectedProject.keywords && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedProject.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="rounded-lg border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              )}

              {/* GitHub Link */}
              {selectedProject.github && (
                <div className="mt-6">
                  <Button className="glow-btn" asChild>
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {"GitHub Repository"}
                    </a>
                  </Button>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
