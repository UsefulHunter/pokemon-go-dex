import React from "react";

export const Pokemon = ({ pokemon }) => {
  return (
    <div className="pokemon">
      <div>
        <div className="pokemon__name">
          <p>
            <span>#{pokemon.number} - </span>
            {pokemon.name}
          </p>
        </div>
        <div className="pokemon__types">
          {pokemon?.types?.map((type) => (
            <p key={`${type}`} className={`pokemon__common pokemon__${type}`}>
              {type}
            </p>
          ))}
        </div>
        <div className="pokemon__meta">
          <span>{pokemon.maxHP} Max HP</span>
          <span>{pokemon.maxCP} Max CP</span>
        </div>
      </div>
      <div className="pokemon__image">
        <img src={pokemon.image} alt={`this is ${pokemon.name}`} />
      </div>
      <div className="pokemon__attacks">
        {pokemon?.attacks?.special.slice(0, 3).map((attack) => (
          <span
            key={`${attack.name}-${attack.damage}-${attack.type}`}
            className={`pokemon__attack pokemon__${attack.type}`}
          >
            {attack.name}
          </span>
        ))}
      </div>
    </div>
  );
};
