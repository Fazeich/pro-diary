import React, { useEffect, useState } from 'react';
import { SettingsBlock, FlexWrapper } from '../lib/styles';
import { Paragraph, Select } from 'uikit/components';
import { Divider } from 'features';
import { Button, Switch } from 'antd';
import { useUnit } from 'effector-react';
import { $main, changeSettingsFx } from 'stores/main/main';
import { HOURS } from 'lib/constants/constants';
import { getHourDescription } from 'lib/utils/getHours';
import { ISettings } from 'stores/main/types';

export const UserSettings = () => {
  const { user } = useUnit($main);

  const [settings, setSettings] = useState<Partial<ISettings>>({});

  const { efficiency = null, isUsingEfficiency = false } = settings;

  const isChangedSettings = useUnit(changeSettingsFx.pending);

  const handleApplySettings = async () => {
    await changeSettingsFx({
      userId: user.id,
      settingsData: settings,
    });
  };

  useEffect(() => {
    setSettings(user.settings);
  }, [user.settings]);

  return (
    <SettingsBlock>
      <Paragraph text='Пользовательские настройки' />

      <Divider />

      <FlexWrapper>
        <Paragraph text='Эффективность' />
        <Switch
          value={isUsingEfficiency}
          disabled={isChangedSettings}
          onChange={(value) => setSettings((prev) => ({ ...prev, isUsingEfficiency: value }))}
        />
      </FlexWrapper>

      <FlexWrapper>
        <Paragraph text='Текущая эффективность' />
        <Select
          value={efficiency}
          onChange={(value) => setSettings((prev) => ({ ...prev, efficiency: value }))}
          disabled={isChangedSettings || !isUsingEfficiency}
          width={125}
          options={HOURS.map((hour) => ({
            value: hour,
            label: `${hour} ${getHourDescription(hour)}`,
          }))}
        />
      </FlexWrapper>

      <Button
        type='primary'
        style={{ width: 'fit-content' }}
        size='large'
        loading={isChangedSettings}
        onClick={handleApplySettings}
      >
        Сохранить
      </Button>
    </SettingsBlock>
  );
};
