
"use client";

import { useEffect, useState } from "react";
import { classifyGithubActivity } from "@/ai/flows/github-activity-feed";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitBranch, Loader2, Zap } from "lucide-react";

export function GithubFeed() {
  const [activities, setActivities] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchActivity() {
      try {
        const result = await classifyGithubActivity({ username: "Tech-Lab-ai" });
        setActivities(result);
      } catch (error) {
        console.error("Failed to fetch activity", error);
        setActivities(["Não foi possível buscar as atividades recentes no momento."]);
      } finally {
        setLoading(false);
      }
    }

    fetchActivity();
  }, []);

  return (
    <section id="activity" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="px-4 py-1 text-primary border-primary/20">
              <Zap className="w-3 h-3 mr-2 fill-primary" /> Atualizações ao Vivo
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Últimas Atividades</h2>
            <p className="text-muted-foreground">
              O que tenho desenvolvido ultimamente, classificado por IA a partir dos meus eventos públicos no GitHub.
            </p>
          </div>

          <Card className="border-border bg-card/40 backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <GitBranch className="w-5 h-5 text-primary" />
                Feed em Tempo Real
              </CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4 text-muted-foreground">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                  <p className="animate-pulse">Analisando eventos do GitHub via IA...</p>
                </div>
              ) : (
                <ul className="space-y-4">
                  {activities.map((activity, idx) => (
                    <li 
                      key={idx} 
                      className="p-4 rounded-xl border border-border/50 bg-background/50 flex items-start gap-4 transition-colors hover:border-primary/30"
                    >
                      <div className="mt-1.5 v-2 h-2 rounded-full bg-primary shrink-0" />
                      <p className="text-sm md:text-base leading-relaxed">{activity}</p>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
