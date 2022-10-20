export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  }
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}