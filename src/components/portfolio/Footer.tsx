import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="block">
              <Image 
                src="/logo_vini.png" 
                alt="Vini Amaral" 
                width={140} 
                height={35} 
                className="h-7 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
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
