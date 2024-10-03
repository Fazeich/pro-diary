import React from 'react';
import { Paragraph } from 'uikit/components';
import { LearnModalBodyWrapper } from '../styles';

export const Welcome = () => {
  return (
    <LearnModalBodyWrapper>
      <Paragraph text='Рады приветствовать вас в ProDiary!' />
      <Paragraph text='Желаете ли вы пройти короткое обучение?' />
    </LearnModalBodyWrapper>
  );
};
