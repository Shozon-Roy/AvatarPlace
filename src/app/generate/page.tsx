import AvatarGenerator from "@/components/AvatarGenerator";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";


export default function GeneratePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-28">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <Button asChild variant="outline" className="absolute top-20 left-4">
                    <Link href="/">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Link>
                </Button>
              <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary">
                AI Avatar Generator
              </h1>
              <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
                Unleash your creativity! Describe the avatar you want, and our AI will bring it to life.
              </p>
            </div>
            <AvatarGenerator />
        </div>
      </main>
    </div>
  );
}
