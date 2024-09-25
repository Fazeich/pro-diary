import { ITheme } from './types';

export const darkTheme: ITheme = {
  primary: {
    text: '#fae0b9',
    background: '#1b1e2b',
    border: '#fae0b9',
    shadow: '4px 3px 5px 0 #3d4a5c',
  },
  secondary: {
    text: '#949393',
    background: '#292d3e',
    border: '',
  },
  accent: {
    text: '#229dee',
    background: '#40465e',
    border: '',
  },
};

export const lightTheme: ITheme = {
  primary: {
    text: '#222947',
    background: '#ffffff',
    border: '#1b1e2b',
    shadow: '2px 2px 10px 0px #59595a',
    icon: '#808080',
  },
  secondary: {
    text: '#949393',
    background: '#7bbcfa',
    border: '#1b1e2b',
    shadow: '2px 2px 10px 0px #59595a',
    icon: '#a8a8a8',
  },
  accent: {
    text: '#fd5b5b',
    background: '#a8a8a8',
    border: '#1b1e2b',
    shadow: '2px 2px 10px 0px #59595a',
    icon: '#0084ff',
  },
};
