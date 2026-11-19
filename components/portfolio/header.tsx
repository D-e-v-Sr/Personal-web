"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { Menu } from "./menu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressBar = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-border/80 bg-background/80 backdrop-blur-xl"
            : "border-transparent bg-background/40 backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-16 py-4 md:py-5">
          <Link href="/" aria-label="Sharaf home" className="group">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card/70 text-brand-accent shadow-sm transition-colors group-hover:border-brand-accent/40 group-hover:bg-brand-accent/10">
                {'{'} {'}'}
              </span>
              <span className="flex flex-col">
                <span className="text-base font-bold leading-none tracking-tight text-foreground">Sharaf</span>
                <span className="mt-1 text-[9px] uppercase tracking-[0.24em] text-muted-foreground">Full Stack Dev</span>
              </span>
            </motion.div>
          </Link>

          <div className="hidden items-center gap-4 md:flex">
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Dubai, UAE</span>
            <span className="h-4 w-px bg-border" aria-hidden="true" />
            <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
              </span>
              Available
            </span>
          </div>
        </div>
        <motion.div
          className="absolute inset-x-0 bottom-0 h-px bg-brand-accent origin-left"
          style={{ scaleX: progressBar }}
          aria-hidden="true"
        />
      </motion.header>

      <Menu />
    </>
  );
}
