import React from 'react'
import PokemonCard from './components/PokemonCard'
import SearchBar from './components/SearchBar'

const App = () => {
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