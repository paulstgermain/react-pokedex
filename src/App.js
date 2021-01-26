import { useState, useEffect } from 'react';
import axios from 'axios';
import PokeCardContainer from './components/pokeCard/PokeCardContainer';
import './App.css';

function App() {

  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=1')
    .then(res => {
      setPokeList(res.data.results);
    })
  }, [])

  console.log(pokeList[0])

  return (
    <div className="App">
      <h1>Hello React!</h1>
      <PokeCardContainer data={pokeList[0]}/>
    </div>
  );
  
}

export default App;
