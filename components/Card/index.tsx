import React from 'react'

const Card = ({character}:any) => {
    return (
        <div>
            <img src={character.image} width={300} height={300} className="image" alt="character" />
            <div className="description">
                <p className="name">{character.name}</p>
                <p className="status">
                    {character.status} - {character.species}
                </p>
            </div>
        </div>
    )
}

export default Card
