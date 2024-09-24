import React, { useState } from 'react';
import { AuthWrapper, ButtonsWrapper, StyledForm } from './styles';
import { Input, Paragraph } from 'uikit/components';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useUnit } from 'effector-react';
import { authFx } from 'stores/main/main';

export const Auth = () => {
  const navigate = useNavigate();

  const [form] = StyledForm.useForm();

  const isLogging = useUnit(authFx.pending);

  const handleAuth = async () => {
    const { login = '', password = '' } = form.getFieldsValue();

    await authFx({
      login,
      password,
    }).then(() => {
      navigate('/diary');
    });
  };

  return (
    <AuthWrapper>
      <Paragraph text='Авторизация' size={48} />

      <StyledForm form={form} name='auth_form' onFinish={handleAuth}>
        <StyledForm.Item noStyle name='login' rules={[{ required: true }]}>
          <Input placeholder='Логин' disabled={isLogging} />
        </StyledForm.Item>

        <StyledForm.Item noStyle name='password' rules={[{ required: true }]}>
          <Input type='password' placeholder='Пароль' disabled={isLogging} />
        </StyledForm.Item>

        <ButtonsWrapper>
          <StyledForm.Item noStyle>
            <Button size='large' onClick={handleAuth} loading={isLogging} htmlType='submit'>
              Войти
            </Button>
          </StyledForm.Item>
          <Button size='large' type='link' onClick={() => navigate('/reg')}>
            Нет аккаунта?
          </Button>
        </ButtonsWrapper>
      </StyledForm>
    </AuthWrapper>
  );
};
