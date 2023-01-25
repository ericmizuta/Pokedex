export interface PokemonV2Pokemoncolor {
  name: string;
}

export interface PokemonV2Type {
  name: string;
}

export interface PokemonV2Pokemontypes {
  pokemon_v2_type: PokemonV2Type;
}

export interface PokemonV2Pokemonsprites {
  sprites: string;
}

export interface PokemonV2Pokemons {
  pokemon_v2_pokemontypes: PokemonV2Pokemontypes[];
  pokemon_v2_pokemonsprites: PokemonV2Pokemonsprites[];
}

export interface PokemonV2Pokemonspecies {
  id: number;
  name: string;
  pokemon_v2_pokemoncolor: PokemonV2Pokemoncolor;
  pokemon_v2_pokemons: PokemonV2Pokemons[];
}

export interface Data {
  pokemon_v2_pokemonspecies: PokemonV2Pokemonspecies[];
}

export interface PokemonHome {
  data: Data;
}
