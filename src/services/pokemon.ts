import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokemonState } from "../features/pokemon/pokemonSlice";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<
      PokemonState,
      { name: string; ids?: number[] }
    >({
      query: ({ name }) => `pokemon/${name}`,
    }),
    getPokemons: builder.query<{ results: PokemonState[] }, void>({
      query: () => `pokemon`,
    }),
  }),
});

export const {
  useGetPokemonByNameQuery,
  useGetPokemonsQuery,
  useLazyGetPokemonByNameQuery,
} = pokemonApi;
