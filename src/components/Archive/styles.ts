import { Tabs } from 'antd';
import styled from 'styled-components';

export const ArciveWrapper = styled.div``;

export const StyledTabs = styled(Tabs)`
  font-size: 18px;

  .ant-tabs-tab {
    font-size: 18px;
  }

  .ant-tabs-tab-btn {
    color: ${({ theme }) => theme.primary.text};
  }

  .ant-tabs-nav {
    margin-bottom: 0;
  }

  .ant-tabs-nav-list {
    padding: 0 20px;
  }
`;

export const DiaryItemWrapper = styled.div`
  display: flex;
  align-items: center;

  min-height: 65px;

  padding: 5px 20px;

  cursor: pointer;

  transition: all 0.15s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.primary.hover};
  }
`;
