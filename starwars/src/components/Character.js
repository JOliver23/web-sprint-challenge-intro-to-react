import React, { usestate } from 'react';

const Character = props => {
    const [character] = useState(props.character)
    return (
        <div>
            <h2>character.name</h2>
            <img src="{character.img}" />
            <div className="character-info">
                <p>age</p>
                <p>info</p>
                <p>more info</p>
            </div>
        </div>
    )
};

export default Character;
