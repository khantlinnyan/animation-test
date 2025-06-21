"use client";
import { useRef, useEffect, useMemo } from "react";
import { motion, useAnimation } from "motion/react";

const FluidElement = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const fluidElements = useMemo(() => {
    const shapes = ["blob", "wave", "droplet", "cloud"];
    const colors = [
      "rgba(255,182,193,0.3)", // Light pink
      "rgba(173,216,230,0.3)", // Light blue
      "rgba(221,160,221,0.3)", // Light purple
      "rgba(152,251,152,0.3)", // Light green
      "rgba(255,228,196,0.3)",
    ];

    return Array.from({ length: 300 }).map((_, i) => ({
      id: i,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 40 + Math.random() * 110,
      x: Math.random() * 100,
      speed: 0.3 + Math.random() * 0.7,
      rotation: Math.random() * 360,
      blur: 2 + Math.random() * 4,
      delay: Math.random() * 3,
    }));
  }, []);

  useEffect(() => {
    const animate = async () => {
      while (true) {
        await controls.start({
          y: "-100%",
          transition: { duration: 15, ease: "linear" },
        });
        controls.set({ y: "0%" });
      }
    };
    animate();
  }, [controls]);

  const FluidShape = ({ shape, color, size, rotation, blur }: any) => {
    const style = {
      backgroundColor: color,
      width: `${size}px`,
      height: `${size}px`,
      filter: `blur(${blur}px)`,
      rotate: `${rotation}deg`,
    };

    const shapeClass = {
      blob: "rounded-[40%_60%_60%_40%_/_70%_60%_40%_30%]",
      wave: "rounded-[30%_70%_70%_30%_/_60%_60%_40%_40%]",
      droplet: "rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%]",
      cloud: "rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%]",
    }[shape];

    return <div style={style} className={`absolute ${shapeClass}`} />;
  };

  return (
    <div
      className="absolute inset-0 overflow-hidden z-0 pointer-events-none"
      style={{ height: "200%" }}
    >
      <motion.div
        ref={containerRef}
        className="h-full w-full relative"
        animate={controls}
      >
        {[...fluidElements, ...fluidElements].map((element, index) => (
          <motion.div
            key={`${element.id}-${index}`}
            className="absolute"
            style={{
              left: `${element.x}%`,
              top: `${index * 6}%`,
            }}
            animate={{
              y: [0, -15, 0],
              x: [0, Math.random() * 10 - 5, 0],
            }}
            transition={{
              duration: 8 + element.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FluidShape {...element} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FluidElement;
