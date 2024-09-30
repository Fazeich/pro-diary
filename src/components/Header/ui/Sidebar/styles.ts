import { Drawer } from 'antd';
import styled from 'styled-components';

export const StyledDrawer = styled(Drawer)<{ isMobile?: boolean }>`
  .ant-drawer-header {
    background-color: ${({ theme }) => theme.primary.background};

    border-bottom: ${({ theme }) => `2px solid ${theme.secondary.border}`};

    .ant-drawer-close {
      svg {
        fill: ${({ theme }) => theme.primary.text};
      }
    }
  }

  .ant-drawer-body {
    background-color: ${({ theme }) => theme.primary.background};
  }

  .ant-drawer-title {
    color: ${({ theme }) => theme.primary.text};

    font-size: 18px;
  }
`;

export const StyledSidebarWrapper = styled.div<{ isMobile?: boolean }>`
  height: 100%;
  width: 100%;

  display: flex;

  align-items: center;
  justify-content: center;

  flex-direction: column;

  gap: 50px;

  p {
    cursor: pointer;

    transition: all 0.15s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.accent.link};
    }
  }
`;
