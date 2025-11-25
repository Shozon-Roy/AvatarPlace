"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

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

  useEffect(() => {
    setShuffledChars(shuffleArray(characters));
  }, []);

  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4">
      {shuffledChars.map((char, index) => (
        <div
          key={char}
          className="group relative aspect-square opacity-0 animate-fade-in"
          style={{ animationDelay: `${index * 20}ms` }}
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
            <span className="text-white text-5xl font-bold">{char}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
