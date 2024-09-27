import { ThemeTypes } from 'lib/theme/types';
import styled from 'styled-components';

export const StyledParagraph = styled.p<{
  size: number;
  weight: number;
  themeType: ThemeTypes;
  noColor: boolean;
}>`
  color: ${({ theme, themeType, noColor }) => {
    if (noColor) {
      return '#222947';
    }

    return theme?.[themeType]?.text;
  }};

  font-weight: ${({ weight }) => weight};

  font-size: ${({ size }) => `${size}px`};
`;
