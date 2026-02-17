"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Monitor, Database, Palette, Puzzle, Handshake, Briefcase } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Full Stack Web Development",
    description:
      "Building scalable applications using ASP.NET Core and SQL Server, with clean architecture and reliable performance.",
    badges: ["ASP.NET Core", "C#", "SQL Server", "Entity Framework"],
  },
  {
    icon: Database,
    title: "Database Design & Optimization",
    description:
      "Designing relational databases, applying normalization, and optimizing queries for efficiency.",
    badges: ["SQL Server", "Oracle", "ERD Design", "PL/SQL"],
  },
  {
    icon: Palette,
    title: "Front-End Development",
    description:
      "Creating responsive interfaces with HTML, CSS, and JavaScript to ensure user-friendly experiences.",
    badges: ["HTML", "CSS", "JavaScript"],
  },
  {
    icon: Puzzle,
    title: "Problem-Solving & Algorithmic Solutions",
    description:
      "Applying data structures, algorithms, and logical design to deliver efficient solutions.",
    badges: ["Data Structures", "C++", "Algorithm Design"],
  },
  {
    icon: Handshake,
    title: "Freelance Project Collaboration",
    description:
      "Partnering with clients to deliver tailored solutions, ensuring clear communication and reliable delivery.",
    badges: ["Project Planning", "Client Communication", "Delivery Management"],
  },
];

export function ServicesSection() {
  const ref = useScrollReveal();

  return (
    <section id="services" className="px-6 py-24">
      <div ref={ref} className="reveal-section mx-auto max-w-5xl">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Briefcase className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground">
            {"Services Offered"}
          </h2>
        </div>
        <div className="mt-2 h-1 w-16 rounded-full bg-primary" />

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col rounded-xl border border-border/60 bg-card p-7 transition-all duration-300 hover:-translate-y-1"
              style={{
                boxShadow: "0 0 0 1px hsl(213 94% 58% / 0.04), 0 4px 16px hsl(222 47% 5% / 0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 0 1px hsl(213 94% 58% / 0.15), 0 0 20px hsl(213 94% 58% / 0.08), 0 8px 24px hsl(222 47% 5% / 0.3)";
                e.currentTarget.style.borderColor = "hsl(213 94% 58% / 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 0 1px hsl(213 94% 58% / 0.04), 0 4px 16px hsl(222 47% 5% / 0.2)";
                e.currentTarget.style.borderColor = "";
              }}
            >
              {/* Icon with glow */}
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary/15"
                style={{
                  filter: "drop-shadow(0 0 6px hsl(213 94% 58% / 0.15))",
                  transition: "filter 0.3s ease, transform 0.3s ease, background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.filter =
                    "drop-shadow(0 0 10px hsl(213 94% 58% / 0.3))";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.filter =
                    "drop-shadow(0 0 6px hsl(213 94% 58% / 0.15))";
                }}
              >
                <service.icon className="h-6 w-6" />
              </div>

              <h3 className="text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              {/* Tech Badges */}
              <div className="mt-4 flex flex-wrap gap-2 pt-1">
                {service.badges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-block cursor-default rounded-full border border-border/70 bg-secondary/50 px-2.5 py-0.5 text-xs text-muted-foreground transition-all duration-300 hover:-translate-y-px hover:border-primary/40 hover:text-foreground"
                    style={{
                      boxShadow: "none",
                      transition: "box-shadow 0.3s ease, border-color 0.3s ease, color 0.3s ease, transform 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = "0 0 8px hsl(213 94% 58% / 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
