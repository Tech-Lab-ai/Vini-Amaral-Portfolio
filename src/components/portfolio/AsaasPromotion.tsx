import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, ShieldCheck, Code2, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const benefits = [
  {
    title: "Automação de Ponta a Ponta",
    description: "Gestão completa de cobranças, notificações automáticas e conciliação bancária sem esforço manual.",
    icon: Zap
  },
  {
    title: "Segurança de Nível Bancário",
    description: "Infraestrutura certificada PCI-DSS e compliance rigoroso para garantir a proteção de cada transação.",
    icon: ShieldCheck
  },
  {
    title: "Experiência Developer-First",
    description: "API RESTful intuitiva, webhooks estáveis e documentação de classe mundial para integrações rápidas.",
    icon: Code2
  },
  {
    title: "Escalabilidade Real",
    description: "Desde o primeiro MVP até sistemas de alto volume, o Asaas suporta o crescimento do seu ecossistema.",
    icon: Rocket
  }
];

export function AsaasPromotion() {
  return (
    <section id="asaas-partner" className="py-32 relative overflow-hidden bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="border-blue-500/40 text-blue-400 bg-blue-500/5 px-4 py-1 uppercase text-[10px] font-bold tracking-widest">
                  Parceiro de Infraestrutura
                </Badge>
                <h2 className="text-5xl font-bold tracking-tighter leading-tight">
                  Potencialize seu Produto com a <span className="text-blue-500">API do Asaas</span>
                </h2>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  A infraestrutura de pagamentos que eu confio e utilizo em meus projetos de engenharia. 
                  Uma solução completa para automatizar sua gestão financeira.
                </p>
              </div>

              <div className="grid gap-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button size="lg" className="rounded-full px-8 py-7 text-lg bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-600/20 group" asChild>
                  <Link href="https://www.asaas.com/r/a2b5b096-28fb-4917-9ced-1a2fb9cf92c1" target="_blank">
                    Começar a Integrar Agora <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-500/15 rounded-full blur-[120px] -z-10" />
              <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center">
                <Image 
                  src="/assas-.png" 
                  alt="Asaas Logo" 
                  fill 
                  className="object-contain"
                  priority
                />
              </div>
              
              {/* Floating Element - Agora mais discreto e posicionado em relação à logo */}
              <div className="absolute bottom-0 right-0 glass p-4 rounded-2xl border-white/10 shadow-2xl animate-float hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-[8px] font-bold uppercase text-muted-foreground leading-none">Uptime</p>
                    <p className="text-xs font-bold text-foreground">99.99%</p>
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
