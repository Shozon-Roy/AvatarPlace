import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import AvatarGrid from "@/components/AvatarGrid";
import { ArrowRight, Copy } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 bg-gradient-to-b from-background to-card">
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-primary">
            Your Perfect Avatar Awaits
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore a universe of unique avatars, generated from every letter and number. Your new profile picture is just a click away.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transform hover:scale-105 transition-transform">
            <Link href="#avatars">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </section>

        <section id="avatars" className="py-20 md:py-28 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary">
                The Avatar Collection
              </h2>
              <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto flex items-center justify-center gap-2">
                Hover to reveal, click to copy the URL. <Copy className="h-4 w-4"/>
              </p>
            </div>
            <AvatarGrid />
          </div>
        </section>
      </main>
      <footer className="py-6 bg-background border-t">
        <div className="container mx-auto text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} AvatarPlace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
