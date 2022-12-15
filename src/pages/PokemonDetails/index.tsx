import axios from 'axios';
import { useState } from '../../helpers';
import { useParams, useNavigate } from 'react-router-dom';
import PokemonDetailsCard from '../../components/PokemonDetailsCard';
import './style.css';

function PokemonDetails() {
  const { id } = useParams();
  // const navigate = useNavigate();
  const [pokemon, setPokemon] = useState({});
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  axios(url)
    .then((response) => response.data)
    .then(setPokemon);
    // .catch(() => navigate("/404"));

  if (pokemon.name) return (
    <main>
      <PokemonDetailsCard pokemon={ pokemon } />
    </main>
  );
  return <span />;
}

export default PokemonDetails;
