"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Briefcase, Code, Home, Mail, Moon, Sun, User } from "lucide-react";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: User },
  { label: "Work", href: "/work", icon: Briefcase },
  { label: "Skills", href: "/skills", icon: Code },
  { label: "Contact", href: "/contact", icon: Mail },
];

export function Menu() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed bottom-4 left-1/2 z-40 h-14 w-[min(22rem,calc(100vw-2rem))] -translate-x-1/2 rounded-full border border-border bg-background/70 opacity-50" aria-hidden="true" />
    );
  }

  return (
    <TooltipProvider delayDuration={0.15}>
      <nav
        className="flex justify-center fixed bottom-4 left-1/2 z-40 w-[min(23rem,calc(100vw-2rem))] -translate-x-1/2 sm:bottom-6"
        aria-label="Primary navigation"
      >
        <Dock
          iconSize={38}
          iconMagnification={52}
          iconDistance={112}
          className="rounded-full border-border/80 bg-background/75 shadow-lg shadow-foreground/5 backdrop-blur-xl"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Tooltip key={item.href}>
                <TooltipTrigger asChild>
                  <DockIcon
                    className={`relative transition-colors ${
                      isActive
                        ? "bg-brand-accent/15 text-brand-accent"
                        : "bg-background/40 text-muted-foreground hover:bg-card hover:text-foreground"
                    }`}
                  >
                    <Link
                      href={item.href}
                      prefetch
                      aria-current={isActive ? "page" : undefined}
                      className="flex h-full w-full items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                      {isActive && (
                        <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-brand-accent" aria-hidden="true" />
                      )}
                    </Link>
                  </DockIcon>
                </TooltipTrigger>
                <TooltipContent side="top" sideOffset={10} className="rounded-full px-3 py-1.5 text-[11px] font-medium">
                  {item.label}
                </TooltipContent>
              </Tooltip>
            );
          })}

          <Tooltip>
            <TooltipTrigger asChild>
              <DockIcon className="relative bg-background/40 text-muted-foreground transition-colors hover:bg-card hover:text-foreground">
                <button
                  type="button"
                  onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                  aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`}
                  className="flex h-full w-full items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {resolvedTheme === "dark" ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
                </button>
              </DockIcon>
            </TooltipTrigger>
            <TooltipContent side="top" sideOffset={10} className="rounded-full px-3 py-1.5 text-[11px] font-medium">
              Toggle theme
            </TooltipContent>
          </Tooltip>
        </Dock>
      </nav>
    </TooltipProvider>
  );
}
