import React, { useState } from 'react';
import { RegisterWrapper, ButtonsWrapper, StyledForm } from './styles';
import { Input, Paragraph } from 'uikit/components';
import { Button, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useUnit } from 'effector-react';
import { registerFx } from 'stores/main/main';

export const Register = () => {
  const navigate = useNavigate();

  const isRegistering = useUnit(registerFx.pending);

  const [form] = StyledForm.useForm();

  const handleRegister = async () => {
    const { login = '', password = '' } = form.getFieldsValue();

    await registerFx({
      login,
      password,
    })
      .then(() => {
        navigate('/');
      })
      .catch((req) => {
        const errorMessage = req?.response?.data?.message;

        notification.error({
          message: errorMessage || 'Не удалось зарегистрироваться. \nПопробуйте попытку позже',
        });
      });
  };

  return (
    <RegisterWrapper>
      <Paragraph text='Регистрация' size={48} />

      <StyledForm form={form} name='register_form' onFinish={handleRegister}>
        <StyledForm.Item noStyle name='login' rules={[{ required: true, min: 6 }]}>
          <Input placeholder='Логин' disabled={isRegistering} />
        </StyledForm.Item>

        <StyledForm.Item noStyle name='password' rules={[{ required: true, min: 7 }]}>
          <Input type='password' placeholder='Пароль' disabled={isRegistering} />
        </StyledForm.Item>

        <ButtonsWrapper>
          <StyledForm.Item noStyle>
            <Button size='large' loading={isRegistering} htmlType='submit'>
              Регистрация
            </Button>
          </StyledForm.Item>
          <Button size='large' type='link' onClick={() => navigate('/')} disabled={isRegistering}>
            Уже есть аккаунт?
          </Button>
        </ButtonsWrapper>
      </StyledForm>
    </RegisterWrapper>
  );
};
