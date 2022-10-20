import { useState, getStat } from '../helpers';
import { PokemonType, PokemonStat } from '../types/pokemon';
import './Card.css';

const renderPokemonTypes = (types: PokemonType[]) =>
  types.map(({ type }, index) =>
    <span key={ index }>{ type.name }</span>);

const Card = ({ id }: { id: number }) => {
  const [pokemon, setPokemon] = useState({});
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  fetch(url)
    .then((binData) => binData.json())
    .then(setPokemon);

  if (pokemon.name) return (
    <div className="card">
      <div>{ pokemon.id }</div>
      <img src={ pokemon.sprites.front_default } alt={ `${pokemon.name} facing the player` } />
      <div>{ pokemon.name }</div>
      <div>{ renderPokemonTypes(pokemon.types) }</div>
      <div>
        { pokemon.stats.map(({ base_stat, stat }: PokemonStat) => <><span>{getStat(stat.name)}: {base_stat}</span><br /></>) }
      </div>
    </div>
  );
  return <div>{ null }</div>;
};

export default Card;
