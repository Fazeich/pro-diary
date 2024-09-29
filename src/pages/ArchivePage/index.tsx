import { Archive } from 'components';
import { DiaryLayout } from 'layouts';
import { Header } from 'components';
import React from 'react';

export const ArchivePage = () => {
  return (
    <DiaryLayout>
      <Header />
      <Archive />
    </DiaryLayout>
  );
};
