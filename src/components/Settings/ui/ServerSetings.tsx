import React from 'react';
import { SettingsBlock } from '../lib/styles';
import { Paragraph } from 'uikit/components';
import { Divider } from 'features';

export const ServerSetings = () => {
  return (
    <SettingsBlock>
      <Paragraph text='Серверные настройки' size={22} />

      <Divider />

      <Paragraph text='В разработке' theme='accent' />
    </SettingsBlock>
  );
};
