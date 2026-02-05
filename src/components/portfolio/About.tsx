import { CheckCircle2, Cpu, Code2, Cloud, Database, BrainCircuit, ShieldCheck, Box } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skillGroups = [
  { 
    name: "Infrastructure", 
    items: ["Firebase", "Google Cloud", "AWS", "Docker", "Terraform"], 
    icon: Cloud,
    color: "text-primary"
  },
  { 
    name: "Engineering", 
    items: ["React", "Next.js", "TypeScript", "Tailwind", "Shadcn"], 
    icon: Code2,
    color: "text-blue-400"
  },
  { 
    name: "Systems Backend", 
    items: ["Golang", "Node.js", "PostgreSQL", "gRPC", "Redis"], 
    icon: Database,
    color: "text-emerald-400"
  },
  { 
    name: "AI & Intelligence", 
    items: ["Genkit", "LLMs", "Vertex AI", "Vector Search", "RAG"], 
    icon: BrainCircuit,
    color: "text-accent"
  },
];

export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-secondary/5">
      {/* Structural Decoration */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 px-4 py-1 uppercase tracking-widest text-[10px] font-bold">
                Technical Stack
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-none">
                Engenharia que <br />
                <span className="text-primary">Escala Humanos.</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                Não apenas escrevo código; construo ecossistemas resilientes. Minha filosofia foca na entrega de software que resolve problemas complexos com simplicidade arquitetural.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {[
                { title: "Arquitetura Cloud", desc: "Sistemas distribuídos e resilientes.", icon: Box },
                { title: "Sistemas IA", desc: "Integração nativa de modelos generativos.", icon: BrainCircuit },
                { title: "Segurança", desc: "Práticas de devsecops por padrão.", icon: ShieldCheck },
                { title: "Performance", desc: "Foco em baixa latência e alta carga.", icon: Zap }
              ].map((feature, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/50 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all shadow-sm">
                    {feature.icon && <feature.icon className="w-5 h-5 text-primary" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-[2rem] glass border-white/5 shadow-2xl space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <h4 className="font-bold uppercase tracking-tighter text-xs">Foco Profissional</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Minha senioridade permite atuar desde a concepção do produto até o provisionamento de infraestrutura em larga escala, garantindo que o software esteja sempre pronto para o mercado.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            <div className="absolute inset-0 bg-primary/5 blur-[120px] -z-10" />
            
            {skillGroups.map((group) => (
              <div key={group.name} className="p-8 rounded-[2rem] glass hover:bg-white/5 border-white/5 hover:border-primary/30 transition-all group shadow-xl hover:-translate-y-2 duration-500">
                <div className={`w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center ${group.color} mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-inner`}>
                  <group.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-6 tracking-tight">{group.name}</h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Zap(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  );
}