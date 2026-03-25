"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Header } from "@/components/portfolio/header";
import { PageTransition, FadeUp, TextReveal } from "@/components/portfolio/page-transition";
import { MagneticButton } from "@/components/portfolio/magnetic-button";

export default function HomePage() {
  return (
    <>
      <Header />
      <PageTransition>
        <main className="min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-16 pt-40 pb-12">
          {/* Hero Content */}
          <div className="flex-1 flex flex-col justify-center max-w-6xl">
            <div className="space-y-8">
              <FadeUp>
                <p className="text-muted-foreground text-sm md:text-base tracking-widest uppercase">
                  Full Stack Developer
                </p>
              </FadeUp>

              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[0.85]">
                  <div>
                    <TextReveal delay={0.1}>Crafting</TextReveal>
                  </div>
                  <div>
                    <TextReveal delay={0.2}>
                      <span className="text-muted-foreground italic font-light">digital</span>
                    </TextReveal>
                  </div>
                  <div className="overflow-hidden">
                    <TextReveal delay={0.3}>experiences.</TextReveal>
                  </div>
                </h1>
              </div>

              <FadeUp delay={0.5}>
                <p className="text-muted-foreground text-base md:text-lg max-w-md leading-relaxed">
                  Building polished software and web experiences. 
                  Experimenting with magical details in user interfaces.
                </p>
              </FadeUp>

              <FadeUp delay={0.6}>
                <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-4">
                  <MagneticButton>
                    <Link
                      href="/work"
                      className="group inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:bg-muted-foreground transition-colors cursor-pointer"
                    >
                      View Work
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mt-16">
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex items-center gap-3"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="w-4 h-4 text-muted-foreground" />
              </motion.div>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">
                Scroll to explore
              </span>
            </motion.div> */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex items-center gap-6"
            >
              <span className="text-xs text-muted-foreground">
                Available for work
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
            </motion.div>
          </div>

          {/* Large background text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.03 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="fixed bottom-0 right-0 pointer-events-none select-none text-[20vw] font-bold tracking-tighter leading-none text-foreground overflow-hidden"
          >
            DEV
          </motion.div>
        </main>
      </PageTransition>
    </>
  );
}
