import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokeCard from './PokeCard';

export default function PokeCardContainer(props) {

   console.log(props.data)

    return (
        <div>
            {
                  /* props.data.map(pokemon => {
                    <PokeCard key={pokemon.name} details={pokemon} />
                })     */
            }
        </div>
    )
}
