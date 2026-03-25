"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "./menu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled && !isMenuOpen
            ? "bg-background/80 backdrop-blur-md border-b border-border"
            : ""
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-16 py-6">
          {/* Logo */}
          <Link href="/" className="relative z-50 cursor-pointer">
            <motion.div
              className="flex flex-col"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <span
                className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
                  isMenuOpen ? "text-background" : "text-foreground"
                }`}
              >
                Sharaf
              </span>
              <span
                className={`text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                  isMenuOpen ? "text-background/60" : "text-muted-foreground"
                }`}
              >
                Full Stack Dev
              </span>
            </motion.div>
          </Link>

          {/* Menu Button - visible on all screens */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-50 flex items-center justify-center w-12 h-12 rounded-full border border-border hover:border-foreground transition-colors group cursor-pointer"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              {/* Top line - becomes top of X when open, horizontal when closed */}
              <motion.span
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  translateY: isMenuOpen ? 0 : -4,
                }}
                transition={{ duration: 0.3 }}
                className={`absolute block w-5 h-0.5 origin-center transition-colors duration-300 ${
                  isMenuOpen ? "bg-background" : "bg-foreground"
                }`}
              />
              {/* Middle line - hidden when open, visible as middle line when closed */}
              <motion.span
                animate={{
                  opacity: isMenuOpen ? 0 : 1,
                  scaleX: isMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
                className={`absolute block w-5 h-0.5 origin-center transition-colors duration-300 ${
                  isMenuOpen ? "bg-background" : "bg-foreground"
                }`}
              />
              {/* Bottom line - becomes bottom of X when open, horizontal when closed */}
              <motion.span
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  translateY: isMenuOpen ? 0 : 4,
                }}
                transition={{ duration: 0.3 }}
                className={`absolute block w-5 h-0.5 origin-center transition-colors duration-300 ${
                  isMenuOpen ? "bg-background" : "bg-foreground"
                }`}
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Full screen menu */}
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
