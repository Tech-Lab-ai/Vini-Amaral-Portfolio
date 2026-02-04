
import { CheckCircle2, Cpu, Code2, Globe, Database } from "lucide-react";

const skills = [
  { name: "Frontend", items: ["React", "Next.js", "TypeScript", "TailwindCSS"], icon: Code2 },
  { name: "Backend", items: ["Node.js", "Go", "PostgreSQL", "Redis"], icon: Database },
  { name: "AI & ML", items: ["LLM Integration", "LangChain", "Vector DBs", "RAG"], icon: Cpu },
  { name: "DevOps", items: ["Docker", "Vercel", "AWS", "CI/CD"], icon: Globe },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Bridging Code and AI</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                As a senior software developer, I specialize in building robust fullstack applications 
                that solve real-world problems. My approach combines technical seniority with 
                organizational discipline, ensuring projects move from code to deploy efficiently.
              </p>
              <p>
                Recently, I've been focused on integrating Artificial Intelligence into production workflows, 
                leveraging LLMs to create smarter, more intuitive user experiences and automation tools.
              </p>
            </div>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                "Seniority in React & Next.js",
                "High-performance Go backend",
                "Production AI integration",
                "Full deployment lifecycle"
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="p-6 rounded-2xl bg-card border border-border shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <skill.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3">{skill.name}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary/40" />
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
