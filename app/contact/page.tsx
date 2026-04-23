"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check, Github, Linkedin, Globe, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Header } from "@/components/portfolio/header";
import { PageTransition, FadeUp, LineReveal, TextReveal } from "@/components/portfolio/page-transition";
import { MagneticButton } from "@/components/portfolio/magnetic-button";
import { Button } from "@/components/ui/button";
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
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const email = "dev.sharafu@gmail.com";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSubmitMessage("Message sent successfully!");
        reset();
      } else {
        setSubmitMessage("Failed to send message. Try again.");
      }
    } catch (error) {
      setSubmitMessage("An error occurred. Please try again.");
    }
    setIsSubmitting(false);
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

                      {/* Contact Form */}
                      <FadeUp delay={0.5}>
                        <Form {...form}>
                          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-md">
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Your name" {...field} />
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
                                    <Input placeholder="your.email@example.com" type="email" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="message"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Message</FormLabel>
                                  <FormControl>
                                    <Textarea
                                      placeholder="Your message..."
                                      className="resize-none"
                                      rows={4}
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <MagneticButton>
                              <Button
                                type="submit"
                                size="sm"
                                disabled={isSubmitting}
                                className="rounded-full"
                              >
                                {isSubmitting ? "Sending..." : "Send Message"}
                              </Button>
                            </MagneticButton>
                            {submitMessage && <p className="text-sm">{submitMessage}</p>}
                          </form>
                        </Form>
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
                      {link.icon && <link.icon className="w-4 h-4 text-muted-foreground" />}
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
                © 2026 Sharaf. All rights reserved.
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
