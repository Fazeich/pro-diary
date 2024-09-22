import React, { FC } from "react";
import { useUnit } from "effector-react";
import { $theme } from "stores/theme/theme";
import { darkTheme, lightTheme } from "lib/theme/theme";
import { ThemeProvider } from "styled-components";
import { StyledAppLayout } from "./styles";

interface IProps {
  children: any;
}

export const AppLayout: FC<IProps> = ({ children }) => {
  const { themeType } = useUnit($theme);

  const theme = themeType === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <StyledAppLayout>{children}</StyledAppLayout>
    </ThemeProvider>
  );
};
