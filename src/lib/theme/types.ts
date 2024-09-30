export interface ITheme {
  primary: IThemeItem;
  secondary: IThemeItem;
  accent: IThemeItem;
}

export type ThemeTypes = 'primary' | 'secondary' | 'accent';

export interface IThemeItem {
  text: string;
  border: string;
  background: string;
  shadow?: string;
  icon?: string;
  link?: string;
  hover?: string;
}
