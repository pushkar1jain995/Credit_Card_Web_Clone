"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CreditCard, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { NavLink } from "@/components/layout/nav-link";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { cn } from "@/lib/utils";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { FloatingNav } from "@/components/ui/floating-navbar";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b shadow-sm"
            : "bg-transparent"
        )}
      >
        <Container>
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <NavLink
              href="/"
              className="flex items-center space-x-2 text-primary"
            >
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              >
                <CreditCard className="h-6 w-6" />
                <span className="font-bold text-xl">CreditPro</span>
              </HoverBorderGradient>
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-3 gap-2">
              <NavLink href="/products">Products</NavLink>
              <NavLink href="/benefits">Benefits</NavLink>
              <NavLink href="/support">Support</NavLink>
            </div>
              <div className="ml-4 flex items-center space-x-4">
                <ThemeToggle />
                <Button disabled={loading}>Apply Now</Button>
              </div>
            {/* </div> */}

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <button
                className="p-2 hover:bg-accent rounded-lg"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </nav>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed right-0 top-0 bottom-0 w-3/4 max-w-sm bg-background border-l"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col p-6 space-y-4">
                <NavLink href="/products">Products</NavLink>
                <NavLink href="/benefits">Benefits</NavLink>
                <NavLink href="/support">Support</NavLink>
                <Button disabled={loading} className="w-full mt-4">
                  Apply Now
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
