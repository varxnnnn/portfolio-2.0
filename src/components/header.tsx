"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
  { href: "/resume.pdf", label: "Resume", isExternal: true },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNavLink = (link: (typeof navLinks)[0], isMobile = false) => {
    const className = isMobile
      ? "text-lg font-medium text-foreground/80 transition-colors hover:text-primary flex items-center gap-2"
      : "text-sm font-medium text-foreground/80 transition-colors hover:text-primary flex items-center gap-1.5";
    return (
      <Link
        key={link.href}
        href={link.href}
        className={className}
        target={link.isExternal ? "_blank" : undefined}
        rel={link.isExternal ? "noopener noreferrer" : undefined}
      >
        {link.label}
        {link.isExternal && <ExternalLink className="h-4 w-4" />}
      </Link>
    );
  };
  
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="font-headline text-4xl font-bold text-primary"
        >
          VK
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => renderNavLink(link))}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link
                  href="/"
                  className="font-headline text-3xl font-bold text-primary"
                >
                  VK
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => renderNavLink(link, true))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
