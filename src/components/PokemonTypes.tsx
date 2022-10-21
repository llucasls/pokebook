import { PokemonType } from '../types/pokemon';

const getTypeName = ({ type }: PokemonType) =>
  <span>{ type.name }</span>;

const PokemonTypes = ({ children }: { children: PokemonType[] }) =>
  <div>{ children.map(getTypeName) }</div>;

export default PokemonTypes;
