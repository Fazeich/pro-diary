import { Drawer } from 'antd';
import styled from 'styled-components';

export const StyledDrawer = styled(Drawer)<{ isMobile?: boolean }>`
  .ant-drawer-content-wrapper {
    /* ${({ isMobile }) => (isMobile ? 'width: 100% !important' : '')}; */
    width: 100% !important;
  }
  width: 100% !important;

  background-color: black;
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
