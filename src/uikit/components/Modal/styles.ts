import { Modal } from 'antd';
import styled from 'styled-components';

export const StyledModal = styled(Modal)`
  .ant-modal-header {
    background-color: ${({ theme }) => theme.primary.background};

    margin-bottom: 15px;

    .ant-modal-title {
      font-size: 24px;
      color: ${({ theme }) => theme.primary.text};
    }
  }

  .ant-modal-content {
    background-color: ${({ theme }) => theme.primary.background};
  }

  .ant-modal-close {
    svg {
      fill: ${({ theme }) => theme.primary.text};
    }
  }
`;
