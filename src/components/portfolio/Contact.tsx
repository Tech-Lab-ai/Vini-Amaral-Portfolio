
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const contacts = [
  {
    name: "Email",
    value: "contact@viniamaral.com",
    href: "mailto:contact@viniamaral.com",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/viniamaral",
    href: "https://linkedin.com/in/viniamaral",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    value: "github.com/Tech-Lab-ai",
    href: "https://github.com/Tech-Lab-ai",
    icon: Github,
  },
  {
    name: "Facebook",
    value: "facebook.com/Vini.Amaral.Oficial",
    href: "https://www.facebook.com/Vini.Amaral.Oficial",
    icon: Facebook,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">Entre em contato</h2>
                <p className="text-muted-foreground text-lg">
                  Procurando um desenvolvedor sênior para seu próximo projeto, ou quer apenas conversar 
                  sobre arquitetura de software e IA? Vamos nos conectar.
                </p>
              </div>

              <div className="space-y-6">
                {contacts.map((contact) => (
                  <Link
                    key={contact.name}
                    href={contact.href}
                    target="_blank"
                    className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border transition-all hover:bg-primary/5 hover:border-primary/50 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <contact.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{contact.name}</p>
                      <p className="text-lg font-semibold">{contact.value}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-[40px] rotate-3 -z-10" />
              <div className="h-full bg-card border border-border p-8 md:p-12 rounded-[40px] flex flex-col justify-center gap-8">
                <h3 className="text-2xl font-bold">Pronto para decolar?</h3>
                <p className="text-muted-foreground">
                  Seja um MVP do zero, uma migração de sistema complexa 
                  ou integração de IA, trago a senioridade necessária para entregar 
                  software pronto para produção.
                </p>
                <Button size="lg" className="w-full rounded-full py-8 text-lg" asChild>
                  <Link href="mailto:contact@viniamaral.com">
                    Iniciar uma Conversa
                  </Link>
                </Button>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Disponível para oportunidades freelance e permanentes em todo o mundo.
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
