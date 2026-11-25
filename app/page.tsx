"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ArrowDown, Star, Layers, Sparkles } from "lucide-react";
import { Header } from "@/components/portfolio/header";
import { PageTransition, FadeUp, TextReveal } from "@/components/portfolio/page-transition";
import { MagneticButton } from "@/components/portfolio/magnetic-button";
import { MacBookCode } from "@/components/portfolio/macbook-code";

const capabilities = [
  { icon: Layers, label: "Full-Stack" },
  { icon: Sparkles, label: "UI/UX" },
  { icon: Star, label: "Performance" },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <PageTransition>
        <main id="about" className="min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-16 pt-40 pb-12 relative overflow-hidden">
          <div className="site-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
          <div
            className="soft-orb absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="soft-orb absolute top-1/2 -right-60 w-[400px] h-[400px] pointer-events-none"
            aria-hidden="true"
            style={{ animationDelay: "3s" }}
          />

          <section aria-label="Hero" className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="space-y-8 max-w-2xl">
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[1] sm:leading-[0.85]">
                  <div>
                    <TextReveal delay={0.1}>Building</TextReveal>
                  </div>
                  <div>
                    <TextReveal delay={0.2}>
                      <span className="text-muted-foreground italic font-light">Digital</span>
                    </TextReveal>
                  </div>
                  <div>
                    <TextReveal delay={0.3}>Experiences.</TextReveal>
                  </div>
                </h1>
              </div>

              <FadeUp delay={0.5}>
                <p className="text-muted-foreground text-base md:text-lg max-w-md leading-relaxed">
                  Building polished software and web experiences. Experimenting with magical details in user interfaces.
                </p>
              </FadeUp>

              <FadeUp delay={0.6}>
                <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-4">
                  <MagneticButton>
                    <Link
                      href="/work"
                      className="group inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:bg-muted-foreground transition-colors cursor-pointer relative overflow-hidden"
                    >
                      <span className="relative z-10">View Work</span>
                      <ArrowUpRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </MagneticButton>
                  <MagneticButton>
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    >
                      <span className="relative">
                        Get in touch
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
                      </span>
                    </Link>
                  </MagneticButton>
                </div>
              </FadeUp>

              <FadeUp delay={0.75}>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {capabilities.map((cap, i) => (
                    <motion.div
                      key={cap.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/50 text-xs text-muted-foreground font-mono"
                    >
                      <cap.icon className="w-3 h-3 text-brand-accent" />
                      {cap.label}
                    </motion.div>
                  ))}
                </div>
              </FadeUp>
            </div>
            <MacBookCode />
          </section>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mt-16 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex items-center gap-6"
            >
              <span className="text-xs text-muted-foreground">Available for work</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
            </motion.div>

            <motion.a
              href="#about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="group inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="w-4 h-4" />
              </motion.div>
              <span className="uppercase tracking-widest">Scroll</span>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.03 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="fixed bottom-0 right-0 pointer-events-none select-none text-[20vw] font-bold tracking-tighter leading-none text-foreground overflow-hidden z-0"
            aria-hidden="true"
          >
            DEV
          </motion.div>
        </main>
      </PageTransition>
    </>
  );
}
