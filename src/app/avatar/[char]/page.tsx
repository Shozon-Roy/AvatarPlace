
import { Button } from '@/components/ui/button';
import { Download, ArrowLeft, Link as LinkIcon, RefreshCw } from 'lucide-react';
import Link from 'next/link';

function getRandomColor() {
  return `hsl(${Math.random() * 360}, 70%, 80%)`;
}

export default function AvatarPage({ params, searchParams }: { params: { char: string }, searchParams: { [key: string]: string | string[] | undefined } }) {
  const { char } = params;
  const decodedChar = decodeURIComponent(char);
  const bgColor = searchParams.bg || getRandomColor();
  const svgDataUri = `data:image/svg+xml;base64,${btoa(`
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" fill="${decodeURIComponent(bgColor as string)}"/>
      <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="256" font-family="Inter, sans-serif" font-weight="800" fill="#27272a">${decodedChar}</text>
    </svg>
  `)}`;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const pngDownloadUrl = `https://api.cloudconvert.com/v2/convert?apikey=__API_KEY__&input=base64&input_base64=${btoa(svgDataUri)}&outputformat=png`;


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
          className="relative aspect-square w-full flex items-center justify-center rounded-2xl shadow-lg"
          style={{ backgroundColor: decodeURIComponent(bgColor as string) }}
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
                {/* This is a placeholder for a real conversion service */}
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
      </div>
    </div>
  );
}
