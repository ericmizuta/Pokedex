import { graphql } from '@apollo/client/react/hoc';
import { GET_POKEMON } from './endpoint/queries/queries';

import { useState, useEffect } from 'react';
import PokemonCard from './components/PokemonCard';
import SearchBar from './components/SearchBar';
import { IParsedPokemon } from './interface/ParsedPokemon';
import React from 'react';
import { NetworkStatus } from '@apollo/client';

const App = (props: any) => {
  const { pokemon_v2_pokemonspecies, loading, networkStatus } = props.data;

  const [pokemons, setPokemons] = useState<IParsedPokemon[]>([]);

  console.log(props);

  console.log(pokemons);

  const parseJSON = () => {
    const parsedData = pokemon_v2_pokemonspecies.map((value) => ({
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
    if (networkStatus === NetworkStatus.ready) {
      // debugger;
      parseJSON();
    }
  }, [loading]);

  return (
    <main className='flex flex-col gap-6 items-center p-6 w-full min-h-screen'>
      <SearchBar />

      <div className='grid gap-4 w-full'>
        {pokemons.length !== 0 &&
          pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} data={pokemon} />
          ))}
      </div>
    </main>
  );
};

export default graphql(GET_POKEMON)(App);
