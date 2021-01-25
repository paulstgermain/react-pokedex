import { useState, useEffect } from 'react';
// import axios from 'axios';
import { compare } from './helpers/helpers';
import PokeCard from './components/pokeCard/PokeCard';
import PokeCardContainer from './components/pokeCard/PokeCardContainer';
import './App.css';
import axios from 'axios';


function App() {

  const [pokeList, setPokeList] = useState([]);
  const [pokeDetails, setPokeDetails] = useState([]);


  // VVV An attempt to skip the first call altogether so I could see if I could keep each piece of character
  // data for all 151 pokemon in state to be used properly. Now sometimes sets 151 piece of data to state...
  // and sometimes only 2-113. VVV
  
  useEffect(() => {
    let temp = pokeDetails;
    for(let i = 1; i <= 151; i++){
      axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(res => {
        temp.push(res.data);
      })
    }
    setPokeDetails(temp)
  
    return temp = [];
  }, []);

  // VVV Original attempt - pull initial information for each 151 pokemon and set them to 'pokeList' slice of state
  // Eventually combined both API calls into one useEffect to try and stop accumulation and lack of access to 
  // 'pokeList' from my second axios call. VVV

  // Get initial list
  // useEffect(() => {
  //   let temp = [];
  //   axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
  //   .then(res => {
  //     setPokeList(res.data.results);
  //     [...pokeList].map(pokemon => {
  //       console.log(pokemon.url)
  //       axios.get(`${pokemon.url}`)
        
  //       .then(res => {
  //         temp.push(res.data);
  //       })
  //     })
  //     setPokeDetails([...temp]);
  //   })
  // }, [])

  // VVV That second API call, originally standing on it's own in a separate useEffect. VVV

  // useEffect(() => {
  //   let temp = [];
  //   [...pokeList].map(pokemon => {
  //     axios.get(pokemon.url)
  //     .then(res => {
  //       temp.push(res.data);
  //     })
  //   })
  //   setPokeDetails([...temp]);
  // }, [])

  // VVV A function I was going to try and call rather than making the axios call directly in my useEffect - 
  // Originally a helper function which was going to be imported from 'helpers.js' VVV

  // function getPokeData(pokemon){
  //   let url = pokemon.url;

  //   axios.get(url)
  //   .then(res => {
  //     pokeList.push(res.data);
  //   })
  // }

  // VVV Trying to set each completed card in an array to be rendered altogether within my components return. VVV

  // const renderedCards = [...pokeDetails].map(pokemon => {
  //   <PokeCard key={pokemon.name} details={pokemon} />
  // });

  // VVV Eventually, the method I have up top worked on occasion... But completely disorganized the data in the process
  // This was my attempt to organize it, using a function, 'compare', I imported from 'helpers'. VVV

  // let sortedDetails = [...pokeDetails].sort(compare);
  // console.log(sortedDetails);

  return (
    <div className="App">
      <h1>Hello React!</h1>
      {/* <div>{
        [...pokeDetails].map(pokemon => {
    return <PokeCard key={pokemon.name} details={pokemon} />
  })}
  </div> */}
    </div>
  );
  
}



export default App;
