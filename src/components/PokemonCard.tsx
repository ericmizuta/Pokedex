import React from 'react';
import { IParsedPokemon } from '../interface/ParsedPokemon';

interface IProps {
  data: IParsedPokemon;
}

const PokemonCard = ({ data }: IProps) => {
  return (
    <div className='w-full bg-slate-200 rounded-lg shadow-md flex flex-col items-center gap-4 p-6'>
      <img src={data.sprite} alt='Bulbasaur' />

      <div className='flex items-center gap-1'>
        <span className=''>#{data.id}</span>
        <span className='capitalize font-semibold text-xl'>{data.name}</span>
      </div>

      <div className='flex items-center gap-2'>
        {data.types.map((type) => (
          <span className='bg-slate-700 text-white p-2 font-semibold rounded uppercase'>
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
