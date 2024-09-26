import { Tabs } from 'antd';
import styled from 'styled-components';

export const ArciveWrapper = styled.div``;

export const StyledTabs = styled(Tabs)`
  font-size: 18px;

  .ant-tabs-tab {
    font-size: 18px;
  }

  .ant-tabs-nav {
    margin-bottom: 0;
  }

  .ant-tabs-nav-list {
    padding: 0 20px;
  }

  .ant-tabs-content {
    padding: 0 20px;
  }
`;

export const DiaryItemWrapper = styled.div`
  display: flex;
  align-items: center;

  height: 65px;
`;
