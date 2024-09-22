import { ThemeTypes } from "lib/theme/types";
import styled from "styled-components";

export const StyledParagraph = styled.p<{
  size: number;
  weight: number;
  themeType: ThemeTypes;
}>`
  color: ${({ theme, themeType }) => theme?.[themeType]?.text};

  font-weight: ${({ weight }) => weight};

  font-size: ${({ size }) => `${size}px`};
`;
