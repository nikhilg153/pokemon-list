"use client";

import { useState, useEffect } from "react";
import PokemonList from "../components/PokemonList";
import SearchBar from "../components/SearchBar";
import { fetchPokemons } from "@/utils/api";

export interface PokemonType {
  name: string;
  image: string;
  types: string[];
}

export default function Home() {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadPokemons = async () => {
      const data = await fetchPokemons();
      setPokemons(data);
    };

    loadPokemons();
  }, []);

  const filteredPokemons = pokemons.filter((pokemon: PokemonType) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="m-20">
        <div className="flex items-center gap-5">
          <h1 className="font-medium text-white">Search By Name:</h1>
          <SearchBar onSearch={setSearchTerm} />
        </div>
        <div>
          <PokemonList filteredPokemons={filteredPokemons} />
        </div>
      </div>
    </>
  );
}
