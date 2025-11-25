"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Link as LinkIcon, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function AvatarDisplay({ svgDataUri, decodedChar, bgColor, char }: { svgDataUri: string, decodedChar: string, bgColor: string, char: string }) {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    // This ensures window is defined, preventing server-side errors.
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <>
      <div 
        className="relative aspect-square w-full flex items-center justify-center rounded-2xl shadow-lg"
        style={{ backgroundColor: bgColor }}
      >
        <img src={svgDataUri} alt={`Avatar for ${decodedChar}`} className="rounded-2xl" />
      </div>
      <div className="mt-6 flex flex-col gap-4">
          <Button asChild size="lg">
              <Link href={`/avatar/${encodeURIComponent(char)}`}>
                  <RefreshCw className="mr-2 h-5 w-5" />
                  Change Background
              </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
              <a href={svgDataUri} download={`${decodedChar}-avatar.svg`}>
                  <Download className="mr-2 h-5 w-5" />
                  Download SVG
              </a>
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
                  onClick={() => navigator.clipboard.writeText(currentUrl)}
              >
                  <LinkIcon className="h-4 w-4" />
              </Button>
          </div>
          <p className="text-xs text-center text-muted-foreground">The "Download" button provides an SVG. PNG conversion requires a server-side service.</p>
      </div>
    </>
  );
}
