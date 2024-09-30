import { ITheme } from './types';

export const darkTheme: ITheme = {
  primary: {
    text: '#ffffff',
    background: '#212429',
    border: '#2f3136',
    shadow: '#000000',
    icon: '#cccccc',
    link: '#cccccc',
    hover: '#ffffff3a',
  },
  secondary: {
    text: '#949393',
    background: '#29255a',
    border: '#44474e',
    shadow: '#59595a',
    icon: '#666666',
    link: '#1100ff',
  },
  accent: {
    text: '#cccccc',
    background: '#6f7079',
    border: '#1b1e2b',
    shadow: '#59595a',
    icon: '#7c8ea8',
    link: '#7c8ea8',
  },
};

export const lightTheme: ITheme = {
  primary: {
    text: '#222947',
    background: '#eee4c7',
    border: '#898a87',
    shadow: '#757171',
    icon: '#99997d',
    link: '#99997d',
    hover: '#ffffff3a',
  },
  secondary: {
    text: '#949393',
    background: '#dfe2b8',
    border: '#c0c2a5',
    shadow: '#59595a',
    icon: '#a8a8a8',
    link: '#707070',
  },
  accent: {
    text: '#727467',
    background: '#dfdfdf',
    border: '#1b1e2b',
    shadow: '#59595a',
    icon: '#68695b',
    link: '#68695b',
  },
};
