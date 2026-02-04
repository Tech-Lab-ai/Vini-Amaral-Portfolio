"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail, Menu, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { name: "Engine", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Activity", href: "#activity" },
  { name: "Connect", href: "#contact" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="absolute inset-0 bg-background/70 backdrop-blur-xl border-b border-white/5 shadow-2xl" />
      <div className="container mx-auto px-4 h-20 flex items-center justify-between relative">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Image 
              src="/logo_vini.png" 
              alt="Vini Amaral" 
              width={200} 
              height={50} 
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>
          
          <div className="h-6 w-px bg-white/10 mx-2" />
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild className="rounded-full text-muted-foreground hover:text-primary">
              <Link href="https://github.com/viniamaral" target="_blank">
                <Github className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="rounded-full text-muted-foreground hover:text-primary">
              <Link href="https://linkedin.com/in/viniamaral" target="_blank">
                <Linkedin className="w-5 h-5" />
              </Link>
            </Button>
            <Button size="sm" className="rounded-full px-5 bg-primary text-primary-foreground font-bold hover:opacity-90">
              <Link href="#contact">Hire Me</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-white/5">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-l border-white/10 w-[80%]">
              <div className="flex flex-col gap-10 mt-16">
                <div className="flex items-center gap-3 mb-4">
                  <Command className="w-8 h-8 text-primary" />
                  <span className="text-xl font-bold tracking-tighter">VINI.DEV</span>
                </div>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-3xl font-bold tracking-tight text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-10 border-t border-white/5 space-y-6">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Social Intelligence</p>
                  <div className="flex items-center gap-6">
                    <Link href="https://github.com/viniamaral" target="_blank" className="p-3 bg-secondary/50 rounded-2xl hover:text-primary transition-colors">
                      <Github className="w-7 h-7" />
                    </Link>
                    <Link href="https://linkedin.com/in/viniamaral" target="_blank" className="p-3 bg-secondary/50 rounded-2xl hover:text-primary transition-colors">
                      <Linkedin className="w-7 h-7" />
                    </Link>
                    <Link href="mailto:contact@viniamaral.com" className="p-3 bg-secondary/50 rounded-2xl hover:text-primary transition-colors">
                      <Mail className="w-7 h-7" />
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
