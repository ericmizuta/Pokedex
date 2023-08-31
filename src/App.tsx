import react from "react";
import { graphql } from '@apollo/client/react/hoc';
import {GET_POKEMON} from './endpoint/queries/queries'

function App(props:any) {
  console.log(props.data)
  const {pokemon_v2_pokemonspecies} = props.data
  console.log(pokemon_v2_pokemonspecies)

  return (
    <>aaa</>
  )
}

// export default App

export default graphql(GET_POKEMON)(App);
