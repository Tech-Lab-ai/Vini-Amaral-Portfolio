
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, ArrowRight, Sparkles, MessageCircle, Code2, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden relative">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/30 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-accent/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 space-y-10 text-center lg:text-left">
            <div className="space-y-6">
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <Badge variant="outline" className="py-1 px-4 border-primary/40 text-primary bg-primary/10 backdrop-blur-sm font-bold">
                  <Sparkles className="w-3.5 h-3.5 mr-2" /> Engenheiro de Software Sênior
                </Badge>
                <Badge variant="outline" className="py-1 px-4 border-accent/40 text-accent bg-accent/10 backdrop-blur-sm font-bold">
                  <Cpu className="w-3.5 h-3.5 mr-2" /> Especialista em IA & Cloud
                </Badge>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold font-headline leading-[1] tracking-tighter">
                Cloud-Native <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-accent glow-text">
                  Infrastructure
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto lg:mx-0 font-body leading-relaxed font-light">
                Projetando arquiteturas escaláveis e agentes inteligentes que definem a próxima geração de aplicações web e cloud.
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-5">
              <Button asChild size="lg" className="rounded-2xl px-10 h-14 text-lg shadow-xl shadow-primary/30 hover:scale-105 transition-all bg-primary hover:bg-primary/90 text-white font-bold">
                <Link href="#projects">
                  Explorar Projetos <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-2xl px-10 h-14 text-lg glass hover:bg-white/20 transition-all font-bold">
                <Link href="#contact">
                  Consulte Disponibilidade
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-border/50">
              <div className="flex gap-4">
                {[
                  { icon: MessageCircle, href: "https://wa.me/5551981446019" },
                  { icon: Github, href: "https://github.com/Tech-Lab-ai" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/dev-vini-amaral/" }
                ].map((social, i) => (
                  <Link 
                    key={i} 
                    href={social.href} 
                    target="_blank" 
                    className="w-12 h-12 rounded-2xl bg-secondary/80 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:-translate-y-1 shadow-md border border-white/10"
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="flex items-center gap-3 glass px-4 py-2 rounded-xl border-white/20 shadow-inner">
                <Code2 className="w-5 h-5 text-accent animate-pulse" />
                <span className="font-code text-sm font-semibold tracking-tight text-accent lowercase">go run main.go --deploy</span>
              </div>
            </div>
          </div>

          <div className="relative group w-full max-w-[580px] lg:flex-1">
            {/* Visual Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/50 to-accent/50 rounded-[3rem] blur-3xl opacity-30 group-hover:opacity-40 transition-opacity duration-700" />
            
            <div className="relative aspect-square w-full rounded-[2.5rem] overflow-hidden border border-white/20 p-1.5 bg-white/5 backdrop-blur-3xl shadow-[0_0_100px_-20px_rgba(3,155,229,0.4)] flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.02]">
              <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden bg-muted/10 flex items-center justify-center p-12">
                <Image
                  src="/techlab.png"
                  alt="Tech Lab AI"
                  fill
                  className="object-contain brightness-110 saturate-[1.1] p-12"
                  priority
                />
                
                {/* Minimalist Floating Status Badges */}
                <div className="absolute top-6 right-6 p-3 glass rounded-2xl border-white/20 shadow-2xl animate-float z-20">
                   <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/30 flex items-center justify-center">
                        <Cpu className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-[8px] font-bold uppercase text-primary/80 leading-none">Status</p>
                        <p className="text-[10px] font-bold text-foreground">Sistemas OK</p>
                      </div>
                   </div>
                </div>

                <div className="absolute bottom-6 left-6 p-4 glass rounded-2xl border-white/20 shadow-2xl z-20">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                      <p className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest">Live: Production</p>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-10 h-1 bg-primary/40 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-primary" />
                      </div>
                      <div className="w-10 h-1 bg-accent/40 rounded-full overflow-hidden">
                        <div className="w-1/2 h-full bg-accent" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
