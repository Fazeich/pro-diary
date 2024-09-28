import React, { useEffect } from 'react';
import { RegisterPageWrapper, ThemeChangerWrapper } from './styles';
import { Register, ThemeChanger } from 'features';
import { useNavigate } from 'react-router-dom';

export const RegisterPage = () => {
  const navigate = useNavigate();

  const token = sessionStorage.getItem('token');

  useEffect(() => {
    if (token) {
      navigate('/diary');
    }
  }, []);

  return (
    <RegisterPageWrapper>
      <ThemeChangerWrapper>
        <ThemeChanger />
      </ThemeChangerWrapper>
      <Register />
    </RegisterPageWrapper>
  );
};
