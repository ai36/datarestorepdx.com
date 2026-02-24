"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./logo/Logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/90 backdrop-blur-lg border-b border-border/50 shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container-narrow mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <Logo scrolled={scrolled} />

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn("text-sm font-medium text-muted-foreground hover:text-muted-foreground transition-colors duration-300", scrolled ? "text-foreground" : "text-white/80 hover:muted-foreground")}
            >
              {l.label}
            </a>
          ))}
          <Button
            size="sm"
            className="bg-accent text-accent-foreground hover:bg-accent/90 accent-glow"
          >
            Start Diagnostic
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className={cn("md:hidden text-foreground", scrolled ? "text-foreground" : "text-white/80")}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={cn("h-6 w-6 fixed top-5 right-6 z-45 transition-colors duration-300", mobileOpen ? "text-foreground hover:text-muted-foreground" : "text-white/80")} />
          ) : (
            <Menu className="h-6 w-6 hover:text-muted-foreground transition-colors duration-300" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-card/95 backdrop-blur-lg border-b border-border fixed inset-0 z-40 flex flex-col items-center justify-center gap-4 p-16"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button
            size="sm"
            className="px-6 mt-2 bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Start Diagnostic
          </Button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
