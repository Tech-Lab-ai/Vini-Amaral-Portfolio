"use client";

import { useEffect, useState } from "react";
import { classifyGithubActivity } from "@/ai/flows/github-activity-feed";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Zap, Terminal, Activity, History } from "lucide-react";

export function GithubFeed() {
  const [activities, setActivities] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchActivity() {
      try {
        const result = await classifyGithubActivity({ 
          owner: "Tech-Lab-ai", 
          repo: "CloudForge-CLI" 
        });
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
    <section id="activity" className="py-32 bg-secondary/10 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div className="space-y-4">
              <Badge variant="outline" className="px-4 py-1 text-primary border-primary/20 bg-primary/5 uppercase text-[10px] font-bold tracking-[0.2em]">
                Live Engineering Log
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Status: CloudForge CLI</h2>
              <p className="text-lg text-muted-foreground font-light">
                Monitoramento de issues e roadmap processados por IA em tempo real.
              </p>
            </div>
            <div className="flex items-center gap-6 glass p-6 rounded-[2rem] border-white/5 shadow-inner">
               <div className="text-center px-4 border-r border-white/10">
                 <p className="text-2xl font-bold text-primary">10</p>
                 <p className="text-[10px] uppercase font-bold text-muted-foreground">Issues Ativas</p>
               </div>
               <div className="text-center px-4">
                 <p className="text-2xl font-bold text-accent">Go</p>
                 <p className="text-[10px] uppercase font-bold text-muted-foreground">Linguagem</p>
               </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2.5rem] blur opacity-30" />
            <Card className="border-white/5 bg-black/40 backdrop-blur-3xl shadow-2xl relative overflow-hidden rounded-[2.5rem]">
              <CardHeader className="bg-white/[0.02] border-b border-white/5 py-6 px-8 flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-3 text-lg font-bold tracking-tight">
                  <Terminal className="w-5 h-5 text-primary" />
                  Console de Desenvolvimento
                </CardTitle>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
              </CardHeader>
              <CardContent className="p-8">
                {loading ? (
                  <div className="flex flex-col items-center justify-center py-20 gap-6 text-muted-foreground">
                    <div className="relative">
                       <Loader2 className="w-12 h-12 animate-spin text-primary opacity-20" />
                       <Activity className="w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary" />
                    </div>
                    <p className="animate-pulse font-code text-sm uppercase tracking-widest">Iniciando análise GenAI...</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {activities.map((activity, idx) => (
                      <div 
                        key={idx} 
                        className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] flex items-start gap-5 transition-all hover:bg-white/[0.03] hover:border-primary/20 group"
                      >
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-all shadow-[0_0_10px_rgba(3,155,229,0.5)] shrink-0" />
                        <div className="space-y-1">
                          <p className="text-xs font-code text-muted-foreground/60 uppercase tracking-tighter flex items-center gap-2">
                            <History className="w-3 h-3" /> Event Log #{10 - idx}
                          </p>
                          <p className="text-sm md:text-base leading-relaxed font-body">{activity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
              <div className="bg-primary/10 py-3 px-8 border-t border-white/5">
                 <p className="text-[10px] font-code text-primary/80 uppercase tracking-widest animate-pulse">
                   // Sistema conectado ao cluster: tech-lab-main-01
                 </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}