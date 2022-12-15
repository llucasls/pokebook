import './style.css';
import PokemonTypes from '../PokemonTypes';
import PokemonStats from '../PokemonStats';

function PokemonDetailsCard({ pokemon }: any) {
  if (pokemon.name) return (
    <div className="pokemon-details-card">
      <div>{ pokemon.id }</div>
      <img src={ pokemon.sprites.front_default } alt={ `${pokemon.name} facing the player` } />
      <div>{ pokemon.name }</div>
      <PokemonTypes types={ pokemon.types } />
      <PokemonStats stats={ pokemon.stats } />
    </div>
  );
  return <div>{ null }</div>;
};

export default PokemonDetailsCard;
