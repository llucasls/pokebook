import { useState } from '../helpers';
import './Card.css';

const Card = ({ id }: { id: number }) => {
  const [pokemon, setPokemon] = useState({});
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  fetch(url)
    .then((binData) => binData.json())
    .then(setPokemon);

  if (pokemon.name) return <div className="card">{ pokemon.name }</div>;
  return <div>{ null }</div>;
};

export default Card;
