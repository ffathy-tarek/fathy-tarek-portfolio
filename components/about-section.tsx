"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { User } from "lucide-react";

export function AboutSection() {
  const ref = useScrollReveal();

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

        <div className="mt-8 space-y-5 text-pretty leading-relaxed text-muted-foreground">
          <p className="rounded-lg border border-primary/20 bg-primary/5 px-4 py-3 text-primary">
            {"USP: I help businesses and teams turn ideas into structured, database-driven web applications using clean code principles and strong backend logic."}
          </p>
          <p>
            {"I am a motivated Computer Science student with strong foundations in Object-Oriented Programming (OOP), Data Structures, Algorithms, and Database Design. Through my Full Stack .NET training, I gained practical experience in C#, SQL Server, HTML, and CSS, building scalable, structured, and maintainable applications."}
          </p>
          <p>
            {"I have a strong interest in Backend Architecture, Database Optimization, and Clean Code Practices, focusing on writing efficient logic and designing well-structured relational database systems."}
          </p>
          <p>
            {"I continuously improve my technical skills in Backend Development, Web Development, and Software Engineering best practices, aiming to contribute effectively within professional development teams and deliver real value from day one."}
          </p>
        </div>
      </div>
    </section>
  );
}
