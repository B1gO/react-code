"use client";
import React, {useState, useEffect} from "react";
import axios from "axios";


type Character = {
  id: number;
  name: string;
  image: string;
};

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setCharacters(response.data.results);
      });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">Rick and Morty</h1>
      <div className="flex flex-wrap items-center justify-center gap-24 p-24">
        {characters.map((character) => (
          <div key={character.id} className="flex flex-col items-center">      
              <img 
                src={character.image} 
                alt={character.name} 
                width={350} 
                height={350} 
          
              />
              <h2 className="text-3xl font-bold mt-10">{character.name}</h2>
    
          </div>
        ))}
      </div>
    </main>
  );
}
