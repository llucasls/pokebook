import { useState as reactUseState, Dispatch, SetStateAction } from 'react';

type UseStateHook<T> = [T, Dispatch<SetStateAction<T>>];

export function useState(initialState: any) {
  return reactUseState(initialState) as UseStateHook<typeof initialState>;
}

const stats: { [key: string]: string } = {
  hp: 'HP',
  attack: 'Attack',
  defense: 'Defense',
  'special-attack': 'Sp. Atk',
  'special-defense': 'Sp. Def',
  speed: 'Speed',
};

export function getStat(name: string) {
  return stats[name];
}
