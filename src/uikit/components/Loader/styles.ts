import styled from 'styled-components';

export const LoaderWrapper = styled.div<{ margin: number }>`
  width: 100%;
  height: 100%;

  margin: ${({ margin }) => `${margin}px 0`};

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;
