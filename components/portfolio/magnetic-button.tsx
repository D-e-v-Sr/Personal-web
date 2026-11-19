"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticButton({ children, className = "", strength = 0.3 }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || shouldReduceMotion) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set((event.clientX - centerX) * strength);
    y.set((event.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.025 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
