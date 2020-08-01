import React, { useState } from 'react';

const Character = props => {
    const [character] = useState(props.character)
    return (
        <div>
            <h2>{character.name}</h2>
            <img src={character.image} />
            <div className="character-info">
                <p>Species: {character.species}</p>
                <p>Gender: {character.gender}</p>
                <p>Location: {character.location.name}</p>
                <p>Status: {character.status}</p>
            </div>
        </div>
    )
};

export default Character;
