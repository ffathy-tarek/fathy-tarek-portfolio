"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Monitor, Database, Palette, Puzzle, Handshake, Briefcase } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Full Stack Web Development",
    description:
      "Building scalable applications using ASP.NET Core and SQL Server, with clean architecture and reliable performance.",
  },
  {
    icon: Database,
    title: "Database Design & Optimization",
    description:
      "Designing relational databases, applying normalization, and optimizing queries for efficiency.",
  },
  {
    icon: Palette,
    title: "Front-End Development",
    description:
      "Creating responsive interfaces with HTML, CSS, and JavaScript to ensure user-friendly experiences.",
  },
  {
    icon: Puzzle,
    title: "Problem-Solving & Algorithmic Solutions",
    description:
      "Applying data structures, algorithms, and logical design to deliver efficient solutions.",
  },
  {
    icon: Handshake,
    title: "Freelance Project Collaboration",
    description:
      "Partnering with clients to deliver tailored solutions, ensuring clear communication and reliable delivery.",
  },
];

export function ServicesSection() {
  const ref = useScrollReveal();

  return (
    <section id="services" className="px-6 py-24">
      <div ref={ref} className="reveal-section mx-auto max-w-4xl">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Briefcase className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground">
            {"Services Offered"}
          </h2>
        </div>
        <div className="mt-2 h-1 w-16 rounded-full bg-primary" />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
