import React from 'react';
import { LearnModalBodyWrapper } from '../styles';
import { Paragraph } from 'uikit/components';

export const LearnArchive = () => {
  return (
    <LearnModalBodyWrapper>
      <Paragraph text='Каждые сутки в 00:00 (настраивается) все активные задачи архивируются.' />
      <Paragraph text='В архиве задачи делятся на завершённые и незавершённые.' />
      <Paragraph text='В течение следующих суток задачи можно вернуть обратно для выполнения.' />
      <Paragraph text='Перед следующей архивацией весь список архивных задач очищается (настраивается)' />
    </LearnModalBodyWrapper>
  );
};
