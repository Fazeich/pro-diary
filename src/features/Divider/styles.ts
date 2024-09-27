import { Divider } from 'antd';
import styled from 'styled-components';

export const StyledDivider = styled(Divider)`
  background-color: ${({ theme }) => theme.secondary.border};
`;
