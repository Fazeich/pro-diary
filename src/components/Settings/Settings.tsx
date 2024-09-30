import React from 'react';
import { SettingsWrapper } from './lib/styles';
import { UserSettings } from './ui/UserSettings';
import { ServerSetings } from './ui/ServerSetings';

export const Settings = () => {
  return (
    <SettingsWrapper>
      <UserSettings />
      <ServerSetings />
    </SettingsWrapper>
  );
};
