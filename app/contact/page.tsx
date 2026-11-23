"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Loader2,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Header } from "@/components/portfolio/header";
import { PageTransition, FadeUp, LineReveal, TextReveal } from "@/components/portfolio/page-transition";
import { WorldMap } from "@/components/portfolio/world-map";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/D-e-v-Sr", handle: "@D-e-v-Sr", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/sharafukp", handle: "/in/sharafukp", icon: Linkedin },
  { label: "WhatsApp", href: "https://wa.me/+971543014975", handle: "+971 54 301 4975", icon: MessageCircle },
];

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(1, "Phone number is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactInputClasses = `
  border
  border-border
  rounded-xl
  bg-transparent
  px-4
  h-11
  text-base
  placeholder:text-muted-foreground/60
  placeholder:text-left
  focus-visible:border-brand-accent
  focus-visible:ring-0
  focus-visible:ring-offset-0
  focus-visible:shadow-none
  transition-colors
`;

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [showPaperPlane, setShowPaperPlane] = useState(false);
  const successTimerRef = useRef<number | null>(null);
  const email = "dev.sharafu@gmail.com";

  useEffect(() => {
    return () => {
      if (successTimerRef.current) {
        window.clearTimeout(successTimerRef.current);
      }
    };
  }, []);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const copyEmail = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(email);
      } else {
        const temporaryInput = document.createElement("textarea");
        temporaryInput.value = email;
        temporaryInput.style.position = "fixed";
        temporaryInput.style.opacity = "0";
        document.body.appendChild(temporaryInput);
        temporaryInput.select();
        document.execCommand("copy");
        document.body.removeChild(temporaryInput);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setSubmitMessage("Unable to copy email. Please copy it manually.");
    }
  };

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => ({}));

      if (response.ok) {
        form.reset();
        setShowPaperPlane(true);
        setSubmitMessage("Message sent successfully!");
        successTimerRef.current = window.setTimeout(() => {
          setShowPaperPlane(false);
        }, 2600);
      } else {
        setSubmitMessage(result.message || result.error || "Failed to send message. Try again.");
      }
    } catch {
      setSubmitMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <PageTransition>
        <main className="relative min-h-screen overflow-hidden px-6 pt-32 md:px-12 lg:px-16">
          <div className="site-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
          <div
            className="soft-orb absolute -top-32 -right-40 h-[420px] w-[420px] rounded-full pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="soft-orb absolute bottom-0 left-[-180px] h-[360px] w-[360px] rounded-full pointer-events-none"
            aria-hidden="true"
            style={{ animationDelay: "2.5s" }}
          />

          <div className="relative mx-auto max-w-6xl">
            <div
              className="accent-orb absolute -top-16 left-1/2 -translate-x-1/2 h-[200px] w-[200px] rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div className="mb-14 md:mb-20">
              <FadeUp>
                <p className="mb-5 text-sm font-mono uppercase tracking-[0.25em] text-muted-foreground">
                  05 / Contact
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="max-w-4xl text-4xl font-bold tracking-tight leading-[1.02] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                  <span className="block overflow-hidden">
                    <TextReveal delay={0.15}>Let&apos;s build something</TextReveal>
                  </span>
                  <span className="block overflow-hidden">
                    <TextReveal delay={0.28}>
                      <span className="text-brand-accent">worth remembering.</span>
                    </TextReveal>
                  </span>
                </h1>
              </FadeUp>
              <FadeUp delay={0.42}>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  Have a project in mind, a product to improve, or a problem that needs a
                  thoughtful technical partner? I{"'"}m always open to a good conversation.
                </p>
              </FadeUp>
            </div>

            <LineReveal delay={0.5} />

            <div className="grid items-start gap-12 py-16 lg:grid-cols-[1fr_1.15fr] lg:gap-20 lg:py-24">
              <FadeUp delay={0.62}>
                <div className="space-y-10">
                  <div>
                    <p className="mb-6 text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">
                      Direct line
                    </p>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="group flex w-full items-center justify-between gap-4 rounded-xl border border-border bg-card/60 px-5 py-4 text-left transition-colors hover:border-foreground/30 hover:bg-card"
                      aria-label={`Copy email address ${email}`}
                    >
                      <span className="min-w-0">
                        <span className="block text-xs text-muted-foreground">Email me at</span>
                        <span className="block truncate text-base font-medium text-foreground">{email}</span>
                      </span>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-brand-accent group-hover:text-brand-accent">
                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </span>
                    </button>
                  </div>

                  <div>
                    <p className="mb-5 text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">
                      Elsewhere
                    </p>
                    <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
                      {socialLinks.map((link, index) => {
                        const Icon = link.icon;
                        return (
                          <motion.a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.55, delay: 0.75 + index * 0.08 }}
                            className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-card/50 px-4 py-3 transition-colors hover:border-foreground/30 hover:bg-card"
                          >
                            <span className="flex min-w-0 items-center gap-3">
                              <Icon className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-brand-accent" aria-hidden="true" />
                              <span className="min-w-0">
                                <span className="block text-sm font-medium">{link.label}</span>
                                <span className="block truncate text-xs text-muted-foreground">{link.handle}</span>
                              </span>
                            </span>
                            <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-brand-accent" aria-hidden="true" />
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.72}>
                <div className="relative">
                  <div className="glass-panel absolute -inset-3 -z-10 rounded-[2rem] opacity-60" aria-hidden="true" />
                  <div className="glass-panel rounded-2xl p-5 sm:p-7 md:p-8">
                    <div className="mb-8 flex items-start justify-between gap-6">
                      <div>
                        <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">
                          Send a message
                        </p>
                      </div>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/60 text-brand-accent" aria-hidden="true">
                        <span className="h-2 w-2 rounded-full bg-brand-accent pulse-soft" />
                      </span>
                    </div>

                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid gap-6 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                  <Input className={contactInputClasses} placeholder="Your name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input className={contactInputClasses} placeholder="your.email@example.com" type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone number</FormLabel>
                                <FormControl>
                                  <Input className={contactInputClasses} placeholder="+971 12 345 6789" type="tel" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Subject</FormLabel>
                                <FormControl>
                                  <Input className={contactInputClasses} placeholder="Project inquiry" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="What are we building?"
                                  className={`min-h-32 resize-none ${contactInputClasses}`}
                                  rows={5}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="flex flex-col-reverse items-center gap-4 pt-1 sm:flex-row sm:justify-center">
                          <MagneticSubmit isSubmitting={isSubmitting} />
                        </div>

                        <AnimatePresence mode="wait">
                          {submitMessage && (
                            <motion.p
                              key={submitMessage}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              className="rounded-lg border border-border bg-muted/60 px-4 py-3 text-sm text-foreground"
                              role="status"
                              aria-live="polite"
                            >
                              {submitMessage}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </form>
                    </Form>
                  </div>

                  <AnimatePresence>
                    {showPaperPlane && (
                      <motion.div
                        key="paper-plane"
                        aria-hidden="true"
                        className="pointer-events-none fixed z-50 text-brand-accent"
                        initial={{ opacity: 0, x: 0, y: 0, rotate: -12, scale: 0.6 }}
                        animate={{
                          opacity: [0, 1, 1, 0],
                          x: [0, 120, 320, 560],
                          y: [0, -90, -220, -390],
                          rotate: [-12, -24, -38, -52],
                          scale: [0.6, 0.8, 1, 0.85],
                        }}
                        transition={{ duration: 1.8, times: [0, 0.18, 0.6, 1], ease: "easeOut" }}
                        style={{ top: "62vh", left: "38vw" }}
                      >
                        <ArrowUpRight className="h-10 w-10" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            </div>

            <LineReveal delay={1.1} />

            <motion.footer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-col justify-between gap-4 border-t border-border py-6 sm:pb-6 pb-32 sm:flex-row sm:items-center"
            >
              <p className="text-sm text-muted-foreground">Designed and developed by Sharaf.</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Available for work</span>
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
              </div>
            </motion.footer>
          </div>
        </main>
      </PageTransition>
    </>
  );
}

function MagneticSubmit({ isSubmitting }: { isSubmitting: boolean }) {
  return (
    <motion.button
      type="submit"
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.98 }}
      disabled={isSubmitting}
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-foreground px-4 text-sm font-medium text-background transition-colors hover:bg-foreground/85 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {isSubmitting ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          Sending
        </>
      ) : (
        <>
          Send message
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </>
      )}
    </motion.button>
  );
}
