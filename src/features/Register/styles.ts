import { Form } from 'antd';
import styled from 'styled-components';

export const RegisterWrapper = styled.div`
  width: 750px;
  height: fit-content;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 20px;

  background-color: ${({ theme }) => theme.primary.background};

  border: ${({ theme }) => `2px solid ${theme.primary.border}`};

  padding: 40px;

  border-radius: 15px;

  box-shadow: ${({ theme }) => `-2px -2px 20px 0 ${theme.primary.shadow}`};
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
