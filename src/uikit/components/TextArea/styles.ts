import TextArea from 'antd/es/input/TextArea';
import styled from 'styled-components';

export const StyledTextArea = styled(TextArea)`
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
`;
