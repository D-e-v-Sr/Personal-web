"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { label: "Home", href: "/", number: "01" },
  { label: "About", href: "/about", number: "02" },
  { label: "Work", href: "/work", number: "03" },
  { label: "Skills", href: "/skills", number: "04" },
  { label: "Contact", href: "/contact", number: "05" },
];

const menuVariants = {
  closed: {
    clipPath: "circle(0% at calc(100% - 40px) 40px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  open: {
    clipPath: "circle(150% at calc(100% - 40px) 40px)",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
};

const linkVariants = {
  closed: { 
    opacity: 0, 
    y: 50,
    rotateX: -90,
  },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

const lineVariants = {
  closed: { scaleX: 0 },
  open: (i: number) => ({
    scaleX: 1,
    transition: {
      delay: 0.4 + i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export function Menu({ isOpen, onClose }: MenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-foreground"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          <div className="h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20">
            <nav className="space-y-2">
              {navItems.map((item, i) => (
                <div key={item.href} className="overflow-hidden perspective-1000">
                  <motion.div
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-center gap-4 md:gap-8 py-1 md:py-2"
                    >
                      <span className="text-xs md:text-sm font-mono text-background/40">
                        {item.number}
                      </span>
                      <span className="relative">
                        <span
                          className={`text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter transition-all duration-500 ${
                            pathname === item.href
                              ? "text-background"
                              : "text-background/60 group-hover:text-background"
                          }`}
                        >
                          {item.label}
                        </span>
                        {/* Hover line effect */}
                        <motion.span
                          className="absolute -bottom-2 left-0 h-[3px] bg-background origin-left"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                          style={{ width: "100%" }}
                        />
                      </span>
                      {pathname === item.href && (
                        <motion.span
                          layoutId="activeIndicator"
                          className="w-3 h-3 rounded-full bg-background ml-4"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                    <motion.div
                      custom={i}
                      variants={lineVariants}
                      className="h-px bg-background/20 origin-left"
                    />
                  </motion.div>
                </div>
              ))}
            </nav>

            {/* Footer info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute bottom-4 left-8 md:left-16 lg:left-24 right-8 md:right-16 lg:right-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-2 text-background/60"
            >
              <div className="space-y-0.5">
                <p className="text-[10px] uppercase tracking-widest">Get in touch</p>
                <p className="text-xs">hello@example.com</p>
              </div>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-background transition-colors">
                  GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-background transition-colors">
                  LinkedIn
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-background transition-colors">
                  Twitter
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
