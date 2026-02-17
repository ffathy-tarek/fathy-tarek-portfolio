"use client";

import { useState, useEffect } from "react";
import { MapPin, Crosshair, Handshake, FolderOpen, FileText } from "lucide-react";
import { AnimatedTitle } from "@/components/animated-title";

export function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div
          className={`transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h1 className="font-display text-5xl font-extrabold leading-tight tracking-wide text-foreground sm:text-6xl lg:text-7xl">
            <span className="block">{"Fathy Tarek"}</span>
            <span
              className="block text-primary"
              style={{
                filter: "drop-shadow(0 0 8px hsl(213 94% 58% / 0.4)) drop-shadow(0 0 20px hsl(213 94% 58% / 0.15))",
              }}
            >
              {"Sanad"}
            </span>
          </h1>
        </div>

        <div
          className={`mt-4 transition-all delay-200 duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <AnimatedTitle
            titles={["Full-Stack Developer", "Problem Solver", "Database Designer"]}
          />
        </div>

        <div
          className={`mx-auto mt-8 flex max-w-xl flex-col items-center gap-3 transition-all delay-500 duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            {"Giza, Cairo, Egypt"}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="glow-btn inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Handshake className="h-4 w-4" />
              {"Let's Work Together"}
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:border-primary/30 hover:text-primary"
            >
              <FolderOpen className="h-4 w-4" />
              {"View Projects"}
            </a>
            <a
              href="https://drive.google.com/file/d/1ExxwlR8dejMHqNwGoyjDCe0jS1QccuVa/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:border-primary/30 hover:text-primary"
            >
              <FileText className="h-4 w-4" />
              {"Open CV"}
            </a>
          </div>
        </div>

        <p
          className={`mx-auto mt-8 flex max-w-xl items-center justify-center gap-2 text-pretty leading-relaxed text-muted-foreground transition-all delay-700 duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <Crosshair className="h-4 w-4 shrink-0 text-primary" />
          {"Helping businesses transform ideas into reliable, scalable web solutions that drive real results"}
        </p>
      </div>
    </section>
  );
}
