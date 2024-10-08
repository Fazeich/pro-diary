import React, { FC, useEffect, useMemo } from 'react';
import { useUnit } from 'effector-react';
import { darkTheme, lightTheme } from 'lib/theme/theme';
import { ThemeProvider } from 'styled-components';
import { StyledAppLayout } from './styles';
import { $main, getMeFx } from 'stores/main/main';
import './index.css';
import { $theme } from 'stores/theme/theme';

interface IProps {
  children: any;
}

export const AppLayout: FC<IProps> = ({ children }) => {
  const { user } = useUnit($main);
  const { theme } = useUnit($theme);

  const uiTheme = useMemo(() => {
    switch (theme) {
      case 'light':
        return lightTheme;
      case 'dark':
        return darkTheme;
      // case 'custom':
      //   return customTheme
    }
  }, [theme]);

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
