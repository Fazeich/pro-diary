import React, { useEffect } from 'react';
import { RegisterPageWrapper } from './styles';
import { Register } from 'features/Register/Register';
import { useNavigate } from 'react-router-dom';

export const RegisterPage = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      navigate('/diary');
    }
  }, []);

  return (
    <RegisterPageWrapper>
      <Register />
    </RegisterPageWrapper>
  );
};
