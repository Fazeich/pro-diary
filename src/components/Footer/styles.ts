import { FOOTER_HEIGHT } from "lib/constants/constants";
import styled from "styled-components";

export const StyledFooter = styled.div`
  background-color: ${({ theme }) => theme.primary.background};

  box-shadow: ${({ theme }) => theme.primary.shadow};

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: ${FOOTER_HEIGHT}px;

  gap: 20px;

  padding: 0 20px;

  position: relative;
`;
