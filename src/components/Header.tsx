import Link from 'next/link';
import { Camera } from 'lucide-react';
import { Button } from './ui/button';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors">
          <Camera className="h-6 w-6 text-primary" />
          <span>AvatarPlace</span>
        </Link>
        <Button asChild variant="ghost">
          <Link href="/generate">
            AI Generator
          </Link>
        </Button>
      </nav>
    </header>
  );
}
