import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';

function CharGrid() {
    const [apiData, setAPIData] = useState([])

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character/')
        .then(response => setAPIData(response.data.results))
        .catch(err => console.log("error: ", err))
    }, [])

    return (
        <div>
            {apiData.map(characterObj => {
                return <Character key={characterObj.id} character={characterObj} />
            })}
        </div>
    )
};

export default CharGrid;