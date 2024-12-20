"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, className }: NavLinkProps) {
  return (
    <Link 
      href={href} 
      className={cn(
        "px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
        className
      )}
    >
      {children}
    </Link>
  );
}