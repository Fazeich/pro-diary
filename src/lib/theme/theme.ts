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
    background: '#fae0b9',
    border: '#1b1e2b',
    shadow: '2px 2px 3px 0 #59595a',
  },
  secondary: {
    text: '#949393',
    background: '#ffc23e',
    border: '',
  },
  accent: {
    text: '#ff6434',
    background: '',
    border: '',
  },
};
