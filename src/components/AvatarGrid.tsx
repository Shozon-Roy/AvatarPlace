"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Check } from 'lucide-react';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('');

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export default function AvatarGrid() {
  const [shuffledChars, setShuffledChars] = useState<string[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    // This check ensures this code only runs on the client
    setShuffledChars(shuffleArray(characters));
  }, []);
  
  const handleCopy = (char: string) => {
    const url = `https://picsum.photos/seed/${encodeURIComponent(char)}/200/200`;
    navigator.clipboard.writeText(url);
    toast({
      title: (
        <div className="flex items-center">
          <Check className="mr-2 h-4 w-4 text-green-500" />
          <span>Copied to clipboard!</span>
        </div>
      ),
      description: `URL for avatar "${char}" is ready to paste.`,
    });
  };

  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4">
      {shuffledChars.map((char, index) => (
        <div
          key={char}
          className="group relative aspect-square opacity-0 animate-fade-in cursor-pointer"
          style={{ animationDelay: `${index * 20}ms` }}
          onClick={() => handleCopy(char)}
        >
          <Image
            src={`https://picsum.photos/seed/${encodeURIComponent(char)}/200/200`}
            alt={`Avatar for character ${char}`}
            width={200}
            height={200}
            className="rounded-lg object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-5xl font-bold drop-shadow-lg">{char}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
