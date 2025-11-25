import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import AvatarGrid from "@/components/AvatarGrid";
import AvatarGenerator from "@/components/AvatarGenerator";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-primary">
            Welcome to AvatarPlace
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover a universe of unique avatars. From A to Z, 0 to 9, or generated on-demand by AI. Your perfect profile picture is just a click away.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform hover:scale-105 transition-transform">
            <Link href="#avatars">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </section>

        <section id="avatars" className="py-20 md:py-28 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
                Our Avatar Collection
              </h2>
              <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto">
                A randomized collection of avatars seeded from every letter and number. Explore the variety!
              </p>
            </div>
            <AvatarGrid />
          </div>
        </section>

        <section id="generator" className="py-20 md:py-28">
           <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary">
                Create Your Own
              </h2>
              <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto">
                Unleash your creativity. Describe the avatar you envision and let our AI bring it to life.
              </p>
            </div>
            <AvatarGenerator />
          </div>
        </section>
      </main>
      <footer className="py-6 bg-background">
        <div className="container mx-auto text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} AvatarPlace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
