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
  summary: string;
  details: string[];
  improvements: { title: string; items: string[] };
  techStack: string[];
  keyDecisions: { title: string; description: string }[];
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
    summary:
      "A fast-paced 2D desktop game built in Java with OpenGL, featuring collision detection, multi-level progression, and cooperative gameplay modes. Designed with object-oriented architecture for maximum scalability and maintainability.",
    details: [
      "Developed a 2D Desktop Game using Java and OpenGL, implementing core game development principles.",
      "Designed and implemented a structured Collision Detection System to handle ball–brick and ball–paddle interactions accurately.",
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
    techStack: ["Java", "OpenGL", "OOP", "Game Loop Architecture"],
    keyDecisions: [
      {
        title: "Collision Detection System",
        description:
          "Implemented a boundary-box collision algorithm to handle ball–brick and ball–paddle interactions with frame-independent physics.",
      },
      {
        title: "Game State Architecture",
        description:
          "Separated game logic from rendering using a clean state management pattern to enable dynamic level transitions and mode switching.",
      },
      {
        title: "Agile Team Collaboration",
        description:
          "Structured the codebase with clear separation of concerns to enable parallel development and smooth integration across a 4-member team.",
      },
    ],
    github: "https://github.com/ffathy-tarek/Brick-Breaker-Java-OpenGl",
  },
    github: "https://github.com/ffathy-tarek/Brick-Breaker-Java-OpenGl",
  },
  {
    title: "E-Commerce Database System (In Progress)",
    icon: ShoppingCart,
    date: "Jan 2026 – Present",
    type: "Personal Project",
    shortDescription:
      "Designed and implemented a Relational Database System for an E-commerce Platform with full ERD and normalization.",
    summary:
      "A comprehensive relational database system architected for a scalable e-commerce platform. Features normalized schema design, complex relationships, and performance-optimized queries—demonstrating advanced database architecture and SQL expertise.",
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
        "Query Performance Optimization through execution plan analysis",
        "Strategic Indexing Strategies on high-traffic queries",
        "Improving Execution Plans with proper constraint design",
      ],
    },
    techStack: ["SQL Server", "Relational Database Design", "ERD Modeling", "Database Normalization"],
    keyDecisions: [
      {
        title: "Normalized Schema Design",
        description:
          "Applied 3NF normalization to eliminate redundancy while maintaining query efficiency—balancing data integrity with performance.",
      },
      {
        title: "Entity Relationship Modeling",
        description:
          "Structured relationships between Customers, Products, Orders, and Payments to reflect real-world e-commerce operations and enable complex analytics queries.",
      },
      {
        title: "Performance-First Optimization",
        description:
          "Focused on query optimization and indexing strategies to handle high-volume transactions—ensuring scalability as the platform grows.",
      },
    ],
    keywords: [
      "Relational Database Design",
      "SQL Server",
      "Database Normalization",
      "Query Optimization",
      "ERD Modeling",
      "Backend Data Architecture",
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
              className="group relative cursor-pointer overflow-hidden rounded-xl border border-border/40 bg-background/40 p-6 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {/* Gradient overlay for glassmorphism */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/20">
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
                
                {/* Tech stack badges */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary/90 transition-colors duration-300 group-hover:bg-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* View Details indicator */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                    View Details
                  </span>
                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
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
            <div className="space-y-6">
              {/* Header */}
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {selectedProject.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {`${selectedProject.date} • ${selectedProject.type}`}
                </p>
              </div>

              <div className="h-px bg-border/30" />

              {/* Project Summary */}
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
                  Project Summary
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {selectedProject.summary}
                </p>
              </div>

              {/* Technical Stack */}
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
                  Technical Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Engineering Decisions */}
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">
                  Key Engineering Decisions
                </h3>
                <div className="space-y-4">
                  {selectedProject.keyDecisions.map((decision, i) => (
                    <div key={i} className="border-l-2 border-primary/30 pl-4">
                      <h4 className="mb-1 font-semibold text-foreground">
                        {decision.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {decision.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
                  Responsibilities
                </h3>
                <ul className="space-y-2">
                  {selectedProject.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Improvements */}
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
                  {selectedProject.improvements.title}
                </h3>
                <ul className="space-y-2">
                  {selectedProject.improvements.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="text-primary">⚡</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Keywords */}
              {selectedProject.keywords && (
                <div>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
                    Skills & Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="rounded-lg border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* GitHub Link */}
              {selectedProject.github && (
                <div className="pt-2">
                  <Button className="glow-btn w-full" asChild>
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {"View on GitHub"}
                    </a>
                  </Button>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
