import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import AvatarDisplay from '@/components/AvatarDisplay';

function getRandomColor() {
  // This is safe on the server as it's just a fallback.
  return `hsl(${Math.random() * 360}, 70%, 80%)`;
}

export default function AvatarPage({ params, searchParams }: { params: { char: string }, searchParams: { [key: string]: string | string[] | undefined } }) {
  const { char } = params;
  const decodedChar = decodeURIComponent(char);
  const bgColor = searchParams.bg || getRandomColor();

  const svgData = `
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" fill="${bgColor as string}"/>
      <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="256" font-family="Inter, sans-serif" font-weight="800" fill="#27272a">${decodedChar}</text>
    </svg>
  `;
  const svgDataUri = `data:image/svg+xml;base64,${Buffer.from(svgData).toString('base64')}`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <div className="w-full max-w-md">
        <Button asChild variant="ghost" className="mb-4">
            <Link href="/#avatars">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Collection
            </Link>
        </Button>
        <AvatarDisplay 
          svgData={svgData}
          svgDataUri={svgDataUri}
          decodedChar={decodedChar}
          bgColor={bgColor as string}
          char={char}
        />
      </div>
    </div>
  );
}
