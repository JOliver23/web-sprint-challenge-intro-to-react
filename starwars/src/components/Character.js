import React, { useState } from 'react';
import { NameTag, CardDiv, RoundImg, Txter } from './StyledComps';

const Character = props => {
    const [character] = useState(props.character)
    return (
        <CardDiv>
            <NameTag>{character.name}</NameTag>
            <RoundImg src={character.image} />
            <div className="character-info">
                <Txter type="every">Species: {character.species}</Txter>
                <Txter type="other">Gender: {character.gender}</Txter>
                <Txter type="every">Location: {character.location.name}</Txter>
                <Txter type="other">Status: {character.status}</Txter>
            </div>
        </CardDiv>
    )
};

export default Character;
