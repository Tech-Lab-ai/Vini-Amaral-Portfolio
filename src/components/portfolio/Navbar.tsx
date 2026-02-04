
"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail, Menu, Command, Facebook, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "Engenharia", href: "#about" },
  { name: "Projetos", href: "#projects" },
  { name: "Pagamento", href: "#payments" },
  { name: "Contato", href: "#contact" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="absolute inset-0 bg-background/70 backdrop-blur-xl border-b border-border/10 shadow-sm" />
      <div className="container mx-auto px-4 h-20 flex items-center justify-between relative">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Image 
              src="/logo_vini.png" 
              alt="Vini Amaral" 
              width={200} 
              height={50} 
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105 dark:invert-0 invert"
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
          
          <div className="h-6 w-px bg-border mx-2" />
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" size="icon" asChild className="rounded-full text-muted-foreground hover:text-primary">
              <Link href="https://wa.me/5551981446019" target="_blank">
                <MessageCircle className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="rounded-full text-muted-foreground hover:text-primary">
              <Link href="https://github.com/Tech-Lab-ai" target="_blank">
                <Github className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="rounded-full text-muted-foreground hover:text-primary">
              <Link href="https://www.linkedin.com/in/dev-vini-amaral/" target="_blank">
                <Linkedin className="w-5 h-5" />
              </Link>
            </Button>
            <Button size="sm" className="rounded-full px-5 bg-primary text-primary-foreground font-bold hover:opacity-90">
              <Link href="#contact">Contrate-me</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-secondary">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-l border-border w-[80%]">
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
                <div className="pt-10 border-t border-border space-y-6">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Social Intelligence</p>
                  <div className="flex items-center gap-4 flex-wrap">
                    <Link href="https://wa.me/5551981446019" target="_blank" className="p-3 bg-secondary rounded-2xl hover:text-primary transition-colors">
                      <MessageCircle className="w-7 h-7" />
                    </Link>
                    <Link href="https://github.com/Tech-Lab-ai" target="_blank" className="p-3 bg-secondary rounded-2xl hover:text-primary transition-colors">
                      <Github className="w-7 h-7" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/dev-vini-amaral/" target="_blank" className="p-3 bg-secondary rounded-2xl hover:text-primary transition-colors">
                      <Linkedin className="w-7 h-7" />
                    </Link>
                    <Link href="https://www.facebook.com/Vini.Amaral.Oficial" target="_blank" className="p-3 bg-secondary rounded-2xl hover:text-primary transition-colors">
                      <Facebook className="w-7 h-7" />
                    </Link>
                    <Link href="mailto:viniamaral2026@gmail.com" className="p-3 bg-secondary rounded-2xl hover:text-primary transition-colors">
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
