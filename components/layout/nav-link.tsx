"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, className }: NavLinkProps) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const isActive = pathname === href;

  const handleClick = () => {
    setIsLoading(true);
  };

  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  return (
    <Link
      href={href}
      className={cn(
        "relative px-4 py-2 text-sm font-medium transition-colors duration-200",
        "group hover:text-primary",
        isActive ? "text-primary" : "text-foreground/80",
        className
      )}
      onClick={handleClick}
    >
      {/* Hover effect background */}
      <span className="absolute inset-0 bg-primary/5 rounded-lg scale-0 transition-transform duration-200 group-hover:scale-100" />

      {/* Text content or loading spinner */}
      <span className="relative z-10">
        {isLoading ? (
          <div className="flex items-center justify-center w-full h-full">
            <svg
              className="animate-spin h-4 w-4 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        ) : (
          children
        )}
      </span>

      {/* Active indicator */}
      {isActive && (
        <motion.div
          layoutId="activeNavLink"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/80 via-primary to-primary/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}

      {/* Hover indicator */}
      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary/50 scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
    </Link>
  );
}
