
import Link from "next/link";
import Image from "next/image";
import { Heart, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 border-t border-border mt-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="block">
              <Image 
                src="/logo_vini.png" 
                alt="Vini Amaral" 
                width={180} 
                height={45} 
                className="h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity dark:invert-0 invert"
              />
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left leading-relaxed max-w-xs">
              © {currentYear} Vini Amaral. <br />
              Engenharia de software de alta performance com foco em IA e Cloud.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary">Navegação</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-muted-foreground">
              <Link href="#about" className="hover:text-foreground transition-colors flex items-center gap-1">Engenharia <ArrowUpRight className="w-3 h-3" /></Link>
              <Link href="#projects" className="hover:text-foreground transition-colors flex items-center gap-1">Projetos <ArrowUpRight className="w-3 h-3" /></Link>
              <Link href="#payments" className="hover:text-foreground transition-colors flex items-center gap-1">Pagamentos <ArrowUpRight className="w-3 h-3" /></Link>
              <Link href="#contact" className="hover:text-foreground transition-colors flex items-center gap-1">Contato <ArrowUpRight className="w-3 h-3" /></Link>
            </div>
          </div>

          {/* Call to Action - Apoio */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent">Apoie o Desenvolvimento</h4>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Contribua para manter meus projetos open-source e experimentais ativos.
            </p>
            <Link 
              href="https://www.asaas.com/c/2h5zwl883x3g3erc" 
              target="_blank"
              className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-accent text-accent-foreground font-bold text-sm hover:scale-105 transition-all shadow-xl shadow-accent/20 group"
            >
              <Heart className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" /> Apoiar ou Contratar Agora
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-tighter text-muted-foreground/60">
            <Link href="https://wa.me/5551981446019" target="_blank" className="hover:text-primary transition-colors">WhatsApp</Link>
            <Link href="https://github.com/Tech-Lab-ai" target="_blank" className="hover:text-primary transition-colors">GitHub</Link>
            <Link href="https://www.linkedin.com/in/dev-vini-amaral/" target="_blank" className="hover:text-primary transition-colors">LinkedIn</Link>
          </div>
          <p className="text-[10px] font-code text-muted-foreground/40 uppercase tracking-[0.2em]">
            Status: System Operational // Next.js + Genkit AI
          </p>
        </div>

        {/* Seção de Pagamento Final */}
        <div className="mt-12 pt-8 flex flex-col items-center gap-4 text-center">
          <p className="text-[10px] font-bold text-muted-foreground/70 uppercase tracking-[0.2em]">
            Aceitamos os cartões em até 20 vezes
          </p>
          <div className="relative w-full max-w-[320px] h-12 transition-all duration-500">
            <Image 
              src="/bandeiras.png" 
              alt="Bandeiras de Cartão" 
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
