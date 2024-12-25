"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, className }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href} 
      className={cn(
        "relative px-4 py-2 text-sm font-medium transition-colors duration-200",
        "group hover:text-primary",
        isActive ? "text-primary" : "text-foreground/80",
        className
      )}
    >
      {/* Hover effect background */}
      <span className="absolute inset-0 bg-primary/5 rounded-lg scale-0 transition-transform duration-200 group-hover:scale-100" />
      
      {/* Text content */}
      <span className="relative z-10">{children}</span>
      
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