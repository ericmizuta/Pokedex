import { gql } from '@apollo/client';

export const GET_POKEMON = gql`
  query samplePokeAPIquery {
    pokemon_v2_pokemonspecies(where: {pokemon_v2_generation: {name: {_eq: "generation-i"}}}, order_by: {id: asc}) {
      id
      name

      pokemon_v2_pokemoncolor {
        name
      }

      pokemon_v2_pokemons {
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
          }
        }

        pokemon_v2_pokemonsprites {
          sprites
        }
      }
    }
  }
  `;