"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Ensure component is mounted to avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="relative h-9 w-9">
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative h-9 w-9 overflow-hidden"
      onClick={toggleTheme}
    >
      <div className="relative h-full w-full">
        <motion.div
          initial={false}
          animate={{
            y: theme === "dark" ? -30 : 0,
            opacity: theme === "dark" ? 0 : 1,
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            y: theme === "dark" ? 0 : 30,
            opacity: theme === "dark" ? 1 : 0,
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="h-[1.2rem] w-[1.2rem] text-blue-500" />
        </motion.div>
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}