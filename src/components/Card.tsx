import { useState, getStat } from '../helpers';
import { PokemonType, PokemonStat } from '../types/pokemon';
import './PokemonCard.css';

const getTypeName = ({ type }: PokemonType) =>
  <span>{ type.name }</span>;

const getStatAttributes = ({ stat, base_stat }: PokemonStat) =>
  <div key={ stat.name }>
    <span>{ getStat(stat.name) }: { base_stat }</span>
    <br />
  </div>;

const PokemonTypes = ({ children }: { children: PokemonType[] }) =>
  <div>{ children.map(getTypeName) }</div>;

const PokemonStats = ({ children }: { children: PokemonStat[] }) =>
  <div>{ children.map(getStatAttributes) }</div>;

function Card({ id }: { id: number }) {
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
      <PokemonTypes>{ pokemon.types }</PokemonTypes>
      <PokemonStats>{ pokemon.stats }</PokemonStats>
    </div>
  );
  return <div>{ null }</div>;
};

export default Card;
