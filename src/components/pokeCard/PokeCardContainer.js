import React from 'react';
import PokeCard from './PokeCard';

export default function PokeCardContainer(props) {

    return (
        <div>

        <PokeCard key={props.name} detail={props.data} />

        </div>
    )
}