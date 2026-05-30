"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "./menu";

export function Header() {
  const pathname = usePathname();

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          // Remove scrolled background since menu is now on the side
          ""
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
                className="text-lg font-bold tracking-tight transition-colors duration-300 text-foreground"
              >
                Sharaf
              </span>
              <span
                className="text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 text-muted-foreground"
              >
                Full Stack Dev
              </span>
            </motion.div>
          </Link>

          {/* Removed hamburger/menu button since we now have a persistent vertical menu */}
        </div>
      </motion.header>

      {/* Persistent dock menu at the bottom center */}
      <Menu />
    </>
  );
}