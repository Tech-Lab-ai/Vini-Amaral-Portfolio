"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Activity", href: "#activity" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo_vini.png" 
            alt="Vini Amaral" 
            width={160} 
            height={40} 
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-border">
            <Link href="https://github.com/viniamaral" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="https://linkedin.com/in/viniamaral" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-l w-[80%] max-sm:w-full">
              <div className="flex flex-col gap-8 mt-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-2xl font-headline font-semibold text-foreground"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex items-center gap-6 pt-8 border-t border-border">
                  <Link href="https://github.com/viniamaral" target="_blank">
                    <Github className="w-6 h-6" />
                  </Link>
                  <Link href="https://linkedin.com/in/viniamaral" target="_blank">
                    <Linkedin className="w-6 h-6" />
                  </Link>
                  <Link href="mailto:contact@viniamaral.com">
                    <Mail className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
