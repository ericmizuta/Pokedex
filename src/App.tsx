import { graphql } from '@apollo/client/react/hoc';
import {GET_POKEMON} from './endpoint/queries/queries'

import { useState, useEffect } from 'react';
import PokemonCard from './components/PokemonCard';
import SearchBar from './components/SearchBar';
import { IParsedPokemon } from './interface/ParsedPokemon';
import { PokemonHome } from './interface/PokemonHome';

function App(props:any) {
  const [pokemons, setPokemons] = useState<IParsedPokemon[]>();

  console.log(props.data)
  const {pokemon_v2_pokemonspecies} = props.data
  console.log(pokemon_v2_pokemonspecies)

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

  return (
    <main className='flex flex-col gap-6 items-center p-6 w-full min-h-screen'>
      <SearchBar />

      <div className='grid gap-4 w-full'>
        {pokemons && pokemons.map((pokemon) => <PokemonCard data={pokemon} />)}
      </div>
    </main>
  );
};

export default App
