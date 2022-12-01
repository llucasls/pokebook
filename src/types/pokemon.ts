export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  }
  is_hidden: boolean;
  slot: number;
}

export type PokemonBaseExperience = number;

export interface PokemonForm {
  name: string;
  url: string;
}

export interface PokemonGameIndex {
  game_index: number;
  version: {
    name: string;
    url: string;
  }
}

export type PokemonHeight = number;

interface VersionDetails {
  rarity: number;
  version: {
    name: string;
    url: string;
  }
}

export interface PokemonHeldItem {
  item: {
    name: string;
    url: string;
  }
  version_details: VersionDetails[];
}

export type PokemonId = number;

export type PokemonIsDefault = boolean;

export type PokemonLocationAreaEncounters = string;

interface VersionGroupDetails {
  level_learned_at: number;
  move_learn_method: {
    name: string;
    url: string;
  }
  version_group: {
    name: string;
    url: string;
  }
}

export interface PokemonMove {
  move: {
    name: string;
    url: string;
  }
  version_group_details: VersionGroupDetails[];
}

export type PokemonName = string;

export type PokemonOrder = number;

interface PokemonPastType {
  generation: {
    name: string;
    url: string;
  }
  types: PokemonType[];
}

export interface PokemonSpecies {
  name: string;
  url: string;
}

export interface PokemonSprites {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
  other: {
    dream_world: {
      front_default: string;
      front_female: string | null;
    }
    home: {
      front_default: string;
      front_female: string | null;
      front_shiny: string;
      front_shiny_female: string | null;
    }
    "official-artwork": {
      front_default: string;
    }
  }
  versions: {
    "generation-i": {
      "red-blue": object;
      yellow: object;
    }
    "generation-ii": {
      crystal: object;
      gold: object;
      silver: object;
    }
    "generation-iii": {
      emerald: object;
      "firered-leafgreen": object;
      "ruby-sapphire": object;
    }
    "generation-iv": {
      "diamond-pearl": object;
      "heartgold-soulsilver": object;
      platinum: object;
    }
    "generation-v": {
      "black-white": object;
    }
    "generation-vi": {
      "omegaruby-alphasapphire": object;
      "x-y": object;
    }
    "generation-vii": {
      icons: object;
      "ultra-sun-ultra-moon": object;
    }
    "generation-viii": {
      icons: object;
    }
  }
}

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

export type PokemonWeight = number;

interface Pokemon {
  abilities: PokemonAbility[];
  base_experience: PokemonBaseExperience;
  forms: PokemonForm;
  game_indices: PokemonGameIndex;
  height: PokemonHeight;
  held_items: PokemonHeldItem[];
  id: PokemonId;
  is_default: PokemonIsDefault;
  location_area_encounters: PokemonLocationAreaEncounters;
  moves: PokemonMove[];
  name: PokemonName;
  order: PokemonOrder;
  past_types: PokemonPastType[];
  species: PokemonSpecies;
  sprites: PokemonSprites;
  stats: PokemonStat[];
  types: PokemonType[];
  weight: PokemonWeight;
}

export default Pokemon;
