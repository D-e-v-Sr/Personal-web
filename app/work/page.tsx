"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/portfolio/header";
import { PageTransition, FadeUp, LineReveal } from "@/components/portfolio/page-transition";

const projects = [
  {
    title: "HR Recruitment Management System",
    description: "Internal web application streamlining the full recruitment lifecycle — job postings, candidate tracking, and approval workflows — for a multi-entity investment group.",
    tags: ["React.js", "Node.js", "MySQL", "REST APIs"],
    year: "2024",
    link: "#",
  },
  {
    title: "IT Asset Management Platform",
    description: "Company-wide IT asset tracking platform covering procurement, assignment, and lifecycle management across multiple business sectors.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    year: "2024",
    link: "#",
  },
  {
    title: "Real Estate & Property Management Website",
    description: "Managed and maintained a real estate platform with accurate property listings, smooth functionality, and a seamless user experience for prospective clients.",
    tags: ["WordPress", "PHP", "SEO", "DNS Management"],
    year: "2024",
    link: "#",
  },
  {
    title: "E-Commerce Platforms",
    description: "Delivered multiple responsive, SEO-friendly E-Commerce websites optimised for conversion and user experience, with full product listing and inventory management.",
    tags: ["WordPress", "Magento", "JavaScript", "SEO"],
    year: "2019–2021",
    link: "#",
  },
];

export default function WorkPage() {
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
                  03 / Work
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Selected Projects
                </h1>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-muted-foreground mt-6 max-w-xl">
                  A collection of projects I{"'"}ve worked on, ranging from full-stack 
                  applications to design systems and open-source tools.
                </p>
              </FadeUp>
            </div>

            <LineReveal delay={0.3} />

            {/* Projects List */}
            <div className="divide-y divide-border">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.1,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                >
                  <Link
                    href={project.link}
                    className="group block py-8 md:py-12 hover:bg-secondary/30 -mx-6 px-6 md:-mx-12 md:px-12 transition-colors"
                  >
                    <div className="grid md:grid-cols-[120px_1fr_auto] gap-4 md:gap-8 items-start">
                      <span className="text-sm text-muted-foreground font-mono">
                        {project.year}
                      </span>

                      <div className="space-y-3">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium group-hover:text-muted-foreground transition-colors">
                          {project.title}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed max-w-xl">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-mono px-3 py-1 bg-secondary rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <motion.div
                        className="hidden md:block"
                        initial={{ x: 0, y: 0 }}
                        whileHover={{ x: 4, y: -4 }}
                      >
                        <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                      </motion.div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* More Work CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-16 md:mt-24 text-center"
            >
              <p className="text-muted-foreground mb-4">
                Want to see more?
              </p>
              <a
                href="https://github.com/D-e-v-Sr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors"
              >
                View GitHub
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </main>
      </PageTransition>
    </>
  );
}
