import { CheckCircle2, Cpu, Code2, Cloud, Database, BrainCircuit } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skillGroups = [
  { 
    name: "Platform", 
    items: ["Firebase", "Google Cloud", "AWS", "Docker"], 
    icon: Cloud,
    color: "text-primary"
  },
  { 
    name: "Engineering", 
    items: ["React", "Next.js", "TypeScript", "Tailwind"], 
    icon: Code2,
    color: "text-blue-400"
  },
  { 
    name: "Backend", 
    items: ["Go", "Node.js", "PostgreSQL", "gRPC"], 
    icon: Database,
    color: "text-emerald-400"
  },
  { 
    name: "Intelligence", 
    items: ["Genkit", "LLMs", "Vertex AI", "Vector Search"], 
    icon: BrainCircuit,
    color: "text-accent"
  },
];

export function About() {
  return (
    <section id="about" className="py-32 bg-secondary/10 relative overflow-hidden">
      {/* Decorative side line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="border-primary/30 text-primary">Technical Philosophy</Badge>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Code is for Humans, <br /><span className="text-primary">Logic is for Machines.</span></h2>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-body">
              <p>
                I am a Senior Software Engineer dedicated to crafting systems that are 
                as elegant in their architecture as they are performant in their execution. 
                My focus lies at the intersection of modern cloud infrastructure and 
                generative intelligence.
              </p>
              <p>
                Leveraging the Google Cloud ecosystem, I build applications that 
                auto-scale to meet demand while maintaining the security and 
                observability required for enterprise production.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-4">
              {[
                "Strategic Cloud Architecture",
                "High-Precision Go Microservices",
                "AI Agent Orchestration",
                "Type-Safe Frontend Systems"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-semibold tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            {/* Background glow for cards */}
            <div className="absolute inset-0 bg-primary/5 blur-[100px] -z-10" />
            
            {skillGroups.map((group) => (
              <div key={group.name} className="p-8 rounded-3xl bg-card/40 backdrop-blur-md border border-white/5 hover:border-primary/20 transition-all group shadow-xl">
                <div className={`w-12 h-12 rounded-2xl bg-secondary/50 flex items-center justify-center ${group.color} mb-6 group-hover:scale-110 transition-transform`}>
                  <group.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">{group.name}</h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
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
