"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Database, Gauge, GraduationCap, Server, Sparkles, Workflow } from "lucide-react";
import { Header } from "@/components/portfolio/header";
import { PageTransition, FadeUp, LineReveal, StaggerContainer } from "@/components/portfolio/page-transition";

const skillCategories = [
  {
    title: "Frontend",
    description: "Interfaces that feel clear, fast, and considered.",
    icon: Code2,
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5 / CSS3", "Tailwind CSS", "SASS/SCSS", "Material UI", "Ant Design"],
  },
  {
    title: "Backend & DB",
    description: "Reliable systems behind the experience.",
    icon: Database,
    skills: ["Node.js", "PHP", "GraphQL", "RESTful APIs", "MySQL", "MongoDB", "Supabase", "Firebase"],
  },
  {
    title: "Tools & DevOps",
    description: "Shipping with confidence from commit to production.",
    icon: Workflow,
    skills: ["Git / GitHub", "Docker", "CI/CD Pipelines", "Webpack / Parcel", "Jest / Cypress", "Figma", "WordPress", "Cloudflare"],
  },
];

const experiences = [
  {
    period: "Apr 2024 — Mar 2026",
    role: "Full-Stack Developer",
    company: "Abdulla Al Arif Investment LLC · Dubai, UAE",
    description: "Architected internal web applications including an HR recruitment management system and IT asset management platform. Managed websites across 20+ group entities, implemented on-page SEO strategies, and administered web and application hosting environments.",
  },
  {
    period: "Mar 2023 — Oct 2024",
    role: "Full-Stack Developer",
    company: "Soxo Tech LLC · Calicut, India",
    description: "Built responsive, accessible UIs using React.js and Next.js, translating UI/UX designs into pixel-perfect implementations. Integrated React apps with Firebase, authored unit and integration tests with Jest and Cypress, and developed RESTful APIs.",
  },
  {
    period: "Jun 2021 — Feb 2023",
    role: "Web Developer",
    company: "Sixth Matrix · Calicut, India",
    description: "Developed and delivered responsive websites from UI/UX designs. Evaluated website performance and security, managed hosting and DNS configuration, and maintained version control using Git and GitHub.",
  },
  {
    period: "Mar 2019 — May 2021",
    role: "Web Developer",
    company: "Team Sign In · Calicut, India",
    description: "Delivered multiple E-Commerce projects with responsive, SEO-friendly websites. Built and customised sites using WordPress and Magento CMS, managed product listings, and implemented Git-based version control workflows.",
  },
  {
    period: "Apr 2018 — Feb 2019",
    role: "Freelance Web Developer",
    company: "Remote",
    description: "Designed, developed, and launched WordPress websites for clients across various industries. Handled redesigns, content updates, and ongoing maintenance using Elementor, Beaver Builder, and Divi.",
  },
];

const approaches = [
  {
    title: "Design-Driven",
    description: "Every project starts with understanding the user and designing for their needs.",
    icon: Sparkles,
  },
  {
    title: "Performance First",
    description: "Building fast, efficient applications that provide exceptional user experiences.",
    icon: Gauge,
  },
  {
    title: "Continuous Learning",
    description: "Staying current with emerging technologies and best practices in the industry.",
    icon: GraduationCap,
  },
];

export default function SkillsPage() {
  return (
    <>
      <Header />
      <PageTransition>
        <main className="relative min-h-screen overflow-hidden px-6 pb-28 pt-32 md:px-12 lg:px-16">
          <div className="site-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
          <div className="soft-orb absolute -bottom-40 left-[-180px] h-[440px] w-[440px] rounded-full pointer-events-none" aria-hidden="true" />

          <div className="relative mx-auto max-w-6xl">
            <header className="mb-14 md:mb-20">
              <FadeUp>
                <p className="mb-5 text-sm font-mono uppercase tracking-[0.25em] text-muted-foreground">04 / Skills</p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="max-w-4xl text-4xl font-bold tracking-tight leading-[1.02] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                  <span className="block overflow-hidden">
                    <span className="inline-block">Skills &amp;</span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="inline-block text-brand-accent">experience.</span>
                  </span>
                </h1>
              </FadeUp>
            </header>

            <LineReveal delay={0.35} />

            <section aria-label="Skill categories" className="py-14 lg:py-20">
              <StaggerContainer>
                <div className="grid gap-6 md:grid-cols-3">
                  {skillCategories.map((category, categoryIndex) => {
                    const Icon = category.icon;

                    return (
                      <motion.article
                        key={category.title}
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.45 + categoryIndex * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                        className="group relative flex min-h-[22rem] flex-col rounded-2xl border border-border bg-card/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-foreground/25 hover:shadow-lg hover:shadow-foreground/5 sm:p-7"
                      >
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-accent/0 via-transparent to-brand-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                        <div className="relative flex items-start justify-between">
                          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background/70 text-brand-accent transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <span className="font-mono text-xs text-muted-foreground">0{categoryIndex + 1}</span>
                        </div>

                        <div className="relative mt-10">
                          <h2 className="text-xl font-medium text-foreground">{category.title}</h2>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{category.description}</p>
                        </div>

                        <ul className="relative mt-auto flex flex-wrap content-end gap-2 pt-10">
                          {category.skills.map((skill, skillIndex) => (
                            <motion.li
                              key={skill}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: 0.65 + categoryIndex * 0.1 + skillIndex * 0.035 }}
                              className="rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-sans text-muted-foreground transition-colors hover:border-brand-accent/40 hover:text-foreground"
                            >
                              {skill}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.article>
                    );
                  })}
                </div>
              </StaggerContainer>
            </section>

            <LineReveal delay={1.05} />

            <section aria-label="Experience" className="grid gap-12 py-16">
              <FadeUp delay={1.15}>
                <div className="relative">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                    {experiences.map((exp, index) => (
                      <motion.article
                        key={exp.period}
                        initial={{ opacity: 0, x: -18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.55, delay: 1.2 + index * 0.09, ease: [0.25, 0.4, 0.25, 1] }}
                        className="group relative pl-10"
                      >
                        <span className="absolute left-0 top-1.5 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-background text-xs font-mono text-muted-foreground transition-colors group-hover:border-brand-accent group-hover:text-brand-accent" aria-hidden="true">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="rounded-2xl border border-border bg-card/55 p-5 transition-colors group-hover:border-foreground/20 group-hover:bg-card sm:p-6">
                          <div className="flex flex-wrap items-baseline justify-between gap-2">
                            <h3 className="text-lg font-medium text-foreground">{exp.role}</h3>
                            <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                          </div>
                          <p className="mt-2 text-sm text-brand-accent">{exp.company}</p>
                          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </section>

            <LineReveal delay={1.8} />

            <section aria-label="Approach" className="py-16 lg:py-24">
              <FadeUp delay={1.9}>
                <div className="mb-10 flex items-end justify-between gap-6">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">Approach</p>
                    <h2 className="mt-3 text-3xl font-light sm:text-4xl">How I work.</h2>
                  </div>
                  <ArrowUpRight className="hidden h-7 w-7 text-brand-accent md:block" aria-hidden="true" />
                </div>
              </FadeUp>
              <div className="grid gap-5 md:grid-cols-3">
                {approaches.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.article
                      key={item.title}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.55, delay: 2 + index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                      className="group rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/40 hover:bg-card sm:p-7"
                    >
                      <div className="flex items-center justify-between">
                        <Icon className="h-5 w-5 text-brand-accent" aria-hidden="true" />
                        <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                      </div>
                      <h3 className="mt-10 text-lg font-medium text-foreground">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                      <span className="mt-8 block h-px w-full bg-border transition-all duration-300 group-hover:w-16 group-hover:bg-brand-accent" aria-hidden="true" />
                    </motion.article>
                  );
                })}
              </div>
            </section>

            <motion.footer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.3 }}
              className="flex flex-col justify-between gap-4 border-t border-border py-6 sm:flex-row sm:items-center"
            >
              <p className="text-sm text-muted-foreground">Full-stack, end-to-end, and always learning.</p>
              <p className="text-sm text-muted-foreground">Dubai, UAE</p>
            </motion.footer>
          </div>
        </main>
      </PageTransition>
    </>
  );
}
