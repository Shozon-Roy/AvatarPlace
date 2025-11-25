import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import AvatarGrid from "@/components/AvatarGrid";
import { ArrowRight } from "lucide-react";
import Lightning from "@/components/Lightning";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative flex flex-col items-center justify-center text-center px-4 py-32 md:py-40 overflow-hidden">
          <div className="absolute inset-0">
             <Lightning hue={220} speed={0.5} intensity={1.5} size={0.8} />
             <div className="absolute inset-0 bg-background/80"></div>
          </div>
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground">
              Your Perfect Avatar Awaits
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore a universe of unique avatars, generated from every letter and number. Your new profile picture is just a click away.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transform hover:scale-105 transition-transform">
                <Link href="#avatars">
                  Explore Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="avatars" className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                The Avatar Collection
              </h2>
              <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto flex items-center justify-center gap-2">
                Click any character to customize and get the URL.
              </p>
            </div>
            <AvatarGrid />
          </div>
        </section>
      </main>
      <footer className="py-6 bg-secondary/50 border-t">
        <div className="container mx-auto text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} AvatarPlace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
