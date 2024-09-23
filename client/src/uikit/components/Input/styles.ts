import { Input } from 'antd';
import styled from 'styled-components';

export const StyledInput = styled(Input)`
  height: 40px;

  background: none !important;

  border-width: 0;

  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-bottom-width: 2px;

  box-shadow: none !important;

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
