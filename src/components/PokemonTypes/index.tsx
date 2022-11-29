import { PokemonType } from '../../types/pokemon';

const getTypeName = ({ type }: PokemonType) =>
  <span key={ type.name }>{ type.name }</span>;

const PokemonTypes = ({ types }: { types: PokemonType[] }) =>
  <div>{ types.map(getTypeName) }</div>;

export default PokemonTypes;
