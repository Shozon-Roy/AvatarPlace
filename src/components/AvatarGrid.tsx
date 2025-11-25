"use client";

import { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Check } from 'lucide-react';

const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
const numbers = '0123456789'.split('');

const AvatarGroup = ({ title, characters, colors, onCopy }: { title: string, characters: string[], colors: Record<string, string>, onCopy: (char: string) => void }) => (
  <div className="mb-12">
    <h3 className="text-2xl font-bold tracking-tight text-primary mb-6">{title}</h3>
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4">
      {characters.map((char, index) => (
        <div
          key={char}
          className="group relative aspect-square opacity-0 animate-fade-in cursor-pointer flex items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-105"
          style={{ 
            animationDelay: `${index * 20}ms`,
            backgroundColor: colors[char] || '#e0e0e0'
          }}
          onClick={() => onCopy(char)}
        >
          <span className="text-4xl font-bold text-gray-800 transition-opacity duration-300 group-hover:opacity-0">{char}</span>
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-5xl font-bold drop-shadow-lg">{char}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function AvatarGrid() {
  const [randomColors, setRandomColors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  useEffect(() => {
    // This check ensures this code only runs on the client
    const allChars = [...uppercaseLetters, ...lowercaseLetters, ...numbers];
    const colors: Record<string, string> = {};
    allChars.forEach(char => {
      colors[char] = `hsl(${Math.random() * 360}, 70%, 80%)`;
    });
    setRandomColors(colors);
  }, []);
  
  const handleCopy = (char: string) => {
    const url = `${window.location.origin}/avatar/${encodeURIComponent(char)}`;
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
    <div>
      <AvatarGroup title="Uppercase Letters" characters={uppercaseLetters} colors={randomColors} onCopy={handleCopy} />
      <AvatarGroup title="Lowercase Letters" characters={lowercaseLetters} colors={randomColors} onCopy={handleCopy} />
      <AvatarGroup title="Numbers" characters={numbers} colors={randomColors} onCopy={handleCopy} />
    </div>
  );
}
