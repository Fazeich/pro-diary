import React from 'react';
import { LearnModalBodyWrapper } from '../styles';
import { Paragraph } from 'uikit/components';

export const LearnSettings = () => {
  return (
    <LearnModalBodyWrapper>
      <Paragraph text='На странице настроек вы можете настроить как клиентские параметры, так и серверные.' />
      <Paragraph text='К клиентским параметрам можно отнести ограничение эффективности - система не даст добавить задач на большее время, чем указано.' />
      <Paragraph text='К серверным параметрам относятся те действия, которые осуществляются в автоматическом режиме, например, архивация всех задач в указанный срок.' />
    </LearnModalBodyWrapper>
  );
};
