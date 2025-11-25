import Link from 'next/link';
import { Camera, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { ThemeSwitcher } from './ThemeSwitcher';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors">
          <Camera className="h-6 w-6 text-primary" />
          <span>AvatarPlace</span>
        </Link>
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="grid gap-6 text-lg font-medium mt-10">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <Link href="/#avatars" className="hover:text-primary transition-colors">Collection</Link>
                <Link href="/generate" className="hover:text-primary transition-colors">AI Generator</Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="hidden md:flex items-center gap-4">
            <Button asChild variant="ghost">
              <Link href="/#avatars">
                Collection
              </Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/generate">
                AI Generator
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
