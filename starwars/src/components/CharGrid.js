import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Character } from './Character';

function CharGrid() {
    const [apiData, setAPIData] = useState([])

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character/')
        .then(response => console.log("api request: ", response))
        .catch(err => console.log("error: ", err))
    }, [])

    return (
        <div>
            
        </div>
    )
};

export default CharGrid;