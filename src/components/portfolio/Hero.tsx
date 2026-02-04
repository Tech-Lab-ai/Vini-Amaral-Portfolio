
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const avatar = PlaceHolderImages.find((img) => img.id === "avatar");

  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 border-primary/20 p-2 bg-card shadow-2xl">
            <div className="w-full h-full rounded-xl overflow-hidden relative">
              <Image
                src={avatar?.imageUrl || ""}
                alt="Vini Amaral"
                fill
                className="object-cover"
                data-ai-hint={avatar?.imageHint}
              />
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-bold font-headline leading-tight">
                Vini Amaral — <br />
                <span className="text-primary">Software Developer | Fullstack & AI</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-body">
                I build practical and experimental software, from CLI tools to fullstack applications.
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="#projects">
                  View Projects <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" size="lg" className="rounded-full px-6" asChild>
                  <Link href="https://github.com/viniamaral" target="_blank">
                    <Github className="mr-2 w-4 h-4" /> GitHub
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-6" asChild>
                  <Link href="https://linkedin.com/in/viniamaral" target="_blank">
                    <Linkedin className="mr-2 w-4 h-4" /> LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
