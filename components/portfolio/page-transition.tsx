"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export function PageTransition({ children }: PageTransitionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : pageTransition.initial}
      animate={shouldReduceMotion ? { opacity: 1 } : pageTransition.animate}
      exit={shouldReduceMotion ? { opacity: 0 } : pageTransition.exit}
      transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children }: PageTransitionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : 0.1,
            delayChildren: shouldReduceMotion ? 0 : 0.2,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function FadeUp({ children, delay = 0 }: PageTransitionProps & { delay?: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : 0.8,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function TextReveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <span className="inline-block">
      <motion.span
        className="inline-block"
        initial={shouldReduceMotion ? { y: 0 } : { y: "100%" }}
        animate={{ y: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0.01 : 0.8,
          delay: shouldReduceMotion ? 0 : delay,
          ease: [0.25, 0.4, 0.25, 1],
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function LineReveal({ delay = 0 }: { delay?: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="h-px bg-border"
      initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : 1,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      style={{ transformOrigin: "left" }}
    />
  );
}
