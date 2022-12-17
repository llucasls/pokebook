import axios from 'axios';
import { useState, UseStateHook } from '../../helpers';
import './style.css';
import PokemonTypes from '../PokemonTypes';
import PokemonStats from '../PokemonStats';
import Pokemon from '../../types/pokemon';

function PokemonCard({ id }: { id: number }) {
  const [pokemon, setPokemon] = useState({}) as UseStateHook<Pokemon>;
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  axios(url)
    .then((response) => response.data)
    .then(setPokemon);

  if (pokemon.name) return (
    <div className="pokemon-card">
      <div>{ pokemon.id }</div>
      <img src={ pokemon.sprites.front_default } alt={ `${pokemon.name} facing the player` } />
      <div>{ pokemon.name }</div>
      <PokemonTypes types={ pokemon.types } />
      <PokemonStats stats={ pokemon.stats } />
    </div>
  );
  return <div>{ null }</div>;
};

export default PokemonCard;
