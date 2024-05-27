import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=151";

export const fetchPokemons = async () => {
  const response = await axios.get(API_URL);
  const results = response.data.results;

  const detailedResults = await Promise.all(
    results.map(async (pokemon: any) => {
      const details = await axios.get(pokemon.url);
      return {
        name: details.data.name,
        image: details.data.sprites.front_default,
        types: details.data.types.map((typeInfo: any) => typeInfo.type.name),
      };
    })
  );

  return detailedResults;
};
