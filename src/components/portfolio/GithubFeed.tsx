"use client";

import { useEffect, useState } from "react";
import { classifyGithubActivity } from "@/ai/flows/github-activity-feed";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Terminal, Activity, History, ChevronRight, Cpu, Globe, Lock } from "lucide-react";

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
    <section id="activity" className="py-32 bg-secondary/5 relative overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-4 max-w-2xl text-left">
              <Badge variant="outline" className="px-3 py-0.5 text-primary border-primary/30 bg-primary/5 uppercase text-[10px] font-bold tracking-[0.2em]">
                Live Engineering Log
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Status do Sistema: <span className="text-primary">CloudForge CLI</span></h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Monitoramento dinâmico do repositório. Insights gerados por IA sobre o roadmap de desenvolvimento e correções críticas.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="glass border-white/10 px-5 py-3 rounded-2xl flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                <div className="text-left">
                  <p className="text-[9px] uppercase font-bold text-muted-foreground leading-none">Branch Principal</p>
                  <p className="text-xs font-bold font-code">main (stable)</p>
                </div>
              </div>
              <div className="glass border-white/10 px-5 py-3 rounded-2xl flex items-center gap-3">
                <Cpu className="w-4 h-4 text-primary" />
                <div className="text-left">
                  <p className="text-[9px] uppercase font-bold text-muted-foreground leading-none">Stack</p>
                  <p className="text-xs font-bold font-code">Go 1.22+</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            {/* Ambient Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-accent/10 to-primary/30 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
            
            <Card className="border-white/10 bg-black/60 backdrop-blur-3xl shadow-2xl relative overflow-hidden rounded-[2.5rem]">
              <CardHeader className="bg-white/[0.03] border-b border-white/5 py-5 px-8 flex flex-row items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/40 border border-destructive/50" />
                    <div className="w-3 h-3 rounded-full bg-accent/40 border border-accent/50" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/40 border border-emerald-500/50" />
                  </div>
                  <div className="h-4 w-px bg-white/10 mx-2" />
                  <CardTitle className="flex items-center gap-2 text-sm font-code tracking-tight text-muted-foreground">
                    <Terminal className="w-4 h-4" />
                    tech-lab-cli --verbose --analyze
                  </CardTitle>
                </div>
                <Badge variant="outline" className="font-code text-[10px] border-white/10 text-muted-foreground">
                  UTC-3: {new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                </Badge>
              </CardHeader>
              
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-[280px_1fr] divide-x divide-white/5">
                  {/* Sidebar Telemetry */}
                  <div className="p-8 space-y-8 bg-white/[0.01] hidden lg:block">
                    <div className="space-y-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">System Metrics</p>
                      <div className="space-y-3">
                        {[
                          { label: "Uptime", val: "99.98%", icon: Globe },
                          { label: "Security", val: "PCI-DSS", icon: Lock },
                          { label: "Latency", val: "42ms", icon: Activity }
                        ].map((stat, i) => (
                          <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                            <stat.icon className="w-3.5 h-3.5 text-primary/60" />
                            <div className="text-right">
                              <p className="text-[8px] uppercase text-muted-foreground">{stat.label}</p>
                              <p className="text-[10px] font-bold font-code">{stat.val}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10">
                      <p className="text-[10px] font-bold text-primary uppercase mb-2">IA Engine Active</p>
                      <div className="flex gap-1">
                        {[1,2,3,4,5,6].map(i => (
                          <div key={i} className="h-4 flex-1 bg-primary/20 rounded-sm overflow-hidden relative">
                            <div className="absolute inset-0 bg-primary animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Main Log Area */}
                  <div className="p-8 min-h-[400px]">
                    {loading ? (
                      <div className="h-full flex flex-col items-center justify-center gap-6 text-muted-foreground py-20">
                        <div className="relative">
                           <Loader2 className="w-12 h-12 animate-spin text-primary/40" />
                           <Activity className="w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary animate-pulse" />
                        </div>
                        <p className="animate-pulse font-code text-xs uppercase tracking-widest">Estabelecendo handshake com GitHub API...</p>
                      </div>
                    ) : (
                      <div className="space-y-2 font-code">
                        {activities.map((activity, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/[0.03] transition-colors group/line border border-transparent hover:border-white/5"
                          >
                            <span className="text-muted-foreground/30 text-[10px] mt-1 shrink-0 select-none">
                              {String(idx + 1).padStart(2, '0')}
                            </span>
                            <ChevronRight className="w-3 h-3 mt-1.5 text-primary/40 group-hover/line:text-primary transition-colors shrink-0" />
                            <p className="text-sm leading-relaxed text-muted-foreground group-hover/line:text-foreground transition-colors">
                              {activity}
                            </p>
                          </div>
                        ))}
                        <div className="flex items-center gap-2 p-3 text-primary animate-pulse">
                          <span className="text-muted-foreground/30 text-[10px] select-none">
                            {activities.length + 1}
                          </span>
                          <ChevronRight className="w-3 h-3" />
                          <span className="w-2 h-4 bg-primary/60 inline-block" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
              
              <div className="bg-white/[0.02] py-3 px-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                 <p className="text-[10px] font-code text-primary/60 uppercase tracking-widest">
                   // CONNECTION_ESTABLISHED // NODE: tech-lab-main-01
                 </p>
                 <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-[9px] font-bold text-muted-foreground uppercase">Sync OK</span>
                    </div>
                    <span className="text-[9px] text-white/20">|</span>
                    <p className="text-[9px] text-white/40 font-code tracking-tighter">BUILD v2.4.0-STABLE</p>
                 </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
