import { ITheme } from 'lib/theme/types';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
