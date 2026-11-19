"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Building2, Globe2, Laptop, Store, User, Utensils } from "lucide-react";
import { Header } from "@/components/portfolio/header";
import { PageTransition, FadeUp, LineReveal } from "@/components/portfolio/page-transition";

const projects = [
  {
    title: "Employee Management System (HR)",
    description: "Full-stack hiring workflow tool covering employee requisition by department and line managers, CV shortlisting, interview scheduling, and candidate data management until the employee joins.",
    tags: ["Next.js", "Tailwind CSS", "shadcn/ui", "Node.js", "Express.js", "PostgreSQL", "Prisma"],
    year: "Apr 2024 – Mar 2026",
    link: "#",
    icon: User,
    index: "01",
  },
  {
    title: "IT Inventory Management System",
    description: "Platform to track all company IT hardware and software — laptops, peripherals, and licensed software (Microsoft Office, Adobe, CAD). Tracks stock levels, warranties, licenses, asset assignments, and returns when employees leave.",
    tags: ["Next.js", "Tailwind CSS", "shadcn/ui", "Node.js", "Express.js", "Supabase"],
    year: "Apr 2024 – Mar 2026",
    link: "#",
    icon: Laptop,
    index: "02",
  },
  {
    title: "WPA Coaches App (World Padel Academy)",
    description: "Web app to track coaches' coaching hours, leaves, and monthly salary calculations for one of the group's padel brands.",
    tags: ["Next.js", "Tailwind CSS", "shadcn/ui", "Node.js", "Express.js", "Supabase"],
    year: "Apr 2024 – Mar 2026",
    link: "#",
    icon: Globe2,
    index: "03",
  },
  {
    title: "Daytona Properties Website",
    description: "Managed and enhanced the website of a prominent UAE real estate entity. Backend integrates with leading UAE property portals to show real-time listings of apartments, villas, offices, and land.",
    tags: ["Next.js", "Chakra UI", "Radix UI", "Tailwind CSS", "Express.js", "MongoDB"],
    year: "Apr 2024 – Mar 2026",
    link: "#",
    icon: Building2,
    index: "04",
  },
  {
    title: "DKH KIA Dealership Management System",
    description: "Unified application to streamline daily dealership activities, reduce manual workload, and efficiently track operational processes through a centralized platform with an intuitive, user-friendly interface.",
    tags: ["React.js", "Shadcn UI", "Firebase"],
    year: "Mar 2023 – Oct 2023",
    link: "#",
    icon: Store,
    index: "05",
  },
  {
    title: "Multi-Brand Digital Platforms",
    description: "Contributed to full-stack development and maintenance of websites for a multi-brand restaurant business under Fiveberg Pvt. Ltd., supporting food brands including Tummy & Me, Chickago, and Burger Thoughts. Also performed functional testing of restaurant ordering applications to ensure smooth user experiences and reliable ordering workflows.",
    tags: ["WordPress", "PHP", "JavaScript", "HTML", "CSS"],
    year: "Jun 2021 – Feb 2023",
    link: "#",
    icon: Utensils,
    index: "06",
  },
];

export default function WorkPage() {
  return (
    <>
      <Header />
      <PageTransition>
        <main className="relative min-h-screen overflow-hidden px-6 pb-28 pt-32 md:px-12 lg:px-16">
          <div className="site-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
          <div className="soft-orb absolute -top-32 right-[-160px] h-[420px] w-[420px] rounded-full pointer-events-none" aria-hidden="true" />

          <div className="relative mx-auto max-w-6xl">
            <header className="mb-14 md:mb-20">
              <FadeUp>
                <p className="mb-5 text-sm font-mono uppercase tracking-[0.25em] text-muted-foreground">03 / Work</p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="max-w-4xl text-4xl font-bold tracking-tight leading-[1.02] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                  <span className="block overflow-hidden">
                    <span className="inline-block">Selected</span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="inline-block text-brand-accent">projects.</span>
                  </span>
                </h1>
              </FadeUp>
              <FadeUp delay={0.25}>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  A selection of products and platforms I{"'"}ve helped design, build, and
                  keep moving — from internal tools to customer-facing experiences.
                </p>
              </FadeUp>
            </header>

            <LineReveal delay={0.35} />

            <section aria-label="Selected projects" className="py-14 lg:py-20">
              <div className="grid gap-5">
                {projects.map((project, index) => {
                  const Icon = project.icon;

                  return (
                    <motion.article
                      key={project.title}
                      initial={{ opacity: 0, y: 36 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.65,
                        delay: 0.45 + index * 0.09,
                        ease: [0.25, 0.4, 0.25, 1],
                      }}
                      className="group relative overflow-hidden rounded-2xl border border-border bg-card/70 shadow-sm transition-colors hover:border-foreground/25 hover:shadow-lg hover:shadow-foreground/5"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-brand-accent/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                      <div className="relative grid items-stretch gap-0 md:grid-cols-[1fr_auto]">
                        <Link href={project.link} className="grid min-h-[13rem] gap-6 p-6 sm:p-8 lg:p-10" aria-label={`View ${project.title}`}>
                          <div className="flex items-start justify-between gap-6">
                            <div className="flex items-center gap-4">
                              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background/70 text-brand-accent transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
                                <Icon className="h-5 w-5" aria-hidden="true" />
                              </span>
                              <div>
                                <p className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">{project.index} — {project.year}</p>
                                <h2 className="mt-2 text-xl font-medium leading-tight text-foreground transition-colors group-hover:text-brand-accent sm:text-2xl lg:text-3xl">{project.title}</h2>
                              </div>
                            </div>
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:border-brand-accent group-hover:bg-brand-accent group-hover:text-background group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true">
                              <ArrowUpRight className="h-4 w-4" />
                            </span>
                          </div>

                          <p className="max-w-2xl leading-relaxed text-muted-foreground">{project.description}</p>

                          <div className="flex flex-wrap gap-2 pt-1">
                            {project.tags.map((tag) => (
                              <span key={tag} className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-sans text-muted-foreground transition-colors group-hover:border-brand-accent/40 group-hover:text-foreground">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </Link>

                        <div className="relative hidden min-h-[13rem] overflow-hidden border-t border-border md:block md:w-56 md:border-l md:border-t-0" aria-hidden="true">
                          <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-muted" />
                          <div className="absolute inset-0 site-grid opacity-70" />
                          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                            <span className="font-mono text-5xl font-semibold text-stroke">{project.index}</span>
                            <span className="h-1 w-10 rounded-full bg-brand-accent" />
                            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Case study</span>
                          </div>
                          <div className="absolute bottom-5 left-5 right-5 flex gap-1.5" aria-hidden="true">
                            <span className="h-1 flex-1 rounded-full bg-foreground/10" />
                            <span className="h-1 flex-1 rounded-full bg-foreground/10" />
                            <span className="h-1 flex-1 rounded-full bg-brand-accent" />
                            <span className="h-1 flex-1 rounded-full bg-foreground/10" />
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </section>

            <LineReveal delay={1.1} />

            <motion.section
              aria-label="More work"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col items-center justify-between gap-6 py-14 text-center md:flex-row md:py-16 md:text-left"
            >
              <div>
                <p className="text-sm font-medium text-foreground">Want to see more?</p>
                <p className="mt-1 text-sm text-muted-foreground">Explore the code behind the work.</p>
              </div>
              <a
                href="https://github.com/D-e-v-Sr"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-brand-accent hover:text-brand-accent"
              >
                View GitHub
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            </motion.section>
          </div>
        </main>
      </PageTransition>
    </>
  );
}
