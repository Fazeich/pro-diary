import styled from 'styled-components';

export const StyledAppLayout = styled.div`
  min-height: 100vh;

  background: ${({ theme }) =>
    `linear-gradient(0.35turn, ${theme.primary.background}, ${theme.secondary.background})`};

  .ant-dropdown {
    border: 3px solid red;
  }
  .ant-dropdown.ant-dropdown-menu {
    background-color: ${({ theme }) => theme.primary.background} !important;
  }
  ul.ant-dropdown-menu {
    background-color: ${({ theme }) => theme.primary.background} !important;
  }
`;
