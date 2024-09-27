import { Diary, Footer, Header, Sidebar } from 'components';
import { DiaryLayout } from 'layouts';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { resetMainStore } from 'stores/main/main';

export const DiaryPage = () => {
  const token = sessionStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      resetMainStore();

      navigate('/');
    }
  }, []);

  return (
    <DiaryLayout>
      <Sidebar />

      <Header />

      <Diary />

      <Footer />
    </DiaryLayout>
  );
};
