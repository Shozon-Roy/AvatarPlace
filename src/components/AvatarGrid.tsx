"use client";

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
  const [randomColors, setRandomColors] = useState<string[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    // This check ensures this code only runs on the client
    setShuffledChars(shuffleArray(characters));
    const colors = characters.map(() => `hsl(${Math.random() * 360}, 70%, 80%)`);
    setRandomColors(colors);
  }, []);
  
  const handleCopy = (char: string) => {
    // This URL is a placeholder. It can be used to generate a real image URL later.
    const url = `https://avatar.placeholder.com/${encodeURIComponent(char)}`;
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
          className="group relative aspect-square opacity-0 animate-fade-in cursor-pointer flex items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-105"
          style={{ 
            animationDelay: `${index * 20}ms`,
            backgroundColor: randomColors[index] || '#e0e0e0'
          }}
          onClick={() => handleCopy(char)}
        >
          <span className="text-4xl font-bold text-gray-800 transition-opacity duration-300 group-hover:opacity-0">{char}</span>
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-5xl font-bold drop-shadow-lg">{char}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
