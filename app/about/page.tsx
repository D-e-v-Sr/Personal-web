"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/portfolio/header";
import { PageTransition, FadeUp, LineReveal } from "@/components/portfolio/page-transition";

const stats = [
  { number: "77+", label: "Years Experience" },
  { number: "50+", label: "Websites Managed" },
  { number: "5", label: "Companies Worked" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <PageTransition>
        <main className="min-h-screen px-6 md:px-12 lg:px-16 pt-32 pb-24">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-16 md:mb-24">
              <FadeUp>
                <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
                  02 / About
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  A bit about me
                </h1>
              </FadeUp>
            </div>

            <LineReveal delay={0.3} />

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 py-16 md:py-24">
              {/* Left Column - Large Text */}
              <div>
                <FadeUp delay={0.4}>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-balance">
                    I{"'"}m a Full-Stack Web Developer with 7+ years of experience building
                    high-performance websites and web applications that users love.
                  </p>
                </FadeUp>
              </div>

              {/* Right Column - Details */}
              <div className="space-y-8">
                <FadeUp delay={0.5}>
                  <p className="text-muted-foreground leading-relaxed">
                    Proficient in React.js, Next.js, JavaScript, Node.js, PHP, and RESTful APIs,
                    with database experience across MySQL, MongoDB, and Supabase. I care deeply
                    about performance, clean code, and delivering polished user experiences.
                  </p>
                </FadeUp>

                <FadeUp delay={0.6}>
                  <p className="text-muted-foreground leading-relaxed">
                    I{"'"}ve worked across <span className="text-foreground">startups</span>,{" "}
                    <span className="text-foreground">agencies</span>, and{" "}
                    <span className="text-foreground">enterprise environments</span> in both
                    India and the UAE. Currently based in Dubai, I{"'"}m focused on building
                    scalable, human-centred products as a Full Stack Developer.
                  </p>
                </FadeUp>

                <FadeUp delay={0.7}>
                  <p className="text-muted-foreground leading-relaxed">
                    Beyond development, I have hands-on expertise in SEO optimisation,
                    web hosting, DNS configuration, and server-side management — giving me
                    a well-rounded view of the full web lifecycle.
                  </p>
                </FadeUp>
              </div>
            </div>

            <LineReveal delay={0.8} />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-16 md:py-24">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.9 + index * 0.1,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                  className="text-center md:text-left"
                >
                  <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                    {stat.number}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <LineReveal delay={1.2} />

            {/* Philosophy */}
            <div className="py-16 md:py-24">
              <FadeUp delay={1.3}>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6">
                  Philosophy
                </p>
              </FadeUp>
              <FadeUp delay={1.4}>
                <blockquote className="text-2xl md:text-3xl font-light italic text-muted-foreground max-w-3xl">
                  {"\""}Details are not details. They make the design.{"\""}
                  <footer className="text-sm text-foreground not-italic mt-4">
                    Charles Eames
                  </footer>
                </blockquote>
              </FadeUp>
            </div>
          </div>
        </main>
      </PageTransition>
    </>
  );
}
