import { Diary, Footer, Header } from 'components';
import { WelcomeModal } from 'components';
import { LearnModal } from 'components/LearnModal/LearnModal';
import { DiaryLayout } from 'layouts';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { resetMainStore } from 'stores/main/main';

export const DiaryPage = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      resetMainStore();

      navigate('/');
    }
  }, []);

  return (
    <DiaryLayout>
      <Header />

      <WelcomeModal />
      <LearnModal />

      <Diary />

      <Footer />
    </DiaryLayout>
  );
};
