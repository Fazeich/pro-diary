import React from 'react';
import { Paragraph } from 'uikit/components';
import { LearnModalBodyWrapper } from '../styles';

export const LearnMain = () => {
  return (
    <LearnModalBodyWrapper>
      <Paragraph text='На главной странице вы можете создавать задачи, менять их важность и длительность.' />
      <Paragraph text='Система сама будет сортировать задачи таким образом, чтобы первыми были самые важные и короткие, тогда как последние будут всегда самые длинные и неважные' />
    </LearnModalBodyWrapper>
  );
};
