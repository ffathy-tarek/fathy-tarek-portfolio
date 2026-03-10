"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  FolderKanban,
  ExternalLink,
  Gamepad2,
  ShoppingCart,
  ArrowRight,
  Layers,
  Lightbulb,
  Zap,
  ListChecks,
  BarChart3,
} from "lucide-react";
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
  techStack: string[];
  responsibilities: string[];
  engineeringDecisions: { decision: string; detail: string }[];
  improvements: { title: string; items: string[] };
  github?: string;
}

const projects: Project[] = [
  {
    title: "Brick Breaker Game",
    icon: Gamepad2,
    date: "Oct 2024",
    type: "Academic Team Project",
    shortDescription:
      "A 2D desktop game built with Java and OpenGL, featuring collision detection, multi-level architecture, and multiplayer modes.",
    summary:
      "Engineered a feature-complete 2D arcade game from scratch using Java and OpenGL. The project demonstrates strong fundamentals in real-time rendering, physics-based collision detection, and modular OOP architecture delivered under a tight 4-day sprint.",
    techStack: ["Java", "OpenGL", "OOP", "Agile"],
    responsibilities: [
      "Developed a 2D Desktop Game using Java and OpenGL, implementing core game development principles.",
      "Designed and implemented a structured Collision Detection System to handle ball-brick and ball-paddle interactions accurately.",
      "Built a Multi-Level Game Architecture with dynamic difficulty progression and integrated Score Tracking System.",
      "Implemented Single-Player and Two-Player Modes, improving gameplay flexibility.",
      "Collaborated within a 4-member Agile team, completing the project within 4 days under time constraints.",
    ],
    engineeringDecisions: [
      {
        decision: "Component-Based Architecture",
        detail:
          "Applied OOP principles to separate game logic, rendering, and input handling into independent modules for maintainability.",
      },
      {
        decision: "Custom Collision Engine",
        detail:
          "Built a bespoke collision detection system using bounding-box and velocity-vector analysis instead of relying on a physics library.",
      },
      {
        decision: "Frame-Rate Independent Updates",
        detail:
          "Optimized the game loop to decouple rendering from logic updates, ensuring consistent gameplay across hardware.",
      },
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
    title: "E-Commerce Database System",
    icon: ShoppingCart,
    date: "Jan 2026 - Present",
    type: "Personal Project",
    shortDescription:
      "A normalized relational database for an e-commerce platform with full ERD modeling, complex queries, and performance tuning.",
    summary:
      "Designed a production-grade relational database schema for an e-commerce platform. Focused on rigorous normalization, referential integrity, and query performance optimization to handle real-world transactional workloads.",
    techStack: ["SQL Server", "ERD Modeling", "Database Normalization", "Query Optimization"],
    responsibilities: [
      "Designed and implemented a Relational Database System for an E-commerce Platform.",
      "Created a complete ERD covering Customers, Products, Orders, Inventory, and Payments entities.",
      "Applied Database Normalization (1NF, 2NF, 3NF) to ensure data integrity and eliminate redundancy.",
      "Developed SQL CRUD Operations (SELECT, INSERT, UPDATE, DELETE).",
      "Implemented Complex JOIN Queries & Relationship Constraints.",
    ],
    engineeringDecisions: [
      {
        decision: "Third Normal Form Design",
        detail:
          "Normalized all tables to 3NF to eliminate transitive dependencies and ensure atomic data storage.",
      },
      {
        decision: "Strategic Indexing",
        detail:
          "Designed composite and covering indexes on high-traffic query paths to reduce table scans.",
      },
      {
        decision: "Referential Integrity Constraints",
        detail:
          "Enforced foreign key constraints and cascading rules to maintain consistency across related entities.",
      },
    ],
    improvements: {
      title: "Current Optimization Work",
      items: [
        "Query Performance Optimization through execution plan analysis.",
        "Indexing Strategies for high-volume read operations.",
        "Improving Execution Plans to reduce I/O costs.",
      ],
    },
  },
  {
    title: "Attendance & Grades Management System",
    icon: BarChart3,
    date: "Feb 2026 – Present",
    type: "Academic / Personal Project",
    shortDescription:
      "A web-based system that helps instructors manage student attendance and grades through a clean dashboard interface.",
    summary:
      "This project is a web-based Attendance and Grades Management System designed to help instructors efficiently manage student records, attendance tracking, and grade management in one place.",
    techStack: ["React.js", "JavaScript", "Firebase", "CSS", "Responsive Design"],
    responsibilities: [
      "Contributed across multiple Agile sprints working on different features of the system.",
      "Developed UI components using React.js with a focus on clean, intuitive design.",
      "Implemented student management functionality including add, edit, and delete operations.",
      "Designed and integrated attendance tracking features for daily record-keeping.",
      "Built grade management system with organized data storage and retrieval.",
      "Ensured responsive and user-friendly interface across all devices.",
    ],
    engineeringDecisions: [
      {
        decision: "React Component Architecture",
        detail:
          "Structured the application with modular, reusable React components for maintainability and scalability.",
      },
      {
        decision: "Firebase for Real-time Data",
        detail:
          "Implemented Firebase and Firestore for real-time data synchronization and cloud-based storage.",
      },
      {
        decision: "Mobile-First Responsive Design",
        detail:
          "Designed the interface with mobile-first approach, ensuring optimal usability across desktop and mobile devices.",
      },
    ],
    improvements: {
      title: "Key Features & Impact",
      items: [
        "Student Management: Seamlessly add, edit, and delete student records.",
        "Attendance Tracking: Organized attendance recording with visual dashboards.",
        "Grade Management: Efficient grade entry, storage, and synchronization.",
        "Dashboard Interface: Instructor-focused dashboard for quick data access and insights.",
        "Data Persistence: Real-time synchronization using Firebase for reliable data storage.",
      ],
    },
    github: "https://github.com/ffathy-tarek/Attendance_Grades_System",
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

        {/* Project Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <button
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="project-card group relative cursor-pointer overflow-hidden rounded-xl border border-border/50 bg-background/30 p-6 text-left backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_8px_30px_hsl(213_94%_58%/0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {/* Subtle gradient overlay */}
              <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-primary/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/15">
                    <project.icon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-primary">
                      {project.date}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {project.type}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold leading-snug text-foreground">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.shortDescription}
                </p>

                {/* Tech Stack Badges */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border/60 bg-secondary/50 px-2 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors duration-300 group-hover:border-primary/20 group-hover:text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Details indicator */}
                <div className="mt-5 flex items-center gap-1.5 text-xs font-medium text-primary opacity-70 transition-all duration-300 group-hover:gap-2.5 group-hover:opacity-100">
                  <span>{"View Details"}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Project Modal - Case Study Layout */}
      <Dialog
        open={selectedProject !== null}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-h-[85vh] overflow-y-auto border-border/50 bg-background/95 backdrop-blur-xl sm:max-w-2xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <selectedProject.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <DialogTitle className="text-xl font-bold">
                      {selectedProject.title}
                    </DialogTitle>
                    <DialogDescription className="mt-0.5">
                      {`${selectedProject.date}  \u00B7  ${selectedProject.type}`}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              {/* Project Summary */}
              <div className="mt-2 rounded-lg border border-border/40 bg-secondary/30 px-4 py-3">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {selectedProject.summary}
                </p>
              </div>

              {/* Technical Stack */}
              <div className="mt-5">
                <div className="mb-3 flex items-center gap-2">
                  <Layers className="h-4 w-4 text-primary" />
                  <h4 className="text-sm font-semibold text-foreground">
                    {"Technical Stack"}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="my-1 h-px bg-border/40" />

              {/* Key Engineering Decisions */}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-primary" />
                  <h4 className="text-sm font-semibold text-foreground">
                    {"Key Engineering Decisions"}
                  </h4>
                </div>
                <div className="space-y-3">
                  {selectedProject.engineeringDecisions.map((ed, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-border/30 bg-secondary/20 px-4 py-3"
                    >
                      <p className="text-sm font-medium text-foreground">
                        {ed.decision}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {ed.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="my-1 h-px bg-border/40" />

              {/* Responsibilities */}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <ListChecks className="h-4 w-4 text-primary" />
                  <h4 className="text-sm font-semibold text-foreground">
                    {"Responsibilities"}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {selectedProject.responsibilities.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="my-1 h-px bg-border/40" />

              {/* Improvements */}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <h4 className="text-sm font-semibold text-foreground">
                    {selectedProject.improvements.title}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {selectedProject.improvements.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* GitHub Link */}
              {selectedProject.github && (
                <>
                  <div className="my-1 h-px bg-border/40" />
                  <div>
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
                </>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
