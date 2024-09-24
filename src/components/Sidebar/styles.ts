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
