import { Input } from "antd";
import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.primary.background};

  box-shadow: ${({ theme }) => theme.primary.shadow};

  display: flex;
  align-items: center;

  height: 60px;

  gap: 10px;

  padding: 0 10px;
`;
