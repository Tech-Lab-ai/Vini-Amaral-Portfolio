import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, FileText, CreditCard, ShieldCheck, CheckCircle2, Wallet, Heart } from "lucide-react";
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
    name: "Boleto Parcelado",
    description: "Possibilidade de parcelamento conforme o serviço.",
    icon: CreditCard,
    color: "text-primary"
  }
];

const advantages = [
  "Ambiente de pagamento 100% seguro",
  "Confirmação automática de transações",
  "Parcelamento facilitado conforme disponibilidade",
  "Transparência total em todas as etapas"
];

export function PaymentMethods() {
  return (
    <section id="payments" className="py-24 bg-secondary/10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="border-primary/30 text-primary">Transações Seguras</Badge>
            <h2 className="text-4xl font-bold tracking-tight">Formas de Pagamento</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Para facilitar a contratação e garantir segurança, utilizamos a plataforma 
              <span className="text-foreground font-semibold"> Asaas</span>, referência em pagamentos digitais no Brasil.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {paymentMethods.map((method) => (
              <Card key={method.name} className="bg-card/40 backdrop-blur-sm border-white/5 hover:border-primary/20 transition-all">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center ${method.color} mb-2`}>
                    <method.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{method.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {method.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/10 rounded-[32px] p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-primary">
                  <ShieldCheck className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Vantagens e Segurança</h3>
                </div>
                <div className="grid gap-4">
                  {advantages.map((adv) => (
                    <div key={adv} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{adv}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass rounded-2xl p-6 border shadow-2xl space-y-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Status do Provedor</span>
                  <Badge className="bg-emerald-500/20 text-emerald-400 border-none">Operacional</Badge>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Wallet className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Asaas Pagamentos</p>
                    <p className="text-xs text-muted-foreground">Processamento via API segura</p>
                  </div>
                </div>
                <div className="pt-4 space-y-4">
                  <p className="text-xs text-muted-foreground italic">
                    * Gostou do meu trabalho? Você também pode apoiar meus projetos open-source.
                  </p>
                  <Button asChild className="w-full rounded-full bg-accent text-accent-foreground hover:opacity-90 font-bold">
                    <Link href="https://www.asaas.com/c/2h5zwl883x3g3erc" target="_blank">
                      <Heart className="w-4 h-4 mr-2 fill-current" /> Fazer uma Doação / Apoiar
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
