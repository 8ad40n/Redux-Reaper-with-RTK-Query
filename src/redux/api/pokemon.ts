import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2' }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: ()=> `pokemon/${name}`,
        }),

        // addPost: build.mutation({
        //     query(body) {
        //       return {
        //         url: `/add`,
        //         method: 'POST',
        //         body,
        //     }
        // },
    })
})

export const { useGetPokemonByNameQuery } = pokemonApi;