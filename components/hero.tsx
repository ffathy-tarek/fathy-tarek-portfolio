"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, Crosshair, Handshake, FolderOpen, FileText } from "lucide-react";
import { AnimatedTitle } from "@/components/animated-title";

export function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      {/* Radial glow behind the name */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse at center, hsl(213 94% 58% / 0.08) 0%, hsl(213 94% 58% / 0.03) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="flex flex-col-reverse items-center gap-8 md:gap-12">
          {/* Text Content - Centered */}
          <div className="w-full text-center md:w-auto md:flex-1">
            <div
              className={`transition-all duration-700 ${
                visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <h1 className="font-display text-4xl font-extrabold leading-tight tracking-wide text-foreground sm:text-5xl lg:text-6xl">
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
              className={`mt-8 flex flex-col items-center gap-3 transition-all delay-500 duration-700 ${
                visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
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
              className={`mx-auto mt-8 max-w-xl text-pretty leading-relaxed text-muted-foreground transition-all delay-700 duration-700 ${
                visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <Crosshair className="h-4 w-4 shrink-0 text-primary" />
              </span>
              {"Helping businesses transform ideas into reliable, scalable web solutions that drive real results"}
            </p>
          </div>

          {/* Profile Image - Right Side */}
          <div
            className={`hidden shrink-0 items-center justify-end md:flex transition-all duration-700 ${
              visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <div className="relative h-48 w-48 lg:h-56 lg:w-56">
              {/* Gradient border effect */}
              <div
                className="absolute inset-0 rounded-xl"
                style={{
                  background: "linear-gradient(135deg, hsl(213 94% 58% / 0.4), hsl(213 94% 58% / 0.1), transparent)",
                  padding: "2px",
                }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-xl bg-background">
                  <Image
                    src="/profile.jpg"
                    alt="Fathy Tarek Sanad"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Soft shadow overlay */}
                  <div className="absolute inset-0 rounded-xl shadow-2xl shadow-primary/30" />
                  {/* Subtle glow effect */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-xl"
                    style={{
                      background: "radial-gradient(circle at 30% 30%, hsl(213 94% 58% / 0.1), transparent 70%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
