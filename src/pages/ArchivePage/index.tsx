import { Archive } from 'components';
import { DiaryLayout } from 'layouts';
import { Header, Sidebar } from 'components';
import React from 'react';

export const ArchivePage = () => {
  return (
    <DiaryLayout>
      <Header />
      <Sidebar />
      <Archive />
    </DiaryLayout>
  );
};
