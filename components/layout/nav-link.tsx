"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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
      "px-4 py-2 text-sm font-medium transition-all relative inline-block hover:scale-105",
      "after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:bottom-0",
      "hover:after:w-full after:transition-all after:duration-300",
      className
      )}
    >
      {children}
    </Link>
  );
}
