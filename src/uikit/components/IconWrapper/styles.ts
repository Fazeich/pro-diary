import { ThemeTypes } from 'lib/theme/types';
import styled from 'styled-components';

export const StyledIconWrapper = styled.div<{
  themeType: ThemeTypes;
  cursor?: 'default' | 'pointer' | 'move';
  size: number;
  disabled: boolean;
}>`
  svg {
    transition: all 0.15s ease-in-out;

    color: ${({ theme, themeType, disabled }) =>
      disabled ? theme.secondary.icon : theme?.[themeType].icon};

    &:hover {
      color: ${({ theme, disabled }) => (disabled ? theme.secondary.icon : theme.accent.icon)};
    }

    font-size: ${({ size }) => size}px;

    cursor: ${({ cursor }) => cursor || 'default'};
  }
`;
