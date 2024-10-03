import React from 'react';
import { SettingsWrapper } from './lib/styles';
import { UserSettings } from './ui/UserSettings';
import { ServerSetings } from './ui/ServerSetings';
import { useUnit } from 'effector-react';
import { $main } from 'stores/main/main';

export const Settings = () => {
  const { isMobile } = useUnit($main);

  return (
    <SettingsWrapper isMobile={isMobile}>
      <UserSettings />
      <ServerSetings />
    </SettingsWrapper>
  );
};
