import { PokemonStat } from '../types/pokemon';
import { getStat } from '../helpers';

const getStatAttributes = ({ stat, base_stat }: PokemonStat) =>
  <div key={ stat.name }>
    <span>{ getStat(stat.name) }: { base_stat }</span>
    <br />
  </div>;

const PokemonStats = ({ children }: { children: PokemonStat[] }) =>
  <div>{ children.map(getStatAttributes) }</div>;

export default PokemonStats;
