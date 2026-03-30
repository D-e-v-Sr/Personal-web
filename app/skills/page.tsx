"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/portfolio/header";
import { PageTransition, FadeUp, LineReveal } from "@/components/portfolio/page-transition";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5 / CSS3", "Tailwind CSS", "SASS/SCSS", "Material UI", "Ant Design"],
  },
  {
    title: "Backend & DB",
    skills: ["Node.js", "PHP", "GraphQL", "RESTful APIs", "MySQL", "MongoDB", "Supabase", "Firebase"],
  },
  {
    title: "Tools & DevOps",
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

export default function SkillsPage() {
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
                  04 / Skills
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Skills & Experience
                </h1>
              </FadeUp>
            </div>

            <LineReveal delay={0.3} />

            {/* Skills Grid */}
            <div className="grid md:grid-cols-3 gap-12 md:gap-8 py-16 md:py-24">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + categoryIndex * 0.1,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                  className="space-y-6"
                >
                  <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                    {category.title}
                  </h2>
                  <ul className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.li
                        key={skill}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        className="text-lg md:text-xl font-light hover:text-muted-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <LineReveal delay={0.8} />

            {/* Experience Section */}
            <div className="py-16 md:py-24">
              <FadeUp delay={0.9}>
                <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-12">
                  Experience
                </h2>
              </FadeUp>

              <div className="space-y-0 divide-y divide-border">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.period}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 1 + index * 0.1,
                      ease: [0.25, 0.4, 0.25, 1],
                    }}
                    className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-8 md:py-12"
                  >
                    <span className="text-sm text-muted-foreground font-mono">
                      {exp.period}
                    </span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-medium mb-2">
                        {exp.role}
                      </h3>
                      <p className="text-muted-foreground mb-3">{exp.company}</p>
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Approach Section */}
            <LineReveal delay={1.4} />
            <div className="py-16 md:py-24">
              <FadeUp delay={1.5}>
                <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-8">
                  Approach
                </h2>
              </FadeUp>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Design-Driven", description: "Every project starts with understanding the user and designing for their needs." },
                  { title: "Performance First", description: "Building fast, efficient applications that provide exceptional user experiences." },
                  { title: "Continuous Learning", description: "Staying current with emerging technologies and best practices in the industry." },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                    className="space-y-3"
                  >
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </PageTransition>
    </>
  );
}
