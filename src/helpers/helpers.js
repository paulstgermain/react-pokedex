import axios from "axios";

export function getPokemon(){
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

    let pokemonData;

    axios.get(url)
    .then(res => {
        pokemonData = res.data.results;
    })
    .catch(err => console.log(err));
    return pokemonData;
}

export function getSelectPokemon(url){

    return axios.get(url)
}

export function getImage(id){
    return (
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    )
}

export function compare(a, b){
    const pokeA = a.id;
    const pokeB = b.id;

    let comparison = 0;
    if(pokeA > pokeB) {
        comparison = 1;
    } else if(pokeA < pokeB){
        comparison = -1;
    }
    return comparison;
}