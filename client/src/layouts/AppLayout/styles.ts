import styled from 'styled-components';

export const StyledAppLayout = styled.div`
  min-height: 100vh;

  background: ${({ theme }) =>
    `linear-gradient(0.35turn, ${theme.primary.background}, ${theme.secondary.background})`};
`;
