"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
const numbers = '0123456789'.split('');

const AvatarGroup = ({ title, characters, colors }: { title: string, characters: string[], colors: Record<string, string> }) => (
  <div className="mb-12">
    <h3 className="text-2xl font-bold tracking-tight text-foreground mb-6">{title}</h3>
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4">
      {characters.map((char, index) => {
        const bgColor = colors[char] || '#e0e0e0';
        return (
          <Link key={char} href={`/avatar/${encodeURIComponent(char)}?bg=${encodeURIComponent(bgColor)}`} passHref>
            <div
              className="group relative aspect-square opacity-0 animate-fade-in cursor-pointer flex items-center justify-center rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              style={{ 
                animationDelay: `${index * 20}ms`,
                backgroundColor: bgColor
              }}
            >
              <span className="text-5xl font-bold text-background/80 transition-opacity duration-300 group-hover:opacity-0">{char}</span>
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-6xl font-bold drop-shadow-lg">{char}</span>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  </div>
);

export default function AvatarGrid() {
  const [randomColors, setRandomColors] = useState<Record<string, string>>({});

  useEffect(() => {
    // This check ensures this code only runs on the client
    const allChars = [...uppercaseLetters, ...lowercaseLetters, ...numbers];
    const colors: Record<string, string> = {};
    allChars.forEach(char => {
      colors[char] = `hsl(${Math.random() * 360}, 70%, 80%)`;
    });
    setRandomColors(colors);
  }, []);

  return (
    <div>
      <AvatarGroup title="Uppercase Letters" characters={uppercaseLetters} colors={randomColors} />
      <AvatarGroup title="Lowercase Letters" characters={lowercaseLetters} colors={randomColors} />
      <AvatarGroup title="Numbers" characters={numbers} colors={randomColors} />
    </div>
  );
}
