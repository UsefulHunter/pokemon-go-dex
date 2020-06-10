import React from 'react';

export const Pokemon = ({ pokemon }) => {
  return (
    <div className="pokemon">
      <div className="pokemon__name">
        <p>{pokemon.name}</p>
      </div>
      <div className="pokemon__types">
        {pokemon?.types?.map((type) => (
          <span className={`pokemon__${type}`}>{type}</span>
        ))}
      </div>
      <div className="pokemon__meta">
        <span>{pokemon.maxHP}Max HP </span>
        <span>{pokemon.maxHP}Max CP</span>
      </div>
      <div className="pokemon__image">
        <img src={pokemon.image} alt={`this is ${pokemon.name}`} />
      </div>
      <div className="pokemon__attacks">
        {pokemon?.attacks?.special.slice(0, 3).map((attack) => (
          <div>
            <p
              className={`pokemon__${attack.type}`}
              key={`${attack.type}-${attack.damage}`}
            >
              {attack.type}
            </p>
            <span key={`${attack.name}-${attack.damage}`}>
              {attack.name}
              {attack.damage}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
