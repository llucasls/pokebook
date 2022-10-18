import { useState as reactUseState, Dispatch, SetStateAction } from 'react';

type UseState<T> = [T, Dispatch<SetStateAction<T>>];

export function useState(initialState: any) {
  return reactUseState(initialState) as UseState<typeof initialState>;
}
