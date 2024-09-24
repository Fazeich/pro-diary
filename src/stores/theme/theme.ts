import { createEvent, createStore } from 'effector';
import { IThemeStore } from './types';

export const $theme = createStore<IThemeStore>({
  themeType: 'light',
});

export const switchTheme = createEvent();

$theme.on(switchTheme, (state) => {
  return {
    themeType: state.themeType === 'light' ? 'dark' : 'light',
  };
});
