import { createEvent, createStore } from 'effector';
import { IThemeStore, ThemeType } from './types';

const initialState: IThemeStore = {
  theme: (localStorage.getItem('theme') as ThemeType) || 'dark',
};

export const $theme = createStore<IThemeStore>(initialState);

export const changeTheme = createEvent<ThemeType>();

$theme.on(changeTheme, (state, payload) => {
  localStorage.setItem('theme', payload);

  return {
    ...state,
    theme: payload,
  };
});
