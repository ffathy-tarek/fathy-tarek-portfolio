"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { GraduationCap, Award, Monitor, ShieldCheck, Globe, Briefcase } from "lucide-react";

export function EducationSection() {
  const ref = useScrollReveal();

  return (
    <section id="education" className="bg-card px-6 py-24">
      <div ref={ref} className="reveal-section mx-auto max-w-4xl">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <GraduationCap className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground">
            {"Education"}
          </h2>
        </div>
        <div className="mt-2 h-1 w-16 rounded-full bg-primary" />

        <div className="mt-10 space-y-8">
          {/* Academic Education */}
          <div className="rounded-xl border border-border bg-background/50 p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {"Academic Education"}
                </h3>
                <p className="mt-1 font-medium text-muted-foreground">
                  {"Bachelor of Science in Computer Science"}
                </p>
                <p className="text-sm text-muted-foreground">
                  {"Faculty of Science, Cairo University"}
                </p>
                <div className="mt-2 flex flex-wrap gap-3">
                  <span className="text-sm font-medium text-primary">
                    {"2023 \u2013 Present"}
                  </span>
                  <span className="text-sm text-primary/80">
                    {"Expected Graduation: 2027"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="rounded-xl border border-border bg-background/50 p-6">
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {"Certifications & Courses (Cisco Networking Academy)"}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {"July 2025 \u2013 September 2025"}
                </p>
              </div>
            </div>

            <div className="space-y-5 pl-0 sm:pl-16">
              {/* OS Basics */}
              <div className="rounded-lg border border-border/50 bg-card/30 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Monitor className="h-4 w-4 text-primary" />
                  <h4 className="font-semibold text-foreground">
                    {"Operating Systems Basics \u2013 Practical Training"}
                  </h4>
                </div>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>{"Process Management & Memory Management"}</li>
                  <li>{"File Systems & System Security Fundamentals"}</li>
                  <li>{"Core Operating System Concepts"}</li>
                </ul>
              </div>

              {/* Cybersecurity */}
              <div className="rounded-lg border border-border/50 bg-card/30 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <h4 className="font-semibold text-foreground">
                    {"Introduction to Cybersecurity"}
                  </h4>
                </div>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>{"Cybersecurity Fundamentals"}</li>
                  <li>{"Network Security Basics"}</li>
                  <li>{"Digital Threat Awareness & Protection"}</li>
                </ul>
              </div>

              {/* Digital Awareness */}
              <div className="rounded-lg border border-border/50 bg-card/30 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  <h4 className="font-semibold text-foreground">
                    {"Digital Awareness"}
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  {"Digital Safety & Responsible Technology Usage"}
                </p>
              </div>
            </div>
          </div>

          {/* Professional Training */}
          <div className="rounded-xl border border-border bg-background/50 p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Briefcase className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground">
                  {"Professional Training"}
                </h3>
                <p className="mt-1 font-medium text-muted-foreground">
                  {"Full Stack .NET Developer Trainee"}
                </p>
                <p className="text-sm text-muted-foreground">
                  {"Digital Egypt Pioneers Initiative (DEPI) \u2013 Hybrid"}
                </p>
                <span className="mt-2 inline-block text-sm font-medium text-primary">
                  {"Nov 2025 \u2013 Present"}
                </span>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {"Hands-on Backend & Frontend Development training"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {"Database Development using SQL Server"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {"Writing Structured C# Code using OOP Principles"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {"Team-based Software Development Tasks"}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
