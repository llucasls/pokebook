import { useState } from '../helpers';
import './PokemonCard.css';
import PokemonTypes from './PokemonTypes';
import PokemonStats from './PokemonStats';

function PokemonCard({ id }: { id: number }) {
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

export default PokemonCard;
