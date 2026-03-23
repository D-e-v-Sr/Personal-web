"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/portfolio/header";
import { PageTransition, FadeUp, LineReveal, TextReveal } from "@/components/portfolio/page-transition";
import { MagneticButton } from "@/components/portfolio/magnetic-button";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/D-e-v-Sr", handle: "@D-e-v-Sr" },
  { label: "LinkedIn", href: "https://linkedin.com/in/sharafukp", handle: "/in/sharafukp" },
  { label: "Website", href: "https://devsr.netlify.app", handle: "devsr.netlify.app" },
];

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const email = "dev.sharafu@gmail.com";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Header />
      <PageTransition>
        <main className="min-h-screen px-6 md:px-12 lg:px-16 pt-32 pb-24 flex flex-col">
          <div className="max-w-6xl mx-auto flex-1 flex flex-col">
            {/* Header */}
            <div className="mb-16 md:mb-24">
              <FadeUp>
                <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
                  05 / Contact
                </p>
              </FadeUp>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="space-y-12">
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1]">
                    <div className="overflow-hidden">
                      <TextReveal delay={0.1}>Let{"'"}s work</TextReveal>
                    </div>
                    <div className="overflow-hidden">
                      <TextReveal delay={0.2}>together.</TextReveal>
                    </div>
                  </h1>
                </div>

                <FadeUp delay={0.4}>
                  <p className="text-muted-foreground text-lg md:text-xl max-w-xl">
                    If you would like to discuss a project or just say hi, 
                    I{"'"}m always down to chat.
                  </p>
                </FadeUp>

                {/* Email CTA */}
                <FadeUp delay={0.5}>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                    <MagneticButton>
                      <a
                        href={`mailto:${email}`}
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background text-lg font-medium rounded-full hover:bg-muted-foreground transition-colors"
                      >
                        Send an email
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </MagneticButton>

                    <button
                      onClick={copyEmail}
                      className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span className="text-sm">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span className="text-sm">{email}</span>
                        </>
                      )}
                    </button>
                  </div>
                </FadeUp>
              </div>
            </div>

            <LineReveal delay={0.7} />

            {/* Social Links */}
            <div className="py-12 md:py-16">
              <div className="grid sm:grid-cols-3 gap-8">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.8 + index * 0.1,
                      ease: [0.25, 0.4, 0.25, 1],
                    }}
                    className="group space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium group-hover:text-muted-foreground transition-colors">
                        {link.label}
                      </span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-sm text-muted-foreground">{link.handle}</p>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Footer */}
            <motion.footer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-8 border-t border-border"
            >
              <p className="text-sm text-muted-foreground">
                © 2025 Mohammed Sharafudheen. All rights reserved.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  Available for work
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
              </div>
            </motion.footer>
          </div>
        </main>
      </PageTransition>
    </>
  );
}
