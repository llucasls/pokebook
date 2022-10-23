import { useState } from '../helpers';
import { useParams } from 'react-router-dom';

function Pokemon() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  fetch(url)
    .then((binData) => binData.json())
    .then(setPokemon);

  if (pokemon.name) return <span>name: { pokemon.name }</span>;
  return <span />;
}

export default Pokemon;
