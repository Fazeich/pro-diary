import { Button, Tabs } from 'antd';
import { HEADER_HEIGHT } from 'lib/constants/constants';
import styled from 'styled-components';
import { Paragraph } from 'uikit/components';

export const StyledHeader = styled.div<{ isMobile: boolean }>`
  background-color: ${({ theme }) => theme.primary.background};

  box-shadow: ${({ theme }) => `2px 0 10px 0 ${theme.primary.shadow}`};

  border: ${({ theme }) => `1px solid ${theme.primary.border}`};

  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: ${HEADER_HEIGHT}px;
  max-height: ${HEADER_HEIGHT}px;

  gap: 20px;

  padding: 0 20px;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  overflow: auto;

  scrollbar-width: thin;

  padding: 10px;
`;

export const NavigationLink = styled(Paragraph)<{ active?: boolean; disabled?: boolean }>`
  user-select: none;
  cursor: pointer;

  transition: all 0.15s ease-in-out;

  color: ${({ theme, active, disabled }) => {
    if (active) {
      return theme.accent.link;
    }

    if (disabled) {
      return theme.secondary.link;
    }

    return theme.primary.link;
  }};

  &:hover {
    color: ${({ theme, disabled }) => {
      if (disabled) {
        return theme.secondary.link;
      }

      return theme.accent.link;
    }};
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;

  align-items: center;
  gap: 20px;
`;
