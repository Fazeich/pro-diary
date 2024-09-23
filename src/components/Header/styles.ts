import { HEADER_HEIGHT } from "lib/constants/constants";
import styled from "styled-components";

export const StyledHeader = styled.div<{ isMobile: boolean }>`
  background-color: ${({ theme }) => theme.primary.background};

  box-shadow: ${({ theme }) => theme.primary.shadow};

  display: flex;
  align-items: center;

  height: ${({ isMobile }) =>
    isMobile ? HEADER_HEIGHT - 20 : HEADER_HEIGHT}px;

  gap: 20px;

  padding: 20px;
`;
