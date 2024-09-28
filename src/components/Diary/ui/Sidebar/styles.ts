import { Drawer } from 'antd';
import styled from 'styled-components';

export const StyledDrawer = styled(Drawer)<{ isMobile?: boolean }>`
  .ant-drawer-header {
    background-color: ${({ theme }) => theme.primary.background};

    border-bottom: ${({ theme }) => `2px solid ${theme.secondary.border}`};
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
  display: flex;

  height: 100%;

  ${({ isMobile }) => {
    if (isMobile) {
      return `
        flex-direction: column;
      `;
    }

    return `
      align-items: center;
    `;
  }}

  gap: 20px;
`;
