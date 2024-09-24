import { Diary, Footer, Header, Sidebar } from 'components';
import { DiaryLayout } from 'layouts';
import React from 'react';

export const DiaryPage = () => {
  return (
    <DiaryLayout>
      <Sidebar />

      <Header />

      <Diary />

      <Footer />
    </DiaryLayout>
  );
};
