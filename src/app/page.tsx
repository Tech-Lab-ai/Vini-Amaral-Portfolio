
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { GithubFeed } from "@/components/portfolio/GithubFeed";
import { PaymentMethods } from "@/components/portfolio/PaymentMethods";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <GithubFeed />
        <PaymentMethods />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
