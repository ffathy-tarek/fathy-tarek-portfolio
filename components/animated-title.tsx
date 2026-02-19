"use client";

import { useState, useEffect, useCallback } from "react";

interface AnimatedTitleProps {
  titles: string[];
}

export function AnimatedTitle({ titles }: AnimatedTitleProps) {
  const [displayText, setDisplayText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting">("typing");
  const [charIndex, setCharIndex] = useState(0);

  const currentTitle = titles[titleIndex];

  const getTypingSpeed = useCallback(() => {
    return 70 + Math.random() * 40;
  }, []);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (charIndex < currentTitle.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, getTypingSpeed());
      } else {
        timeout = setTimeout(() => {
          setPhase("deleting");
        }, 3000);
      }
    } else if (phase === "deleting") {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setCharIndex((prev) => prev - 1);
          setDisplayText(currentTitle.slice(0, charIndex - 1));
        }, 35);
      } else {
        timeout = setTimeout(() => {
          setTitleIndex((prev) => (prev + 1) % titles.length);
          setPhase("typing");
        }, 400);
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, charIndex, currentTitle, titles.length, getTypingSpeed]);

  return (
    <div className="flex h-10 items-center justify-center sm:h-12">
      <span className="text-xl font-semibold text-primary sm:text-2xl lg:text-3xl">
        {displayText}
        <span className="typing-cursor" />
      </span>
    </div>
  );
}
