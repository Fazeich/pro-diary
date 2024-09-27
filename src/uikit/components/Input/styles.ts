import { Input } from 'antd';
import styled from 'styled-components';

export const StyledInput = styled(Input)`
  height: 40px;

  background: none !important;

  border-width: 0 !important;

  border-bottom-right-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
  border-bottom-width: 2px !important;

  box-shadow: none !important;

  color: ${({ theme }) => theme.primary.text} !important;

  &::placeholder {
    color: ${({ theme }) => theme.secondary.text} !important;
  }

  width: ${({ width }) => {
    if (width) {
      switch (typeof width) {
        case 'string':
          return width;
        case 'number':
          return `${width}px`;
      }
    }

    return '100%';
  }};
`;
