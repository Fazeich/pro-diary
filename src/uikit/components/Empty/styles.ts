import { Empty } from 'antd';
import styled from 'styled-components';

export const StyledEmpty = styled(Empty)`
  .ant-empty-description {
    font-size: 18px;

    color: ${({ theme }) => theme.primary.text};
  }
`;
