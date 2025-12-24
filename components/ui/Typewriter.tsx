"use client";

import { motion } from "framer-motion";

type TypewriterProps = {
  text: string;
  className?: string;
  delay?: number;
};

export const Typewriter = ({
  text,
  className = "",
  delay = 0,
}: TypewriterProps) => {
  const letters = Array.from(text);

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.04,
            delayChildren: delay,
          },
        },
      }}
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};
