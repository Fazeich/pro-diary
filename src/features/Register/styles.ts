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

  background-color: rgba(255, 255, 255, 0.5);

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
