
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Layers, Zap, Bot } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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
  },
  {
    id: "project-2",
    title: "CloudForge CLI",
    description: "Uma ferramenta CLI especializada em Go para provisionamento automatizado de recursos em nuvem e sincronização de ambientes.",
    tags: ["Golang", "Cloud SDK", "gRPC", "Docker"],
    icon: Zap,
    github: "https://github.com/Tech-Lab-ai/CloudForge-CLI.git",
    demo: "#",
  },
  {
    id: "project-3",
    title: "EventStreamer Pro",
    description: "Mecanismo de processamento de eventos de alto rendimento capaz de lidar com mais de 50k eventos/seg com latência mínima.",
    tags: ["Node.js", "PubSub", "Redis", "Cloud Run"],
    icon: Layers,
    github: "https://github.com/Tech-Lab-ai/EventStreamer-Pro.git",
    demo: "#",
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
          <div className="space-y-4 max-w-2xl">
            <Badge variant="outline" className="border-accent/30 text-accent uppercase tracking-widest text-[10px] font-bold">
              Portfólio
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Destaques de Engenharia</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Explorando a interseção entre performance e inteligência. Estes projetos 
              representam meu foco em arquitetura de nuvem em larga escala e integração de IA.
            </p>
          </div>
          <Link 
            href="https://github.com/Tech-Lab-ai" 
            target="_blank" 
            className="group flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-all"
          >
            Todos os Repositórios <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const image = PlaceHolderImages.find((img) => img.id === project.id);
            return (
              <Card key={project.id} className="project-card-hover group border-white/5 bg-card/30 backdrop-blur-md flex flex-col h-full overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <Image
                    src={image?.imageUrl || ""}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    data-ai-hint={image?.imageHint}
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <div className="p-2 glass rounded-lg border shadow-lg">
                      <project.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>
                
                <CardHeader className="space-y-4 pt-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-secondary/50 text-[10px] uppercase font-bold tracking-tight">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
                
                <CardFooter className="pb-6 pt-4 flex gap-6 border-t border-white/5 mx-6 px-0">
                  <Link href={project.github} target="_blank" className="flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors">
                    <Github className="w-4 h-4" /> Código Fonte
                  </Link>
                  <Link href={project.demo} className="flex items-center gap-2 text-xs font-bold text-primary hover:text-primary/80 transition-colors">
                    <ExternalLink className="w-4 h-4" /> Sistema Online
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
