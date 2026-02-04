
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, ArrowRight, Terminal, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden relative hero-grid">
      {/* Abstract background shapes */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-accent/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <Badge variant="outline" className="py-1 px-4 border-primary/30 text-primary bg-primary/5 animate-in fade-in slide-in-from-bottom-3 duration-700">
                <Sparkles className="w-3.5 h-3.5 mr-2" /> Engenheiro de Software Sênior
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold font-headline leading-[1.1] tracking-tight">
                Engenharia de <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-accent glow-text">
                  Sistemas Escaláveis
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 font-body leading-relaxed">
                Desenvolvedor full-stack especializado em arquitetura de nuvem, 
                integração de IA e sistemas de alta performance. Construindo o futuro da web.
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                <Link href="#projects">
                  Ver Projetos <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 border-border bg-card/50 hover:bg-card">
                <Link href="#contact">
                  Contato
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-muted-foreground">
              <Link href="https://github.com/Tech-Lab-ai" target="_blank" className="hover:text-primary transition-colors flex items-center gap-2 text-sm">
                <Github className="w-5 h-5" /> <span className="hidden sm:inline">GitHub</span>
              </Link>
              <Link href="https://linkedin.com/in/viniamaral" target="_blank" className="hover:text-primary transition-colors flex items-center gap-2 text-sm">
                <Linkedin className="w-5 h-5" /> <span className="hidden sm:inline">LinkedIn</span>
              </Link>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-2 text-sm">
                <Terminal className="w-5 h-5 text-accent" />
                <span className="font-code text-accent/80">go build ./...</span>
              </div>
            </div>
          </div>

          <div className="relative group w-full max-w-[600px] lg:flex-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-3xl blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden border border-white/10 p-4 bg-card/30 backdrop-blur-xl shadow-2xl flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-700">
                <Image
                  src="/Marketing material i.png"
                  alt="Vini Amaral - Material de Marketing"
                  fill
                  className="object-cover rounded-2xl brightness-110"
                  priority
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 p-4 glass rounded-2xl border shadow-xl animate-bounce duration-[4000ms] z-20">
                <div className="w-6 h-6 text-primary">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 19H5v-9h3v9zm0-11H5V5h3v3zm5 11h-3v-9h3v9zm0-11h-3V5h3v3zm5 11h-3v-9h3v9zm0-11h-3V5h3v3z"/></svg>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 p-4 glass rounded-2xl border shadow-xl animate-pulse z-20">
                <div className="flex items-center gap-2 text-[10px] font-bold text-accent uppercase tracking-tighter">
                  <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
                  Sistema Ativo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
