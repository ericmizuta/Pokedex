import React from 'react';
import { useState, useEffect } from 'react';
import PokemonCard from './components/PokemonCard';
import SearchBar from './components/SearchBar';
import { IParsedPokemon } from './interface/ParsedPokemon';
import { PokemonHome } from './interface/PokemonHome';

const App = () => {
  const [pokemons, setPokemons] = useState<IParsedPokemon[]>();

  console.log(pokemons);

  const consumirAPI = async (graphqlEndpoint: any, query: any) => {
    const response = await fetch(graphqlEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });

    return response.json();
  };

  const GRAPHQL_ENDPOINT = 'https://beta.pokeapi.co/graphql/v1beta';

  const gen1pokemon = `query samplePokeAPIquery {
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
}`;

  const parseJSON = (input: PokemonHome) => {
    const parsedData = input.data.pokemon_v2_pokemonspecies.map((value) => ({
      id: value.id,
      name: value.name,
      color: value.pokemon_v2_pokemoncolor.name,
      sprite: JSON.parse(
        value.pokemon_v2_pokemons[0].pokemon_v2_pokemonsprites[0].sprites
      ).front_default,
      types: value.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes.map(
        (value) => value.pokemon_v2_type.name
      ),
    }));

    setPokemons(parsedData);
  };

  useEffect(() => {
    consumirAPI(GRAPHQL_ENDPOINT, gen1pokemon).then((data: PokemonHome) => {
      parseJSON(data);
    });
  }, []);

  return (
    <main className='flex flex-col gap-6 items-center p-6 w-full min-h-screen'>
      <SearchBar />

      <div className='grid gap-4 w-full'>
        {pokemons && pokemons.map((pokemon) => <PokemonCard data={pokemon} />)}
      </div>
    </main>
  );
};

export default App;
