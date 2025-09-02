import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link
            href="/"
            className="font-headline text-2xl font-bold text-primary"
          >
            VK
          </Link>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Varun Kumar. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://github.com/varxnnnn"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/varun-kumar40"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
