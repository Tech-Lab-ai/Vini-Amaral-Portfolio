"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, FileText, CreditCard, ShieldCheck, CheckCircle2, Wallet, Heart, Receipt } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const paymentMethods = [
  {
    name: "PIX",
    description: "Pagamento instantâneo com confirmação imediata.",
    icon: Zap,
    color: "text-emerald-400"
  },
  {
    name: "Boleto Bancário",
    description: "Opção prática e segura para pagamentos à vista.",
    icon: FileText,
    color: "text-blue-400"
  },
  {
    name: "Parcelado",
    description: "Possibilidade de parcelamento via Asaas conforme o serviço.",
    icon: CreditCard,
    color: "text-primary"
  }
];

export function PaymentMethods() {
  const [txId, setTxId] = useState<string | null>(null);

  useEffect(() => {
    // Gerar o ID apenas no cliente para evitar erro de hidratação
    setTxId(Math.floor(Math.random() * 999999).toString().padStart(6, '0'));
  }, []);

  return (
    <section id="payments" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-20">
          <div className="text-center space-y-6">
            <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 px-4 py-1">Billing & Checkout</Badge>
            <h2 className="text-5xl font-bold tracking-tighter">Fluxo de Contratação</h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Processamento seguro e transparente utilizando a infraestrutura do 
              <span className="text-foreground font-bold"> Asaas</span> para todas as transações financeiras.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {paymentMethods.map((method) => (
              <div key={method.name} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-b from-primary/20 to-transparent rounded-[2rem] blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <Card className="bg-card/40 backdrop-blur-3xl border-white/5 relative rounded-[2rem] overflow-hidden group-hover:bg-white/[0.03] transition-colors">
                  <CardHeader className="p-8">
                    <div className={`w-14 h-14 rounded-2xl bg-secondary/50 flex items-center justify-center ${method.color} mb-6 shadow-inner`}>
                      <method.icon className="w-7 h-7" />
                    </div>
                    <CardTitle className="text-2xl font-bold tracking-tight">{method.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <p className="text-muted-foreground text-sm leading-relaxed font-light">
                      {method.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="glass rounded-[3rem] p-8 md:p-16 border-white/5 shadow-2xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
            
            <div className="grid md:grid-cols-2 gap-20 items-center relative z-10">
              <div className="space-y-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-primary">
                    <ShieldCheck className="w-10 h-10" />
                    <h3 className="text-3xl font-bold tracking-tighter">Compliance & Security</h3>
                  </div>
                  <p className="text-muted-foreground text-lg font-light leading-relaxed">
                    Todas as etapas de faturamento são gerenciadas seguindo padrões de segurança bancária.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {[
                    "Criptografia de ponta a ponta",
                    "Webhooks de confirmação automática",
                    "Emissão de notas fiscais e recibos",
                    "Ambiente certificado PCI DSS"
                  ].map((adv) => (
                    <div key={adv} className="flex items-center gap-4 group">
                      <div className="w-6 h-6 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-all">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">{adv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-[2.5rem] bg-black/40 border border-white/10 shadow-inner space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Receipt className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase text-muted-foreground">Provider</p>
                      <p className="text-sm font-bold">Asaas Pagamentos</p>
                    </div>
                  </div>
                  <Badge className="bg-emerald-500/20 text-emerald-400 border-none px-3 py-1 font-bold text-[10px]">API ONLINE</Badge>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
                  <p className="text-xs text-muted-foreground italic leading-relaxed">
                    "O apoio a projetos open-source e freelance de alta performance ajuda a manter a inovação constante."
                  </p>
                  <Button asChild className="w-full h-14 rounded-2xl bg-accent text-accent-foreground hover:scale-[1.02] transition-all font-bold text-md shadow-lg shadow-accent/20">
                    <Link href="https://www.asaas.com/c/2h5zwl883x3g3erc" target="_blank">
                      <Heart className="w-5 h-5 mr-2 fill-current" /> Apoiar Desenvolvimento
                    </Link>
                  </Button>
                </div>
                
                <div className="text-center">
                  <p className="text-[10px] text-muted-foreground font-code uppercase tracking-widest">
                    ID Transação: CF-{txId || '......'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}