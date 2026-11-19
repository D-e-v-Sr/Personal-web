"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/portfolio/header";
import { PageTransition, FadeUp, LineReveal, TextReveal } from "@/components/portfolio/page-transition";
import { MagneticButton } from "@/components/portfolio/magnetic-button";
import { WorldMap } from "@/components/portfolio/world-map";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const stats = [
  { number: "7+", label: "Years Experience" },
  { number: "50+", label: "Web Apps Managed" },
  { number: "5", label: "Companies Worked" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <PageTransition>
        <main className="min-h-screen px-6 md:px-12 lg:px-16 pt-32 pb-24">
          <div className="max-w-6xl mx-auto">
            <header className="mb-16 md:mb-24">
              <FadeUp>
                <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4 font-mono">
                  02 / About
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  <TextReveal delay={0.15}>A bit about</TextReveal>{" "}
                  <TextReveal delay={0.25}>
                    <span className="text-brand-accent">me</span>
                  </TextReveal>
                </h1>
              </FadeUp>
            </header>

            <LineReveal delay={0.3} />

            <section aria-label="Introduction" className="grid lg:grid-cols-2 gap-16 lg:gap-24 py-16 md:py-24">
              <div>
                <FadeUp delay={0.4}>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-balance">
                    I{"'"}m a Full-Stack Web Developer with 7+ years of experience building high-performance websites and web applications that users love.
                  </p>
                </FadeUp>
              </div>

              <div className="space-y-8">
                <FadeUp delay={0.5}>
                  <p className="text-muted-foreground leading-relaxed">
                    Proficient in React.js, Next.js, JavaScript, Node.js, PHP, and RESTful APIs, with database experience across MySQL, MongoDB, and Supabase. I care deeply about performance, clean code, and delivering polished user experiences.
                  </p>
                </FadeUp>

                <FadeUp delay={0.6}>
                  <p className="text-muted-foreground leading-relaxed">
                    I{"'"}ve worked across{" "}
                    <span className="text-foreground font-medium">startups</span>,{" "}
                    <span className="text-foreground font-medium">agencies</span>, and{" "}
                    <span className="text-foreground font-medium">enterprise environments</span> in both India and the UAE. Currently based in Dubai, I{"'"}m focused on building scalable, human-centred products as a Full Stack Developer.
                  </p>
                </FadeUp>

                <FadeUp delay={0.7}>
                  <p className="text-muted-foreground leading-relaxed">
                    Beyond development, I have hands-on expertise in SEO optimisation, web hosting, DNS configuration, and server-side management — giving me a well-rounded view of the full web lifecycle.
                  </p>
                </FadeUp>
              </div>
            </section>

            <LineReveal delay={0.8} />

            <section aria-label="Statistics" className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 py-16 md:py-24">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.9 + index * 0.15,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                  className="group relative"
                >
                  <div className="absolute inset-0 rounded-2xl border border-border bg-card/30 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight relative z-10">
                    <span className="text-brand-accent">{stat.number}</span>
                  </p>
                  <p className="text-sm text-muted-foreground mt-2 font-mono">{stat.label}</p>
                </motion.div>
              ))}
            </section>

            <LineReveal delay={1.2} />

            <section aria-label="Location" className="grid lg:grid-cols-2 gap-12 lg:gap-16 py-16 md:py-24 items-center">
              <FadeUp delay={1.3}>
                <div className="space-y-6">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono">
                    Locations
                  </p>
                  <h2 className="text-2xl md:text-3xl font-light leading-relaxed">
                    Working across{" "}
                    <span className="text-foreground font-medium">India</span> and{" "}
                    <span className="text-foreground font-medium">UAE</span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed max-w-md">
                    From India to UAE, I collaborate with diverse teams across time zones, delivering consistent quality and culturally aware digital solutions.
                  </p>
                  <FadeUp delay={1.5}>
                    <MagneticButton>
                      <Link
                        href="/contact"
                        className="group inline-flex items-center gap-2 text-sm text-foreground hover:text-muted-foreground transition-colors cursor-pointer"
                      >
                        Get in touch
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </MagneticButton>
                  </FadeUp>
                </div>
              </FadeUp>
              <FadeUp delay={1.4}>
                <WorldMap />
              </FadeUp>
            </section>

            <LineReveal delay={1.7} />

            <footer className="pt-12 md:pt-16 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-sm text-muted-foreground">
                Full Stack Developer
              </p>
            </footer>
          </div>
        </main>
      </PageTransition>
    </>
  );
}
