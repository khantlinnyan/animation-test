"use client";
import { motion, useScroll, useTransform } from "motion/react";

export default function FadingText({
  children,
  className,
  transform,
  opacityVal,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  transform: number[];
  opacityVal: number[];
}) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, transform, opacityVal, {
    clamp: true,
  });

  return (
    <motion.div
      style={{ opacity }}
      className={`fixed top-1/4 left-1/2 -translate-x-1/2 font-baloo2  z-50 pointer-events-none ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
