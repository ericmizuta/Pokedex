import { useState, useEffect } from "react";

import React from 'react'
import PokemonCard from './components/PokemonCard'
import SearchBar from './components/SearchBar'

const App = () => {

  const [pokemons, setPokemons] = useState({})
  console.log(pokemons)

  const consumirAPI = async (graphqlEndpoint: any, query: any) => {
    const response = await fetch(graphqlEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    });

    return response.json();
  }

  const GRAPHQL_ENDPOINT = 'https://beta.pokeapi.co/graphql/v1beta'

  const gen1pokemon = `query samplePokeAPIquery {
  pokemon_v2_pokemonspecies(where: {pokemon_v2_generation: {name: {_eq: "generation-i"}}}) {
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
}`


  useEffect(() => {
    consumirAPI(GRAPHQL_ENDPOINT, gen1pokemon).then((data) => { setPokemons(data) });
  }, []);


  return (
    <main className='flex flex-col gap-6 items-center p-6 w-full min-h-screen'>
      <SearchBar />

      <div className='grid gap-4 w-full'>
        <PokemonCard />
      </div>
    </main>
  )
}

export default App