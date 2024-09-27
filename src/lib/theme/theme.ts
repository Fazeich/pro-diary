import { ITheme } from './types';

export const darkTheme: ITheme = {
  primary: {
    text: '#ffffff',
    background: '#2c3042',
    border: '#fae0b9',
    shadow: '4px 3px 5px 0 #3d4a5c',
    icon: '#cccccc',
    link: '#7c8ea8',
  },
  secondary: {
    text: '#949393',
    background: '#29255a',
    border: '#898989',
    shadow: '2px 2px 10px 0px #59595a',
    icon: '#666666',
    link: '#1100ff',
  },
  accent: {
    text: '#cccccc',
    background: '#6f7079',
    border: '#1b1e2b',
    shadow: '2px 2px 10px 0px #59595a',
    icon: '#86a0f5',
    link: '#c5c5c5',
  },
};

export const lightTheme: ITheme = {
  primary: {
    text: '#222947',
    background: '#ffffff',
    border: '#1b1e2b',
    shadow: '2px 2px 10px 0px #59595a',
    icon: '#666666',
    link: '#44a4fd',
  },
  secondary: {
    text: '#949393',
    background: '#7bbcfa',
    border: '#898989',
    shadow: '2px 2px 10px 0px #59595a',
    icon: '#a8a8a8',
    link: '#91caff',
  },
  accent: {
    text: '#fd5b5b',
    background: '#dfdfdf',
    border: '#1b1e2b',
    shadow: '2px 2px 10px 0px #59595a',
    icon: '#0084ff',
    link: '#0059ff',
  },
};
