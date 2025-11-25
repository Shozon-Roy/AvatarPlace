import Link from 'next/link';
import { Aperture } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
          <Aperture className="h-6 w-6" />
          <span>AvatarPlace</span>
        </Link>
      </nav>
    </header>
  );
}
