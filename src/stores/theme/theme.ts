import { createEvent, createStore } from 'effector';
import { IThemeStore, ThemeType } from './types';

export const $theme = createStore<IThemeStore>({
  theme: 'dark',
});

export const changeTheme = createEvent<ThemeType>();

$theme.on(changeTheme, (state, payload) => {
  return {
    ...state,
    theme: payload,
  };
});
