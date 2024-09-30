import React from 'react';
import { SettingsBlock } from '../lib/styles';
import { Paragraph } from 'uikit/components';
import { Divider } from 'features';

export const ServerSetings = () => {
  return (
    <SettingsBlock>
      <Paragraph text='В разработке' />

      <Divider />
    </SettingsBlock>
  );
};
