import { Auth } from 'features';
import React, { useEffect } from 'react';
import { AuthPageWrapper } from './styles';
import { useNavigate } from 'react-router-dom';

export const AuthPage = () => {
  const navigate = useNavigate();

  const token = sessionStorage.getItem('token');

  useEffect(() => {
    if (token) {
      navigate('/diary');
    }
  }, []);

  return (
    <AuthPageWrapper>
      <Auth />
    </AuthPageWrapper>
  );
};
