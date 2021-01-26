import axios from 'axios';
import React, { useState } from 'react';


export default function PokeCard(props) {


    const [data, setData] = useState([]);

    axios.get(`${props.detail.url}`)
    .then(res => {
        setData(res.data);
        // console.log(res)
    })
    .catch(err => {
        console.log(err);
    })

    // console.log(data);



    return (
        <div>
            <h1>{props.detail.name}</h1>
        </div>
    )
}