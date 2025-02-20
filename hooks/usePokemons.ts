import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Pokemon = {
  name: string;
  url: string;
};

type PokemonDetails = {
  id: number;
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
};

export function usePokemons() {
  return useQuery({
    queryKey: ["pokemons"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );

      // Get details of each Pokémon
      const detailedPokemons = await Promise.all(
        data.results.map(async (pokemon: Pokemon) => {
          const response = await axios.get(pokemon.url);
          return response.data;
        })
      );

      return detailedPokemons.map((pokemon: PokemonDetails) => ({
        id: pokemon.id,
        name: pokemon.name,
        age: Math.floor(Math.random() * 30) + 18, // Random age between 18 and 48
        location: "Kanto Region",
        image: pokemon.sprites.other["official-artwork"].front_default,
        avatar: pokemon.sprites.other["official-artwork"].front_default,
      }));
    },
  });
}
