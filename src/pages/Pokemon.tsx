import axios from 'axios';
import { useState } from '../helpers';
import { useParams } from 'react-router-dom';

function Pokemon() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  axios(url)
    .then((response) => response.data)
    .then(setPokemon);

  if (pokemon.name) return <span>name: { pokemon.name }</span>;
  return <span />;
}

export default Pokemon;
