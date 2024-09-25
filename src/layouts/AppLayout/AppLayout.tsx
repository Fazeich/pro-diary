import React, { FC, useEffect } from 'react';
import { useUnit } from 'effector-react';
import { darkTheme, lightTheme } from 'lib/theme/theme';
import { ThemeProvider } from 'styled-components';
import { StyledAppLayout } from './styles';
import { $main, getMeFx } from 'stores/main/main';

interface IProps {
  children: any;
}

export const AppLayout: FC<IProps> = ({ children }) => {
  const { user } = useUnit($main);
  const theme = localStorage.getItem('theme');

  const uiTheme = theme === 'light' ? lightTheme : darkTheme;

  useEffect(() => {
    if (!user?.id) {
      getMeFx();
    }
  }, [user?.id]);

  return (
    <ThemeProvider theme={uiTheme}>
      <StyledAppLayout>{children}</StyledAppLayout>
    </ThemeProvider>
  );
};
