import React, { useEffect, useState } from 'react';
import { SettingsBlock, FlexWrapper } from '../lib/styles';
import { Paragraph, Select } from 'uikit/components';
import { Divider } from 'features';
import { Button, notification, Switch } from 'antd';
import { useUnit } from 'effector-react';
import { $main, changeSettingsFx } from 'stores/main/main';
import { HOURS } from 'lib/constants/constants';
import { getHourDescription } from 'lib/utils/getHours';
import { ISettings } from 'stores/main/types';

export const UserSettings = () => {
  const { user } = useUnit($main);

  const [settings, setSettings] = useState<Partial<ISettings>>({});

  const { efficiency = null, isUsingEfficiency = false } = settings;

  const isChangingSettings = useUnit(changeSettingsFx.pending);

  const handleApplySettings = async () => {
    await changeSettingsFx({
      userId: user.id,
      settingsData: settings,
    })
      .then(() => {
        notification.success({
          message: 'Настройки успешно изменены!',
        });
      })
      .catch(() => {
        notification.error({
          message: 'Не удалось изменить настройки.\nПопробуйте позже',
        });
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
          disabled={isChangingSettings}
          onChange={(value) => setSettings((prev) => ({ ...prev, isUsingEfficiency: value }))}
        />
      </FlexWrapper>

      <FlexWrapper>
        <Paragraph text='Время для задач' />
        <Select
          value={efficiency}
          onChange={(value) => setSettings((prev) => ({ ...prev, efficiency: value }))}
          disabled={isChangingSettings || !isUsingEfficiency}
          width={125}
          options={HOURS.map((hour) => ({
            value: hour,
            label: `${hour} ${getHourDescription(hour)}`,
          }))}
        />
      </FlexWrapper>

      <Button
        type='primary'
        size='large'
        loading={isChangingSettings}
        onClick={handleApplySettings}
        className='w-fit'
      >
        Сохранить
      </Button>
    </SettingsBlock>
  );
};
