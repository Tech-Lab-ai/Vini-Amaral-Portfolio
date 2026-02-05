import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Layers, Zap, Bot, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const projects = [
  {
    id: "project-1",
    title: "InsightAI Engine",
    description: "Pipeline RAG de nível empresarial usando Google Vertex AI e Vector Search para inteligência de documentos em tempo real.",
    tags: ["Genkit", "Vertex AI", "Next.js", "Firebase"],
    icon: Bot,
    github: "https://github.com/Tech-Lab-ai/InsightAI-Engine.git",
    demo: "#",
    metric: "99.9% Precisão RAG"
  },
  {
    id: "project-2",
    title: "CloudForge CLI",
    description: "Uma ferramenta CLI especializada em Go para provisionamento automatizado de recursos em nuvem e sincronização de ambientes.",
    tags: ["Golang", "Cloud SDK", "gRPC", "Docker"],
    icon: Zap,
    github: "https://github.com/Tech-Lab-ai/CloudForge-CLI.git",
    demo: "#",
    metric: "0.2s Provisionamento"
  },
  {
    id: "project-3",
    title: "EventStreamer Pro",
    description: "Mecanismo de processamento de eventos de alto rendimento capaz de lidar com mais de 50k eventos/seg com latência mínima.",
    tags: ["Node.js", "PubSub", "Redis", "Cloud Run"],
    icon: Layers,
    github: "https://github.com/Tech-Lab-ai/EventStreamer-Pro.git",
    demo: "#",
    metric: "50k req/seg"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-24">
          <div className="space-y-6 max-w-2xl">
            <Badge variant="outline" className="border-accent/40 text-accent uppercase tracking-widest text-[10px] font-bold bg-accent/5 px-4 py-1">
              Showcase de Engenharia
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">Sistemas em Produção</h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Explorações avançadas em sistemas distribuídos e inteligência artificial. Cada projeto foca em alta disponibilidade e performance.
            </p>
          </div>
          <Button variant="ghost" className="group text-primary font-bold gap-2 hover:bg-primary/10 rounded-xl px-6 py-6" asChild>
            <Link href="https://github.com/Tech-Lab-ai" target="_blank">
              Todos os Repositórios <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => {
            const image = PlaceHolderImages.find((img) => img.id === project.id);
            return (
              <Card key={project.id} className="project-card-hover group border-white/5 bg-card/20 backdrop-blur-3xl flex flex-col h-full overflow-hidden rounded-[2.5rem] shadow-2xl">
                <div className="relative aspect-[16/10] overflow-hidden m-3 rounded-[1.8rem]">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-700 z-10" />
                  <Image
                    src={image?.imageUrl || ""}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    data-ai-hint={image?.imageHint}
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <div className="p-3 glass rounded-2xl border-white/10 shadow-2xl">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 z-20">
                    <Badge className="bg-black/60 backdrop-blur-md border-white/10 text-[10px] font-bold py-1 px-3">
                      {project.metric}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="space-y-4 px-8 pt-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-badge">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors tracking-tight">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1 px-8 pb-8">
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">
                    {project.description}
                  </p>
                </CardContent>
                
                <CardFooter className="px-8 py-6 border-t border-white/5 bg-white/[0.02] flex items-center justify-between">
                  <Link href={project.github} target="_blank" className="flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-4 h-4" /> Código Fonte
                  </Link>
                  <Button variant="ghost" size="sm" className="rounded-xl group/btn h-10 px-4 bg-primary/5 hover:bg-primary hover:text-white" asChild>
                    <Link href={project.demo} className="flex items-center gap-2 text-xs font-bold">
                      Acessar <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}