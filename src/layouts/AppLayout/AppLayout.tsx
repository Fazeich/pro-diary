import React, { FC } from 'react';
import { useUnit } from 'effector-react';
import { darkTheme, lightTheme } from 'lib/theme/theme';
import { ThemeProvider } from 'styled-components';
import { StyledAppLayout } from './styles';
import { $main } from 'stores/main/main';

interface IProps {
  children: any;
}

export const AppLayout: FC<IProps> = ({ children }) => {
  const {
    settings: { theme },
  } = useUnit($main);

  const uiTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={uiTheme}>
      <StyledAppLayout>{children}</StyledAppLayout>
    </ThemeProvider>
  );
};
