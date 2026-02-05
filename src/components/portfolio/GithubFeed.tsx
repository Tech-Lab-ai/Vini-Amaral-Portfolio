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
    <section id="activity" className="py-32 bg-secondary/10 relative overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-4 max-w-2xl text-left">
              <Badge variant="outline" className="px-3 py-0.5 text-primary border-primary/40 bg-primary/10 uppercase text-[10px] font-bold tracking-[0.2em]">
                Live Engineering Log
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Status do Sistema: <span className="text-primary">CloudForge CLI</span></h2>
              <p className="text-lg text-foreground/80 font-light leading-relaxed">
                Monitoramento dinâmico do repositório. Insights gerados por IA sobre o roadmap de desenvolvimento e correções críticas.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="glass px-5 py-3 rounded-2xl flex items-center gap-3 border-white/20">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
                <div className="text-left">
                  <p className="text-[9px] uppercase font-bold text-muted-foreground leading-none">Branch Principal</p>
                  <p className="text-xs font-bold font-code">main (stable)</p>
                </div>
              </div>
              <div className="glass px-5 py-3 rounded-2xl flex items-center gap-3 border-white/20">
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
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 via-accent/20 to-primary/40 rounded-[2.5rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
            
            <Card className="border-white/20 bg-card/80 backdrop-blur-3xl shadow-2xl relative overflow-hidden rounded-[2.5rem]">
              <CardHeader className="bg-white/5 border-b border-white/10 py-5 px-8 flex flex-row items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/60 border border-destructive/70" />
                    <div className="w-3 h-3 rounded-full bg-accent/60 border border-accent/70" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/60 border border-emerald-500/70" />
                  </div>
                  <div className="h-4 w-px bg-white/20 mx-2" />
                  <CardTitle className="flex items-center gap-2 text-sm font-code tracking-tight text-foreground/70">
                    <Terminal className="w-4 h-4" />
                    tech-lab-cli --verbose --analyze
                  </CardTitle>
                </div>
                <Badge variant="outline" className="font-code text-[10px] border-white/20 text-foreground/60 bg-white/5">
                  UTC-3: {new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                </Badge>
              </CardHeader>
              
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-[280px_1fr] divide-x divide-white/10">
                  {/* Sidebar Telemetry */}
                  <div className="p-8 space-y-8 bg-white/5 hidden lg:block">
                    <div className="space-y-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">System Metrics</p>
                      <div className="space-y-3">
                        {[
                          { label: "Uptime", val: "99.98%", icon: Globe },
                          { label: "Security", val: "PCI-DSS", icon: Lock },
                          { label: "Latency", val: "42ms", icon: Activity }
                        ].map((stat, i) => (
                          <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/10 border border-white/10">
                            <stat.icon className="w-3.5 h-3.5 text-primary" />
                            <div className="text-right">
                              <p className="text-[8px] uppercase text-muted-foreground">{stat.label}</p>
                              <p className="text-[10px] font-bold font-code text-foreground">{stat.val}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
                      <p className="text-[10px] font-bold text-primary uppercase mb-3">IA Engine Active</p>
                      <div className="flex gap-1.5">
                        {[1,2,3,4,5,6].map(i => (
                          <div key={i} className="h-5 flex-1 bg-primary/30 rounded-sm overflow-hidden relative">
                            <div className="absolute inset-0 bg-primary animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Main Log Area */}
                  <div className="p-8 min-h-[400px] bg-white/[0.02]">
                    {loading ? (
                      <div className="h-full flex flex-col items-center justify-center gap-6 text-muted-foreground py-20">
                        <div className="relative">
                           <Loader2 className="w-12 h-12 animate-spin text-primary/60" />
                           <Activity className="w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary animate-pulse" />
                        </div>
                        <p className="animate-pulse font-code text-xs uppercase tracking-widest text-foreground/60">Estabelecendo handshake com GitHub API...</p>
                      </div>
                    ) : (
                      <div className="space-y-2 font-code">
                        {activities.map((activity, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/10 transition-colors group/line border border-transparent hover:border-white/10"
                          >
                            <span className="text-primary/40 text-[10px] mt-1 shrink-0 select-none font-bold">
                              {String(idx + 1).padStart(2, '0')}
                            </span>
                            <ChevronRight className="w-3 h-3 mt-1.5 text-primary group-hover/line:translate-x-1 transition-transform shrink-0" />
                            <p className="text-sm leading-relaxed text-foreground/80 group-hover/line:text-foreground transition-colors">
                              {activity}
                            </p>
                          </div>
                        ))}
                        <div className="flex items-center gap-2 p-3 text-primary animate-pulse">
                          <span className="text-primary/40 text-[10px] select-none font-bold">
                            {activities.length + 1}
                          </span>
                          <ChevronRight className="w-3 h-3" />
                          <span className="w-2 h-4 bg-primary inline-block" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
              
              <div className="bg-white/5 py-4 px-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                 <p className="text-[10px] font-code text-primary uppercase tracking-widest font-bold">
                   // CONNECTION_ESTABLISHED // NODE: tech-lab-main-01
                 </p>
                 <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-[9px] font-bold text-emerald-400 uppercase">Sync OK</span>
                    </div>
                    <span className="text-[9px] text-white/20">|</span>
                    <p className="text-[9px] text-foreground/50 font-code tracking-tighter">BUILD v2.4.0-STABLE</p>
                 </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}