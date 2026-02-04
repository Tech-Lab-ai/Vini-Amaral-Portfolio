
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const projects = [
  {
    id: "project-1",
    title: "AI Analysis Studio",
    description: "A comprehensive platform for analyzing large datasets using custom RAG pipelines and Gemini models.",
    tags: ["Next.js", "TypeScript", "LangChain", "Gemini"],
    github: "#",
    demo: "#",
  },
  {
    id: "project-2",
    title: "Forge CLI",
    description: "High-performance command-line tool written in Go for scaffolded development environments.",
    tags: ["Go", "Cobra", "Docker", "DevOps"],
    github: "#",
    demo: "#",
  },
  {
    id: "project-3",
    title: "HyperFlow Engine",
    description: "Event-driven microservice orchestrator built to handle massive throughput with minimal latency.",
    tags: ["Node.js", "Redis", "Kafka", "PostgreSQL"],
    github: "#",
    demo: "#",
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Selected works that showcase my ability to build across the full stack, 
              from low-level performance to high-level AI integrations.
            </p>
          </div>
          <Link href="https://github.com/viniamaral" target="_blank" className="text-primary font-medium hover:underline flex items-center gap-2">
            View more on GitHub <ExternalLink className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const image = PlaceHolderImages.find((img) => img.id === project.id);
            return (
              <Card key={project.id} className="project-card-hover overflow-hidden flex flex-col h-full bg-card/50">
                <div className="relative aspect-video">
                  <Image
                    src={image?.imageUrl || ""}
                    alt={project.title}
                    fill
                    className="object-cover"
                    data-ai-hint={image?.imageHint}
                  />
                </div>
                <CardHeader className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-code text-[10px] uppercase tracking-wider">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter className="pt-0 flex gap-4">
                  <Link href={project.github} className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors">
                    <Github className="w-4 h-4" /> Code
                  </Link>
                  <Link href={project.demo} className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4" /> Demo
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
