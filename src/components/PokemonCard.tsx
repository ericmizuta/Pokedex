import React from 'react'

const PokemonCard = () => {
    return (
        <div className='w-full bg-slate-200 rounded-lg shadow-md flex flex-col items-center gap-4 p-6'>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Bulbasaur" />

            <div className='flex items-center gap-2'>
                <span>#1</span>
                <span>Bulbasaur</span>
            </div>

            <div className='flex items-center gap-2'>
                <span className='bg-slate-700 text-white p-2 font-semibold rounded'>GRASS</span>
                <span className='bg-slate-700 text-white p-2 font-semibold rounded'>POISON</span>
            </div>
        </div>
    )
}

export default PokemonCard