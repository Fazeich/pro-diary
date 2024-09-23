import { Select } from 'antd';
import styled from 'styled-components';

export const StyledSelect = styled(Select)<{
  width?: string | number;
  fontSize?: number;
}>`
  height: 40px;

  .ant-select-selector {
    background: none !important;

    border-width: 0 !important;

    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom-width: 2px !important;

    box-shadow: none !important;
  }

  .ant-select-selection-item {
    font-size: ${({ fontSize }) => `${fontSize}px`};
  }
  .ant-select-selection-placeholder {
    font-size: ${({ fontSize }) => `${fontSize}px`};
  }
`;
