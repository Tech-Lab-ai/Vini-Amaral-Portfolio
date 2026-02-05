
"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, FileText, CreditCard, ShieldCheck, CheckCircle2, Wallet, Heart, Receipt, Info, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const paymentMethods = [
  {
    name: "PIX",
    description: "Pagamento instantâneo com confirmação imediata. Ideal para início rápido de projetos.",
    icon: Zap,
    color: "text-emerald-400"
  },
  {
    name: "Boleto Bancário",
    description: "Opção tradicional e segura para pagamentos à vista com registro em sistema.",
    icon: FileText,
    color: "text-blue-400"
  },
  {
    name: "Cartão & Parcelado",
    description: "Possibilidade de parcelamento via Asaas conforme a modalidade do serviço.",
    icon: CreditCard,
    color: "text-primary"
  }
];

export function PaymentMethods() {
  const [txId, setTxId] = useState<string | null>(null);

  useEffect(() => {
    setTxId(Math.floor(Math.random() * 999999).toString().padStart(6, '0'));
  }, []);

  return (
    <section id="payments" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-20">
          <div className="text-center space-y-6">
            <Badge variant="outline" className="border-primary/40 text-primary bg-primary/10 px-4 py-1 uppercase text-[10px] font-bold tracking-widest">Billing & Checkout</Badge>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">Fluxo de Contratação</h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Processamento seguro e transparente utilizando a infraestrutura do 
              <span className="text-foreground font-bold"> Asaas</span> para todas as nossas transações financeiras.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {paymentMethods.map((method) => (
              <div key={method.name} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-b from-primary/30 to-transparent rounded-[2rem] blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <Card className="bg-card/60 backdrop-blur-3xl border-white/20 relative rounded-[2rem] overflow-hidden group-hover:bg-white/[0.05] transition-colors h-full shadow-2xl">
                  <CardHeader className="p-8">
                    <div className={`w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center ${method.color} mb-6 shadow-inner border border-white/5`}>
                      <method.icon className="w-7 h-7" />
                    </div>
                    <CardTitle className="text-2xl font-bold tracking-tight">{method.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <p className="text-foreground/80 text-sm leading-relaxed font-light">
                      {method.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="glass rounded-[3rem] p-8 md:p-16 border-white/20 shadow-2xl relative overflow-hidden bg-white/[0.03]">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
              <div className="space-y-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-primary">
                    <ShieldCheck className="w-12 h-12" />
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground">Compliance & Segurança</h3>
                  </div>
                  <p className="text-muted-foreground text-lg font-light leading-relaxed">
                    Cada etapa do faturamento é gerenciada sob padrões rigorosos de segurança bancária, garantindo proteção total para ambas as partes.
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Criptografia ponta a ponta",
                    "Webhooks de confirmação",
                    "Emissão de Notas Fiscais",
                    "Ambiente Certificado PCI",
                    "Transparência em taxas",
                    "Suporte direto ao pagador"
                  ].map((adv) => (
                    <div key={adv} className="flex items-center gap-3 group">
                      <div className="w-6 h-6 rounded-lg bg-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/30 transition-all border border-emerald-500/20">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <span className="text-xs font-bold text-foreground/70 uppercase tracking-tighter">{adv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-1 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent shadow-2xl">
                <div className="p-8 md:p-10 rounded-[2.4rem] bg-black/60 backdrop-blur-3xl border border-white/10 space-y-8 h-full">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/20 shadow-lg shadow-primary/10">
                        <Receipt className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Gateway Provider</p>
                        <p className="text-sm font-bold text-foreground">Asaas Instituição de Pagamento</p>
                      </div>
                    </div>
                    <Badge className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1 font-bold text-[10px] animate-pulse">API ONLINE</Badge>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-8 relative group">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground/80 italic leading-relaxed font-light">
                        "Utilizo o Asaas para garantir que você tenha a melhor experiência de checkout, com confirmações automáticas e segurança bancária em cada centavo."
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <Button asChild size="lg" className="w-full h-16 rounded-2xl bg-accent text-accent-foreground hover:scale-[1.02] transition-all font-bold text-lg shadow-xl shadow-accent/20 border-none group">
                        <Link href="https://www.asaas.com/c/2h5zwl883x3g3erc" target="_blank">
                          <Heart className="w-6 h-6 mr-2 fill-current group-hover:scale-110 transition-transform" /> 
                          Apoiar ou Contratar Agora
                        </Link>
                      </Button>
                      <p className="text-center text-[10px] text-muted-foreground/60 uppercase font-bold tracking-[0.2em] flex items-center justify-center gap-2">
                        <ArrowRight className="w-3 h-3" /> Link de Checkout Seguro Asaas
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-center pt-2">
                    <p className="text-[10px] text-muted-foreground/40 font-code uppercase tracking-[0.3em] flex items-center justify-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(3,155,229,0.8)]" />
                      Transaction Reference: CF-{txId || '......'}
                    </p>
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
