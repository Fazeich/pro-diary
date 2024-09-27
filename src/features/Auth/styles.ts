import { Form } from 'antd';
import styled from 'styled-components';

export const AuthWrapper = styled.div`
  width: 750px;
  height: fit-content;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 20px;

  background-color: ${({ theme }) => theme.accent.background};

  padding: 40px;

  border-radius: 15px;

  box-shadow: ${({ theme }) => theme.primary.shadow};
`;

export const StyledForm = styled(Form)`
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 20px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
