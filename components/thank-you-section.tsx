"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Heart } from "lucide-react";

export function ThankYouSection() {
  const ref = useScrollReveal();

  return (
    <section className="px-6 py-24">
      <div ref={ref} className="reveal-section mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <Heart className="h-6 w-6 text-primary" />
        </div>

        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground">
          {"Thank You"}
        </h2>

        <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
          {
            "Thank you for reviewing my portfolio. I look forward to contributing my technical skills, backend logic mindset, and continuous learning attitude to a professional software development team."
          }
        </p>
      </div>
    </section>
  );
}
