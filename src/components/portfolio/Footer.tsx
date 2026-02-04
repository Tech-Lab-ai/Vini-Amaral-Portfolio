
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="font-headline font-bold text-lg tracking-tighter">
              VINI<span className="text-primary">AMARAL</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Vini Amaral. Built with Next.js & AI.
            </p>
          </div>

          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <Link href="https://github.com/viniamaral" className="hover:text-foreground transition-colors">GitHub</Link>
            <Link href="https://linkedin.com/in/viniamaral" className="hover:text-foreground transition-colors">LinkedIn</Link>
            <Link href="mailto:contact@viniamaral.com" className="hover:text-foreground transition-colors">Email</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
