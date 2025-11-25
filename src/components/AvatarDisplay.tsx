"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Link as LinkIcon, RefreshCw, Loader2, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';
import { convertSvgToPng } from '@/ai/flows/convert-svg-to-png';
import { useToast } from "@/hooks/use-toast";

export default function AvatarDisplay({ svgData, svgDataUri, decodedChar, bgColor, char }: { svgData: string, svgDataUri: string, decodedChar: string, bgColor: string, char: string }) {
  const [currentUrl, setCurrentUrl] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const handleGeneratePng = async () => {
    setIsGenerating(true);
    try {
      const result = await convertSvgToPng({ svg: svgData });
      const link = document.createElement('a');
      link.href = result.pngDataUri;
      link.download = `${decodedChar}-avatar.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Failed to generate PNG:', error);
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "Could not generate the PNG. Please try again.",
      });
    } finally {
      setIsGenerating(false);
    }
  };

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
          <Button size="lg" variant="secondary" onClick={handleGeneratePng} disabled={isGenerating}>
            {isGenerating ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <ImageIcon className="mr-2 h-5 w-5" />
            )}
            Generate PNG
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
                  onClick={() => {
                    navigator.clipboard.writeText(currentUrl);
                    toast({ title: "Copied to clipboard!" });
                  }}
              >
                  <LinkIcon className="h-4 w-4" />
              </Button>
          </div>
      </div>
    </>
  );
}
