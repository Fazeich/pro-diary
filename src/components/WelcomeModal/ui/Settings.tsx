import React, { FC } from 'react';
import { FlexWrapper, SettingsWrapper } from '../styles';
import { Paragraph, Select } from 'uikit/components';
import { Switch } from 'antd';
import { IUserSettings } from 'stores/main/types';
import { getHourDescription } from 'lib/utils/getHours';
import { HOURS } from 'lib/constants/constants';

interface IProps {
  settings: Partial<IUserSettings>;
  setSettings: React.Dispatch<React.SetStateAction<Partial<IUserSettings>>>;
}

export const Settings: FC<IProps> = ({ settings, setSettings }) => {
  const { efficiency = null, isUsingEfficiency = false } = settings;

  return (
    <SettingsWrapper>
      <FlexWrapper>
        <Paragraph text='Эффективность' />
        <Switch
          value={isUsingEfficiency}
          onChange={(value) => setSettings((prev) => ({ ...prev, isUsingEfficiency: value }))}
        />
      </FlexWrapper>

      <FlexWrapper>
        <Paragraph text='Время для задач' />
        <Select
          value={efficiency}
          onChange={(value) => setSettings((prev) => ({ ...prev, efficiency: value }))}
          disabled={!isUsingEfficiency}
          width={125}
          options={HOURS.map((hour) => ({
            value: hour,
            label: `${hour} ${getHourDescription(hour)}`,
          }))}
        />
      </FlexWrapper>
    </SettingsWrapper>
  );
};
