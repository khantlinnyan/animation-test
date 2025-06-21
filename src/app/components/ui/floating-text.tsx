"use client";
import { motion, useAnimationFrame } from "motion/react";
import { useRef } from "react";

export default function WaveText({
  text,
  className,
  speed = 0.001,
  amplitude = 4,
  frequency = 200,
  letterClassName,
}: {
  text: string;
  className?: string;
  speed?: number;
  amplitude?: number;
  frequency?: number;
  letterClassName?: string;
}) {
  const letters = text.split("");
  const refs = useRef<(HTMLSpanElement | null)[]>([]);

  useAnimationFrame((t) => {
    refs.current.forEach((el, i) => {
      if (!el) return;
      const y = Math.sin((t + i * frequency) * speed) * amplitude;
      el.style.transform = `translateY(${y}px)`;
    });
  });

  return (
    <div className={`w-full flex flex-wrap ${className}`}>
      {letters.map((char, i) => (
        <motion.span
          key={i}
          ref={(el) => (refs.current[i] = el)}
          className={`inline-block ${letterClassName}`}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
}
