'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Copy, RefreshCw, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

function getRandomColor() {
  return `hsl(${Math.random() * 360}, 70%, 80%)`;
}

export default function AvatarPage({ params }: { params: { char: string } }) {
  const { char } = params;
  const decodedChar = decodeURIComponent(char);
  const [bgColor, setBgColor] = useState(getRandomColor());
  const [currentUrl, setCurrentUrl] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    // This ensures window is available
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    toast({
      title: 'Copied to clipboard!',
      description: `URL for avatar "${decodedChar}" is ready to paste.`,
    });
  };
  
  const changeBg = () => {
    setBgColor(getRandomColor());
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <div className="w-full max-w-md">
        <Button asChild variant="ghost" className="mb-4">
            <Link href="/#avatars">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Collection
            </Link>
        </Button>
        <div 
          className="relative aspect-square w-full flex items-center justify-center rounded-2xl shadow-lg transition-colors duration-300"
          style={{ backgroundColor: bgColor }}
        >
          <span className="text-9xl font-extrabold text-gray-800 select-none">{decodedChar}</span>
        </div>
        <div className="mt-6 flex flex-col gap-4">
          <Button onClick={changeBg} size="lg">
            <RefreshCw className="mr-2 h-5 w-5" />
            Change Background
          </Button>
          <div className="relative">
            <input
              type="text"
              readOnly
              value={currentUrl}
              className="w-full bg-card border border-border rounded-lg p-3 pr-12 text-sm text-muted-foreground"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
              onClick={handleCopy}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
