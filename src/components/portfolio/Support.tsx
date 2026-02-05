
"use client";

import { Heart, Rocket, Coffee, ArrowRight, ShieldCheck, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const benefits = [
  {
    icon: Rocket,
    title: "Acelere a Inovação",
    desc: "Seu apoio financia o desenvolvimento de ferramentas como o CloudForge-CLI."
  },
  {
    icon: Coffee,
    title: "Mantenha o Open Source",
    desc: "Ajude a manter servidores e infraestrutura de projetos experimentais ativos."
  },
  {
    icon: Globe,
    title: "Impacto Global",
    desc: "Contribua para soluções de software que ajudam devs em todo o mundo."
  }
];

export function Support() {
  return (
    <section id="support" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl -z-10">
        <div className="absolute inset-0 bg-accent/20 rounded-full blur-[150px] animate-pulse" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass rounded-[3.5rem] p-8 md:p-16 border-white/20 shadow-2xl relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4 text-left">
                  <Badge variant="outline" className="border-accent/50 text-accent bg-accent/10 px-4 py-1 uppercase text-[10px] font-bold tracking-[0.2em]">
                    Sponsorship Program
                  </Badge>
                  <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none">
                    Apoie a <br />
                    <span className="text-accent">Próxima Versão.</span>
                  </h2>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-md">
                    Se você utiliza meus projetos ou acredita na minha visão de engenharia, considere fazer uma contribuição para manter o ecossistema ativo.
                  </p>
                </div>

                <div className="space-y-6">
                  {benefits.map((item, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 shadow-lg border border-accent/20">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-sm">{item.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/10 dark:bg-white/[0.05] backdrop-blur-3xl border border-white/20 space-y-8 relative z-10">
                  <div className="text-center space-y-2">
                    <p className="text-xs font-bold text-accent uppercase tracking-widest">Contribuição Única ou Mensal</p>
                    <p className="text-3xl font-bold tracking-tighter">Torne-se um Sponsor</p>
                  </div>

                  <div className="space-y-4">
                    <Button size="lg" className="w-full rounded-2xl py-8 text-lg bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-xl shadow-accent/20 group" asChild>
                      <Link href="https://www.asaas.com/c/2h5zwl883x3g3erc" target="_blank">
                        Apoiar Agora <Heart className="ml-2 w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
                      </Link>
                    </Button>
                    
                    <div className="flex items-center justify-center gap-4 py-2 opacity-60">
                      <div className="h-px flex-1 bg-white/10" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Segurança Asaas</span>
                      <div className="h-px flex-1 bg-white/10" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                          <ShieldCheck className="w-4 h-4 text-accent" />
                          <span className="text-[9px] font-bold uppercase tracking-tighter">100% Seguro</span>
                       </div>
                       <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                          <Zap className="w-4 h-4 text-accent" />
                          <span className="text-[9px] font-bold uppercase tracking-tighter">Instante OK</span>
                       </div>
                    </div>
                  </div>

                  <p className="text-[10px] text-center text-muted-foreground font-light leading-relaxed">
                    Sua contribuição ajuda diretamente na manutenção de repositórios e criação de conteúdo técnico gratuito.
                  </p>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/30 rounded-full blur-2xl -z-10 animate-pulse" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
